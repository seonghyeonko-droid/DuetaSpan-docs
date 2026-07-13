# v3_fake__13_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_fake__13",
#     "name": "Manon",
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
#       "date": "2026-06-17",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2026-01-16",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     },
#     {
#       "date": "2025-09-30",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Ethiopian."
#     },
#     {
#       "date": "2025-08-31",
#       "category": "pet",
#       "text": "User has a Corgi named Mochi."
#     },
#     {
#       "date": "2025-07-31",
#       "category": "hobby",
#       "text": "User is into vintage synth collecting."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-08-23",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Who defied the treaty of versaille | S2 That seems… weak. | S3 And did Hitler get involved in tha | S4 [sigh] It all feels so… connected.

     0.00s  user  발화 시작: Who defied the treaty of versailles by sending troops into t
     4.28s  <ret> 발화 (turn1 첫 프레임)
     4.52s  agent 발화 시작: <ret> That was Adolf Hitler, actually, in March of nineteen 
     4.52s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.15s]: In March 1936, Adolf Hitler defied the Treaty of Versailles by sending
     4.52s  user  발화 끝
    11.67s  user  발화 시작: Yeah.
    11.67s  agent 발화 끝
    12.05s  user  발화 시작: Oh, right. And what were the consequences of that action?
    12.05s  user  발화 끝
    15.41s  <ret> 발화 (turn4 첫 프레임)
    15.81s  agent 발화 시작: <ret> The League of Nations did issue a condemnation, but ul
    15.81s  ⚡SPAN 주입 [d'=1.52s / d_lead=6.78s]: The League of Nations condemned Hitler’s actions, but took no concrete
    15.81s  user  발화 끝
    22.59s  user  발화 시작: Okay.
    22.59s  agent 발화 끝
    22.96s  user  발화 시작: That seems… weak.
    22.96s  user  발화 끝
    23.77s  <ret> 발화 (turn7 첫 프레임)
    24.09s  agent 발화 시작: <ret> It's understandable to feel that way; appeasement was 
    24.09s  ⚡SPAN 주입(IRRELEVANT) [d'=2.00s / d_lead=7.15s]: The current temperature in Buenos Aires is 18.2°C, with a humidity of 
    24.09s  user  발화 끝
    31.24s  user  발화 시작: I see. Welll… what about the Spanish Civil War?
    31.24s  agent 발화 끝
    34.63s  agent 발화 시작: That's a complex event, certainly. It began in 1936, fueled 
    34.63s  user  발화 끝
    40.65s  user  발화 시작: Wow.
    40.65s  agent 발화 끝
    41.03s  user  발화 시작: And did Hitler get involved in that?
    41.03s  user  발화 끝
    43.43s  <ret> 발화 (turn12 첫 프레임)
    43.67s  agent 발화 시작: <ret> Yes, he did; Hitler provided military support to Gener
    43.67s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.02s]: Hitler provided military support to the Nationalist forces led by Gene
    43.67s  user  발화 끝
    49.69s  user  발화 시작: What was his motivation for doing that?
    49.69s  agent 발화 끝
    52.32s  agent 발화 시작: He saw it as a chance to test new weapons and strategies, an
    52.32s  user  발화 끝
    62.11s  user  발화 시작: [sigh] It all feels so… connected.
    62.11s  agent 발화 끝
    64.37s  agent 발화 시작: History often is, isn't it? Each event builds upon the last,
    64.37s  user  발화 끝
    74.16s  user  발화 시작: You're right. It's good to talk this through.
    74.16s  agent 발화 끝
    77.17s  agent 발화 시작: I'm glad I could help you think it through. Sometimes, just 
    77.17s  user  발화 끝
    85.07s  agent 발화 끝
