# v3_defer_10_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_defer_10",
#     "name": "Anna",
#     "location": {
#       "city": "Berlin",
#       "country": "Germany",
#       "timezone": "Europe/Berlin (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "German",
#     "gender": "female",
#     "age_range": "late 20s",
#     "language": "German"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-27",
#       "category": "diet",
#       "text": "User is gluten-free."
#     },
#     {
#       "date": "2026-04-06",
#       "category": "trip",
#       "text": "User is planning a trip to Lisbon in March."
#     },
#     {
#       "date": "2026-02-23",
#       "category": "allergy",
#       "text": "User is allergic to shellfish."
#     },
#     {
#       "date": "2026-02-22",
#       "category": "hobby",
#       "text": "User is into marathon training."
#     },
#     {
#       "date": "2026-01-18",
#       "category": "pet",
#       "text": "User has a Siamese cat named Bella."
#     },
#     {
#       "date": "2025-12-26",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Mexican."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-01-10",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: I'm feeling really stuck in my career. I used to love market
     6.74s  agent 발화 시작: Yeah.
     6.74s  user  발화 끝
     7.14s  agent 발화 시작: That's completely understandable. It's common to feel that w
     7.14s  agent 발화 끝
    13.88s  user  발화 시작: Yeah.
    13.88s  agent 발화 끝
    14.28s  user  발화 시작: I was thinking about something totally different, maybe some
    14.28s  user  발화 끝
    21.41s  agent 발화 시작: [curious] That’s a great idea! Sustainability is a growing f
    21.41s  user  발화 끝
    28.55s  user  발화 시작: Okay, that sounds good. Can you find me some job titles that
    28.55s  agent 발화 끝
    34.63s  <ret> 발화 (turn7 첫 프레임)
    34.89s  agent 발화 시작: <ret> There are a few roles gaining traction, like Sustainab
    34.89s  user  발화 끝
    35.64s  ⚡SPAN 주입 [d'=1.01s / d_lead=15.46s]: (tool result) Marketing roles focused on sustainability are gaining tr
    50.36s  agent 발화 끝
