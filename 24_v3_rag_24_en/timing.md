# v3_rag_24_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_24",
#     "name": "우서",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "40s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-03",
#       "category": "pet",
#       "text": "User has a Poodle named Coco."
#     },
#     {
#       "date": "2026-01-30",
#       "category": "hobby",
#       "text": "User is into marathon training."
#     },
#     {
#       "date": "2025-12-29",
#       "category": "diet",
#       "text": "User is vegan."
#     },
#     {
#       "date": "2025-08-13",
#       "category": "home",
#       "text": "User's home address is 609 Oak Avenue."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-10-09",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2025-09-22",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 I’ve been researching my family hi | S2 Oh, France! That’s interesting. I  | S3 Normandy… so it’s a very old name, | S4 That explains a lot, actually. My 

     0.00s  user  발화 시작: I’ve been researching my family history, and I keep coming a
     8.15s  <ret> 발화 (turn1 첫 프레임)
     8.23s  agent 발화 시작: <ret> The name du Plessis originates from France, signifying
     8.34s  user  발화 끝
     9.19s  ⚡SPAN 주입 [d'=1.04s / d_lead=6.35s]: [source: Wikipedia] Du Plessis is a French surname, originally denotin
    12.91s  user  발화 시작: Mhm.
    13.54s  user  발화 끝
    14.57s  agent 발화 끝
    14.70s  user  발화 시작: Oh, France! That’s interesting. I always assumed it was… wel
    23.00s  <ret> 발화 (turn4 첫 프레임)
    23.40s  agent 발화 시작: <ret> Many families with long histories have noble connectio
    23.42s  user  발화 끝
    25.00s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.52s]: [source: House of Du Plessis] The House of du Plessis was a French nob
    26.83s  agent 발화 시작: The du Plessis family was a noble family in France, tracing 
    26.91s  agent 발화 끝
    34.06s  agent 발화 끝
    34.78s  user  발화 시작: Normandy… so it’s a very old name, then? I wonder if it’s co
    40.19s  <ret> 발화 (turn7 첫 프레임)
    40.35s  agent 발화 시작: <ret> Many Huguenots escaping France settled in South Africa
    40.47s  user  발화 끝
    42.19s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.07s]: [source: South African History Online] Many Huguenots fleeing religiou
    46.41s  agent 발화 끝
    46.60s  user  발화 시작: That explains a lot, actually. My ancestors *did* emigrate t
    53.69s  user  발화 끝
