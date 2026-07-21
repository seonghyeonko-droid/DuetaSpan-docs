# v3_rag_28_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_28",
#     "name": "Hana",
#     "location": {
#       "city": "Paris",
#       "country": "France",
#       "timezone": "Europe/Paris (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "French",
#     "gender": "female",
#     "age_range": "50s",
#     "language": "French"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-12",
#       "category": "diet",
#       "text": "User is vegetarian."
#     },
#     {
#       "date": "2026-02-08",
#       "category": "plant",
#       "text": "User is growing a monstera at home."
#     },
#     {
#       "date": "2026-02-07",
#       "category": "home",
#       "text": "User's home address is 512 Spruce Lane."
#     },
#     {
#       "date": "2026-01-29",
#       "category": "streaming",
#       "text": "User subscribes to Disney+ and YouTube Premium."
#     },
#     {
#       "date": "2025-12-13",
#       "category": "pet",
#       "text": "User has a Border Collie named Ziggy."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-11",
#       "title": "Meal-prep planning",
#       "bullets": [
#         "wants high-protein lunches under 600 calories",
#         "avoiding dairy this month"
#       ]
#     },
#     {
#       "date": "2026-03-31",
#       "title": "Building a PC",
#       "bullets": [
#         "budget around 2M won for gaming",
#         "torn between two GPUs"
#       ]
#     },
#     {
#       "date": "2026-02-05",
#       "title": "Studying for the TOEIC",
#       "bullets": [
#         "target score is 850",
#         "exam is in about six weeks"
#       ]
#     },
#     {
#       "date": "2026-01-20",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers for a 3-story house",
#         "wanted coverage for the basement office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 I’m starting a new job next week,  | S2 But what if I ask silly questions? | S3 That’s…reassuring, actually. I kee | S4 You're right. Maybe it's just part

     0.00s  user  발화 시작: I’m starting a new job next week, and I’m feeling really ove
     1.69s  agent 발화 시작: Right.
     2.59s  agent 발화 끝
     4.06s  agent 발화 시작: [happy] It’s completely normal to feel that way, starting so
     4.07s  user  발화 끝
     8.89s  user  발화 시작: Okay.
     9.47s  user  발화 끝
    13.61s  agent 발화 끝
    13.89s  user  발화 시작: Just…everything. I’m worried I won’t be good enough, or that
    19.12s  user  발화 끝
    19.53s  agent 발화 시작: Those are common worries, absolutely. Remember, everyone sta
    24.89s  user  발화 시작: Mm-hmm.
    25.29s  user  발화 끝
    27.10s  user  발화 시작: But what if I ask silly questions? Or if I don’t understand 
    27.27s  agent 발화 끝
    30.98s  <ret> 발화 (turn8 첫 프레임)
    31.40s  user  발화 끝
    31.53s  agent 발화 시작: <ret> Oh, asking questions is *excellent*! It shows you’re e
    31.58s  ⚡SPAN 주입 [d'=0.60s / d_lead=18.69s]: A new employee should feel comfortable asking questions, as it demonst
    41.02s  user  발화 시작: Right.
    41.47s  user  발화 끝
    50.23s  agent 발화 끝
    51.92s  user  발화 시작: That’s…reassuring, actually. I keep thinking about the histo
    59.88s  <ret> 발화 (turn11 첫 프레임)
    60.12s  agent 발화 시작: <ret> For context, the first wave of western settlement bega
    60.23s  user  발화 끝
    60.95s  ⚡SPAN 주입 [d'=1.07s / d_lead=14.46s]: The first wave of western settlement began in the early 15th century, 
    68.61s  user  발화 시작: Right.
    69.20s  user  발화 끝
    74.59s  agent 발화 끝
    75.11s  user  발화 시작: The 15th century? Wow. That’s a long time ago. So it's alway
    82.56s  user  발화 끝
    83.04s  agent 발화 시작: [sigh] I imagine it’s always had its challenges, yes. Though
    92.46s  user  발화 시작: You're right. Maybe it's just part of the human experience. 
    92.63s  agent 발화 끝
    97.41s  user  발화 끝
    97.46s  agent 발화 시작: [happy] You’re very welcome! Remember, I’m here to help you 
   107.04s  agent 발화 끝
