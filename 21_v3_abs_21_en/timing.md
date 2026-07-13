# v3_abs_21_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_abs_21",
#     "name": "Sophie",
#     "location": {
#       "city": "Paris",
#       "country": "France",
#       "timezone": "Europe/Paris (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "French",
#     "gender": "female",
#     "age_range": "40s",
#     "language": "French"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-14",
#       "category": "work",
#       "text": "User works as a nurse."
#     },
#     {
#       "date": "2026-06-11",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2026-05-20",
#       "category": "trip",
#       "text": "User is planning a trip to New Zealand in August."
#     },
#     {
#       "date": "2026-05-16",
#       "category": "diet",
#       "text": "User is gluten-free."
#     },
#     {
#       "date": "2026-01-10",
#       "category": "pet",
#       "text": "User has a Beagle named Rusty."
#     },
#     {
#       "date": "2026-01-05",
#       "category": "hobby",
#       "text": "User is into rock climbing."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-03-13",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 What place are literary texts rare | S2 That makes sense. I’m thinking abo | S3 I guess…it’s mostly the money. It’ | S4 You’re right. Maybe I should sleep

     0.00s  user  발화 시작: What place are literary texts rarely considered lexically Sa
     3.31s  <ret> 발화 (turn1 첫 프레임)
     3.36s  agent 발화 시작: <ret> And I’ve searched, but unfortunately, there isn’t a kn
     3.36s  user  발화 끝
     3.80s  ⚡SPAN 주입 [d'=0.49s / d_lead=6.71s]: (no information found)
    10.07s  user  발화 시작: Oh. Well, um, what about just generally—what are the benefit
    10.07s  agent 발화 끝
    16.41s  agent 발화 시작: Okay.
    16.41s  user  발화 끝
    16.78s  agent 발화 시작: [happy] Sometimes, rushing into things isn't the best approa
    16.78s  agent 발화 끝
    26.48s  user  발화 시작: That makes sense. I’m thinking about accepting a job offer, 
    26.48s  agent 발화 끝
    31.33s  agent 발화 시작: It’s completely okay to feel unsure when things move quickly
    31.33s  user  발화 끝
    40.28s  user  발화 시작: Uh-huh.
    40.28s  agent 발화 끝
    40.65s  agent 발화 시작: Perhaps writing down the pros and cons could help clarify yo
    40.65s  user  발화 끝
    48.48s  user  발화 시작: Yeah.
    48.48s  agent 발화 끝
    48.85s  user  발화 시작: That’s a good idea. But what if I’m afraid I’ll miss out on 
    48.85s  user  발화 끝
    55.57s  agent 발화 시작: [curious] That's a very common worry. Sometimes, the fear of
    55.57s  user  발화 끝
    66.75s  user  발화 시작: Wow.
    66.75s  agent 발화 끝
    67.13s  user  발화 시작: I guess…it’s mostly the money. It’s a lot more than I make n
    67.13s  user  발화 끝
    71.98s  agent 발화 시작: [sigh] Money is certainly a practical consideration, and it'
    71.98s  user  발화 끝
    82.42s  user  발화 시작: No, not really. The work itself…it doesn’t sound that intere
    82.42s  agent 발화 끝
    86.15s  agent 발화 시작: Mhm.
    86.15s  user  발화 끝
    86.52s  agent 발화 시작: It sounds like your values might be pulling you in a differe
    86.52s  agent 발화 끝
   101.06s  user  발화 시작: You’re right. Maybe I should sleep on it.
   101.06s  agent 발화 끝
   104.05s  agent 발화 시작: [happy] That’s a wonderful idea. Sometimes, a little distanc
   104.05s  user  발화 끝
   113.00s  agent 발화 끝
