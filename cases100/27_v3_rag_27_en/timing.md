# v3_rag_27_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_27",
#     "name": "Leo",
#     "location": {
#       "city": "San Francisco",
#       "country": "United States",
#       "timezone": "America/Los_Angeles (PST, UTC-8)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "male",
#     "age_range": "late 40s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-25",
#       "category": "medication",
#       "text": "User takes a statin."
#     },
#     {
#       "date": "2026-05-12",
#       "category": "phone",
#       "text": "User uses an Xperia 1."
#     },
#     {
#       "date": "2026-04-26",
#       "category": "coffee",
#       "text": "User's usual coffee order is a flat white."
#     },
#     {
#       "date": "2026-04-14",
#       "category": "pet",
#       "text": "User has a Labrador named Cooper."
#     },
#     {
#       "date": "2026-02-17",
#       "category": "savings",
#       "text": "User is saving for a trip to Europe next year."
#     },
#     {
#       "date": "2026-01-02",
#       "category": "partner",
#       "text": "User's partner is named Haruto."
#     },
#     {
#       "date": "2025-12-21",
#       "category": "plant",
#       "text": "User is growing a lemon tree at home."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-24",
#       "title": "Planning a dinner party",
#       "bullets": [
#         "hosting eight friends on Saturday",
#         "one guest is gluten-free"
#       ]
#     },
#     {
#       "date": "2026-05-22",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building under 900k won/month",
#         "needed parking and a second bedroom near line 2"
#       ]
#     },
#     {
#       "date": "2026-04-10",
#       "title": "Buying a gift for a parent",
#       "bullets": [
#         "mom's 60th birthday next month",
#         "considering a spa day or a watch"
#       ]
#     },
#     {
#       "date": "2026-02-16",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing the Kia Niro hybrid and Hyundai Ioniq",
#         "wants under 30k miles and below 25M won"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Hey Tara, which highways go throug | S2 Is I-90 one of them? | S3 So, 146, 890, 7, and 90… wait – | S4 …do any of those connect directly 

     0.00s  user  발화 시작: Hey Tara, which highways go through Schenectady, New York?
     2.46s  agent 발화 시작: Right.
     2.68s  <ret> 발화 (turn2 첫 프레임)
     3.28s  ⚡SPAN 주입 [d'=0.60s / d_lead=8.16s]: Route 146, Interstate 890, and New York State Route 7 all run through 
     3.33s  user  발화 끝
     3.34s  agent 발화 시작: <ret> Route 146, Interstate 890, and New York State Route 7 
     3.37s  agent 발화 끝
     6.82s  user  발화 시작: Right.
     7.21s  user  발화 끝
    11.50s  agent 발화 끝
    11.79s  user  발화 시작: Is I-90 one of them?
    12.14s  <ret> 발화 (turn5 첫 프레임)
    13.44s  ⚡SPAN 주입 [d'=1.29s / d_lead=9.46s]: Interstate 90 also passes through Schenectady, New York, intersecting 
    13.50s  agent 발화 시작: <ret> Interstate 90 also passes through Schenectady, New Yor
    13.56s  user  발화 끝
    22.89s  user  발화 시작: So, 146, 890, 7, and 90… wait –
    22.96s  agent 발화 끝
    28.37s  user  발화 끝
    28.44s  user  발화 시작: …do any of those connect directly to Albany?
    30.37s  <ret> 발화 (turn8 첫 프레임)
    31.68s  ⚡SPAN 주입 [d'=1.31s / d_lead=10.29s]: Interstate 890 directly connects Schenectady to Albany, a distance of 
    31.74s  agent 발화 시작: <ret> Interstate 890 directly connects Schenectady to Albany
    31.77s  user  발화 끝
    42.03s  agent 발화 끝
