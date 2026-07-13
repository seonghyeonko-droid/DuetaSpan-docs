# v3_rag_26_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_26",
#     "name": "Caleb",
#     "location": {
#       "city": "London",
#       "country": "United Kingdom",
#       "timezone": "Europe/London (GMT, UTC+0)",
#       "currency": "GBP (£)"
#     },
#     "nationality": "British",
#     "gender": "male",
#     "age_range": "late 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-11",
#       "category": "diet",
#       "text": "User is vegan."
#     },
#     {
#       "date": "2026-03-03",
#       "category": "allergy",
#       "text": "User is allergic to shellfish."
#     },
#     {
#       "date": "2025-10-15",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2025-09-19",
#       "category": "trip",
#       "text": "User is planning a trip to New Zealand in August."
#     },
#     {
#       "date": "2025-09-01",
#       "category": "pet",
#       "text": "User has a Corgi named Mochi."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-11-25",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Hi Elius, good to talk to you. I w | S2 Wow, six thousand! That’s a lot of | S3 [happy] That makes sense. Do they  | S4 Okay, so like, the actors vote on 

     0.00s  user  발화 시작: Hi Elius, good to talk to you. I was wondering, who actually
     6.65s  agent 발화 시작: It's a pleasure speaking with you as well. That's a good que
     6.65s  user  발화 끝
    13.30s  user  발화 시작: Uh-huh.
    13.30s  agent 발화 끝
    13.69s  user  발화 시작: Yeah, I always figured it was just…people in the industry, b
    13.69s  user  발화 끝
    18.53s  <ret> 발화 (turn4 첫 프레임)
    18.77s  agent 발화 시작: <ret> The Academy of Motion Picture Arts and Sciences is mad
    18.77s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.65s]: The Academy of Motion Picture Arts and Sciences is comprised of over 6
    18.77s  user  발화 끝
    25.42s  user  발화 시작: Right.
    25.42s  agent 발화 끝
    25.81s  user  발화 시작: Wow, six thousand! That’s a lot of people. Uh, what kind of 
    25.81s  user  발화 끝
    32.46s  agent 발화 시작: All sorts, really – actors, directors, writers, and many oth
    32.46s  user  발화 끝
    37.54s  user  발화 시작: [happy] That makes sense. Do they all vote on everything, or
    37.54s  agent 발화 끝
    43.48s  <ret> 발화 (turn9 첫 프레임)
    43.80s  agent 발화 시작: <ret> Voting within the Academy is done by members of specif
    43.80s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.04s]: Academy voting is done by members of specific branches, with all membe
    43.80s  user  발화 끝
    50.84s  user  발화 시작: Okay, so like, the actors vote on the acting categories? Tha
    50.84s  agent 발화 끝
    55.92s  agent 발화 시작: Exactly! It ensures those with direct experience have a sign
    55.92s  user  발화 끝
    61.40s  agent 발화 끝
