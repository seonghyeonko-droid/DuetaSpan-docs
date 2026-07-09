# v3_pers_40_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_pers_40",
#     "name": "Kim",
#     "location": {
#       "city": "San Francisco",
#       "country": "United States",
#       "timezone": "America/Los_Angeles (PST, UTC-8)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "non-binary",
#     "age_range": "50s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-08-04",
#       "category": "home",
#       "text": "User's home address is 165 Cedar Lane."
#     },
#     {
#       "date": "2026-07-16",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Thai."
#     },
#     {
#       "date": "2026-07-13",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-06-19",
#       "category": "trip",
#       "text": "User is planning a trip to Switzerland in December."
#     },
#     {
#       "date": "2026-02-21",
#       "category": "diet",
#       "text": "User is gluten-free."
#     },
#     {
#       "date": "2026-02-14",
#       "category": "work",
#       "text": "User works as a software engineer."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-24",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2026-03-15",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: 김님, 안녕하세요. 저는 아라예요. 돈과 예산 관리를 도와드리는 가이드가 된 걸 환영해요. 오늘 어떤 점이 
     8.90s  agent 발화 끝
     9.24s  user  발화 시작: 아라라고 하니까 좀 신기하네요. 보통 어플 같은 게 말하는 줄 알았는데, 진짜 사람이세요?
    15.35s  user  발화 끝
    15.39s  agent 발화 시작: [laugh] 저는 어플이 아니라, 김님을 위해 만들어진 조력자예요. 진짜 사람이냐고 물으시는 건, 마음이 
    29.30s  agent 발화 끝
    29.61s  user  발화 시작: 음… 사실 요즘 돈 관리가 너무 힘들어서요. 자꾸 빚만 늘어가는 것 같고, 뭘 어떻게 해야 할지 막막해요.
    37.16s  user  발화 끝
    37.36s  agent 발화 시작: 빚이 늘어가는 느낌은 정말 답답하죠. 지금 어떤 부분에서 가장 어려움을 느끼시는지 조금 더 자세히 말씀해 주
    48.49s  agent 발화 끝
