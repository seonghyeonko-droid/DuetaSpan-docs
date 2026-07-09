# v3_defer_09_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_defer_09",
#     "name": "보아",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "late 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-07-13",
#       "category": "pet",
#       "text": "User has a tabby cat named Luna."
#     },
#     {
#       "date": "2026-06-22",
#       "category": "home",
#       "text": "User's home address is 530 Elm Street."
#     },
#     {
#       "date": "2026-05-15",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Korean BBQ."
#     },
#     {
#       "date": "2026-04-11",
#       "category": "diet",
#       "text": "User is vegetarian."
#     },
#     {
#       "date": "2026-03-03",
#       "category": "allergy",
#       "text": "User is allergic to pollen."
#     },
#     {
#       "date": "2026-02-06",
#       "category": "hobby",
#       "text": "User is into marathon training."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-07-17",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2026-05-13",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 오션뷰 호텔, 샌디에이고에서 이월 십일부터 칠박, 방 세 개 예약해 줘.
     4.97s  <ret> 발화 (turn1 첫 프레임)
     5.12s  agent 발화 시작: <ret> 네, 샌디에이고 오션뷰 호텔 방 세 개를 이월 십일부터 칠박으로 예약해 드리겠습니다.
     5.24s  user  발화 끝
     6.41s  ⚡SPAN 주입 [d'=1.44s / d_lead=5.14s]: (tool result) Reservation confirmed: Ocean View Hotel, San Diego. 3 ro
    10.07s  agent 발화 시작: 예약이 완료되었습니다. 오션뷰 호텔, 샌디에이고, 이월 십일부터 십칠일까지, 방 세 개, 총 비용은 구백팔십
    10.26s  agent 발화 끝
    18.74s  agent 발화 끝
    18.88s  user  발화 시작: 혹시 취소 정책은 어떻게 돼?
    21.09s  user  발화 끝
    21.38s  agent 발화 시작: 취소 정책에 대해서는—
    22.31s  user  발화 시작: 취소하면 얼마나 환불받을 수 있는지 궁금해.
    23.12s  agent 발화 끝
    25.27s  user  발화 끝
    25.47s  agent 발화 시작: 네, 취소 정책은 예약일 기준 삼일 전까지는 전액 환불이 가능하고, 삼일 이내 취소 시에는 첫날 숙박료만 환
    30.23s  user  발화 시작: 응.
    30.77s  user  발화 끝
    33.92s  agent 발화 시작: 추가적으로, 오션뷰 호텔은 짐 보관 서비스와 무료 와이파이를 제공하고 있습니다. 필요하시면 말씀해 주세요.
    33.99s  agent 발화 끝
    41.19s  agent 발화 끝
