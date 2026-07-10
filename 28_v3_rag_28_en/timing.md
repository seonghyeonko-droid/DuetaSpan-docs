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

# EXAMINER(FDB-v2) 단계: S1 I was just wondering, when did the | S2 …like it’s always been around. | S3 July 1930? That seems… surprisingl | S4 So, over a century before the depa

     0.00s  user  발화 시작: I was just wondering, when did the Veterans Affairs departme
     6.03s  user  발화 끝
     7.30s  user  발화 시작: …like it’s always been around.
    17.61s  <ret> 발화 (turn2 첫 프레임)
    17.92s  agent 발화 시작: <ret> The Department of Veterans Affairs was formally establ
    17.97s  user  발화 끝
    18.73s  ⚡SPAN 주입 [d'=1.12s / d_lead=5.19s]: [source: Britannica] The Department of Veterans Affairs was establishe
    23.11s  agent 발화 끝
    24.14s  user  발화 시작: July 1930? That seems… surprisingly recent. Didn’t they have
    34.09s  <ret> 발화 (turn4 첫 프레임)
    34.49s  agent 발화 시작: <ret> Before the Department of Veterans Affairs, veteran ben
    34.62s  user  발화 끝
    36.09s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.38s]: [source: VA.gov] Prior to 1930, veteran benefits were administered by 
    39.87s  agent 발화 끝
    39.87s  user  발화 시작: So, over a century before the department itself? That's a pr
    53.17s  user  발화 끝
    53.19s  agent 발화 시작: The Bureau focused on providing pensions, of course, but als
    53.58s  agent 발화 끝
