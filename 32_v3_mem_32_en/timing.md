# v3_mem_32_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_32",
#     "name": "Manon",
#     "location": {
#       "city": "Berlin",
#       "country": "Germany",
#       "timezone": "Europe/Berlin (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "German",
#     "gender": "female",
#     "age_range": "late 30s",
#     "language": "German"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-07-25",
#       "category": "trip",
#       "text": "User is planning a trip to Kyoto in March."
#     },
#     {
#       "date": "2026-06-14",
#       "category": "hobby",
#       "text": "User is into rock climbing."
#     },
#     {
#       "date": "2026-03-10",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is sushi."
#     },
#     {
#       "date": "2026-02-26",
#       "category": "diet",
#       "text": "User is gluten-free."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-07-12",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2026-01-20",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: Hi Manon, I'm Thunalo. It's lovely to connect with you. I un
     5.59s  user  발화 시작: Yeah.
     6.22s  user  발화 끝
     7.21s  user  발화 시작: Yeah, that’s right. I'm trying to plan a birthday dinner, an
     7.28s  agent 발화 끝
    11.99s  <ret> 발화 (turn3 첫 프레임)
    12.04s  agent 발화 시작: <ret> A birthday dinner—excellent! I recall you mentioned pl
    12.16s  user  발화 끝
    13.19s  ⚡SPAN 주입 [d'=1.20s / d_lead=4.76s]: [2026-01-20] Past chat — Planning a birthday dinner: party of six; loo
    16.66s  agent 발화 시작: You were hoping for a party of six with outdoor seating, is 
    16.80s  agent 발화 끝
    20.51s  user  발화 시작: Mm-hmm.
    20.96s  user  발화 끝
    21.85s  user  발화 시작: Yes, exactly. And it needs to be gluten-free, since a couple
    22.22s  agent 발화 끝
    27.19s  <ret> 발화 (turn7 첫 프레임)
    27.34s  agent 발화 시작: <ret> Gluten-free, of course. I remember you mentioned dieta
    27.46s  user  발화 끝
    28.87s  ⚡SPAN 주입 [d'=1.68s / d_lead=4.35s]: [2026-02-26] User is gluten-free.
    31.54s  agent 발화 시작: It’s wonderful you’re being mindful of everyone’s needs. Are
    31.69s  agent 발화 끝
    37.98s  agent 발화 끝
    38.00s  user  발화 시작: I— I mean, sushi would be amazing, if we can find a place.
    42.17s  user  발화 끝
