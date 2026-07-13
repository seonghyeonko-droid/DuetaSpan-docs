# v3_pause_16_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_pause_16",
#     "name": "Kim",
#     "location": {
#       "city": "San Francisco",
#       "country": "United States",
#       "timezone": "America/Los_Angeles (PST, UTC-8)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "non-binary",
#     "age_range": "40s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-08",
#       "category": "diet",
#       "text": "User is gluten-free."
#     },
#     {
#       "date": "2025-08-28",
#       "category": "pet",
#       "text": "User has a Corgi named Mochi."
#     },
#     {
#       "date": "2025-07-17",
#       "category": "allergy",
#       "text": "User is allergic to shellfish."
#     },
#     {
#       "date": "2025-06-17",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Mexican."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-06-28",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2025-06-21",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Hey Morara, I was just wondering… | S2 Well, I was thinking maybe somethi | S3 Oh, that sounds perfect! Can you c | S4 …a reservation for four people the

     0.00s  user  발화 시작: Hey Morara, I was just wondering…
     2.08s  <ret> 발화 (turn1 첫 프레임)
     2.40s  agent 발화 시작: <ret> Oh, that's a fun question! Sam Elliott actually voiced
     2.40s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.80s]: Sam Elliott voiced Butch, the Tyrannosaurus rex, in Disney•Pixar’s 201
     2.40s  user  발화 끝
    13.20s  user  발화 시작: Wow, really? I wouldn’t have guessed that!
    13.20s  agent 발화 끝
    16.01s  agent 발화 시작: It's a bit of a surprising choice, I think, which is part of
    16.01s  user  발화 끝
    25.21s  user  발화 시작: [happy] I love that movie! Do you have any favorite dinosaur
    25.21s  agent 발화 끝
    30.01s  agent 발화 시작: That's wonderful to hear! As for me, I don’t really *have* f
    30.01s  user  발화 끝
    39.21s  user  발화 시작: Yeah, yeah.
    39.21s  agent 발화 끝
    40.01s  user  발화 시작: Hmm, yeah, that's a good one. I’m planning a movie night thi
    40.01s  user  발화 끝
    45.22s  agent 발화 시작: Oh, that sounds like a lovely plan! What kind of movies are 
    45.22s  user  발화 끝
    51.62s  user  발화 시작: Well, I was thinking maybe something with dinosaurs, but als
    51.62s  agent 발화 끝
    55.62s  user  발화 시작: …something not *too* scary. My little cousin is coming.
    55.62s  user  발화 끝
    59.22s  agent 발화 시작: That’s very considerate of you! Finding the right balance is
    59.22s  user  발화 끝
    63.62s  user  발화 시작: Exactly! So, uh, can you search for family-friendly dinosaur
    63.62s  agent 발화 끝
    67.22s  <ret> 발화 (turn13 첫 프레임)
    67.62s  agent 발화 시작: <ret> I found "Dinosaur," a Disney film from 2000, which Com
    67.62s  ⚡SPAN 주입 [d'=2.00s / d_lead=13.20s]: (tool result) "Dinosaur" (2000) is a 2000 American computer-animated a
    67.62s  user  발화 끝
    80.83s  user  발화 시작: Wow.
    80.83s  agent 발화 끝
    81.23s  user  발화 시작: Oh, that sounds perfect! Can you check the showtimes for it 
    81.23s  user  발화 끝
    86.03s  agent 발화 시작: I'm happy to help! But, to check showtimes, I need to know y
    86.03s  user  발화 끝
    94.03s  user  발화 시작: Oh, right! Sorry. It's Seoul, South Korea.
    94.03s  agent 발화 끝
    96.76s  <ret> 발화 (turn18 첫 프레임)
    96.84s  agent 발화 시작: <ret> I’m sorry, I wasn’t able to find any current showtimes
    96.84s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.60s]: (no information found)
    96.84s  user  발화 끝
   106.44s  user  발화 시작: [sigh] Oh, that's too bad. Okay, new plan. What about findin
   106.44s  agent 발화 끝
   112.52s  <ret> 발화 (turn20 첫 프레임)
   112.84s  agent 발화 시작: <ret> I found Han Cook, a Korean restaurant in Seoul, with a
   112.84s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.20s]: (tool result) [Restaurant Name: Han Cook, Cuisine: Korean, Rating: 4.5
   112.84s  user  발화 끝
   122.04s  user  발화 시작: That sounds lovely! Can you make…
   122.04s  agent 발화 끝
   124.45s  user  발화 시작: …a reservation for four people there…
   124.45s  user  발화 끝
   126.85s  user  발화 시작: …this Saturday at 6 PM?
   126.85s  user  발화 끝
   128.45s  <ret> 발화 (turn24 첫 프레임)
   128.85s  agent 발화 시작: <ret> Wonderful! I’ve made a reservation at Han Cook for fou
   128.85s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.40s]: (tool result) Reservation confirmed at Han Cook for 4 people on July 1
   128.85s  user  발화 끝
   137.25s  user  발화 시작: Perfect! You're a lifesaver, Morara.
   137.25s  agent 발화 끝
   139.25s  agent 발화 시작: I'm so glad I could help! Building happy memories with famil
   139.25s  user  발화 끝
   146.45s  agent 발화 끝
