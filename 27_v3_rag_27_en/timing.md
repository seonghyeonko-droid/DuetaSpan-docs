# v3_rag_27_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_27",
#     "name": "Andrea",
#     "location": {
#       "city": "Toronto",
#       "country": "Canada",
#       "timezone": "America/Toronto (EST, UTC-5)",
#       "currency": "CAD ($)"
#     },
#     "nationality": "Canadian",
#     "gender": "non-binary",
#     "age_range": "50s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-06",
#       "category": "pet",
#       "text": "User has a Beagle named Rusty."
#     },
#     {
#       "date": "2026-04-06",
#       "category": "allergy",
#       "text": "User is allergic to peanuts."
#     },
#     {
#       "date": "2026-02-04",
#       "category": "home",
#       "text": "User's home address is 674 Oak Avenue."
#     },
#     {
#       "date": "2025-08-17",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Thai."
#     },
#     {
#       "date": "2025-07-17",
#       "category": "trip",
#       "text": "User is planning a trip to Vietnam in December."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-12-06",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2025-11-03",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Hi, I'm feeling a bit lost after m | S2 Wow, that's a long time ago. | S3 I'm trying to find out about his f | S4 Sushi sounds good. What's the weat

     0.00s  user  발화 시작: Hi, I'm feeling a bit lost after my recent move.
     3.23s  agent 발화 시작: Moving is a big transition, and it’s completely normal to fe
     3.23s  user  발화 끝
     6.93s  user  발화 시작: Mhm.
     7.43s  user  발화 끝
    11.06s  agent 발화 끝
    13.18s  user  발화 시작: Yeah, it's… hard. I'm trying to learn about the history of t
    17.48s  user  발화 끝
    17.86s  agent 발화 시작: That's a wonderful way to connect with a new place! Explorin
    24.63s  agent 발화 끝
    25.68s  user  발화 시작: Do you know when this town was founded?
    27.06s  <ret> 발화 (turn6 첫 프레임)
    27.38s  agent 발화 시작: <ret> Millbrook was founded in sixteen ninety-two, by German
    27.38s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.37s]: The town of Millbrook was founded in 1692 by German Palatine immigrant
    27.52s  user  발화 끝
    30.48s  user  발화 시작: Mm-hmm.
    30.98s  user  발화 끝
    34.75s  agent 발화 끝
    34.82s  user  발화 시작: Wow, that's a long time ago.
    36.35s  agent 발화 시작: It is, isn't it? It’s amazing to think about all the stories
    36.48s  user  발화 끝
    41.01s  user  발화 시작: Really?
    41.69s  user  발화 끝
    42.45s  user  발화 시작: Um, I was reading about James Henry Miller, a local figure.
    42.52s  agent 발화 끝
    45.83s  agent 발화 시작: Oh, yes, James Henry Miller was quite a prominent figure her
    45.96s  user  발화 끝
    48.60s  user  발화 시작: Uh-huh.
    49.00s  user  발화 끝
    51.99s  agent 발화 끝
    53.38s  user  발화 시작: I'm trying to find out about his family. What was his wife's
    57.14s  <ret> 발화 (turn15 첫 프레임)
    57.22s  agent 발화 시작: <ret> Eliza Jane Thompson, James Henry Miller’s wife, was bo
    57.22s  ⚡SPAN 주입 [d'=1.28s / d_lead=8.34s]: James Henry Miller’s wife, Eliza Jane Thompson, was born in Pennsylvan
    57.40s  user  발화 끝
    59.80s  user  발화 시작: Yeah.
    60.25s  user  발화 끝
    65.57s  agent 발화 끝
    65.70s  user  발화 시작: American, okay. That's good to know.
    67.85s  agent 발화 시작: Sometimes understanding a person’s roots helps you understan
    68.01s  user  발화 끝
    74.98s  user  발화 시작: I guess so. Can you find me some restaurants nearby? I’m sta
    75.13s  agent 발화 끝
    78.38s  <ret> 발화 (turn20 첫 프레임)
    78.69s  agent 발화 시작: <ret> I found three restaurants nearby: The Corner Bistro, I
    78.70s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.67s]: (tool result) Found 3 restaurants: The Corner Bistro, Italian; Millbro
    78.82s  user  발화 끝
    82.40s  user  발화 시작: Mhm.
    82.89s  user  발화 끝
    87.21s  user  발화 시작: Sushi sounds good. What's the weather like tonight?
    87.36s  agent 발화 끝
    89.77s  <ret> 발화 (turn23 첫 프레임)
    89.93s  agent 발화 시작: <ret> Tonight's weather will be eighteen point five degrees 
    89.93s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.92s]: (tool result) The weather tonight will be 18.5°C, humidity 65%, wind 3
    90.16s  user  발화 끝
    94.82s  user  발화 시작: Uh-huh.
    95.31s  user  발화 끝
    99.44s  user  발화 시작: Perfect. Thanks, Liana.
    99.85s  agent 발화 끝
   101.11s  agent 발화 시작: You're very welcome. Remember, taking small steps, like expl
   101.19s  user  발화 끝
   109.69s  agent 발화 끝
