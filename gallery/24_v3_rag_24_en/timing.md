# v3_rag_24_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_24",
#     "name": "Ada",
#     "location": {
#       "city": "San Francisco",
#       "country": "United States",
#       "timezone": "America/Los_Angeles (PST, UTC-8)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "female",
#     "age_range": "late 20s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-20",
#       "category": "home",
#       "text": "User's home address is 209 Cedar Lane."
#     },
#     {
#       "date": "2026-04-03",
#       "category": "pet",
#       "text": "User has a Corgi named Mochi."
#     },
#     {
#       "date": "2026-01-30",
#       "category": "allergy",
#       "text": "User is allergic to penicillin."
#     },
#     {
#       "date": "2025-12-29",
#       "category": "diet",
#       "text": "User is vegetarian."
#     },
#     {
#       "date": "2025-08-13",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Ethiopian."
#     },
#     {
#       "date": "2025-07-23",
#       "category": "trip",
#       "text": "User is planning a trip to Vietnam in December."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-12-30",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2025-08-25",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2025-06-10",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Where does the name du Plessis com | S2 Oh, interesting. Was there a famou | S3 Hmm, eighteenth century… that’s a  | S4 I see. Could you search for a cont

     0.00s  user  발화 시작: Where does the name du Plessis come from?
     2.59s  <ret> 발화 (turn1 첫 프레임)
     2.60s  agent 발화 시작: <ret> The term comes from places in France called Plessis — 
     2.67s  ⚡SPAN 주입 [d'=1.20s / d_lead=7.75s]: The surname du Plessis is of French origin, meaning "of the Plessis," 
     2.73s  user  발화 끝
     8.35s  user  발화 시작: Mhm.
     9.08s  user  발화 끝
    10.33s  user  발화 시작: Oh, interesting. Was there a famous du Plessis?
    10.35s  agent 발화 끝
    13.75s  <ret> 발화 (turn4 첫 프레임)
    14.14s  agent 발화 시작: <ret> There was François du Plessis, a French soldier who fo
    14.15s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.01s]: Huguenot soldier François du Plessis, Marquis de Dorval, was a French 
    14.17s  user  발화 끝
    22.15s  agent 발화 끝
    22.46s  user  발화 시작: Hmm, eighteenth century… that’s a while ago. What about more
    27.67s  agent 발화 시작: Welll… it's difficult to pinpoint a single, universally famo
    27.72s  user  발화 끝
    35.60s  user  발화 시작: I see. Could you search for a contemporary du Plessis who's 
    35.73s  agent 발화 끝
    40.34s  <ret> 발화 (turn8 첫 프레임)
    40.47s  agent 발화 시작: <ret> I found Damian de Allende du Plessis, a South African 
    40.50s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.65s]: (tool result) South African rugby player Damian de Allende, whose full
    40.74s  user  발화 끝
    48.12s  agent 발화 끝
