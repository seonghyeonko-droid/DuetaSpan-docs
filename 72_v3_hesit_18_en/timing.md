# v3_hesit_18_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_hesit_18",
#     "name": "Bruno",
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
#       "date": "2026-06-02",
#       "category": "home",
#       "text": "User's home address is 707 Elm Street."
#     },
#     {
#       "date": "2026-04-22",
#       "category": "allergy",
#       "text": "User is allergic to pollen."
#     },
#     {
#       "date": "2026-04-12",
#       "category": "work",
#       "text": "User works as a marketing manager."
#     },
#     {
#       "date": "2026-03-30",
#       "category": "pet",
#       "text": "User has a Corgi named Mochi."
#     },
#     {
#       "date": "2026-03-18",
#       "category": "trip",
#       "text": "User is planning a trip to Kyoto in August."
#     },
#     {
#       "date": "2026-01-10",
#       "category": "hobby",
#       "text": "User is into rock climbing."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-02-24",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2026-02-22",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: Uh, hmm, what was the first… expansion pack for the Sims 2? 
     5.94s  <ret> 발화 (turn1 첫 프레임)
     6.04s  agent 발화 시작: <ret> [happy] Well, that was *The Sims 2: University*, relea
     6.04s  user  발화 끝
     6.87s  ⚡SPAN 주입 [d'=0.93s / d_lead=9.82s]: The Sims 2: University was the first expansion pack for the video game
    15.86s  user  발화 시작: Oh, right! University! I knew it started with a U… welll… th
    15.86s  agent 발화 끝
    20.39s  agent 발화 시작: You’re very welcome! It's easy to forget details after a whi
    20.39s  user  발화 끝
    26.44s  user  발화 시작: I'm planning a trip to Busan next month, actually.
    26.44s  agent 발화 끝
    29.84s  agent 발화 시작: Yeah.
    29.84s  user  발화 끝
    30.21s  agent 발화 시작: That sounds lovely! Busan is a wonderful city. Perhaps I can
    30.21s  agent 발화 끝
    37.77s  agent 발화 끝
