# v3_pers_40_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_pers_40",
#     "name": "Rowan",
#     "location": {
#       "city": "Berlin",
#       "country": "Germany",
#       "timezone": "Europe/Berlin (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "German",
#     "gender": "non-binary",
#     "age_range": "50s",
#     "language": "German"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-05",
#       "category": "home",
#       "text": "User's home address is 342 Oak Avenue."
#     },
#     {
#       "date": "2026-03-14",
#       "category": "work",
#       "text": "User works as a architect."
#     },
#     {
#       "date": "2026-02-23",
#       "category": "diet",
#       "text": "User is gluten-free."
#     },
#     {
#       "date": "2025-12-25",
#       "category": "trip",
#       "text": "User is planning a trip to Switzerland in March."
#     },
#     {
#       "date": "2025-10-10",
#       "category": "pet",
#       "text": "User has a Corgi named Mochi."
#     },
#     {
#       "date": "2025-07-07",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-24",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Uh, Biaus? That’s… an unusual name | S2 It’s just… everything feels so unc | S3 Maybe. It's also… I feel guilty. E | S4 I wish I could just… fast forward 

     0.00s  agent 발화 시작: Guten Tag, Rowan. I am Biaus, and I’m here to offer support 
     0.07s  user  발화 시작: Mhm.
     0.07s  agent 발화 끝
     0.07s  user  발화 시작: Uh, Biaus? That’s… an unusual name. What exactly *do* you do
     0.07s  user  발화 끝
     0.11s  agent 발화 시작: It’s a name I’ve grown fond of, Rowan. I offer a listening e
     0.11s  user  발화 끝
     0.18s  user  발화 시작: I think I need that. My partner, Ingrid, and I… we’re separa
     0.18s  agent 발화 끝
     0.22s  agent 발화 시작: That sounds incredibly painful, Rowan. Separation brings a c
     0.22s  user  발화 끝
     0.27s  user  발화 시작: Uh-huh.
     0.27s  agent 발화 끝
     0.28s  agent 발화 시작: It's natural to question everything when a significant relat
     0.28s  user  발화 끝
     0.33s  user  발화 시작: It’s just… everything feels so uncertain.
     0.33s  agent 발화 끝
     0.35s  agent 발화 시작: Uncertainty is a heavy burden, isn't it? It’s very common to
     0.35s  user  발화 끝
     0.43s  user  발화 시작: Uh-huh.
     0.43s  agent 발화 끝
     0.44s  user  발화 시작: I don’t even know where to start with the practical things. 
     0.44s  user  발화 끝
     0.48s  agent 발화 시작: Those practicalities can feel insurmountable when your emoti
     0.48s  user  발화 끝
     0.54s  user  발화 시작: Yeah.
     0.54s  agent 발화 끝
     0.55s  user  발화 시작: Maybe. It's also… I feel guilty. Even though Ingrid and I bo
     0.55s  user  발화 끝
     0.60s  agent 발화 시작: Guilt is a frequent companion to loss, Rowan. It’s often a s
     0.60s  user  발화 끝
     0.67s  user  발화 시작: I keep replaying things in my head, wondering if I could hav
     0.67s  agent 발화 끝
     0.71s  agent 발화 시작: It’s very human to search for answers in the past, but somet
     0.71s  user  발화 끝
     0.80s  user  발화 시작: I wish I could just… fast forward through this.
     0.80s  agent 발화 끝
     0.83s  agent 발화 시작: I understand that desire, Rowan. Grief doesn’t follow a time
     0.83s  user  발화 끝
     0.90s  user  발화 시작: It feels selfish to even think about my own wellbeing right 
     0.90s  agent 발화 끝
     0.94s  agent 발화 시작: Your wellbeing matters, Rowan. Taking care of yourself isn’t
     0.94s  user  발화 끝
     1.00s  agent 발화 끝
