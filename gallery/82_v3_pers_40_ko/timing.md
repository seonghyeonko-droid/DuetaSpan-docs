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


     0.00s  agent 발화 시작: 연경님, 안녕하세요. 저는 아라예요. 돈 문제나 예산 관리로 고민이실 때 편하게 말씀해 주세요. 함께 해결 
     2.74s  user  발화 시작: 어.
     3.24s  user  발화 끝
     8.38s  agent 발화 끝
     8.83s  user  발화 시작: 아라라… 이름이 예쁘네요. 근데 돈 문제 상담을 해 준다고요? 진짜 되는 거예요?
    14.16s  agent 발화 시작: 돈은 삶의 중요한 부분이고, 때로는 막막하게 느껴질 수 있어요. 어떤 점이 가장 걱정되시는지 말씀해 주시겠어
    14.29s  user  발화 끝
    18.28s  user  발화 시작: 음.
    18.82s  user  발화 끝
    21.12s  user  발화 시작: 솔직히 말하면 요즘 돈 쓸 일이 너무 많아서 숨이 막혀요. 뭘 줄이고 뭘 늘려야 할지 감이 안 와요.
    21.34s  agent 발화 끝
    28.02s  user  발화 끝
