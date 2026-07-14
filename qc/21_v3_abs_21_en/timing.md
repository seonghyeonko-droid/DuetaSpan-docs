# v3_abs_21_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_abs_21",
#     "name": "Hugo",
#     "location": {
#       "city": "New York",
#       "country": "United States",
#       "timezone": "America/New_York (EST, UTC-5)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "male",
#     "age_range": "late 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-04",
#       "category": "medication",
#       "text": "User takes blood-pressure medication."
#     },
#     {
#       "date": "2026-05-22",
#       "category": "floor",
#       "text": "User lives on the 8th floor."
#     },
#     {
#       "date": "2026-05-18",
#       "category": "bloodtype",
#       "text": "User's blood type is B-."
#     },
#     {
#       "date": "2026-04-30",
#       "category": "savings",
#       "text": "User is saving for an emergency fund of six months' expenses."
#     },
#     {
#       "date": "2026-04-09",
#       "category": "emergency",
#       "text": "User's emergency contact is Leo."
#     },
#     {
#       "date": "2026-03-30",
#       "category": "skill",
#       "text": "User is just getting back into calligraphy."
#     },
#     {
#       "date": "2026-01-25",
#       "category": "learning",
#       "text": "User is taking an online data-science course."
#     },
#     {
#       "date": "2025-12-14",
#       "category": "anniversary",
#       "text": "User's anniversary is January 24."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-23",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool and a sauna",
#         "prefers one within 10 minutes of the office"
#       ]
#     },
#     {
#       "date": "2026-02-18",
#       "title": "Planning a camping trip",
#       "bullets": [
#         "a weekend at a lake site in September",
#         "asked about a 4-person tent and a cooler"
#       ]
#     },
#     {
#       "date": "2026-01-25",
#       "title": "Renovating the bathroom",
#       "bullets": [
#         "budget of 6M won",
#         "wants a walk-in shower instead of a tub"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 How high on the billboard charts d | S2 It is! I remember hearing it all t | S3 It really does. Speaking of feelin | S4 I guess you’re right. It's just ha

     0.00s  user  발화 시작: How high on the billboard charts did the song (Don't Fear) T
     4.73s  <ret> 발화 (turn1 첫 프레임)
     4.78s  agent 발화 시작: <ret> Oh, that’s a great song! Unfortunately, I don’t have s
     4.78s  user  발화 끝
     5.22s  ⚡SPAN 주입 [d'=0.49s / d_lead=5.67s]: (no information found)
    10.45s  user  발화 시작: That’s too bad. Do you know what year it was released?
    10.45s  agent 발화 끝
    13.67s  <ret> 발화 (turn3 첫 프레임)
    13.74s  agent 발화 시작: <ret> It was released in nineteen eighty-one, as part of the
    13.74s  user  발화 끝
    14.59s  ⚡SPAN 주입 [d'=0.91s / d_lead=5.08s]: Journey released the song "(Don't Stop Believin')" in 1981 as the seco
    18.82s  user  발화 시작: It is! I remember hearing it all the time growing up.
    18.82s  agent 발화 끝
    22.10s  agent 발화 시작: [happy] Music has such a powerful way of bringing back memor
    22.10s  user  발화 끝
    29.27s  user  발화 시작: Yeah, yeah.
    29.27s  agent 발화 끝
    29.87s  user  발화 시작: It really does. Speaking of feelings, I’ve been feeling pret
    29.87s  user  발화 끝
    33.45s  agent 발화 시작: I’m sorry to hear that. It’s perfectly okay to feel down som
    33.45s  user  발화 끝
    39.72s  agent 발화 시작: It’s like waves, really — they rise and fall, and you can le
    39.72s  agent 발화 끝
    44.50s  user  발화 시작: …Do you think talking about it would help?
    44.50s  agent 발화 끝
    46.89s  agent 발화 시작: Yeah.
    46.89s  user  발화 끝
    47.19s  agent 발화 시작: Talking can be incredibly helpful. Sharing what's on your mi
    47.19s  agent 발화 끝
    52.56s  user  발화 시작: I guess you’re right. It's just hard to know where to start.
    52.56s  agent 발화 끝
    56.15s  agent 발화 시작: Yeah.
    56.15s  user  발화 끝
    56.45s  agent 발화 시작: That's understandable. Starting can be the hardest part. Per
    56.45s  agent 발화 끝
    63.02s  agent 발화 시작: Remember, I’m here to listen without judgment, and we can ta
    63.02s  agent 발화 끝
    67.50s  user  발화 시작: Yeah, totally.
    67.50s  agent 발화 끝
    68.09s  user  발화 끝
