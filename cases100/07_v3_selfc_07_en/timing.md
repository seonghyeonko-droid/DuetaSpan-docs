# v3_selfc_07_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_selfc_07",
#     "name": "Nathan",
#     "location": {
#       "city": "New York",
#       "country": "United States",
#       "timezone": "America/New_York (EST, UTC-5)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "male",
#     "age_range": "late 40s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-01",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Vietnamese."
#     },
#     {
#       "date": "2026-04-28",
#       "category": "bloodtype",
#       "text": "User's blood type is O-."
#     },
#     {
#       "date": "2026-04-27",
#       "category": "learning",
#       "text": "User is learning Spanish."
#     },
#     {
#       "date": "2026-04-08",
#       "category": "dislike",
#       "text": "User can't stand durian."
#     },
#     {
#       "date": "2026-03-13",
#       "category": "streaming",
#       "text": "User subscribes to a shared Netflix family plan."
#     },
#     {
#       "date": "2026-02-17",
#       "category": "work",
#       "text": "User works as a marketing manager."
#     },
#     {
#       "date": "2025-12-31",
#       "category": "temp",
#       "text": "User keeps the home thermostat around 19°C."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-19",
#       "title": "Booking a Japan trip",
#       "bullets": [
#         "5 nights in Kyoto and Osaka in October",
#         "wants a JR Pass and a ryokan for one night"
#       ]
#     },
#     {
#       "date": "2026-03-23",
#       "title": "Booking a moving company",
#       "bullets": [
#         "moving a 2-bedroom apartment across town on the 30th",
#         "needs help disassembling furniture"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 I need to book a hotel in Seoul fo | S2 Yes, that’s correct. | S3 …What are its opening hours? | S4 That sounds great. Actually, maybe

     0.00s  user  발화 시작: I need to book a hotel in Seoul for next week.
     2.87s  user  발화 끝
     3.02s  agent 발화 시작: Okay, I can help with that. What dates are you looking at?
     5.34s  agent 발화 끝
     5.66s  user  발화 시작: July 15th to July 18th.
     8.06s  user  발화 끝
     8.18s  agent 발화 시작: And how many guests will be staying?
     9.09s  user  발화 시작: Yeah.
     9.54s  user  발화 시작: Just one.
     9.68s  user  발화 끝
     9.91s  agent 발화 끝
    10.17s  <ret> 발화 (turn6 첫 프레임)
    10.29s  agent 발화 시작: <ret> I found two options for you. The Shilla Seoul is price
    10.30s  user  발화 끝
    11.23s  ⚡SPAN 주입 [d'=1.07s / d_lead=12.04s]: (tool result) {"hotels": [{"name": "The Shilla Seoul", "address": "249
    15.62s  user  발화 시작: Mm-hmm.
    16.38s  user  발화 끝
    22.26s  user  발화 시작: The Shilla Seoul sounds nice. Can you reserve a room there?
    22.33s  agent 발화 끝
    25.54s  user  발화 끝
    25.73s  agent 발화 시작: Just to confirm, that’s The Shilla Seoul, July 15th to 18th,
    29.30s  user  발화 시작: Yeah.
    30.02s  user  발화 끝
    30.70s  agent 발화 끝
    30.76s  user  발화 시작: Yes, that’s correct.
    32.40s  <ret> 발화 (turn12 첫 프레임)
    32.62s  agent 발화 시작: <ret> Your reservation at The Shilla Seoul is confirmed! The
    32.64s  user  발화 끝
    33.00s  ⚡SPAN 주입 [d'=0.60s / d_lead=8.32s]: (tool result) The Shilla Seoul, Seoul, 2026-07-15, 2026-07-18, 1 guest
    35.38s  user  발화 시작: Yeah.
    36.11s  user  발화 끝
    40.94s  agent 발화 끝
    41.19s  user  발화 시작: Great! I’m also planning to visit some museums while I'm the
    45.38s  <ret> 발화 (turn15 첫 프레임)
    45.46s  agent 발화 시작: <ret> Museums are a wonderful way to experience a city— Seou
    45.48s  user  발화 끝
    46.72s  ⚡SPAN 주입 [d'=1.34s / d_lead=3.58s]: Seoul has the National Museum of Korea, showcasing Korean art and hist
    59.69s  user  발화 시작: The National Museum sounds perfect.…
    59.78s  agent 발화 끝
    62.18s  user  발화 끝
    63.83s  <ret> 발화 (turn18 첫 프레임)
    64.16s  user  발화 시작: …What are its opening hours?
    65.83s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.50s]: (tool result) The National Museum of Korea is open from 10:00 AM to 6:
    65.89s  agent 발화 시작: <ret> The National Museum of Korea is open from ten AM to si
    65.95s  user  발화 끝
    73.39s  agent 발화 끝
    73.51s  user  발화 시작: That’s good to know. I also need to find a good restaurant n
    77.82s  user  발화 끝
    77.98s  agent 발화 시작: I can certainly help with that. What kind of cuisine are you
    81.47s  agent 발화 끝
    81.60s  user  발화 시작: Korean food, preferably something authentic.
    84.08s  <ret> 발화 (turn22 첫 프레임)
    84.79s  user  발화 끝
    85.07s  ⚡SPAN 주입 [d'=0.99s / d_lead=9.78s]: Gogung Myeongdong (37.5659, 126.9799) serves traditional Korean cuisin
    85.13s  agent 발화 시작: <ret> Gogung Myeongdong serves traditional Korean cuisine an
    94.91s  agent 발화 끝
    96.29s  user  발화 시작: That sounds great. Actually, maybe something a little less t
   101.43s  user  발화 끝
   101.55s  agent 발화 시작: I understand. You’d prefer a less crowded, more local experi
   104.78s  user  발화 시작: …do you know of any hidden gem restaurants, somewhere the lo
   105.48s  agent 발화 끝
   108.12s  <ret> 발화 (turn26 첫 프레임)
   109.22s  user  발화 끝
   109.49s  ⚡SPAN 주입 [d'=1.37s / d_lead=8.23s]: Hwangsaengga Kalguksu (37.5608, 126.9841) is a popular local spot know
   109.55s  agent 발화 시작: <ret> Hwangsaengga Kalguksu is a popular local spot, favored
   117.78s  agent 발화 끝
   118.20s  user  발화 시작: Perfect! That’s exactly what I was looking for. Thanks!
   121.99s  agent 발화 시작: [happy] You're very welcome! I'm glad I could help you find 
   121.99s  user  발화 끝
   125.61s  agent 발화 끝
