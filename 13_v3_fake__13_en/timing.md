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
     0.00s  <ret> 발화 (turn1 첫 프레임)
     0.07s  <ret> 발화 (turn3 첫 프레임)
     0.11s  agent 발화 시작: <ret> Well, that’s a great question! The UK last hosted the 
     0.11s  ⚡SPAN 주입 [d'=0.19s / d_lead=0.19s]: The United Kingdom hosted the FIFA World Cup tournament once, in the y
     0.11s  user  발화 끝
     0.30s  user  발화 시작: Oh, right.
     0.30s  agent 발화 끝
     0.31s  agent 발화 시작: <ret> It’s amazing how long ago that was, isn’t it? That tou
     0.31s  ⚡SPAN 주입(IRRELEVANT) [d'=0.13s / d_lead=0.13s]: The average high temperature in Reykjavik, Iceland in February is -1.8
     0.31s  user  발화 끝
     0.45s  agent 발화 시작: Speaking of big events, are you working towards any personal
     0.45s  agent 발화 끝
     0.62s  user  발화 시작: Yeah.
     0.62s  agent 발화 끝
     0.63s  user  발화 시작: I am, actually. I’m studying for my exams.
     0.63s  user  발화 끝
     0.69s  agent 발화 시작: That's fantastic! Exams can be tough, but you've got this. R
     0.69s  user  발화 끝
     0.82s  user  발화 시작: Uh-huh.
     0.82s  agent 발화 끝
     0.83s  user  발화 시작: That’s a good idea, thanks.
     0.83s  user  발화 끝
     0.87s  agent 발화 시작: You’re very welcome! I’m always here to help you stay on tra
     0.87s  user  발화 끝
     1.00s  agent 발화 끝
