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

# EXAMINER(FDB-v2) 단계: S1 데미 로바토 새 앨범 언제 나와? 2015년 기준으로. | S2 아, 잠깐만. 그 앨범 이름이 뭐였지? | S3 어떤 노래가 제일 유명해? | S4 그 앨범이 데미 로바토한테 어떤 의미였는데?

     0.00s  user  발화 시작: 데미 로바토 새 앨범 언제 나와? 2015년 기준으로.
     4.16s  user  발화 끝
     4.25s  <ret> 발화 (turn1 첫 프레임)
     4.40s  agent 발화 시작: <ret> 음, 2015년에 새 앨범을 냈었지. 잠깐만 기억을 좀 떠올려볼게.
     6.25s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.51s]: October 2015.
     9.76s  agent 발화 시작: 2015년 10월에 새 앨범이 나왔어.
     9.91s  agent 발화 끝
    12.53s  agent 발화 끝
    12.60s  user  발화 시작: 10월이라고? 몇 번째 앨범이었어?
    15.09s  <ret> 발화 (turn4 첫 프레임)
    15.33s  agent 발화 시작: <ret> 데미 로바토 앨범은 여러 장이 나왔으니까, 몇 번째인지 정확히 말하려면 좀 더 알아봐야겠네.
    15.37s  user  발화 끝
    17.09s  ⚡SPAN 주입(IRRELEVANT) [d'=2.00s / d_lead=5.65s]: The Sahara Desert is the largest hot desert in the world, covering muc
    20.98s  agent 발화 끝
    21.26s  user  발화 시작: 아, 잠깐만. 그 앨범 이름이 뭐였지?
    24.41s  user  발화 끝
    24.89s  agent 발화 시작: 그 앨범 이름은…
    26.34s  <ret> 발화 (turn7 첫 프레임)
    26.50s  agent 발화 시작: <ret> 음, 2015년에 나온 데미 로바토 앨범은… 2015년 10월에 Confidence라는 앨범이 나
    26.55s  agent 발화 끝
    28.02s  ⚡SPAN 주입 [d'=1.68s / d_lead=3.33s]: October 2015.
    28.77s  user  발화 시작: 음.
    29.26s  user  발화 끝
    32.46s  agent 발화 시작: Confidence 앨범은 데미 로바토에게 중요한 전환점이 되었지. 좀 더 자세히 알아볼까?
    32.61s  agent 발화 끝
    38.70s  user  발화 시작: Confidence? 괜찮은 앨범이었어?
    38.81s  agent 발화 끝
    41.14s  user  발화 끝
    41.17s  agent 발화 시작: 많은 팬들이 그 앨범을 아주 좋아했어. 데미 로바토의 솔직한 감정이 잘 드러나 있다고 하더라.
    47.04s  user  발화 시작: 어떤 노래가 제일 유명해?
    47.66s  agent 발화 끝
    48.66s  agent 발화 시작: 그 앨범에서 Cool for the Summer라는 노래가 가장 많은 사랑을 받았어.
    48.78s  user  발화 끝
    52.60s  user  발화 시작: Cool for the Summer? 그거 들었어. 좋았어.
    52.64s  agent 발화 끝
    56.22s  agent 발화 시작: 그래? 다행이다. 그 노래는 데미 로바토의 새로운 면모를 보여주는 곡이라고 생각해.
    56.29s  user  발화 끝
    59.16s  user  발화 시작: 음.
    59.47s  user  발화 끝
    62.01s  agent 발화 끝
    62.86s  user  발화 시작: 그 앨범이 데미 로바토한테 어떤 의미였는데?
    65.82s  user  발화 끝
    66.11s  agent 발화 시작: 그 앨범을 통해 데미 로바토는 자신감을 되찾고, 솔직한 모습을 보여주기로 결심했어. 힘든 시간을 극복하는 과
    70.39s  user  발화 시작: 음.
    70.89s  user  발화 끝
    75.15s  agent 발화 끝
    75.33s  user  발화 시작: 힘든 시간이라니, 무슨 일 있었어?
    77.78s  user  발화 끝
    78.01s  agent 발화 시작: 데미 로바토는 과거에 여러 어려움을 겪었는데, 그 경험들이 앨범에 많은 영향을 줬어. 좀 더 자세히 알고 싶
    85.80s  agent 발화 끝
