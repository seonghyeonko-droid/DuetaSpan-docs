# v3_mem_32_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_32",
#     "name": "Hana",
#     "location": {
#       "city": "Toronto",
#       "country": "Canada",
#       "timezone": "America/Toronto (EST, UTC-5)",
#       "currency": "CAD ($)"
#     },
#     "nationality": "Canadian",
#     "gender": "female",
#     "age_range": "early 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-27",
#       "category": "trip",
#       "text": "User is planning a trip to Kyoto in May."
#     },
#     {
#       "date": "2026-06-21",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Korean BBQ."
#     },
#     {
#       "date": "2026-05-21",
#       "category": "diet",
#       "text": "User is gluten-free."
#     },
#     {
#       "date": "2026-01-06",
#       "category": "pet",
#       "text": "User has a Beagle named Rusty."
#     },
#     {
#       "date": "2025-09-06",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-08-09",
#       "category": "allergy",
#       "text": "User is allergic to shellfish."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-22",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 I was just thinking about my trip  | S2 Oh, right. Well, I'm craving Korea | S3 Can you find me a Korean BBQ resta | S4 Perfect, thank you. I’m also glute

     0.00s  agent 발화 시작: Hi Hana, I'm Gias. It's lovely to connect with you.
     3.75s  user  발화 시작: I was just thinking about my trip to Kyoto.
     3.75s  agent 발화 끝
     7.04s  <ret> 발화 (turn2 첫 프레임)
     7.12s  agent 발화 시작: <ret> You mentioned planning a trip to Kyoto in May, which s
     7.12s  ⚡SPAN 주입 [d'=1.52s / d_lead=7.87s]: [2026-06-27] User is planning a trip to Kyoto in May.
     7.12s  user  발화 끝
    14.99s  user  발화 시작: Do you remember anything else about that trip?
    14.99s  agent 발화 끝
    17.82s  <ret> 발화 (turn4 첫 프레임)
    17.98s  agent 발화 시작: <ret> The note simply states you're planning a trip to Kyoto
    17.98s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.74s]: [2026-06-27] User is planning a trip to Kyoto in May.
    17.98s  user  발화 끝
    24.73s  user  발화 시작: Mhm.
    24.73s  agent 발화 끝
    25.10s  user  발화 시작: Oh, right. Well, I'm craving Korean food tonight.
    25.10s  user  발화 끝
    27.86s  <ret> 발화 (turn7 첫 프레임)
    28.10s  agent 발화 시작: <ret> That's a lovely thought! Your favorite cuisine is Kore
    28.10s  ⚡SPAN 주입 [d'=1.44s / d_lead=7.49s]: [2026-06-21] User's favorite cuisine is Korean BBQ.
    28.10s  user  발화 끝
    35.60s  user  발화 시작: Can you find me a Korean BBQ restaurant nearby?
    35.60s  agent 발화 끝
    38.89s  <ret> 발화 (turn9 첫 프레임)
    38.97s  agent 발화 시작: <ret> I found three Korean BBQ restaurants nearby: Bulgogi H
    38.97s  ⚡SPAN 주입 [d'=1.12s / d_lead=8.24s]: (tool result) Korean BBQ restaurants found: Bulgogi House (4.5 stars, 
    38.97s  user  발화 끝
    47.21s  user  발화 시작: Bulgogi House sounds good. Can you make a reservation there 
    47.21s  agent 발화 끝
    51.39s  <ret> 발화 (turn11 첫 프레임)
    51.71s  agent 발화 시작: <ret> Excellent! I've reserved a table for two at Bulgogi Ho
    51.71s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.74s]: (tool result) Reservation confirmed at Bulgogi House for 2 people on J
    51.71s  user  발화 끝
    61.45s  user  발화 시작: Perfect, thank you. I’m also gluten-free, should I tell them
    61.45s  agent 발화 끝
    65.04s  <ret> 발화 (turn13 첫 프레임)
    65.20s  agent 발화 시작: <ret> Yes, it's a good idea to mention you're gluten-free wh
    65.20s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.12s]: [2026-05-21] User is gluten-free.
    65.20s  user  발화 끝
    72.31s  agent 발화 끝
