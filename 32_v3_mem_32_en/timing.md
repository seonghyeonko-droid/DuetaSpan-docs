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


     0.00s  agent 발화 시작: Hi Manon, I'm Thunalo. It's lovely to connect with you today
     2.77s  user  발화 시작: Yeah.
     3.26s  user  발화 끝
     3.78s  user  발화 시작: Yes, exactly. I'm feeling a bit stuck with a project at work
     3.80s  agent 발화 끝
     8.22s  agent 발화 시작: I see. That's perfectly alright, many people experience that
     8.28s  user  발화 끝
    15.96s  agent 발화 끝
    16.34s  user  발화 시작: Uhhh… maybe? I think we talked about feeling overwhelmed onc
    21.61s  <ret> 발화 (turn5 첫 프레임)
    22.01s  agent 발화 시작: <ret> I recall you were planning a trip to Kyoto in March. S
    22.04s  user  발화 끝
    23.13s  ⚡SPAN 주입 [d'=1.52s / d_lead=7.42s]: [2026-03-15] User is planning a trip to Kyoto in March.
    27.19s  user  발화 시작: Mm-hmm.
    27.69s  user  발화 끝
    29.29s  agent 발화 시작: It sounds like you’re juggling a lot. Would you like to expl
    29.43s  agent 발화 끝
    35.92s  agent 발화 끝
    36.24s  user  발화 시작: Actually, yes. I haven’t looked at booking anything yet, but
    39.94s  user  발화 끝
