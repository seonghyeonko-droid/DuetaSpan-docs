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
     0.00s  <ret> 발화 (turn1 첫 프레임)
     0.19s  <ret> 발화 (turn4 첫 프레임)
     0.21s  agent 발화 시작: <ret> It appears Leonard Calvert was the first Governor of M
     0.21s  ⚡SPAN 주입 [d'=0.19s / d_lead=0.19s]: Leonard Calvert became the first Governor of the Province of Maryland 
     0.21s  user  발화 끝
     0.40s  user  발화 시작: Yeah.
     0.40s  agent 발화 끝
     0.41s  user  발화 시작: That’s interesting. Who was the fifth governor, then?
     0.41s  user  발화 끝
     0.51s  agent 발화 시작: <ret> Cecil Calvert, the second Lord Baltimore, was the fift
     0.51s  ⚡SPAN 주입 [d'=0.12s / d_lead=0.12s]: Cecil Calvert, the second Lord Baltimore, served as the fifth governor
     0.51s  user  발화 끝
     0.64s  user  발화 시작: …was he related to the first governor, Leonard?
     0.64s  agent 발화 끝
     0.66s  <ret> 발화 (turn6 첫 프레임)
     0.74s  agent 발화 시작: <ret> Cecil Calvert was the son of George Calvert, the found
     0.74s  ⚡SPAN 주입 [d'=0.17s / d_lead=0.17s]: Cecil Calvert was the son of George Calvert, the first Lord Baltimore,
     0.74s  user  발화 끝
     0.85s  <ret> 발화 (turn8 첫 프레임)
     0.91s  user  발화 시작: Right.
     0.91s  agent 발화 끝
     0.93s  agent 발화 시작: <ret> Cecil Calvert was born in 1605.
     0.93s  ⚡SPAN 주입 [d'=0.07s / d_lead=0.07s]: Cecil Calvert was born in 1605.
     0.93s  user  발화 끝
     1.00s  agent 발화 끝
