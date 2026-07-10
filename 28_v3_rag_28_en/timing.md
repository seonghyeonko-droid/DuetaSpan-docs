# v3_rag_28_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_28",
#     "name": "Lucia",
#     "location": {
#       "city": "San Francisco",
#       "country": "United States",
#       "timezone": "America/Los_Angeles (PST, UTC-8)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "female",
#     "age_range": "50s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-26",
#       "category": "work",
#       "text": "User works as a nurse."
#     },
#     {
#       "date": "2026-03-27",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2026-03-03",
#       "category": "allergy",
#       "text": "User is allergic to cat dander."
#     },
#     {
#       "date": "2025-10-11",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Mexican."
#     },
#     {
#       "date": "2025-07-27",
#       "category": "home",
#       "text": "User's home address is 820 Cedar Lane."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-29",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2025-11-13",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 So, I was reading about government | S2 …when was the Department of Vetera | S3 Nineteen thirty? That seems… late. | S4 So the hospital came first, and th

     0.00s  user  발화 시작: So, I was reading about government agencies, and I’m curious
     3.94s  user  발화 끝
     5.21s  user  발화 시작: …when was the Department of Veterans Affairs actually create
     8.30s  <ret> 발화 (turn2 첫 프레임)
     8.61s  agent 발화 시작: <ret> The Department of Veterans Affairs was established on 
     8.69s  user  발화 끝
     9.42s  ⚡SPAN 주입 [d'=1.12s / d_lead=6.95s]: The United States Department of Veterans Affairs was established on Ju
    15.56s  agent 발화 끝
    16.57s  user  발화 시작: Nineteen thirty? That seems… late. Weren't there veterans ne
    21.51s  <ret> 발화 (turn4 첫 프레임)
    21.91s  agent 발화 시작: <ret> Actually, yes. The first federal veterans’ hospital op
    22.03s  user  발화 끝
    23.51s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.97s]: The first federal veterans’ hospital opened in 1866, offering care to 
    31.88s  user  발화 시작: So the hospital came first, and then the department much lat
    31.88s  agent 발화 끝
    36.29s  <ret> 발화 (turn6 첫 프레임)
    36.68s  agent 발화 시작: <ret> You're right to question that. The Bureau of Pensions 
    36.84s  user  발화 끝
    38.29s  ⚡SPAN 주입 [d'=2.00s / d_lead=11.27s]: The Bureau of Pensions, established in 1861, initially handled veteran
    47.95s  agent 발화 끝
