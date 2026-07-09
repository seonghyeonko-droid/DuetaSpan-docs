# v3_mem_32_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_32",
#     "name": "Manon",
#     "location": {
#       "city": "Berlin",
#       "country": "Germany",
#       "timezone": "Europe/Berlin (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "German",
#     "gender": "female",
#     "age_range": "late 30s",
#     "language": "German"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-07-25",
#       "category": "trip",
#       "text": "User is planning a trip to Kyoto in March."
#     },
#     {
#       "date": "2026-06-14",
#       "category": "hobby",
#       "text": "User is into rock climbing."
#     },
#     {
#       "date": "2026-03-10",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is sushi."
#     },
#     {
#       "date": "2026-02-26",
#       "category": "diet",
#       "text": "User is gluten-free."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-07-12",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2026-01-20",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 아, 네. 투날로 씨. 혹시 제가 작년에 어디 여행을 가기로  | S2 아, 맞아요! 교토! 잊고 있었네요. | S3 음… 사실 저는 암벽 등반을 좋아하거든요. 교토에서 암벽 등반 | S4 네, 부탁드려요.

     0.00s  agent 발화 시작: 안녕하세요, 마농님. 저는 투날로예요. 창의적인 막힘이나 자신감 문제로 고민하시는 분들을 돕는 상담가랍니다.
     8.39s  agent 발화 끝
     9.18s  user  발화 시작: 아, 네. 투날로 씨. 혹시 제가 작년에 어디 여행을 가기로 계획했었는지 기억하세요?
    14.76s  <ret> 발화 (turn2 첫 프레임)
    14.83s  agent 발화 시작: <ret> 작년 여행 계획에 대해서요? 내년 삼월에 교토로 여행을 가기로 하셨던 걸로 기억해요.
    15.01s  user  발화 끝
    15.64s  ⚡SPAN 주입 [d'=0.88s / d_lead=1.99s]: [2026-07-25] User is planning a trip to Kyoto in March.
    20.70s  user  발화 시작: 아, 맞아요! 교토! 잊고 있었네요.
    20.80s  agent 발화 끝
    22.67s  agent 발화 시작: 교토 여행을 준비하시는 동안 혹시 특별히 염두에 두고 계신 활동이 있으신가요? 아니면 특별히 관심 있는 점이
    22.86s  user  발화 끝
    28.98s  user  발화 시작: 네.
    29.33s  user  발화 끝
    30.92s  agent 발화 끝
    31.91s  user  발화 시작: 음… 사실 저는 암벽 등반을 좋아하거든요. 교토에서 암벽 등반을 할 수 있는 곳이 있을까요?
    37.54s  <ret> 발화 (turn7 첫 프레임)
    37.61s  agent 발화 시작: <ret> 암벽 등반을 좋아하시는군요. 암벽 등반을 즐기시는군요. 교토 근처에는 몇 군데 암벽 등반을 할 수
    37.74s  user  발화 끝
    38.98s  ⚡SPAN 주입 [d'=1.44s / d_lead=1.57s]: [2026-06-14] User is into rock climbing.
    48.60s  agent 발화 끝
    48.77s  user  발화 시작: 네, 부탁드려요.
    50.05s  user  발화 끝
