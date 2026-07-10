# v3_pers_40_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_pers_40",
#     "name": "Morgan",
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
#       "date": "2026-06-21",
#       "category": "allergy",
#       "text": "User is allergic to peanuts."
#     },
#     {
#       "date": "2026-06-14",
#       "category": "work",
#       "text": "User works as a software engineer."
#     },
#     {
#       "date": "2026-04-18",
#       "category": "diet",
#       "text": "User is vegetarian."
#     },
#     {
#       "date": "2026-02-28",
#       "category": "pet",
#       "text": "User has a Corgi named Mochi."
#     },
#     {
#       "date": "2026-02-16",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Mexican."
#     },
#     {
#       "date": "2025-08-19",
#       "category": "home",
#       "text": "User's home address is 454 Birch Road."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-18",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2025-07-05",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Kliaen… that’s a really unusual na | S2 Neighborhoods are good. I’m stayin | S3 It had a bookstore nearby… and a r | S4 I’m also trying to figure out publ

     0.00s  agent 발화 시작: Hello Morgan, welcome to San Francisco!
     1.48s  user  발화 시작: Yeah.
     2.07s  user  발화 끝
     2.45s  agent 발화 끝
     2.72s  user  발화 시작: Kliaen… that’s a really unusual name. What exactly *do* you 
     7.58s  user  발화 끝
     8.01s  agent 발화 시작: It’s a name from my creators, Morgan. I help people adjust t
    18.86s  agent 발화 끝
    20.13s  user  발화 시작: Easier how? I’m mostly worried about finding good coffee sho
    26.38s  user  발화 끝
    26.62s  agent 발화 시작: Ah, a very important concern! Finding the right coffee spot 
    28.95s  user  발화 시작: Okay.
    29.45s  user  발화 끝
    34.65s  user  발화 시작: Um, something quiet, with good Wi-Fi. I work remotely, so it
    34.69s  agent 발화 끝
    42.06s  user  발화 끝
    42.38s  agent 발화 시작: Practical is key when you’re working on the go. Many cafes h
    49.63s  user  발화 시작: Yeah.
    50.12s  user  발화 끝
    53.61s  agent 발화 끝
    53.79s  user  발화 시작: Neighborhoods are good. I’m staying near Golden Gate Park, I
    58.84s  user  발화 끝
    58.94s  agent 발화 시작: Golden Gate Park is wonderful! It's a vibrant area with lots
    67.51s  agent 발화 끝
    67.56s  user  발화 시작: [happy] That’s good to hear. Actually, I’m trying to remembe
    74.53s  agent 발화 시작: It’s frustrating when a name escapes you, isn’t it? Sometime
    74.65s  user  발화 끝
    78.44s  user  발화 시작: Yeah.
    79.07s  user  발화 끝
    81.66s  agent 발화 끝
    82.55s  user  발화 시작: It had a bookstore nearby… and a really steep hill? Oh, and 
    89.26s  user  발화 끝
    89.44s  agent 발화 시작: Many people recommend Lombard Street for its unique characte
    98.30s  user  발화 시작: Lombard Street! That’s it! Wow, you’re good.
    98.48s  agent 발화 끝
   102.36s  user  발화 끝
   102.73s  agent 발화 시작: I'm happy I could help, Morgan. It’s a popular street, so I’
   108.66s  agent 발화 끝
   108.94s  user  발화 시작: I’m also trying to figure out public transport. It’s… differ
   113.59s  agent 발화 시작: Public transport can definitely take some getting used to in
   113.66s  user  발화 끝
   118.30s  user  발화 시작: Nice.
   119.12s  user  발화 끝
   122.29s  agent 발화 시작: Are you familiar with Muni, our main public transportation s
   122.44s  agent 발화 끝
   130.35s  agent 발화 끝
   130.56s  user  발화 시작: I think I saw a cable car. Are those… actually useful, or ju
   136.54s  user  발화 끝
   137.01s  agent 발화 시작: They're definitely popular with tourists, but cable cars are
   146.28s  agent 발화 끝
