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


     0.00s  agent 발화 시작: 연경님, 안녕하세요. 저는 아라예요. 돈 관리와 예산 짜는 걸 도와드리는 상담사랍니다. 편하게 말씀해 주세요
     7.70s  user  발화 시작: 아라님… 이름이 꽤 독특하네요. 혹시 진짜 사람이에요?
     7.74s  agent 발화 끝
    11.76s  agent 발화 시작: [curious] 저는 사람처럼 느껴지도록 만들어진 에이전트예요. 가족이나 과거는 없지만, 연경님의 고민을 
    11.86s  user  발화 끝
    21.73s  agent 발화 끝
    22.14s  user  발화 시작: 음… 요즘 물가가 너무 많이 올라서 뭘 어떻게 해야 할지 모르겠어요.
    28.12s  agent 발화 시작: 물가 상승 때문에 걱정이 많으시겠어요. 예산을 세우는 데 어려움을 느끼시는 건가요?
    28.26s  user  발화 끝
    33.27s  agent 발화 끝
