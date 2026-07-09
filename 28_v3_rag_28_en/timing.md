# v3_rag_28_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_28",
#     "name": "정슬",
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
#       "date": "2026-07-02",
#       "category": "allergy",
#       "text": "User is allergic to peanuts."
#     },
#     {
#       "date": "2026-05-20",
#       "category": "work",
#       "text": "User works as a accountant."
#     },
#     {
#       "date": "2026-03-04",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-02-20",
#       "category": "diet",
#       "text": "User is pescatarian."
#     },
#     {
#       "date": "2026-02-07",
#       "category": "trip",
#       "text": "User is planning a trip to Switzerland in March."
#     },
#     {
#       "date": "2026-01-03",
#       "category": "home",
#       "text": "User's home address is 960 Pine Court."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-07-16",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2026-02-04",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: I was reading about government departments, and it got me wo
     7.26s  <ret> 발화 (turn1 첫 프레임)
     7.58s  agent 발화 시작: <ret> That’s a good question, thinking about support for tho
     7.74s  user  발화 끝
     8.38s  ⚡SPAN 주입 [d'=1.12s / d_lead=4.57s]: [source: Britannica] The Department of Veterans Affairs was establishe
    18.38s  agent 발화 끝
    19.25s  user  발화 시작: Nineteen thirty? That seems… surprisingly recent, actually. 
    26.58s  agent 발화 시작: It does feel recent when you consider the history of militar
    26.75s  user  발화 끝
    33.98s  user  발화 시작: But weren't there veteran services *before* then? Surely som
    34.13s  agent 발화 끝
    39.26s  <ret> 발화 (turn5 첫 프레임)
    39.65s  agent 발화 시작: <ret> You’re right to question that—services certainly exist
    39.77s  user  발화 끝
    41.26s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.94s]: [source: VA.gov] Prior to 1930, the administration of veterans’ benefi
    51.48s  agent 발화 끝
