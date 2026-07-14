# v3_fake__13_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_fake__13",
#     "name": "Nora",
#     "location": {
#       "city": "New York",
#       "country": "United States",
#       "timezone": "America/New_York (EST, UTC-5)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "female",
#     "age_range": "early 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-07",
#       "category": "work",
#       "text": "User works as a graduate student."
#     },
#     {
#       "date": "2026-03-27",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Italian."
#     },
#     {
#       "date": "2026-03-20",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     },
#     {
#       "date": "2026-02-15",
#       "category": "hobby",
#       "text": "User is into alpine wildflower photography."
#     },
#     {
#       "date": "2026-01-03",
#       "category": "pet",
#       "text": "User has a Poodle named Coco."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-03-26",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2026-01-08",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 I was just wondering, who was marr | S2 Oh, wow, I didn’t realize that! We | S3 That is a bit awkward, isn't it? – | S4 …do you think those relationships 

     0.00s  user  발화 시작: I was just wondering, who was married to who in ABBA? It’s a
     6.27s  agent 발화 시작: Right.
     6.27s  user  발화 끝
     6.29s  <ret> 발화 (turn2 첫 프레임)
     6.59s  ⚡SPAN 주입 [d'=0.30s / d_lead=7.37s]: Agnetha Fältskog and Björn Ulvaeus were married from 1971 to 1979.
     6.63s  agent 발화 시작: <ret> Two of the members, Agnetha Fältskog and Björn Ulvaeus
     6.63s  agent 발화 끝
    14.00s  user  발화 시작: Mm-hmm.
    14.00s  agent 발화 끝
    14.37s  user  발화 시작: Oh, wow, I didn’t realize that! Were any of the others marri
    14.37s  user  발화 끝
    19.83s  <ret> 발화 (turn5 첫 프레임)
    20.21s  ⚡SPAN 주입 [d'=1.04s / d_lead=5.53s]: Benny Andersson married Anni-Frid Lyngstad in 1978, though they divorc
    20.27s  agent 발화 시작: <ret> Benny Andersson and Anni-Frid Lyngstad also married, i
    20.27s  user  발화 끝
    25.80s  user  발화 시작: Uh-huh.
    25.80s  agent 발화 끝
    26.17s  agent 발화 시작: It’s interesting how both couples were together and then div
    26.17s  user  발화 끝
    32.43s  user  발화 시작: That is a bit awkward, isn't it? – I mean, writing songs tog
    32.43s  agent 발화 끝
    37.59s  agent 발화 시작: It certainly presented unique dynamics, I imagine – I can un
    37.59s  user  발화 끝
    44.96s  user  발화 시작: Yeah.
    44.96s  agent 발화 끝
    45.33s  user  발화 시작: …do you think those relationships influenced their songwriti
    45.33s  user  발화 끝
    48.85s  <ret> 발화 (turn12 첫 프레임)
    48.95s  ⚡SPAN 주입 [d'=0.98s / d_lead=8.11s]: Many of ABBA’s songs reflect themes of heartbreak, longing, and the co
    49.01s  agent 발화 시작: <ret> Many of ABBA’s songs really do reflect themes of heart
    49.01s  user  발화 끝
    57.12s  agent 발화 끝
