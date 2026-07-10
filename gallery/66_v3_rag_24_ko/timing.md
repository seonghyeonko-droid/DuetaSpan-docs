# v3_rag_24_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_24",
#     "name": "시희",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "40s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-21",
#       "category": "work",
#       "text": "User works as a marketing manager."
#     },
#     {
#       "date": "2026-03-27",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Ethiopian."
#     },
#     {
#       "date": "2025-12-28",
#       "category": "diet",
#       "text": "User is vegan."
#     },
#     {
#       "date": "2025-12-22",
#       "category": "hobby",
#       "text": "User is into alpine wildflower photography."
#     },
#     {
#       "date": "2025-09-13",
#       "category": "home",
#       "text": "User's home address is 경기 성남시 분당구 판교로 235."
#     },
#     {
#       "date": "2025-07-21",
#       "category": "trip",
#       "text": "User is planning a trip to Vietnam in May."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-03-08",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2025-10-07",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2025-10-01",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 안녕하세요, 혹시 당구에 대해 좀 아세요? | S2 그럼 그 다음으로 많은… | S3 스티브 데이비스도 엄청나네요. — | S4 혹시 제가 당구를 배우고 싶은데, 좋은 강좌 같은 거 있을까요

     0.00s  user  발화 시작: 안녕하세요, 혹시 당구에 대해 좀 아세요?
     3.05s  agent 발화 시작: 안녕하세요! 당구에 대해 이야기하는 건 정말 즐거울 것 같아요. 스트레스 해소에도 좋고, 집중력 향상에도 도
     3.24s  user  발화 끝
    10.84s  agent 발화 끝
    12.31s  user  발화 시작: 음, 사실 당구 챔피언이 누구인지 궁금해서요.
    14.83s  <ret> 발화 (turn3 첫 프레임)
    15.22s  agent 발화 시작: <ret> 당구 역사상 가장 위대한 선수로 꼽히는 스티븐 헨드리가 천구백구십년에서 천구백구십구년 사이에 일곱
    15.23s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.82s]: Stephen Hendry won seven world titles between 1990 and 1999, and is wi
    15.46s  user  발화 끝
    24.69s  user  발화 시작: 와, 대단하네요.
    25.05s  agent 발화 끝
    26.02s  user  발화 끝
    26.04s  agent 발화 시작: 그렇죠? 정말 놀라운 기록이에요. 당구에 대한 열정을 공유할 수 있어서 기뻐요.
    31.27s  agent 발화 끝
    31.42s  user  발화 시작: 그럼 그 다음으로 많은…
    33.22s  user  발화 끝
    34.48s  user  발화 시작: …우승을 한 선수는 누구예요?
    36.13s  <ret> 발화 (turn8 첫 프레임)
    36.20s  agent 발화 시작: <ret> 스티브 데이비스는 천구백팔십년대에 여섯 번의 세계 챔피언십에서 우승하며 스포츠계의 지배적인 존재이
    36.21s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.80s]: Steve Davis won six world championships in the 1980s, becoming a domin
    36.32s  user  발화 끝
    41.88s  user  발화 시작: 아.
    42.38s  user  발화 끝
    44.89s  user  발화 시작: 스티브 데이비스도 엄청나네요. —
    45.01s  agent 발화 끝
    46.61s  user  발화 시작: …근데 요즘 당구는 예전만큼 인기 있어요?
    46.82s  user  발화 끝
    50.04s  <ret> 발화 (turn12 첫 프레임)
    50.43s  agent 발화 시작: <ret> Statista의 이천이십삼년 보고서에 따르면 세계 당구 시장 규모는 십삼억 칠천만 달러로 평가되
    50.44s  ⚡SPAN 주입 [d'=2.00s / d_lead=12.16s]: According to a 2023 report by Statista, the global billiards market wa
    50.68s  user  발화 끝
    59.08s  user  발화 시작: 응.
    59.47s  user  발화 끝
    62.44s  user  발화 시작: 꽤 큰 시장이네요.
    62.59s  agent 발화 끝
    63.70s  agent 발화 시작: 맞아요. 당구는 단순한 스포츠를 넘어 하나의 문화로 자리 잡고 있는 것 같아요.
    63.81s  user  발화 끝
    65.47s  user  발화 시작: 응.
    65.83s  user  발화 끝
    68.61s  agent 발화 끝
    68.77s  user  발화 시작: 혹시 제가 당구를 배우고 싶은데, 좋은 강좌 같은 거 있을까요?
    73.00s  <ret> 발화 (turn18 첫 프레임)
    73.15s  agent 발화 시작: <ret> 서울 강남구 테헤란로 사백이십칠에 있는 '큐 마스터 아카데미'에서 당구 강좌를 운영하고 있어요. 
    73.16s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.04s]: (tool result) {"restaurants": [{"name": "Cue Master Academy", "address
    73.21s  user  발화 끝
    76.75s  user  발화 시작: 진짜?
    77.38s  user  발화 끝
    82.17s  user  발화 시작: 오, 강남이군요. 감사합니다!
    82.19s  agent 발화 끝
    84.35s  agent 발화 시작: 천만에요! 즐겁게 당구를 배우시고 스트레스도 날려 버리시길 바랄게요.
    84.42s  user  발화 끝
    89.35s  agent 발화 끝
