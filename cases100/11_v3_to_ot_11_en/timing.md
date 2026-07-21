# v3_to_ot_11_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_to_ot_11",
#     "name": "Sky",
#     "location": {
#       "city": "London",
#       "country": "United Kingdom",
#       "timezone": "Europe/London (GMT, UTC+0)",
#       "currency": "GBP (£)"
#     },
#     "nationality": "British",
#     "gender": "non-binary",
#     "age_range": "60s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-19",
#       "category": "temp",
#       "text": "User keeps the home thermostat around 26°C."
#     },
#     {
#       "date": "2026-04-05",
#       "category": "child",
#       "text": "User has a child named Rin, age 10."
#     },
#     {
#       "date": "2026-03-29",
#       "category": "wake",
#       "text": "User usually wakes up around 6am."
#     },
#     {
#       "date": "2026-03-20",
#       "category": "floor",
#       "text": "User lives on the 8th floor."
#     },
#     {
#       "date": "2026-02-28",
#       "category": "phone",
#       "text": "User uses an Xperia 1."
#     },
#     {
#       "date": "2026-01-25",
#       "category": "commute",
#       "text": "User works from home."
#     },
#     {
#       "date": "2026-01-21",
#       "category": "skill",
#       "text": "User is just getting back into marathon training."
#     },
#     {
#       "date": "2025-12-27",
#       "category": "hobby",
#       "text": "User is into pottery."
#     },
#     {
#       "date": "2025-12-20",
#       "category": "savings",
#       "text": "User is saving for a new car."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-15",
#       "title": "Booking a moving company",
#       "bullets": [
#         "moving a 2-bedroom apartment across town on the 30th",
#         "needs help disassembling furniture"
#       ]
#     },
#     {
#       "date": "2026-04-03",
#       "title": "Choosing a laptop",
#       "bullets": [
#         "budget around 1.8M won",
#         "needs it for video editing and light gaming"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Hi Salo, I'm studying biology and  | S2 The number of orders in class mamm | S3 Oh, hold on a sec, honey, can you  | S4 Sorry about that. So, 29 orders… t

     0.00s  user  발화 시작: Hi Salo, I'm studying biology and I'm stuck on a question.
     1.82s  agent 발화 시작: Yeah.
     2.41s  agent 발화 끝
     3.51s  user  발화 끝
     3.63s  agent 발화 시작: Hello! It's perfectly normal to get stuck sometimes. What's 
     9.14s  agent 발화 끝
     9.29s  user  발화 시작: The number of orders in class mammalia is…? I just can't rem
    12.72s  agent 발화 시작: Mm-hmm.
    13.45s  agent 발화 끝
    13.80s  user  발화 끝
    13.94s  <ret> 발화 (turn5 첫 프레임)
    14.13s  agent 발화 시작: <ret> Oh, that's a good one! For a bit of biological detail,
    14.83s  ⚡SPAN 주입 [d'=0.90s / d_lead=6.25s]: There are 29 orders within the class Mammalia, encompassing a wide var
    17.73s  user  발화 시작: Right.
    18.32s  user  발화 끝
    20.38s  agent 발화 끝
    20.55s  user  발화 시작: Oh, hold on a sec, honey, can you grab the mail?
    23.03s  user  발화 시작: Sorry about that. So, 29 orders… that’s helpful.
    23.04s  user  발화 끝
    25.59s  agent 발화 시작: Yeah, totally.
    26.43s  user  발화 끝
    26.50s  agent 발화 시작: [happy] You’re very welcome! It’s great you’re pursuing biol
    26.92s  agent 발화 끝
    31.50s  agent 발화 끝
