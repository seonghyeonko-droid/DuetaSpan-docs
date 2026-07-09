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


     0.00s  agent 발화 시작: 안녕하세요, 마농님. 저는 투날로예요. 창의적인 막힘이나 자신감 문제로 고민하시는 분들을 돕는 상담사랍니다.
     8.20s  agent 발화 끝
     8.94s  user  발화 시작: 아, 네. 투날로 씨. 혹시 제가 예전에 했던 이야기 기억하시나요?
    13.19s  <ret> 발화 (turn2 첫 프레임)
    13.27s  agent 발화 시작: <ret> 네, 마농님. 어떤 이야기를 말씀하시는 걸까요? 지난 칠월 이십오일에 교토 여행 계획에 대해 말씀
    13.43s  user  발화 끝
    14.39s  ⚡SPAN 주입 [d'=1.20s / d_lead=3.25s]: [2026-07-25] User is planning a trip to Kyoto in March.
    24.02s  user  발화 시작: 아, 맞아요! 교토 여행… 그때 항공권 예약하는 데 좀 어려움을 겪었던 것 같아요.
    24.11s  agent 발화 끝
    28.28s  agent 발화 시작: 여행 준비하면서 어려움을 느끼시는 건 흔한 일이에요. 어떤 부분이 가장 걸리셨나요?
    28.46s  user  발화 끝
    32.81s  user  발화 시작: 네.
    33.21s  user  발화 끝
    34.35s  agent 발화 끝
    35.29s  user  발화 시작: 항공편 시간대가 너무 맘에 안 들었거든요. 혹시 지금 시점에서 좀 더 괜찮은 시간대가 있을까요?
    41.28s  <ret> 발화 (turn7 첫 프레임)
    41.35s  agent 발화 시작: <ret> 교토행 삼월 항공편을 알아봤는데, 오전 일곱시에 출발하는 JL101편, 오전 여덟시 삼십분에 출발
    41.53s  user  발화 끝
    43.28s  ⚡SPAN 주입 [d'=2.00s / d_lead=15.03s]: (tool result) Destination: Kyoto; Date: March; Available Flights: JL10
    56.38s  agent 발화 끝
