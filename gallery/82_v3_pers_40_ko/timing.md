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


     0.00s  agent 발화 시작: 연경 씨, 안녕하세요. 저는 아라라고 해요. 돈 문제나 예산 관리에 대해 편하게 이야기 나눌 수 있는 상담가
     8.48s  agent 발화 끝
     8.58s  user  발화 시작: 아라 씨군요. 음, 솔직히 요즘 돈 때문에 좀 걱정이 많아요. 서울 물가가 너무 많이 올랐잖아요.
    14.16s  agent 발화 시작: 서울 물가 때문에 걱정이 많으시군요. 요즘처럼 경제적으로 불안할 때는 지출을 꼼꼼히 살펴보는 게 중요해요. 
    14.18s  user  발화 끝
    23.52s  agent 발화 끝
    23.79s  user  발화 시작: 글쎄요… 사실, 얼마 전에 아이폰 십오를 샀거든요. 할부로 샀는데, 매달 나가는 돈이 생각보다 크더라고요.
    31.07s  user  발화 끝
    31.24s  agent 발화 시작: 아이폰 십오를 할부로 구매하셨군요. 통신비 지출이 부담스러우시다면, 다른 요금제로 변경하거나 불필요한 부가 
    40.79s  agent 발화 끝
