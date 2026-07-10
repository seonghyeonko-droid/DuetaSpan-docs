# v3_mem_32_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_32",
#     "name": "Taylor",
#     "location": {
#       "city": "San Francisco",
#       "country": "United States",
#       "timezone": "America/Los_Angeles (PST, UTC-8)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "non-binary",
#     "age_range": "early 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-02-09",
#       "category": "allergy",
#       "text": "User is allergic to cat dander."
#     },
#     {
#       "date": "2025-12-05",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Thai."
#     },
#     {
#       "date": "2025-09-18",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2025-07-16",
#       "category": "hobby",
#       "text": "User is into home fermentation."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-25",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2025-09-05",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2025-08-20",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Hi Seana, it’s good to talk to you | S2 Actually, yeah. I’m trying to find | S3 That sounds pretty good. Are they  | S4 Thanks! That’s perfect. I apprecia

     0.00s  agent 발화 시작: Hi Taylor, I'm Seana. It's so lovely to connect with you tod
     1.22s  user  발화 시작: Yeah, totally.
     2.59s  user  발화 끝
     4.02s  user  발화 시작: Hi Seana, it’s good to talk to you too. Can you recall what 
     4.02s  agent 발화 끝
     9.10s  <ret> 발화 (turn3 첫 프레임)
     9.18s  agent 발화 시작: <ret> You were planning a birthday dinner for six people, ho
     9.18s  ⚡SPAN 주입 [d'=1.20s / d_lead=4.95s]: [2026-04-25] Past chat — Planning a birthday dinner: party of six; loo
     9.34s  user  발화 끝
    14.13s  agent 발화 끝
    14.55s  user  발화 시작: Yes, that’s right! Do you remember anything about the kind o
    19.24s  <ret> 발화 (turn5 첫 프레임)
    19.40s  agent 발화 시작: <ret> Your favorite cuisine is Thai, so I imagine that's wha
    19.40s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.70s]: [2025-12-05] User's favorite cuisine is Thai.
    19.46s  user  발화 끝
    23.09s  user  발화 시작: Perfect! I’m thinking of having it next Saturday.
    23.10s  agent 발화 끝
    26.32s  user  발화 끝
    26.39s  agent 발화 시작: That sounds wonderful! Is there anything I can help you with
    28.53s  user  발화 시작: Yeah.
    29.12s  user  발화 끝
    30.42s  user  발화 시작: Actually, yeah. I’m trying to find a restaurant.
    30.42s  agent 발화 끝
    32.63s  <ret> 발화 (turn10 첫 프레임)
    33.03s  agent 발화 시작: <ret> I found five Thai restaurants in San Francisco: Kin Kh
    33.03s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.53s]: (tool result) Found 5 Thai restaurants in San Francisco: "Kin Khao", "
    33.19s  user  발화 끝
    39.40s  user  발화 시작: Right.
    40.13s  user  발화 끝
    41.50s  user  발화 시작: Ooh, Farmhouse Kitchen sounds good. Do they have outdoor sea
    41.56s  agent 발화 끝
    45.01s  user  발화 끝
    45.12s  <ret> 발화 (turn13 첫 프레임)
    45.27s  agent 발화 시작: <ret> Farmhouse Kitchen does have outdoor seating, and they 
    45.28s  ⚡SPAN 주입 [d'=1.04s / d_lead=6.30s]: (tool result) Farmhouse Kitchen Thai Cuisine: Outdoor seating availabl
    49.05s  user  발화 시작: Yeah.
    49.69s  user  발화 끝
    51.57s  agent 발화 끝
    52.75s  user  발화 시작: That sounds pretty good. Are they busy next Saturday? –
    56.71s  user  발화 시작: … actually, can you check if they take reservations?
    56.77s  user  발화 끝
    59.27s  <ret> 발화 (turn17 첫 프레임)
    59.58s  agent 발화 시작: <ret> Farmhouse Kitchen accepts reservations through OpenTab
    59.59s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.14s]: (tool result) Farmhouse Kitchen Thai Cuisine: Reservations accepted vi
    59.76s  user  발화 끝
    64.64s  user  발화 시작: Great! Can you find me a link to OpenTable for that restaura
    64.72s  agent 발화 끝
    67.92s  <ret> 발화 (turn19 첫 프레임)
    68.07s  agent 발화 시작: <ret> Here’s a link to their OpenTable page: https://www.ope
    68.08s  ⚡SPAN 주입 [d'=2.00s / d_lead=14.06s]: (tool result) OpenTable - Farmhouse Kitchen Thai Cuisine: https://www.
    68.30s  user  발화 끝
    82.03s  user  발화 시작: Thanks! That’s perfect. I appreciate it.
    82.13s  agent 발화 끝
    84.46s  agent 발화 시작: You're very welcome, Taylor.
    84.75s  user  발화 끝
    86.20s  agent 발화 끝
    87.04s  user  발화 시작: I was also thinking about getting a small gift for my friend
    92.71s  agent 발화 시작: Oh, that’s a thoughtful idea! It’s wonderful to support some
    92.78s  user  발화 끝
    97.06s  agent 발화 끝
