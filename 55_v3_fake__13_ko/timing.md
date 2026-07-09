# v3_fake__13_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_fake__13",
#     "name": "Casey",
#     "location": {
#       "city": "London",
#       "country": "United Kingdom",
#       "timezone": "Europe/London (GMT, UTC+0)",
#       "currency": "GBP (£)"
#     },
#     "nationality": "British",
#     "gender": "non-binary",
#     "age_range": "early 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-08",
#       "category": "hobby",
#       "text": "User is into rock climbing."
#     },
#     {
#       "date": "2026-04-03",
#       "category": "pet",
#       "text": "User has a tabby cat named Luna."
#     },
#     {
#       "date": "2026-03-10",
#       "category": "work",
#       "text": "User works as a nurse."
#     },
#     {
#       "date": "2026-01-26",
#       "category": "home",
#       "text": "User's home address is 203 Birch Road."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-07-22",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2026-07-04",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2026-06-26",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 데미 로바토 새 앨범 언제 나와? 2015년 기준으로. | S2 잠깐만, 혹시 그 앨범에 어떤 노래가 수록되어 있는지 알아볼  | S3 잠깐만, 혹시 그 앨범 예약 구매할 수 있는 곳 있어? | S4 고마워, 덕분에 궁금증이 다 풀렸어.

     0.00s  user  발화 시작: 데미 로바토 새 앨범 언제 나와? 2015년 기준으로.
     4.12s  user  발화 끝
     4.23s  <ret> 발화 (turn1 첫 프레임)
     4.39s  agent 발화 시작: <ret> 음, 데미 로바토의 새 앨범이 언제 나오는지 궁금하시군요. 잠깐만 알아볼게요.
     6.23s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.06s]: October 2015.
    10.25s  agent 발화 시작: 2015년 10월에 데미 로바토의 새 앨범이 발매될 예정이에요.
    10.45s  agent 발화 끝
    14.46s  agent 발화 끝
    14.56s  user  발화 시작: 아, 10월이구나. 그럼 그 앨범 이름은 뭔데?
    17.98s  <ret> 발화 (turn4 첫 프레임)
    18.06s  agent 발화 시작: <ret> 앨범 이름을 알고 싶으시군요. 제가 기억하기로는…
    18.08s  user  발화 끝
    19.98s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.84s]: October 2015.
    21.77s  agent 발화 시작: 2015년 10월에 발매되는 앨범에 대한 정보는 지금 바로 찾아서 알려드릴게요.
    21.91s  agent 발화 끝
    27.09s  agent 발화 끝
    27.45s  user  발화 시작: 잠깐만, 혹시 그 앨범에 어떤 노래가 수록되어 있는지 알아볼 수 있어?
    32.08s  user  발화 끝
    32.18s  <ret> 발화 (turn7 첫 프레임)
    32.58s  agent 발화 시작: <ret> 아, 앨범 수록곡에 대해 궁금하시군요. 그럼 먼저 앨범 이름부터 알아보고, 그 다음에 수록곡을 찾
    34.18s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.90s]: October 2015.
    39.41s  agent 발화 시작: 2015년 10월에 데미 로바토의 새 앨범이 출시될 예정이에요. 앨범 이름은 아직 확인 중이에요.
    39.48s  agent 발화 끝
    42.15s  user  발화 시작: 음.
    42.65s  user  발화 끝
    46.26s  <ret> 발화 (turn10 첫 프레임)
    46.58s  agent 발화 시작: <ret> 데미 로바토의 음악 스타일은 워낙 다양해서, 이번 앨범도 여러 가지 장르를 아우를 것으로 예상돼요
    46.68s  agent 발화 끝
    48.26s  ⚡SPAN 주입(IRRELEVANT) [d'=2.00s / d_lead=10.15s]: The giraffe is the tallest mammal on Earth.
    56.57s  agent 발화 시작: 새로운 음악을 듣는 건 정말 기분 좋은 일이죠. 마치 새로운 세상을 탐험하는 것 같아요—
    56.73s  agent 발화 끝
    62.00s  user  발화 시작: 잠깐만, 혹시 그 앨범 예약 구매할 수 있는 곳 있어?
    62.68s  agent 발화 끝
    65.29s  <ret> 발화 (turn13 첫 프레임)
    65.60s  user  발화 끝
    65.61s  agent 발화 시작: <ret> 예약 구매 정보가 궁금하시군요. 제가 바로 확인해 볼게요.
    66.73s  ⚡SPAN 주입 [d'=1.44s / d_lead=4.02s]: (tool result) Amazon: $12.99 / Target: $11.99 / Walmart: $10.99.
    69.59s  agent 발화 시작: 아마존에서는 십이 달러 구십구 센트, 타겟에서는 십일 달러 구십구 센트, 월마트에서는 십 달러 구십구 센트에
    69.63s  agent 발화 끝
    78.64s  agent 발화 끝
    78.78s  user  발화 시작: 와, 월마트가 제일 싸네. 그럼 월마트에서 예약 구매하는 걸로 할게.
    84.16s  agent 발화 시작: 월마트에서 예약 구매하시는군요. 좋은 선택이에요. 새로운 앨범을 즐겁게 감상하시길 바랄게요.
    84.25s  user  발화 끝
    90.64s  user  발화 시작: 고마워, 덕분에 궁금증이 다 풀렸어.
    90.69s  agent 발화 끝
    93.59s  user  발화 끝
