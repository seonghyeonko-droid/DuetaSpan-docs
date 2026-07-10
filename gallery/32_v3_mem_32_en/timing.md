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


     0.00s  agent 발화 시작: Hi Manon, I’m Thunalo. It’s lovely to meet you. I’m a counse
     5.32s  user  발화 시작: Yeah.
     5.95s  user  발화 끝
     7.01s  user  발화 시작: Well, uh, I was just remembering a trip I was planning a whi
     7.05s  agent 발화 끝
    10.61s  <ret> 발화 (turn3 첫 프레임)
    10.69s  agent 발화 시작: <ret> You were planning a trip to Kyoto in March, is that ri
    10.71s  user  발화 끝
    12.61s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.67s]: [2026-03-15] User is planning a trip to Kyoto in March.
    15.36s  user  발화 시작: Mm-hmm.
    15.99s  user  발화 끝
    17.36s  user  발화 시작: Yes, Kyoto. I was thinking about it because I need to start 
    17.36s  agent 발화 끝
    23.62s  user  발화 끝
    23.64s  agent 발화 시작: That sounds wonderful. Do you have any specific thoughts abo
    31.11s  agent 발화 끝
    31.68s  user  발화 시작: I’m into rock climbing, and I was hoping to find some good s
    35.68s  <ret> 발화 (turn8 첫 프레임)
    35.84s  agent 발화 시작: <ret> Ah, rock climbing! That's fantastic. Knowing you enjoy
    35.97s  user  발화 끝
    37.68s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.52s]: [2026-02-20] User is into rock climbing.
    46.36s  agent 발화 끝
