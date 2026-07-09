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


     0.00s  agent 발화 시작: 안녕하세요, 마농님. 저는 투날로예요. 창의적인 어려움이나 자신감 문제로 고민하시는 분들을 돕는 상담사랍니다
     6.38s  user  발화 시작: 네.
     6.65s  user  발화 끝
     8.39s  agent 발화 끝
     9.07s  user  발화 시작: 아, 네. 투날로 씨. 혹시 제가 예전에 얘기했던 교토 여행 계획 기억하시나요?
    13.85s  <ret> 발화 (turn3 첫 프레임)
    13.92s  user  발화 끝
    13.92s  agent 발화 시작: <ret> 기억하고 있어요. 내년 삼월에 교토 여행을 계획하고 계시다고 말씀해주셨죠. 여행 준비는 잘 되어 
    14.73s  ⚡SPAN 주입 [d'=0.88s / d_lead=1.34s]: [2026-07-25] User is planning a trip to Kyoto in March.
    20.52s  user  발화 시작: 음.
    20.83s  user  발화 끝
    23.29s  agent 발화 끝
    23.48s  user  발화 시작: 네, 거의 다 됐는데, 혹시 교토에서 암벽 등반을 할 수 있는 곳을 추천해주실 수 있을까요?
    28.48s  <ret> 발화 (turn6 첫 프레임)
    28.80s  agent 발화 시작: <ret> 암벽 등반을 좋아하시는군요. 암벽 등반에 관심이 많으시다고 하셨으니, 교토에서도 즐기실 수 있는 
    28.95s  user  발화 끝
    30.25s  ⚡SPAN 주입 [d'=1.76s / d_lead=1.79s]: [2026-06-14] User is into rock climbing.
    49.13s  agent 발화 끝
    50.08s  user  발화 시작: 오, 좋네요. 감사합니다!
    52.29s  user  발화 끝
