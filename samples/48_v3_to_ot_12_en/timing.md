# v3_to_ot_12_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_to_ot_12",
#     "name": "Louis",
#     "location": {
#       "city": "Toronto",
#       "country": "Canada",
#       "timezone": "America/Toronto (EST, UTC-5)",
#       "currency": "CAD ($)"
#     },
#     "nationality": "Canadian",
#     "gender": "male",
#     "age_range": "early 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-08",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-05-30",
#       "category": "hobby",
#       "text": "User is into rock climbing."
#     },
#     {
#       "date": "2026-04-03",
#       "category": "home",
#       "text": "User's home address is 83 Cedar Lane."
#     },
#     {
#       "date": "2026-03-14",
#       "category": "allergy",
#       "text": "User is allergic to shellfish."
#     },
#     {
#       "date": "2026-03-12",
#       "category": "work",
#       "text": "User works as a marketing manager."
#     },
#     {
#       "date": "2026-01-15",
#       "category": "pet",
#       "text": "User has a Corgi named Mochi."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-12-06",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Hey Telix… | S2 …do you know where Costa Rica plac | S3 Oh, wow, that’s… not great. | S4 …Wait, so who *did* win that one, 

     0.00s  user  발화 시작: Hey Telix…
     0.75s  user  발화 시작: …do you know where Costa Rica placed in the last World Cup?
     0.75s  user  발화 끝
     5.05s  <ret> 발화 (turn2 첫 프레임)
     5.16s  ⚡SPAN 주입 [d'=1.23s / d_lead=4.10s]: Costa Rica finished in 31st place out of 32 teams at the 2022 FIFA Wor
     5.22s  agent 발화 시작: <ret> Costa Rica participated in the 2022 FIFA World Cup in 
     5.22s  user  발화 끝
     9.33s  agent 발화 시작: They finished in thirty-first place out of thirty-two teams,
     9.33s  agent 발화 끝
    16.41s  user  발화 시작: Oh, wow, that’s… not great.
    16.41s  agent 발화 끝
    18.28s  agent 발화 시작: [curious] It wasn’t their strongest showing, but they’ve had
    18.28s  user  발화 끝
    26.86s  user  발화 시작: Right.
    26.86s  agent 발화 끝
    27.23s  agent 발화 시작: And they’ve qualified for six World Cups total, which is qui
    27.23s  user  발화 끝
    34.69s  user  발화 시작: …Wait, so who *did* win that one, in 2022?
    34.69s  agent 발화 끝
    38.01s  <ret> 발화 (turn9 첫 프레임)
    38.05s  agent 발화 시작: <ret> Ah, good question! Argentina won the 2022 FIFA World C
    38.05s  user  발화 끝
    38.48s  ⚡SPAN 주입 [d'=0.47s / d_lead=7.83s]: Argentina defeated France 4–2 on penalties after a 3–3 draw following 
    45.88s  agent 발화 시작: They defeated France four to two on penalties after a three-
    45.88s  agent 발화 끝
    52.60s  agent 발화 끝
