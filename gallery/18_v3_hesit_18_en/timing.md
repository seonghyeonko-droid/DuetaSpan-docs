# v3_hesit_18_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_hesit_18",
#     "name": "Léa",
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
#       "date": "2026-06-11",
#       "category": "diet",
#       "text": "User is vegetarian."
#     },
#     {
#       "date": "2026-04-29",
#       "category": "allergy",
#       "text": "User is allergic to pollen."
#     },
#     {
#       "date": "2026-03-24",
#       "category": "hobby",
#       "text": "User is into marathon training."
#     },
#     {
#       "date": "2025-09-04",
#       "category": "home",
#       "text": "User's home address is 852 Cedar Lane."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-16",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2026-02-28",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: Um, where does… uh, Star Wars: A New Hope take place?
     3.92s  <ret> 발화 (turn1 첫 프레임)
     4.16s  agent 발화 시작: <ret> A great deal of *A New Hope* unfolds on the desert pla
     4.16s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.07s]: The desert planet Tatooine is where much of the original Star Wars fil
     4.16s  user  발화 끝
    13.23s  user  발화 시작: Yeah.
    13.23s  agent 발화 끝
    13.61s  user  발화 시작: Tatooine, right. And, welll… is it a real place?
    13.61s  user  발화 끝
    17.01s  user  발화 시작: Mm-hmm.
    17.01s  user  발화 끝
    17.31s  <ret> 발화 (turn5 첫 프레임)
    17.39s  agent 발화 시작: <ret> The filming locations for Tatooine were primarily in T
    17.39s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.83s]: Tatooine was primarily filmed in Tunisia, with some scenes shot in Dea
    17.39s  user  발화 끝
    27.21s  agent 발화 끝
