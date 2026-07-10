# v3_abs_21_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_abs_21",
#     "name": "Caleb",
#     "location": {
#       "city": "London",
#       "country": "United Kingdom",
#       "timezone": "Europe/London (GMT, UTC+0)",
#       "currency": "GBP (£)"
#     },
#     "nationality": "British",
#     "gender": "male",
#     "age_range": "50s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-15",
#       "category": "diet",
#       "text": "User is vegetarian."
#     },
#     {
#       "date": "2025-09-24",
#       "category": "pet",
#       "text": "User has a Golden Retriever named Max."
#     },
#     {
#       "date": "2025-09-23",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is sushi."
#     },
#     {
#       "date": "2025-07-26",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-12-26",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: With the passage of phenomes what particular things phonemic
     5.31s  <ret> 발화 (turn1 첫 프레임)
     5.39s  agent 발화 시작: <ret> Unfortunately, I haven’t been able to find specific in
     5.39s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.09s]: (no information found)
     5.56s  user  발화 끝
    10.25s  user  발화 시작: Right.
    10.88s  user  발화 끝
    12.48s  agent 발화 끝
    13.21s  user  발화 시작: Oh, um, okay. Well, I'm struggling with a friend right now –
    19.00s  agent 발화 시작: That sounds frustrating. It’s really disheartening when some
    19.09s  user  발화 끝
    25.30s  user  발화 시작: Uh-huh.
    25.84s  user  발화 끝
    27.20s  agent 발화 끝
    27.40s  user  발화 시작: Yeah, it is. I’ve told her how it makes me feel, but it keep
    33.72s  agent 발화 시작: It’s understandable to feel that way. Before stopping, maybe
    33.80s  user  발화 끝
    45.31s  agent 발화 끝
