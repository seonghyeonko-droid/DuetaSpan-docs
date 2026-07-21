# v3_mcp_02_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mcp_02",
#     "name": "Emil",
#     "location": {
#       "city": "Sydney",
#       "country": "Australia",
#       "timezone": "Australia/Sydney (AEDT, UTC+11)",
#       "currency": "AUD ($)"
#     },
#     "nationality": "Australian",
#     "gender": "male",
#     "age_range": "early 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-20",
#       "category": "diet",
#       "text": "User is vegan."
#     },
#     {
#       "date": "2026-05-12",
#       "category": "allergy",
#       "text": "User is allergic to peanuts."
#     },
#     {
#       "date": "2026-04-18",
#       "category": "dish",
#       "text": "User's go-to comfort dish is grilled salmon."
#     },
#     {
#       "date": "2026-02-20",
#       "category": "partner",
#       "text": "User's partner is named Daniel."
#     },
#     {
#       "date": "2026-02-15",
#       "category": "airline",
#       "text": "User usually flies with Korean Air."
#     },
#     {
#       "date": "2026-01-13",
#       "category": "temp",
#       "text": "User keeps the home thermostat around 20°C."
#     },
#     {
#       "date": "2025-12-10",
#       "category": "music",
#       "text": "User likes listening to city pop."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-10",
#       "title": "Choosing a preschool",
#       "bullets": [
#         "wants one within walking distance",
#         "asked about hours and monthly fees"
#       ]
#     },
#     {
#       "date": "2026-04-13",
#       "title": "Planning a wedding",
#       "bullets": [
#         "guest list around 80 people",
#         "comparing two venues for next May"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 I want to send my location to Davi | S2 True. I was looking over common in | S3 …Wait, do you have any advice on S | S4 Oh wow, that's really helpful. Wha

     0.00s  user  발화 시작: I want to send my location to David Brown.
     1.05s  agent 발화 시작: Yeah.
     1.38s  <ret> 발화 (turn2 첫 프레임)
     1.54s  agent 발화 끝
     2.44s  agent 발화 시작: <ret> Great! Your location has been sent to David Brown – it
     2.54s  user  발화 끝
     2.71s  ⚡SPAN 주입 [d'=1.34s / d_lead=6.72s]: (tool result) {"status": "success", "latitude": 35.1295, "longitude": 
     9.15s  agent 발화 끝
     9.87s  user  발화 시작: Thanks! I’m actually interviewing with a company tomorrow. A
    12.56s  agent 발화 시작: Uh-huh.
    13.19s  agent 발화 끝
    13.94s  user  발화 끝
    14.03s  agent 발화 시작: [happy] That’s exciting! Interviews can be a bit nerve-wrack
    21.53s  agent 발화 끝
    22.53s  user  발화 시작: It's a project manager position at StellarTech.
    25.47s  agent 발화 시작: StellarTech, sounds interesting. Project management is all a
    25.49s  user  발화 끝
    34.88s  agent 발화 끝
    35.60s  user  발화 시작: True. I was looking over common interview questions… they al
    40.74s  user  발화 끝
    42.73s  user  발화 시작: …about weaknesses.
    43.38s  agent 발화 시작: Mm-hmm.
    44.02s  agent 발화 끝
    44.06s  user  발화 끝
    44.06s  agent 발화 시작: Ah, the classic weakness question! It's a chance to show sel
    51.95s  user  발화 시작: …Wait, do you have any advice on STAR method answers?
    52.83s  agent 발화 끝
    55.09s  user  발화 끝
    55.33s  agent 발화 시작: The STAR method – Situation, Task, Action, Result – is perfe
    59.83s  user  발화 시작: Yeah.
    60.42s  user  발화 끝
    67.64s  agent 발화 시작: I find it helps to write out a few STAR examples beforehand,
    67.76s  agent 발화 끝
    77.81s  user  발화 시작: That's smart. I'm also trying to update my resume. It feels 
    77.99s  agent 발화 끝
    82.09s  <ret> 발화 (turn17 첫 프레임)
    82.35s  user  발화 끝
    82.38s  agent 발화 시작: <ret> I can help with that! I analyzed your resume, and it s
    83.49s  ⚡SPAN 주입 [d'=1.40s / d_lead=10.30s]: (tool result) {"overall score": 65, "keywords missing": Agile, Scrum, 
    92.58s  agent 발화 시작: It also recommends a modern template and focusing on quantif
    92.68s  agent 발화 끝
    97.48s  agent 발화 끝
    98.05s  user  발화 시작: Oh wow, that's really helpful. What about salary expectation
   102.41s  user  발화 끝
   102.81s  agent 발화 시작: [curious] Salary can be tricky. Research the average project
   114.41s  agent 발화 끝
   114.56s  user  발화 시작: Okay, that makes sense. I think I’ll look those sites up now
   117.75s  agent 발화 시작: [happy] Wonderful! Remember, you've got valuable skills and 
   117.78s  user  발화 끝
   125.54s  agent 발화 끝
