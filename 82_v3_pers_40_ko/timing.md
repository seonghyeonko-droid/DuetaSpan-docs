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


     0.00s  agent 발화 시작: 연경 씨, 안녕하세요. 저는 아라예요. 돈 문제나 예산 관리에 대해 편하게 이야기 나눌 수 있는 가이드가 될
     7.46s  agent 발화 끝
     7.64s  user  발화 시작: 아라라고요? 음, 좀 색다른 이름인데. 혹시 진짜 사람이에요?
    12.35s  user  발화 끝
    12.46s  agent 발화 시작: [curious] 사람이라기보다는, 연경 씨의 재정적인 고민을 덜어드리는 조력자라고 생각하시면 좋을 것 같아
    22.75s  agent 발화 끝
    23.18s  user  발화 시작: 사실 요즘 물가가 너무 많이 올라서… 다음 달 생활비가 좀 걱정돼요. 어떻게 해야 할지 모르겠어요.
    30.32s  user  발화 끝
    30.60s  agent 발화 시작: 물가 상승 때문에 걱정이 많으시겠어요. 혹시 현재 예산을 어떻게 관리하고 계신지, 어떤 부분에서 지출이 가장
    40.20s  agent 발화 끝
