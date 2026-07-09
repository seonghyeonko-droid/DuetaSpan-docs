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


     0.00s  agent 발화 시작: 김님, 안녕하세요. 저는 아라예요. 돈 문제나 예산 짜는 일로 고민이 많으신 분들을 돕는 역할을 하고 있답니
     8.11s  agent 발화 끝
     8.45s  user  발화 시작: [surprised] 아라요? 이름이 예쁘네요. 혹시… 진짜 사람이에요?
    13.17s  user  발화 끝
    13.19s  agent 발화 시작: [laugh] 그런 질문을 많이 받아요. 저는 사람처럼 느껴지도록 만들어진 가이드일 뿐이에요. 가족이나 과거
    24.32s  agent 발화 끝
    24.59s  user  발화 시작: 음… 요즘 갑자기 돈 관리가 너무 막막해졌어요. 샌프란시스코에서 살다 보니까 생활비도 너무 비싸고.
    31.87s  user  발화 끝
    31.99s  agent 발화 시작: 샌프란시스코 물가가 높다는 건 정말 사실이죠. 혹시 지금 가장 걱정되는 부분이 어떤 건가요? 구체적으로 말씀
    40.99s  agent 발화 끝
