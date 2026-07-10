# v3_mem_36_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_36",
#     "name": "Sky",
#     "location": {
#       "city": "New York",
#       "country": "United States",
#       "timezone": "America/New_York (EST, UTC-5)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "non-binary",
#     "age_range": "early 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-03-06",
#       "category": "home",
#       "text": "User's home address is 70 Maple Drive."
#     },
#     {
#       "date": "2026-01-22",
#       "category": "allergy",
#       "text": "User is allergic to shellfish."
#     },
#     {
#       "date": "2025-12-08",
#       "category": "diet",
#       "text": "User is vegetarian."
#     },
#     {
#       "date": "2025-11-06",
#       "category": "hobby",
#       "text": "User is into alpine wildflower photography."
#     },
#     {
#       "date": "2025-10-11",
#       "category": "work",
#       "text": "User works as a graphic designer."
#     },
#     {
#       "date": "2025-07-02",
#       "category": "pet",
#       "text": "User has a Corgi named Mochi."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-01-26",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2025-06-23",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: Hi Sky, I'm Lira. It's good to connect with you today. I'm a
     5.47s  user  발화 시작: Uh-huh.
     5.92s  user  발화 끝
    10.99s  agent 발화 끝
    11.20s  user  발화 시작: um, I was just wondering… do you remember anything about my 
    15.48s  <ret> 발화 (turn3 첫 프레임)
    15.72s  agent 발화 시작: <ret> Yes, I do. You booked a dentist appointment and reques
    15.87s  user  발화 끝
    17.48s  ⚡SPAN 주입 [d'=2.00s / d_lead=11.55s]: [2026-01-26] Past chat — Booked a dentist appointment: asked for an ea
    26.91s  user  발화 시작: actually, yes! what time *is* that appointment? I totally fo
    27.27s  agent 발화 끝
    30.84s  <ret> 발화 (turn5 첫 프레임)
    31.16s  agent 발화 시작: <ret> I’m sorry, but that detail isn’t in the notes from our
    31.27s  user  발화 끝
    32.84s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.04s]: (no information found)
    40.20s  agent 발화 끝
