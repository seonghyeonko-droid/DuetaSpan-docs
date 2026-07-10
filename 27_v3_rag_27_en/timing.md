# v3_rag_27_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_27",
#     "name": "Charlie",
#     "location": {
#       "city": "Toronto",
#       "country": "Canada",
#       "timezone": "America/Toronto (EST, UTC-5)",
#       "currency": "CAD ($)"
#     },
#     "nationality": "Canadian",
#     "gender": "non-binary",
#     "age_range": "early 20s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-22",
#       "category": "diet",
#       "text": "User is vegan."
#     },
#     {
#       "date": "2026-06-14",
#       "category": "hobby",
#       "text": "User is into vintage synth collecting."
#     },
#     {
#       "date": "2026-06-05",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-07-26",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Korean BBQ."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-24",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Hi, I'm feeling a bit lost with ma | S2 That sounds…intimidating. | S3 Are there any near Parma? I'm in T | S4 That's not bad, actually. Thanks, 

     0.00s  user  발화 시작: Hi, I'm feeling a bit lost with making new friends.
     2.95s  user  발화 끝
     3.07s  agent 발화 시작: Hi there! It's totally normal to feel that way—building frie
     9.12s  user  발화 시작: I know, but it's hard! Where do people even meet these days?
     9.14s  agent 발화 끝
    12.08s  <ret> 발화 (turn3 첫 프레임)
    12.47s  agent 발화 시작: <ret> It can feel tricky, but a lot of people are finding co
    12.48s  ⚡SPAN 주입 [d'=1.52s / d_lead=7.00s]: Many people now connect through shared hobbies and interests in group 
    12.49s  user  발화 끝
    15.92s  user  발화 시작: Yeah.
    16.28s  user  발화 끝
    19.48s  agent 발화 끝
    19.72s  user  발화 시작: That sounds…intimidating.
    21.53s  agent 발화 시작: It’s okay to feel that way! Starting small is key—think abou
    21.56s  user  발화 끝
    23.48s  user  발화 시작: Yeah.
    23.98s  user  발화 끝
    27.27s  agent 발화 끝
    28.80s  user  발화 시작: I do like hiking, actually.
    30.73s  user  발화 끝
    30.99s  agent 발화 시작: That's wonderful! Hiking groups are a fantastic way to meet 
    34.95s  user  발화 시작: Yeah.
    35.40s  user  발화 끝
    36.55s  user  발화 시작: Are there any near Parma? I'm in Terenzo.
    36.59s  agent 발화 끝
    39.26s  <ret> 발화 (turn12 첫 프레임)
    39.34s  agent 발화 시작: <ret> Well, Terenzo is actually located in the northern Ital
    39.34s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.70s]: Terenzo is located in the northern Italian region of Emilia-Romagna.
    39.50s  user  발화 끝
    44.32s  user  발화 시작: …Are there hiking groups *in* Emilia-Romagna then?
    45.03s  agent 발화 끝
    47.20s  <ret> 발화 (turn14 첫 프레임)
    47.28s  agent 발화 시작: <ret> Emilia-Romagna has beautiful trails and active hiking 
    47.28s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.53s]: The average cost for a guided hike in Emilia-Romagna ranges from 30 to
    47.37s  user  발화 끝
    48.68s  user  발화 시작: Yeah.
    49.18s  user  발화 끝
    51.65s  agent 발화 시작: You could find a guided hike for anywhere between thirty and
    51.81s  agent 발화 끝
    60.68s  agent 발화 끝
    62.16s  user  발화 시작: That's not bad, actually. Thanks, Nuia.
    64.56s  user  발화 끝
    64.84s  agent 발화 시작: You're very welcome! Remember, every step counts, and you've
    70.64s  agent 발화 끝
