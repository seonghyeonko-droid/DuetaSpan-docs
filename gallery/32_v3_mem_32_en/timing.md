# v3_mem_32_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_32",
#     "name": "Manon",
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
#       "date": "2026-03-15",
#       "category": "trip",
#       "text": "User is planning a trip to Kyoto in March."
#     },
#     {
#       "date": "2026-02-20",
#       "category": "hobby",
#       "text": "User is into rock climbing."
#     },
#     {
#       "date": "2025-08-28",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is sushi."
#     },
#     {
#       "date": "2025-06-11",
#       "category": "diet",
#       "text": "User is gluten-free."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-22",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2025-07-07",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: Hi Manon, I’m Thunalo. It’s lovely to connect with you. I un
     5.64s  user  발화 시작: Yeah.
     6.27s  user  발화 끝
     7.29s  user  발화 시작: Yeah, a little bit. I'm trying to plan my trip to Kyoto, and
     7.42s  agent 발화 끝
    13.94s  <ret> 발화 (turn3 첫 프레임)
    14.01s  agent 발화 시작: <ret> You’re heading to Kyoto in March, that’s wonderful! It
    14.15s  user  발화 끝
    15.46s  ⚡SPAN 주입 [d'=1.52s / d_lead=8.02s]: [2026-03-15] User is planning a trip to Kyoto in March.
    19.66s  user  발화 시작: Mm-hmm.
    20.15s  user  발화 끝
    21.85s  agent 발화 시작: Do you have a particular aspect of the trip that feels most 
    22.03s  agent 발화 끝
    30.24s  agent 발화 끝
    31.59s  user  발화 시작: I think… finding things to *do*. I love rock climbing, and I
    38.54s  <ret> 발화 (turn7 첫 프레임)
    38.70s  agent 발화 시작: <ret> You enjoy rock climbing, that’s fantastic! Kyoto offer
    38.82s  user  발화 끝
    40.54s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.52s]: [2026-02-20] User is into rock climbing.
    47.23s  agent 발화 끝
    47.25s  user  발화 시작: Oh, that’s good to know! I— I mean, are there any beginner-f
    53.18s  user  발화 끝
