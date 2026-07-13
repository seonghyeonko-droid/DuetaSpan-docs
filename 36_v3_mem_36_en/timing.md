# v3_mem_36_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_36",
#     "name": "Alice",
#     "location": {
#       "city": "Sydney",
#       "country": "Australia",
#       "timezone": "Australia/Sydney (AEDT, UTC+11)",
#       "currency": "AUD ($)"
#     },
#     "nationality": "Australian",
#     "gender": "female",
#     "age_range": "late 20s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-01-15",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2025-12-03",
#       "category": "allergy",
#       "text": "User is allergic to shellfish."
#     },
#     {
#       "date": "2025-11-05",
#       "category": "pet",
#       "text": "User has a Beagle named Rusty."
#     },
#     {
#       "date": "2025-07-29",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Italian."
#     },
#     {
#       "date": "2025-06-16",
#       "category": "diet",
#       "text": "User is vegetarian."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-03-14",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Um, well, I was just thinking abou | S2 Flights, I guess. Do you think you | S3 That Qantas flight sounds good. | S4 Oh yes, right. Thanks for remindin

     0.00s  agent 발화 시작: Hi Alice, I'm Tellara.
     1.58s  user  발화 시작: Um, well, I was just thinking about that trip to Kyoto I too
     1.58s  agent 발화 끝
     7.28s  <ret> 발화 (turn2 첫 프레임)
     7.52s  agent 발화 시작: <ret> I see you mentioned a preference for window seats duri
     7.52s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.33s]: [2026-01-15] User prefers a window seat when traveling.
     7.52s  user  발화 끝
    13.85s  user  발화 시작: Yeah.
    13.85s  agent 발화 끝
    14.24s  user  발화 시작: Right, and I'm planning another trip, actually. This time to
    14.24s  user  발화 끝
    18.60s  agent 발화 시작: Melbourne sounds wonderful! Are you thinking about flights o
    18.60s  user  발화 끝
    22.95s  user  발화 시작: Yeah.
    22.95s  agent 발화 끝
    23.34s  user  발화 시작: Flights, I guess. Do you think you could search for one-way 
    23.34s  user  발화 끝
    28.48s  <ret> 발화 (turn8 첫 프레임)
    28.88s  agent 발화 시작: <ret> I'm afraid I couldn't find any one-way flights at this
    28.88s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.93s]: (tool result) No flights found matching your request.
    28.88s  user  발화 끝
    34.82s  user  발화 시작: Oh, that's a shame. I was hoping to go next Tuesday.
    34.82s  agent 발화 끝
    39.09s  <ret> 발화 (turn10 첫 프레임)
    39.17s  agent 발화 시작: <ret> There are flights from Sydney to Melbourne next Tuesda
    39.17s  ⚡SPAN 주입 [d'=2.00s / d_lead=16.22s]: (tool result) Flights from Sydney to Melbourne on 2026-07-14: QF401, 0
    39.17s  user  발화 끝
    55.39s  user  발화 시작: Right.
    55.39s  agent 발화 끝
    55.79s  user  발화 시작: That Qantas flight sounds good.
    55.79s  user  발화 끝
    57.77s  agent 발화 시작: That's a great choice! I can search for hotels in Melbourne 
    57.77s  user  발화 끝
    63.30s  user  발화 시작: Actually, before that, could you remind me if I have any die
    63.30s  agent 발화 끝
    68.76s  <ret> 발화 (turn15 첫 프레임)
    68.84s  agent 발화 시작: <ret> You noted an allergy to shellfish on December third, t
    68.84s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.70s]: [2025-12-03] User is allergic to shellfish.
    68.84s  user  발화 끝
    77.55s  user  발화 시작: Yeah.
    77.55s  agent 발화 끝
    77.94s  user  발화 시작: Oh yes, right. Thanks for reminding me. Let's look at hotels
    77.94s  user  발화 끝
    82.69s  user  발화 끝
