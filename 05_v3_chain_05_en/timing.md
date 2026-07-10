# v3_chain_05_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_chain_05",
#     "name": "Casey",
#     "location": {
#       "city": "Berlin",
#       "country": "Germany",
#       "timezone": "Europe/Berlin (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "German",
#     "gender": "non-binary",
#     "age_range": "50s",
#     "language": "German"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-05",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Thai."
#     },
#     {
#       "date": "2026-03-27",
#       "category": "hobby",
#       "text": "User is into vintage synth collecting."
#     },
#     {
#       "date": "2025-09-06",
#       "category": "work",
#       "text": "User works as a accountant."
#     },
#     {
#       "date": "2025-08-26",
#       "category": "trip",
#       "text": "User is planning a trip to Lisbon in May."
#     },
#     {
#       "date": "2025-07-02",
#       "category": "home",
#       "text": "User's home address is 91 Birch Road."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-03-21",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2026-01-06",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2025-06-04",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Give me walking directions from th | S2 Okay, perfect. And what’s the weat | S3 Great, thanks. I also need to book | S4 Can you reserve a table for two at

     0.00s  user  발화 시작: Give me walking directions from thirty-four point zero five 
    13.78s  <ret> 발화 (turn1 첫 프레임)
    14.02s  agent 발화 시작: <ret> Walking will take about forty-four minutes—
    14.02s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.86s]: (tool result) {"distance": 2135, "duration": 2642, "route": "Walk nort
    14.20s  user  발화 끝
    16.28s  user  발화 시작: …can you tell me if there’s a coffee shop along that route?
    16.89s  agent 발화 끝
    18.90s  <ret> 발화 (turn3 첫 프레임)
    19.14s  agent 발화 시작: <ret> There's a Starbucks about six hundred meters from your
    19.14s  ⚡SPAN 주입 [d'=0.50s / d_lead=5.93s]: (tool result) {"results": [{"name": "Starbucks", "vicinity": "800 S Br
    19.23s  user  발화 끝
    25.07s  agent 발화 끝
    25.09s  user  발화 시작: Okay, perfect. And what’s the weather like there right now?
    28.29s  <ret> 발화 (turn5 첫 프레임)
    28.45s  agent 발화 시작: <ret> It’s currently twenty-four point four degrees Celsius 
    28.45s  ⚡SPAN 주입 [d'=1.20s / d_lead=6.81s]: (tool result) "24.4°C, humidity 65%, wind 8.0 km/h"
    28.61s  user  발화 끝
    35.27s  agent 발화 끝
    35.46s  user  발화 시작: That sounds pleasant. Can you remind me of my appointment wi
    39.20s  <ret> 발화 (turn7 첫 프레임)
    39.45s  agent 발화 시작: <ret> You have an appointment with Dr. Lee at three o’clock 
    39.45s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.49s]: [2026-07-15] I have an appointment with Dr. Lee at 3:00 PM.
    39.62s  user  발화 끝
    43.86s  user  발화 시작: Great, thanks. I also need to book a table for dinner tonigh
    43.94s  agent 발화 끝
    47.70s  user  발화 끝
    47.98s  agent 발화 시작: Do you have a specific restaurant in mind, or a type of cuis
    49.84s  user  발화 시작: Yeah.
    50.28s  user  발화 끝
    52.38s  agent 발화 끝
    52.54s  user  발화 시작: Italian would be nice, somewhere near downtown.
    54.97s  <ret> 발화 (turn12 첫 프레임)
    55.37s  agent 발화 시작: <ret> Osteria Mozza is a highly-rated Italian restaurant dow
    55.37s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.61s]: (tool result) {"restaurants": [{"name": "Osteria Mozza", "address": "6
    55.50s  user  발화 끝
    62.87s  user  발화 시작: Can you reserve a table for two at seven thirty tonight?
    62.98s  agent 발화 끝
    66.00s  <ret> 발화 (turn14 첫 프레임)
    66.11s  user  발화 끝
    66.15s  agent 발화 시작: <ret> I’ve reserved a table for two at Osteria Mozza for sev
    66.16s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.86s]: (tool result) {"confirmation id": "RM7829"}
    75.00s  user  발화 시작: Wonderful, thank you so much for your help.
    75.01s  agent 발화 끝
    77.24s  agent 발화 시작: You’re very welcome. Remember, even small steps toward your 
    77.25s  user  발화 끝
    84.61s  agent 발화 끝
