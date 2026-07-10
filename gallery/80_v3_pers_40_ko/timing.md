# v3_pers_40_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_pers_40",
#     "name": "연경",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "50s",
#     "language": "Korean"
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


     0.00s  agent 발화 시작: 연경 씨, 안녕하세요. 저는 아라라고 해요. 돈 문제나 예산 짜는 거 있으면 편하게 말씀해주세요. 함께 고민
     8.71s  agent 발화 끝
     8.78s  user  발화 시작: 아라 씨군요. 이름이 예쁘네요. 그런데 돈 문제는… 솔직히 좀 막막해요. 어디서부터 시작해야 할지.
    13.10s  agent 발화 시작: 막막하다고 느끼시는 건 당연해요. 많은 분들이 비슷한 어려움을 겪으시거든요. 혹시 지금 가장 걱정되는 부분이
    13.13s  user  발화 끝
    24.18s  agent 발화 끝
    24.27s  user  발화 시작: 음… 사실 다음 달에 갑자기 차 수리비가 많이 나올 것 같아서요. 예산에 없던 돈이라… 어떻게 해야 할지 모
    30.75s  user  발화 끝
