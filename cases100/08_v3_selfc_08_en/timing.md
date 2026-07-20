# v3_selfc_08_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_selfc_08",
#     "name": "Ada",
#     "location": {
#       "city": "London",
#       "country": "United Kingdom",
#       "timezone": "Europe/London (GMT, UTC+0)",
#       "currency": "GBP (£)"
#     },
#     "nationality": "British",
#     "gender": "female",
#     "age_range": "mid 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-11",
#       "category": "skill",
#       "text": "User is getting fairly good at home fermentation."
#     },
#     {
#       "date": "2026-06-10",
#       "category": "bloodtype",
#       "text": "User's blood type is A-."
#     },
#     {
#       "date": "2026-04-17",
#       "category": "dish",
#       "text": "User's go-to comfort dish is pad thai."
#     },
#     {
#       "date": "2026-03-09",
#       "category": "streaming",
#       "text": "User subscribes to Netflix and Spotify."
#     },
#     {
#       "date": "2026-01-02",
#       "category": "allergy",
#       "text": "User is allergic to soy."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-25",
#       "title": "Studying for the TOEIC",
#       "bullets": [
#         "target score is 850",
#         "exam is in about six weeks"
#       ]
#     },
#     {
#       "date": "2026-04-11",
#       "title": "Choosing a laptop",
#       "bullets": [
#         "budget around 1.8M won",
#         "needs it for video editing and light gaming"
#       ]
#     },
#     {
#       "date": "2026-02-11",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers for a 3-story house",
#         "wanted coverage for the basement office"
#       ]
#     },
#     {
#       "date": "2025-12-07",
#       "title": "Selling a used bike",
#       "bullets": [
#         "a 3-year-old road bike",
#         "asking around 400k won"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Please refund twenty-five dollars  | S2 I was thinking next week— no, wait | S3 Maybe. I’d like to find a nice hot | S4 Yes, please.

     0.00s  user  발화 시작: Please refund twenty-five dollars and fifty cents for captur
    15.04s  <ret> 발화 (turn1 첫 프레임)
    15.42s  agent 발화 시작: <ret> Okay, I’ve created a refund for twenty-five dollars an
    15.54s  user  발화 끝
    15.55s  ⚡SPAN 주입 [d'=0.51s / d_lead=9.83s]: (tool result) Refund created. ID: R-5555555555. Amount: $25.50. Status
    22.87s  user  발화 시작: Yeah.
    23.69s  user  발화 끝
    25.25s  agent 발화 끝
    25.39s  user  발화 시작: That’s great, thank you. Uh, I’m thinking of taking a trip… 
    29.72s  agent 발화 시작: Seoul is a wonderful choice! [happy] It's such a vibrant cit
    29.83s  user  발화 끝
    32.72s  user  발화 시작: Yeah.
    33.53s  user  발화 끝
    35.74s  agent 발화 끝
    35.83s  user  발화 시작: I was thinking next week— no, wait, the week after. July eig
    41.51s  <ret> 발화 (turn7 첫 프레임)
    41.98s  agent 발화 시작: <ret> Perfect! So that’s July eighteenth to the twenty-fifth
    42.18s  user  발화 끝
    42.54s  ⚡SPAN 주입 [d'=1.03s / d_lead=8.34s]: It is Friday, July 10, 2026 at 1:12 PM in Asia/Seoul right now.
    47.95s  user  발화 시작: Mhm.
    48.59s  user  발화 끝
    50.31s  agent 발화 시작: I'm happy to help you plan. Do you have any initial ideas ab
    50.32s  agent 발화 끝
    58.00s  agent 발화 끝
    58.31s  user  발화 시작: Maybe. I’d like to find a nice hotel, something not too expe
    62.36s  <ret> 발화 (turn11 첫 프레임)
    62.52s  agent 발화 시작: <ret> I found the L7 Myeongdong, which is a highly-rated hot
    62.57s  user  발화 끝
    63.29s  ⚡SPAN 주입 [d'=0.94s / d_lead=10.16s]: (tool result) Hotel: L7 Myeongdong. Price: $120/night. Rating: 4.2 sta
    72.68s  agent 발화 끝
    72.70s  user  발화 시작: That sounds pretty good.
    74.31s  user  발화 끝
    74.46s  agent 발화 시작: [happy] Wonderful! It’s in a really lively area, close to sh
    81.83s  agent 발화 끝
    82.08s  user  발화 시작: Yes, please.
    82.67s  <ret> 발화 (turn15 첫 프레임)
    83.12s  agent 발화 시작: <ret> Great news! Availability is confirmed at the L7 Myeong
    83.18s  user  발화 끝
    83.53s  ⚡SPAN 주입 [d'=0.86s / d_lead=9.59s]: (tool result) B-7777777777.
    86.67s  user  발화 시작: Right.
    87.45s  user  발화 끝
    92.61s  agent 발화 시작: That takes care of the hotel. I can also help with planning 
    92.71s  agent 발화 끝
   100.82s  agent 발화 끝
