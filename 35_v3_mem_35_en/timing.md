# v3_mem_35_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_35",
#     "name": "Taylor",
#     "location": {
#       "city": "London",
#       "country": "United Kingdom",
#       "timezone": "Europe/London (GMT, UTC+0)",
#       "currency": "GBP (£)"
#     },
#     "nationality": "British",
#     "gender": "non-binary",
#     "age_range": "late 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-27",
#       "category": "diet",
#       "text": "User is vegetarian."
#     },
#     {
#       "date": "2026-05-31",
#       "category": "allergy",
#       "text": "User is allergic to peanuts."
#     },
#     {
#       "date": "2026-03-10",
#       "category": "work",
#       "text": "User works as a graphic designer."
#     },
#     {
#       "date": "2025-10-03",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is sushi."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-08-15",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Hi Fraris, nice to meet you too. I | S2 That’s great! — | S3 …actually, are there any places wi | S4 That sounds perfect, actually. Som

     0.00s  agent 발화 시작: Hi Taylor, I’m Fraris.
     1.72s  user  발화 시작: Hi Fraris, nice to meet you too. I’m trying to plan a weeken
     1.79s  agent 발화 끝
     6.86s  user  발화 끝
     6.96s  agent 발화 시작: A getaway sounds wonderful! Do you have anywhere specific in
    13.45s  agent 발화 끝
    15.85s  user  발화 시작: I’m open to suggestions, somewhere relaxing. I’m vegetarian,
    20.56s  <ret> 발화 (turn4 첫 프레임)
    20.71s  agent 발화 시작: <ret> Taylor. Knowing you’re vegetarian helps me narrow down
    20.72s  ⚡SPAN 주입 [d'=1.44s / d_lead=6.35s]: [2026-06-27] User is vegetarian.
    20.86s  user  발화 끝
    25.32s  user  발화 시작: Yeah, totally.
    26.61s  user  발화 끝
    27.06s  agent 발화 끝
    27.48s  user  발화 시작: That’s great! —
    28.62s  user  발화 시작: …actually, are there any places with really good sushi? I lo
    28.62s  user  발화 끝
    33.11s  <ret> 발화 (turn8 첫 프레임)
    33.26s  agent 발화 시작: <ret> Ah, excellent! I remember your fondness for sushi, Tay
    33.27s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.31s]: [2025-10-03] User's favorite cuisine is sushi.
    33.30s  user  발화 끝
    40.18s  user  발화 시작: Right.
    40.58s  user  발화 끝
    42.49s  user  발화 시작: That sounds perfect, actually. Somewhere by the sea.
    42.58s  agent 발화 끝
    45.53s  user  발화 끝
