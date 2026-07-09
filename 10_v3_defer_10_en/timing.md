# v3_defer_10_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_defer_10",
#     "name": "Alice",
#     "location": {
#       "city": "Paris",
#       "country": "France",
#       "timezone": "Europe/Paris (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "French",
#     "gender": "female",
#     "age_range": "late 30s",
#     "language": "French"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-04",
#       "category": "home",
#       "text": "User's home address is 447 Oak Avenue."
#     },
#     {
#       "date": "2026-03-11",
#       "category": "pet",
#       "text": "User has a Corgi named Mochi."
#     },
#     {
#       "date": "2026-03-08",
#       "category": "trip",
#       "text": "User is planning a trip to Lisbon in October."
#     },
#     {
#       "date": "2026-02-27",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-02-15",
#       "category": "work",
#       "text": "User works as a software engineer."
#     },
#     {
#       "date": "2026-01-28",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-28",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2026-04-11",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2026-04-09",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: Find pictures related to my holiday in France last year, but
     4.88s  <ret> 발화 (turn1 첫 프레임)
     4.95s  agent 발화 시작: <ret> I found three photos from your France trip last year: 
     5.13s  user  발화 끝
     6.88s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.35s]: (tool result) Three files were found: "Paris_Eiffel_Tower.jpg", "Nice_
     8.19s  user  발화 시작: Mhm.
     8.68s  user  발화 끝
    10.30s  agent 발화 끝
    10.95s  user  발화 시작: Oh, perfect! Can you send "Paris_Eiffel_Tower.jpg" to my sis
    16.01s  <ret> 발화 (turn4 첫 프레임)
    16.32s  agent 발화 시작: <ret> Great! That picture has been sent to Sarah.
    16.50s  user  발화 끝
    16.97s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.45s]: (tool result) The file "Paris_Eiffel_Tower.jpg" was successfully sent 
    17.75s  user  발화 시작: Yeah.
    18.20s  user  발화 끝
    18.77s  agent 발화 끝
    19.26s  user  발화 시작: That's wonderful, thank you. Uh, do you think she'll like it
    22.03s  agent 발화 시작: [laugh] I'm sure she will! Sharing memories is a lovely way 
    22.04s  user  발화 끝
    30.04s  agent 발화 끝
