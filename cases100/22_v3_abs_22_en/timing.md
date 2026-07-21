# v3_abs_22_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_abs_22",
#     "name": "Elsa",
#     "location": {
#       "city": "Paris",
#       "country": "France",
#       "timezone": "Europe/Paris (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "French",
#     "gender": "female",
#     "age_range": "mid 20s",
#     "language": "French"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-25",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2026-06-03",
#       "category": "show",
#       "text": "User is currently watching a sci-fi series."
#     },
#     {
#       "date": "2026-05-16",
#       "category": "car",
#       "text": "User drives a 2021 Tesla Model 3."
#     },
#     {
#       "date": "2026-03-24",
#       "category": "commute",
#       "text": "User walks 20 minutes to the office."
#     },
#     {
#       "date": "2026-03-23",
#       "category": "wake",
#       "text": "User usually wakes up around 6am."
#     },
#     {
#       "date": "2026-03-10",
#       "category": "coffee",
#       "text": "User's usual coffee order is an iced americano."
#     },
#     {
#       "date": "2026-02-02",
#       "category": "savings",
#       "text": "User is saving for a down payment on an apartment."
#     },
#     {
#       "date": "2026-01-14",
#       "category": "dislike",
#       "text": "User can't stand durian."
#     },
#     {
#       "date": "2025-12-27",
#       "category": "airline",
#       "text": "User usually flies with Air France."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-15",
#       "title": "Adopting a rescue dog",
#       "bullets": [
#         "looking at a 2-year-old Beagle mix",
#         "asked about crate training and vet costs"
#       ]
#     },
#     {
#       "date": "2026-02-12",
#       "title": "Planning a dinner party",
#       "bullets": [
#         "hosting eight friends on Saturday",
#         "one guest is gluten-free"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 I’ve been feeling… lost, lately. J | S2 How many states are a part of the  | S3 No, that’s what I asked. Maybe I s | S4 …Do you think journaling could hel

     0.00s  user  발화 시작: I’ve been feeling… lost, lately. Just adrift.
     3.73s  agent 발화 시작: It’s okay to feel that way, truly. Grief and big changes oft
     3.77s  user  발화 끝
     9.37s  agent 발화 끝
     9.54s  user  발화 시작: How many states are a part of the German Union?
    10.45s  agent 발화 시작: Yeah.
    11.22s  agent 발화 끝
    11.86s  user  발화 끝
    12.24s  <ret> 발화 (turn4 첫 프레임)
    12.45s  agent 발화 시작: <ret> Hmm, good question. Honestly, I can't find a reliable 
    13.46s  ⚡SPAN 주입 [d'=1.22s / d_lead=1.13s]: (no information found)
    16.06s  user  발화 시작: Uh-huh.
    16.51s  user  발화 끝
    21.49s  agent 발화 끝
    22.99s  user  발화 시작: No, that’s what I asked. Maybe I should just focus on small 
    26.65s  user  발화 끝
    26.78s  agent 발화 시작: That’s a lovely idea. Small, gentle structures can be so gro
    35.67s  <ret> 발화 (turn8 첫 프레임)
    35.68s  agent 발화 끝
    35.77s  agent 발화 시작: <ret> It’s like waves, you know? Grief comes in waves, but w
    37.21s  ⚡SPAN 주입 [d'=1.54s / d_lead=1.86s]: Grief comes in waves, but with time, the waves become smaller and less
    42.66s  user  발화 시작: Yeah.
    43.19s  user  발화 끝
    45.06s  agent 발화 끝
    45.37s  user  발화 시작: …Do you think journaling could help with that?
    46.65s  agent 발화 시작: Yeah, yeah.
    47.17s  agent 발화 시작: Oh, absolutely! Journaling is a wonderful way to process fee
    47.24s  user  발화 끝
    48.43s  agent 발화 끝
    55.21s  agent 발화 시작: It can be a safe space to explore what’s coming up, without 
    55.23s  agent 발화 끝
    59.17s  agent 발화 끝
