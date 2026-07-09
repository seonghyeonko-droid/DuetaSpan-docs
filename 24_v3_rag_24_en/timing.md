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
#       "date": "2026-06-21",
#       "category": "pet",
#       "text": "User has a Poodle named Coco."
#     },
#     {
#       "date": "2026-04-08",
#       "category": "hobby",
#       "text": "User is into marathon training."
#     },
#     {
#       "date": "2026-03-20",
#       "category": "diet",
#       "text": "User is vegan."
#     },
#     {
#       "date": "2026-02-17",
#       "category": "home",
#       "text": "User's home address is 609 Oak Avenue."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-01",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2026-05-21",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 I was reading about the du Plessis | S2 Oh, interesting! Was it always an  | S3 So, French Protestants brought it  | S4 That’s really fascinating— thank y

     0.00s  user  발화 시작: I was reading about the du Plessis family and I’m curious— w
     6.20s  <ret> 발화 (turn1 첫 프레임)
     6.28s  agent 발화 시작: <ret> That’s a lovely question, tracing family roots… The na
     6.44s  user  발화 끝
     7.16s  ⚡SPAN 주입 [d'=0.96s / d_lead=3.13s]: The surname du Plessis is of French origin, meaning “of the Plessis”, 
    13.67s  user  발화 시작: Mhm.
    14.17s  user  발화 끝
    16.11s  agent 발화 끝
    16.22s  user  발화 시작: Oh, interesting! Was it always an Afrikaans name then? I tho
    22.62s  <ret> 발화 (turn4 첫 프레임)
    22.98s  user  발화 끝
    23.02s  agent 발화 시작: <ret> It’s understandable why you’d connect it to South Afri
    24.54s  ⚡SPAN 주입 [d'=1.92s / d_lead=3.18s]: Huguenots, French Protestants, fled to the Cape Colony in the late sev
    31.51s  agent 발화 끝
    31.61s  user  발화 시작: So, French Protestants brought it to South Africa— that make
    39.96s  agent 발화 시작: Indeed, it was. Plessis refers to several places in France, 
    40.05s  user  발화 끝
    49.14s  agent 발화 끝
    49.40s  user  발화 시작: That’s really fascinating— thank you, Korana. I feel much mo
    54.58s  user  발화 끝
