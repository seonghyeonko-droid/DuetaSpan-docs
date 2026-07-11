# v3_rag_24_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_24",
#     "name": "Grace",
#     "location": {
#       "city": "Berlin",
#       "country": "Germany",
#       "timezone": "Europe/Berlin (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "German",
#     "gender": "female",
#     "age_range": "early 20s",
#     "language": "German"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-02-15",
#       "category": "pet",
#       "text": "User has a Siamese cat named Bella."
#     },
#     {
#       "date": "2025-12-02",
#       "category": "work",
#       "text": "User works as a graphic designer."
#     },
#     {
#       "date": "2025-08-16",
#       "category": "diet",
#       "text": "User is vegan."
#     },
#     {
#       "date": "2025-08-08",
#       "category": "allergy",
#       "text": "User is allergic to peanuts."
#     },
#     {
#       "date": "2025-08-05",
#       "category": "hobby",
#       "text": "User is into home fermentation."
#     },
#     {
#       "date": "2025-06-03",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-13",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2026-04-14",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2025-10-29",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Hi, I'm planning a vacation and fe | S2 I was wondering, where does *Need  | S3 What’s the weather like there righ | S4 That sounds…nice. Maybe I should g

     0.00s  user  발화 시작: Hi, I'm planning a vacation and feeling a bit overwhelmed.
     0.00s  <ret> 발화 (turn3 첫 프레임)
     0.11s  agent 발화 시작: Oh, hello!
     0.11s  user  발화 끝
     0.13s  user  발화 시작: I was wondering, where does *Need for Speed Payback* take pl
     0.13s  agent 발화 끝
     0.26s  agent 발화 시작: <ret> Well, *Need for Speed Payback* is primarily set in For
     0.26s  ⚡SPAN 주입 [d'=0.22s / d_lead=0.22s]: The game *Need for Speed Payback* is largely set in Fortune Valley, a 
     0.26s  user  발화 끝
     0.48s  user  발화 시작: Uh-huh.
     0.48s  agent 발화 끝
     0.49s  <ret> 발화 (turn6 첫 프레임)
     0.49s  user  발화 시작: What’s the weather like there right now?
     0.49s  user  발화 끝
     0.57s  agent 발화 시작: <ret> Currently in Fortune Valley, Nevada, it’s 28.3 degrees
     0.57s  ⚡SPAN 주입 [d'=0.17s / d_lead=0.17s]: (tool result) Fortune Valley, Nevada: 28.3°C, humidity 21%, wind 13.4 
     0.57s  user  발화 끝
     0.73s  user  발화 시작: That sounds…nice. Maybe I should go in October?
     0.73s  agent 발화 끝
     0.82s  agent 발화 시작: October sounds lovely! It's a great time to enjoy pleasant w
     0.82s  user  발화 끝
     1.00s  agent 발화 끝
