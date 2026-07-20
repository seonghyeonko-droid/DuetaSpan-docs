# v3_mcp_03_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mcp_03",
#     "name": "Henri",
#     "location": {
#       "city": "London",
#       "country": "United Kingdom",
#       "timezone": "Europe/London (GMT, UTC+0)",
#       "currency": "GBP (£)"
#     },
#     "nationality": "British",
#     "gender": "male",
#     "age_range": "late 40s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-08",
#       "category": "child",
#       "text": "User has a child named Emma, age 10."
#     },
#     {
#       "date": "2026-05-06",
#       "category": "car",
#       "text": "User drives a 2020 Kia Niro."
#     },
#     {
#       "date": "2026-04-21",
#       "category": "music",
#       "text": "User likes listening to a lo-fi jazz playlist."
#     },
#     {
#       "date": "2026-04-06",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2026-03-15",
#       "category": "home",
#       "text": "User's home address is 974 Hawthorn Road."
#     },
#     {
#       "date": "2026-03-03",
#       "category": "skill",
#       "text": "User is quite experienced with home fermentation."
#     },
#     {
#       "date": "2026-01-13",
#       "category": "partner",
#       "text": "User's partner is named Lucas."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-14",
#       "title": "Planning a wedding",
#       "bullets": [
#         "guest list around 80 people",
#         "comparing two venues for next May"
#       ]
#     },
#     {
#       "date": "2026-01-06",
#       "title": "Planning a camping trip",
#       "bullets": [
#         "a weekend at a lake site in September",
#         "asked about a 4-person tent and a cooler"
#       ]
#     },
#     {
#       "date": "2025-12-22",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building under 900k won/month",
#         "needed parking and a second bedroom near line 2"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 I want to send my location to Davi | S2 Actually, I’m a bit stressed about | S3 Do you think I should bring a copy | S4 That would be amazing, actually.

     0.00s  user  발화 시작: I want to send my location to David Brown.
     1.11s  agent 발화 시작: Yeah.
     2.06s  <ret> 발화 (turn2 첫 프레임)
     2.12s  agent 발화 끝
     2.59s  user  발화 끝
     2.63s  agent 발화 시작: <ret> I’ve just sent your location to David Brown—it’s 37.56
     3.41s  ⚡SPAN 주입 [d'=1.35s / d_lead=12.89s]: (tool result) {"status": "success", "message id": "789012", "latitude"
    15.52s  agent 발화 끝
    15.55s  user  발화 시작: Great, thanks!
    16.36s  user  발화 끝
    16.75s  agent 발화 시작: [happy] You’re very welcome! Sending a quick location can be
    22.23s  user  발화 시작: Uh-huh.
    22.77s  user  발화 끝
    24.82s  agent 발화 끝
    24.83s  user  발화 시작: Actually, I’m a bit stressed about an interview tomorrow.
    28.21s  user  발화 끝
    28.25s  agent 발화 시작: Oh, interviews can be tough. It’s perfectly normal to feel s
    36.61s  agent 발화 시작: I find that preparing thoroughly often helps calm nerves—thi
    36.73s  agent 발화 끝
    43.81s  user  발화 시작: Do you think I should bring a copy of my resume, even though
    44.63s  agent 발화 끝
    47.88s  agent 발화 시작: That’s a smart question! Yes, absolutely bring a copy. It sh
    47.88s  user  발화 끝
    52.45s  user  발화 시작: Yeah.
    53.03s  user  발화 끝
    60.43s  agent 발화 시작: Exactly! It's a small thing that makes a big impression. It’
    60.49s  agent 발화 끝
    68.16s  user  발화 시작: Mm-hmm.
    68.65s  user  발화 끝
    73.97s  agent 발화 끝
    75.02s  user  발화 시작: It’s for a project manager position at a tech company.
    78.25s  user  발화 끝
    78.51s  agent 발화 시작: A project manager! That’s fantastic. That role needs strong 
    90.42s  agent 발화 끝
    91.86s  user  발화 시작: That would be amazing, actually.
    93.61s  user  발화 끝
    94.01s  agent 발화 시작: [happy] Wonderful! Let's start with a common one: “Tell me a
   102.56s  agent 발화 시작: It’s all about framing it positively, focusing on how you na
   102.68s  agent 발화 끝
   114.30s  agent 발화 끝
