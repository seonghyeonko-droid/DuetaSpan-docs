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

# EXAMINER(FDB-v2) 단계: S1 I’ve been getting into classical m | S2 Oh, okay. And what about Lux Aurun | S3 He's the one who did Gruppen… | S4 So, when was Stockhausen born, the

     0.00s  user  발화 시작: I’ve been getting into classical music lately, and I’m curio
     4.12s  agent 발화 시작: That’s wonderful—exploring new music is a great way to broad
     4.25s  user  발화 끝
     7.54s  user  발화 시작: Yeah, yeah.
     8.83s  user  발화 끝
    10.41s  user  발화 시작: Do you know when Lux Aeterna was composed?
    10.42s  agent 발화 끝
    12.75s  <ret> 발화 (turn4 첫 프레임)
    13.15s  agent 발화 시작: <ret> The motet Lux Aeterna was actually composed… in 1966. 
    13.37s  user  발화 끝
    14.75s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.02s]: [source: Britannica] Lux Aeterna, a motet for mixed choir, was compose
    15.76s  user  발화 시작: Mm-hmm.
    16.26s  user  발화 끝
    21.17s  agent 발화 끝
    21.28s  user  발화 시작: Oh, okay. And what about Lux Aurunque? Is that another piece
    26.49s  <ret> 발화 (turn7 첫 프레임)
    26.57s  agent 발화 시작: <ret> Lux Aurunque is a different composition—it was created
    26.79s  user  발화 끝
    27.61s  ⚡SPAN 주입 [d'=1.12s / d_lead=6.02s]: [source: AllMusic] Lux Aurunque is a composition by Karlheinz Stockhau
    32.52s  user  발화 시작: Wait, Stockhausen?
    32.59s  agent 발화 끝
    33.99s  user  발화 끝
    33.99s  agent 발화 시작: —and finished in 1969—
    36.49s  user  발화 시작: He's the one who did Gruppen…
    36.72s  agent 발화 끝
    38.23s  user  발화 끝
    39.55s  user  발화 시작: …right? I read something about that.
    41.48s  agent 발화 시작: Yes, that’s right. Karlheinz Stockhausen is also well-known 
    41.62s  user  발화 끝
    47.73s  agent 발화 끝
    49.33s  user  발화 시작: So, when was Stockhausen born, then?
    51.18s  <ret> 발화 (turn14 첫 프레임)
    51.42s  agent 발화 시작: <ret> Karlheinz Stockhausen was born… on August 23, 1928. He
    51.59s  user  발화 끝
    53.18s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.60s]: [source: Grove Music Online] Karlheinz Stockhausen was born on August 
    59.03s  agent 발화 끝
