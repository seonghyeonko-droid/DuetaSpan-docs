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

# EXAMINER(FDB-v2) 단계: S1 Uh, yes. I’m thinking of moving to | S2 Not really. Somewhere with a marke | S3 Hmm, Normandy. I’ve heard good thi | S4 Maybe. Is there good vegetarian fo

     0.00s  agent 발화 시작: Bonjour Ava, I’m Hia.
     2.58s  agent 발화 끝
     2.59s  user  발화 시작: Uh, yes. I’m thinking of moving to the countryside.
     6.20s  user  발화 끝
     6.27s  agent 발화 시작: That’s a significant change, Ava. Do you have a specific reg
    11.92s  agent 발화 끝
    14.34s  user  발화 시작: Welll… I was thinking maybe Provence.
    17.27s  agent 발화 시작: Provence is lovely. To help me understand your needs, are yo
    17.30s  user  발화 끝
    20.35s  user  발화 시작: Okay.
    20.98s  user  발화 끝
    23.14s  agent 발화 끝
    23.45s  user  발화 시작: Rent, I think. At first, anyway.
    25.88s  agent 발화 시작: A sensible approach. And do you have a particular town or vi
    25.99s  user  발화 끝
    32.61s  user  발화 시작: Not really. Somewhere with a market, I guess. And not too fa
    32.64s  agent 발화 끝
    37.59s  <ret> 발화 (turn9 첫 프레임)
    37.66s  agent 발화 시작: <ret> Considering your location in Paris, finding a balance 
    37.79s  user  발화 끝
    39.59s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.64s]: [2025-08-06] User's home address is 30 Oak Avenue.
    48.44s  user  발화 시작: Yeah.
    48.93s  user  발화 끝
    53.15s  agent 발화 끝
    53.72s  user  발화 시작: That's... a long drive. Is there anything closer?
    57.42s  user  발화 끝
    57.47s  agent 발화 시작: Normandy is a beautiful region, and considerably closer to P
    59.85s  user  발화 시작: Mm-hmm.
    60.30s  user  발화 끝
    61.91s  agent 발화 끝
    62.04s  user  발화 시작: Hmm, Normandy. I’ve heard good things. What’s the drive time
    65.58s  <ret> 발화 (turn15 첫 프레임)
    65.89s  agent 발화 시작: <ret> From your home in Paris… …the drive from 30 Oak Avenue
    66.11s  user  발화 끝
    67.50s  ⚡SPAN 주입 [d'=1.92s / d_lead=1.93s]: [2025-08-06] User's home address is 30 Oak Avenue.
    77.86s  agent 발화 끝
    77.89s  user  발화 시작: That sounds much better.
    79.57s  agent 발화 시작: It does seem a more manageable distance. Are you interested 
    79.73s  user  발화 끝
    82.48s  user  발화 시작: Mhm.
    82.97s  user  발화 끝
    86.47s  agent 발화 끝
    86.52s  user  발화 시작: Maybe. Is there good vegetarian food there? I'm vegetarian, 
    90.77s  <ret> 발화 (turn20 첫 프레임)
    90.85s  agent 발화 시작: <ret> Remembering your dietary preferences… …Rouen offers a 
    90.91s  user  발화 끝
    91.27s  ⚡SPAN 주입 [d'=0.50s / d_lead=1.50s]: [2026-04-15] User is vegetarian.
    98.61s  user  발화 시작: Right.
    99.43s  user  발화 끝
   102.49s  agent 발화 끝
   103.22s  user  발화 시작: Yes, please. That would be great.
   106.03s  agent 발화 시작: I can also look into options for rentals in the Rouen area. 
   106.08s  user  발화 끝
   111.54s  agent 발화 끝
