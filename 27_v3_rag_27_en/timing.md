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
#       "date": "2026-07-25",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Italian."
#     },
#     {
#       "date": "2026-06-05",
#       "category": "hobby",
#       "text": "User is into rock climbing."
#     },
#     {
#       "date": "2026-04-20",
#       "category": "allergy",
#       "text": "User is allergic to shellfish."
#     },
#     {
#       "date": "2026-04-19",
#       "category": "home",
#       "text": "User's home address is 411 Maple Drive."
#     },
#     {
#       "date": "2026-02-28",
#       "category": "diet",
#       "text": "User is vegetarian."
#     },
#     {
#       "date": "2026-01-23",
#       "category": "work",
#       "text": "User works as a architect."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-07-17",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 I was reading about Lux Aurunque,  | S2 Was his work ever displayed anywhe | S3 I mean, like, a museum or gallery? | S4 The Venice Biennale—wow! That's im

     0.00s  user  발화 시작: I was reading about Lux Aurunque, and I’m curious—when was h
     4.13s  <ret> 발화 (turn1 첫 프레임)
     4.37s  agent 발화 시작: <ret> That's a good question to start with. He was born in n
     4.58s  user  발화 끝
     5.65s  ⚡SPAN 주입 [d'=1.52s / d_lead=2.61s]: Lux Aurunque was born in nineteen seventy.
     7.83s  user  발화 시작: Yeah, yeah.
     9.20s  user  발화 끝
    10.71s  user  발화 시작: Nineteen seventy… that’s quite a while ago! What kind of wor
    10.71s  agent 발화 끝
    15.87s  <ret> 발화 (turn4 첫 프레임)
    15.95s  agent 발화 시작: <ret> Lux Aurunque was a truly multifaceted individual, expl
    16.17s  user  발화 끝
    17.87s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.74s]: Lux Aurunque was a composer, visual artist, and performer.
    21.50s  agent 발화 시작: He worked as a composer, visual artist, and performer.
    21.69s  agent 발화 끝
    23.34s  user  발화 시작: Uh-huh.
    23.83s  user  발화 끝
    24.79s  agent 발화 끝
    24.83s  user  발화 시작: Was his work ever displayed anywhere prominent?
    27.83s  user  발화 끝
    27.95s  agent 발화 시작: His work garnered attention—
    29.30s  user  발화 시작: I mean, like, a museum or gallery?
    29.97s  agent 발화 끝
    32.15s  <ret> 발화 (turn10 첫 프레임)
    32.22s  agent 발화 시작: <ret> Certainly.
    32.35s  user  발화 끝
    32.65s  ⚡SPAN 주입 [d'=0.50s / d_lead=0.96s]: His compositions have been showcased at the Venice Biennale.
    33.05s  agent 발화 시작: His compositions were showcased at the Venice Biennale.
    33.17s  agent 발화 끝
    34.68s  user  발화 시작: Yeah, totally.
    36.24s  agent 발화 끝
    36.24s  user  발화 끝
    37.88s  user  발화 시작: The Venice Biennale—wow! That's impressive. What sort of mus
    43.95s  user  발화 끝
