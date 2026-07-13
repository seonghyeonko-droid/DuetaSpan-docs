# v3_fstart_15_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_fstart_15",
#     "name": "Jack",
#     "location": {
#       "city": "Sydney",
#       "country": "Australia",
#       "timezone": "Australia/Sydney (AEDT, UTC+11)",
#       "currency": "AUD ($)"
#     },
#     "nationality": "Australian",
#     "gender": "male",
#     "age_range": "late 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-22",
#       "category": "pet",
#       "text": "User has a Poodle named Coco."
#     },
#     {
#       "date": "2026-03-03",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-02-12",
#       "category": "work",
#       "text": "User works as a graduate student."
#     },
#     {
#       "date": "2025-12-06",
#       "category": "hobby",
#       "text": "User is into vintage synth collecting."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-06-29",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 I need to book an appointment with | S2 Perfect. And could you remind me w | S3 I'm also trying to learn some Ital | S4 Okay, that’s hot. I should pack li

     0.00s  user  발화 시작: I need to book an appointment with a counselor.
     3.57s  agent 발화 시작: I can help with that. Do you have a preferred counselor in m
     3.57s  user  발화 끝
     8.74s  user  발화 시작: Mm-hmm.
     8.74s  agent 발화 끝
     9.13s  user  발화 시작: No, not really. Someone good with travel anxiety, maybe?
     9.13s  user  발화 끝
    12.47s  <ret> 발화 (turn4 첫 프레임)
    12.71s  agent 발화 시작: <ret> Goraia specializes in travel anxiety and—
    12.71s  ⚡SPAN 주입 [d'=1.12s / d_lead=2.38s]: Goraia specializes in travel anxiety and has over ten years of experie
    12.71s  user  발화 끝
    15.09s  user  발화 시작: …Is she available next week?
    15.09s  agent 발화 끝
    17.08s  agent 발화 시작: Yes, Goraia has some openings next week. What day would work
    17.08s  user  발화 끝
    22.64s  user  발화 시작: Hmm, maybe Tuesday?
    22.64s  agent 발화 끝
    23.75s  <ret> 발화 (turn8 첫 프레임)
    23.83s  agent 발화 시작: <ret> Great, your appointment with Goraia is confirmed for T
    23.83s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.15s]: (tool result) Appointment confirmed with Goraia on Tuesday, July 14, 2
    23.83s  user  발화 끝
    30.98s  user  발화 시작: Perfect. And could you remind me what I should bring to the 
    30.98s  agent 발화 끝
    36.54s  agent 발화 시작: That's a good question to prepare. It's helpful to bring a l
    36.54s  user  발화 끝
    42.89s  user  발화 시작: Yeah.
    42.89s  agent 발화 끝
    43.29s  agent 발화 시작: I find it’s also useful to think about past travel experienc
    43.29s  user  발화 끝
    49.25s  user  발화 시작: Okay, that makes sense. I’m going to Italy next month.
    49.25s  agent 발화 끝
    53.22s  agent 발화 시작: Italy is beautiful! It’s a very popular destination, so it’s
    53.22s  user  발화 끝
    59.18s  user  발화 시작: It’s my first time traveling alone, which is part of the wor
    59.18s  agent 발화 끝
    63.94s  agent 발화 시작: Traveling solo for the first time is a big step. It’s perfec
    63.94s  user  발화 끝
    70.30s  user  발화 시작: I'm also trying to learn some Italian phrases.
    70.30s  agent 발화 끝
    73.48s  agent 발화 시작: That's a wonderful idea. Knowing a little of the local langu
    73.48s  user  발화 끝
    79.83s  user  발화 시작: Yeah, yeah.
    79.83s  agent 발화 끝
    80.62s  user  발화 시작: Do you know a good app for that?
    80.62s  user  발화 끝
    83.48s  <ret> 발화 (turn21 첫 프레임)
    83.80s  agent 발화 시작: <ret> I can certainly help with that. Duolingo is a very pop
    83.80s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.75s]: Duolingo is the most popular language-learning app, with over 500 mill
    83.80s  user  발화 끝
    90.55s  user  발화 시작: Is it free?
    90.55s  agent 발화 끝
    91.74s  agent 발화 시작: Yes, Duolingo is free to use, with optional paid subscriptio
    91.74s  user  발화 끝
    96.91s  user  발화 시작: That’s good to know. What’s the weather usually like in Rome
    96.91s  agent 발화 끝
   101.91s  <ret> 발화 (turn25 첫 프레임)
   102.07s  agent 발화 시작: <ret> Typically, Rome in August has average highs of 31.2°C 
   102.07s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.53s]: The average high temperature in Rome in August is 31.2°C, with lows ar
   102.07s  user  발화 끝
   111.60s  user  발화 시작: Okay, that’s hot. I should pack light clothes then.
   111.60s  agent 발화 끝
   115.18s  agent 발화 시작: Lightweight, breathable fabrics will be your best friend.
   115.18s  user  발화 끝
   118.35s  user  발화 시작: Really?
   118.35s  agent 발화 끝
   118.75s  user  발화 시작: I think I’m ready to start making a packing list.
   118.75s  user  발화 끝
   122.72s  agent 발화 시작: That’s a proactive step. A well-thought-out packing list can
   122.72s  user  발화 끝
   128.68s  user  발화 시작: Thanks, Goraia. You've been really helpful.
   128.68s  agent 발화 끝
   131.06s  agent 발화 시작: You're very welcome. I’m glad I could assist you in preparin
   131.06s  user  발화 끝
   139.80s  agent 발화 끝
