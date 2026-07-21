# v3_mem_36_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_36",
#     "name": "Quinn",
#     "location": {
#       "city": "London",
#       "country": "United Kingdom",
#       "timezone": "Europe/London (GMT, UTC+0)",
#       "currency": "GBP (£)"
#     },
#     "nationality": "British",
#     "gender": "non-binary",
#     "age_range": "late 20s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-13",
#       "category": "wake",
#       "text": "User usually wakes up around 6am."
#     },
#     {
#       "date": "2026-05-22",
#       "category": "plant",
#       "text": "User is growing a few succulents at home."
#     },
#     {
#       "date": "2026-04-27",
#       "category": "car",
#       "text": "User drives a 2022 Volkswagen Golf."
#     },
#     {
#       "date": "2026-04-13",
#       "category": "allergy",
#       "text": "User is allergic to cat dander."
#     },
#     {
#       "date": "2026-03-12",
#       "category": "floor",
#       "text": "User lives on the 12th floor."
#     },
#     {
#       "date": "2026-03-11",
#       "category": "employer",
#       "text": "User works at a design agency."
#     },
#     {
#       "date": "2026-02-18",
#       "category": "diet",
#       "text": "User is keto."
#     },
#     {
#       "date": "2026-01-22",
#       "category": "coffee",
#       "text": "User's usual coffee order is a caramel latte."
#     },
#     {
#       "date": "2025-12-05",
#       "category": "skill",
#       "text": "User is just getting back into alpine wildflower photography."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-04",
#       "title": "Choosing a laptop",
#       "bullets": [
#         "budget around 1.8M won",
#         "needs it for video editing and light gaming"
#       ]
#     },
#     {
#       "date": "2026-02-19",
#       "title": "Planning a wedding",
#       "bullets": [
#         "guest list around 80 people",
#         "comparing two venues for next May"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 I’m trying to get back into my wil | S2 Yeah, exactly. I remember talking  | S3 Right! | S4 Hmm. I also need a new laptop for 

     0.00s  agent 발화 시작: Hi Quinn, I'm Hiaen. It's lovely to meet you.
     3.16s  agent 발화 끝
     3.44s  user  발화 시작: I’m trying to get back into my wildflower photography, but I
     5.16s  agent 발화 시작: Yeah, yeah.
     6.25s  agent 발화 끝
     8.25s  agent 발화 시작: That’s totally understandable. It’s like the lens cap is on 
     8.28s  user  발화 끝
    14.55s  agent 발화 끝
    15.80s  user  발화 시작: Yeah, exactly. I remember talking about it before, actually.
    17.06s  agent 발화 시작: Yeah.
    17.65s  agent 발화 끝
    19.28s  <ret> 발화 (turn6 첫 프레임)
    19.77s  agent 발화 시작: <ret> It's good you remember that earlier feeling… …you ment
    19.82s  user  발화 끝
    20.14s  ⚡SPAN 주입 [d'=0.86s / d_lead=3.14s]: [2025-12-05] User is just getting back into alpine wildflower photogra
    29.11s  user  발화 시작: Right!
    29.18s  agent 발화 끝
    29.79s  agent 발화 시작: Sometimes a tiny daily practice can help. Even just looking 
    29.84s  user  발화 끝
    33.98s  user  발화 시작: Yeah.
    34.56s  user  발화 끝
    35.72s  user  발화 시작: Hmm. I also need a new laptop for editing the photos. I was 
    35.72s  agent 발화 끝
    40.00s  agent 발화 시작: Mhm.
    40.45s  agent 발화 끝
    42.10s  <ret> 발화 (turn12 첫 프레임)
    42.38s  user  발화 끝
    42.55s  agent 발화 시작: <ret> Okay, a laptop around that price… …you mentioned a bud
    42.98s  ⚡SPAN 주입 [d'=0.88s / d_lead=2.44s]: [2026-05-04] Past chat — Choosing a laptop: budget around 1.8M won; ne
    59.21s  agent 발화 끝
