# v3_rag_26_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_26",
#     "name": "Emilia",
#     "location": {
#       "city": "New York",
#       "country": "United States",
#       "timezone": "America/New_York (EST, UTC-5)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "female",
#     "age_range": "late 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-10",
#       "category": "home",
#       "text": "User's home address is 249 Cedar Lane."
#     },
#     {
#       "date": "2026-04-10",
#       "category": "pet",
#       "text": "User has a Beagle named Rusty."
#     },
#     {
#       "date": "2026-02-09",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-11-30",
#       "category": "work",
#       "text": "User works as a accountant."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-09-24",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2025-05-28",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: Um, hi. I was wondering… do you know any countries with a fl
     7.20s  <ret> 발화 (turn1 첫 프레임)
     7.44s  agent 발화 시작: <ret> The flag of Germany features black, red, and gold hori
     7.55s  user  발화 끝
     9.20s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.91s]: The flag of Germany is composed of black, red, and gold horizontal ban
    14.29s  user  발화 시작: Oh, Germany, right. I always forget. Hmmm… what about… is th
    14.34s  agent 발화 끝
    20.95s  <ret> 발화 (turn3 첫 프레임)
    21.04s  user  발화 끝
    21.18s  agent 발화 시작: <ret> Belgium's flag has black, yellow, and red vertical ban
    22.95s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.06s]: The flag of Belgium is composed of three vertical bands of black, yell
    23.95s  user  발화 시작: Right.
    24.40s  user  발화 끝
    27.22s  user  발화 시작: Oh. Right. Belgium. Well, that's… helpful, I guess.
    27.23s  agent 발화 끝
    32.07s  agent 발화 시작: It’s okay to feel a little lost with flags! Sometimes it tak
    32.08s  user  발화 끝
    37.34s  agent 발화 끝
