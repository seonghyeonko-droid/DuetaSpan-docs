# v3_backg_17_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_backg_17",
#     "name": "Bruno",
#     "location": {
#       "city": "Sydney",
#       "country": "Australia",
#       "timezone": "Australia/Sydney (AEDT, UTC+11)",
#       "currency": "AUD ($)"
#     },
#     "nationality": "Australian",
#     "gender": "male",
#     "age_range": "50s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-28",
#       "category": "trip",
#       "text": "User is planning a trip to Lisbon in October."
#     },
#     {
#       "date": "2026-02-22",
#       "category": "allergy",
#       "text": "User is allergic to pollen."
#     },
#     {
#       "date": "2025-12-30",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     },
#     {
#       "date": "2025-06-15",
#       "category": "home",
#       "text": "User's home address is 82 Oak Avenue."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-01-20",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2025-12-26",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2025-09-02",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Hi Daeen, I was wondering about th | S2 Oh, wow, I didn't know that. Was i | S3 So, those counties just… formed th | S4 That makes sense. It sounds pretty

     0.00s  user  발화 시작: Hi Daeen, I was wondering about the Civil War.
     3.32s  agent 발화 시작: Hello! It’s lovely to explore history with you. What specifi
     3.32s  user  발화 끝
     8.48s  user  발화 시작: Which state actually split apart because of it?
     8.48s  agent 발화 끝
    11.03s  <ret> 발화 (turn3 첫 프레임)
    11.43s  agent 발화 시작: <ret> A new state was actually formed during the Civil War—W
    11.43s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.27s]: West Virginia was formed as a new state during the American Civil War,
    11.43s  user  발화 끝
    17.70s  user  발화 시작: Oh, wow, I didn't know that. Was it a difficult process?
    17.70s  agent 발화 끝
    21.75s  agent 발화 시작: It certainly was a complex time, politically and socially. I
    21.75s  user  발화 끝
    28.02s  user  발화 시작: That'd be great. Tell me a bit more about why Virginia split
    28.02s  agent 발화 끝
    32.29s  <ret> 발화 (turn7 첫 프레임)
    32.45s  agent 발화 시작: <ret> Virginia seceded in April of eighteen sixty-one, but w
    32.45s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.64s]: Virginia seceded from the Union in April 1861, but many counties in th
    32.45s  user  발화 끝
    39.08s  user  발화 시작: Mm-hmm.
    39.08s  agent 발화 끝
    39.45s  user  발화 시작: So, those counties just… formed their own state?
    39.45s  user  발화 끝
    42.40s  agent 발화 시작: Well, it wasn't quite that simple—
    42.40s  user  발화 끝
    44.61s  user  발화 시작: …did Virginia fight back against that at all?
    44.61s  agent 발화 끝
    47.24s  <ret> 발화 (turn12 첫 프레임)
    47.56s  agent 발화 시작: <ret> Virginia’s Confederate government did initially oppose
    47.56s  ⚡SPAN 주입 [d'=1.52s / d_lead=5.53s]: Virginia’s Confederate government initially opposed the creation of We
    47.56s  user  발화 끝
    53.09s  user  발화 시작: That makes sense. It sounds pretty messy.
    53.09s  agent 발화 끝
    55.67s  agent 발화 시작: History often is, isn’t it? It’s fascinating how these event
    55.67s  user  발화 끝
    63.42s  agent 발화 끝
