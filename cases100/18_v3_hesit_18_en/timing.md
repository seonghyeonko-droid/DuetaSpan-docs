# v3_hesit_18_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_hesit_18",
#     "name": "Ava",
#     "location": {
#       "city": "Paris",
#       "country": "France",
#       "timezone": "Europe/Paris (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "French",
#     "gender": "female",
#     "age_range": "late 40s",
#     "language": "French"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-26",
#       "category": "plant",
#       "text": "User is growing a lemon tree at home."
#     },
#     {
#       "date": "2026-06-21",
#       "category": "home",
#       "text": "User's home address is 64 Chestnut Street."
#     },
#     {
#       "date": "2026-06-14",
#       "category": "sibling",
#       "text": "User has a younger sibling named Elena."
#     },
#     {
#       "date": "2026-05-14",
#       "category": "gym",
#       "text": "User has a gym membership near the office."
#     },
#     {
#       "date": "2026-04-18",
#       "category": "show",
#       "text": "User is currently watching a cooking competition show."
#     },
#     {
#       "date": "2026-04-10",
#       "category": "child",
#       "text": "User has a child named Minjun, age 7."
#     },
#     {
#       "date": "2026-04-04",
#       "category": "car",
#       "text": "User drives a 2019 Hyundai Tucson."
#     },
#     {
#       "date": "2026-02-10",
#       "category": "floor",
#       "text": "User lives on the 12th floor."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-24",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing the Kia Niro hybrid and Hyundai Ioniq",
#         "wants under 30k miles and below 25M won"
#       ]
#     },
#     {
#       "date": "2026-02-21",
#       "title": "Looking for a therapist",
#       "bullets": [
#         "prefers evening video sessions",
#         "wants someone who does CBT"
#       ]
#     },
#     {
#       "date": "2026-02-06",
#       "title": "Planning a dinner party",
#       "bullets": [
#         "hosting eight friends on Saturday",
#         "one guest is gluten-free"
#       ]
#     },
#     {
#       "date": "2026-01-19",
#       "title": "Training for a 10K",
#       "bullets": [
#         "current pace is around 6 minutes per km",
#         "race is in November"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: Uhhh, I was reading about Enron… and I think… Merrill Lynch 
     8.11s  <ret> 발화 (turn1 첫 프레임)
     8.28s  agent 발화 시작: <ret> [happy] It’s true, Merrill Lynch definitely played a p
     8.41s  ⚡SPAN 주입 [d'=0.30s / d_lead=10.90s]: Merrill Lynch was among the financial institutions that faced scrutiny
     8.44s  user  발화 끝
    19.18s  agent 발화 끝
    19.40s  user  발화 시작: Welll… so, did they… get in trouble? Like, fines or somethin
    24.72s  <ret> 발화 (turn3 첫 프레임)
    25.24s  agent 발화 시작: <ret> They did indeed get in trouble! They settled with the 
    25.38s  user  발화 끝
    25.53s  ⚡SPAN 주입 [d'=0.81s / d_lead=7.79s]: (tool result) In 2002, Merrill Lynch agreed to pay $200 million to set
    32.96s  user  발화 시작: Two hundred million… that’s… a lot.
    33.03s  agent 발화 끝
    37.08s  user  발화 끝
    37.23s  agent 발화 시작: [sigh] It is a substantial amount, and it really highlights 
    48.36s  agent 발화 끝
