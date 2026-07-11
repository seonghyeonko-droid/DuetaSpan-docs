# v3_rag_27_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_27",
#     "name": "Riley",
#     "location": {
#       "city": "Berlin",
#       "country": "Germany",
#       "timezone": "Europe/Berlin (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "German",
#     "gender": "non-binary",
#     "age_range": "early 30s",
#     "language": "German"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-10",
#       "category": "work",
#       "text": "User works as a accountant."
#     },
#     {
#       "date": "2026-01-23",
#       "category": "home",
#       "text": "User's home address is 670 Elm Street."
#     },
#     {
#       "date": "2025-11-14",
#       "category": "hobby",
#       "text": "User is into rock climbing."
#     },
#     {
#       "date": "2025-09-30",
#       "category": "pet",
#       "text": "User has a Poodle named Coco."
#     },
#     {
#       "date": "2025-08-03",
#       "category": "diet",
#       "text": "User is vegan."
#     },
#     {
#       "date": "2025-06-04",
#       "category": "trip",
#       "text": "User is planning a trip to Vietnam in December."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-02-27",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 I’m feeling a little lost… | S2 Yeah, um, what’s the weather like  | S3 Oh, that sounds lovely. | S4 Right. Okay. Thanks, Raris.

     0.00s  user  발화 시작: I’m feeling a little lost…
     1.66s  user  발화 끝
     3.69s  user  발화 시작: …honestly. Just moved here.
     5.49s  user  발화 끝
     5.79s  agent 발화 시작: It's perfectly normal to feel that way when settling into a 
    13.13s  user  발화 시작: Yeah, um, what’s the weather like today?
    13.16s  agent 발화 끝
    15.16s  <ret> 발화 (turn4 첫 프레임)
    15.48s  user  발화 끝
    15.55s  agent 발화 시작: <ret> The weather is currently 24.0 degrees Celsius, with 68
    15.56s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.81s]: (tool result) Current conditions are 24.0°C, humidity 68%, wind 3.2 km
    19.64s  user  발화 시작: Mm-hmm.
    20.28s  user  발화 끝
    24.36s  agent 발화 끝
    24.69s  user  발화 시작: That sounds…pleasant. Are there any good parks nearby?
    28.09s  <ret> 발화 (turn7 첫 프레임)
    28.17s  agent 발화 시작: <ret> Olympic Park is 2.3 kilometers away, and it has a 4.6-
    28.17s  ⚡SPAN 주입 [d'=1.28s / d_lead=10.61s]: (tool result) Olympic Park is 2.3 km away, with 4.6 stars from 1,234 r
    28.30s  user  발화 끝
    38.67s  user  발화 시작: Oh, that sounds lovely.
    38.79s  agent 발화 끝
    40.00s  agent 발화 시작: It is a beautiful space, and often a good place to meet peop
    40.05s  user  발화 끝
    47.00s  agent 발화 끝
    47.22s  user  발화 시작: Do you know if Danny Shirley and James Dean Bradfield are in
    51.20s  user  발화 끝
    51.27s  <ret> 발화 (turn11 첫 프레임)
    51.35s  agent 발화 시작: <ret> Actually, no, Danny Shirley and James Dean Bradfield p
    51.35s  ⚡SPAN 주입 [d'=2.00s / d_lead=11.50s]: Danny Shirley is the lead singer of Marmalade Skies, while James Dean 
    62.68s  agent 발화 시작: Sometimes people assume connections where there aren't any.
    62.85s  agent 발화 끝
    65.20s  user  발화 시작: Yeah.
    65.55s  user  발화 끝
    66.29s  agent 발화 끝
    67.54s  user  발화 시작: Right. Okay. Thanks, Raris.
    69.89s  user  발화 끝
    69.93s  agent 발화 시작: You’re very welcome. Remember, taking small steps, like expl
    77.16s  agent 발화 끝
