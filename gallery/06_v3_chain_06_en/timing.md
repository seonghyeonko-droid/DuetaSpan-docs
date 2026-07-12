# v3_chain_06_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_chain_06",
#     "name": "Remy",
#     "location": {
#       "city": "Sydney",
#       "country": "Australia",
#       "timezone": "Australia/Sydney (AEDT, UTC+11)",
#       "currency": "AUD ($)"
#     },
#     "nationality": "Australian",
#     "gender": "non-binary",
#     "age_range": "early 20s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-03",
#       "category": "allergy",
#       "text": "User is allergic to cat dander."
#     },
#     {
#       "date": "2026-02-24",
#       "category": "pet",
#       "text": "User has a Corgi named Mochi."
#     },
#     {
#       "date": "2025-10-20",
#       "category": "trip",
#       "text": "User is planning a trip to Lisbon in May."
#     },
#     {
#       "date": "2025-07-01",
#       "category": "diet",
#       "text": "User is vegan."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-11-27",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 I'm looking for museums in London. | S2 Which one is closest to Buckingham | S3 And what about the National Galler | S4 …is either of them free to enter?

     0.00s  user  발화 시작: I'm looking for museums in London.
     1.93s  <ret> 발화 (turn1 첫 프레임)
     2.01s  agent 발화 시작: <ret> London has some wonderful museums; the British Museum 
     2.01s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.03s]: (tool result) The British Museum in London holds a collection of over 
     2.01s  user  발화 끝
     9.04s  agent 발화 시작: That should give you a great start with your exploration!
     9.04s  agent 발화 끝
    12.38s  user  발화 시작: Which one is closest to Buckingham Palace?
    12.38s  agent 발화 끝
    14.56s  <ret> 발화 (turn4 첫 프레임)
    14.72s  agent 발화 시작: <ret> The British Museum is about three point three kilomete
    14.72s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.69s]: (tool result) Distance: 3.3 km, Duration: 13 mins (driving), 45 mins (
    14.72s  user  발화 끝
    20.41s  user  발화 시작: Okay.
    20.41s  agent 발화 끝
    20.75s  user  발화 시작: And what about the National Gallery?
    20.75s  user  발화 끝
    22.67s  <ret> 발화 (turn7 첫 프레임)
    22.75s  agent 발화 시작: <ret> The National Gallery is closer — two point five kilome
    22.75s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.69s]: (tool result) Distance: 2.5 km, Duration: 10 mins (driving), 30 mins (
    22.75s  user  발화 끝
    28.44s  user  발화 시작: …is either of them free to enter?
    28.44s  agent 발화 끝
    30.39s  <ret> 발화 (turn9 첫 프레임)
    30.79s  agent 발화 시작: <ret> Thankfully, general admission to both the British Muse
    30.79s  ⚡SPAN 주입 [d'=1.04s / d_lead=4.68s]: General admission to the British Museum is free, while the National Ga
    30.79s  user  발화 끝
    35.47s  agent 발화 시작: It’s lovely when culture is accessible to everyone, isn’t it
    35.47s  agent 발화 끝
    38.82s  agent 발화 끝
