# v3_fake__13_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_fake__13",
#     "name": "Morgan",
#     "location": {
#       "city": "Toronto",
#       "country": "Canada",
#       "timezone": "America/Toronto (EST, UTC-5)",
#       "currency": "CAD ($)"
#     },
#     "nationality": "Canadian",
#     "gender": "non-binary",
#     "age_range": "late 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-27",
#       "category": "diet",
#       "text": "User is pescatarian."
#     },
#     {
#       "date": "2026-05-26",
#       "category": "home",
#       "text": "User's home address is 41 Oak Avenue."
#     },
#     {
#       "date": "2026-02-24",
#       "category": "allergy",
#       "text": "User is allergic to shellfish."
#     },
#     {
#       "date": "2026-02-09",
#       "category": "pet",
#       "text": "User has a Poodle named Coco."
#     },
#     {
#       "date": "2026-01-15",
#       "category": "trip",
#       "text": "User is planning a trip to Switzerland in May."
#     },
#     {
#       "date": "2025-08-08",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Mexican."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-14",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2025-11-04",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2025-09-06",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Hi Kal, do you know when the World | S2 Oh, right. | S3 I am, actually. I’m studying for m | S4 That’s a good idea, thanks.

     0.00s  user  발화 시작: Hi Kal, do you know when the World Cup was last held in the 
     3.97s  <ret> 발화 (turn1 첫 프레임)
     4.20s  agent 발화 시작: <ret> Well, that’s a great question! The UK last hosted the 
     4.21s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.46s]: The United Kingdom hosted the FIFA World Cup tournament once, in the y
     4.31s  user  발화 끝
    13.65s  agent 발화 끝
    13.74s  user  발화 시작: Oh, right.
    14.20s  <ret> 발화 (turn3 첫 프레임)
    14.56s  user  발화 끝
    14.59s  agent 발화 시작: <ret> It’s amazing how long ago that was, isn’t it? That tou
    14.60s  ⚡SPAN 주입(IRRELEVANT) [d'=1.52s / d_lead=5.46s]: The average high temperature in Reykjavik, Iceland in February is -1.8
    20.05s  agent 발화 끝
    20.05s  agent 발화 시작: Speaking of big events, are you working towards any personal
    22.73s  user  발화 시작: Yeah.
    23.36s  user  발화 끝
    28.30s  agent 발화 끝
    28.41s  user  발화 시작: I am, actually. I’m studying for my exams.
    32.05s  agent 발화 시작: That's fantastic! Exams can be tough, but you've got this. R
    32.07s  user  발화 끝
    35.03s  user  발화 시작: Uh-huh.
    35.62s  user  발화 끝
    39.54s  user  발화 시작: That’s a good idea, thanks.
    39.74s  agent 발화 끝
    41.49s  agent 발화 시작: You’re very welcome! I’m always here to help you stay on tra
    41.57s  user  발화 끝
    47.19s  agent 발화 끝
