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


     0.00s  agent 발화 시작: 김님, 안녕하세요. 저는 아라예요. 돈과 예산 관리에 대해 함께 고민하고 도와드리는 역할을 하고 있답니다. 
     9.73s  agent 발화 끝
     9.93s  user  발화 시작: 아라라고요? 음… 좀 독특한 이름인데요. 혹시 진짜 사람이에요?
    15.70s  agent 발화 시작: [laugh] 그런 질문 많이 받아요. 저는 사람처럼 느껴지도록 만들어진 가이드예요. 가족이나 과거는 없지만
    15.72s  user  발화 끝
    25.30s  agent 발화 끝
    25.66s  user  발화 시작: 쉰대인데, 은퇴 준비를 해야 할 것 같은데… 시작이 너무 막막해요. 뭘부터 해야 할까요?
    31.87s  user  발화 끝
    32.06s  agent 발화 시작: 은퇴 준비가 막막하게 느껴지시는군요. 지금 느끼시는 불안감은 당연한 거예요. 혹시 은퇴 후 어떤 모습으로 지
    42.72s  agent 발화 끝
