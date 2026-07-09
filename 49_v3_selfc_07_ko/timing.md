# v3_selfc_07_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_selfc_07",
#     "name": "Rennora",
#     "location": {
#       "city": "Tokyo",
#       "country": "Japan",
#       "timezone": "Asia/Tokyo (JST, UTC+9)",
#       "currency": "JPY (¥)"
#     },
#     "nationality": "Japanese",
#     "gender": "female",
#     "age_range": "50s",
#     "language": "Japanese"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-17",
#       "category": "trip",
#       "text": "User is planning a trip to Switzerland in March."
#     },
#     {
#       "date": "2026-03-25",
#       "category": "allergy",
#       "text": "User is allergic to penicillin."
#     },
#     {
#       "date": "2026-02-05",
#       "category": "pet",
#       "text": "User has a Siamese cat named Bella."
#     },
#     {
#       "date": "2026-01-17",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-08-02",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2026-07-09",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2026-04-23",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 그랜드뷰 로프트에 방문 예약을 잡아줘. 육월 십오일로. | S2 아니, 그곳만 볼게. 그 로프트가 괜찮아 보이거든. 근데 거기 | S3 아, 공간이 제한적이라고? 그럼 혹시 근처에 유료 주차장도 있 | S4 시티 개러지가 더 싸네. 그럼 시티 개러지로 알아봐 줘.

     0.00s  user  발화 시작: 그랜드뷰 로프트에 방문 예약을 잡아줘. 육월 십오일로.
     4.07s  <ret> 발화 (turn1 첫 프레임)
     4.30s  agent 발화 시작: <ret> 네, 그랜드뷰 로프트 방문 예약을 잡아드릴게요.
     4.49s  user  발화 끝
     6.07s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.60s]: (tool result) Visit scheduled: The Grandview Lofts, June 15th, 2:00 PM
     7.74s  agent 발화 시작: 그랜드뷰 로프트 육월 십오일 오후 두시에 방문 예약이 완료됐습니다. 확인 메일도 보내드렸어요.
     7.91s  agent 발화 끝
    14.87s  user  발화 시작: 음… 근데 두시는 좀 안 될 것 같아. 오후 네시로 바꿔줄 수 있어?
    14.87s  agent 발화 끝
    19.67s  <ret> 발화 (turn4 첫 프레임)
    19.90s  agent 발화 시작: <ret> 물론이죠. 시간을 변경해 드릴게요.
    20.05s  user  발화 끝
    21.11s  ⚡SPAN 주입 [d'=1.44s / d_lead=2.35s]: (tool result) Visit rescheduled: The Grandview Lofts, June 15th, 4:00 
    22.05s  agent 발화 시작: 네, 그랜드뷰 로프트 육월 십오일 오후 네시로 시간이 변경됐습니다. 새로운 확인 메일도 보내드렸어요.
    22.25s  agent 발화 끝
    26.25s  user  발화 시작: 어.
    26.70s  user  발화 끝
    28.33s  agent 발화 시작: 혹시 다른 로프트도 둘러보고 싶으신가요? 비슷한 가격대의 다른 곳도 찾아볼까요?
    28.49s  agent 발화 끝
    31.17s  user  발화 시작: 응응.
    31.57s  user  발화 끝
    33.65s  agent 발화 끝
    33.92s  user  발화 시작: 아니, 그곳만 볼게. 그 로프트가 괜찮아 보이거든. 근데 거기가 주차는 어떻게 돼?
    39.11s  <ret> 발화 (turn10 첫 프레임)
    39.42s  agent 발화 시작: <ret> 그랜드뷰 로프트의 주차 시설에 대해 알아봐 드릴게요.
    39.57s  user  발화 끝
    40.31s  ⚡SPAN 주입 [d'=1.20s / d_lead=3.55s]: (tool result) Parking: Free on-site parking available for residents an
    42.84s  agent 발화 시작: 그랜드뷰 로프트는 입주민과 방문객 모두 무료로 주차할 수 있는 공간이 있습니다. 다만 공간이 제한적이라고 하
    42.98s  agent 발화 끝
    51.41s  agent 발화 끝
    52.33s  user  발화 시작: 아, 공간이 제한적이라고? 그럼 혹시 근처에 유료 주차장도 있어? 혹시… 코스트코 쪽으로 걸어가면 주차하기 
    59.43s  <ret> 발화 (turn13 첫 프레임)
    59.47s  user  발화 끝
    59.59s  agent 발화 시작: <ret> 코스트코 쪽 주차장 정보는 지금 바로 확인해 드릴게요.
    60.63s  ⚡SPAN 주입 [d'=1.20s / d_lead=3.66s]: (tool result) Costco parking: $5/hour, 5-minute walk. Available spaces
    63.05s  agent 발화 시작: 코스트코 주차장은 시간당 오달러이고, 도보로 오분 거리에 있습니다. 현재 서른두개의 공간이 남아있습니다.
    63.25s  agent 발화 끝
    70.19s  user  발화 시작: 오달러면 괜찮네. 그럼 혹시… 코스트코 말고 다른 유료 주차장도 좀 알아봐 줄 수 있어? 코스트코는 사람이 
    70.37s  agent 발화 끝
    78.58s  user  발화 끝
    78.78s  <ret> 발화 (turn16 첫 프레임)
    78.85s  agent 발화 시작: <ret> 물론입니다. 코스트코 외 다른 유료 주차장도 찾아볼게요.
    80.78s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.82s]: (tool result) Nearby parking: City Garage ($6/hour, 8 min walk, 15 spa
    83.42s  agent 발화 시작: 시티 개러지(시간당 육달러, 도보 팔분, 십오자리)와 파크플러스(시간당 칠달러, 도보 칠분, 이십자리)가 근
    83.67s  agent 발화 끝
    91.48s  user  발화 시작: 시티 개러지가 더 싸네. 그럼 시티 개러지로 알아봐 줘.
    91.67s  agent 발화 끝
    94.31s  <ret> 발화 (turn19 첫 프레임)
    94.63s  agent 발화 시작: <ret> 네, 시티 개러지로 주차 정보를 확인해 드릴게요.
    94.72s  user  발화 끝
    96.31s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.23s]: (tool result) Reservation confirmed: City Garage, 2 hours, $12. Confir
    97.75s  agent 발화 시작: 시티 개러지 두시간 주차 예약이 완료됐습니다. 총 비용은 십이달러이고, 예약 코드는 CG456입니다.
    97.86s  agent 발화 끝
   105.49s  agent 발화 끝
