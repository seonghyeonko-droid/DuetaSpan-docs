# v3_rag_24_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_24",
#     "name": "Mia",
#     "location": {
#       "city": "Toronto",
#       "country": "Canada",
#       "timezone": "America/Toronto (EST, UTC-5)",
#       "currency": "CAD ($)"
#     },
#     "nationality": "Canadian",
#     "gender": "female",
#     "age_range": "40s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-12",
#       "category": "pet",
#       "text": "User has a Golden Retriever named Max."
#     },
#     {
#       "date": "2026-02-09",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2026-02-03",
#       "category": "hobby",
#       "text": "User is into alpine wildflower photography."
#     },
#     {
#       "date": "2025-10-25",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     },
#     {
#       "date": "2025-10-13",
#       "category": "trip",
#       "text": "User is planning a trip to New Zealand in August."
#     },
#     {
#       "date": "2025-07-31",
#       "category": "home",
#       "text": "User's home address is 816 Birch Road."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-06-22",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Hi, Orarira! I'm feeling a bit los | S2 What's a good first step, do you t | S3 I'm trying to remember… what's tha | S4 That's it! Thanks, Orarira. You're

     0.00s  user  발화 시작: Hi, Orarira! I'm feeling a bit lost about making new friends
     4.81s  user  발화 끝
     4.98s  agent 발화 시작: Oh, hello there! It's perfectly normal to feel that way.
     8.59s  agent 발화 끝
     8.71s  user  발화 시작: What's a good first step, do you think?
    10.99s  agent 발화 시작: A wonderful first step is simply showing genuine interest in
    11.02s  user  발화 끝
    13.65s  user  발화 시작: Exactly.
    14.61s  user  발화 끝
    18.63s  agent 발화 끝
    18.94s  user  발화 시작: I'm trying to remember… what's that opening of a snail shell
    23.09s  <ret> 발화 (turn6 첫 프레임)
    23.24s  agent 발화 시작: <ret> That opening you’re thinking of is called the aperture
    23.25s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.28s]: The opening of a snail shell is known as the aperture, and it serves a
    23.34s  user  발화 끝
    26.24s  user  발화 시작: Yeah.
    26.88s  user  발화 끝
    28.01s  user  발화 시작: That's it! Thanks, Orarira. You're so helpful.
    28.53s  agent 발화 끝
    31.79s  agent 발화 시작: [happy] I'm glad I could help! Remembering little details ca
    31.95s  user  발화 끝
    38.37s  agent 발화 끝
