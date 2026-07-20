# v3_mem_34_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_34",
#     "name": "Rowan",
#     "location": {
#       "city": "London",
#       "country": "United Kingdom",
#       "timezone": "Europe/London (GMT, UTC+0)",
#       "currency": "GBP (£)"
#     },
#     "nationality": "British",
#     "gender": "non-binary",
#     "age_range": "late 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-11",
#       "category": "sibling",
#       "text": "User has a younger sibling named Daniel."
#     },
#     {
#       "date": "2026-06-02",
#       "category": "hobby",
#       "text": "User is into sea kayaking."
#     },
#     {
#       "date": "2026-05-28",
#       "category": "work",
#       "text": "User works as a carpenter."
#     },
#     {
#       "date": "2026-05-05",
#       "category": "home",
#       "text": "User's home address is 797 Cypress Court."
#     },
#     {
#       "date": "2026-02-11",
#       "category": "show",
#       "text": "User is currently watching a historical K-drama."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-05",
#       "title": "Looking for a therapist",
#       "bullets": [
#         "prefers evening video sessions",
#         "wants someone who does CBT"
#       ]
#     },
#     {
#       "date": "2026-05-26",
#       "title": "Refinancing a mortgage",
#       "bullets": [
#         "current rate is 4.2 percent",
#         "wants to compare 15- vs 30-year terms"
#       ]
#     },
#     {
#       "date": "2026-04-22",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool and a sauna",
#         "prefers one within 10 minutes of the office"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: Hi Rowan, I’m Kelira. It’s lovely to connect with you. I und
     2.47s  user  발화 시작: Uh-huh.
     3.01s  user  발화 끝
     8.02s  agent 발화 끝
     8.06s  user  발화 시작: Hello, Kelira. It’s good to meet you too. I’m… well, I’m fee
    11.55s  agent 발화 시작: Mm-hmm.
    12.18s  agent 발화 끝
    12.97s  user  발화 끝
    13.06s  agent 발화 시작: Feeling lost is perfectly alright, Rowan. It’s a very common
    19.27s  user  발화 시작: Yeah.
    19.76s  user  발화 끝
    24.35s  agent 발화 시작: Sometimes, having a gentle daily structure can be a lifeline
    24.38s  agent 발화 끝
    31.87s  user  발화 시작: …do you think kayaking could help with that? I really enjoy 
    32.47s  agent 발화 끝
    33.06s  agent 발화 시작: Yeah.
    33.69s  agent 발화 끝
    35.67s  user  발화 끝
    36.09s  agent 발화 시작: That’s a wonderful idea, Rowan! Sea kayaking, as I recall, i
    44.94s  agent 발화 끝
    46.02s  user  발화 시작: It is, yes. I was thinking of going out this weekend, but I’
    51.95s  <ret> 발화 (turn11 첫 프레임)
    52.14s  user  발화 끝
    52.24s  agent 발화 시작: <ret> There are several kayaking routes on the River Thames 
    52.32s  ⚡SPAN 주입 [d'=0.36s / d_lead=8.35s]: The River Thames offers several kayaking routes near London, with Rich
    60.50s  agent 발화 시작: Kingston also has access points and facilities if you'd like
    60.58s  agent 발화 끝
    65.68s  agent 발화 끝
