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

# EXAMINER(FDB-v2) 단계: S1 Find pictures related to my holida | S2 Oh, excellent! Can you send the Pa | S3 Great, thanks so much! But… what w | S4 Okay, sounds good.

     0.00s  user  발화 시작: Find pictures related to my holiday in France last year, but
     4.18s  <ret> 발화 (turn1 첫 프레임)
     4.25s  agent 발화 시작: <ret> I located three photos from your France trip last year
     4.39s  user  발화 끝
     6.18s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.89s]: (tool result) Found three files: "Paris_EiffelTower.jpg", "Nice_Beach.
     7.22s  user  발화 시작: Mhm.
     7.53s  user  발화 끝
     9.15s  agent 발화 끝
     9.83s  user  발화 시작: Oh, excellent! Can you send the Paris one to my sister, her 
    16.02s  <ret> 발화 (turn4 첫 프레임)
    16.33s  agent 발화 시작: <ret> I’ve just emailed the Eiffel Tower photo to Anna with 
    16.49s  user  발화 끝
    17.06s  ⚡SPAN 주입 [d'=1.04s / d_lead=5.19s]: (tool result) Email sent to anna.rossi@email.com with attachment "Pari
    19.59s  user  발화 시작: Yeah.
    20.08s  user  발화 끝
    21.52s  agent 발화 끝
    22.01s  user  발화 시작: Great, thanks so much! But… what was the weather like in Lyo
    26.61s  agent 발화 시작: Give me a moment to check the historical weather data for Ly
    26.69s  user  발화 끝
    29.16s  user  발화 시작: Yeah.
    29.80s  user  발화 끝
    30.08s  agent 발화 끝
    30.09s  user  발화 시작: Okay, sounds good.
    30.29s  ⚡지연 SPAN 주입(선제발표 직전): (tool result) The weather in Lyon on July 15, 2023, was 28 degrees Cel
    31.22s  agent 발화 시작: <ret> Let’s see… On July fifteenth, two thousand twenty-thre
    31.42s  user  발화 끝
    37.48s  agent 발화 끝
