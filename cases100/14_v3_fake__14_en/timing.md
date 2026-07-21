# v3_fake__14_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_fake__14",
#     "name": "Emma",
#     "location": {
#       "city": "Berlin",
#       "country": "Germany",
#       "timezone": "Europe/Berlin (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "German",
#     "gender": "female",
#     "age_range": "60s",
#     "language": "German"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-12",
#       "category": "work",
#       "text": "User works as a barista."
#     },
#     {
#       "date": "2026-03-20",
#       "category": "gym",
#       "text": "User has a gym membership near home."
#     },
#     {
#       "date": "2026-03-19",
#       "category": "anniversary",
#       "text": "User's anniversary is May 5."
#     },
#     {
#       "date": "2026-02-19",
#       "category": "car",
#       "text": "User drives a 2017 Honda Civic."
#     },
#     {
#       "date": "2026-02-17",
#       "category": "emergency",
#       "text": "User's emergency contact is Ava."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-03-13",
#       "title": "Booking a Japan trip",
#       "bullets": [
#         "5 nights in Kyoto and Osaka in October",
#         "wants a JR Pass and a ryokan for one night"
#       ]
#     },
#     {
#       "date": "2026-02-04",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers for a 3-story house",
#         "wanted coverage for the basement office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Do you know when the Big Mac was f | S2 Okay, that makes sense. Any tips f | S3 Single-tasking… easier said than d | S4 I've also been meaning to book a h

     0.00s  user  발화 시작: Do you know when the Big Mac was first sold?
     2.78s  <ret> 발화 (turn1 첫 프레임)
     3.05s  user  발화 끝
     3.38s  ⚡SPAN 주입 [d'=0.60s / d_lead=7.55s]: The Big Mac was first sold in 1967 at a McDonald’s restaurant in Union
     3.44s  agent 발화 시작: <ret> The Big Mac first appeared in 1967, at a McDonald’s in
    10.98s  agent 발화 끝
    11.29s  user  발화 시작: Wow, that's interesting. What about prioritizing tasks? I fe
    13.53s  agent 발화 시작: Yeah.
    14.15s  agent 발화 끝
    16.52s  agent 발화 시작: Feeling overwhelmed is so common. We can look at urgent vers
    16.56s  user  발화 끝
    22.53s  user  발화 시작: How do I tell the difference between urgent and important?
    23.08s  agent 발화 끝
    24.70s  agent 발화 시작: Right.
    24.91s  <ret> 발화 (turn7 첫 프레임)
    25.38s  agent 발화 끝
    26.06s  ⚡SPAN 주입 [d'=1.15s / d_lead=8.85s]: Urgent tasks demand immediate attention, while important tasks contrib
    26.12s  agent 발화 시작: <ret> Urgent tasks grab your attention *now*, but important 
    26.23s  user  발화 끝
    34.66s  <ret> 발화 (turn8 첫 프레임)
    34.97s  agent 발화 끝
    34.97s  agent 발화 시작: <ret> Sometimes we get caught in the "now" and forget what’s
    36.29s  ⚡SPAN 주입(IRRELEVANT) [d'=1.63s / d_lead=6.54s]: Seoul (-37.5665, 126.9780): Gyeongbokgung Palace (386 m), Bukchon Hano
    37.38s  user  발화 시작: Right.
    37.77s  user  발화 끝
    41.39s  user  발화 시작: Okay, that makes sense. Any tips for actually *doing* that?
    41.51s  agent 발화 끝
    45.05s  user  발화 끝
    45.06s  agent 발화 시작: Batching similar tasks can be helpful. Grouping emails, call
    51.92s  agent 발화 끝
    52.05s  user  발화 시작: Batching? Like, doing all my emails at once?
    55.33s  user  발화 끝
    55.81s  agent 발화 시작: Exactly! Instead of checking emails constantly, dedicate a s
    62.74s  user  발화 시작: Single-tasking… easier said than done, I think.
    63.18s  agent 발화 끝
    66.25s  user  발화 끝
    66.25s  agent 발화 시작: [sigh] It is a skill to cultivate. It's about intentionally 
    74.07s  user  발화 시작: It's hard to resist distractions.
    74.16s  agent 발화 끝
    76.32s  user  발화 끝
    76.82s  agent 발화 시작: Distractions are inevitable. Acknowledge them without judgme
    83.19s  agent 발화 끝
    83.69s  user  발화 시작: I've also been meaning to book a hotel in Busan.
    86.71s  <ret> 발화 (turn19 첫 프레임)
    86.85s  agent 발화 시작: <ret> For a luxurious stay in Busan, the Park Hyatt Busan is
    86.92s  user  발화 끝
    87.41s  ⚡SPAN 주입 [d'=0.70s / d_lead=9.54s]: (tool result) {"results": [{"name": "Park Hyatt Busan", "address": "31
    96.33s  user  발화 시작: That sounds lovely. Thank you, Buus.
    96.39s  agent 발화 끝
    98.35s  user  발화 끝
    98.50s  agent 발화 시작: You’re very welcome. Remember, small, focused steps create l
   104.80s  agent 발화 끝
