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

# EXAMINER(FDB-v2) 단계: S1 I’ve been researching my family hi | S2 Oh, French! That's interesting, I  | S3 So, it's a place name originally,  | S4 I wonder if it’s common in South A

     0.00s  user  발화 시작: I’ve been researching my family history, and I came across t
    10.35s  <ret> 발화 (turn1 첫 프레임)
    10.43s  agent 발화 시작: <ret> That’s a lovely question, and a very common one. Du Pl
    10.53s  user  발화 끝
    11.31s  ⚡SPAN 주입 [d'=0.96s / d_lead=3.32s]: The surname Du Plessis is of French origin, derived from the Old Frenc
    16.47s  user  발화 시작: Mhm.
    17.02s  user  발화 끝
    18.54s  agent 발화 끝
    18.67s  user  발화 시작: Oh, French! That's interesting, I always thought it sounded…
    26.88s  <ret> 발화 (turn4 첫 프레임)
    27.24s  user  발화 끝
    27.28s  agent 발화 시작: <ret> It certainly became associated with nobility. The Ples
    28.48s  ⚡SPAN 주입 [d'=1.60s / d_lead=2.71s]: The Plessis family originated as lords of Plessis-les-Tours in Anjou, 
    37.20s  agent 발화 끝
    37.31s  user  발화 시작: So, it's a place name originally, and then a family took the
    45.98s  agent 발화 시작: Family names often do travel, reflecting migration and settl
    46.08s  user  발화 끝
    54.59s  agent 발화 끝
    54.77s  user  발화 시작: I wonder if it’s common in South Africa, though? My ancestor
    60.00s  user  발화 끝
