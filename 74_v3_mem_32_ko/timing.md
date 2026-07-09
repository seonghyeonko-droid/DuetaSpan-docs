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
#       "date": "2026-03-15",
#       "category": "trip",
#       "text": "User is planning a trip to Kyoto in March."
#     },
#     {
#       "date": "2026-02-20",
#       "category": "hobby",
#       "text": "User is into rock climbing."
#     },
#     {
#       "date": "2025-08-28",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is sushi."
#     },
#     {
#       "date": "2025-06-11",
#       "category": "diet",
#       "text": "User is gluten-free."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-22",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2025-07-07",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 아, 네. 투날로 씨. 혹시 제가 예전에 얘기했던 교토 여행  | S2 네, 맞아요. 그때 혹시 제가 여행 준비하면서 부탁했던 게 있 | S3 아, 네! 그때 제가 여행 중에 혹시 암벽 등반을 할 만한 곳 | S4 오, 정말 좋겠어요! 부탁드릴게요.

     0.00s  agent 발화 시작: 안녕하세요, 마농 님. 저는 투날로예요. 창의적인 고민이나 자신감 문제로 어려움을 겪고 계신 분들을 돕는 상
     8.58s  agent 발화 끝
     9.43s  user  발화 시작: 아, 네. 투날로 씨. 혹시 제가 예전에 얘기했던 교토 여행 계획 기억하시나요?
    14.07s  <ret> 발화 (turn2 첫 프레임)
    14.14s  agent 발화 시작: <ret> 네, 기억하고 있어요. 내년 삼월에 교토 여행을 계획하고 계시다고 말씀해주셨었죠.
    14.29s  user  발화 끝
    14.95s  ⚡SPAN 주입 [d'=0.88s / d_lead=1.71s]: [2026-03-15] User is planning a trip to Kyoto in March.
    19.83s  user  발화 시작: 네, 맞아요. 그때 혹시 제가 여행 준비하면서 부탁했던 게 있었던가요? 기억이 잘 안 나네요.
    19.83s  agent 발화 끝
    24.81s  agent 발화 시작: 여행 준비와 관련해서는 특별히 부탁하신 내용이 기억나지 않지만, 혹시 지금 떠오르는 게 있으신가요?
    25.02s  user  발화 끝
    30.68s  user  발화 시작: 네.
    31.03s  user  발화 끝
    32.50s  agent 발화 끝
    33.41s  user  발화 시작: 아, 네! 그때 제가 여행 중에 혹시 암벽 등반을 할 만한 곳이 있을지 물어봤었죠.
    37.93s  <ret> 발화 (turn7 첫 프레임)
    38.01s  agent 발화 시작: <ret> 암벽 등반을 좋아하시는군요. 암벽 등반을 즐기신다고 하셨으니, 교토 근처에서 암벽 등반을 즐길 수
    38.13s  user  발화 끝
    39.53s  ⚡SPAN 주입 [d'=1.60s / d_lead=1.67s]: [2026-02-20] User is into rock climbing.
    46.91s  agent 발화 끝
    46.97s  user  발화 시작: 오, 정말 좋겠어요! 부탁드릴게요.
    49.50s  user  발화 끝
