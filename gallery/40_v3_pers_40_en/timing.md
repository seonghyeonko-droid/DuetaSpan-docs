# v3_pers_40_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_pers_40",
#     "name": "Quinn",
#     "location": {
#       "city": "San Francisco",
#       "country": "United States",
#       "timezone": "America/Los_Angeles (PST, UTC-8)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "non-binary",
#     "age_range": "late 20s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-12",
#       "category": "work",
#       "text": "User works as a architect."
#     },
#     {
#       "date": "2026-05-12",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Thai."
#     },
#     {
#       "date": "2026-03-30",
#       "category": "home",
#       "text": "User's home address is 20 Oak Avenue."
#     },
#     {
#       "date": "2025-10-27",
#       "category": "allergy",
#       "text": "User is allergic to shellfish."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-02-18",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2025-08-16",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 I’m just feeling really stuck righ | S2 …Is it okay if I just vent for a m | S3 It’s just… the pressure, you know? | S4 Honestly? Not many. I try to handl

     0.00s  agent 발화 시작: Hello Quinn, welcome. I'm Dreara.
     0.03s  user  발화 시작: I’m just feeling really stuck right now, honestly.
     0.03s  agent 발화 끝
     0.08s  agent 발화 시작: It’s completely understandable to feel stuck, Quinn. Many pe
     0.08s  user  발화 끝
     0.21s  user  발화 시작: Welll…, it’s my job, I think. I don’t even really *like* wha
     0.21s  agent 발화 끝
     0.29s  agent 발화 시작: That’s a big realization, and it takes courage to admit that
     0.29s  user  발화 끝
     0.44s  user  발화 시작: …Is it okay if I just vent for a minute? I’m just so overwhe
     0.44s  agent 발화 끝
     0.52s  agent 발화 시작: Quinn. Absolutely. Take all the time you need to share what’
     0.52s  user  발화 끝
     0.62s  user  발화 시작: It’s just… the pressure, you know? My boss expects so much, 
     0.62s  agent 발화 끝
     0.73s  agent 발화 시작: It sounds like you’re carrying a heavy load of responsibilit
     0.73s  user  발화 끝
     0.91s  user  발화 시작: Honestly? Not many. I try to handle everything myself, but I
     0.91s  agent 발화 끝
     1.00s  user  발화 끝
