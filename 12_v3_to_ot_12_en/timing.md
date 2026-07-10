# v3_to_ot_12_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_to_ot_12",
#     "name": "Nora",
#     "location": {
#       "city": "London",
#       "country": "United Kingdom",
#       "timezone": "Europe/London (GMT, UTC+0)",
#       "currency": "GBP (£)"
#     },
#     "nationality": "British",
#     "gender": "female",
#     "age_range": "50s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-26",
#       "category": "trip",
#       "text": "User is planning a trip to Iceland in March."
#     },
#     {
#       "date": "2026-06-16",
#       "category": "work",
#       "text": "User works as a high-school teacher."
#     },
#     {
#       "date": "2026-03-15",
#       "category": "hobby",
#       "text": "User is into vintage synth collecting."
#     },
#     {
#       "date": "2025-08-27",
#       "category": "allergy",
#       "text": "User is allergic to cat dander."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-11-09",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Hey, do you know who sings the son | S2 …thought it was a cartoon soundtra | S3 Honey, did you take the trash out? | S4 So, what else does Green Jellÿ do?

     0.00s  user  발화 시작: Hey, do you know who sings the song "Three Little Pigs"? It'
     4.43s  <ret> 발화 (turn1 첫 프레임)
     4.64s  agent 발화 시작: <ret> Oh, that's a fun one! It's actually performed by Green
     4.67s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.82s]: Green Jellÿ is an American parody metal band formed in 1989.
     4.86s  user  발화 끝
     9.46s  agent 발화 끝
    10.89s  user  발화 시작: Green Jellÿ? That's… unexpected. I…
    14.58s  user  발화 끝
    16.05s  user  발화 시작: …thought it was a cartoon soundtrack.
    17.99s  agent 발화 시작: [laugh] It really is surprising, isn’t it? Sometimes the mos
    18.03s  user  발화 끝
    22.53s  agent 발화 끝
    22.70s  user  발화 시작: Honey, did you take the trash out?
    24.65s  user  발화 시작: So, what else does Green Jellÿ do? Are they known for other 
    24.82s  user  발화 끝
    28.68s  <ret> 발화 (turn7 첫 프레임)
    29.07s  agent 발화 시작: <ret> They released their first album in nineteen ninety-two
    29.07s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.65s]: Green Jellÿ released their debut album, "Green Jellÿ," in 1992, and it
    29.14s  user  발화 끝
    34.71s  agent 발화 끝
