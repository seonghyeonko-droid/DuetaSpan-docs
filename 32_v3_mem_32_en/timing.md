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


     0.00s  agent 발화 시작: Hi Manon, I’m Thunalo. It’s lovely to connect with you – I’m
     4.79s  user  발화 시작: Yeah.
     5.28s  user  발화 끝
     6.23s  user  발화 시작: Oh, that sounds… good. I was wondering, do you remember anyt
     6.40s  agent 발화 끝
    12.25s  user  발화 끝
    12.35s  <ret> 발화 (turn3 첫 프레임)
    12.42s  agent 발화 시작: <ret> Yes, I do recall discussing your travel plans. You men
    14.19s  ⚡SPAN 주입 [d'=1.84s / d_lead=2.92s]: [2026-07-25] User is planning a trip to Kyoto in March.
    20.48s  user  발화 시작: Mm-hmm.
    21.07s  user  발화 끝
    23.73s  agent 발화 끝
    24.32s  user  발화 시작: Actually, yes. I'm trying to find a good time to book flight
    32.93s  <ret> 발화 (turn6 첫 프레임)
    33.01s  agent 발화 시작: <ret> Let me quickly check that for you.
    33.13s  user  발화 끝
    33.43s  ⚡SPAN 주입 [d'=0.50s / d_lead=1.94s]: (tool result) Kyoto is nine hours ahead of Berlin. Daylight Saving Tim
    34.72s  agent 발화 시작: Kyoto is nine hours ahead of Berlin, and both cities observe
    34.94s  agent 발화 끝
    42.60s  agent 발화 끝
    42.63s  user  발화 시작: That’s… a lot. I— I mean, it’s good to know, though. I think
    48.23s  user  발화 끝
