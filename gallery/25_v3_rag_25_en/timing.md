# v3_rag_25_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_25",
#     "name": "Mason",
#     "location": {
#       "city": "London",
#       "country": "United Kingdom",
#       "timezone": "Europe/London (GMT, UTC+0)",
#       "currency": "GBP (£)"
#     },
#     "nationality": "British",
#     "gender": "male",
#     "age_range": "late 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-13",
#       "category": "allergy",
#       "text": "User is allergic to penicillin."
#     },
#     {
#       "date": "2026-03-12",
#       "category": "hobby",
#       "text": "User is into birdwatching."
#     },
#     {
#       "date": "2025-10-29",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-09-12",
#       "category": "work",
#       "text": "User works as a graduate student."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-03-29",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2026-02-21",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2025-09-08",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 I’m trying to plan a trip to Texas | S2 Oh, right! Coy… I think I knew tha | S3 Um, yeah. What’s the weather like  | S4 That sounds nice. Can you reserve 

     0.00s  user  발화 시작: I’m trying to plan a trip to Texas, and I was wondering abou
     4.84s  agent 발화 시작: Laredo is a vibrant city on the US-Mexico border! It’s known
     4.84s  user  발화 끝
    13.49s  user  발화 시작: Okay.
    13.49s  agent 발화 끝
    13.83s  user  발화 시작: Well, I saw something about a movie filmed there… with gunme
    13.83s  user  발화 끝
    17.55s  <ret> 발화 (turn4 첫 프레임)
    17.63s  agent 발화 시작: <ret> That sounds like “Frontier”, filmed in and around Lare
    17.63s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.57s]: Walter Darwin Coy starred as the narrator in the 1959 film “Frontier”,
    17.63s  user  발화 끝
    24.20s  user  발화 시작: Oh, right! Coy… I think I knew that.
    24.20s  agent 발화 끝
    26.97s  agent 발화 시작: Glad I could jog your memory.
    26.97s  user  발화 끝
    29.04s  user  발화 시작: Yeah.
    29.04s  agent 발화 끝
    29.39s  user  발화 시작: Um, yeah. What’s the weather like there right now?
    29.39s  user  발화 끝
    32.18s  <ret> 발화 (turn9 첫 프레임)
    32.50s  agent 발화 시작: <ret> It’s currently 34.7°C in Laredo, with 68% humidity, cl
    32.50s  ⚡SPAN 주입 [d'=1.84s / d_lead=6.57s]: (tool result) 34.7°C, humidity 68%, wind 11.3 km/h, clear skies.
    32.50s  user  발화 끝
    39.07s  user  발화 시작: Oh.
    39.07s  agent 발화 끝
    39.42s  agent 발화 시작: It is quite warm! Perhaps you’d like to look at hotels in La
    39.42s  user  발화 끝
    43.91s  user  발화 시작: Yeah, yeah.
    43.91s  agent 발화 끝
    44.60s  user  발화 시작: Maybe. Are there any good restaurants nearby the film locati
    44.60s  user  발화 끝
    47.74s  <ret> 발화 (turn14 첫 프레임)
    48.06s  agent 발화 시작: <ret> The Garden Grill, an American restaurant with 4.2 star
    48.06s  ⚡SPAN 주입 [d'=1.60s / d_lead=5.53s]: (tool result) The Garden Grill - American, 4.2 stars, 1201 E Market St
    48.06s  user  발화 끝
    53.59s  user  발화 시작: That sounds nice. Can you reserve a table for two there tomo
    53.59s  agent 발화 끝
    58.09s  agent 발화 시작: I can certainly try. What time would you like the reservatio
    58.09s  user  발화 끝
    62.58s  agent 발화 끝
