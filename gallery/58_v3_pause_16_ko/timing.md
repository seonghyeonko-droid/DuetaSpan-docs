# v3_pause_16_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_pause_16",
#     "name": "보별",
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
#       "date": "2026-05-12",
#       "category": "hobby",
#       "text": "User is into home fermentation."
#     },
#     {
#       "date": "2026-02-27",
#       "category": "home",
#       "text": "User's home address is 148 Elm Street."
#     },
#     {
#       "date": "2025-09-07",
#       "category": "work",
#       "text": "User works as a graphic designer."
#     },
#     {
#       "date": "2025-08-18",
#       "category": "trip",
#       "text": "User is planning a trip to Vietnam in May."
#     },
#     {
#       "date": "2025-05-28",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-08-02",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2025-06-03",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 빅 브라더라는 말이 어디서 왔는지 궁금했는데… | S2 뭔가 섬뜩하네요. 지금도 빅… | S3 생각보다 오래됐네요. 그 소설이 지금도 많이 읽히나요? | S4 혹시 그 소설을 영화화한 적도 있나요?

     0.00s  user  발화 시작: 빅 브라더라는 말이 어디서 왔는지 궁금했는데…
     3.05s  <ret> 발화 (turn1 첫 프레임)
     3.44s  agent 발화 시작: <ret> 조지 오웰의 디스토피아 소설 《천구백팔십사》의 주인공이 빅 브라더입니다.
     3.60s  user  발화 끝
     5.05s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.04s]: [source: Wikipedia] "Big Brother is the protagonist of George Orwell's
     8.35s  user  발화 시작: 아, 그렇군요. 그럼 그…
     8.49s  agent 발화 끝
    10.09s  user  발화 끝
    11.13s  user  발화 시작: …소설에서 어떤 의미로 사용됐어요?
    13.06s  <ret> 발화 (turn4 첫 프레임)
    13.38s  agent 발화 시작: <ret> 오웰의 소설에서 빅 브라더는 오세아니아를 지배하는 전지전능한 독재자입니다.
    13.58s  user  발화 끝
    15.06s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.65s]: [source: Britannica] "In Orwell’s novel, Big Brother is the seemingly 
    16.07s  user  발화 시작: 아.
    16.70s  user  발화 끝
    18.71s  user  발화 시작: 뭔가 섬뜩하네요. 지금도 빅…
    19.03s  agent 발화 끝
    20.55s  user  발화 끝
    22.34s  user  발화 시작: …브라더라는 표현을 많이 쓰잖아요.
    24.79s  user  발화 끝
    24.90s  agent 발화 시작: 현대 사회에서도 감시나 권력 남용을 비판할 때 자주 사용되죠.
    28.65s  agent 발화 끝
    29.12s  user  발화 시작: 혹시 그 소설이 출판된 해를 알 수 있을까요?
    31.79s  <ret> 발화 (turn10 첫 프레임)
    32.10s  agent 발화 시작: <ret> 《천구백팔십사》는 천구백사십구년에 출판되었습니다.
    32.17s  user  발화 끝
    33.23s  ⚡SPAN 주입 [d'=1.44s / d_lead=3.70s]: (tool result) 1949
    35.79s  agent 발화 끝
    35.97s  user  발화 시작: 생각보다 오래됐네요. 그 소설이 지금도 많이 읽히나요?
    39.24s  <ret> 발화 (turn12 첫 프레임)
    39.47s  agent 발화 시작: <ret> 《천구백팔십사》는 전 세계적으로 오천만 권 이상 판매되었습니다.
    39.72s  user  발화 끝
    40.89s  user  발화 시작: 네.
    41.16s  ⚡SPAN 주입 [d'=1.92s / d_lead=4.72s]: [source: Goodreads] "Nineteen Eighty-Four has sold over 50 million cop
    41.34s  user  발화 끝
    44.20s  agent 발화 끝
    44.38s  user  발화 시작: 와, 정말 대단하네요. 그 소설의 배경이 된 시대는 언제인가요?
    48.43s  <ret> 발화 (turn15 첫 프레임)
    48.59s  agent 발화 시작: <ret> 오웰은 자신의 시대, 천구백사십년대의 사회적, 정치적 흐름을 바탕으로 미래의 섬뜩한 비전을 만들었
    48.82s  user  발화 끝
    50.19s  ⚡SPAN 주입 [d'=1.76s / d_lead=7.74s]: [source: Literary Hub] "Orwell extrapolates from the social and politi
    51.48s  user  발화 시작: 네.
    51.94s  user  발화 끝
    56.34s  agent 발화 끝
    56.42s  user  발화 시작: 그럼 그 소설은 미래를 예측한 건가요?
    58.86s  user  발화 끝
    59.21s  agent 발화 시작: 미래를 예측했다고 보기는 어렵지만, 권력의 위험성을 경고하는 메시지를 담고 있습니다.
    64.91s  agent 발화 끝
    64.97s  user  발화 시작: 혹시 그 소설을 영화화한 적도 있나요?
    67.22s  <ret> 발화 (turn20 첫 프레임)
    67.53s  agent 발화 시작: <ret> 마이클 래드포드가 감독한 천구백팔십사년 영화가 있습니다.
    67.83s  user  발화 끝
    69.08s  user  발화 시작: 그렇죠.
    69.22s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.82s]: (tool result) 1984, directed by Michael Radford
    69.71s  user  발화 끝
    71.35s  agent 발화 끝
    71.99s  user  발화 시작: 아, 영화도 있었군요. 한번 찾아봐야겠어요.
    74.39s  agent 발화 시작: 좋은 선택입니다. 책과 영화 모두 깊은 생각을 하게 만드는 작품이죠.
    74.57s  user  발화 끝
    79.26s  agent 발화 끝
