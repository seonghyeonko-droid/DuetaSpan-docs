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

# EXAMINER(FDB-v2) 단계: S1 그랜드뷰 로프트에 육월 십오일에 방문 예약 좀 잡아줘. | S2 음… 한식. | S3 좋아. 그럼… 그날 저녁에 영화 볼 만한 거 있어? | S4 정말 고마워.

     0.00s  user  발화 시작: 그랜드뷰 로프트에 육월 십오일에 방문 예약 좀 잡아줘.
     3.85s  <ret> 발화 (turn1 첫 프레임)
     4.08s  agent 발화 시작: <ret> 그랜드뷰 로프트 방문 예약을 육월 십오일 오후 두시에 잡아드렸어요. 확인 번호는 GH7892입니다
     4.09s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.11s]: (tool result) Your visit to The Grandview Lofts is scheduled for June 
     4.12s  user  발화 끝
    12.19s  agent 발화 끝
    12.74s  user  발화 시작: 근데… 십육일로 바꿀 수 있어?
    14.86s  <ret> 발화 (turn3 첫 프레임)
    15.09s  agent 발화 시작: <ret> 죄송하지만, 육월 십육일로 변경하는 데 필요한 정보가 없어서 변경이 어렵습니다.
    15.10s  ⚡SPAN 주입 [d'=1.92s / d_lead=5.74s]: (no information found)
    15.28s  user  발화 끝
    20.77s  user  발화 시작: 아, 실수했어. 육월 십육일로 바꿔줘.
    20.83s  agent 발화 끝
    23.55s  <ret> 발화 (turn5 첫 프레임)
    23.78s  agent 발화 시작: <ret> 그랜드뷰 로프트 방문 예약을 육월 십육일 오후 두시로 변경해 드렸어요. 새로운 확인 번호는 GH9
    23.79s  ⚡SPAN 주입 [d'=1.28s / d_lead=8.30s]: (tool result) Your visit to The Grandview Lofts is now scheduled for J
    24.00s  user  발화 끝
    32.08s  agent 발화 끝
    32.30s  user  발화 시작: 혹시 그 근처에 맛집도 찾아줄 수 있어?
    34.78s  agent 발화 시작: 어떤 종류의 음식을 좋아하세요?
    34.84s  user  발화 끝
    36.86s  agent 발화 끝
    37.64s  user  발화 시작: 음… 한식.
    38.85s  <ret> 발화 (turn9 첫 프레임)
    38.92s  agent 발화 시작: <ret> 그랜드뷰 로프트 근처에 한식집 세 곳이 있어요. 서울 정원(별점 사 점 오, 일 점 이km), 김
    38.93s  ⚡SPAN 주입 [d'=2.00s / d_lead=11.68s]: (tool result) Three Korean restaurants near The Grandview Lofts: Seoul
    39.11s  user  발화 끝
    50.60s  agent 발화 끝
    50.61s  user  발화 시작: 서울 정원이 제일 가까운 것 같네. 거기 예약해 줄래?
    53.73s  <ret> 발화 (turn11 첫 프레임)
    53.80s  agent 발화 시작: <ret> 서울 정원에 육월 십육일 저녁 일곱시에 두 분으로 예약이 완료되었어요. 확인 번호는 SG3456입
    53.81s  ⚡SPAN 주입 [d'=1.44s / d_lead=8.02s]: (tool result) Reservation confirmed at Seoul Garden for June 16th, 202
    53.98s  user  발화 끝
    59.05s  user  발화 시작: 어.
    59.54s  user  발화 끝
    61.67s  user  발화 시작: 혹시 그날 날씨는 어때?
    61.82s  agent 발화 끝
    62.85s  <ret> 발화 (turn14 첫 프레임)
    63.25s  agent 발화 시작: <ret> 육월 십육일 그랜드뷰 로프트 지역의 날씨는 최고 이십팔도, 최저 이십이도이고, 비 올 확률은 이십
    63.25s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.49s]: (tool result) The weather on June 16th, 2026, at The Grandview Lofts w
    63.28s  user  발화 끝
    71.73s  agent 발화 끝
    72.40s  user  발화 시작: 좋아. 그럼… 그날 저녁에 영화 볼 만한 거 있어?
    75.75s  <ret> 발화 (turn16 첫 프레임)
    76.06s  agent 발화 시작: <ret> 육월 십육일에는 액션 히어로 칠 로맨틱 게트어웨이, 스페이스 익스플로러스 세 편이 상영됩니다.
    76.07s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.35s]: (tool result) Showing on June 16th: "Action Hero 7" (action, 7:30 PM),
    76.24s  user  발화 끝
    82.41s  agent 발화 끝
    83.36s  user  발화 시작: 스페이스 익스플로러스… 그거 괜찮겠다.
    85.76s  user  발화 끝
    85.79s  agent 발화 시작: SF 영화 좋아하시는군요. 좋은 선택이에요.
    88.75s  user  발화 시작: 티켓 예매해 줄 수 있어? 두 장.
    88.79s  agent 발화 끝
    90.42s  <ret> 발화 (turn20 첫 프레임)
    90.81s  agent 발화 시작: <ret> 스페이스 익스플로러스 영화 티켓 두 장을 육월 십육일 저녁 아홉시 상영으로 예매해 드렸어요. 확인
    90.82s  user  발화 끝
    90.83s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.67s]: (tool result) Two tickets for "Space Explorers" on June 16th, 2026, at
    94.52s  user  발화 시작: 음.
    94.92s  user  발화 끝
    99.48s  agent 발화 끝
    99.78s  user  발화 시작: 정말 고마워.
   100.73s  user  발화 끝
   100.89s  agent 발화 시작: 도움이 되어서 기쁩니다. 즐거운 시간 보내세요.
   102.14s  user  발화 시작: 그치.
   102.73s  user  발화 끝
   104.27s  agent 발화 끝
   105.21s  user  발화 시작: 아, 그리고… 그날 택시 잡아줄 수 있어?
   107.86s  <ret> 발화 (turn26 첫 프레임)
   107.94s  user  발화 끝
   108.01s  agent 발화 시작: <ret> 그랜드뷰 로프트에서 서울 정원까지 택시비는 일만 이천 원이고, 도착 시간은 십오분 정도 예상됩니다
   108.02s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.41s]: (tool result) A ride from The Grandview Lofts to Seoul Garden is estim
   117.35s  user  발화 시작: 좋아, 알았어.
   117.42s  agent 발화 끝
   118.95s  user  발화 끝
   119.24s  agent 발화 시작: 즐거운 저녁 식사 되세요.
   120.99s  agent 발화 끝
