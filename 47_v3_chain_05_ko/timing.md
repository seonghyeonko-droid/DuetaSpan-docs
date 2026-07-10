# v3_chain_05_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_chain_05",
#     "name": "서훈",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "early 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-01",
#       "category": "pet",
#       "text": "User has a Corgi named Mochi."
#     },
#     {
#       "date": "2026-04-27",
#       "category": "allergy",
#       "text": "User is allergic to penicillin."
#     },
#     {
#       "date": "2025-12-13",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is sushi."
#     },
#     {
#       "date": "2025-09-29",
#       "category": "work",
#       "text": "User works as a high-school teacher."
#     },
#     {
#       "date": "2025-08-01",
#       "category": "hobby",
#       "text": "User is into vintage synth collecting."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-11-08",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 원 월드 트레이드 센터에서 메트라이프 스타디움까지 운전하는 길 | S2 …뉴저지 주 메트라이프 스타디움 근처. | S3 흐으음… | S4 알았어. 그런데, 메트라이프 스타디움 근처에 괜찮은 식당도 추

     0.00s  user  발화 시작: 원 월드 트레이드 센터에서 메트라이프 스타디움까지 운전하는 길 안내해 줄 수 있어?
     4.48s  <ret> 발화 (turn1 첫 프레임)
     4.72s  user  발화 끝
     4.79s  agent 발화 시작: <ret> 원 월드 트레이드 센터에서 메트라이프 스타디움까지는 대략 사십킬로미터 정도이고, 교통 상황에 따라
     4.80s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.25s]: (tool result) Driving directions from One World Trade Center to MetLif
     9.35s  user  발화 시작: 우와.
     9.99s  user  발화 끝
    14.94s  agent 발화 시작: 지금 출발하시면 괜찮을 것 같아요.
    15.04s  agent 발화 끝
    16.83s  user  발화 시작: 고마워. 혹시 지금 날씨는 어때?…
    17.16s  agent 발화 끝
    19.60s  user  발화 끝
    20.93s  user  발화 시작: …뉴저지 주 메트라이프 스타디움 근처.
    23.84s  <ret> 발화 (turn6 첫 프레임)
    24.03s  user  발화 끝
    24.08s  agent 발화 시작: <ret> 메트라이프 스타디움 근처 날씨는 현재 이십사 점 사도이고, 습도는 육십팔%, 바람은 남서쪽에서 시
    24.08s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.85s]: (tool result) The current weather near MetLife Stadium, New Jersey is 
    27.66s  user  발화 시작: 어머.
    28.48s  user  발화 끝
    32.93s  agent 발화 끝
    32.96s  user  발화 시작: 흐으음…
    33.29s  agent 발화 시작: 운전할 때는 안전이 제일 중요하니까, 혹시라도 비가 오기 시작하면 속도를 줄이고 안전 거리를 충분히 유지하세
    33.45s  user  발화 끝
    38.44s  user  발화 시작: 맞아.
    38.89s  user  발화 끝
    41.08s  agent 발화 끝
    41.49s  user  발화 시작: 알았어. 그런데, 메트라이프 스타디움 근처에 괜찮은 식당도 추천해 줄 수 있어?
    47.17s  <ret> 발화 (turn12 첫 프레임)
    47.41s  agent 발화 시작: <ret> 메트라이프 스타디움 근처에는 괜찮은 식당이 몇 군데 있어요. 더 파이어플레이스 레스토랑 앤 바는 
    47.41s  ⚡SPAN 주입 [d'=2.00s / d_lead=12.56s]: (tool result) There are several restaurants near MetLife Stadium, New 
    47.41s  user  발화 끝
    59.88s  agent 발화 시작: 맛있는 식사 하시고 즐거운 시간 보내세요.
    59.97s  agent 발화 끝
    62.65s  agent 발화 끝
