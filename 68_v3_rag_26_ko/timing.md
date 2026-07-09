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

# EXAMINER(FDB-v2) 단계: S1 검은색, 빨간색, 노란색이 들어간 국기가 궁금해. 어떤 나라  | S2 글쎄… 독일? 독일 국기가 그런 색깔이었던가? | S3 금색이구나. 까먹었네. 다른 나라도 비슷한 색깔을 쓰나? | S4 어… 벨기에 국기는 좀 다르네. 검은색, 노란색, 빨간색이네.

     0.00s  user  발화 시작: 검은색, 빨간색, 노란색이 들어간 국기가 궁금해. 어떤 나라 국기일까?
     6.30s  agent 발화 시작: 음, 그 조합이면 꽤 여러 나라가 있을 수 있겠네요. 혹시 특별히 떠오르는 나라는 없으세요?
     6.39s  user  발화 끝
    13.25s  agent 발화 끝
    13.27s  user  발화 시작: 글쎄… 독일? 독일 국기가 그런 색깔이었던가?
    16.80s  <ret> 발화 (turn3 첫 프레임)
    17.11s  agent 발화 시작: <ret> 독일 국기는 검정색, 빨간색, 금색의 가로 줄무늬 세 개로 이루어져 있어요.
    17.29s  user  발화 끝
    18.80s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.42s]: [source: Britannica] The flag of Germany consists of three equal horiz
    19.04s  user  발화 시작: 음.
    19.58s  user  발화 끝
    22.53s  agent 발화 끝
    22.63s  user  발화 시작: 금색이구나. 까먹었네. 다른 나라도 비슷한 색깔을 쓰나?
    27.81s  user  발화 끝
    27.87s  agent 발화 시작: 물론이죠. 벨기에 국기도 비슷한 색상을 사용해요.
    31.32s  <ret> 발화 (turn7 첫 프레임)
    31.55s  agent 발화 시작: <ret> 벨기에 국기는 검정색, 노란색, 빨간색의 세로 줄무늬로 구성되어 있어요.
    31.66s  agent 발화 끝
    33.32s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.55s]: [source: Wikipedia] The Belgian flag is a tricolour of black, yellow a
    34.55s  user  발화 시작: 어어.
    35.32s  user  발화 끝
    37.10s  agent 발화 끝
    37.15s  user  발화 시작: 어… 벨기에 국기는 좀 다르네. 검은색, 노란색, 빨간색이네. 독일이랑 순서가 다르네.
    45.40s  agent 발화 시작: 맞아요. 독일은 검정, 빨강, 금색이고 벨기에는 검정, 노랑, 빨간색이라서 조금 차이가 있어요. 색깔은 비슷
    45.58s  user  발화 끝
    56.11s  agent 발화 끝
