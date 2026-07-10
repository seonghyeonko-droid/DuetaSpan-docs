# v3_to_ot_11_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_to_ot_11",
#     "name": "Alice",
#     "location": {
#       "city": "Sydney",
#       "country": "Australia",
#       "timezone": "Australia/Sydney (AEDT, UTC+11)",
#       "currency": "AUD ($)"
#     },
#     "nationality": "Australian",
#     "gender": "female",
#     "age_range": "50s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-01",
#       "category": "hobby",
#       "text": "User is into birdwatching."
#     },
#     {
#       "date": "2026-05-22",
#       "category": "trip",
#       "text": "User is planning a trip to Iceland in August."
#     },
#     {
#       "date": "2025-11-28",
#       "category": "pet",
#       "text": "User has a Poodle named Coco."
#     },
#     {
#       "date": "2025-09-06",
#       "category": "work",
#       "text": "User works as a marketing manager."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-18",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2025-10-27",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2025-08-27",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Hey Klos, who has the most steals  | S2 Wow, that’s a lot! | S3 …wait, was Scottie Pippen close be | S4 So Stockton has a pretty comfortab

     0.00s  user  발화 시작: Hey Klos, who has the most steals in NBA history?
     2.80s  <ret> 발화 (turn1 첫 프레임)
     3.19s  agent 발화 시작: <ret> It’s quite a record, actually—John Stockton finished h
     3.20s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.60s]: John Stockton retired as the NBA's all-time leader with 3,265 career s
     3.32s  user  발화 끝
     9.01s  user  발화 시작: Uh-huh.
     9.41s  user  발화 끝
    10.70s  user  발화 시작: Wow, that’s a lot!
    10.79s  agent 발화 끝
    11.96s  agent 발화 시작: It certainly is a testament to his dedication and skill on t
    12.18s  user  발화 끝
    14.62s  user  발화 시작: Yeah.
    15.06s  user  발화 끝
    16.63s  agent 발화 시작: Building strong defensive habits—like anticipating passes—is
    16.88s  agent 발화 끝
    24.19s  agent 발화 끝
    24.78s  user  발화 시작: …wait, was Scottie Pippen close behind him?
    26.95s  <ret> 발화 (turn8 첫 프레임)
    27.27s  agent 발화 시작: <ret> Scottie Pippen was indeed a fantastic defender, finish
    27.27s  ⚡SPAN 주입 [d'=1.76s / d_lead=7.32s]: Scottie Pippen is second all-time in NBA history with 2,433 career ste
    27.36s  user  발화 끝
    32.84s  user  발화 시작: Right.
    33.34s  user  발화 끝
    34.59s  agent 발화 끝
    34.89s  user  발화 시작: So Stockton has a pretty comfortable lead, then?
    37.34s  agent 발화 시작: It’s a significant margin—over eight hundred steals separate
    37.38s  user  발화 끝
    42.62s  agent 발화 끝
