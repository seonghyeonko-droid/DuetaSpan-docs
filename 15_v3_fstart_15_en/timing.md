# v3_fstart_15_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_fstart_15",
#     "name": "Ada",
#     "location": {
#       "city": "Sydney",
#       "country": "Australia",
#       "timezone": "Australia/Sydney (AEDT, UTC+11)",
#       "currency": "AUD ($)"
#     },
#     "nationality": "Australian",
#     "gender": "female",
#     "age_range": "50s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-08-03",
#       "category": "work",
#       "text": "User works as a physical therapist."
#     },
#     {
#       "date": "2026-07-09",
#       "category": "hobby",
#       "text": "User is into rock climbing."
#     },
#     {
#       "date": "2026-06-08",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Mexican."
#     },
#     {
#       "date": "2026-06-02",
#       "category": "allergy",
#       "text": "User is allergic to pollen."
#     },
#     {
#       "date": "2026-03-19",
#       "category": "trip",
#       "text": "User is planning a trip to Switzerland in December."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-07-11",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2026-01-08",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 What are the latitude and longitud | S2 Is there parking nearby. | S3 Okay, good to know. And could you  | S4 Is the weather looking good for a 

     0.00s  user  발화 시작: What are the latitude and longitude of the Sydney Opera Hous
     3.84s  <ret> 발화 (turn1 첫 프레임)
     3.92s  agent 발화 시작: <ret> The Sydney Opera House is at latitude negative thirty-
     3.94s  user  발화 끝
     4.80s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.29s]: (tool result) -33.8568, 151.2153; address: Bennelong Point, Sydney NSW
     7.22s  user  발화 시작: Yeah.
     7.72s  user  발화 끝
    11.59s  user  발화 시작: And what's the quickest way to get there from Central Statio
    11.76s  agent 발화 끝
    14.94s  <ret> 발화 (turn4 첫 프레임)
    15.17s  agent 발화 시작: <ret> I can definitely help with directions. The quickest ro
    15.34s  user  발화 끝
    16.30s  ⚡SPAN 주입 [d'=1.36s / d_lead=1.84s]: (tool result) mode: transit; distance: 3.3km; estimated time: 20 minut
    18.80s  user  발화 시작: Yeah.
    19.30s  user  발화 끝
    24.07s  agent 발화 끝
    24.62s  user  발화 시작: Is there parking nearby.
    26.22s  <ret> 발화 (turn7 첫 프레임)
    26.29s  agent 발화 시작: <ret> Parking can be tricky— Wilson Parking at twenty-nine M
    26.46s  user  발화 끝
    26.86s  ⚡SPAN 주입 [d'=0.64s / d_lead=1.33s]: (tool result) parking: Wilson Parking Sydney Opera House; address: 29 
    33.60s  agent 발화 끝
    33.92s  user  발화 시작: Is it usually very crowded there?
    36.23s  user  발화 끝
    36.37s  agent 발화 시작: That’s a great question—
    37.07s  user  발화 시작: Okay, good to know. And could you book me a table for two at
    37.75s  agent 발화 끝
    44.49s  user  발화 끝
    44.49s  <ret> 발화 (turn11 첫 프레임)
    44.57s  agent 발화 시작: <ret> Aria has availability at seven thirty tonight. I’ve bo
    45.45s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.88s]: (tool result) restaurant: Aria; date: 2024-02-29; time: 19:30; status:
    53.02s  user  발화 시작: Wonderful! That’s perfect.
    53.20s  agent 발화 끝
    55.35s  agent 발화 시작: I’m so glad I could help with your evening plans. It’s alway
    55.52s  user  발화 끝
    58.52s  user  발화 시작: Yeah, totally.
    59.85s  user  발화 끝
    60.02s  agent 발화 끝
    60.24s  user  발화 시작: Is the weather looking good for a walk around the harbor aft
    63.73s  <ret> 발화 (turn16 첫 프레임)
    64.05s  agent 발화 시작: <ret> It's forecast to be partly cloudy with a temperature o
    64.08s  user  발화 끝
    65.25s  ⚡SPAN 주입 [d'=1.52s / d_lead=1.53s]: (tool result) location: Sydney Harbour; forecast: partly cloudy; tempe
    70.16s  agent 발화 끝
    70.43s  user  발화 시작: That sounds lovely. Thanks, Helion.
    73.66s  user  발화 끝
    73.75s  agent 발화 시작: You're very welcome. Enjoy your evening, and don't hesitate 
    78.19s  agent 발화 끝
