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
#       "date": "2026-04-08",
#       "category": "home",
#       "text": "User's home address is 165 Cedar Lane."
#     },
#     {
#       "date": "2026-03-26",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Thai."
#     },
#     {
#       "date": "2025-08-17",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2025-07-04",
#       "category": "trip",
#       "text": "User is planning a trip to Switzerland in December."
#     },
#     {
#       "date": "2025-06-28",
#       "category": "diet",
#       "text": "User is gluten-free."
#     },
#     {
#       "date": "2025-05-27",
#       "category": "work",
#       "text": "User works as a software engineer."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-02-09",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2025-11-28",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: 김님, 안녕하세요. 저는 아라예요. 돈 문제나 예산 관리에 대해 편하게 이야기 나눌 수 있는 분이랍니다.
     7.55s  agent 발화 끝
     7.75s  user  발화 시작: 아라라고요? 이름이 좀 독특하네요. 혹시 재무 상담 같은 거 전문적으로 하시는 분이세요?
    13.39s  agent 발화 시작: [curious] 네, 그런 편이라고 생각하시면 될 것 같아요. 돈 관리는 단순히 숫자를 맞추는 게 아니라,
    13.40s  user  발화 끝
    24.06s  agent 발화 끝
    24.34s  user  발화 시작: 음… 사실 요즘 계속 지출이 늘어나는 것 같아서 불안하거든요. 뭘 줄여야 할지 감이 안 와요.
    30.83s  user  발화 끝
    30.93s  agent 발화 시작: 지출이 늘어나는 게 불안하시다니, 충분히 이해가 돼요. 혹시 최근에 새롭게 시작한 취미나 활동이 있으신가요?
    41.27s  agent 발화 끝
