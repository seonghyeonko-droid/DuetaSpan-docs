# v3_chain_06_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_chain_06",
#     "name": "세준",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "40s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-05",
#       "category": "home",
#       "text": "User's home address is 서울 종로구 세종대로 175."
#     },
#     {
#       "date": "2025-11-18",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-10-08",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Korean BBQ."
#     },
#     {
#       "date": "2025-08-04",
#       "category": "trip",
#       "text": "User is planning a trip to Lisbon in May."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-12",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2025-12-10",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2025-05-27",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 타지마할의 좌표가 어떻게 돼요? | S2 너무 비싼 곳 말고, 적당한 가격대의 호텔로 부탁해. | S3 그럼 그 호텔을 예약해 줘. 내년 오월 십일부터 삼박으로. | S4 아그라 날씨는 내년 오월에 어때?

     0.00s  user  발화 시작: 타지마할의 좌표가 어떻게 돼요?
     1.69s  <ret> 발화 (turn1 첫 프레임)
     1.92s  agent 발화 시작: <ret> 타지마할은 북위 이십칠 점 일 칠도, 동경 칠십팔 점 영 사도에 위치하고 있습니다.
     1.93s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.49s]: (tool result) The Taj Mahal is located at 27.1751° N, 78.0421° E.
     1.98s  user  발화 끝
     8.41s  agent 발화 끝
     8.44s  agent 발화 시작: 아름다운 곳이죠. 혹시 방문 계획이 있으신가요?
    12.37s  agent 발화 끝
    14.01s  user  발화 시작: 음, 내년 오월쯤에 가볼까 생각 중이야.
    17.23s  agent 발화 시작: 내년 오월은 좋은 시기일 것 같아요. 날씨도 쾌적하고 관광객도 많지 않아서요.
    17.25s  user  발화 끝
    22.38s  user  발화 시작: 그럼 그 근처 호텔도 좀 알아봐 줄 수 있어?
    22.78s  agent 발화 끝
    24.73s  <ret> 발화 (turn6 첫 프레임)
    24.89s  agent 발화 시작: <ret> 타지마할 근처에 호텔 다섯 곳이 있습니다. ITC 무갈, 오베로이 아마르빌라스, 코트야드 매리어트
    24.89s  ⚡SPAN 주입 [d'=1.28s / d_lead=11.13s]: (tool result) 5 hotels found near Taj Mahal: ITC Mughal, a Luxury Coll
    24.92s  user  발화 끝
    36.02s  agent 발화 끝
    36.03s  agent 발화 시작: 어떤 스타일의 호텔을 선호하시나요?
    38.48s  agent 발화 끝
    38.49s  user  발화 시작: 너무 비싼 곳 말고, 적당한 가격대의 호텔로 부탁해.
    42.42s  <ret> 발화 (turn9 첫 프레임)
    42.57s  user  발화 끝
    42.65s  agent 발화 시작: <ret> 코트야드 매리어트 아그라가 육천 루피, 크리스탈 사로바르 프리미어 아그라가 오천 오백 루피, 호텔
    42.66s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.39s]: (tool result) Courtyard by Marriott Agra (₹6,000/night), Crystal Sarov
    51.04s  agent 발화 끝
    51.06s  agent 발화 시작: 이 중에서 마음에 드는 곳이 있으신가요?
    53.18s  agent 발화 끝
    53.97s  user  발화 시작: 코트야드 매리어트 아그라가 괜찮아 보이는데, 그 호텔에 대한 정보를 좀 더 자세히 알려줄 수 있어?
    60.62s  <ret> 발화 (turn12 첫 프레임)
    60.83s  user  발화 끝
    60.86s  agent 발화 시작: <ret> 코트야드 매리어트 아그라는 별점 사 점 오점이고, 무료 와이파이와 레스토랑, 피트니스 센터를 갖추
    60.86s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.74s]: (tool result) Courtyard by Marriott Agra has a rating of 4.5 stars, of
    67.97s  user  발화 시작: …그 호텔에서 타지마할까지 도보로 갈 수 있어?
    68.60s  agent 발화 끝
    70.92s  user  발화 끝
    70.94s  agent 발화 시작: 네, 도보로 약 이 점 오킬로미터 거리입니다.
    73.48s  agent 발화 끝
    73.63s  user  발화 시작: 그럼 그 호텔을 예약해 줘. 내년 오월 십일부터 삼박으로.
    77.38s  <ret> 발화 (turn16 첫 프레임)
    77.47s  user  발화 끝
    77.53s  agent 발화 시작: <ret> 코트야드 매리어트 아그라 예약이 완료되었습니다. 이천이십칠년 오월 십일 체크인, 삼박, 확인번호는
    77.54s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.59s]: (tool result) Booking confirmed for Courtyard by Marriott Agra, check-
    87.04s  agent 발화 시작: 즐거운 여행 되세요.
    87.12s  agent 발화 끝
    88.33s  agent 발화 끝
    88.36s  user  발화 시작: 고마워. 혹시 아그라에서 가볼 만한 다른 곳도 있어?
    91.62s  <ret> 발화 (turn19 첫 프레임)
    91.73s  user  발화 끝
    91.78s  agent 발화 시작: <ret> 아그라 포트, 잇마드-우드-다울라의 무덤, 메흐타브 바그, 파테푸르 시크리가 아그라에서 인기 있는
    91.78s  ⚡SPAN 주입 [d'=0.50s / d_lead=8.06s]: (tool result) Agra Fort, Itmad-ud-Daulah's Tomb (Baby Taj), Mehtab Bag
    99.84s  agent 발화 끝
    99.86s  agent 발화 시작: 역사적인 유적지가 많으니, 관심 있는 곳을 방문해 보시는 것도 좋을 것 같습니다.
   105.09s  agent 발화 끝
   105.12s  user  발화 시작: 앗, 맞아. 아그라 포트랑 잇마드-우드-다울라의 무덤은 꼭 가보고 싶어.
   110.16s  user  발화 끝
   110.23s  agent 발화 시작: 좋은 선택입니다. 두 곳 모두 아름다운 건축물로 유명합니다.
   112.87s  user  발화 시작: 응.
   113.51s  user  발화 끝
   115.37s  user  발화 시작: 아그라 날씨는 내년 오월에 어때?
   115.37s  agent 발화 끝
   117.89s  <ret> 발화 (turn25 첫 프레임)
   118.13s  agent 발화 시작: <ret> 이천이십칠년 오월 십일 아그라의 날씨는 삼십오도, 습도 사십%이며, 가벼운 바람이 불 것으로 예상
   118.13s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.18s]: (tool result) The weather in Agra on May 10, 2027, is expected to be 3
   118.13s  user  발화 끝
   127.31s  agent 발화 끝
   127.44s  agent 발화 시작: 가벼운 옷차림을 준비하시는 것이 좋겠습니다.
   130.41s  agent 발화 끝
   130.41s  user  발화 시작: 알았어. 정말 고마워.
   132.35s  user  발화 끝
   132.48s  agent 발화 시작: 도움이 되었다니 기쁩니다.
   134.14s  agent 발화 끝
