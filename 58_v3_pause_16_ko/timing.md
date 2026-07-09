# v3_pause_16_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_pause_16",
#     "name": "Andrea",
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
#       "date": "2026-08-04",
#       "category": "home",
#       "text": "User's home address is 148 Elm Street."
#     },
#     {
#       "date": "2026-06-19",
#       "category": "diet",
#       "text": "User is vegetarian."
#     },
#     {
#       "date": "2026-03-14",
#       "category": "trip",
#       "text": "User is planning a trip to Vietnam in May."
#     },
#     {
#       "date": "2026-03-06",
#       "category": "work",
#       "text": "User works as a graduate student."
#     },
#     {
#       "date": "2026-01-25",
#       "category": "allergy",
#       "text": "User is allergic to pollen."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-07-05",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2026-04-18",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 빅 브라더라는 말은 어디에서 유래한 걸까요? | S2 스탈린이라… 소련이랑 관련이 있었던 거군요. | S3 …브라더는 어떤 역할을 했죠? | S4 아니요, 오늘은 이 정도면 충분할 것 같아요.

     0.00s  user  발화 시작: 빅 브라더라는 말은 어디에서 유래한 걸까요?
     3.10s  agent 발화 시작: 빅 브라더라는 용어의 기원에 대해 궁금하시군요.
     3.23s  user  발화 끝
     5.86s  <ret> 발화 (turn2 첫 프레임)
     6.20s  agent 발화 끝
     6.25s  agent 발화 시작: <ret> 그 단어가 처음 사용된 곳은… 조지 오웰의 소설, *천구백팔십사*에서 전체주의 감시 국가를 묘사하
     7.38s  ⚡SPAN 주입 [d'=1.52s / d_lead=2.74s]: [source: Wikipedia] George Orwell's novel *Nineteen Eighty-Four* intro
    16.68s  agent 발화 끝
    16.70s  user  발화 시작: 아, 오웰 소설에서 나왔군요…
    18.89s  agent 발화 시작: 오웰이 왜 ‘빅 브라더’라는 표현을 선택했는지, 더 자세히 알아보실까요?
    19.05s  user  발화 끝
    23.32s  <ret> 발화 (turn5 첫 프레임)
    23.46s  agent 발화 시작: <ret> 그 선택에는 당시 사회적 배경이… 오웰은 ‘빅 브라더’ 개념을 요제프 스탈린과 소련의 개인 숭배 
    23.53s  agent 발화 끝
    24.92s  ⚡SPAN 주입 [d'=1.60s / d_lead=2.24s]: [source: Literary Hub] Orwell modeled the concept of Big Brother on Jo
    27.29s  user  발화 시작: 아.
    27.69s  user  발화 끝
    31.53s  agent 발화 끝
    32.09s  user  발화 시작: 스탈린이라… 소련이랑 관련이 있었던 거군요.
    35.74s  user  발화 끝
    35.75s  agent 발화 시작: 맞아요. 오웰은 당시 사회 분위기를 반영해서 그런 표현을 사용했어요.
    40.17s  agent 발화 시작: 혹시 천구백팔십사년 소설에 대해 더 궁금한 점이 있으신가요?
    40.29s  agent 발화 끝
    44.24s  agent 발화 끝
    44.61s  user  발화 시작: 음… 소설 속 빅…
    46.09s  user  발화 끝
    46.91s  user  발화 시작: …브라더는 어떤 역할을 했죠?
    48.57s  <ret> 발화 (turn12 첫 프레임)
    48.88s  agent 발화 시작: <ret> 소설 속에서 빅 브라더는… *천구백팔십사*에서 빅 브라더는 겉으로는 자비로운 듯하지만, 실상은 독
    48.98s  user  발화 끝
    49.77s  ⚡SPAN 주입 [d'=1.20s / d_lead=3.02s]: [source: Britannica] In *Nineteen Eighty-Four*, Big Brother is the see
    52.06s  user  발화 시작: 네.
    52.51s  user  발화 끝
    59.33s  user  발화 시작: 독재자였군요.
    59.45s  agent 발화 끝
    60.66s  user  발화 끝
    60.87s  agent 발화 시작: 네, 빅 브라더는 소설 속에서 끊임없이 사람들을 감시하고 통제하는 역할을 해요.
    66.06s  agent 발화 끝
    66.08s  agent 발화 시작: 혹시 다른 소설 작품에 대해서도 궁금하신 점이 있으신가요?
    67.41s  user  발화 시작: 네.
    67.90s  user  발화 끝
    69.68s  agent 발화 끝
    70.32s  user  발화 시작: 아니요, 오늘은 이 정도면 충분할 것 같아요.
    73.09s  user  발화 끝
    73.18s  agent 발화 시작: 알겠습니다. 도움이 되었다니 다행이네요.
    76.14s  agent 발화 끝
