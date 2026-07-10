# v3_pause_16_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_pause_16",
#     "name": "가현",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "early 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-04",
#       "category": "hobby",
#       "text": "User is into alpine wildflower photography."
#     },
#     {
#       "date": "2026-01-17",
#       "category": "pet",
#       "text": "User has a Siamese cat named Bella."
#     },
#     {
#       "date": "2025-10-16",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     },
#     {
#       "date": "2025-07-20",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Thai."
#     },
#     {
#       "date": "2025-06-13",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2025-06-02",
#       "category": "work",
#       "text": "User works as a architect."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-02-01",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2025-12-25",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 혹시 'Eye of the… | S2 혹시 서바이버 다른 노래도 알아? … | S3 서바이버 멤버들은 지금 뭐하고 살까? | S4 …Tiger'가 나온 영화 제목이 뭐였지?

     0.00s  user  발화 시작: 혹시 'Eye of the…
     1.75s  user  발화 끝
     3.17s  user  발화 시작: …Tiger' 노래 부른 가수 누구야?
     4.40s  <ret> 발화 (turn2 첫 프레임)
     4.80s  agent 발화 시작: <ret> 그 노래는 천구백칠십팔년에 시카고에서 결성된 미국의 록 밴드, 서바이버가 불렀어요. 꽤 유명한 곡
     4.80s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.02s]: Survivor is an American rock band formed in Chicago in 1978.
     5.01s  user  발화 끝
     8.84s  user  발화 시작: 응.
     9.06s  user  발화 끝
    12.70s  user  발화 시작: 아, 맞아. 그 노래 진짜 신나잖아.
    12.82s  agent 발화 끝
    14.91s  user  발화 끝
    14.95s  agent 발화 시작: 네, 그렇죠. 많은 사람들에게 힘을 주는 노래예요.
    18.69s  user  발화 시작: 혹시 서바이버 다른 노래도 알아? …
    18.70s  agent 발화 끝
    20.81s  user  발화 끝
    21.24s  agent 발화 시작: 서바이버는 'Burning Heart'라는 곡으로도 잘 알려져 있어요—
    24.29s  user  발화 시작: …그 노래는 '록키 삼'에 나왔었나?
    25.12s  agent 발화 끝
    26.12s  agent 발화 시작: 네, 맞아요. 'Burning Heart'는 영화 '록키 삼'의 사운드트랙에 수록되었어요. 정말 감동적인 곡
    26.27s  user  발화 끝
    30.48s  user  발화 시작: 어어.
    31.16s  user  발화 끝
    33.81s  agent 발화 끝
    34.60s  user  발화 시작: 록키 영화 시리즈 진짜 좋아하는데.
    37.28s  agent 발화 시작: 록키 영화는 많은 사람들에게 영감을 주는 작품이죠. 어려움을 극복하는 이야기가 인상적이에요.
    37.32s  user  발화 끝
    40.78s  user  발화 시작: 그래.
    41.19s  user  발화 끝
    44.03s  user  발화 시작: 서바이버 멤버들은 지금 뭐하고 살까?
    44.19s  agent 발화 끝
    46.12s  <ret> 발화 (turn15 첫 프레임)
    46.27s  agent 발화 시작: <ret> 서바이버 멤버들이 현재 무엇을 하고 지내는지에 대한 정보는 찾을 수 없었어요.
    46.28s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.09s]: (no information found)
    46.48s  user  발화 끝
    49.07s  user  발화 시작: 응응.
    49.53s  user  발화 끝
    51.36s  agent 발화 끝
    51.53s  user  발화 시작: 아, 그렇구나. 좀 아쉽다.
    53.79s  user  발화 끝
    53.94s  agent 발화 시작: 때로는 정보를 찾지 못하는 경우도 있어요.
    56.98s  agent 발화 끝
    58.33s  user  발화 시작: 혹시 'Eye of the…
    59.94s  user  발화 끝
    61.40s  user  발화 시작: …Tiger'가 나온 영화 제목이 뭐였지?
    63.78s  <ret> 발화 (turn21 첫 프레임)
    63.94s  agent 발화 시작: <ret> 그 노래는 영화 '록키 삼'의 주제가로 사용되었고, 앨범의 세 번째 싱글로 발매되었어요.
    63.94s  ⚡SPAN 주입 [d'=1.28s / d_lead=6.35s]: The song "Eye of the Tiger" was released as the third single from the 
    64.12s  user  발화 끝
    70.28s  user  발화 시작: 록키 삼 알겠어. 고마워.
    70.29s  agent 발화 끝
    72.35s  user  발화 끝
    72.61s  agent 발화 시작: 도움이 되었다니 기쁘네요. 힘든 시기에 좋은 음악이 위로가 될 수 있어요.
    78.35s  agent 발화 끝
