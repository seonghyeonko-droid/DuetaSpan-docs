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


     0.00s  user  발화 시작: 오션뷰 호텔에서 이월 십일부터 칠박 동안 방 세 개 예약해 줘.
     4.53s  <ret> 발화 (turn1 첫 프레임)
     4.68s  agent 발화 시작: <ret> 네, 알겠습니다. 오션뷰 호텔에서 이월 십일부터 칠박 동안 객실 세개를 예약해 드리겠습니다.
     4.81s  user  발화 끝
     6.53s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.41s]: (tool result) reservation_id=RV789, hotel=Ocean View Hotel, rooms=3, c
    11.95s  agent 발화 시작: 오션뷰 호텔, 이월 십일부터 칠박, 객실 세개 예약 완료되었습니다. 총 비용은 이백십만 원입니다.
    12.09s  agent 발화 끝
    19.60s  agent 발화 끝
    19.73s  user  발화 시작: 혹시 취소 정책은 어떻게 돼?
    21.71s  user  발화 끝
    22.00s  agent 발화 시작: 아, 네, 취소 정책에 대해서는—
    23.25s  user  발화 시작: 취소하면 얼마나 환불받을 수 있는지 알고 싶어.
    24.12s  agent 발화 끝
    26.27s  <ret> 발화 (turn6 첫 프레임)
    26.30s  user  발화 끝
    26.34s  agent 발화 시작: <ret> 네, 물론입니다. 예약 취소 시 환불 정책은 다음과 같습니다.
    28.27s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.31s]: (tool result) reservation_id=RV789, cancellation_policy=full refund up
    30.38s  agent 발화 시작: 칠일 전까지 취소하시면 전액 환불됩니다. 칠일 이내 취소 시에는 금액의 십% 수수료가 발생합니다.
    30.64s  agent 발화 끝
    34.66s  user  발화 시작: 헐.
    35.39s  user  발화 끝
    36.52s  agent 발화 시작: 혹시 다른 도움이 필요하시면 언제든지 말씀해 주세요.
    36.67s  agent 발화 끝
    39.99s  agent 발화 끝
