# v3_pers_37_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_pers_37",
#     "name": "Elsa",
#     "location": {
#       "city": "Sydney",
#       "country": "Australia",
#       "timezone": "Australia/Sydney (AEDT, UTC+11)",
#       "currency": "AUD ($)"
#     },
#     "nationality": "Australian",
#     "gender": "female",
#     "age_range": "early 20s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-25",
#       "category": "pet",
#       "text": "User has a Siamese cat named Bella."
#     },
#     {
#       "date": "2026-06-09",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Thai."
#     },
#     {
#       "date": "2026-02-27",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-01-15",
#       "category": "diet",
#       "text": "User is gluten-free."
#     },
#     {
#       "date": "2025-12-12",
#       "category": "home",
#       "text": "User's home address is 860 Birch Road."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-02-18",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2025-12-04",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 What kind of planning do you actua | S2 …but is it even worth trying to ad | S3 That sounds…intense. Is there anyt | S4 Okay, hydration and light. That’s 

     0.00s  agent 발화 시작: Hello Elsa, it’s lovely to meet you. I’m Heon, and I help pe
     8.88s  user  발화 시작: What kind of planning do you actually *do*?
     8.88s  agent 발화 끝
    11.52s  agent 발화 시작: [happy] I focus on making sure your time away feels restorat
    11.52s  user  발화 끝
    21.06s  user  발화 시작: Jet lag is the worst. I’m thinking of going to Italy next mo
    21.06s  agent 발화 끝
    25.34s  agent 발화 시작: Yeah.
    25.34s  user  발화 끝
    25.67s  agent 발화 시작: Italy is a wonderful choice! It’s a long flight from Sydney,
    25.67s  agent 발화 끝
    35.21s  user  발화 시작: …but is it even worth trying to adjust to the time differenc
    35.21s  agent 발화 끝
    39.16s  agent 발화 시작: It depends on the length of your stay. For trips shorter tha
    39.16s  user  발화 끝
    46.72s  user  발화 시작: Mm-hmm.
    46.72s  agent 발화 끝
    47.05s  agent 발화 시작: —but for a longer stay, like a month, gradually adjusting *b
    47.05s  user  발화 끝
    57.58s  user  발화 시작: Oh.
    57.58s  agent 발화 끝
    57.91s  user  발화 시작: That sounds…intense. Is there anything simpler I could do?
    57.91s  user  발화 끝
    60.87s  agent 발화 시작: [sigh] Certainly. Staying hydrated on the flight is incredib
    60.87s  user  발화 끝
    71.73s  user  발화 시작: Okay, hydration and light. That’s doable. Thanks, Heon.
    71.73s  agent 발화 끝
    74.36s  agent 발화 시작: You’re very welcome, Elsa. Remember, even small adjustments 
    74.36s  user  발화 끝
    80.62s  agent 발화 끝
