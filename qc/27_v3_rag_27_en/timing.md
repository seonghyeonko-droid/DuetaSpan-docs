# v3_rag_27_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_27",
#     "name": "Owen",
#     "location": {
#       "city": "Toronto",
#       "country": "Canada",
#       "timezone": "America/Toronto (EST, UTC-5)",
#       "currency": "CAD ($)"
#     },
#     "nationality": "Canadian",
#     "gender": "male",
#     "age_range": "early 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-24",
#       "category": "dislike",
#       "text": "User can't stand cilantro."
#     },
#     {
#       "date": "2026-05-23",
#       "category": "allergy",
#       "text": "User is allergic to latex."
#     },
#     {
#       "date": "2026-05-14",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2026-05-01",
#       "category": "employer",
#       "text": "User works at a consulting firm."
#     },
#     {
#       "date": "2026-03-14",
#       "category": "anniversary",
#       "text": "User's anniversary is April 20."
#     },
#     {
#       "date": "2026-02-19",
#       "category": "dish",
#       "text": "User's go-to comfort dish is margherita pizza."
#     },
#     {
#       "date": "2026-01-05",
#       "category": "diet",
#       "text": "User is dairy-free."
#     },
#     {
#       "date": "2025-12-10",
#       "category": "wake",
#       "text": "User usually wakes up around 7:30am."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-03-22",
#       "title": "Switching phone plans",
#       "bullets": [
#         "uses about 30GB of data a month",
#         "wants to keep the same number"
#       ]
#     },
#     {
#       "date": "2026-02-11",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool and a sauna",
#         "prefers one within 10 minutes of the office"
#       ]
#     },
#     {
#       "date": "2026-01-16",
#       "title": "Comparing health insurance",
#       "bullets": [
#         "self-employed and needs dental",
#         "wants a low deductible"
#       ]
#     },
#     {
#       "date": "2025-12-20",
#       "title": "Sorting out a visa",
#       "bullets": [
#         "applying for a working-holiday visa to Australia",
#         "asked about the bank-balance requirement"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 I’m just… feeling really lost righ | S2 Do you think…do you think Rags Rag | S3 Twenty-two years… wow. That’s a lo | S4 I just wish I could move on. It fe

     0.00s  user  발화 시작: I’m just… feeling really lost right now. It’s been a month s
     5.65s  agent 발화 시작: Yeah.
     5.65s  user  발화 끝
     6.05s  agent 발화 시작: It’s completely normal to feel lost a month after a breakup.
     6.05s  agent 발화 끝
    12.91s  user  발화 시작: Right.
    12.91s  agent 발화 끝
    13.31s  user  발화 시작: I keep replaying everything in my head. Like, what if I’d do
    13.31s  user  발화 끝
    18.96s  agent 발화 시작: [sigh] It's common to dwell on "what ifs," but rumination ca
    18.96s  user  발화 끝
    27.83s  user  발화 시작: Do you think…do you think Rags Ragland ever regretted anythi
    27.83s  agent 발화 끝
    34.52s  <ret> 발화 (turn7 첫 프레임)
    34.96s  ⚡SPAN 주입 [d'=0.44s / d_lead=10.49s]: Rags Ragland died of respiratory failure on March 18, 1993, approximat
    35.09s  agent 발화 시작: <ret> It’s interesting you ask about regret; Rags Ragland di
    35.09s  user  발화 끝
    45.58s  user  발화 시작: Twenty-two years… wow. That’s a long time. He seemed so funn
    45.58s  agent 발화 끝
    50.02s  agent 발화 시작: He certainly did bring a lot of joy to people through his wo
    50.02s  user  발화 끝
    58.08s  user  발화 시작: Right.
    58.08s  agent 발화 끝
    58.49s  user  발화 시작: I just wish I could move on. It feels impossible.
    58.49s  user  발화 끝
    62.52s  agent 발화 시작: Yeah, totally.
    62.52s  user  발화 끝
    63.33s  agent 발화 시작: [happy] Moving on takes time, and it’s not linear. We can ta
    63.33s  agent 발화 끝
    73.01s  agent 발화 끝
