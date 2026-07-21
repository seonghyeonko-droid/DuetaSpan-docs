# v3_rag_24_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_24",
#     "name": "Lily",
#     "location": {
#       "city": "Paris",
#       "country": "France",
#       "timezone": "Europe/Paris (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "French",
#     "gender": "female",
#     "age_range": "60s",
#     "language": "French"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-16",
#       "category": "allergy",
#       "text": "User is allergic to eggs."
#     },
#     {
#       "date": "2026-05-20",
#       "category": "phone",
#       "text": "User uses an Xperia 1."
#     },
#     {
#       "date": "2026-04-18",
#       "category": "pet",
#       "text": "User has a Border Collie named Ziggy."
#     },
#     {
#       "date": "2026-03-23",
#       "category": "temp",
#       "text": "User keeps the home thermostat around 23°C."
#     },
#     {
#       "date": "2026-03-22",
#       "category": "hobby",
#       "text": "User is into sea kayaking."
#     },
#     {
#       "date": "2026-03-18",
#       "category": "dish",
#       "text": "User's go-to comfort dish is seafood pasta."
#     },
#     {
#       "date": "2025-12-05",
#       "category": "gym",
#       "text": "User has a gym membership near the station."
#     },
#     {
#       "date": "2025-12-03",
#       "category": "savings",
#       "text": "User is saving for a trip to Europe next year."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-12",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool and a sauna",
#         "prefers one within 10 minutes of the office"
#       ]
#     },
#     {
#       "date": "2026-04-14",
#       "title": "Learning to invest",
#       "bullets": [
#         "asked about index funds vs individual stocks",
#         "wants to start with 500k won a month"
#       ]
#     },
#     {
#       "date": "2026-02-13",
#       "title": "Training for a 10K",
#       "bullets": [
#         "current pace is around 6 minutes per km",
#         "race is in November"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Hi Klaer, I'm feeling really stres | S2 Oh, right, Martha! I knew that… | S3 …I just… blanked. Do you ever find | S4 That makes sense. I think I need t

     0.00s  user  발화 시작: Hi Klaer, I'm feeling really stressed about work today.
     2.92s  agent 발화 시작: Hi there! It's completely understandable to feel stressed, w
     3.10s  user  발화 끝
    10.93s  user  발화 시작: Thanks. Actually, to take my mind off things, I was wonderin
    10.94s  agent 발화 끝
    17.74s  <ret> 발화 (turn3 첫 프레임)
    17.82s  agent 발화 시작: <ret> Roo Stewart’s mother is Martha MacKenzie, who is playe
    17.84s  ⚡SPAN 주입 [d'=0.44s / d_lead=6.95s]: Martha MacKenzie (played by Alison Mulvaney) is the mother of Roo Stew
    17.92s  user  발화 끝
    24.70s  user  발화 시작: Oh, right, Martha! I knew that…
    24.77s  agent 발화 끝
    27.11s  user  발화 끝
    28.58s  user  발화 시작: …I just… blanked. Do you ever find your mind goes blank when
    32.52s  agent 발화 시작: It’s so common for stress to affect our memory. It's like yo
    32.65s  user  발화 끝
    39.20s  user  발화 시작: That makes sense. I think I need to go for a walk to clear m
    39.29s  agent 발화 끝
    42.74s  agent 발화 시작: That’s a wonderful idea. Fresh air and movement can do wonde
    42.81s  user  발화 끝
    48.99s  agent 발화 끝
