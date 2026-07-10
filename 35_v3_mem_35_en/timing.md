# v3_mem_35_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_35",
#     "name": "Noa",
#     "location": {
#       "city": "Paris",
#       "country": "France",
#       "timezone": "Europe/Paris (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "French",
#     "gender": "non-binary",
#     "age_range": "late 20s",
#     "language": "French"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-01-26",
#       "category": "work",
#       "text": "User works as a marketing manager."
#     },
#     {
#       "date": "2026-01-06",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2025-10-25",
#       "category": "hobby",
#       "text": "User is into alpine wildflower photography."
#     },
#     {
#       "date": "2025-06-24",
#       "category": "allergy",
#       "text": "User is allergic to pollen."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-03-01",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Hi Arina, nice to meet you too. I' | S2 That’s great, thanks! | S3 …Do they have a set lunch menu? | S4 Excellent. That’s really helpful, 

     0.00s  agent 발화 시작: Hi Noa, I'm Arina! So lovely to meet you.
     2.96s  agent 발화 끝
     3.89s  user  발화 시작: Hi Arina, nice to meet you too. I'm looking for a good place
     9.22s  user  발화 끝
     9.23s  agent 발화 시작: Do you have any dietary preferences or cuisine types in mind
    11.66s  user  발화 시작: Yeah.
    12.25s  user  발화 끝
    12.46s  agent 발화 끝
    13.45s  user  발화 시작: Welll… I’m allergic to pollen, so outdoor seating might be t
    18.75s  <ret> 발화 (turn5 첫 프레임)
    18.91s  user  발화 끝
    18.91s  agent 발화 시작: <ret> I recall you mentioned a pollen allergy, so we’ll defi
    18.91s  ⚡SPAN 주입 [d'=1.44s / d_lead=5.27s]: [2025-06-24] User is allergic to pollen.
    24.18s  agent 발화 끝
    24.29s  user  발화 시작: That’s great, thanks!
    25.57s  <ret> 발화 (turn7 첫 프레임)
    25.73s  agent 발화 시작: <ret> Le Potager du Marais is a vegan French restaurant with
    25.73s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.42s]: (tool result) Le Potager du Marais - Vegan French, indoor seating, 4.5
    25.81s  user  발화 끝
    30.34s  user  발화 시작: …Do they have a set lunch menu?
    31.15s  agent 발화 끝
    32.83s  user  발화 끝
    32.88s  <ret> 발화 (turn9 첫 프레임)
    33.12s  agent 발화 시작: <ret> Yes, they do! They have a set lunch menu for 25 euros,
    33.12s  ⚡SPAN 주입 [d'=1.12s / d_lead=7.79s]: (tool result) Le Potager du Marais - Lunch menu available, 25 EUR, Mon
    37.67s  user  발화 시작: Oh.
    38.12s  user  발화 끝
    40.68s  agent 발화 시작: I’m glad to hear that fits your needs. It's a lovely spot, v
    40.91s  agent 발화 끝
    44.52s  agent 발화 끝
    44.91s  user  발화 시작: Sounds wonderful! Is it easy to get to by metro?
    48.72s  <ret> 발화 (turn13 첫 프레임)
    48.88s  agent 발화 시작: <ret> It is! The closest metro stop is Rambuteau on Line 11,
    48.88s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.18s]: (tool result) Metro: Rambuteau (Line 11). Walk 3 minutes. Estimated tr
    49.07s  user  발화 끝
    54.69s  user  발화 시작: Right.
    55.33s  user  발화 끝
    57.90s  user  발화 시작: Excellent. That’s really helpful, Arina.
    58.06s  agent 발화 끝
    60.72s  agent 발화 시작: You’re very welcome, Noa. I'm happy I could help you find a 
    60.77s  user  발화 끝
    68.42s  agent 발화 끝
