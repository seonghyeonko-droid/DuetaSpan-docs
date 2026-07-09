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
#       "date": "2026-04-24",
#       "category": "pet",
#       "text": "User has a tabby cat named Luna."
#     },
#     {
#       "date": "2026-03-05",
#       "category": "home",
#       "text": "User's home address is 530 Elm Street."
#     },
#     {
#       "date": "2025-12-23",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Korean BBQ."
#     },
#     {
#       "date": "2025-10-20",
#       "category": "diet",
#       "text": "User is vegetarian."
#     },
#     {
#       "date": "2025-08-12",
#       "category": "allergy",
#       "text": "User is allergic to pollen."
#     },
#     {
#       "date": "2025-07-04",
#       "category": "hobby",
#       "text": "User is into marathon training."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-10-24",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2025-06-27",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 오션뷰 호텔, 샌디에이고, 이월 십일부터 칠박 동안 객실 세개 예약해 줘.
     6.06s  <ret> 발화 (turn1 첫 프레임)
     6.21s  agent 발화 시작: <ret> 네, 알겠습니다. 오션뷰 호텔 샌디에이고, 이월 십일부터 칠박, 객실 세개 맞으신가요?
     6.26s  user  발화 끝
     7.50s  ⚡SPAN 주입 [d'=1.44s / d_lead=6.49s]: (tool result) Reservation confirmed: Ocean View Hotel, San Diego, 3 ro
    12.55s  agent 발화 시작: 네, 예약이 완료되었습니다. 오션뷰 호텔, 샌디에이고, 이월 십일부터 십칠일까지 객실 세개, 확인 번호는 팔
    12.70s  agent 발화 끝
    21.36s  agent 발화 끝
    21.47s  user  발화 시작: …근데 혹시 그 호텔에 수영장이 있나요?
    24.24s  user  발화 끝
    24.59s  agent 발화 시작: 수영장이 있는지—아, 네, 확인해 드리겠습니다. 잠시만 기다려 주세요.
    26.91s  user  발화 시작: 응.
    27.26s  user  발화 끝
    28.77s  <ret> 발화 (turn6 첫 프레임)
    28.80s  ⚡지연 SPAN 주입(선제발표 직전): [source: Hotels.com] Ocean View Hotel features an outdoor pool, a fitn
    28.84s  agent 발화 시작: <ret> 잠시만요.
    28.89s  agent 발화 끝
    29.27s  ⚡SPAN 주입 [d'=0.50s / d_lead=0.95s]: (no information found)
    29.79s  agent 발화 시작: <ret> 호텔에 수영장이 있는지 알아봤는데요— 오션뷰 호텔에는 야외 수영장과 피트니스 센터, 그리고 무료 
    29.79s  agent 발화 끝
    38.31s  agent 발화 끝
