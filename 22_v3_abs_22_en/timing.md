# v3_abs_22_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_abs_22",
#     "name": "Maya",
#     "location": {
#       "city": "New York",
#       "country": "United States",
#       "timezone": "America/New_York (EST, UTC-5)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "female",
#     "age_range": "late 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-27",
#       "category": "work",
#       "text": "User works as a software engineer."
#     },
#     {
#       "date": "2026-05-10",
#       "category": "allergy",
#       "text": "User is allergic to cat dander."
#     },
#     {
#       "date": "2026-03-31",
#       "category": "pet",
#       "text": "User has a Golden Retriever named Max."
#     },
#     {
#       "date": "2026-02-06",
#       "category": "diet",
#       "text": "User is pescatarian."
#     },
#     {
#       "date": "2025-10-08",
#       "category": "hobby",
#       "text": "User is into vintage synth collecting."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-03",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2025-09-05",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2025-08-11",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 What is one type of configuration  | S2 …what time is it in Seoul? | S3 No, that’s alright. I’m just curio | S4 No, that sounds good.

     0.00s  user  발화 시작: What is one type of configuration in which a capacitor doesn
     6.29s  agent 발화 시작: That’s a really specific question, and I’m not finding any i
     6.29s  user  발화 끝
    12.96s  user  발화 시작: Yeah, totally.
    12.96s  agent 발화 끝
    13.75s  user  발화 시작: Oh, okay. Well…
    13.75s  user  발화 끝
    14.93s  user  발화 시작: …what time is it in Seoul?
    14.93s  user  발화 끝
    17.04s  <ret> 발화 (turn5 첫 프레임)
    17.28s  agent 발화 시작: <ret> It is Friday, July 10, 2026 at 2:35 PM in Asia/Seoul r
    17.28s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.07s]: (tool result) It is Friday, July 10, 2026 at 2:35 PM in Asia/Seoul rig
    17.28s  user  발화 끝
    24.36s  user  발화 시작: Hmm.
    24.36s  agent 발화 끝
    24.75s  agent 발화 시작: Is there anything I can help you with regarding time zones o
    24.75s  user  발화 끝
    32.21s  user  발화 시작: No, that’s alright. I’m just curious about the weather in Lo
    32.21s  agent 발화 끝
    36.21s  <ret> 발화 (turn9 첫 프레임)
    36.53s  agent 발화 시작: <ret> The weather in London is 19.0°C, humidity 62%, and the
    36.53s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.64s]: (tool result) The weather in London is 19.0°C, humidity 62%, wind 8.2 
    36.53s  user  발화 끝
    45.18s  user  발화 시작: Wow.
    45.18s  agent 발화 끝
    45.57s  agent 발화 시작: It really is! A lovely day for a walk in one of London’s par
    45.57s  user  발화 끝
    51.46s  user  발화 시작: Maybe. Can you find me some Italian restaurants nearby?
    51.46s  agent 발화 끝
    54.60s  <ret> 발화 (turn13 첫 프레임)
    55.00s  agent 발화 시작: <ret> I found Bella Italia in Covent Garden, which has 4.5 s
    55.00s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.04s]: (tool result) Bella Italia - Covent Garden, 4.5 stars, 0.8 km away.
    55.00s  user  발화 끝
    64.03s  user  발화 시작: Exactly.
    64.03s  agent 발화 끝
    64.42s  user  발화 시작: No, that sounds good.
    64.42s  user  발화 끝
    66.00s  agent 발화 시작: Great! Sometimes, a simple and well-reviewed choice is all y
    66.00s  user  발화 끝
    70.32s  user  발화 시작: Thanks, Dean.
    70.32s  agent 발화 끝
    71.10s  agent 발화 시작: You’re very welcome. It’s what I’m here for – helping you na
    71.10s  user  발화 끝
    77.39s  agent 발화 끝
