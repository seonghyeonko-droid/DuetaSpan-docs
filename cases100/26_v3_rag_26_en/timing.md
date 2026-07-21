# v3_rag_26_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_26",
#     "name": "Oscar",
#     "location": {
#       "city": "Toronto",
#       "country": "Canada",
#       "timezone": "America/Toronto (EST, UTC-5)",
#       "currency": "CAD ($)"
#     },
#     "nationality": "Canadian",
#     "gender": "male",
#     "age_range": "late 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-26",
#       "category": "medication",
#       "text": "User takes insulin."
#     },
#     {
#       "date": "2026-06-06",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Lebanese."
#     },
#     {
#       "date": "2026-05-28",
#       "category": "trip",
#       "text": "User is planning a trip to Hokkaido in January."
#     },
#     {
#       "date": "2026-05-18",
#       "category": "dislike",
#       "text": "User can't stand durian."
#     },
#     {
#       "date": "2026-04-30",
#       "category": "emergency",
#       "text": "User's emergency contact is Yuna."
#     },
#     {
#       "date": "2026-03-06",
#       "category": "music",
#       "text": "User likes listening to a lo-fi jazz playlist."
#     },
#     {
#       "date": "2026-02-19",
#       "category": "temp",
#       "text": "User keeps the home thermostat around 20°C."
#     },
#     {
#       "date": "2025-12-18",
#       "category": "gym",
#       "text": "User has a gym membership near the office."
#     },
#     {
#       "date": "2025-12-03",
#       "category": "wake",
#       "text": "User usually wakes up around 7:30am."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-05",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building under 900k won/month",
#         "needed parking and a second bedroom near line 2"
#       ]
#     },
#     {
#       "date": "2026-03-13",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing the Kia Niro hybrid and Hyundai Ioniq",
#         "wants under 30k miles and below 25M won"
#       ]
#     },
#     {
#       "date": "2026-01-25",
#       "title": "Buying a gift for a parent",
#       "bullets": [
#         "mom's 60th birthday next month",
#         "considering a spa day or a watch"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: Hey Rora, do you remember what I told you a while back about
     4.07s  agent 발화 시작: Yeah.
     4.65s  agent 발화 끝
     4.83s  <ret> 발화 (turn2 첫 프레임)
     6.21s  user  발화 끝
     6.22s  agent 발화 시작: <ret> That’s Lewis Capaldi with “Someone You Loved,” release
     6.63s  ⚡SPAN 주입 [d'=1.81s / d_lead=8.05s]: "Someone You Loved" is a song by Lewis Capaldi, released in November 2
    14.27s  agent 발화 끝
    14.35s  user  발화 시작: Hmm, close, but I was actually thinking of "Somebody That I 
    18.32s  <ret> 발화 (turn4 첫 프레임)
    18.61s  agent 발화 시작: <ret> That’s a good one! Gotye, featuring Kimbra, sang “Some
    18.70s  user  발화 끝
    19.40s  ⚡SPAN 주입 [d'=1.07s / d_lead=1.49s]: "Somebody That I Used to Know" is a song by Gotye featuring Kimbra, re
    23.05s  user  발화 시작: Mm-hmm.
    23.56s  user  발화 끝
    27.18s  agent 발화 끝
    27.24s  user  발화 시작: That’s the one! Thanks, Rora. Do you know if Gotye has any o
    32.78s  <ret> 발화 (turn7 첫 프레임)
    33.17s  user  발화 끝
    33.24s  agent 발화 시작: <ret> Gotye—that's Wouter De Backer—is a Belgian-Australian 
    33.71s  ⚡SPAN 주입 [d'=0.94s / d_lead=7.36s]: (tool result) Gotye, whose real name is Wouter De Backer, is a Belgian
    40.60s  agent 발화 끝
