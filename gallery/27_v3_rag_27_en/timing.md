# v3_rag_27_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_27",
#     "name": "Kim",
#     "location": {
#       "city": "Paris",
#       "country": "France",
#       "timezone": "Europe/Paris (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "French",
#     "gender": "non-binary",
#     "age_range": "early 20s",
#     "language": "French"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-17",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Italian."
#     },
#     {
#       "date": "2026-03-12",
#       "category": "hobby",
#       "text": "User is into rock climbing."
#     },
#     {
#       "date": "2025-12-07",
#       "category": "allergy",
#       "text": "User is allergic to shellfish."
#     },
#     {
#       "date": "2025-12-06",
#       "category": "home",
#       "text": "User's home address is 411 Maple Drive."
#     },
#     {
#       "date": "2025-09-15",
#       "category": "diet",
#       "text": "User is vegetarian."
#     },
#     {
#       "date": "2025-06-11",
#       "category": "work",
#       "text": "User works as a architect."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-06-26",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Doon, could you tell me when Lux A | S2 That’s true. So, how old would he  | S3 …could you tell me where he's from | S4 Dark ambient… I’ll have to check t

     0.00s  user  발화 시작: Doon, could you tell me when Lux Aurunque was born?
     3.21s  <ret> 발화 (turn1 첫 프레임)
     3.44s  agent 발화 시작: <ret> Lux Aurunque was born in nineteen seventy. It’s wonder
     3.52s  user  발화 끝
     5.21s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.16s]: Lux Aurunque was born in nineteen seventy.
     6.80s  user  발화 시작: Yeah, yeah.
     7.90s  user  발화 끝
     9.60s  agent 발화 끝
     9.64s  user  발화 시작: Nineteen seventy? That seems… early for the kind of music he
    13.91s  <ret> 발화 (turn4 첫 프레임)
    14.17s  user  발화 끝
    14.22s  agent 발화 시작: <ret> His first album came out in two thousand and three. It
    14.41s  ⚡SPAN 주입 [d'=0.50s / d_lead=6.67s]: Lux Aurunque’s first album was released in two thousand and three.
    16.39s  user  발화 시작: Mm-hmm.
    16.89s  user  발화 끝
    20.89s  agent 발화 끝
    21.24s  user  발화 시작: That’s true. So, how old would he be now, roughly?
    24.39s  agent 발화 시작: Let me quickly calculate that for you—
    24.48s  user  발화 끝
    26.93s  agent 발화 끝
    28.21s  user  발화 시작: …actually, before you do that…
    29.68s  user  발화 끝
    31.38s  user  발화 시작: …could you tell me where he's from?
    32.70s  <ret> 발화 (turn10 첫 프레임)
    32.74s  agent 발화 시작: <ret> He’s originally from Rome, Italy. It's interesting to 
    32.98s  user  발화 끝
    34.70s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.93s]: Lux Aurunque is from Rome, Italy.
    38.46s  user  발화 시작: Italy, that explains a lot! What genre does he work in?
    38.66s  agent 발화 끝
    43.15s  <ret> 발화 (turn12 첫 프레임)
    43.21s  agent 발화 시작: <ret> He's known for dark ambient and experimental electroni
    43.33s  user  발화 끝
    45.15s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.51s]: Lux Aurunque is known for dark ambient and experimental electronic mus
    50.72s  agent 발화 끝
    51.63s  user  발화 시작: Dark ambient… I’ll have to check that out. Thank you, Doon.
    55.42s  user  발화 끝
    55.61s  agent 발화 시작: You’re very welcome. I'm glad I could assist you in explorin
    61.22s  agent 발화 끝
