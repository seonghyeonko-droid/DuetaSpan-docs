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


     0.00s  user  발화 시작: I was just reading about government departments, and it made
     6.69s  <ret> 발화 (turn1 첫 프레임)
     7.01s  agent 발화 시작: <ret> The Department of Veterans Affairs was formally establ
     7.21s  user  발화 끝
     7.81s  ⚡SPAN 주입 [d'=1.12s / d_lead=5.18s]: [source: Britannica] The United States Department of Veterans Affairs 
    12.19s  agent 발화 끝
    12.60s  user  발화 시작: July 1930? That seems… late. I thought there must have been 
    20.64s  <ret> 발화 (turn3 첫 프레임)
    20.81s  user  발화 끝
    21.04s  agent 발화 시작: <ret> You’re right to question that—there were certainly eff
    22.64s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.37s]: [source: VA.gov] Prior to 1930, the Veterans Bureau, established in 19
    26.23s  agent 발화 시작: Support for veterans existed before 1930… through the Vetera
    26.42s  agent 발화 끝
    31.89s  agent 발화 끝
