# v3_rag_26_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_26",
#     "name": "Emilia",
#     "location": {
#       "city": "San Francisco",
#       "country": "United States",
#       "timezone": "America/Los_Angeles (PST, UTC-8)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "female",
#     "age_range": "late 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-23",
#       "category": "home",
#       "text": "User's home address is 249 Cedar Lane."
#     },
#     {
#       "date": "2026-03-15",
#       "category": "pet",
#       "text": "User has a Beagle named Rusty."
#     },
#     {
#       "date": "2026-02-13",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2026-01-11",
#       "category": "work",
#       "text": "User works as a accountant."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-08-04",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2026-05-28",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: I was wondering… do you know what country flag has black, re
     8.81s  user  발화 끝
     8.89s  agent 발화 시작: It’s a common struggle, remembering all those flags! Let’s s
    14.00s  <ret> 발화 (turn2 첫 프레임)
    14.24s  agent 발화 시작: <ret> That particular combination of colors— The flag of Ger
    14.35s  agent 발화 끝
    15.04s  ⚡SPAN 주입 [d'=1.04s / d_lead=2.21s]: [source: Britannica] The flag of Germany features three horizontal ban
    22.20s  agent 발화 끝
    22.26s  user  발화 시작: Oh, Germany! Right. I always get Germany and Belgium mixed u
    28.84s  agent 발화 시작: It’s easy to do, they are both located in Europe. Is there a
    29.03s  user  발화 끝
    34.66s  <ret> 발화 (turn5 첫 프레임)
    34.97s  agent 발화 시작: <ret> Speaking of colors and flags, The flag of Belgium has 
    35.05s  agent 발화 끝
    35.94s  ⚡SPAN 주입 [d'=1.28s / d_lead=1.79s]: [source: WorldAtlas] The flag of Belgium consists of three vertical ba
    37.60s  user  발화 시작: Right.
    38.23s  user  발화 끝
    40.56s  user  발화 시작: So that’s why I get them mixed up! Similar colors… But diffe
    40.71s  agent 발화 끝
    49.14s  user  발화 끝
    49.23s  agent 발화 시작: Absolutely! Visual cues like flags can really solidify geogr
    56.69s  agent 발화 끝
