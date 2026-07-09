# v3_rag_26_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_26",
#     "name": "Emilia",
#     "location": {
#       "city": "San Francisco",
#       "country": "United States",
#       "timezone": "America/Los_Angeles (PST, UTC-8)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "female",
#     "age_range": "late 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-23",
#       "category": "home",
#       "text": "User's home address is 249 Cedar Lane."
#     },
#     {
#       "date": "2026-03-15",
#       "category": "pet",
#       "text": "User has a Beagle named Rusty."
#     },
#     {
#       "date": "2026-02-13",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2026-01-11",
#       "category": "work",
#       "text": "User works as a accountant."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-08-04",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2026-05-28",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 음… 독일 국기 색깔이 뭐였더라? 까만색, 빨간색, 그리고… | S2 벨기에 국기는 어때? | S3 아, 벨기에는 노란색이네. 독일이랑 좀 다르네. | S4 독일 국기 색깔이 역사적으로 무슨 의미가 있었나?

     0.00s  user  발화 시작: 음… 독일 국기 색깔이 뭐였더라? 까만색, 빨간색, 그리고…
     4.92s  <ret> 발화 (turn1 첫 프레임)
     4.99s  agent 발화 시작: <ret> 독일 국기 색깔에 대해 궁금하시군요. 독일 국기는 검은색, 빨간색, 그리고 금색 가로 줄무늬로 이
     5.18s  user  발화 끝
     6.44s  ⚡SPAN 주입 [d'=1.52s / d_lead=2.80s]: [source: Britannica] The flag of Germany displays black, red, and gold
    13.37s  user  발화 시작: 금색이라고? 금색은 좀 특이하네. 다른 나라도 비슷한 색깔 쓰는 곳 있어?
    13.39s  agent 발화 끝
    19.38s  agent 발화 시작: 비슷한 색 조합을 가진 국기는 여러 나라에 있어요. 어떤 나라가 궁금하신가요?
    19.44s  user  발화 끝
    21.97s  user  발화 시작: 응응.
    22.69s  user  발화 끝
    25.12s  agent 발화 끝
    25.17s  user  발화 시작: 벨기에 국기는 어때?
    26.82s  <ret> 발화 (turn6 첫 프레임)
    26.97s  agent 발화 시작: <ret> 벨기에 국기 색깔도 한번 알아볼까요? 벨기에 국기는 검은색, 노란색, 빨간색 세 가지 색으로 이루
    27.10s  user  발화 끝
    28.18s  ⚡SPAN 주입 [d'=1.36s / d_lead=2.48s]: [source: Wikipedia] The flag of Belgium is a tricolour of black, yello
    34.36s  user  발화 시작: 아, 벨기에는 노란색이네. 독일이랑 좀 다르네.
    34.42s  agent 발화 끝
    38.00s  agent 발화 시작: 맞아요. 독일 국기는 금색이고 벨기에 국기는 노란색이라 조금 차이가 있어요. [happy]
    38.06s  user  발화 끝
    43.38s  user  발화 시작: 독일 국기 색깔이 역사적으로 무슨 의미가 있었나?
    43.65s  agent 발화 끝
    46.62s  <ret> 발화 (turn10 첫 프레임)
    46.76s  agent 발화 시작: <ret> 독일 국기 색깔에 얽힌 이야기가 있어요. 검은색, 빨간색, 금색은 나폴레옹 전쟁 당시 프랑스 지배
    46.94s  user  발화 끝
    48.62s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.74s]: [source: History.com] The black, red, and gold colors were adopted dur
    57.98s  agent 발화 끝
