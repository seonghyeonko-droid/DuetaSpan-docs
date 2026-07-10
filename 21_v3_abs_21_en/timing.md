# v3_abs_21_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_abs_21",
#     "name": "Camille",
#     "location": {
#       "city": "San Francisco",
#       "country": "United States",
#       "timezone": "America/Los_Angeles (PST, UTC-8)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "female",
#     "age_range": "40s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-11",
#       "category": "pet",
#       "text": "User has a Corgi named Mochi."
#     },
#     {
#       "date": "2026-03-16",
#       "category": "home",
#       "text": "User's home address is 874 Birch Road."
#     },
#     {
#       "date": "2026-02-20",
#       "category": "hobby",
#       "text": "User is into home fermentation."
#     },
#     {
#       "date": "2025-12-21",
#       "category": "trip",
#       "text": "User is planning a trip to Lisbon in May."
#     },
#     {
#       "date": "2025-09-21",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Mexican."
#     },
#     {
#       "date": "2025-09-02",
#       "category": "work",
#       "text": "User works as a graduate student."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-06-18",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 How many senators are there in the | S2 Trattoria Bella sounds nice. What' | S3 Actually, before I do, what’s the  | S4 You're right! I was feeling a litt

     0.00s  user  발화 시작: How many senators are there in the French Senate?
     2.45s  <ret> 발화 (turn1 첫 프레임)
     2.53s  agent 발화 시작: <ret> I’m afraid that information isn’t currently available 
     2.59s  user  발화 끝
     4.45s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.79s]: (no information found)
     5.18s  user  발화 시작: Mhm.
     5.67s  user  발화 끝
     8.32s  agent 발화 끝
     8.39s  user  발화 시작: Hmm, well, what about the US Senate? How many senators are t
    12.25s  <ret> 발화 (turn4 첫 프레임)
    12.49s  agent 발화 시작: <ret> There are one hundred senators in the United States Se
    12.60s  user  발화 끝
    13.37s  ⚡SPAN 주입 [d'=1.12s / d_lead=5.00s]: The United States Senate has one hundred senators.
    15.42s  user  발화 시작: Okay.
    16.05s  user  발화 끝
    17.08s  user  발화 시작: That makes sense. Okay, could you find me a good Italian res
    17.50s  agent 발화 끝
    21.85s  <ret> 발화 (turn7 첫 프레임)
    22.03s  user  발화 끝
    22.08s  agent 발화 시작: <ret> Trattoria Bella is one hundred fifty meters away, and 
    23.85s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.02s]: Trattoria Bella (37.7749, -122.4194): <name> (150 m), Piccolo Roma (28
    30.10s  agent 발화 끝
    30.13s  user  발화 시작: Trattoria Bella sounds nice. What's their phone number?
    33.03s  <ret> 발화 (turn9 첫 프레임)
    33.35s  agent 발화 시작: <ret> Their number is four one five, five five five, one two
    33.60s  user  발화 끝
    34.55s  ⚡SPAN 주입 [d'=1.52s / d_lead=7.32s]: Trattoria Bella: (415) 555-1234, 123 Main Street, San Francisco, CA 94
    35.67s  user  발화 시작: Yeah, yeah.
    37.19s  user  발화 끝
    40.67s  agent 발화 끝
    41.11s  user  발화 시작: Perfect! I think I’ll give them a call. Thanks.
    44.37s  agent 발화 시작: You’re very welcome. I hope you enjoy your meal.
    44.48s  user  발화 끝
    47.61s  agent 발화 끝
    48.33s  user  발화 시작: Actually, before I do, what’s the weather like in San Franci
    51.97s  <ret> 발화 (turn14 첫 프레임)
    52.29s  agent 발화 시작: <ret> It is eighteen point three degrees Celsius with sixty-
    52.30s  user  발화 끝
    53.97s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.83s]: 18.3°C, humidity 62%, wind 8.2 km/h
    60.11s  user  발화 시작: Oh, that’s lovely. So nice to have a warm day.
    60.12s  agent 발화 끝
    63.99s  agent 발화 시작: It truly is. Sometimes we just need a little sunshine to bri
    64.00s  user  발화 끝
    67.45s  user  발화 시작: Okay.
    68.08s  user  발화 끝
    69.03s  user  발화 시작: You're right! I was feeling a little stressed, but this is h
    69.19s  agent 발화 끝
    73.61s  user  발화 끝
    74.03s  agent 발화 시작: I’m glad to hear that. Taking a moment to notice the good th
    77.17s  user  발화 시작: Right.
    77.66s  user  발화 끝
    78.98s  agent 발화 끝
    79.26s  user  발화 시작: I appreciate you saying that. I think I will call now.
    82.38s  agent 발화 시작: Wonderful. I hope your call goes smoothly, and you have a tr
    82.49s  user  발화 끝
    88.36s  agent 발화 끝
