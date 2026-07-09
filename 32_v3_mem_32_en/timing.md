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

# EXAMINER(FDB-v2) 단계: S1 Oh, that sounds… nice. I was just  | S2 Yes! Very much so. I’m trying to f | S3 That sounds lovely. I also— I mean | S4 Perfect! That’s exactly what I nee

     0.00s  agent 발화 시작: Hi Manon, I’m Thunalo. It’s lovely to connect with you. I’m 
     6.26s  user  발화 시작: Yeah.
     6.84s  user  발화 끝
     8.06s  user  발화 시작: Oh, that sounds… nice. I was just remembering something from
     8.20s  agent 발화 끝
    13.68s  <ret> 발화 (turn3 첫 프레임)
    13.71s  user  발화 끝
    13.75s  agent 발화 시작: <ret> You mentioned a trip you were planning… You’re heading
    14.64s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.36s]: [2026-07-25] User is planning a trip to Kyoto in March.
    19.19s  user  발화 시작: Mm-hmm.
    19.82s  user  발화 끝
    21.49s  agent 발화 끝
    22.05s  user  발화 시작: Yes! Very much so. I’m trying to figure out the best time to
    29.58s  agent 발화 시작: March in Kyoto is typically mild, with blossoming cherry tre
    29.60s  user  발화 끝
    37.79s  agent 발화 끝
    37.95s  user  발화 시작: That sounds lovely. I also— I mean, I’m trying to remember i
    44.23s  <ret> 발화 (turn8 첫 프레임)
    44.39s  agent 발화 시작: <ret> I recall we discussed some dietary needs… You mentione
    44.58s  user  발화 끝
    45.51s  ⚡SPAN 주입 [d'=1.28s / d_lead=2.72s]: [2026-02-26] User is gluten-free.
    54.12s  agent 발화 끝
    54.65s  user  발화 시작: Perfect! That’s exactly what I needed to remember. Thank you
    58.63s  user  발화 끝
