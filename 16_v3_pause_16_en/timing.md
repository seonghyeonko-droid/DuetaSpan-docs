# v3_pause_16_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_pause_16",
#     "name": "Iris",
#     "location": {
#       "city": "Sydney",
#       "country": "Australia",
#       "timezone": "Australia/Sydney (AEDT, UTC+11)",
#       "currency": "AUD ($)"
#     },
#     "nationality": "Australian",
#     "gender": "female",
#     "age_range": "40s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-19",
#       "category": "diet",
#       "text": "User is vegetarian."
#     },
#     {
#       "date": "2026-06-12",
#       "category": "pet",
#       "text": "User has a tabby cat named Luna."
#     },
#     {
#       "date": "2026-05-17",
#       "category": "home",
#       "text": "User's home address is 882 Cedar Lane."
#     },
#     {
#       "date": "2025-12-04",
#       "category": "work",
#       "text": "User works as a high-school teacher."
#     },
#     {
#       "date": "2025-07-15",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2025-06-09",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is sushi."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-07",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2025-09-27",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2025-09-24",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 I was just wondering, who owns the | S2 …acquire them? | S3 Is he involved in any other busine | S4 That makes sense. Well…

     0.00s  user  발화 시작: I was just wondering, who owns the Houston Rockets?
     2.44s  <ret> 발화 (turn1 첫 프레임)
     2.76s  agent 발화 시작: <ret> It’s Tilman Joseph Fertitta, an American businessman w
     2.76s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.56s]: Tilman Joseph Fertitta is an American businessman who is the current o
     2.90s  user  발화 끝
    12.31s  agent 발화 끝
    12.69s  user  발화 시작: Oh, okay.…
    14.11s  user  발화 끝
    15.02s  user  발화 시작: …And how did he… uhhh… acquire them?
    17.74s  user  발화 끝
    17.88s  agent 발화 시작: People often wonder about these transitions, and it's a good
    24.22s  agent 발화 끝
    24.27s  user  발화 시작: …acquire them?
    24.84s  <ret> 발화 (turn6 첫 프레임)
    25.07s  agent 발화 시작: <ret> He purchased the Rockets from Leslie Alexander in 2017
    25.08s  ⚡SPAN 주입 [d'=1.68s / d_lead=4.81s]: Fertitta purchased the Houston Rockets from Leslie Alexander in 2017 f
    25.09s  user  발화 끝
    29.02s  user  발화 시작: …was that a record price at the time?
    29.88s  agent 발화 끝
    31.33s  user  발화 끝
    31.41s  agent 발화 시작: That’s a very insightful question! At the time, yes, $2.2 bi
    45.41s  agent 발화 끝
    45.83s  user  발화 시작: Wow, that's a lot of money.
    47.44s  user  발화 끝
    47.54s  agent 발화 시작: It certainly is a substantial investment. The value reflects
    52.61s  user  발화 시작: Exactly.
    53.43s  user  발화 끝
    55.93s  agent 발화 끝
    56.00s  user  발화 시작: Is he involved in any other businesses besides the Rockets?
    59.38s  <ret> 발화 (turn13 첫 프레임)
    59.45s  agent 발화 시작: <ret> Yes, he’s quite a successful businessman. Tilman Ferti
    59.45s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.30s]: Tilman Fertitta is the chairman and CEO of Landry's, Inc., a hospitali
    59.56s  user  발화 끝
    67.02s  user  발화 시작: Landry's, huh? I think I've eaten at one of those.
    67.74s  agent 발화 끝
    69.92s  agent 발화 시작: They have a very wide range of restaurants, so it's quite li
    70.16s  user  발화 끝
    73.39s  user  발화 시작: Mhm.
    73.88s  user  발화 끝
    76.85s  user  발화 시작: Do you think owning a sports team is good for business, gene
    77.00s  agent 발화 끝
    80.09s  agent 발화 시작: It can be a very effective way to build brand awareness and 
    80.22s  user  발화 끝
    83.17s  user  발화 시작: Okay.
    83.84s  user  발화 끝
    88.48s  agent 발화 끝
    88.76s  user  발화 시작: That makes sense. Well…
    90.46s  user  발화 끝
    92.45s  user  발화 시작: …thanks for the information, Naena.
    94.38s  user  발화 끝
    94.39s  agent 발화 시작: You’re very welcome. I'm glad I could help you learn a littl
   101.90s  agent 발화 끝
