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


     0.00s  agent 발화 시작: Hi Manon, I’m Thunalo. It’s lovely to connect with you. I un
     6.00s  user  발화 시작: Yeah.
     6.63s  user  발화 끝
     7.75s  user  발화 시작: Yeah, a bit. I’m trying to plan a trip, but I’m completely o
     7.88s  agent 발화 끝
    12.80s  <ret> 발화 (turn3 첫 프레임)
    12.88s  agent 발화 시작: <ret> That’s very common, especially when facing a blank sla
    12.94s  user  발화 끝
    14.00s  ⚡SPAN 주입 [d'=1.20s / d_lead=5.47s]: [2026-07-25] User is planning a trip to Kyoto in March.
    18.15s  agent 발화 시작: You’re planning a trip to Kyoto in March, is that right? Per
    18.35s  agent 발화 끝
    22.35s  user  발화 시작: Mm-hmm.
    22.85s  user  발화 끝
    24.13s  agent 발화 끝
    25.75s  user  발화 시작: Yes, Kyoto! I remember mentioning it. But I’m not sure where
    31.78s  user  발화 끝
    31.84s  agent 발화 시작: Wonderful. It's good to have a destination in mind. I'm sens
    39.12s  agent 발화 끝
    39.17s  user  발화 시작: I— I mean, yes, a little. I also need to book a dentist appo
    43.55s  <ret> 발화 (turn9 첫 프레임)
    43.78s  agent 발화 시작: <ret> Okay, let’s tackle both. Regarding the dentist, do you
    43.94s  user  발화 끝
    44.99s  ⚡SPAN 주입 [d'=1.44s / d_lead=7.26s]: [2026-07-12] Past chat — Booked a dentist appointment: asked for an ea
    50.87s  agent 발화 시작: You previously expressed a preference for Dr. Han and an ear
    51.03s  agent 발화 끝
    58.20s  agent 발화 끝
