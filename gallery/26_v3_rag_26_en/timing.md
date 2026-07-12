# v3_rag_26_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_26",
#     "name": "Ava",
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
#       "date": "2026-02-01",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Mexican."
#     },
#     {
#       "date": "2025-07-31",
#       "category": "hobby",
#       "text": "User is into marathon training."
#     },
#     {
#       "date": "2025-07-14",
#       "category": "trip",
#       "text": "User is planning a trip to Lisbon in December."
#     },
#     {
#       "date": "2025-06-11",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-11-21",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2025-10-02",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Hi Zeen, I'm trying to get a bette | S2 Wow, that's a lot of people. Do th | S3 …maybe selling crafts online. — | S4 I guess so. What about their reven

     0.00s  user  발화 시작: Hi Zeen, I'm trying to get a better handle on my spending.
     4.87s  agent 발화 시작: Hello! It’s wonderful you’re taking this step. Small changes
     4.87s  user  발화 끝
    10.95s  user  발화 시작: Yeah, I’m hoping to. I was wondering, how many people actual
    10.95s  agent 발화 끝
    16.38s  <ret> 발화 (turn3 첫 프레임)
    16.62s  agent 발화 시작: <ret> Starbucks currently employs around 238,000 people in t
    16.62s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.65s]: Starbucks employs approximately 238,000 people in the United States as
    16.62s  user  발화 끝
    20.27s  user  발화 시작: Yeah, yeah.
    20.27s  agent 발화 끝
    21.08s  user  발화 시작: Wow, that's a lot of people. Do they all get free coffee?
    21.08s  user  발화 끝
    25.95s  agent 발화 시작: That’s a really good point to consider – employee benefits a
    25.95s  user  발화 끝
    30.81s  user  발화 시작: I'm thinking of starting a small side hustle…
    30.81s  agent 발화 끝
    34.06s  user  발화 시작: …maybe selling crafts online. —
    34.06s  user  발화 끝
    36.08s  user  발화 시작: …but would it be hard to compete with a company that big?
    36.08s  user  발화 끝
    40.95s  agent 발화 시작: That's a valid concern. It *can* be challenging, but there’s
    40.95s  user  발화 끝
    46.22s  user  발화 시작: I guess so. What about their revenue?
    46.22s  agent 발화 끝
    48.66s  <ret> 발화 (turn12 첫 프레임)
    49.06s  agent 발화 시작: <ret> Their revenue is quite significant, actually—Starbucks
    49.06s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.33s]: Starbucks reported a total revenue of 36.03 billion U.S. dollars in th
    49.06s  user  발화 끝
    58.38s  user  발화 시작: Wow.
    58.38s  agent 발화 끝
    58.79s  user  발화 시작: That *is* a lot of money. Maybe I should just stick to budge
    58.79s  user  발화 끝
    64.87s  agent 발화 시작: That’s a perfectly reasonable approach! Budgeting is the fou
    64.87s  user  발화 끝
    70.14s  agent 발화 끝
