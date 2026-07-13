# v3_mcp_01_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mcp_01",
#     "name": "Riley",
#     "location": {
#       "city": "Paris",
#       "country": "France",
#       "timezone": "Europe/Paris (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "French",
#     "gender": "non-binary",
#     "age_range": "50s",
#     "language": "French"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-05",
#       "category": "trip",
#       "text": "User is planning a trip to Lisbon in March."
#     },
#     {
#       "date": "2026-02-08",
#       "category": "work",
#       "text": "User works as a software engineer."
#     },
#     {
#       "date": "2026-01-01",
#       "category": "allergy",
#       "text": "User is allergic to shellfish."
#     },
#     {
#       "date": "2025-12-10",
#       "category": "pet",
#       "text": "User has a tabby cat named Luna."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-03",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 I need to find a psychologist in D | S2 July 17th is a bit far off. Are th | S3 That’s a little higher than I was  | S4 That sounds much more reasonable. 

     0.00s  user  발화 시작: I need to find a psychologist in Denver Colorado and I'm wil
     6.25s  agent 발화 시작: Yeah, totally.
     6.25s  user  발화 끝
     6.93s  <ret> 발화 (turn2 첫 프레임)
     7.09s  agent 발화 시작: <ret> I found Dr. Eleanor Vance in Denver, specializing in a
     7.09s  agent 발화 끝
     7.28s  ⚡SPAN 주입 [d'=0.35s / d_lead=6.67s]: (tool result) {"provider name": "Dr. Eleanor Vance", "address": "1600 
    13.75s  user  발화 시작: Yeah, totally.
    13.75s  agent 발화 끝
    14.59s  user  발화 시작: That sounds promising. Does she take new patients?
    14.59s  user  발화 끝
    17.92s  agent 발화 시작: Yeah.
    17.92s  user  발화 끝
    18.02s  <ret> 발화 (turn6 첫 프레임)
    18.34s  agent 발화 시작: <ret> Dr. Vance has an opening on July 17th at 2:00 PM Mount
    18.34s  agent 발화 끝
    18.66s  ⚡SPAN 주입 [d'=0.64s / d_lead=5.84s]: (tool result) {"availability": "Next available appointment is July 17t
    24.18s  user  발화 시작: July 17th is a bit far off. Are there any others nearby with
    24.18s  agent 발화 끝
    30.29s  <ret> 발화 (turn9 첫 프레임)
    30.43s  agent 발화 시작: Wow.
    30.43s  user  발화 끝
    30.75s  ⚡SPAN 주입 [d'=0.46s / d_lead=7.92s]: (tool result) {"provider name": "Dr. Marcus Bell", "address": "2200 We
    30.84s  agent 발화 시작: <ret> I also found Dr. Marcus Bell in Denver—he specializes 
    30.84s  agent 발화 끝
    38.76s  user  발화 시작: Dr. Bell sounds interesting. What are his rates like?
    38.76s  agent 발화 끝
    42.04s  <ret> 발화 (turn11 첫 프레임)
    42.45s  ⚡SPAN 주입 [d'=0.50s / d_lead=4.17s]: (tool result) Dr. Marcus Bell, PhD, offers individual therapy sessions
    42.51s  agent 발화 시작: <ret> Dr. Bell charges $150 per 50-minute session, according
    42.51s  user  발화 끝
    46.68s  user  발화 시작: That’s a little higher than I was hoping.
    46.68s  agent 발화 끝
    50.02s  agent 발화 시작: It’s understandable to want to find a good fit within your b
    50.02s  user  발화 끝
    55.85s  user  발화 시작: …could you search for someone around $100 a session instead?
    55.85s  agent 발화 끝
    59.84s  <ret> 발화 (turn15 첫 프레임)
    59.96s  ⚡SPAN 주입 [d'=0.71s / d_lead=5.42s]: (tool result) Several therapists in Denver offer sessions around $100.
    60.02s  agent 발화 시작: <ret> Denver Counseling Services has rates starting at $85 p
    60.02s  user  발화 끝
    65.44s  user  발화 시작: That sounds much more reasonable. Can you give me their phon
    65.44s  agent 발화 끝
    70.16s  <ret> 발화 (turn17 첫 프레임)
    70.44s  agent 발화 시작: <ret> Their phone number is 303-555-6789. [happy] I’m glad w
    70.44s  user  발화 끝
    70.93s  ⚡SPAN 주입 [d'=0.76s / d_lead=5.84s]: (tool result) The phone number for Denver Counseling Services is (303)
    76.28s  user  발화 시작: Yeah.
    76.28s  agent 발화 끝
    76.69s  user  발화 시작: Great. Thanks for your help.
    76.69s  user  발화 끝
    78.78s  agent 발화 시작: You’re very welcome.
    78.78s  user  발화 끝
    80.03s  agent 발화 끝
