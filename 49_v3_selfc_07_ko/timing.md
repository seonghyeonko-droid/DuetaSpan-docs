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

# EXAMINER(FDB-v2) 단계: S1 그랜드뷰 로프트에 육월 십오일에 방문 예약을 잡아줘. | S2 이십오분… 생각보다 가깝네. 혹시 그쪽 근처에 주차 공간이 있 | S3 오, 멋지다. 그럼… 혹시 그 근처에 괜찮은 카페도 알아봐 줄 | S4 고마워, 텔러. 덕분에 걱정 없이 방문할 수 있겠어.

     0.00s  user  발화 시작: 그랜드뷰 로프트에 육월 십오일에 방문 예약을 잡아줘.
     3.24s  <ret> 발화 (turn1 첫 프레임)
     3.47s  agent 발화 시작: <ret> 그랜드뷰 로프트에 육월 십오일 오후 두시에 방문 예약을 잡아드렸어요. 괜찮으신가요?
     3.69s  user  발화 끝
     5.24s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.16s]: (tool result) Appointment scheduled for June 15th at 2:00 PM.
     9.63s  agent 발화 끝
    10.94s  user  발화 시작: 음… 세시로 좀 늦춰줄 수 있어? 그날 오후에 다른 일정이 생겨서.
    15.74s  <ret> 발화 (turn3 첫 프레임)
    16.05s  agent 발화 시작: <ret> 네, 육월 십오일 오후 세시로 시간을 변경해 드렸어요. 이제 괜찮으시죠?
    16.07s  user  발화 끝
    17.74s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.19s]: (tool result) Rescheduled to June 15th at 3:00 PM.
    21.16s  user  발화 시작: 응, 좋아. 아, 근데 그랜드뷰 로프트는… 솔직히 이름만 들어봤지, 정확히 어디 있는지 잘 몰라.
    21.24s  agent 발화 끝
    28.14s  agent 발화 시작: 그랜드뷰 로프트는 강남역 근처에 위치하고 있어요. 찾아가는 길을 안내해 드릴까요?
    28.25s  user  발화 끝
    33.77s  user  발화 시작: 응, 부탁해. 지금 바로 길 안내 시작해줘.
    33.97s  agent 발화 끝
    37.18s  <ret> 발화 (turn7 첫 프레임)
    37.37s  user  발화 끝
    37.41s  agent 발화 시작: <ret> 그랜드뷰 로프트까지 가는 길을 안내해 드릴게요. 예상 소요 시간은 이십오분 정도예요.
    38.30s  ⚡SPAN 주입 [d'=1.12s / d_lead=5.79s]: (tool result) Calculating route to The Grandview Lofts. Estimated trav
    43.20s  agent 발화 끝
    44.08s  user  발화 시작: 이십오분… 생각보다 가깝네. 혹시 그쪽 근처에 주차 공간이 있는지 알아봐 줄 수 있어?
    49.97s  <ret> 발화 (turn9 첫 프레임)
    50.03s  agent 발화 시작: <ret> 그랜드뷰 로프트에는 주차 공간이 있지만, 공간이 제한적이에요. 시간당 오천 원의 주차 요금이 있어
    50.15s  user  발화 끝
    51.33s  ⚡SPAN 주입 [d'=1.36s / d_lead=7.65s]: (tool result) Parking available on-site, limited spaces. Cost: 5,000 w
    55.00s  user  발화 시작: 음.
    55.41s  user  발화 끝
    57.63s  user  발화 시작: 오천 원… 괜찮아. 그럼, 혹시 그 건물에 반려동물 동반이 가능한지도 확인해 줄래? 강아지를 데려가고 싶어서
    57.68s  agent 발화 끝
    65.32s  <ret> 발화 (turn12 첫 프레임)
    65.36s  user  발화 끝
    65.64s  agent 발화 시작: <ret> 네, 반려동물 동반이 가능하지만, 무게 제한이 십kg이에요.
    66.52s  ⚡SPAN 주입 [d'=1.20s / d_lead=4.40s]: (tool result) Pets are allowed with a weight limit of 10 kg.
    70.01s  user  발화 시작: 십kg… 우리 멍멍이는 팔kg이라 괜찮겠네. 다행이다. 근데 혹시 그 로프트, 전망은 어때?
    70.04s  agent 발화 끝
    77.52s  agent 발화 시작: 그랜드뷰 로프트는 높은 층에 위치해서 탁 트인 도시 전망을 자랑해요. 특히 해 질 녘 풍경이 아름답다고 하네
    77.70s  user  발화 끝
    85.90s  agent 발화 끝
    86.04s  user  발화 시작: 오, 멋지다. 그럼… 혹시 그 근처에 괜찮은 카페도 알아봐 줄 수 있어? 방문 전에 커피 한 잔 하고 싶어서
    92.99s  <ret> 발화 (turn16 첫 프레임)
    93.05s  agent 발화 시작: <ret> 그랜드뷰 로프트 근처에 카페 블룸, 커피빈, 아로마 카페 세 곳이 있어요.
    93.12s  user  발화 끝
    94.99s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.37s]: (tool result) Three cafes found within 500m: Cafe Bloom, Coffee Bean, 
    96.12s  user  발화 시작: 응응.
    96.61s  user  발화 끝
    98.41s  user  발화 시작: 카페 블룸… 거기가 제일 괜찮아 보이는데. 거기로 가는 길도 알려줄 수 있어?
    98.42s  agent 발화 끝
   103.63s  <ret> 발화 (turn19 첫 프레임)
   103.73s  user  발화 끝
   103.76s  agent 발화 시작: <ret> 카페 블룸까지 가는 길을 안내해 드릴게요. 예상 소요 시간은 팔분 정도예요.
   105.60s  user  발화 시작: 오.
   105.63s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.81s]: (tool result) Calculating route to Cafe Bloom. Estimated travel time: 
   106.23s  user  발화 끝
   108.57s  agent 발화 끝
   108.74s  user  발화 시작: 좋아. 그럼, 혹시… 육월 십오일 오후 세시 그랜드뷰 로프트 방문 예약 건 다시 한 번 확인해 줄래?
   116.15s  agent 발화 시작: 네, 육월 십오일 오후 세시에 그랜드뷰 로프트 방문 예약을 확인해 드립니다. 반려동물 동반 가능하고, 주차 
   116.17s  user  발화 끝
   126.45s  agent 발화 끝
   126.58s  user  발화 시작: 고마워, 텔러. 덕분에 걱정 없이 방문할 수 있겠어.
   130.27s  agent 발화 시작: 천만에요. 즐거운 방문 되세요.
   130.38s  user  발화 끝
   133.14s  agent 발화 끝
   135.44s  user  발화 시작: 아, 잠깐만! 카페 블룸… 그게 아니라, 블룸앤블룸이었나?
   139.12s  <ret> 발화 (turn26 첫 프레임)
   139.44s  agent 발화 시작: <ret> 아, 블룸앤블룸이군요. 찾았습니다.
   139.60s  user  발화 끝
   140.32s  ⚡SPAN 주입 [d'=1.20s / d_lead=2.86s]: (tool result) Bloom & Bloom found within 500m.
   142.10s  user  발화 시작: 맞아, 블룸앤블룸. 그럼 블룸앤블룸으로 가는 길을 알려줘.
   142.30s  agent 발화 끝
   145.79s  <ret> 발화 (turn28 첫 프레임)
   145.84s  user  발화 끝
   145.94s  agent 발화 시작: <ret> 블룸앤블룸까지 가는 길을 안내해 드릴게요. 예상 소요 시간은 십분 정도예요.
   147.47s  ⚡SPAN 주입 [d'=1.68s / d_lead=5.32s]: (tool result) Calculating route to Bloom & Bloom. Estimated travel tim
   151.26s  agent 발화 끝
