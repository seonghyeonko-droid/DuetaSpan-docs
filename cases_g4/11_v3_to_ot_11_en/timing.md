# v3_to_ot_11_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_to_ot_11",
#     "name": "Rowan",
#     "location": {
#       "city": "Paris",
#       "country": "France",
#       "timezone": "Europe/Paris (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "French",
#     "gender": "non-binary",
#     "age_range": "early 30s",
#     "language": "French"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-23",
#       "category": "trip",
#       "text": "User is planning a trip to Patagonia in April."
#     },
#     {
#       "date": "2026-06-12",
#       "category": "allergy",
#       "text": "User is allergic to pollen."
#     },
#     {
#       "date": "2026-04-15",
#       "category": "employer",
#       "text": "User works at a consulting firm."
#     },
#     {
#       "date": "2026-04-03",
#       "category": "dish",
#       "text": "User's go-to comfort dish is mushroom risotto."
#     },
#     {
#       "date": "2026-03-30",
#       "category": "emergency",
#       "text": "User's emergency contact is Hana."
#     },
#     {
#       "date": "2026-03-24",
#       "category": "airline",
#       "text": "User usually flies with Air France."
#     },
#     {
#       "date": "2026-03-22",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Sichuan."
#     },
#     {
#       "date": "2026-03-21",
#       "category": "gym",
#       "text": "User has a gym membership near the station."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-17",
#       "title": "Training for a 10K",
#       "bullets": [
#         "current pace is around 6 minutes per km",
#         "race is in November"
#       ]
#     },
#     {
#       "date": "2026-04-01",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers for a 3-story house",
#         "wanted coverage for the basement office"
#       ]
#     },
#     {
#       "date": "2026-03-27",
#       "title": "Refinancing a mortgage",
#       "bullets": [
#         "current rate is 4.2 percent",
#         "wants to compare 15- vs 30-year terms"
#       ]
#     },
#     {
#       "date": "2025-12-24",
#       "title": "Fixing a leaking faucet",
#       "bullets": [
#         "it's a single-handle kitchen tap",
#         "asked whether to replace the cartridge"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Hey Frul, I was thinking about spo | S2 Honey, the oven timer's going off  | S3 Sorry about that! I'm actually pla | S4 It really does. Can you find me a 

     0.00s  user  발화 시작: Hey Frul, I was thinking about sports. Do you happen to know
     6.31s  agent 발화 시작: Yeah, yeah.
     7.34s  <ret> 발화 (turn2 첫 프레임)
     7.87s  agent 발화 끝
     8.15s  agent 발화 시작: <ret> It was the Notre Dame Fighting Irish. [happy] Such a g
     8.25s  user  발화 끝
     8.76s  ⚡SPAN 주입 [d'=1.42s / d_lead=4.72s]: The Notre Dame Fighting Irish won the 2018 NCAA women's basketball cha
    12.86s  agent 발화 끝
    14.30s  user  발화 시작: Honey, the oven timer's going off — can you grab it?
    16.73s  user  발화 시작: Sorry about that! I'm actually planning a trip to South Bend
    16.93s  user  발화 끝
    23.22s  user  발화 끝
    23.25s  agent 발화 시작: [curious] That's so thoughtful of you. It can be a lot to ma
    27.23s  user  발화 시작: Yeah.
    27.73s  user  발화 끝
    28.24s  user  발화 시작: It really does. Can you find me a hotel in South Bend for Ju
    28.76s  agent 발화 끝
    31.28s  agent 발화 시작: Yeah.
    31.91s  agent 발화 끝
    32.50s  <ret> 발화 (turn9 첫 프레임)
    32.93s  agent 발화 시작: <ret> I found the South Bend Grand Hotel, and they have a ro
    33.10s  user  발화 끝
    33.43s  ⚡SPAN 주입 [d'=0.93s / d_lead=6.77s]: (tool result) The South Bend Grand Hotel has availability for July 25,
    39.70s  agent 발화 끝
