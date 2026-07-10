# v3_defer_09_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_defer_09",
#     "name": "보아",
#     "location": {
#       "city": "Seoul",
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

# EXAMINER(FDB-v2) 단계: S1 오션뷰 호텔, 샌디에이고, 이월 십일부터 칠박… | S2 방 종류는 어떤 게 있나? | S3 스위트룸이 제일 비싼 거야? 혹시— | S4 그럼 총 얼마야?

     0.00s  user  발화 시작: 오션뷰 호텔, 샌디에이고, 이월 십일부터 칠박…
     3.89s  user  발화 끝
     5.91s  user  발화 시작: …방 세 개 예약해 줘.
     7.28s  <ret> 발화 (turn2 첫 프레임)
     7.38s  user  발화 끝
     7.68s  agent 발화 시작: <ret> 오션뷰 호텔, 샌디에이고, 이월 십일부터 칠박, 방 세 개 예약이 완료되었습니다. 확인 번호는 알
     9.28s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.20s]: (tool result) Reservation confirmed. Confirmation number is Alpha-729-
    12.44s  user  발화 시작: 어어.
    13.26s  user  발화 끝
    15.87s  user  발화 시작: 방 종류는 어떤 게 있나?
    15.89s  agent 발화 끝
    17.17s  <ret> 발화 (turn5 첫 프레임)
    17.40s  agent 발화 시작: <ret> 오션뷰 호텔에는 스탠다드, 딜럭스, 스위트 룸이 준비되어 있으며, 일박당 백오십달러에서 삼백달러 
    17.48s  user  발화 끝
    19.17s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.64s]: (tool result) Available room types: Standard, Deluxe, Suite. Prices ra
    25.05s  agent 발화 끝
    25.25s  user  발화 시작: 스위트룸이 제일 비싼 거야? 혹시—
    27.23s  user  발화 끝
    27.31s  user  발화 시작: 바다 전망이 보이는 방으로 해 줄 수 있어?
    29.91s  <ret> 발화 (turn8 첫 프레임)
    29.99s  agent 발화 시작: <ret> 네, 확인 번호 알파-칠백이십구-브라보로 예약하신 방을 오션뷰 스위트룸으로 변경했습니다.
    30.27s  user  발화 끝
    30.55s  ⚡SPAN 주입 [d'=0.64s / d_lead=5.41s]: (tool result) Reservation updated. Suite with ocean view confirmed.
    35.37s  user  발화 시작: 그럼 총 얼마야?
    35.41s  agent 발화 끝
    35.97s  <ret> 발화 (turn10 첫 프레임)
    36.35s  agent 발화 시작: <ret> 총 비용은 이천백달러입니다.
    36.38s  user  발화 끝
    37.33s  ⚡SPAN 주입 [d'=1.36s / d_lead=2.86s]: (tool result) Total cost: $2100.
    39.22s  agent 발화 끝
