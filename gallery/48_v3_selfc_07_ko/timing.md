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
#       "text": "User's home address is 585 Elm Street."
#     },
#     {
#       "date": "2026-05-01",
#       "category": "allergy",
#       "text": "User is allergic to cat dander."
#     },
#     {
#       "date": "2026-04-27",
#       "category": "pet",
#       "text": "User has a tabby cat named Luna."
#     },
#     {
#       "date": "2026-01-21",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is sushi."
#     },
#     {
#       "date": "2025-10-16",
#       "category": "trip",
#       "text": "User is planning a trip to Iceland in October."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-05",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2026-02-01",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2025-08-24",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 그랜드뷰 로프트에 방문 예약을 잡아줘, 육월 십오일로. | S2 음… 일베드룸에, 보증금 없고, 반려동물 추가 요금이 없는 곳 | S3 그럼, 리버뷰 아파트먼트 방문 예약 좀 잡아줘. 이번 주 토요 | S4 빈 시인… 거기는 분위기가 어때? 조용해?

     0.00s  user  발화 시작: 그랜드뷰 로프트에 방문 예약을 잡아줘, 육월 십오일로.
     4.00s  <ret> 발화 (turn1 첫 프레임)
     4.23s  agent 발화 시작: <ret> 그랜드뷰 로프트 육월 십오일 오후 두시에 방문 예약을 잡았습니다. 확인 번호는 칠 팔 구 이 삼번
     4.39s  user  발화 끝
     6.00s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.85s]: (tool result) Viewing scheduled for The Grandview Lofts on June 15th a
    13.08s  agent 발화 끝
    13.24s  user  발화 시작: 근데… 그날은 안 될 것 같아. 십육일로 다시 잡아줄래?
    16.46s  <ret> 발화 (turn3 첫 프레임)
    16.65s  user  발화 끝
    16.69s  agent 발화 시작: <ret> 육월 십육일 오후 두시로 예약을 변경했습니다. 새로운 확인 번호는 구 팔 칠 육 오번입니다.
    18.46s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.01s]: (tool result) Visit rescheduled to June 16th at 2:00 PM. New confirmat
    26.70s  agent 발화 끝
    26.73s  user  발화 시작: 아, 맞아. 구 팔 칠 육 오번이지. 그 로프트, 반려동물 동반 가능한가?
    32.79s  <ret> 발화 (turn5 첫 프레임)
    32.87s  agent 발화 시작: <ret> 그랜드뷰 로프트는 반려동물 동반이 가능하고, 월 오십달러의 추가 요금이 있습니다.
    32.88s  user  발화 끝
    34.79s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.44s]: (tool result) Pets are allowed at The Grandview Lofts with a $50 month
    39.30s  agent 발화 끝
    39.33s  user  발화 시작: 오십달러… 음, 좀 비싸네. 혹시 다른 곳은 어때? 좀 더 저렴한 곳.
    45.16s  user  발화 끝
    45.33s  agent 발화 시작: 다른 곳도 찾아볼까요? 어떤 종류의 집을 원하시는지 알려주시면 더 정확하게 찾아드릴 수 있어요.
    50.51s  agent 발화 끝
    50.62s  user  발화 시작: 음… 일베드룸에, 보증금 없고, 반려동물 추가 요금이 없는 곳으로.
    57.02s  <ret> 발화 (turn9 첫 프레임)
    57.18s  agent 발화 시작: <ret> 리버뷰 아파트먼트가 있습니다. 원베드룸이고, 보증금도, 반려동물 추가 요금도 없어요. 월세는 천이
    57.20s  user  발화 끝
    59.02s  ⚡SPAN 주입 [d'=2.00s / d_lead=11.17s]: (tool result) Found "Riverview Apartments" - 1 bedroom, no deposit, no
    64.67s  user  발화 시작: 어.
    65.30s  user  발화 끝
    68.35s  agent 발화 끝
    68.76s  user  발화 시작: 리버뷰 아파트먼트… 사진 좀 볼 수 있을까?
    71.18s  <ret> 발화 (turn12 첫 프레임)
    71.42s  agent 발화 시작: <ret> 리버뷰 아파트먼트 사진을 연결된 기기에 표시해 드렸습니다.
    71.49s  user  발화 끝
    73.18s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.59s]: (tool result) Displaying images of Riverview Apartments on your connec
    81.02s  agent 발화 끝
    81.06s  user  발화 시작: 어, 괜찮아 보이는데! 천이백달러면 괜찮은 가격이네.
    88.47s  user  발화 끝
    88.57s  agent 발화 시작: 사진이 마음에 드신다니 다행이에요. 가격도 괜찮으시고요.
    96.54s  agent 발화 끝
    97.72s  user  발화 시작: 그럼, 리버뷰 아파트먼트 방문 예약 좀 잡아줘. 이번 주 토요일 오후 세시로.
   103.23s  <ret> 발화 (turn16 첫 프레임)
   103.32s  user  발화 끝
   103.39s  agent 발화 시작: <ret> 리버뷰 아파트먼트 이번 주 토요일 오후 세시에 방문 예약을 잡았습니다. 확인 번호는 일 이 삼 사
   105.22s  user  발화 시작: 음.
   105.23s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.40s]: (tool result) Viewing scheduled for Riverview Apartments this Saturday
   105.80s  user  발화 끝
   107.62s  user  발화 시작: 토요일… 아, 잠깐만, 토요일은 친구 결혼식이 있네. 일요일로 바꿔줄 수 있어?
   107.79s  agent 발화 끝
   111.65s  <ret> 발화 (turn19 첫 프레임)
   111.97s  agent 발화 시작: <ret> 일요일 오후 세시로 예약을 변경했습니다. 새로운 확인 번호는 육 칠 팔 구 공번입니다.
   112.02s  user  발화 끝
   112.61s  ⚡SPAN 주입 [d'=0.96s / d_lead=3.23s]: (tool result) Visit rescheduled to Sunday at 3:00 PM. New confirmation
   114.29s  user  발화 시작: 응.
   114.92s  user  발화 끝
   115.21s  agent 발화 끝
   115.23s  user  발화 시작: 육 칠 팔 구 공번… 알았어. 혹시 그 아파트 근처에 맛있는 커피숍 있어?
   119.47s  <ret> 발화 (turn22 첫 프레임)
   119.55s  agent 발화 시작: <ret> 리버뷰 아파트먼트에서 영 점 이마일 거리에 별점 사 점 오점의 빈 시인 커피숍이 있습니다.
   119.58s  user  발화 끝
   121.39s  ⚡SPAN 주입 [d'=1.92s / d_lead=3.38s]: (tool result) "Bean Scene" coffee shop is 0.2 miles from Riverview Apa
   122.93s  agent 발화 끝
   123.11s  user  발화 시작: 빈 시인… 거기는 분위기가 어때? 조용해?
   126.21s  user  발화 끝
   126.31s  agent 발화 시작: 빈 시인은 아늑하고 조용한 분위기로, 공부하거나 휴식을 취하기 좋은 곳이라고 하네요.
   131.18s  agent 발화 끝
   131.42s  user  발화 시작: 좋아, 알았어. 그럼 예약은 다 끝난 거지?
   136.05s  user  발화 끝
   136.36s  agent 발화 시작: 네, 리버뷰 아파트먼트 일요일 오후 세시 방문 예약이 완료되었습니다.
   139.16s  user  발화 시작: 어머.
   139.79s  user  발화 끝
   141.96s  agent 발화 끝
   142.48s  user  발화 시작: 고마워. 덕분에 편하게 집을 알아볼 수 있었어.
   143.31s  user  발화 끝
   143.72s  agent 발화 시작: 도움이 되었다니 기쁩니다. 새로운 집에서 행복하게 지내시길 바랍니다.
   148.12s  agent 발화 끝
