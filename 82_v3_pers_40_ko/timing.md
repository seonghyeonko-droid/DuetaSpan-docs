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


     0.00s  agent 발화 시작: 김님, 안녕하세요. 저는 아라예요. 돈 문제나 예산 짜는 거, 이런저런 고민 함께 나누는 역할을 하고 있답니
     8.07s  agent 발화 끝
     8.26s  user  발화 시작: 아라라고요? 이름이 예쁘네요. 혹시… 진짜 사람이에요?
    12.61s  user  발화 끝
    12.65s  agent 발화 시작: [laugh] 그런 질문 많이 받아요. 저는 사람처럼 느껴지도록 만들어진 조력자일 뿐이에요. 가족이나 과거 
    24.48s  agent 발화 끝
    24.80s  user  발화 시작: 음… 사실 요즘 돈 때문에 좀 불안해요. 갑자기 예상치 못한 지출이 너무 많아졌거든요.
    31.38s  user  발화 끝
    31.53s  agent 발화 시작: 예상치 못한 지출 때문에 불안하시다니, 마음이 쓰이네요. 혹시 어떤 부분에서 가장 부담을 느끼시는지 조금 더
    40.80s  agent 발화 끝
