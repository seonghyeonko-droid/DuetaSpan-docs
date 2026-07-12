# v3_rag_27_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_27",
#     "name": "Jamie",
#     "location": {
#       "city": "Berlin",
#       "country": "Germany",
#       "timezone": "Europe/Berlin (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "German",
#     "gender": "non-binary",
#     "age_range": "late 20s",
#     "language": "German"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-02-03",
#       "category": "trip",
#       "text": "User is planning a trip to Switzerland in August."
#     },
#     {
#       "date": "2025-10-28",
#       "category": "home",
#       "text": "User's home address is 23 Cedar Lane."
#     },
#     {
#       "date": "2025-09-21",
#       "category": "work",
#       "text": "User works as a graphic designer."
#     },
#     {
#       "date": "2025-08-11",
#       "category": "pet",
#       "text": "User has a Corgi named Mochi."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-01-05",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2025-08-06",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: I’m trying to trace my family history. Do you know anything 
     4.64s  <ret> 발화 (turn1 첫 프레임)
     4.88s  agent 발화 시작: <ret> It appears Leonard Calvert was the first Governor of M
     4.88s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.98s]: Leonard Calvert became the first Governor of the Province of Maryland 
     4.95s  user  발화 끝
     8.81s  user  발화 시작: Yeah.
     9.21s  user  발화 끝
    12.86s  agent 발화 끝
    13.36s  user  발화 시작: That’s interesting. Who was the fifth governor, then?
    15.90s  <ret> 발화 (turn4 첫 프레임)
    15.97s  agent 발화 시작: <ret> Cecil Calvert, the second Lord Baltimore, was the fift
    15.98s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.45s]: Cecil Calvert, the second Lord Baltimore, served as the fifth governor
    16.09s  user  발화 끝
    19.73s  user  발화 시작: …was he related to the first governor, Leonard?
    20.42s  agent 발화 끝
    21.99s  <ret> 발화 (turn6 첫 프레임)
    22.06s  agent 발화 시작: <ret> Cecil Calvert was the son of George Calvert, the found
    22.07s  ⚡SPAN 주입 [d'=1.12s / d_lead=5.27s]: Cecil Calvert was the son of George Calvert, the first Lord Baltimore,
    22.32s  user  발화 끝
    25.04s  user  발화 시작: Right.
    25.54s  user  발화 끝
    27.20s  <ret> 발화 (turn8 첫 프레임)
    27.27s  agent 발화 시작: <ret> Cecil Calvert was born in 1605.
    27.28s  ⚡SPAN 주입 [d'=1.76s / d_lead=3.28s]: Cecil Calvert was born in 1605.
    27.33s  agent 발화 끝
    30.55s  agent 발화 끝
