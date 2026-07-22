# v3_fake__13_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_fake__13",
#     "name": "수안",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "early 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-11",
#       "category": "phone",
#       "text": "User uses an Xperia 1."
#     },
#     {
#       "date": "2026-05-03",
#       "category": "show",
#       "text": "User is currently watching a sci-fi series."
#     },
#     {
#       "date": "2026-04-26",
#       "category": "home",
#       "text": "User's home address is 부산 수영구 광안동 210-3."
#     },
#     {
#       "date": "2026-03-21",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Mexican."
#     },
#     {
#       "date": "2026-03-05",
#       "category": "skill",
#       "text": "User is quite experienced with alpine wildflower photography."
#     },
#     {
#       "date": "2026-02-17",
#       "category": "learning",
#       "text": "User is taking pottery classes."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-20",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool and a sauna",
#         "prefers one within 10 minutes of the office"
#       ]
#     },
#     {
#       "date": "2026-04-22",
#       "title": "Buying a gift for a parent",
#       "bullets": [
#         "mom's 60th birthday next month",
#         "considering a spa day or a watch"
#       ]
#     },
#     {
#       "date": "2026-03-01",
#       "title": "Learning to invest",
#       "bullets": [
#         "asked about index funds vs individual stocks",
#         "wants to start with 500k won a month"
#       ]
#     },
#     {
#       "date": "2026-02-23",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers for a 3-story house",
#         "wanted coverage for the basement office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 스타워즈 보는데 궁금한 게 생겼어. 레아 공주가 루크가 자기  | S2 근데 그전에 힌트 같은 건 없었나? | S3 아, 생각났다! 루크는 이미 알고 있었지? | S4 ㅋㅋㅋ 갑자기 웬 여행 계획?

     0.00s  user  발화 시작: 스타워즈 보는데 궁금한 게 생겼어. 레아 공주가 루크가 자기 오빠라는 걸 언제 알게 돼?
     7.16s  <ret> 발화 (turn1 첫 프레임)
     7.28s  agent 발화 시작: <ret> 아, 그 부분 정말 극적이죠. 레아가 루크가 오빠라는 사실을 알게 되는 건 바로 리턴 오브 더 제
     7.32s  user  발화 끝
     8.39s  ⚡SPAN 주입 [d'=1.23s / d_lead=2.57s]: Leia learns that Luke is her brother in the movie Return of the Jedi.
    16.44s  user  발화 시작: 아, 맞다. 거기서 알게 됐지.
    16.55s  agent 발화 끝
    19.16s  user  발화 끝
    19.56s  agent 발화 시작: [happy] 두 사람이 서로 정체를 알게 됐을 때 표정이 정말 기억에 남아요.
    24.79s  agent 발화 끝
    26.00s  user  발화 시작: 근데 그전에 힌트 같은 건 없었나?
    28.07s  <ret> 발화 (turn5 첫 프레임)
    28.21s  agent 발화 시작: <ret> 사실 전편부터 묘한 유대감이 계속 느껴졌잖아요. 서로 끌리는 느낌 같은 거요.
    28.31s  user  발화 끝
    29.14s  ⚡SPAN 주입(IRRELEVANT) [d'=1.07s / d_lead=7.36s]: The current temperature in Reykjavik, Iceland is 8 degrees Celsius.
    31.43s  user  발화 시작: 어.
    32.11s  user  발화 끝
    35.57s  agent 발화 끝
    35.59s  agent 발화 시작: [curious] 그래서 많은 팬들이 그 전부터 이미 짐작하고 있었을 거예요.
    40.97s  agent 발화 끝
    41.59s  user  발화 시작: 루크는 언제 알았어?
    43.09s  agent 발화 시작: 루크는 그보다 조금 더 빨리—
    43.20s  user  발화 끝
    45.40s  user  발화 시작: 아, 생각났다! 루크는 이미 알고 있었지?
    46.05s  agent 발화 끝
    49.09s  user  발화 끝
    49.28s  agent 발화 시작: [laugh] 맞아요. 루크는 조금 더 일찍 알게 되어서 레아에게 알려주려고 했었죠.
    52.89s  user  발화 시작: 어.
    53.62s  user  발화 끝
    56.46s  agent 발화 끝
    56.62s  user  발화 시작: 진짜 가족 관계가 너무 복잡해.
    59.11s  agent 발화 시작: [sigh] 맞아요. 정말 얽히고설킨 관계죠. 여행 계획 짤 때처럼 차근차근 정리해서 보면 더 재밌으실 거예
    59.20s  user  발화 끝
    63.19s  user  발화 시작: 응응.
    63.82s  user  발화 끝
    69.54s  agent 발화 끝
    71.28s  user  발화 시작: ㅋㅋㅋ 갑자기 웬 여행 계획?
    74.51s  user  발화 끝
    74.59s  agent 발화 시작: 제가 평소에 여행 계획 세우는 걸 도와드리는 일을 하다 보니 저도 모르게 나왔네요.
    77.79s  user  발화 시작: 그치.
    78.41s  user  발화 끝
    80.75s  agent 발화 끝
    81.11s  user  발화 시작: 웃기네. 아무튼 고마워!
    84.31s  user  발화 끝
