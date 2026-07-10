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


     0.00s  agent 발화 시작: Hi Manon, I’m Thunalo. It’s lovely to connect with you; I’m 
     4.39s  user  발화 시작: Yeah.
     5.02s  user  발화 끝
     5.84s  agent 발화 끝
     5.84s  user  발화 시작: Um, I’m feeling stuck. I want to plan something fun, but eve
    11.76s  agent 발화 시작: It sounds like you’re experiencing a bit of creative fatigue
    11.81s  user  발화 끝
    16.69s  user  발화 시작: Mm-hmm.
    17.42s  user  발화 끝
    18.30s  <ret> 발화 (turn5 첫 프레임)
    18.70s  agent 발화 시작: <ret> I recall you were planning a trip to Kyoto in March.
    18.81s  agent 발화 끝
    19.26s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.81s]: [2026-03-15] User is planning a trip to Kyoto in March.
    21.49s  agent 발화 시작: Perhaps brainstorming activities for that trip could rekindl
    21.52s  agent 발화 끝
    26.96s  user  발화 시작: Oh, yes! Kyoto… I was thinking about temples, but I want som
    26.99s  agent 발화 끝
    33.88s  <ret> 발화 (turn8 첫 프레임)
    34.04s  agent 발화 시작: <ret> That’s a wonderful idea! I see you also enjoy rock cli
    34.18s  user  발화 끝
    35.56s  ⚡SPAN 주입 [d'=1.68s / d_lead=3.70s]: [2026-02-20] User is into rock climbing.
    37.56s  agent 발화 시작: Kyoto might not be the first place that comes to mind for cl
    37.74s  agent 발화 끝
    44.04s  agent 발화 끝
