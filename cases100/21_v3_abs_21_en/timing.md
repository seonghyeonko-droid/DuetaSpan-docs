# v3_abs_21_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_abs_21",
#     "name": "Robin",
#     "location": {
#       "city": "Sydney",
#       "country": "Australia",
#       "timezone": "Australia/Sydney (AEDT, UTC+11)",
#       "currency": "AUD ($)"
#     },
#     "nationality": "Australian",
#     "gender": "non-binary",
#     "age_range": "late 20s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-21",
#       "category": "anniversary",
#       "text": "User's anniversary is May 12."
#     },
#     {
#       "date": "2026-05-20",
#       "category": "streaming",
#       "text": "User subscribes to Twitch and Spotify."
#     },
#     {
#       "date": "2026-03-30",
#       "category": "car",
#       "text": "User drives a 2020 Kia Niro."
#     },
#     {
#       "date": "2026-03-23",
#       "category": "skill",
#       "text": "User is a complete beginner at film photography."
#     },
#     {
#       "date": "2026-03-17",
#       "category": "wake",
#       "text": "User usually wakes up around 6am."
#     },
#     {
#       "date": "2026-02-16",
#       "category": "learning",
#       "text": "User is taking pottery classes."
#     },
#     {
#       "date": "2026-01-15",
#       "category": "work",
#       "text": "User works as a translator."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-07",
#       "title": "Selling a used bike",
#       "bullets": [
#         "a 3-year-old road bike",
#         "asking around 400k won"
#       ]
#     },
#     {
#       "date": "2025-12-19",
#       "title": "Planning a camping trip",
#       "bullets": [
#         "a weekend at a lake site in September",
#         "asked about a 4-person tent and a cooler"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Hi Frur, I'm feeling a bit lost… | S2 What country doesn't have many met | S3 Well, she keeps getting angry when | S4 That makes sense. Maybe I’ll try t

     0.00s  user  발화 시작: Hi Frur, I'm feeling a bit lost…
     2.53s  user  발화 끝
     3.98s  user  발화 시작: …about how to talk to my sister.
     5.08s  agent 발화 시작: Yeah, totally.
     6.09s  user  발화 끝
     6.27s  agent 발화 끝
     6.37s  agent 발화 시작: Hello! It's brave of you to reach out. Family can be tricky,
     8.64s  user  발화 시작: Yeah, totally.
     9.82s  user  발화 끝
    12.70s  agent 발화 끝
    13.95s  user  발화 시작: What country doesn't have many metal deposits?
    16.84s  user  발화 끝
    16.91s  <ret> 발화 (turn6 첫 프레임)
    17.10s  agent 발화 시작: <ret> Hmm, good question. Honestly, I can't find a reliable 
    18.10s  ⚡SPAN 주입 [d'=1.19s / d_lead=1.19s]: (no information found)
    19.31s  user  발화 시작: Mhm.
    19.93s  user  발화 끝
    24.58s  agent 발화 시작: That's alright, sometimes information just isn't readily ava
    24.65s  agent 발화 끝
    32.14s  agent 발화 끝
    33.57s  user  발화 시작: Well, she keeps getting angry when I try to set boundaries.
    35.22s  agent 발화 시작: Mm-hmm.
    35.76s  agent 발화 끝
    36.81s  agent 발화 시작: That sounds frustrating. It's common for people to react str
    36.82s  user  발화 끝
    40.31s  user  발화 시작: Mm-hmm.
    40.76s  user  발화 끝
    45.71s  agent 발화 끝
    46.12s  user  발화 시작: …But how do I *explain* why I need them?
    49.16s  agent 발화 시작: That’s a great point! Explaining your needs clearly is key. 
    49.22s  user  발화 끝
    59.59s  agent 발화 끝
    59.59s  agent 발화 시작: It helps focus on your experience, not blame—which can make 
    62.25s  user  발화 시작: Yeah.
    62.65s  user  발화 끝
    65.70s  agent 발화 끝
    66.38s  user  발화 시작: That makes sense. Maybe I’ll try that next time.
    69.69s  agent 발화 시작: Wonderful! Small changes can make a big difference. Remember
    69.78s  user  발화 끝
    79.28s  agent 발화 끝
