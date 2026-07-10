# v3_pers_41_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_pers_41",
#     "name": "Charlie",
#     "location": {
#       "city": "New York",
#       "country": "United States",
#       "timezone": "America/New_York (EST, UTC-5)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "non-binary",
#     "age_range": "50s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-30",
#       "category": "pet",
#       "text": "User has a Golden Retriever named Max."
#     },
#     {
#       "date": "2026-03-08",
#       "category": "home",
#       "text": "User's home address is 803 Cedar Lane."
#     },
#     {
#       "date": "2026-01-21",
#       "category": "diet",
#       "text": "User is pescatarian."
#     },
#     {
#       "date": "2025-10-14",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Korean BBQ."
#     },
#     {
#       "date": "2025-09-22",
#       "category": "allergy",
#       "text": "User is allergic to peanuts."
#     },
#     {
#       "date": "2025-06-12",
#       "category": "hobby",
#       "text": "User is into vintage synth collecting."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-02-06",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2025-06-30",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Dura… that’s an unusual name. Is i | S2 Hmm, enduring… I could use some of | S3 Well, I promised my niece I’d look | S4 Eight hundred dollars a week! That

     0.00s  agent 발화 시작: Hello Charlie, it’s lovely to meet you.
     2.62s  user  발화 시작: Dura… that’s an unusual name. Is it, like, a Japanese name?
     2.68s  agent 발화 끝
     6.72s  agent 발화 시작: It is, actually. It means ‘enduring’ – a quality I hope to h
     6.78s  user  발화 끝
    13.60s  user  발화 시작: Hmm, enduring… I could use some of that. I’m just… constantl
    13.63s  agent 발화 끝
    18.99s  agent 발화 시작: It sounds as though you’re carrying a heavy weight, Charlie.
    19.12s  user  발화 끝
    23.81s  user  발화 시작: Yeah.
    24.45s  user  발화 끝
    25.18s  agent 발화 시작: Sometimes, simply naming the most urgent task can lessen its
    25.33s  agent 발화 끝
    29.88s  user  발화 시작: Really?
    30.69s  user  발화 끝
    36.31s  agent 발화 끝
    36.37s  user  발화 시작: Well, I promised my niece I’d look into summer camps for her
    41.55s  user  발화 끝
    41.63s  agent 발화 시작: Summer camps can range quite a bit in price, Charlie. The Am
    50.59s  agent 발화 끝
    51.60s  user  발화 시작: Eight hundred dollars a week! That’s… a lot. Maybe day camp 
    56.88s  user  발화 끝
    57.00s  agent 발화 시작: It’s understandable to feel a little daunted by those figure
    67.53s  agent 발화 끝
