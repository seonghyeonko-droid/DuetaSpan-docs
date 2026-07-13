# v3_fake__13_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_fake__13",
#     "name": "Riley",
#     "location": {
#       "city": "Paris",
#       "country": "France",
#       "timezone": "Europe/Paris (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "French",
#     "gender": "non-binary",
#     "age_range": "40s",
#     "language": "French"
#   },
#   "saved_memories": [
#     {
#       "date": "2025-11-24",
#       "category": "hobby",
#       "text": "User is into vintage synth collecting."
#     },
#     {
#       "date": "2025-10-09",
#       "category": "home",
#       "text": "User's home address is 354 Maple Drive."
#     },
#     {
#       "date": "2025-06-28",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-05-28",
#       "category": "diet",
#       "text": "User is gluten-free."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-03-14",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: Do you know who played Lucy in How I Met Your Mother?
     4.19s  <ret> 발화 (turn1 첫 프레임)
     4.79s  agent 발화 시작: <ret> Oh, that's a good question! Cristin Milioti portrayed 
     4.79s  user  발화 끝
     5.56s  ⚡SPAN 주입 [d'=1.37s / d_lead=12.38s]: Cristin Milioti portrayed Lucy, Marshall Eriksen's mother, in six epis
    17.17s  user  발화 시작: Right.
    17.17s  agent 발화 끝
    17.57s  user  발화 시작: That’s right, she was great! I’m thinking about rewatching t
    17.57s  user  발화 끝
    21.82s  <ret> 발화 (turn4 첫 프레임)
    22.23s  ⚡SPAN 주입(IRRELEVANT) [d'=0.41s / d_lead=8.38s]: The current temperature in Ulaanbaatar, Mongolia is -15.2°C, with clea
    22.36s  agent 발화 시작: <ret> That sounds lovely! It’s wonderful to revisit stories 
    22.36s  user  발화 끝
    30.74s  user  발화 시작: Uh-huh.
    30.74s  agent 발화 끝
    31.14s  user  발화 시작: I was wondering, what’s the weather like in Seoul right now?
    31.14s  user  발화 끝
    34.99s  <ret> 발화 (turn7 첫 프레임)
    35.49s  ⚡SPAN 주입 [d'=0.50s / d_lead=9.98s]: (tool result) Seoul: 26.1°C, humidity 68%, wind 3.1 km/h, condition: p
    35.54s  agent 발화 시작: <ret> It’s currently 26.1°C in Seoul, with humidity at 68% a
    35.54s  user  발화 끝
    45.52s  agent 발화 끝
