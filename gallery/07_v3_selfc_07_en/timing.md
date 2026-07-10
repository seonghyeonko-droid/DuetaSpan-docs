# v3_selfc_07_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_selfc_07",
#     "name": "Riley",
#     "location": {
#       "city": "San Francisco",
#       "country": "United States",
#       "timezone": "America/Los_Angeles (PST, UTC-8)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "non-binary",
#     "age_range": "early 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-14",
#       "category": "home",
#       "text": "User's home address is 838 Pine Court."
#     },
#     {
#       "date": "2025-09-03",
#       "category": "work",
#       "text": "User works as a chef."
#     },
#     {
#       "date": "2025-09-01",
#       "category": "hobby",
#       "text": "User is into home fermentation."
#     },
#     {
#       "date": "2025-08-29",
#       "category": "allergy",
#       "text": "User is allergic to shellfish."
#     },
#     {
#       "date": "2025-08-11",
#       "category": "diet",
#       "text": "User is gluten-free."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-08-30",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2025-05-28",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 I need to find a good Italian rest | S2 Actually, I was thinking about som | S3 …actually, make that eleven am, sh | S4 That’s interesting. Can you find m

     0.00s  user  발화 시작: I need to find a good Italian restaurant nearby.
     2.24s  <ret> 발화 (turn1 첫 프레임)
     2.48s  agent 발화 시작: <ret> There are a couple of Italian restaurants close by. Be
     2.48s  ⚡SPAN 주입 [d'=1.52s / d_lead=6.72s]: (tool result) {"restaurants": [{"name": "Bella Notte", "address": "123
     2.58s  user  발화 끝
     9.20s  agent 발화 끝
     9.50s  user  발화 시작: That sounds lovely. Can you make a reservation for two at se
    13.53s  <ret> 발화 (turn3 첫 프레임)
    13.69s  agent 발화 시작: <ret> I’ve reserved a table for two at Bella Notte at seven 
    13.69s  ⚡SPAN 주입 [d'=1.92s / d_lead=6.63s]: (tool result) {"confirmation id": "BN7892", "restaurant name": "Bella 
    13.76s  user  발화 끝
    18.40s  user  발화 시작: Yeah.
    19.02s  user  발화 끝
    20.32s  agent 발화 끝
    20.89s  user  발화 시작: Perfect. And uh, what's the weather like there tonight?
    23.90s  <ret> 발화 (turn6 첫 프레임)
    24.14s  agent 발화 시작: <ret> It looks like it will be a pleasant evening — the temp
    24.14s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.79s]: (tool result) {"temperature": 22.5, "humidity": 68, "wind speed": 7.2}
    24.26s  user  발화 끝
    29.02s  user  발화 시작: Yeah.
    29.46s  user  발화 끝
    31.85s  agent 발화 시작: It’s wonderful when the weather cooperates with a nice dinne
    31.93s  agent 발화 끝
    38.64s  user  발화 시작: Actually, I was thinking about something else. I need to set
    38.75s  agent 발화 끝
    43.71s  agent 발화 시작: That’s a thoughtful thing to do. What time would you like me
    43.79s  user  발화 끝
    47.37s  user  발화 시작: Yeah.
    47.86s  user  발화 끝
    48.61s  user  발화 시작: I was going to say ten am—
    48.61s  agent 발화 끝
    50.21s  user  발화 시작: …actually, make that eleven am, she’s usually free then.
    50.27s  user  발화 끝
    53.73s  <ret> 발화 (turn14 첫 프레임)
    53.86s  user  발화 끝
    54.11s  agent 발화 시작: <ret> Consider it done. I’ve set an alarm for eleven am tomo
    54.13s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.53s]: (tool result) {"alarm id": "ALM123", "time": "11:00"}
    62.45s  user  발화 시작: Thank you. Now, could you search for some information about 
    62.65s  agent 발화 끝
    67.22s  <ret> 발화 (turn16 첫 프레임)
    67.38s  agent 발화 시작: <ret> Eugene O’Neill was a prominent playwright in the ninet
    67.38s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.39s]: (tool result) Eugene O'Neill was a leading American playwright of the 
    67.59s  user  발화 끝
    73.73s  user  발화 시작: That’s interesting. Can you find me a good article about him
    73.76s  agent 발화 끝
    76.48s  <ret> 발화 (turn18 첫 프레임)
    76.72s  agent 발화 시작: <ret> Biography dot com has a detailed biography of Eugene O
    76.72s  ⚡SPAN 주입 [d'=1.36s / d_lead=7.74s]: (tool result) Eugene O'Neill (1888-1953) was an American playwright an
    76.91s  user  발화 끝
    84.28s  user  발화 시작: I think that's all for now. Thanks, Laen.
    84.46s  agent 발화 끝
    86.71s  agent 발화 시작: You're very welcome. Sometimes simply naming what feels bloc
    86.72s  user  발화 끝
    92.69s  agent 발화 끝
