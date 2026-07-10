# v3_chain_05_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_chain_05",
#     "name": "Casey",
#     "location": {
#       "city": "San Francisco",
#       "country": "United States",
#       "timezone": "America/Los_Angeles (PST, UTC-8)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "non-binary",
#     "age_range": "late 20s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-02-08",
#       "category": "work",
#       "text": "User works as a software engineer."
#     },
#     {
#       "date": "2025-10-24",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2025-10-16",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Ethiopian."
#     },
#     {
#       "date": "2025-09-29",
#       "category": "trip",
#       "text": "User is planning a trip to New Zealand in December."
#     },
#     {
#       "date": "2025-06-16",
#       "category": "pet",
#       "text": "User has a Corgi named Mochi."
#     },
#     {
#       "date": "2025-06-01",
#       "category": "hobby",
#       "text": "User is into marathon training."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-13",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2026-04-19",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2026-04-02",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 What’s the price range at Zuni Caf | S2 Seven thirty. | S3 Hmm, Spalding— | S4 Yes, exactly.

     0.00s  user  발화 시작: What’s the price range at Zuni Cafe?
     1.90s  <ret> 발화 (turn1 첫 프레임)
     2.13s  agent 발화 시작: <ret> Zuni Cafe is in the moderate price range. It’s a popul
     2.31s  user  발화 끝
     3.10s  ⚡SPAN 주입 [d'=1.20s / d_lead=6.67s]: (tool result) $$ (moderate)
     4.48s  user  발화 시작: Uh-huh.
     4.93s  user  발화 끝
     8.80s  agent 발화 끝
     9.56s  user  발화 시작: Oh, good to know. And what’s the address?
    12.16s  <ret> 발화 (turn4 첫 프레임)
    12.39s  agent 발화 시작: <ret> The address is 1658 Market Street, San Francisco. It’s
    12.52s  user  발화 끝
    12.66s  ⚡SPAN 주입 [d'=0.50s / d_lead=6.30s]: (tool result) 1658 Market St, San Francisco, CA 94102, United States
    18.63s  user  발화 시작: Do they take reservations?
    18.69s  agent 발화 끝
    20.21s  <ret> 발화 (turn6 첫 프레임)
    20.24s  user  발화 끝
    20.37s  agent 발화 시작: <ret> Yes, reservations are recommended at Zuni Cafe. It get
    21.41s  ⚡SPAN 주입 [d'=1.20s / d_lead=5.09s]: (tool result) Reservations recommended
    22.22s  user  발화 시작: Right.
    22.85s  user  발화 끝
    25.46s  agent 발화 끝
    26.82s  user  발화 시작: Okay, can you book a table for two on Friday?
    29.19s  agent 발화 시작: To confirm, Friday of this week? And what time would you pre
    29.41s  user  발화 끝
    31.33s  user  발화 시작: Yeah.
    31.83s  user  발화 끝
    33.86s  agent 발화 끝
    34.58s  user  발화 시작: Seven thirty.
    35.36s  <ret> 발화 (turn12 첫 프레임)
    35.59s  agent 발화 시작: <ret> I’ve booked a table for two at Zuni Cafe on Friday at 
    35.59s  user  발화 끝
    36.72s  ⚡SPAN 주입 [d'=1.36s / d_lead=7.97s]: (tool result) Confirmed: Zuni Cafe, July 10, 7:30 PM, party of 2, ID: 
    39.51s  user  발화 시작: Yeah.
    40.01s  user  발화 끝
    43.40s  user  발화 시작: Perfect.
    43.56s  agent 발화 끝
    44.08s  agent 발화 시작: I’m glad I could assist with that. It's a lovely place to un
    44.18s  user  발화 끝
    50.96s  user  발화 시작: Actually, is there a good jazz club nearby?
    50.98s  agent 발화 끝
    53.11s  <ret> 발화 (turn17 첫 프레임)
    53.42s  agent 발화 시작: <ret> SFJAZZ Center is 780 meters away. Grant & Green is 1.1
    53.68s  user  발화 끝
    55.11s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.48s]: (tool result) SFJAZZ Center (780 m), Grant & Green (1.1 km), Bissap Ba
    63.90s  agent 발화 끝
    64.40s  user  발화 시작: SFJAZZ sounds good. What’s their schedule like for Friday?
    67.84s  <ret> 발화 (turn19 첫 프레임)
    68.24s  agent 발화 시작: <ret> Esperanza Spalding plays at 8:00 PM on Friday. Theo Cr
    68.29s  user  발화 끝
    69.84s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.19s]: (tool result) July 10, 8:00 PM: Esperanza Spalding; July 10, 10:30 PM:
    75.42s  agent 발화 끝
    75.57s  user  발화 시작: Hmm, Spalding—
    76.77s  user  발화 시작: …Can you check ticket prices for Spalding?
    76.99s  user  발화 끝
    78.77s  <ret> 발화 (turn22 첫 프레임)
    79.17s  agent 발화 시작: <ret> Tickets for Esperanza Spalding range from sixty-five t
    79.30s  user  발화 끝
    80.77s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.70s]: (tool result) Esperanza Spalding: $65 - $125
    84.86s  agent 발화 끝
    85.15s  user  발화 시작: Okay, let’s get two tickets for sixty-five dollars.
    87.76s  <ret> 발화 (turn24 첫 프레임)
    88.16s  agent 발화 시작: <ret> Two tickets for Esperanza Spalding at sixty-five dolla
    88.25s  user  발화 끝
    89.68s  ⚡SPAN 주입 [d'=1.92s / d_lead=7.42s]: (tool result) Confirmed: Esperanza Spalding, July 10, 2 tickets @ $65,
    95.57s  agent 발화 끝
    96.44s  user  발화 시작: Wonderful. And can you set a reminder for six thirty on Frid
   100.51s  user  발화 끝
   100.65s  agent 발화 시작: That’s to remind you about your dinner and the concert?
   102.11s  user  발화 시작: Yeah.
   102.60s  user  발화 끝
   103.60s  agent 발화 끝
   105.39s  user  발화 시작: Yes, exactly.
   106.19s  <ret> 발화 (turn29 첫 프레임)
   106.50s  agent 발화 시작: <ret> A reminder is set for 6:30 PM on Friday for your dinne
   106.77s  user  발화 끝
   108.19s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.55s]: (tool result) Reminder created: July 10, 6:30 PM, Zuni Cafe & SFJAZZ, 
   111.94s  user  발화 시작: Yeah.
   112.44s  user  발화 끝
   114.05s  agent 발화 끝
   114.20s  user  발화 시작: That’s great, thank you.
   115.41s  agent 발화 시작: You’re very welcome. A little planning can make all the diff
   115.63s  user  발화 끝
   121.06s  agent 발화 끝
   121.36s  user  발화 시작: It really does.
   122.38s  agent 발화 시작: I'm pleased I could help curate a relaxing Friday for you.
   122.54s  user  발화 끝
   123.56s  user  발화 시작: Right.
   124.24s  user  발화 끝
   126.39s  user  발화 시작: Yes, you’ve been very helpful.
   126.46s  agent 발화 끝
   127.99s  user  발화 끝
   128.40s  agent 발화 시작: Enjoy your trip.
   129.87s  agent 발화 끝
