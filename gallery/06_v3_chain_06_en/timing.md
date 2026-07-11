# v3_chain_06_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_chain_06",
#     "name": "Casey",
#     "location": {
#       "city": "Sydney",
#       "country": "Australia",
#       "timezone": "Australia/Sydney (AEDT, UTC+11)",
#       "currency": "AUD ($)"
#     },
#     "nationality": "Australian",
#     "gender": "non-binary",
#     "age_range": "early 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-24",
#       "category": "trip",
#       "text": "User is planning a trip to Lisbon in March."
#     },
#     {
#       "date": "2026-05-05",
#       "category": "home",
#       "text": "User's home address is 26 Oak Avenue."
#     },
#     {
#       "date": "2026-04-08",
#       "category": "diet",
#       "text": "User is vegetarian."
#     },
#     {
#       "date": "2026-01-31",
#       "category": "pet",
#       "text": "User has a Poodle named Coco."
#     },
#     {
#       "date": "2025-07-14",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Korean BBQ."
#     },
#     {
#       "date": "2025-06-08",
#       "category": "work",
#       "text": "User works as a architect."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-14",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Can you clear the session labeled  | S2 What are the ratings for Bella Ita | S3 Great, thank you. What time is it  | S4 Okay. Find me some relaxing music 

     0.00s  user  발화 시작: Can you clear the session labeled proj alpha version two?
     0.00s  <ret> 발화 (turn1 첫 프레임)
     0.00s  <ret> 발화 (turn4 첫 프레임)
     0.00s  <ret> 발화 (turn10 첫 프레임)
     0.03s  agent 발화 시작: <ret> The session has been cleared for you. It’s good to kee
     0.03s  ⚡SPAN 주입 [d'=0.05s / d_lead=0.05s]: (tool result) Session proj alpha version two cleared.
     0.03s  user  발화 끝
     0.08s  user  발화 시작: Yeah.
     0.08s  agent 발화 끝
     0.08s  user  발화 시작: Okay, good. What’s the weather in Seoul right now?
     0.08s  user  발화 끝
     0.11s  agent 발화 시작: <ret> The weather in Seoul is currently 26.5 degrees Celsius
     0.11s  ⚡SPAN 주입 [d'=0.08s / d_lead=0.08s]: (tool result) Current weather in Seoul: 26.5°C, humidity 68%, wind 3.2
     0.11s  user  발화 끝
     0.14s  <ret> 발화 (turn6 첫 프레임)
     0.19s  user  발화 시작: And can you find me some Italian restaurants nearby?
     0.19s  agent 발화 끝
     0.22s  agent 발화 시작: <ret> I found three Italian restaurants near you: Bella Ital
     0.22s  ⚡SPAN 주입 [d'=0.07s / d_lead=0.07s]: (tool result) Bella Italia (4.5 stars, 0.8 km), Pasta Paradise (4.2 st
     0.22s  user  발화 끝
     0.23s  <ret> 발화 (turn8 첫 프레임)
     0.29s  user  발화 시작: What are the ratings for Bella Italia again?
     0.29s  agent 발화 끝
     0.31s  agent 발화 시작: <ret> Bella Italia has a rating of 4.5 stars and is 0.8 kilo
     0.31s  ⚡SPAN 주입 [d'=0.04s / d_lead=0.04s]: Bella Italia (4.5 stars, 0.8 km)
     0.31s  user  발화 끝
     0.33s  <ret> 발화 (turn17 첫 프레임)
     0.35s  user  발화 시작: Um, could you reserve a table there for two, for this Saturd
     0.35s  agent 발화 끝
     0.38s  <ret> 발화 (turn15 첫 프레임)
     0.39s  agent 발화 시작: <ret> Yes, a table for two at Bella Italia is confirmed for 
     0.39s  ⚡SPAN 주입 [d'=0.08s / d_lead=0.08s]: (tool result) Reservation confirmed for Bella Italia, July 12, 2026, 7
     0.39s  user  발화 끝
     0.42s  <ret> 발화 (turn12 첫 프레임)
     0.47s  user  발화 시작: …Actually, can we make that 8:00 PM instead?
     0.47s  agent 발화 끝
     0.50s  agent 발화 시작: <ret> Your reservation at Bella Italia is now updated to 8:0
     0.50s  ⚡SPAN 주입 [d'=0.09s / d_lead=0.09s]: (tool result) Reservation updated for Bella Italia, July 12, 2026, 8:0
     0.50s  user  발화 끝
     0.58s  user  발화 시작: Yeah.
     0.58s  agent 발화 끝
     0.58s  user  발화 시작: Great, thank you. What time is it in London right now?
     0.58s  user  발화 끝
     0.61s  <ret> 발화 (turn22 첫 프레임)
     0.62s  agent 발화 시작: <ret> It is currently 11:47 AM in London, on Friday, July 10
     0.62s  ⚡SPAN 주입 [d'=0.06s / d_lead=0.06s]: (tool result) It is Friday, July 10, 2026 at 11:47 AM in Europe/London
     0.62s  user  발화 끝
     0.68s  user  발화 시작: Yes, it is. Find me some flights from Seoul to London, one-w
     0.68s  agent 발화 끝
     0.73s  agent 발화 시작: <ret> I found two one-way flights from Seoul to London next 
     0.73s  ⚡SPAN 주입 [d'=0.09s / d_lead=0.09s]: (tool result) Korean Air KE001, departs 14:30, arrives 18:00, price $1
     0.73s  user  발화 끝
     0.75s  <ret> 발화 (turn19 첫 프레임)
     0.81s  user  발화 시작: What’s the cheapest option?
     0.81s  agent 발화 끝
     0.83s  agent 발화 시작: <ret> The Korean Air flight departing at 2:30 PM is the chea
     0.83s  ⚡SPAN 주입 [d'=0.07s / d_lead=0.07s]: Korean Air KE001, departs 14:30, arrives 18:00, price $1250; Asiana Ai
     0.83s  user  발화 끝
     0.89s  user  발화 시작: Exactly.
     0.89s  agent 발화 끝
     0.90s  user  발화 시작: Okay. Find me some relaxing music to listen to.
     0.90s  user  발화 끝
     0.93s  agent 발화 시작: <ret> I’ve found some relaxing music for you. Perhaps “Weigh
     0.93s  ⚡SPAN 주입 [d'=0.07s / d_lead=0.07s]: (tool result) “Weightless” by Marconi Union, “Nuvole Bianche” by Ludov
     0.93s  user  발화 끝
     0.99s  user  발화 시작: Play “Weightless”.
     0.99s  agent 발화 끝
     1.00s  user  발화 끝
