# v3_backg_17_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_backg_17",
#     "name": "Isla",
#     "location": {
#       "city": "Sydney",
#       "country": "Australia",
#       "timezone": "Australia/Sydney (AEDT, UTC+11)",
#       "currency": "AUD ($)"
#     },
#     "nationality": "Australian",
#     "gender": "female",
#     "age_range": "40s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-24",
#       "category": "diet",
#       "text": "User is gluten-free."
#     },
#     {
#       "date": "2026-02-28",
#       "category": "allergy",
#       "text": "User is allergic to shellfish."
#     },
#     {
#       "date": "2025-12-01",
#       "category": "pet",
#       "text": "User has a Golden Retriever named Max."
#     },
#     {
#       "date": "2025-07-31",
#       "category": "work",
#       "text": "User works as a nurse."
#     },
#     {
#       "date": "2025-07-07",
#       "category": "home",
#       "text": "User's home address is 288 Elm Street."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-03-13",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2026-02-02",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 I was wondering, where do arteries | S2 Did you hear about the concert dow | S3 Oh, that’s good to know. Are there | S4 That's interesting! And what about

     0.00s  user  발화 시작: I was wondering, where do arteries connect with each other?
     2.14s  <ret> 발화 (turn1 첫 프레임)
     2.54s  agent 발화 시작: <ret> Arterial anastomoses are most commonly found between a
     2.54s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.25s]: Arterial anastomoses are most commonly found between arteries, providi
     2.63s  user  발화 끝
    12.78s  agent 발화 끝
    13.23s  user  발화 시작: Did you hear about the concert downtown next week?
    15.56s  user  발화 시작: Oh, that’s good to know. Are there any near the elbow?
    15.77s  user  발화 끝
    18.27s  <ret> 발화 (turn4 첫 프레임)
    18.51s  agent 발화 시작: <ret> The elbow region contains a prominent arterial arcade 
    18.51s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.86s]: The elbow region contains a prominent arterial arcade formed by the an
    18.52s  user  발화 끝
    29.37s  agent 발화 끝
    29.52s  user  발화 시작: That's interesting! And what about in the feet?
    31.70s  <ret> 발화 (turn6 첫 프레임)
    32.02s  agent 발화 시작: <ret> In the feet, the dorsal pedis artery and posterior tib
    32.02s  ⚡SPAN 주입 [d'=2.00s / d_lead=12.24s]: In the feet, the dorsal pedis artery and posterior tibial artery contr
    32.15s  user  발화 끝
    44.27s  agent 발화 끝
