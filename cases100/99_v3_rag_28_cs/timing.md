# v3_rag_28_cs — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_28",
#     "name": "Casey",
#     "location": {
#       "city": "Toronto",
#       "country": "Canada",
#       "timezone": "America/Toronto (EST, UTC-5)",
#       "currency": "CAD ($)"
#     },
#     "nationality": "Canadian",
#     "gender": "non-binary",
#     "age_range": "early 40s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-22",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-05-26",
#       "category": "temp",
#       "text": "User keeps the home thermostat around 22°C."
#     },
#     {
#       "date": "2026-05-22",
#       "category": "work",
#       "text": "User works as a pharmacist."
#     },
#     {
#       "date": "2026-04-23",
#       "category": "skill",
#       "text": "User is getting fairly good at freediving."
#     },
#     {
#       "date": "2026-04-19",
#       "category": "trip",
#       "text": "User is planning a trip to Lisbon in June."
#     },
#     {
#       "date": "2026-02-08",
#       "category": "dish",
#       "text": "User's go-to comfort dish is bún chả."
#     },
#     {
#       "date": "2026-01-31",
#       "category": "sibling",
#       "text": "User has a younger sibling named Lucas."
#     },
#     {
#       "date": "2025-12-29",
#       "category": "savings",
#       "text": "User is saving for a wedding."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-28",
#       "title": "Building a PC",
#       "bullets": [
#         "budget around 2M won for gaming",
#         "torn between two GPUs"
#       ]
#     },
#     {
#       "date": "2026-04-23",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers for a 3-story house",
#         "wanted coverage for the basement office"
#       ]
#     },
#     {
#       "date": "2026-03-10",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing the Kia Niro hybrid and Hyundai Ioniq",
#         "wants under 30k miles and below 25M won"
#       ]
#     },
#     {
#       "date": "2025-12-14",
#       "title": "Choosing a laptop",
#       "bullets": [
#         "budget around 1.8M won",
#         "needs it for video editing and light gaming"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 안녕 토라라, 요즘 진짜 외로워. | S2 응, 맞아. 내가 연락 안 하면 걔네들은 연락 안 하더라고. | S3 그건 알겠는데, '충분한' 노력이 뭔지 알기가 어렵잖아. | S4 그러면… 그냥 새로운 친구를 찾아? 말처럼 쉬운 일이 아니잖아

     0.00s  user  발화 시작: 안녕 토라라, 요즘 진짜 외로워.
     2.48s  agent 발화 시작: 안녕! 가끔 외로운 감정 드는 건 당연하고, 얘기해 줘서 정말 대단해.
     2.50s  user  발화 끝
     7.36s  user  발화 시작: 그냥… 내가 항상 먼저 연락하는 것 같아.
     7.62s  agent 발화 끝
    11.74s  agent 발화 시작: 힘들지, 그런 상황이면 외로울 만해. 계속 먼저 연락하는 데 에너지가 많이 들잖아.
    11.80s  user  발화 끝
    17.35s  user  발화 시작: 응, 맞아. 내가 연락 안 하면 걔네들은 연락 안 하더라고.
    17.49s  agent 발화 끝
    21.24s  agent 발화 시작: 친구 관계에서 균형이 안 맞는 것 같다는 걸 알아차린 거네. 그걸 인지하는 게 좋았어.
    21.24s  user  발화 끝
    22.99s  user  발화 시작: 그치.
    23.62s  user  발화 끝
    26.20s  user  발화 시작: 근데 뭘 해야 해? 그냥… 연락하는 걸 멈춰? 그건 너무 끔찍해.
    26.84s  agent 발화 끝
    30.38s  <ret> 발화 (turn8 첫 프레임)
    30.96s  agent 발화 시작: <ret> 건강한 관계는 서로 노력하는 게 중요하고, 그건 어느 정도 주고받는 걸 말하는 거야.
    31.15s  user  발화 끝
    31.55s  ⚡SPAN 주입 [d'=1.17s / d_lead=6.39s]: Reciprocity in relationships is a key component of maintaining healthy
    33.64s  user  발화 시작: 응.
    33.99s  user  발화 끝
    37.35s  agent 발화 끝
    37.38s  user  발화 시작: 그건 알겠는데, '충분한' 노력이 뭔지 알기가 어렵잖아.
    42.24s  agent 발화 시작: 맞아! 그건 정말 어려운 균형이야. 꼭 노력을 똑같이 맞춰야 하는 건 아니고, 소중하게 여겨지는 느낌을 받는
    42.29s  user  발화 끝
    50.44s  agent 발화 끝
    50.92s  user  발화 시작: 만약 걔네들이 그냥… 그걸 소중히 여기지 않으면 어떡해?
    54.29s  <ret> 발화 (turn13 첫 프레임)
    54.42s  agent 발화 시작: <ret> 연구에 따르면 끈끈한 관계가 행복과 스트레스 감소에 중요하다고 해. 좋은 친구가 있는 사람들은 더
    54.61s  user  발화 끝
    55.73s  ⚡SPAN 주입 [d'=1.44s / d_lead=9.50s]: A study by the University of California, Berkeley, found that individu
    63.92s  agent 발화 끝
    64.04s  user  발화 시작: 그러면… 그냥 새로운 친구를 찾아? 말처럼 쉬운 일이 아니잖아.
    69.13s  user  발화 끝
    69.31s  agent 발화 시작: 휴, 맞는 말이야. 쉽지 않아. 하지만 계속 너를 지치게 만드는 관계는 살짝 놓아주는 것도 괜찮아.
    76.54s  agent 발화 끝
