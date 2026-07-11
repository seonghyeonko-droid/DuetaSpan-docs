# v3_defer_10_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_defer_10",
#     "name": "Ivy",
#     "location": {
#       "city": "Toronto",
#       "country": "Canada",
#       "timezone": "America/Toronto (EST, UTC-5)",
#       "currency": "CAD ($)"
#     },
#     "nationality": "Canadian",
#     "gender": "female",
#     "age_range": "late 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-03-22",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Mexican."
#     },
#     {
#       "date": "2025-12-06",
#       "category": "trip",
#       "text": "User is planning a trip to Kyoto in May."
#     },
#     {
#       "date": "2025-10-09",
#       "category": "hobby",
#       "text": "User is into home fermentation."
#     },
#     {
#       "date": "2025-07-21",
#       "category": "pet",
#       "text": "User has a Corgi named Mochi."
#     },
#     {
#       "date": "2025-07-18",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-03-06",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2025-12-26",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2025-10-09",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 How many images are on this webpag | S2 Um, that's good to know. Could you | S3 Just anything open now, I guess. | S4 Spice Route sounds nice.

     0.00s  user  발화 시작: How many images are on this webpage?
     0.00s  <ret> 발화 (turn1 첫 프레임)
     0.07s  agent 발화 시작: <ret> There are twelve images on this page, according to my 
     0.07s  ⚡SPAN 주입 [d'=0.17s / d_lead=0.17s]: (tool result) {"images": 12, "links": 25, "text content": "Example dom
     0.07s  user  발화 끝
     0.24s  user  발화 시작: Uh-huh.
     0.24s  agent 발화 끝
     0.26s  user  발화 시작: Um, that's good to know. Could you find me some restaurants 
     0.26s  user  발화 끝
     0.28s  <ret> 발화 (turn7 첫 프레임)
     0.38s  agent 발화 시작: Do you have a particular type of cuisine in mind, or a price
     0.38s  user  발화 끝
     0.52s  user  발화 시작: Yeah, totally.
     0.52s  agent 발화 끝
     0.54s  user  발화 시작: Just anything open now, I guess.
     0.54s  user  발화 끝
     0.60s  agent 발화 시작: <ret> Pasta Paradise and Spice Route are both open now. Past
     0.60s  ⚡SPAN 주입 [d'=0.20s / d_lead=0.20s]: (tool result) {"restaurants": [{"name": "Pasta Paradise", "address": "
     0.60s  user  발화 끝
     0.81s  user  발화 시작: Spice Route sounds nice.
     0.81s  agent 발화 끝
     0.85s  agent 발화 시작: That sounds lovely. Perhaps a little spice is just what you 
     0.85s  user  발화 끝
     1.00s  agent 발화 끝
