# v3_chain_05_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_chain_05",
#     "name": "Zoe",
#     "location": {
#       "city": "London",
#       "country": "United Kingdom",
#       "timezone": "Europe/London (GMT, UTC+0)",
#       "currency": "GBP (£)"
#     },
#     "nationality": "British",
#     "gender": "female",
#     "age_range": "50s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-22",
#       "category": "home",
#       "text": "User's home address is 430 Maple Drive."
#     },
#     {
#       "date": "2026-03-17",
#       "category": "allergy",
#       "text": "User is allergic to shellfish."
#     },
#     {
#       "date": "2026-03-13",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2026-02-20",
#       "category": "trip",
#       "text": "User is planning a trip to Switzerland in August."
#     },
#     {
#       "date": "2026-01-24",
#       "category": "pet",
#       "text": "User has a Corgi named Mochi."
#     },
#     {
#       "date": "2025-12-22",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Thai."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-01-05",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 I'm feeling really stuck in my car | S2 That's... good to hear. I was thin | S3 Are there any coding bootcamps you | S4 …do they offer part-time options a

     0.00s  user  발화 시작: I'm feeling really stuck in my career. I've been a teacher f
     6.21s  user  발화 시작: …but I'm burned out.
     6.21s  user  발화 끝
     7.98s  agent 발화 시작: Right.
     7.98s  user  발화 끝
     8.43s  agent 발화 시작: It's completely understandable to feel that way after a deca
     8.43s  agent 발화 끝
    16.85s  user  발화 시작: Yeah.
    16.85s  agent 발화 끝
    17.30s  user  발화 시작: Like what, exactly? It feels like all I know is lesson plann
    17.30s  user  발화 끝
    23.78s  <ret> 발화 (turn6 첫 프레임)
    23.95s  agent 발화 시작: <ret> You’ve built a really strong skillset, actually—commun
    23.95s  user  발화 끝
    24.32s  ⚡SPAN 주입 [d'=0.54s / d_lead=7.54s]: Transferable skills from teaching include communication, patience, org
    31.49s  user  발화 시작: That's... good to hear. I was thinking about something compl
    31.49s  agent 발화 끝
    36.81s  agent 발화 시작: [curious] Oh? What kind of different direction are you consi
    36.81s  user  발화 끝
    41.25s  user  발화 시작: Right.
    41.25s  agent 발화 끝
    41.69s  user  발화 시작: I've always been interested in coding. Is that a realistic s
    41.69s  user  발화 끝
    48.35s  agent 발화 시작: Right.
    48.35s  user  발화 끝
    48.61s  <ret> 발화 (turn12 첫 프레임)
    48.79s  agent 발화 시작: <ret> Coding is absolutely a possibility! It will take some 
    48.79s  agent 발화 끝
    49.39s  ⚡SPAN 주입 [d'=0.79s / d_lead=7.54s]: A career change to coding from teaching is feasible, requiring focused
    56.33s  user  발화 시작: Mhm.
    56.33s  agent 발화 끝
    56.77s  user  발화 시작: Are there any coding bootcamps you’d recommend, maybe ones w
    56.77s  user  발화 끝
    62.54s  agent 발화 시작: Yeah, yeah.
    62.54s  user  발화 끝
    63.22s  <ret> 발화 (turn16 첫 프레임)
    63.43s  agent 발화 시작: <ret> I found some highly-rated options—General Assembly and
    63.43s  agent 발화 끝
    64.00s  ⚡SPAN 주입 [d'=0.79s / d_lead=8.43s]: (tool result) General Assembly and Flatiron School consistently rank a
    71.85s  user  발화 시작: That’s helpful. What’s the average salary for a junior web d
    71.85s  agent 발화 끝
    77.34s  <ret> 발화 (turn18 첫 프레임)
    77.62s  agent 발화 시작: <ret> A junior web developer in Seattle can expect to earn a
    77.62s  user  발화 끝
    78.09s  ⚡SPAN 주입 [d'=0.75s / d_lead=9.76s]: (tool result) The average salary for a junior web developer in Seattle
    87.38s  user  발화 시작: That's… actually not bad. I'm worried about the time commitm
    87.38s  agent 발화 끝
    92.26s  agent 발화 시작: It's smart to consider the time investment—
    92.26s  user  발화 끝
    95.36s  user  발화 시작: …do they offer part-time options at those bootcamps?
    95.36s  agent 발화 끝
    98.91s  agent 발화 시작: [surprised] Yes, both General Assembly and Flatiron School d
    98.91s  user  발화 끝
   111.77s  user  발화 시작: Okay, that’s a relief. Can you send me links to their websit
   111.77s  agent 발화 끝
   116.82s  <ret> 발화 (turn24 첫 프레임)
   117.03s  ⚡SPAN 주입 [d'=0.90s / d_lead=13.75s]: (tool result) The official website for General Assembly is generalasse
   117.09s  agent 발화 시작: <ret> General Assembly's website is generalassemb.ly. You'll
   117.09s  user  발화 끝
   130.84s  agent 발화 끝
