# v3_rag_26_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_26",
#     "name": "도원",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "early 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-10",
#       "category": "pet",
#       "text": "User has a Beagle named Rusty."
#     },
#     {
#       "date": "2026-03-01",
#       "category": "trip",
#       "text": "User is planning a trip to Kyoto in December."
#     },
#     {
#       "date": "2026-02-09",
#       "category": "work",
#       "text": "User works as a architect."
#     },
#     {
#       "date": "2025-09-27",
#       "category": "diet",
#       "text": "User is pescatarian."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-10",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2026-04-04",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2025-10-19",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 음… 요즘 독일 여행을 좀 알아보고 있는데, 독일 국기가 어떻 | S2 아, 검은색, 빨간색, 금색이구나. 다른 나라 국기랑 헷갈릴까 | S3 와, 역사적인 의미가 있었구나. 몰랐네. 혹시 독일 국기 디자 | S4 천구백십구년이라… 그렇군요. 독일 여행 준비하면서 국기 색깔이

     0.00s  user  발화 시작: 음… 요즘 독일 여행을 좀 알아보고 있는데, 독일 국기가 어떻게 생겼는지 궁금해. 검은색, 빨간색, 노란색이
     9.70s  <ret> 발화 (turn1 첫 프레임)
     9.77s  agent 발화 시작: <ret> 독일 국기에 대해 궁금하시다니, 제가 알려 드릴게요.
     9.96s  user  발화 끝
    11.22s  ⚡SPAN 주입 [d'=1.52s / d_lead=3.10s]: [source: Britannica] The flag of Germany is a tricolor of black, red, 
    12.87s  agent 발화 끝
    12.97s  agent 발화 시작: 독일 국기는 검은색, 빨간색, 그리고 금색으로 이루어진 삼색기입니다.
    17.65s  agent 발화 끝
    17.79s  user  발화 시작: 아, 검은색, 빨간색, 금색이구나. 다른 나라 국기랑 헷갈릴까 봐 걱정했는데 다행이다. 근데 그 색깔들은 무
    26.87s  <ret> 발화 (turn4 첫 프레임)
    27.03s  agent 발화 시작: <ret> 다른 나라 국기랑 헷갈릴까 봐 걱정하시는 마음은 충분히 이해가 돼요. 그 색깔들은 독일의 역사와 
    27.29s  user  발화 끝
    28.87s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.32s]: [source: History.com] The colors black, red, and gold were adopted dur
    34.35s  agent 발화 끝
    34.51s  agent 발화 시작: 검은색, 빨간색, 금색은 천팔백사십팔년 혁명 당시 채택되었으며, 자유, 평등, 박애를 상징한다고 해요.
    37.78s  user  발화 시작: 응응.
    38.42s  user  발화 끝
    41.45s  agent 발화 끝
    41.73s  user  발화 시작: 와, 역사적인 의미가 있었구나. 몰랐네. 혹시 독일 국기 디자인이 바뀐 적은 있어?
    47.23s  <ret> 발화 (turn8 첫 프레임)
    47.30s  agent 발화 시작: <ret> 네, 독일 국기 디자인은 역사를 거치면서 몇 번 바뀌었어요.
    47.42s  user  발화 끝
    48.99s  ⚡SPAN 주입 [d'=1.76s / d_lead=3.56s]: [source: Flags of the World] The current design of the German flag was
    50.87s  agent 발화 끝
    50.94s  agent 발화 시작: 현재 독일 국기 디자인은 일차 세계 대전 이후 천구백십구년에 공식적으로 채택되었고, 서독 건국과 함께 천구백
    61.17s  user  발화 시작: 천구백십구년이라… 그렇군요. 독일 여행 준비하면서 국기 색깔이랑 의미 정도는 알아두면 좋겠네. 고마워요!
    61.23s  agent 발화 끝
    69.20s  agent 발화 시작: 여행 준비에 도움이 되었다니 기쁘네요. 즐거운 여행 되세요!
    69.23s  user  발화 끝
    72.62s  agent 발화 끝
