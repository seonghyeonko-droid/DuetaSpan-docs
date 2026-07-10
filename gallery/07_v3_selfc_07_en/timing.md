# v3_selfc_07_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_selfc_07",
#     "name": "Ivy",
#     "location": {
#       "city": "New York",
#       "country": "United States",
#       "timezone": "America/New_York (EST, UTC-5)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "female",
#     "age_range": "early 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-05",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-05-29",
#       "category": "home",
#       "text": "User's home address is 585 Elm Street."
#     },
#     {
#       "date": "2026-05-01",
#       "category": "allergy",
#       "text": "User is allergic to cat dander."
#     },
#     {
#       "date": "2026-04-27",
#       "category": "pet",
#       "text": "User has a tabby cat named Luna."
#     },
#     {
#       "date": "2026-01-21",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is sushi."
#     },
#     {
#       "date": "2025-10-16",
#       "category": "trip",
#       "text": "User is planning a trip to Iceland in October."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-05",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2026-02-01",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2025-08-24",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 I’m thinking about moving to Seoul | S2 …like to find some apartments in t | S3 Lexis Korean sounds better. What a | S4 Actually, I meant July eighteenth,

     0.00s  user  발화 시작: I’m thinking about moving to Seoul, but I keep getting diffe
     5.16s  <ret> 발화 (turn1 첫 프레임)
     5.39s  agent 발화 시작: <ret> In Seoul, the cherry blossoms usually bloom between la
     5.61s  user  발화 끝
     7.16s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.35s]: The cherry blossoms in Seoul typically bloom between late March and ea
    13.74s  agent 발화 끝
    14.07s  user  발화 시작: That's good to know. Uh, actually, I meant 2027.
    17.49s  <ret> 발화 (turn3 첫 프레임)
    17.64s  agent 발화 시작: <ret> Still, in Seoul, the cherry blossoms typically bloom b
    17.68s  user  발화 끝
    19.49s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.20s]: The cherry blossoms in Seoul typically bloom between late March and ea
    25.82s  user  발화 시작: Okay, great. I’d…
    25.84s  agent 발화 끝
    27.10s  user  발화 끝
    28.59s  user  발화 시작: …like to find some apartments in the Gangnam district.
    31.35s  <ret> 발화 (turn6 첫 프레임)
    31.59s  user  발화 끝
    31.59s  agent 발화 시작: <ret> I found two options in Gangnam: The Galleria Foret, li
    33.35s  ⚡SPAN 주입 [d'=2.00s / d_lead=13.04s]: (tool result) 37.4979, 127.0276, The Galleria Foret, 2300000000 KRW, 4
    44.47s  user  발화 시작: Raemian Estian sounds interesting. Can you schedule a viewin
    44.63s  agent 발화 끝
    48.11s  <ret> 발화 (turn8 첫 프레임)
    48.27s  agent 발화 시작: <ret> I’ve scheduled a viewing for Raemian Estian on July ei
    48.40s  user  발화 끝
    50.11s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.66s]: (tool result) Raemian Estian, July 18, 2026, 10:00 AM, confirmation ID
    58.93s  agent 발화 끝
    58.96s  user  발화 시작: Perfect! I also need to find a good Korean language school n
    63.45s  <ret> 발화 (turn10 첫 프레임)
    63.54s  user  발화 끝
    63.85s  agent 발화 시작: <ret> Two Korean language schools are near Gangnam: Gangnam 
    65.45s  ⚡SPAN 주입 [d'=2.00s / d_lead=18.47s]: (tool result) Gangnam Language Center, 37.4965, 127.0264, 02-555-1234;
    74.24s  user  발화 시작: Right.
    74.81s  user  발화 끝
    82.31s  agent 발화 끝
    83.71s  user  발화 시작: Lexis Korean sounds better. What are their phone number agai
    86.70s  <ret> 발화 (turn13 첫 프레임)
    87.10s  agent 발화 시작: <ret> The phone number for Lexis Korean is zero two – five f
    87.26s  user  발화 끝
    88.70s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.44s]: Lexis Korean, 37.4972, 127.0270, 02-555-5678
    93.55s  agent 발화 끝
    93.68s  user  발화 시작: Great. Could you look up the weather forecast for Seoul on J
    98.37s  <ret> 발화 (turn15 첫 프레임)
    98.41s  user  발화 끝
    98.53s  agent 발화 시작: <ret> On July eighteenth, two thousand twenty-six, the forec
   100.37s  ⚡SPAN 주입 [d'=2.00s / d_lead=12.33s]: (tool result) 27.0°C, humidity 78%, wind 4.2 km/h
   110.86s  agent 발화 끝
   110.92s  user  발화 시작: Hmm, that sounds a bit warm.
   113.23s  user  발화 끝
   113.73s  agent 발화 시작: It does sound warm, but hopefully a comfortable warmth for y
   119.52s  agent 발화 끝
   120.84s  user  발화 시작: Actually, I meant July eighteenth, 2027.
   123.92s  <ret> 발화 (turn19 첫 프레임)
   124.08s  user  발화 끝
   124.08s  agent 발화 시작: <ret> On July eighteenth, two thousand twenty-seven, Seoul’s
   125.92s  ⚡SPAN 주입 [d'=2.00s / d_lead=12.95s]: (tool result) 25.5°C, humidity 75%, wind 3.8 km/h
   131.80s  user  발화 시작: Uh-huh.
   132.30s  user  발화 끝
   136.80s  user  발화 시작: Yes, much better. Can you find me some good restaurants near
   137.03s  agent 발화 끝
   142.03s  <ret> 발화 (turn22 첫 프레임)
   142.19s  agent 발화 시작: <ret> Near Raemian Estian, I found Byeokje Galbi, a Korean B
   142.31s  user  발화 끝
   142.75s  ⚡SPAN 주입 [d'=0.72s / d_lead=7.84s]: (tool result) Byeokje Galbi, 37.4970, 127.0285, Korean BBQ, 02-555-901
   147.95s  user  발화 시작: Yeah.
   148.44s  user  발화 끝
   150.03s  agent 발화 끝
   150.31s  user  발화 시작: I think I'll try Byeokje Galbi. Can you make a reservation f
   157.49s  user  발화 끝
