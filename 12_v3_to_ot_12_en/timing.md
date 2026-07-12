# v3_to_ot_12_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_to_ot_12",
#     "name": "Rowan",
#     "location": {
#       "city": "London",
#       "country": "United Kingdom",
#       "timezone": "Europe/London (GMT, UTC+0)",
#       "currency": "GBP (£)"
#     },
#     "nationality": "British",
#     "gender": "non-binary",
#     "age_range": "early 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-14",
#       "category": "trip",
#       "text": "User is planning a trip to Vietnam in December."
#     },
#     {
#       "date": "2026-02-10",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is sushi."
#     },
#     {
#       "date": "2025-12-09",
#       "category": "hobby",
#       "text": "User is into alpine wildflower photography."
#     },
#     {
#       "date": "2025-09-18",
#       "category": "pet",
#       "text": "User has a Poodle named Coco."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-02-05",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2025-10-19",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Hi Ali, I was wondering about bask | S2 …do players get taller over time,  | S3 Oh, really? | S4 That makes sense. Thanks for the i

     0.00s  user  발화 시작: Hi Ali, I was wondering about basketball players.
     2.56s  agent 발화 시작: Hello! It's lovely to connect with you.
     2.56s  user  발화 끝
     4.80s  user  발화 시작: Okay.
     4.80s  agent 발화 끝
     5.12s  user  발화 시작: What’s the average height of someone in the NBA?
     5.12s  user  발화 끝
     7.61s  <ret> 발화 (turn4 첫 프레임)
     8.01s  agent 발화 시작: <ret> The average height of an NBA player is approximately 6
     8.01s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.16s]: The average height of an NBA player is approximately 6 feet 7 inches, 
     8.01s  user  발화 끝
    12.17s  user  발화 시작: …do players get taller over time, or is that pretty stable?
    12.17s  agent 발화 끝
    15.69s  agent 발화 시작: It appears the average height has increased slightly—
    15.69s  user  발화 끝
    18.26s  user  발화 시작: Oh, really?
    18.26s  agent 발화 끝
    18.90s  agent 발화 시작: Yes, over the years, the average NBA player's height has gra
    18.90s  user  발화 끝
    27.23s  user  발화 시작: Yeah.
    27.23s  agent 발화 끝
    27.55s  user  발화 시작: That makes sense. Thanks for the information!
    27.55s  user  발화 끝
    29.79s  agent 발화 시작: You're very welcome. It’s wonderful to hear this is helpful,
    29.79s  user  발화 끝
    35.55s  agent 발화 끝
