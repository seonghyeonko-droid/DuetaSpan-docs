# v3_to_ot_12_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_to_ot_12",
#     "name": "Emma",
#     "location": {
#       "city": "Paris",
#       "country": "France",
#       "timezone": "Europe/Paris (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "French",
#     "gender": "female",
#     "age_range": "50s",
#     "language": "French"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-08",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-01-18",
#       "category": "home",
#       "text": "User's home address is 762 Pine Court."
#     },
#     {
#       "date": "2025-11-05",
#       "category": "hobby",
#       "text": "User is into rock climbing."
#     },
#     {
#       "date": "2025-09-06",
#       "category": "pet",
#       "text": "User has a tabby cat named Luna."
#     },
#     {
#       "date": "2025-07-29",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Korean BBQ."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-02-08",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Hi Diol… | S2 Oh, that's interesting. I'd heard  | S3 Did you remember to take the trash | S4 Sorry about that. Could you find m

     0.00s  user  발화 시작: Hi Diol…
     0.87s  user  발화 시작: …I'm planning a Florida vacation. What are the biggest citie
     0.87s  user  발화 끝
     5.39s  <ret> 발화 (turn2 첫 프레임)
     5.63s  agent 발화 시작: <ret> Well, planning a trip sounds lovely. Florida’s three l
     5.63s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.83s]: Florida's three largest cities are Jacksonville, Miami, and Tampa, wit
     5.63s  user  발화 끝
    16.46s  user  발화 시작: Oh, that's interesting. I'd heard Orlando was really big.
    16.46s  agent 발화 끝
    20.36s  agent 발화 시작: It’s easy to get those mixed up! Orlando-Kissimmee-Sanford h
    20.36s  user  발화 끝
    30.75s  user  발화 시작: Did you remember to take the trash out?
    30.75s  agent 발화 끝
    34.22s  user  발화 시작: Sorry about that. Could you find me some hotels in Tampa?
    34.22s  user  발화 끝
    38.58s  <ret> 발화 (turn7 첫 프레임)
    38.98s  agent 발화 시작: <ret> In Tampa, Florida, there are currently 123 hotels avai
    38.98s  ⚡SPAN 주입 [d'=2.00s / d_lead=11.26s]: (tool result) Tampa, FL: 123 hotels available. Prices from $79/night. 
    38.98s  user  발화 끝
    50.25s  agent 발화 끝
