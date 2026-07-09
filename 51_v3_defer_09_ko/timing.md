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


     0.00s  user  발화 시작: 오션뷰 호텔, 샌디에이고, 이월 십일부터 칠박 동안 객실 세개 예약해 줘.
     5.53s  <ret> 발화 (turn1 첫 프레임)
     5.69s  agent 발화 시작: <ret> 네, 샌디에이고 오션뷰 호텔에 이월 십일부터 칠박 동안 객실 세개를 예약해 드리겠습니다.
     5.79s  user  발화 끝
     6.97s  ⚡SPAN 주입 [d'=1.44s / d_lead=5.46s]: (tool result) Reservation confirmed. Confirmation number is 87654321.
    11.04s  agent 발화 시작: 오션뷰 호텔 예약이 완료되었고, 확인 번호는 팔 칠 육 오 사 삼 이 일입니다.
    11.15s  agent 발화 끝
    14.32s  user  발화 시작: 어어.
    15.10s  user  발화 끝
    16.84s  user  발화 시작: 아, 그런데 혹시 그 호텔에 수영장이 있는지 궁금해.
    16.88s  agent 발화 끝
    20.81s  agent 발화 시작: 수영장이 있는지 확인해 보려면 잠시만 기다려 주시겠어요—
    20.82s  user  발화 끝
    23.29s  user  발화 시작: 아, 잠깐만, 혹시 취소 정책도 알아봐 줄 수 있어?
    24.18s  agent 발화 끝
    27.09s  <ret> 발화 (turn7 첫 프레임)
    27.13s  user  발화 끝
    27.16s  agent 발화 시작: <ret> 네, 취소 정책에 대해 먼저 확인해 드리겠습니다.
    28.77s  ⚡SPAN 주입 [d'=1.68s / d_lead=2.73s]: (tool result) Cancellations are permitted up to 24 hours prior to chec
    29.79s  agent 발화 시작: 체크인 스물네시간 전까지는 전액 환불 가능합니다.
    29.88s  agent 발화 끝
    33.17s  agent 발화 끝
