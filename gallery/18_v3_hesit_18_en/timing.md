# v3_hesit_18_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_hesit_18",
#     "name": "Sky",
#     "location": {
#       "city": "Sydney",
#       "country": "Australia",
#       "timezone": "Australia/Sydney (AEDT, UTC+11)",
#       "currency": "AUD ($)"
#     },
#     "nationality": "Australian",
#     "gender": "non-binary",
#     "age_range": "early 20s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-12",
#       "category": "home",
#       "text": "User's home address is 798 Cedar Lane."
#     },
#     {
#       "date": "2026-02-17",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Korean BBQ."
#     },
#     {
#       "date": "2025-12-10",
#       "category": "diet",
#       "text": "User is gluten-free."
#     },
#     {
#       "date": "2025-05-31",
#       "category": "work",
#       "text": "User works as a chef."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-25",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2026-03-12",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2026-03-05",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Uh, I was just wondering… which st | S2 …is that rate going up or down rec | S3 Welll… are there any specific prog | S4 And how does that compare to, say,

     0.00s  user  발화 시작: Uh, I was just wondering… which state in India has the highe
     4.53s  <ret> 발화 (turn1 첫 프레임)
     4.76s  agent 발화 시작: <ret> Bihar currently has the highest birth rate in India—
     4.77s  ⚡SPAN 주입 [d'=1.84s / d_lead=3.19s]: Bihar has the highest birth rate in India, with 26.2 births per 1,000 
     4.95s  user  발화 끝
     7.18s  user  발화 시작: …is that rate going up or down recently?
     7.95s  agent 발화 끝
     9.20s  <ret> 발화 (turn3 첫 프레임)
     9.52s  agent 발화 시작: <ret> Though it remains the highest in India, the birth rate
     9.52s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.74s]: The birth rate in Bihar has been decreasing, from 28.3 in 2018 to 26.2
     9.62s  user  발화 끝
    13.59s  user  발화 시작: Yeah.
    14.09s  user  발화 끝
    19.16s  agent 발화 시작: It’s a complex picture, with many factors influencing these 
    19.25s  agent 발화 끝
    23.34s  user  발화 시작: Welll… are there any specific programs to address that in Bi
    23.56s  agent 발화 끝
    27.09s  user  발화 끝
    27.10s  agent 발화 시작: That’s a really insightful question. Focusing on family plan
    33.45s  agent 발화 끝
    34.22s  user  발화 시작: And how does that compare to, say, Kerala?
    36.73s  <ret> 발화 (turn9 첫 프레임)
    36.80s  agent 발화 시작: <ret> Kerala, in comparison, has a much lower birth rate—18.
    36.81s  ⚡SPAN 주입 [d'=2.00s / d_lead=11.77s]: Kerala has a significantly lower birth rate of 18.1 per 1,000 people, 
    36.84s  user  발화 끝
    48.58s  agent 발화 끝
