# v3_to_ot_12_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_to_ot_12",
#     "name": "Morgan",
#     "location": {
#       "city": "Paris",
#       "country": "France",
#       "timezone": "Europe/Paris (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "French",
#     "gender": "non-binary",
#     "age_range": "early 20s",
#     "language": "French"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-16",
#       "category": "pet",
#       "text": "User has a tabby cat named Luna."
#     },
#     {
#       "date": "2026-04-01",
#       "category": "work",
#       "text": "User works as a software engineer."
#     },
#     {
#       "date": "2026-03-18",
#       "category": "hobby",
#       "text": "User is into alpine wildflower photography."
#     },
#     {
#       "date": "2026-03-06",
#       "category": "diet",
#       "text": "User is gluten-free."
#     },
#     {
#       "date": "2025-11-14",
#       "category": "home",
#       "text": "User's home address is 184 Pine Court."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-12-21",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2025-10-26",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2025-08-06",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 I was just wondering, who served a | S2 Oh, okay. That’s good to know. | S3 I suppose so. Did anyone else come | S4 That’s a pretty significant differ

     0.00s  user  발화 시작: I was just wondering, who served as Canada’s prime minister 
     4.34s  <ret> 발화 (turn1 첫 프레임)
     4.58s  agent 발화 시작: <ret> It’s a thoughtful question, reflecting on leadership a
     4.58s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.84s]: William Lyon Mackenzie King served as Canada’s prime minister for a to
     4.58s  user  발화 끝
    13.42s  user  발화 시작: …was he prime minister during the Second World War?
    13.42s  agent 발화 끝
    16.37s  agent 발화 시작: That's a very natural follow-up, considering the scale of th
    16.37s  user  발화 끝
    26.51s  user  발화 시작: Wow.
    26.51s  agent 발화 끝
    26.84s  user  발화 시작: Oh, okay. That’s good to know.
    26.84s  user  발화 끝
    28.80s  agent 발화 시작: It’s often during times of great challenge that leaders trul
    28.80s  user  발화 끝
    36.00s  user  발화 시작: I suppose so. Did anyone else come close to his record?
    36.00s  agent 발화 끝
    39.20s  <ret> 발화 (turn8 첫 프레임)
    39.60s  agent 발화 시작: <ret> Others certainly left their mark, though none quite ma
    39.60s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.49s]: Sir John A. Macdonald served as Canada’s first prime minister and held
    39.60s  user  발화 끝
    49.10s  user  발화 시작: That’s a pretty significant difference, almost three years.
    49.10s  agent 발화 끝
    51.71s  agent 발화 시작: It is a substantial span, isn’t it? Sometimes, those longer 
    51.71s  user  발화 끝
    58.91s  agent 발화 끝
