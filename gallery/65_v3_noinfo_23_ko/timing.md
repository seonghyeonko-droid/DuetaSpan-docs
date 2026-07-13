# v3_noinfo_23_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_noinfo_23",
#     "name": "보진",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "40s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-03",
#       "category": "trip",
#       "text": "User is planning a trip to Lisbon in March."
#     },
#     {
#       "date": "2026-03-16",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-03-02",
#       "category": "work",
#       "text": "User works as a graphic designer."
#     },
#     {
#       "date": "2026-01-28",
#       "category": "home",
#       "text": "User's home address is 인천 연수구 송도동 12-5."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-04",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2026-02-15",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 엄마 친구분 연락처 알 수 있어? | S2 아니, 이탈리안 괜찮아 보여. 예약해 줘. | S3 … 잠깐만, 혹시 거기서 택시 잡기 어려워? | S4 아니, 괜찮아. 직접 알아볼게. 고마워, 조랄!

     0.00s  user  발화 시작: 엄마 친구분 연락처 알 수 있어?
     2.50s  <ret> 발화 (turn1 첫 프레임)
     2.86s  agent 발화 시작: <ret> 죄송해요, 엄마 친구분 연락처는 찾을 수 없었어요. 개인 정보라서 그런 것 같아요.
     2.86s  user  발화 끝
     2.95s  ⚡SPAN 주입 [d'=0.46s / d_lead=5.72s]: (no information found)
     8.58s  user  발화 시작: 아, 그렇구나. 그럼 이번 주 토요일에 갈 만한 맛집 추천해 줄래?
     8.58s  agent 발화 끝
    13.68s  <ret> 발화 (turn3 첫 프레임)
    13.82s  agent 발화 시작: <ret> 근처에 분위기 좋은 이탈리안 레스토랑이 있어요.
    13.82s  user  발화 끝
    14.57s  ⚡SPAN 주입 [d'=0.89s / d_lead=2.86s]: Restaurants_2_FindRestaurants
    16.68s  user  발화 시작: 아.
    16.68s  agent 발화 끝
    17.16s  agent 발화 시작: 파스타랑 피자가 맛있대요. 다른 곳도 찾아볼까요?
    17.16s  user  발화 끝
    20.02s  user  발화 시작: 아니, 이탈리안 괜찮아 보여. 예약해 줘.
    20.02s  agent 발화 끝
    22.66s  <ret> 발화 (turn7 첫 프레임)
    22.88s  agent 발화 시작: <ret> 네, 토요일 저녁 일곱시에 벨라 이탈리아 레스토랑 두 분 자리로 예약 완료됐어요. 확인 번호는 팔
    22.88s  user  발화 끝
    23.94s  ⚡SPAN 주입 [d'=1.28s / d_lead=9.53s]: (tool result) Reservation confirmed for 2 people at Bella Italia on Sa
    32.41s  user  발화 시작: 응.
    32.41s  agent 발화 끝
    32.89s  user  발화 시작: 고마워. 그런데, 혹시 그 레스토랑 주변에 주차는 편해?
    32.89s  user  발화 끝
    36.31s  <ret> 발화 (turn10 첫 프레임)
    36.61s  ⚡SPAN 주입 [d'=0.30s / d_lead=4.29s]: Restaurants_2_FindRestaurants
    36.70s  agent 발화 시작: <ret> 벨라 이탈리아 주변에는 유료 주차장이 몇 군데 있어요 —
    36.70s  user  발화 끝
    40.99s  user  발화 시작: … 잠깐만, 혹시 거기서 택시 잡기 어려워?
    40.99s  agent 발화 끝
    44.33s  agent 발화 시작: 택시 잡기는… 조금 어려울 수도 있어요. 특히 저녁 시간에는 —
    44.33s  user  발화 끝
    49.09s  user  발화 시작: 그럼, 그냥 버스 타고 갈까? 버스 정류장이 가까워?
    49.09s  agent 발화 끝
    52.91s  agent 발화 시작: 그렇죠.
    52.91s  user  발화 끝
    52.99s  <ret> 발화 (turn15 첫 프레임)
    53.38s  agent 발화 시작: <ret> 버스 정류장은 도보로 오분 거리에 있어요. 칠번 버스를 타면 바로 앞까지 갈 수 있어요. 혹시 버
    53.38s  agent 발화 끝
    53.60s  ⚡SPAN 주입 [d'=0.61s / d_lead=8.58s]: Buses_3_FindBus
    61.96s  user  발화 시작: 아니, 괜찮아. 직접 알아볼게. 고마워, 조랄!
    61.96s  agent 발화 끝
    64.82s  agent 발화 시작: 천만에요. 언제든 편하게 물어보세요. 즐거운 주말 보내세요!
    64.82s  user  발화 끝
    68.16s  agent 발화 끝
