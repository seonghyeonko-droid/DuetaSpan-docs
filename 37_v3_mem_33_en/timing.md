# v3_mem_33_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_33",
#     "name": "Casey",
#     "location": {
#       "city": "Toronto",
#       "country": "Canada",
#       "timezone": "America/Toronto (EST, UTC-5)",
#       "currency": "CAD ($)"
#     },
#     "nationality": "Canadian",
#     "gender": "non-binary",
#     "age_range": "early 20s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-06",
#       "category": "work",
#       "text": "User works as a architect."
#     },
#     {
#       "date": "2026-04-17",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-04-12",
#       "category": "hobby",
#       "text": "User is into home fermentation."
#     },
#     {
#       "date": "2026-04-05",
#       "category": "allergy",
#       "text": "User is allergic to pollen."
#     },
#     {
#       "date": "2026-01-29",
#       "category": "diet",
#       "text": "User is pescatarian."
#     },
#     {
#       "date": "2026-01-07",
#       "category": "home",
#       "text": "User's home address is 444 Pine Court."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-03-19",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2026-01-08",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2025-12-16",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: Hi Casey, I'm Nis. It's great to connect with you! I'm a lif
     6.88s  user  발화 시작: Yeah.
     6.88s  agent 발화 끝
     7.23s  user  발화 시작: Um, hi Nis. What time is it right now?
     7.23s  user  발화 끝
     9.95s  <ret> 발화 (turn3 첫 프레임)
    10.26s  ⚡SPAN 주입 [d'=1.11s / d_lead=6.19s]: (tool result) It is Friday, July 10, 2026 at 2:37 PM in Toronto.
    10.32s  agent 발화 시작: <ret> It is currently 2:37 PM in Toronto, Casey. A perfect t
    10.32s  user  발화 끝
    16.52s  user  발화 시작: Mm-hmm.
    16.52s  agent 발화 끝
    16.86s  user  발화 시작: Oh, right. I remember I told you I'm an architect.
    16.86s  user  발화 끝
    20.06s  <ret> 발화 (turn6 첫 프레임)
    20.30s  agent 발화 시작: <ret> Yes, you did mention you work as an architect back on 
    20.30s  user  발화 끝
    20.52s  ⚡SPAN 주입 [d'=0.46s / d_lead=7.57s]: [2026-05-06] User works as a architect.
    27.87s  agent 발화 끝
