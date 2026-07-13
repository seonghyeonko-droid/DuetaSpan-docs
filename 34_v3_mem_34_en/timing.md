# v3_mem_34_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_34",
#     "name": "Avery",
#     "location": {
#       "city": "Toronto",
#       "country": "Canada",
#       "timezone": "America/Toronto (EST, UTC-5)",
#       "currency": "CAD ($)"
#     },
#     "nationality": "Canadian",
#     "gender": "non-binary",
#     "age_range": "40s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-28",
#       "category": "work",
#       "text": "User works as a high-school teacher."
#     },
#     {
#       "date": "2026-05-22",
#       "category": "trip",
#       "text": "User is planning a trip to Iceland in August."
#     },
#     {
#       "date": "2026-02-28",
#       "category": "allergy",
#       "text": "User is allergic to cat dander."
#     },
#     {
#       "date": "2026-01-20",
#       "category": "pet",
#       "text": "User has a Corgi named Mochi."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-02",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2026-05-06",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2026-03-04",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Hi Elaen, nice to meet you too. I’ | S2 Well, I was thinking about using m | S3 …Actually, before we do that, do y | S4 Okay, that’s helpful. Maybe it's w

     0.00s  agent 발화 시작: Hi Avery, I'm Elaen. It’s lovely to connect with you.
     3.71s  user  발화 시작: Hi Elaen, nice to meet you too. I’ve been feeling really stu
     3.71s  agent 발화 끝
     9.27s  agent 발화 시작: Yeah.
     9.27s  user  발화 끝
     9.64s  agent 발화 시작: That’s completely understandable, Avery. Feeling stuck is a 
     9.64s  agent 발화 끝
    16.68s  user  발화 시작: I think it's a lack of challenge, honestly. I'm a high-schoo
    16.68s  agent 발화 끝
    21.06s  <ret> 발화 (turn5 첫 프레임)
    21.13s  agent 발화 시작: <ret> It sounds like you're ready for a shift. As I recall, 
    21.13s  user  발화 끝
    21.59s  ⚡SPAN 주입 [d'=0.52s / d_lead=2.97s]: [2026-05-28] User works as a high-school teacher.
    31.51s  user  발화 시작: Yeah.
    31.51s  agent 발화 끝
    31.88s  agent 발화 시작: [happy] That's great that you've identified that! What kind 
    31.88s  user  발화 끝
    42.26s  user  발화 시작: Yeah.
    42.26s  agent 발화 끝
    42.63s  user  발화 시작: Well, I was thinking about using my skills outside of teachi
    42.63s  user  발화 끝
    49.30s  agent 발화 시작: Those are excellent transferable skills, Avery. Many roles v
    49.30s  user  발화 끝
    55.98s  user  발화 시작: …Actually, before we do that, do you think my experience wou
    55.98s  agent 발화 끝
    61.12s  <ret> 발화 (turn12 첫 프레임)
    61.54s  agent 발화 시작: <ret> That’s a very insightful question! Corporate training 
    61.54s  user  발화 끝
    61.77s  ⚡SPAN 주입 [d'=0.64s / d_lead=7.78s]: Many educators successfully transition into corporate training roles, 
    69.32s  agent 발화 시작: Many educators successfully transition into corporate traini
    69.32s  agent 발화 끝
    74.88s  user  발화 시작: That’s good to hear. What's the typical salary range for tha
    74.88s  agent 발화 끝
    80.72s  <ret> 발화 (turn16 첫 프레임)
    80.81s  agent 발화 시작: Mm-hmm.
    80.81s  user  발화 끝
    81.02s  ⚡SPAN 주입 [d'=0.30s / d_lead=10.38s]: (tool result) The average corporate trainer salary in Toronto, Ontario
    81.18s  agent 발화 시작: <ret> The average salary for a corporate trainer in Toronto 
    81.18s  agent 발화 끝
    91.56s  user  발화 시작: Okay, that’s helpful. Maybe it's worth exploring further. Th
    91.56s  agent 발화 끝
    95.27s  agent 발화 시작: [curious] You're very welcome, Avery. It sounds like you’re 
    95.27s  user  발화 끝
   105.65s  agent 발화 끝
