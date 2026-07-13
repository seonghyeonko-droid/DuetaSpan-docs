# v3_selfc_08_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_selfc_08",
#     "name": "준원",
#     "location": {
#       "city": "Busan",
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
#       "date": "2026-05-18",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     },
#     {
#       "date": "2026-04-22",
#       "category": "hobby",
#       "text": "User is into vintage synth collecting."
#     },
#     {
#       "date": "2025-12-28",
#       "category": "trip",
#       "text": "User is planning a trip to New Zealand in December."
#     },
#     {
#       "date": "2025-08-25",
#       "category": "pet",
#       "text": "User has a Poodle named Coco."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-09-20",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 이번 주 토요일에 친구랑 영화 보러 가려고 하는데… | S2 아, '엘리멘탈' 봤어. 다른 거 찾아줘. 좀 더… 액션 같은 | S3 톰 크루즈 좋아하는데… 예매해 줘. 혹시, 저번에 얘기했던 거 | S4 영화 예매해 줘. '미션 임파서블' 두 장.

     0.00s  user  발화 시작: 이번 주 토요일에 친구랑 영화 보러 가려고 하는데…
     3.60s  user  발화 시작: …괜찮은 영화 있을까?
     3.60s  user  발화 끝
     4.63s  <ret> 발화 (turn2 첫 프레임)
     4.95s  agent 발화 시작: <ret> '엘리멘탈'이 평점 구 점 이로 가장 인기 있는 영화입니다.
     4.95s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.05s]: {"query": "영화", "location": "서울", "date": "2026-07-11"}
     4.95s  user  발화 끝
     9.00s  user  발화 시작: 아, '엘리멘탈' 봤어. 다른 거 찾아줘. 좀 더… 액션 같은 거.
     9.00s  agent 발화 끝
    13.54s  <ret> 발화 (turn4 첫 프레임)
    13.94s  agent 발화 시작: <ret> 액션 영화를 원하시는군요. '미션 임파서블: 데드 레코닝 PART ONE'이 평점 팔 점 팔로 상
    13.94s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.75s]: {"query": "액션 영화", "location": "서울", "date": "2026-07-11"}
    13.94s  user  발화 끝
    20.69s  user  발화 시작: 어머.
    20.69s  agent 발화 끝
    21.14s  agent 발화 시작: 이 영화는 톰 크루즈 주연의 스릴 넘치는 액션 영화예요.
    21.14s  user  발화 끝
    25.19s  user  발화 시작: 응.
    25.19s  agent 발화 끝
    25.64s  user  발화 시작: 톰 크루즈 좋아하는데… 예매해 줘. 혹시, 저번에 얘기했던 거 기억나?
    25.64s  user  발화 끝
    30.06s  <ret> 발화 (turn9 첫 프레임)
    30.14s  agent 발화 시작: <ret> 네, 명상 앱 찾는다고 말씀하셨죠. 지금은 영화 예매부터 할까요?
    30.14s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.05s]: [2026-07-07] 저는 스트레스 해소에 도움이 되는 명상 앱을 찾고 있어요.
    30.14s  user  발화 끝
    34.19s  user  발화 시작: 응, 영화 예매 먼저. 근데… 예매 전에 잠깐만. 이번 주말에 부산 가는 기차표 있나? — 아니, 잠깐만, 
    34.19s  agent 발화 끝
    48.34s  <ret> 발화 (turn11 첫 프레임)
    48.58s  agent 발화 시작: <ret> 토요일 오후 세시 이십분에 매진 직전이에요.
    48.58s  ⚡SPAN 주입 [d'=1.20s / d_lead=2.70s]: {"departure_station": "수서역", "arrival_station": "부산역", "date": "2026-0
    48.58s  user  발화 끝
    51.28s  agent 발화 시작: 기차표 예매는 잠시 후에 하시고, 지금은 영화 예매를 계속할까요?
    51.28s  agent 발화 끝
    55.33s  user  발화 시작: 응.
    55.33s  agent 발화 끝
    55.78s  user  발화 시작: 영화 예매해 줘. '미션 임파서블' 두 장.
    55.78s  user  발화 끝
    58.69s  <ret> 발화 (turn15 첫 프레임)
    58.93s  agent 발화 시작: <ret> 영화 '미션 임파서블: 데드 레코닝 PART ONE' 두 장 예매가 완료되었습니다. 예매번호는 에
    58.93s  ⚡SPAN 주입 [d'=1.36s / d_lead=7.20s]: (tool result) 영화 '미션 임파서블: 데드 레코닝 PART ONE' 2인 예매 완료되었습니다. 예매번호는 A7B9입
    58.93s  user  발화 끝
    66.12s  agent 발화 시작: 스트레스 해소에 도움이 되는 명상 앱도 다시 알아봐 드릴까요?
    66.12s  agent 발화 끝
    70.17s  agent 발화 끝
