# v3_rag_28_cs — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_28",
#     "name": "Max",
#     "location": {
#       "city": "San Francisco",
#       "country": "United States",
#       "timezone": "America/Los_Angeles (PST, UTC-8)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "male",
#     "age_range": "early 40s",
#     "language": "English"
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

# EXAMINER(FDB-v2) 단계: S1 안녕하세요 드로라온, 야구에 대해 좀 더 배우고 싶은데요. 양 | S2 잠시만요, 월드 시리즈 때는 어때요? 그때는 바뀌나요? | S3 좋아요. 사실 저 곧 뉴욕으로 이사 가는데, 대신 그걸 좀 도 | S4 장 보는 건 그냥…

     0.00s  user  발화 시작: 안녕하세요 드로라온, 야구에 대해 좀 더 배우고 싶은데요. 양키스는 언제 핀스트라이프 유니폼을 입나요?
     6.91s  <ret> 발화 (turn1 첫 프레임)
     6.92s  agent 발화 시작: <ret> 음, 확인해 보니 홈 경기를 치를 때마다 그 클래식한 핀스트라이프를 입어요.
     7.13s  user  발화 끝
     7.95s  ⚡SPAN 주입 [d'=1.04s / d_lead=4.68s]: The New York Yankees wear their classic pinstripe uniforms for home ga
     8.79s  user  발화 시작: 맞아요.
     9.42s  user  발화 끝
    11.60s  agent 발화 끝
    12.43s  user  발화 시작: 정말요? 저는 장소 상관없이 큰 경기면 다 입는 줄 알았어요.
    17.15s  user  발화 끝
    17.22s  agent 발화 시작: [curious] 아, 흔히들 그렇게 오해하시는데 핀스트라이프는 엄격하게 홈 구장에서만 입는 옷이에요.
    23.04s  user  발화 시작: 글쎄요, 잘 모르겠어요. 예전에 원정 경기 때 핀스트라이프 입은 걸 본 기억이 있거든요.
    23.24s  agent 발화 끝
    28.48s  <ret> 발화 (turn6 첫 프레임)
    28.57s  agent 발화 시작: <ret> 다시 한번 찾아봤는데, 홈 경기 때 핀스트라이프를 입는 게 규칙이라고 하네요.
    28.74s  user  발화 끝
    29.58s  ⚡SPAN 주입 [d'=1.10s / d_lead=4.86s]: The New York Yankees wear their classic pinstripe uniforms for home ga
    31.55s  user  발화 시작: 그렇죠.
    32.19s  user  발화 끝
    33.43s  agent 발화 끝
    34.39s  user  발화 시작: 잠시만요, 월드 시리즈 때는 어때요? 그때는 바뀌나요?
    38.13s  user  발화 끝
    38.26s  agent 발화 시작: [happy] 정말 좋은 질문이에요! 포스트시즌에서도 보통은 홈과 원정 전통을 그대로 따라요.
    45.85s  agent 발화 끝
    46.21s  user  발화 시작: 이거 헷갈리네요. 다른 팀 중에도 이렇게 하는 곳이 있나요?
    48.16s  agent 발화 시작: 음.
    48.70s  agent 발화 끝
    49.88s  <ret> 발화 (turn12 첫 프레임)
    50.01s  agent 발화 시작: <ret> 음, 찾아봤는데 정확히 똑같은 핀스트라이프 규칙을 가진 다른 팀들의 명단은 찾지 못했어요.
    50.14s  user  발화 끝
    51.61s  ⚡SPAN 주입 [d'=1.73s / d_lead=6.49s]: (no information found)
    56.49s  agent 발화 끝
    56.66s  user  발화 시작: 오늘은 세부적인 내용에 대해서 별로 도움이 안 되시네요!
    60.06s  agent 발화 시작: [sigh] 죄송해요. 제가 도와드리고 싶으니까 다른 방향으로 한번 알아볼까요?
    60.12s  user  발화 끝
    64.67s  user  발화 시작: 좋아요. 사실 저 곧 뉴욕으로 이사 가는데, 대신 그걸 좀 도와주실 수 있을까요?
    64.87s  agent 발화 끝
    68.82s  agent 발화 시작: 맞아요.
    69.54s  agent 발화 끝
    70.20s  agent 발화 시작: [happy] 와, 정말 설레시겠어요! 도시 생활에 잘 적응하시도록 제가 꼭 도와드릴게요.
    70.46s  user  발화 끝
    75.76s  user  발화 시작: 고마워요. 지금 거기 날씨가 어떤지 알려줄 수 있나요?
    75.85s  agent 발화 끝
    78.14s  agent 발화 시작: 네.
    78.92s  agent 발화 끝
    79.03s  <ret> 발화 (turn20 첫 프레임)
    79.63s  agent 발화 시작: <ret> 지금 뉴욕 시는 섭씨 이십이 점 이 도이고 구름이 조금 끼어 있어요.
    79.78s  user  발화 끝
    79.99s  ⚡SPAN 주입 [d'=0.96s / d_lead=4.99s]: (tool result) Current weather in New York City: 72 degrees Fahrenheit,
    84.62s  agent 발화 끝
    84.65s  user  발화 시작: 나쁘지 않네요. 이사 체크리스트에서 가장 먼저 해야 할 일이 뭘까요?
    89.92s  user  발화 끝
    90.32s  agent 발화 시작: 우선 주거 관련 서류부터 처리하시고, 그다음에 생필품을 살 수 있는 동네 마트를 찾아보시는 걸 추천해요.
    97.27s  user  발화 시작: 장 보는 건 그냥…
    97.49s  agent 발화 끝
    99.02s  user  발화 끝
   100.15s  user  발화 시작: …나중에 알아서 할게요. 괜찮은 동네 좀 알아요?
   101.96s  agent 발화 시작: 네.
   102.45s  agent 발화 끝
   103.56s  user  발화 끝
   103.63s  agent 발화 시작: 이제 막 시작하시는 단계니까, 예산에 맞춰서 몇몇 지역을 같이 살펴볼 수 있을 것 같은데—
   108.61s  user  발화 시작: 사실, 그냥 브루클린 쪽에 있는 집부터 먼저 찾아주실래요?
   109.33s  agent 발화 끝
   110.83s  agent 발화 시작: 예.
   111.33s  agent 발화 끝
   112.49s  <ret> 발화 (turn29 첫 프레임)
   112.82s  user  발화 끝
   112.85s  agent 발화 시작: <ret> 음, 찾아보니 윌리엄스버그에 있는 방 하나짜리 집이 삼천이백 달러고, 덤보에 있는 스튜디오 타입이
   113.09s  ⚡SPAN 주입 [d'=0.60s / d_lead=8.71s]: (tool result) Available homes in Brooklyn: 1BR apartment in Williamsbu
   121.56s  agent 발화 끝
