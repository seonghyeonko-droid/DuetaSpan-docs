# v3_abs_21_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_abs_21",
#     "name": "Charlotte",
#     "location": {
#       "city": "London",
#       "country": "United Kingdom",
#       "timezone": "Europe/London (GMT, UTC+0)",
#       "currency": "GBP (£)"
#     },
#     "nationality": "British",
#     "gender": "female",
#     "age_range": "early 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-22",
#       "category": "trip",
#       "text": "User is planning a trip to Iceland in August."
#     },
#     {
#       "date": "2026-04-12",
#       "category": "pet",
#       "text": "User has a tabby cat named Luna."
#     },
#     {
#       "date": "2026-04-02",
#       "category": "diet",
#       "text": "User is pescatarian."
#     },
#     {
#       "date": "2026-03-11",
#       "category": "work",
#       "text": "User works as a accountant."
#     },
#     {
#       "date": "2025-10-15",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Mexican."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-08",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2025-07-28",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
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

# EXAMINER(FDB-v2) 단계: S1 What in combination with glass fib | S2 Hmm. What *are* glass fibers used  | S3 So, like, in boats? | S4 Wow, sawdust! That sounds…flammabl

     0.00s  user  발화 시작: What in combination with glass fibers is used to make glass 
     3.81s  <ret> 발화 (turn1 첫 프레임)
     3.89s  agent 발화 시작: <ret> Well, that's a really interesting question! It seems w
     3.89s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.43s]: (no information found)
     4.12s  user  발화 끝
    14.32s  agent 발화 끝
    15.93s  user  발화 시작: Oh. Is it a trade secret or something?
    18.76s  agent 발화 시작: [curious] That’s a possibility, sometimes formulas are kept 
    18.88s  user  발화 끝
    21.14s  user  발화 시작: Okay.
    21.77s  user  발화 끝
    26.51s  user  발화 시작: Hmm. What *are* glass fibers used for, generally?
    26.68s  agent 발화 끝
    30.61s  <ret> 발화 (turn6 첫 프레임)
    30.68s  agent 발화 시작: <ret> Glass fibers have many uses, particularly for thermal 
    30.69s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.75s]: Glass fibers are used for thermal insulation, sound absorption, and fo
    30.91s  user  발화 끝
    36.67s  user  발화 시작: …are they expensive to produce?
    37.43s  agent 발화 끝
    38.74s  user  발화 끝
    38.84s  agent 발화 시작: That's a great point to consider! Glass fiber production cos
    43.19s  user  발화 시작: Yeah, yeah.
    44.00s  user  발화 끝
    44.60s  agent 발화 시작: …they are generally quite affordable, which is why they’re s
    44.67s  agent 발화 끝
    53.36s  agent 발화 끝
    53.87s  user  발화 시작: So, like, in boats?
    55.52s  user  발화 끝
    55.65s  agent 발화 시작: Exactly! You'll find glass fibers in boats, cars, and even s
    63.38s  agent 발화 끝
    63.38s  user  발화 시작: That makes sense. What about older types of insulation?
    67.34s  <ret> 발화 (turn14 첫 프레임)
    67.42s  agent 발화 시작: <ret> Before fiberglass was popular, people used things like
    67.42s  ⚡SPAN 주입 [d'=2.00s / d_lead=11.22s]: Before fiberglass became common in the 1930s, materials like straw, sa
    67.60s  user  발화 끝
    78.64s  agent 발화 끝
    80.28s  user  발화 시작: Wow, sawdust! That sounds…flammable.
    83.69s  agent 발화 시작: [laugh] It really does! It’s amazing how much things have ch
    83.85s  user  발화 끝
    94.12s  agent 발화 끝
    94.16s  user  발화 시작: I guess so. Do they still *use* mineral wool?
    97.47s  <ret> 발화 (turn18 첫 프레임)
    97.79s  agent 발화 시작: <ret> Yes, mineral wool is still used today, and it’s especi
    97.79s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.25s]: Mineral wool, made from molten rock or slag, is still used as insulati
    97.87s  user  발화 끝
   105.04s  agent 발화 끝
