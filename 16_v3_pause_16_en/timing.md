# v3_pause_16_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_pause_16",
#     "name": "Milan",
#     "location": {
#       "city": "Berlin",
#       "country": "Germany",
#       "timezone": "Europe/Berlin (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "German",
#     "gender": "male",
#     "age_range": "late 30s",
#     "language": "German"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-23",
#       "category": "diet",
#       "text": "User is pescatarian."
#     },
#     {
#       "date": "2026-06-05",
#       "category": "allergy",
#       "text": "User is allergic to cat dander."
#     },
#     {
#       "date": "2026-02-08",
#       "category": "pet",
#       "text": "User has a tabby cat named Luna."
#     },
#     {
#       "date": "2025-12-04",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-19",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2026-01-08",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 I was wondering… who… | S2 …specifically, who was number… | S3 …one on that list? | S4 Huh. And what about Donald Trump?

     0.00s  user  발화 시작: I was wondering… who…
     1.81s  user  발화 시작: …are the most powerful people…
     1.81s  user  발화 끝
     3.81s  <ret> 발화 (turn2 첫 프레임)
     4.08s  agent 발화 시작: <ret> [curious] It's interesting to think about power dynami
     4.08s  user  발화 끝
     5.14s  ⚡SPAN 주입 [d'=1.33s / d_lead=13.15s]: Forbes’ 2016 list of The World’s Most Powerful People included Vladimi
    17.22s  user  발화 시작: …specifically, who was number…
    17.22s  agent 발화 끝
    19.04s  user  발화 시작: …one on that list?
    19.04s  user  발화 끝
    20.85s  agent 발화 시작: Yeah.
    20.85s  user  발화 끝
    21.21s  <ret> 발화 (turn6 첫 프레임)
    21.30s  agent 발화 시작: <ret> Vladimir Putin was named the most powerful person in t
    21.30s  agent 발화 끝
    21.31s  ⚡SPAN 주입 [d'=0.70s / d_lead=14.05s]: Vladimir Putin was named the most powerful person in the world by Forb
    35.36s  user  발화 시작: Huh. And what about Donald Trump?
    35.36s  agent 발화 끝
    37.63s  <ret> 발화 (turn8 첫 프레임)
    38.08s  agent 발화 시작: <ret> [happy] Donald Trump was ranked 72nd on Forbes’ 2016 l
    38.08s  user  발화 끝
    38.47s  ⚡SPAN 주입 [d'=1.01s / d_lead=14.51s]: Donald Trump was ranked 72nd on Forbes’ 2016 list of The World’s Most 
    52.58s  agent 발화 끝
