# v3_mem_35_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_35",
#     "name": "Grace",
#     "location": {
#       "city": "Paris",
#       "country": "France",
#       "timezone": "Europe/Paris (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "French",
#     "gender": "female",
#     "age_range": "50s",
#     "language": "French"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-10",
#       "category": "work",
#       "text": "User works as a physical therapist."
#     },
#     {
#       "date": "2026-05-14",
#       "category": "hobby",
#       "text": "User is into birdwatching."
#     },
#     {
#       "date": "2026-02-12",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     },
#     {
#       "date": "2025-11-27",
#       "category": "allergy",
#       "text": "User is allergic to peanuts."
#     },
#     {
#       "date": "2025-09-08",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2025-07-24",
#       "category": "home",
#       "text": "User's home address is 911 Oak Avenue."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-07",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2026-04-18",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2025-07-08",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: Hi Grace, I'm Sios. It's lovely to meet you. I understand yo
     5.98s  user  발화 시작: Um, welll… I’m planning a short trip, and I’d like a recomme
     6.02s  agent 발화 끝
    12.74s  user  발화 끝
    12.85s  agent 발화 시작: A relaxing place sounds wonderful. Do you have any preferenc
    14.81s  user  발화 시작: Mm-hmm.
    15.58s  user  발화 끝
    18.70s  <ret> 발화 (turn4 첫 프레임)
    18.86s  agent 발화 시작: <ret> I recall you enjoy birdwatching.
    18.86s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.26s]: [2026-05-14] User is into birdwatching. That could be a wonderful focu
    18.96s  agent 발화 끝
    20.12s  user  발화 시작: Yeah.
    20.57s  user  발화 끝
    21.12s  agent 발화 끝
    22.52s  user  발화 시작: Oh, yes! That’s right, I do love birdwatching. Where would y
    27.27s  <ret> 발화 (turn7 첫 프레임)
    27.43s  agent 발화 시작: <ret> Corsica, France, is known for its diverse birdlife and
    27.43s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.74s]: Corsica, France: Known for its diverse birdlife, stunning landscapes, 
    27.52s  user  발화 끝
    30.76s  user  발화 시작: Okay.
    31.25s  user  발화 끝
    35.16s  agent 발화 끝
    35.55s  user  발화 시작: Corsica… that sounds lovely!
    38.80s  user  발화 끝
