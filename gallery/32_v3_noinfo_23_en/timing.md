# v3_noinfo_23_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_noinfo_23",
#     "name": "Alice",
#     "location": {
#       "city": "Toronto",
#       "country": "Canada",
#       "timezone": "America/Toronto (EST, UTC-5)",
#       "currency": "CAD ($)"
#     },
#     "nationality": "Canadian",
#     "gender": "female",
#     "age_range": "40s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-27",
#       "category": "hobby",
#       "text": "User is into alpine wildflower photography."
#     },
#     {
#       "date": "2026-05-22",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-04-05",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Thai."
#     },
#     {
#       "date": "2026-03-22",
#       "category": "trip",
#       "text": "User is planning a trip to Vietnam in March."
#     },
#     {
#       "date": "2026-03-18",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     },
#     {
#       "date": "2025-12-07",
#       "category": "pet",
#       "text": "User has a Beagle named Rusty."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-23",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Do you have the contact informatio | S2 Oh, that’s too bad. I thought she  | S3 I also need to find a good spot to | S4 …Actually, before we go there, cou

     0.00s  user  발화 시작: Do you have the contact information for Professor Anya Sharm
     6.83s  <ret> 발화 (turn2 첫 프레임)
     6.98s  agent 발화 시작: Mm-hmm.
     6.98s  user  발화 끝
     7.33s  agent 발화 시작: <ret> I’m sorry, I couldn’t find any contact information for
     7.33s  agent 발화 끝
     7.84s  ⚡SPAN 주입 [d'=1.00s / d_lead=5.23s]: (no information found)
    12.56s  user  발화 시작: Oh, that’s too bad. I thought she used to be at Seoul Nation
    12.56s  agent 발화 끝
    17.44s  agent 발화 시작: [curious] That's interesting! Seoul National University has 
    17.44s  user  발화 끝
    23.02s  user  발화 시작: Yeah.
    23.02s  agent 발화 끝
    23.37s  user  발화 시작: I also need to find a good spot to study tomorrow. Somewhere
    23.37s  user  발화 끝
    27.90s  agent 발화 시작: I can definitely help with that! There are several quiet stu
    27.90s  user  발화 끝
    32.79s  user  발화 시작: …Actually, before we go there, could you remind me what you 
    32.79s  agent 발화 끝
    38.30s  <ret> 발화 (turn10 첫 프레임)
    38.37s  agent 발화 시작: Yeah.
    38.37s  user  발화 끝
    38.66s  ⚡SPAN 주입 [d'=0.83s / d_lead=7.67s]: The Pomodoro Technique is a time management method developed by France
    38.72s  agent 발화 시작: <ret> The Pomodoro Technique is a time management method—it 
    38.72s  agent 발화 끝
    46.39s  user  발화 시작: Mm-hmm.
    46.39s  agent 발화 끝
    46.74s  agent 발화 시작: [happy] It’s a great way to stay motivated, especially when 
    46.74s  user  발화 끝
    57.90s  agent 발화 끝
