# v3_abs_21_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_abs_21",
#     "name": "예현",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "50s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-11",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2026-05-16",
#       "category": "pet",
#       "text": "User has a Golden Retriever named Max."
#     },
#     {
#       "date": "2026-05-11",
#       "category": "diet",
#       "text": "User is vegan."
#     },
#     {
#       "date": "2026-04-18",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Ethiopian."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-02",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 문학 작품에서 산스크리트어 어휘가 거의 고려되지 않는 곳은 어 | S2 아, 카페 어니언… 거기 가보고 싶었는데, 혹시 지금 거기가  | S3 음… 북촌 한옥마을 근처에 조용한 곳이 있으면 좋겠어요. | S4 아, 알겠습니다. 정말 고마워요, 테아르.

     0.00s  user  발화 시작: 문학 작품에서 산스크리트어 어휘가 거의 고려되지 않는 곳은 어디인가요?
     3.71s  <ret> 발화 (turn1 첫 프레임)
     3.94s  agent 발화 시작: <ret> 죄송해요, 그 질문에 대한 정보를 찾을 수 없었어요. [sigh] 혹시 다른 걸 여쭤보실까요?
     3.94s  user  발화 끝
     4.85s  ⚡SPAN 주입 [d'=1.14s / d_lead=5.70s]: (no information found)
     9.64s  user  발화 시작: 네.
     9.64s  agent 발화 끝
    10.08s  user  발화 시작: 아, 네. 그럼 서울에서 가장 인기 있는 카페를 알려주세요.
    10.08s  user  발화 끝
    14.02s  agent 발화 시작: 맞아요.
    14.02s  user  발화 끝
    14.24s  <ret> 발화 (turn5 첫 프레임)
    14.46s  agent 발화 시작: <ret> 서울에서 가장 인기 있는 카페는 안국역에 있는 '카페 어니언 안국'이에요. 평점은 사 점 오점이고
    14.46s  agent 발화 끝
    14.83s  ⚡SPAN 주입 [d'=0.58s / d_lead=8.76s]: (tool result) {"restaurants": [{"name": "Cafe Onion Anguk", "address":
    23.22s  user  발화 시작: 아, 카페 어니언… 거기 가보고 싶었는데, 혹시 지금 거기가 얼마나 붐비는지 알 수 있을까요?
    23.22s  agent 발화 끝
    29.13s  <ret> 발화 (turn7 첫 프레임)
    29.36s  agent 발화 시작: <ret> 네, '카페 어니언 안국'은 지금 사십오분에서 육십분 정도 대기 시간이 있어요.
    29.36s  user  발화 끝
    30.36s  ⚡SPAN 주입 [d'=1.23s / d_lead=4.82s]: (tool result) {"restaurants": [{"name": "Cafe Onion Anguk", "address":
    34.18s  user  발화 시작: 정말요?
    34.18s  agent 발화 끝
    34.62s  user  발화 시작: 으음… 기다리려면 좀 힘들 것 같네요. 그럼 다른 조용한 카페는 없을까요?
    34.62s  user  발화 끝
    39.43s  agent 발화 시작: 네.
    39.43s  user  발화 끝
    39.87s  agent 발화 시작: 조용한 카페를 찾으시는군요. 어떤 분위기를 좋아하세요? 아니면 특정 구역을 선호하시나요?
    39.87s  agent 발화 끝
    44.25s  user  발화 시작: 음… 북촌 한옥마을 근처에 조용한 곳이 있으면 좋겠어요.
    44.25s  agent 발화 끝
    47.24s  <ret> 발화 (turn13 첫 프레임)
    47.76s  agent 발화 시작: <ret> 북촌 한옥마을 근처에는 '뜨란'이라는 카페가 있어요. 평점은 사 점 삼점이고, 조용한 분위기로 알
    47.76s  user  발화 끝
    48.66s  ⚡SPAN 주입 [d'=1.41s / d_lead=6.13s]: (tool result) {"restaurants": [{"name": "Tteuran", "address": "10, Buk
    53.89s  user  발화 시작: 뜨란… 이름이 예쁘네요. 거기 가는 길을 알려줄 수 있을까요?
    53.89s  agent 발화 끝
    57.84s  agent 발화 시작: 아.
    57.84s  user  발화 끝
    58.24s  <ret> 발화 (turn16 첫 프레임)
    58.28s  agent 발화 시작: <ret> 현재 위치에서 북쪽으로 이동해서 북촌 사길로 좌회전하면, 오른쪽에 '뜨란'이 보일 거예요.
    58.28s  agent 발화 끝
    58.54s  ⚡SPAN 주입 [d'=0.30s / d_lead=4.82s]: (tool result) {"directions": "Head north on current street, turn left 
    63.10s  user  발화 시작: 아, 알겠습니다. 정말 고마워요, 테아르.
    63.10s  agent 발화 끝
    65.29s  agent 발화 시작: 천만에요. 도움이 되었다니 기쁘네요.
    65.29s  user  발화 끝
    67.04s  user  발화 시작: 아니요, 오늘은 이만하면 충분해요.
    67.04s  agent 발화 끝
    68.79s  agent 발화 시작: 네, 그럼 좋은 하루 보내세요.
    68.79s  user  발화 끝
    70.98s  agent 발화 끝
