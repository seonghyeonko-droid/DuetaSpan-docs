# v3_mem_32_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_32",
#     "name": "Lukas",
#     "location": {
#       "city": "Toronto",
#       "country": "Canada",
#       "timezone": "America/Toronto (EST, UTC-5)",
#       "currency": "CAD ($)"
#     },
#     "nationality": "Canadian",
#     "gender": "male",
#     "age_range": "late 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-27",
#       "category": "car",
#       "text": "User drives a 2020 Kia Niro."
#     },
#     {
#       "date": "2026-06-25",
#       "category": "emergency",
#       "text": "User's emergency contact is Kenji."
#     },
#     {
#       "date": "2026-06-17",
#       "category": "dish",
#       "text": "User's go-to comfort dish is green curry."
#     },
#     {
#       "date": "2026-03-27",
#       "category": "dislike",
#       "text": "User can't stand durian."
#     },
#     {
#       "date": "2026-02-06",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is French."
#     },
#     {
#       "date": "2026-02-03",
#       "category": "music",
#       "text": "User likes listening to a lo-fi jazz playlist."
#     },
#     {
#       "date": "2026-01-21",
#       "category": "gym",
#       "text": "User has a gym membership near home."
#     },
#     {
#       "date": "2026-01-13",
#       "category": "phone",
#       "text": "User uses a Pixel 8."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-21",
#       "title": "Switching phone plans",
#       "bullets": [
#         "uses about 30GB of data a month",
#         "wants to keep the same number"
#       ]
#     },
#     {
#       "date": "2026-06-18",
#       "title": "Learning to invest",
#       "bullets": [
#         "asked about index funds vs individual stocks",
#         "wants to start with 500k won a month"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: Hi Lukas, I’m Hael.
     1.77s  user  발화 시작: Hi Hael, good to meet you too. I was hoping you could remind
     1.94s  agent 발화 끝
     4.78s  agent 발화 시작: Yeah.
     5.51s  agent 발화 끝
     6.66s  <ret> 발화 (turn3 첫 프레임)
     7.27s  agent 발화 시작: <ret> You asked about investing, and I recall you wanted to 
     7.28s  user  발화 끝
     8.18s  ⚡SPAN 주입 [d'=1.52s / d_lead=5.97s]: [2026-03-27] User can't stand durian.
    10.70s  user  발화 시작: Mm-hmm.
    11.28s  user  발화 끝
    13.11s  agent 발화 시작: That’s a great first step – many people find index funds are
    13.24s  agent 발화 끝
    17.93s  user  발화 시작: Yeah.
    18.42s  user  발화 끝
    19.87s  user  발화 시작: …Actually, before we get into funds, can we look at my data 
    19.97s  agent 발화 끝
    25.83s  <ret> 발화 (turn8 첫 프레임)
    27.10s  user  발화 끝
    27.11s  ⚡SPAN 주입 [d'=1.28s / d_lead=9.31s]: [2026-06-21] Past chat — Switching phone plans: uses about 30GB of dat
    27.16s  agent 발화 시작: <ret> Switching plans is a smart move. You mentioned using a
    36.47s  agent 발화 끝
