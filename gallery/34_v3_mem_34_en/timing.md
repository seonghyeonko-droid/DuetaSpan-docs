# v3_mem_34_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_34",
#     "name": "Ava",
#     "location": {
#       "city": "Paris",
#       "country": "France",
#       "timezone": "Europe/Paris (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "French",
#     "gender": "female",
#     "age_range": "late 30s",
#     "language": "French"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-19",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Mexican."
#     },
#     {
#       "date": "2026-04-15",
#       "category": "diet",
#       "text": "User is vegetarian."
#     },
#     {
#       "date": "2026-03-22",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-08-25",
#       "category": "allergy",
#       "text": "User is allergic to peanuts."
#     },
#     {
#       "date": "2025-08-06",
#       "category": "home",
#       "text": "User's home address is 30 Oak Avenue."
#     },
#     {
#       "date": "2025-06-16",
#       "category": "trip",
#       "text": "User is planning a trip to Kyoto in December."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-02-09",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Um, I need to get to the Louvre Mu | S2 Welll… it’s for my parents. They’r | S3 That's a relief. Are there any goo | S4 Perfect!

     0.00s  agent 발화 시작: Hi Ava, I’m Hia. It's lovely to connect with you. What’s on 
     4.12s  agent 발화 끝
     4.14s  user  발화 시작: Um, I need to get to the Louvre Museum. What’s the quickest 
     7.47s  <ret> 발화 (turn2 첫 프레임)
     7.53s  agent 발화 시작: <ret> From your home at 30 Oak Avenue, the fastest route to 
     7.60s  user  발화 끝
     8.91s  ⚡SPAN 주입 [d'=1.44s / d_lead=5.47s]: 30 Oak Avenue.
    13.00s  agent 발화 끝
    15.48s  user  발화 시작: Oh, right. And how long will that take, roughly?
    17.80s  <ret> 발화 (turn4 첫 프레임)
    18.20s  agent 발화 시작: <ret> The metro journey to the Louvre Museum will take appro
    18.40s  user  발화 끝
    19.80s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.62s]: (tool result) 28 minutes, 1 transfer.
    21.38s  user  발화 시작: Uh-huh.
    21.88s  user  발화 끝
    24.81s  agent 발화 시작: It sounds like you’re planning a day out in Paris. Is this a
    24.82s  agent 발화 끝
    27.00s  user  발화 시작: Okay.
    28.19s  user  발화 끝
    29.07s  agent 발화 끝
    29.88s  user  발화 시작: Welll… it’s for my parents. They’re visiting from Lyon.
    33.38s  agent 발화 시작: That’s wonderful. It’s lovely to share Paris with family. Do
    33.40s  user  발화 끝
    40.90s  user  발화 시작: No, they’re pretty active, actually. But my mother has a pea
    41.08s  agent 발화 끝
    44.77s  <ret> 발화 (turn11 첫 프레임)
    44.85s  agent 발화 시작: <ret> Good to know. We’ve noted your mother’s peanut allergy
    44.98s  user  발화 끝
    46.77s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.81s]: [2025-08-25] User's home address is 30 Oak Avenue.
    48.44s  user  발화 시작: Mm-hmm.
    49.21s  user  발화 끝
    51.66s  agent 발화 끝
    51.66s  user  발화 시작: That's a relief. Are there any good Mexican restaurants near
    55.88s  <ret> 발화 (turn14 첫 프레임)
    55.95s  agent 발화 시작: <ret> Considering your preference for Mexican cuisine, “El R
    56.02s  user  발화 끝
    57.88s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.99s]: [2026-04-19] User's favorite cuisine is Mexican.
    58.88s  user  발화 시작: Mhm.
    59.38s  user  발화 끝
    62.94s  agent 발화 끝
    63.01s  user  발화 시작: Hmm, that sounds nice. Does it have outdoor seating?
    65.97s  <ret> 발화 (turn17 첫 프레임)
    66.37s  agent 발화 시작: <ret> Yes, El Rancho does offer limited outdoor seating.
    66.56s  user  발화 끝
    67.17s  ⚡SPAN 주입 [d'=1.20s / d_lead=3.75s]: (tool result) Yes, limited outdoor seating available.
    68.69s  user  발화 시작: Right.
    69.33s  user  발화 끝
    69.94s  user  발화 시작: Perfect!
    70.11s  agent 발화 끝
    70.69s  agent 발화 시작: I’m glad to hear that. Planning ahead makes these visits so 
    70.76s  user  발화 끝
    73.78s  user  발화 시작: Yeah.
    74.28s  user  발화 끝
    79.86s  user  발화 시작: No, that's okay, I think. Just getting there is the main thi
    79.86s  agent 발화 끝
    83.56s  user  발화 끝
    83.70s  agent 발화 시작: I’m happy to help with that. Remember to allow extra time fo
    90.89s  agent 발화 끝
