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


     0.00s  agent 발화 시작: 김님, 안녕하세요. 저는 아라라고 해요. 돈 문제나 예산 관리에 대해 편하게 이야기 나눌 수 있는 상담가입니
     7.64s  agent 발화 끝
     7.82s  user  발화 시작: 아라라고요? 음… 이름이 좀 독특하네요. 혹시 진짜 사람이에요?
    13.04s  agent 발화 시작: [laugh] 그런 질문은 종종 받아요. 저는 사람처럼 느껴지도록 만들어진 도우미일 뿐이에요. 가족이나 과거
    13.09s  user  발화 끝
    25.24s  agent 발화 끝
    25.56s  user  발화 시작: 흐음… 알겠어요. 사실 요즘 돈 관리가 너무 힘들어서요. 어디서부터 시작해야 할지 막막하네요.
    32.66s  user  발화 끝
    32.81s  agent 발화 시작: 돈 관리가 힘드시군요. 막막하게 느껴지시는 마음 충분히 이해가 돼요. 혹시 지금 가장 걱정되는 부분이 있으신
    41.19s  agent 발화 끝
