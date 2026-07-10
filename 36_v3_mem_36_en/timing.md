# v3_mem_36_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_36",
#     "name": "David",
#     "location": {
#       "city": "San Francisco",
#       "country": "United States",
#       "timezone": "America/Los_Angeles (PST, UTC-8)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "male",
#     "age_range": "40s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-03-20",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Ethiopian."
#     },
#     {
#       "date": "2026-02-21",
#       "category": "hobby",
#       "text": "User is into birdwatching."
#     },
#     {
#       "date": "2026-01-22",
#       "category": "trip",
#       "text": "User is planning a trip to Kyoto in December."
#     },
#     {
#       "date": "2025-05-27",
#       "category": "allergy",
#       "text": "User is allergic to pollen."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-01-16",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2025-08-15",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: Hi David, I'm Teax. It's lovely to connect with you today.
     4.11s  agent 발화 끝
     5.25s  user  발화 시작: um, hey Teax. I was just wondering… do you remember anything
    10.43s  <ret> 발화 (turn2 첫 프레임)
    10.67s  agent 발화 시작: <ret> Yes, I do. You are planning a trip to Kyoto this Decem
    10.67s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.69s]: [2026-01-22] User is planning a trip to Kyoto in December.
    10.90s  user  발화 끝
    13.57s  user  발화 시작: Yeah.
    14.06s  user  발화 끝
    18.27s  agent 발화 시작: Perhaps we could begin by exploring what you’ve already envi
    18.36s  agent 발화 끝
    25.23s  user  발화 시작: I think I mentioned I wanted outdoor seating for a birthday 
    25.36s  agent 발화 끝
    29.57s  <ret> 발화 (turn6 첫 프레임)
    29.81s  agent 발화 시작: <ret> That's right. You were planning a birthday dinner for 
    29.81s  ⚡SPAN 주입 [d'=1.04s / d_lead=6.02s]: [2026-01-16] Past chat — Planning a birthday dinner: party of six; loo
    29.94s  user  발화 끝
    32.99s  user  발화 시작: Yeah.
    33.48s  user  발화 끝
    35.83s  agent 발화 끝
    35.93s  user  발화 시작: And… I need to remember to check the pollen count. I’m reall
    40.26s  <ret> 발화 (turn9 첫 프레임)
    40.58s  agent 발화 시작: <ret> I have a note that you have a pollen allergy, so remem
    40.58s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.74s]: [2025-05-27] User is allergic to pollen.
    40.61s  user  발화 끝
    48.32s  agent 발화 끝
