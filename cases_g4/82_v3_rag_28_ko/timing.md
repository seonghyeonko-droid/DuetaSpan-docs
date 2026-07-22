# v3_rag_28_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_28",
#     "name": "재국",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "early 40s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-08",
#       "category": "car",
#       "text": "User drives a 2019 Hyundai Tucson."
#     },
#     {
#       "date": "2026-03-31",
#       "category": "music",
#       "text": "User likes listening to K-ballads."
#     },
#     {
#       "date": "2026-03-20",
#       "category": "gym",
#       "text": "User has a gym membership near the station."
#     },
#     {
#       "date": "2026-03-11",
#       "category": "schedule",
#       "text": "User has early shifts starting at 6am."
#     },
#     {
#       "date": "2026-01-19",
#       "category": "child",
#       "text": "User has a child named Leo, age 16."
#     },
#     {
#       "date": "2026-01-10",
#       "category": "wake",
#       "text": "User usually wakes up close to 9am after night shifts."
#     },
#     {
#       "date": "2026-01-01",
#       "category": "pet",
#       "text": "User has a Pomeranian named Bori."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-01-19",
#       "title": "Planning a wedding",
#       "bullets": [
#         "guest list around 80 people",
#         "comparing two venues for next May"
#       ]
#     },
#     {
#       "date": "2026-01-07",
#       "title": "Learning to invest",
#       "bullets": [
#         "asked about index funds vs individual stocks",
#         "wants to start with 500k won a month"
#       ]
#     },
#     {
#       "date": "2025-12-04",
#       "title": "Booking a Japan trip",
#       "bullets": [
#         "5 nights in Kyoto and Osaka in October",
#         "wants a JR Pass and a ryokan for one night"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 드로라온 님, 제가 뉴욕으로 이사를 가게 됐는데 야구에 관심이 | S2 음, 제가 알기로는 가끔 특별한 날에… | S3 맞아요. 그런데 지금 뉴욕 날씨는 어떤지 궁금해요. 유니폼 고 | S4 그렇군요. 역시 공식 앱이 제일 안전하겠죠.

     0.00s  user  발화 시작: 드로라온 님, 제가 뉴욕으로 이사를 가게 됐는데 야구에 관심이 생겼어요. 뉴욕 양키스 유니폼에 대해 궁금한 
     8.39s  user  발화 끝
     8.60s  agent 발화 시작: [happy] 뉴욕 생활 시작하시네요! 정말 설레시겠어요. 양키스 유니폼에 대해 어떤 게 궁금하세요?
    11.07s  user  발화 시작: 네.
    11.38s  user  발화 끝
    14.52s  agent 발화 끝
    16.75s  user  발화 시작: 그 유명한 핀스트라이프 유니폼은 언제 입는 건가요?
    20.12s  user  발화 끝
    20.28s  <ret> 발화 (turn4 첫 프레임)
    20.34s  agent 발화 시작: <ret> 아, 그 줄무늬 유니폼 말씀하시죠? 양키스 선수들은 홈 경기 때 핀스트라이프 유니폼을 입습니다.
    21.36s  ⚡SPAN 주입 [d'=1.08s / d_lead=2.74s]: The New York Yankees wear their pinstripe uniforms for home games.
    27.47s  agent 발화 끝
    28.53s  user  발화 시작: 정말요? 원정 경기 때는 절대 안 입는다고 확신하세요?
    32.55s  user  발화 끝
    32.66s  agent 발화 시작: [curious] 보통은 홈에서만 입는 게 전통이에요. 원정에서는 보통 회색 유니폼을 입거든요.
    38.16s  user  발화 시작: 음, 제가 알기로는 가끔 특별한 날에…
    38.22s  agent 발화 끝
    40.88s  user  발화 끝
    42.23s  user  발화 시작: …입을 때도 있다고 들었는데 틀린 건가요?
    43.79s  agent 발화 시작: 그렇죠.
    44.42s  <ret> 발화 (turn10 첫 프레임)
    44.42s  agent 발화 끝
    44.76s  agent 발화 시작: <ret> 아, 그럴 수도 있겠네요. 기본적으로는 홈에서 핀스트라이프를, 원정에서는 회색 유니폼을 입는 것이
    44.77s  user  발화 끝
    45.75s  ⚡SPAN 주입 [d'=1.33s / d_lead=2.42s]: The New York Yankees traditionally wear pinstripes at home and grey on
    52.63s  agent 발화 끝
    52.96s  user  발화 시작: 전통이라고 하셔도 요즘은 많이 바뀌었잖아요. 너무 교과서적인 답변 아니세요?
    58.46s  agent 발화 시작: [laugh] 제가 너무 정석대로 말씀드렸나 봐요. 사실 스포츠 세계에 절대적인 건 없으니까요.
    58.48s  user  발화 끝
    62.72s  user  발화 시작: 예.
    63.21s  user  발화 끝
    66.46s  user  발화 시작: 맞아요. 그런데 지금 뉴욕 날씨는 어떤지 궁금해요. 유니폼 고를 때 날씨도 중요하니까요.
    66.57s  agent 발화 끝
    72.95s  user  발화 끝
    73.01s  <ret> 발화 (turn15 첫 프레임)
    73.07s  agent 발화 시작: <ret> 현재 뉴욕 날씨는 십팔도로 구름이 조금 끼어 있습니다.
    74.59s  ⚡SPAN 주입 [d'=1.58s / d_lead=3.37s]: (tool result) New York City: 18 degrees Celsius, partly cloudy.
    76.25s  user  발화 시작: 십팔도면 꽤 쌀쌀하겠는데요? 가벼운 외투가 필요하겠어요.
    76.45s  agent 발화 끝
    80.41s  user  발화 끝
    80.52s  agent 발화 시작: 네, 맞아요. 뉴욕의 바람이 생각보다 차가울 수 있어서—
    83.76s  user  발화 시작: 혹시 뉴욕에서 야구 경기 티켓은 어디서 구하는 게 제일 좋은가요?
    84.45s  agent 발화 끝
    87.51s  user  발화 끝
    87.52s  agent 발화 시작: 보통 공식 홈페이지나 공인 리셀 사이트를 많이 이용하세요. 처음 가시는 거면 공식 앱을 추천드려요.
    92.12s  user  발화 시작: 맞아요.
    92.62s  user  발화 끝
    93.83s  agent 발화 끝
    94.41s  user  발화 시작: 그렇군요. 역시 공식 앱이 제일 안전하겠죠.
    97.70s  agent 발화 시작: [happy] 네, 맞습니다. 안전하게 예매하시고 즐거운 관람 되시길 바랄게요!
    97.73s  user  발화 끝
   101.92s  user  발화 시작: 고마워요. 덕분에 뉴욕 정착 준비가 훨씬 수월해질 것 같아요.
   102.23s  agent 발화 끝
   106.36s  user  발화 끝
