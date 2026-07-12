# v3_rag_28_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_28",
#     "name": "Maya",
#     "location": {
#       "city": "Sydney",
#       "country": "Australia",
#       "timezone": "Australia/Sydney (AEDT, UTC+11)",
#       "currency": "AUD ($)"
#     },
#     "nationality": "Australian",
#     "gender": "female",
#     "age_range": "50s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-23",
#       "category": "hobby",
#       "text": "User is into rock climbing."
#     },
#     {
#       "date": "2025-10-16",
#       "category": "home",
#       "text": "User's home address is 198 Cedar Lane."
#     },
#     {
#       "date": "2025-09-29",
#       "category": "diet",
#       "text": "User is vegan."
#     },
#     {
#       "date": "2025-09-14",
#       "category": "trip",
#       "text": "User is planning a trip to Vietnam in May."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-17",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2025-09-06",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 I’m trying to figure out my next s | S2 I was considering Seattle, um, but | S3 Hmm, that sounds…okay. What about  | S4 That's good to know. I think I nee

     0.00s  user  발화 시작: I’m trying to figure out my next steps, it’s all a bit overw
     4.79s  agent 발화 시작: It’s completely natural to feel that way when facing big cha
     4.79s  user  발화 끝
    11.05s  user  발화 시작: Mm-hmm.
    11.05s  agent 발화 끝
    11.42s  user  발화 시작: Well, I’m thinking about moving to a new city, but I don’t e
    11.42s  user  발화 끝
    17.69s  agent 발화 시작: That’s a wonderful starting point! It’s exciting to consider
    17.69s  user  발화 끝
    23.95s  user  발화 시작: Uh-huh.
    23.95s  agent 발화 끝
    24.32s  user  발화 시작: I was considering Seattle, um, but I don’t know what the wea
    24.32s  user  발화 끝
    29.60s  <ret> 발화 (turn7 첫 프레임)
    29.84s  agent 발화 시작: <ret> Seattle’s weather is currently 18.3 degrees Celsius, w
    29.84s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.63s]: (tool result) The current weather in Seattle, Washington is 18.3°C, wi
    29.84s  user  발화 끝
    36.48s  agent 발화 시작: It’s a lovely time of year to visit, if you enjoy mild tempe
    36.48s  agent 발화 끝
    41.27s  user  발화 시작: Hmm, that sounds…okay. What about the cost of living there?
    41.27s  agent 발화 끝
    44.55s  <ret> 발화 (turn10 첫 프레임)
    44.95s  agent 발화 시작: <ret> Seattle’s cost of living is 23 percent higher than the
    44.95s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.26s]: (tool result) The cost of living in Seattle, Washington is 23% higher 
    44.95s  user  발화 끝
    51.21s  user  발화 시작: Exactly.
    51.21s  agent 발화 끝
    51.58s  user  발화 시작: Twenty-three percent? Wow, that’s a lot. Is it really that d
    51.58s  user  발화 끝
    56.50s  <ret> 발화 (turn13 첫 프레임)
    56.74s  agent 발화 시작: <ret> Denver’s cost of living is 7 percent higher than the n
    56.74s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.90s]: (tool result) Denver, Colorado’s cost of living is 7% higher than the 
    56.74s  user  발화 끝
    62.64s  agent 발화 시작: So, it’s significantly more affordable than Seattle, it seem
    62.64s  agent 발화 끝
    65.95s  user  발화 시작: That's good to know. I think I need to do a bit more researc
    65.95s  agent 발화 끝
    71.11s  agent 발화 시작: Taking your time and gathering information is a very wise ap
    71.11s  user  발화 끝
    77.37s  agent 발화 끝
