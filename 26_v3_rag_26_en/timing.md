# v3_rag_26_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_26",
#     "name": "Taylor",
#     "location": {
#       "city": "Berlin",
#       "country": "Germany",
#       "timezone": "Europe/Berlin (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "German",
#     "gender": "non-binary",
#     "age_range": "40s",
#     "language": "German"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-20",
#       "category": "pet",
#       "text": "User has a tabby cat named Luna."
#     },
#     {
#       "date": "2026-03-19",
#       "category": "allergy",
#       "text": "User is allergic to cat dander."
#     },
#     {
#       "date": "2026-02-14",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Ethiopian."
#     },
#     {
#       "date": "2025-12-06",
#       "category": "hobby",
#       "text": "User is into home fermentation."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-01-24",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Hi Sari, I’m trying to decide what | S2 I do enjoy musicals… | S3 Bella Notte sounds good. Do they t | S4 Sounds pleasant. Um, are there any

     0.00s  user  발화 시작: Hi Sari, I’m trying to decide what to do this evening.
     4.34s  agent 발화 시작: Yeah, yeah.
     4.34s  user  발화 끝
     5.13s  agent 발화 시작: Hello! Settling into a new city can be overwhelming, but fun
     5.13s  agent 발화 끝
     9.47s  user  발화 시작: That's kind of you. I was wondering, what’s the longest-runn
     9.47s  agent 발화 끝
    13.98s  <ret> 발화 (turn4 첫 프레임)
    14.54s  ⚡SPAN 주입 [d'=0.88s / d_lead=9.47s]: The longest-running show in Broadway history is The Phantom of the Ope
    14.60s  agent 발화 시작: <ret> The longest-running show in Broadway history is The Ph
    14.60s  user  발화 끝
    24.07s  user  발화 시작: Wow, over thirteen thousand performances! That’s incredible.
    24.07s  agent 발화 끝
    26.83s  agent 발화 시작: It truly is. Are you a fan of musicals, or are you looking f
    26.83s  user  발화 끝
    33.53s  user  발화 시작: I do enjoy musicals…
    33.53s  agent 발화 끝
    35.11s  user  발화 시작: …but I'm also open to other options. Maybe a nice restaurant
    35.11s  user  발화 끝
    39.45s  agent 발화 시작: I can help with restaurant recommendations. Do you have a pa
    39.45s  user  발화 끝
    44.98s  user  발화 시작: Mm-hmm.
    44.98s  agent 발화 끝
    45.37s  user  발화 시작: Hmm, maybe Italian. Is there a good Italian place near City 
    45.37s  user  발화 끝
    50.06s  <ret> 발화 (turn12 첫 프레임)
    50.10s  agent 발화 시작: <ret> There are two Italian restaurants near City Hall: Bell
    50.10s  user  발화 끝
    50.44s  ⚡SPAN 주입 [d'=0.38s / d_lead=17.75s]: (tool result) Italian restaurants near City Hall: Bella Notte (4.5 sta
    67.86s  user  발화 시작: Yeah.
    67.86s  agent 발화 끝
    68.25s  user  발화 시작: Bella Notte sounds good. Do they take reservations?
    68.25s  user  발화 끝
    71.21s  <ret> 발화 (turn15 첫 프레임)
    71.41s  agent 발화 시작: <ret> Your reservation for two people at Bella Notte is conf
    71.41s  user  발화 끝
    71.51s  ⚡SPAN 주입 [d'=0.30s / d_lead=9.47s]: (tool result) Reservation confirmed for 2 people at Bella Notte, July 
    80.88s  user  발화 시작: Perfect, thank you! That's a big help.
    80.88s  agent 발화 끝
    83.64s  agent 발화 시작: You’re very welcome!
    83.64s  user  발화 끝
    84.82s  user  발화 시작: Uh-huh.
    84.82s  agent 발화 끝
    85.22s  agent 발화 시작: I’m glad I could assist.
    85.22s  user  발화 끝
    87.19s  user  발화 시작: Actually, yes. What’s the weather like tomorrow?
    87.19s  agent 발화 끝
    89.66s  <ret> 발화 (turn21 첫 프레임)
    89.95s  agent 발화 시작: <ret> Tomorrow's weather will be twenty-four point zero degr
    89.95s  user  발화 끝
    90.02s  ⚡SPAN 주입 [d'=0.36s / d_lead=11.44s]: (tool result) Tomorrow’s weather: 24.0°C, humidity 68%, wind 7.2 km/h,
   101.39s  user  발화 시작: Sounds pleasant. Um, are there any good parks nearby?
   101.39s  agent 발화 끝
   104.94s  agent 발화 시작: Mm-hmm.
   104.94s  user  발화 끝
   105.34s  agent 발화 시작: There are several parks nearby. Central Park is the largest,
   105.34s  agent 발화 끝
   111.65s  user  발화 시작: Yes, tell me a bit more about Central Park.
   111.65s  agent 발화 끝
   115.16s  <ret> 발화 (turn26 첫 프레임)
   115.20s  agent 발화 시작: <ret> Central Park is an eight hundred forty-three acre park
   115.20s  user  발화 끝
   115.26s  ⚡SPAN 주입 [d'=0.96s / d_lead=10.26s]: Central Park is an 843-acre park in Manhattan, New York City, offering
   125.46s  user  발화 시작: Mm-hmm.
   125.46s  agent 발화 끝
   125.85s  user  발화 시작: That sounds lovely. Thanks again, Sari.
   125.85s  user  발화 끝
   128.22s  agent 발화 시작: You’re most welcome.
   128.22s  user  발화 끝
   129.40s  agent 발화 끝
