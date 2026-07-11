# v3_abs_21_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_abs_21",
#     "name": "Adam",
#     "location": {
#       "city": "Toronto",
#       "country": "Canada",
#       "timezone": "America/Toronto (EST, UTC-5)",
#       "currency": "CAD ($)"
#     },
#     "nationality": "Canadian",
#     "gender": "male",
#     "age_range": "early 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-07",
#       "category": "work",
#       "text": "User works as a software engineer."
#     },
#     {
#       "date": "2026-04-04",
#       "category": "pet",
#       "text": "User has a Corgi named Mochi."
#     },
#     {
#       "date": "2026-01-27",
#       "category": "home",
#       "text": "User's home address is 16 Pine Court."
#     },
#     {
#       "date": "2025-12-01",
#       "category": "hobby",
#       "text": "User is into alpine wildflower photography."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-03",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Symmetric federalism exist when? | S2 Maybe. What restaurants are near G | S3 Tosokchon Samgyetang sounds good.  | S4 Perfect. Thanks!

     0.00s  user  발화 시작: Symmetric federalism exist when?
     2.28s  <ret> 발화 (turn1 첫 프레임)
     2.36s  agent 발화 시작: <ret> And unfortunately, I don’t have information on when sy
     2.36s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.04s]: (no information found)
     2.58s  user  발화 끝
     5.62s  user  발화 시작: Right.
     6.25s  user  발화 끝
     7.40s  agent 발화 끝
     7.89s  user  발화 시작: Oh. Um, what about the weather in Seoul right now?
    11.28s  <ret> 발화 (turn4 첫 프레임)
    11.52s  agent 발화 시작: <ret> The weather in Seoul is currently 23.0 degrees Celsius
    11.52s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.29s]: (tool result) 23.0°C, humidity 74%, wind 5.5 km/h
    11.68s  user  발화 끝
    17.02s  user  발화 시작: Oh.
    17.46s  user  발화 끝
    21.73s  agent 발화 시작: It’s quite pleasant, isn’t it? A good day to explore.
    21.81s  agent 발화 끝
    24.39s  user  발화 시작: Uh-huh.
    24.89s  user  발화 끝
    25.66s  agent 발화 끝
    25.68s  user  발화 시작: Maybe. What restaurants are near Gyeongbokgung Palace?
    29.61s  <ret> 발화 (turn9 첫 프레임)
    29.85s  agent 발화 시작: <ret> I found three restaurants near Gyeongbokgung Palace: T
    29.85s  ⚡SPAN 주입 [d'=2.00s / d_lead=16.19s]: (tool result) Tosokchon Samgyetang (Korean, 4.5 stars, ₩20000), Hwangs
    29.89s  user  발화 끝
    46.05s  agent 발화 끝
    47.53s  user  발화 시작: Tosokchon Samgyetang sounds good. Can I reserve a table ther
    53.41s  <ret> 발화 (turn11 첫 프레임)
    53.65s  agent 발화 시작: <ret> I’ve reserved a table for two at Tosokchon Samgyetang 
    53.65s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.62s]: (tool result) Reservation confirmed for Tosokchon Samgyetang, July 12,
    53.70s  user  발화 끝
    64.23s  agent 발화 시작: That should be a lovely spot to try some traditional Korean 
    64.27s  agent 발화 끝
    66.91s  user  발화 시작: Yeah, totally.
    68.33s  user  발화 끝
    69.12s  user  발화 시작: Perfect. Thanks!
    69.14s  agent 발화 끝
    70.57s  agent 발화 시작: You’re very welcome. Settling into a new city can feel overw
    70.74s  user  발화 끝
    78.17s  agent 발화 끝
