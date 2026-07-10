# v3_selfc_07_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_selfc_07",
#     "name": "윤율",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "early 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-05",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-05-29",
#       "category": "home",
#       "text": "User's home address is 경기 성남시 분당구 판교로 235."
#     },
#     {
#       "date": "2026-05-01",
#       "category": "allergy",
#       "text": "User is allergic to peanuts."
#     },
#     {
#       "date": "2026-04-27",
#       "category": "pet",
#       "text": "User has a Siamese cat named Bella."
#     },
#     {
#       "date": "2026-01-21",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Italian."
#     },
#     {
#       "date": "2025-10-16",
#       "category": "trip",
#       "text": "User is planning a trip to Iceland in October."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-15",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2026-03-07",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2025-08-24",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 그랜드뷰 로프트에 육월 십오일에 방문 예약을 좀 잡아줘. | S2 혹시 그 근처에 맛있는 식당도 알아봐 줄 수 있어? | S3 스시 딜라이트가 제일 가까운 것 같은데, 거기 예약 좀 해줘. | S4 그럼 퍼블릭 파킹 랏 A로 가는 길 안내해 줄 수 있어?

     0.00s  user  발화 시작: 그랜드뷰 로프트에 육월 십오일에 방문 예약을 좀 잡아줘.
     3.45s  <ret> 발화 (turn1 첫 프레임)
     3.68s  agent 발화 시작: <ret> 네, 그랜드뷰 로프트에 육월 십오일 오후 두시에 방문 예약을 잡아드렸어요. 확인 번호는 HV729
     3.70s  user  발화 끝
     5.45s  ⚡SPAN 주입 [d'=2.00s / d_lead=12.99s]: (tool result) HV729-LK5, 123 Maple Street, Anytown, CA, 2026-06-15, 14
    16.67s  agent 발화 끝
    17.22s  user  발화 시작: 아, 근데 십오일은 좀… 십육일로 바꿔줄 수 있어?
    20.33s  <ret> 발화 (turn3 첫 프레임)
    20.55s  agent 발화 시작: <ret> 네, 그럼 육월 십육일 오전 열시로 변경해 드릴게요. 새로운 확인 번호는 KZ841-MP3입니다.
    20.59s  user  발화 끝
    22.33s  ⚡SPAN 주입 [d'=2.00s / d_lead=13.09s]: (tool result) KZ841-MP3, 123 Maple Street, Anytown, CA, 2026-06-16, 10
    33.63s  agent 발화 끝
    33.65s  user  발화 시작: 혹시 그 근처에 맛있는 식당도 알아봐 줄 수 있어?
    36.16s  <ret> 발화 (turn5 첫 프레임)
    36.31s  agent 발화 시작: <ret> 네, 근처에 이탈리안 플레이스(백오십미터), 스시 딜라이트(이백이십미터), 버거 헤븐(삼백미터)이
    36.56s  user  발화 끝
    37.44s  ⚡SPAN 주입 [d'=1.28s / d_lead=7.37s]: (tool result) The Italian Place (150m), Sushi Delight (220m), Burger H
    43.68s  agent 발화 끝
    43.77s  user  발화 시작: 스시 딜라이트가 제일 가까운 것 같은데, 거기 예약 좀 해줘. 저녁 일곱시에 두 명.
    48.75s  <ret> 발화 (turn7 첫 프레임)
    48.81s  user  발화 끝
    48.82s  agent 발화 시작: <ret> 네, 스시 딜라이트 저녁 일곱시에 두명으로 예약 완료되었습니다. 예약 번호는 RD592-QT8입니
    50.11s  ⚡SPAN 주입 [d'=1.36s / d_lead=7.75s]: (tool result) RD592-QT8, Sushi Delight, 2026-06-16, 19:00, 2
    56.57s  agent 발화 끝
    57.39s  user  발화 시작: 혹시 그 근처에 주차 공간도 있는지 알아봐 줄 수 있어?
    60.11s  <ret> 발화 (turn9 첫 프레임)
    60.32s  agent 발화 시작: <ret> 네, 근처에 퍼블릭 파킹 랏 A(오십미터), 시티 개러지 B(백미터)가 있고, 길가 주차도 가능하
    60.45s  user  발화 끝
    62.11s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.74s]: (tool result) Public Parking Lot A (50m), City Garage B (100m), Street
    65.41s  user  발화 시작: 어.
    65.76s  user  발화 끝
    67.86s  user  발화 시작: 그럼 퍼블릭 파킹 랏 A로 가는 길 안내해 줄 수 있어?
    68.06s  agent 발화 끝
    70.91s  user  발화 끝
