# v3_selfc_08_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_selfc_08",
#     "name": "Dylan",
#     "location": {
#       "city": "San Francisco",
#       "country": "United States",
#       "timezone": "America/Los_Angeles (PST, UTC-8)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "male",
#     "age_range": "late 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-09",
#       "category": "airline",
#       "text": "User usually flies with United."
#     },
#     {
#       "date": "2026-04-19",
#       "category": "floor",
#       "text": "User lives on the 12th floor."
#     },
#     {
#       "date": "2026-01-20",
#       "category": "bloodtype",
#       "text": "User's blood type is B-."
#     },
#     {
#       "date": "2026-01-19",
#       "category": "streaming",
#       "text": "User subscribes to a shared Netflix family plan."
#     },
#     {
#       "date": "2026-01-06",
#       "category": "dislike",
#       "text": "User can't stand cilantro."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-19",
#       "title": "Building a PC",
#       "bullets": [
#         "budget around 2M won for gaming",
#         "torn between two GPUs"
#       ]
#     },
#     {
#       "date": "2026-03-12",
#       "title": "Studying for the TOEIC",
#       "bullets": [
#         "target score is 850",
#         "exam is in about six weeks"
#       ]
#     },
#     {
#       "date": "2026-02-17",
#       "title": "Meal-prep planning",
#       "bullets": [
#         "wants high-protein lunches under 600 calories",
#         "avoiding dairy this month"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 I need to unconfirm the meeting sc | S2 That's better. I'm really stressed | S3 …Is she even aware there *is* a pr | S4 Do you have any advice on how to s

     0.00s  user  발화 시작: I need to unconfirm the meeting scheduled for Monday.
     2.58s  <ret> 발화 (turn1 첫 프레임)
     3.02s  agent 발화 시작: <ret> Alright, meeting one two three four five is cancelled,
     3.14s  user  발화 끝
     3.34s  ⚡SPAN 주입 [d'=0.76s / d_lead=9.04s]: (tool result) Meeting 12345 cancelled. Confirmation ID: XJ789
    12.06s  agent 발화 끝
    12.43s  user  발화 시작: Actually, it was Tuesday, not Monday.
    14.34s  <ret> 발화 (turn3 첫 프레임)
    14.88s  agent 발화 시작: <ret> [happy] No problem at all. Meeting one two three four 
    14.88s  user  발화 끝
    15.62s  ⚡SPAN 주입 [d'=1.28s / d_lead=11.73s]: (tool result) Meeting 12345 cancelled. Confirmation ID: YK234
    21.39s  user  발화 시작: Mm-hmm.
    21.89s  user  발화 끝
    26.61s  agent 발화 끝
    27.45s  user  발화 시작: That's better. I'm really stressed about a conflict with a c
    31.80s  user  발화 끝
    31.80s  agent 발화 시작: I understand. Workplace conflicts can be draining. It's brav
    37.85s  agent 발화 시작: Sometimes, identifying the core issue—
    37.92s  agent 발화 끝
    39.64s  user  발화 시작: …Is she even aware there *is* a problem? I haven’t actually 
    40.34s  agent 발화 끝
    44.09s  agent 발화 시작: That’s a very insightful question. Often, a direct conversat
    44.17s  user  발화 끝
    49.81s  agent 발화 시작: It's possible Sarah isn’t aware of your concerns, and assumi
    49.98s  agent 발화 끝
    53.05s  user  발화 시작: Yeah.
    53.55s  user  발화 끝
    55.38s  agent 발화 시작: [curious] Have you considered what you'd like to achieve by 
    55.41s  agent 발화 끝
    61.73s  user  발화 시작: I just want us to work together without constantly disagreei
    61.82s  agent 발화 끝
    64.96s  agent 발화 시작: That’s a very reasonable goal. Focusing on collaboration rat
    65.11s  user  발화 끝
    71.86s  agent 발화 시작: [sigh] It takes courage to initiate these conversations, but
    71.95s  agent 발화 끝
    80.29s  agent 발화 끝
    80.39s  user  발화 시작: Do you have any advice on how to start the conversation?
    83.34s  agent 발화 시작: Begin by expressing your observations neutrally, focusing on
    83.49s  user  발화 끝
    89.92s  agent 발화 시작: [happy] Try phrasing it as "I've noticed..." rather than "Yo
    90.06s  agent 발화 끝
    99.84s  agent 발화 끝
