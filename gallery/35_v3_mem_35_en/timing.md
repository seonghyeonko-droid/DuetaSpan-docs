# v3_mem_35_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_35",
#     "name": "Rosa",
#     "location": {
#       "city": "Berlin",
#       "country": "Germany",
#       "timezone": "Europe/Berlin (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "German",
#     "gender": "female",
#     "age_range": "50s",
#     "language": "German"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-15",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Thai."
#     },
#     {
#       "date": "2026-03-03",
#       "category": "hobby",
#       "text": "User is into rock climbing."
#     },
#     {
#       "date": "2026-02-04",
#       "category": "work",
#       "text": "User works as a chef."
#     },
#     {
#       "date": "2026-01-19",
#       "category": "trip",
#       "text": "User is planning a trip to Vietnam in December."
#     },
#     {
#       "date": "2025-09-13",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-08-17",
#       "category": "allergy",
#       "text": "User is allergic to pollen."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-07-19",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Um, hi Klami. I’m planning a trip  | S2 Yes, that’s right. I’m thinking ab | S3 Welll… I really like Thai food, ac | S4 Oh, that sounds good! Maybe I shou

     0.00s  agent 발화 시작: Hi Rosa, I'm Klami. It's lovely to meet you, and I'm here to
     4.99s  agent 발화 끝
     5.79s  user  발화 시작: Um, hi Klami. I’m planning a trip to Vietnam in December.
     9.64s  <ret> 발화 (turn2 첫 프레임)
    10.04s  agent 발화 시작: <ret> That’s wonderful, Rosa! You mentioned a Vietnam trip i
    10.04s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.49s]: [2026-01-19] User is planning a trip to Vietnam in December.
    10.14s  user  발화 끝
    14.53s  agent 발화 끝
    14.55s  user  발화 시작: Yes, that’s right. I’m thinking about what to do there.
    17.81s  agent 발화 시작: Vietnam offers so many amazing experiences. What kind of act
    17.83s  user  발화 끝
    23.56s  agent 발화 끝
    24.05s  user  발화 시작: Welll… I really like Thai food, actually. Is there anything 
    29.31s  <ret> 발화 (turn6 첫 프레임)
    29.37s  user  발화 끝
    29.47s  agent 발화 시작: <ret> Knowing you enjoy Thai cuisine, Vietnamese food will l
    29.47s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.52s]: [2026-06-15] User's favorite cuisine is Thai.
    33.57s  user  발화 시작: Yeah.
    34.02s  user  발화 끝
    37.99s  agent 발화 끝
    40.15s  user  발화 시작: Oh, that sounds good! Maybe I should look for cooking classe
    43.99s  user  발화 끝
    44.28s  agent 발화 시작: That's a fantastic idea, Rosa! Learning to cook local dishes
    51.22s  agent 발화 끝
