# v3_selfc_07_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_selfc_07",
#     "name": "Rennora",
#     "location": {
#       "city": "Tokyo",
#       "country": "Japan",
#       "timezone": "Asia/Tokyo (JST, UTC+9)",
#       "currency": "JPY (¥)"
#     },
#     "nationality": "Japanese",
#     "gender": "female",
#     "age_range": "50s",
#     "language": "Japanese"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-17",
#       "category": "trip",
#       "text": "User is planning a trip to Switzerland in March."
#     },
#     {
#       "date": "2026-03-25",
#       "category": "allergy",
#       "text": "User is allergic to penicillin."
#     },
#     {
#       "date": "2026-02-05",
#       "category": "pet",
#       "text": "User has a Siamese cat named Bella."
#     },
#     {
#       "date": "2026-01-17",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-08-02",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2026-07-09",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2026-04-23",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Set up a viewing for me at The Gra | S2 [laugh] That’s good to know. What’ | S3 That bus line sounds convenient. I | S4 Good point. I'll make one. Thanks,

     0.00s  user  발화 시작: Set up a viewing for me at The Grandview Lofts on June fifte
     3.54s  <ret> 발화 (turn1 첫 프레임)
     3.77s  agent 발화 시작: <ret> Certainly. Let's find a time that works for a viewing 
     3.98s  user  발화 끝
     5.06s  ⚡SPAN 주입 [d'=1.52s / d_lead=5.18s]: (tool result) Viewing scheduled; property: The Grandview Lofts, date: 
     8.78s  agent 발화 시작: I’ve scheduled a viewing for you at The Grandview Lofts on J
     8.95s  agent 발화 끝
    16.10s  agent 발화 끝
    16.16s  user  발화 시작: That’s good, but— uh, actually, make that June sixteenth.
    20.04s  <ret> 발화 (turn4 첫 프레임)
    20.20s  agent 발화 시작: <ret> No problem at all. Let’s reschedule for June sixteenth
    20.32s  user  발화 끝
    21.00s  ⚡SPAN 주입 [d'=0.96s / d_lead=4.76s]: (tool result) Viewing rescheduled; property: The Grandview Lofts, date
    24.82s  agent 발화 시작: Wonderful! Your viewing is now set for June sixteenth at ten
    24.96s  agent 발화 끝
    31.68s  agent 발화 끝
    32.78s  user  발화 시작: Is Sarah Chen the listing agent?
    34.83s  agent 발화 시작: Yes, Sarah Chen is the listing agent for The Grandview Lofts
    35.00s  user  발화 끝
    39.02s  user  발화 시작: [laugh] That’s good to know. What’s the pet policy there?
    39.46s  agent 발화 끝
    41.98s  <ret> 발화 (turn9 첫 프레임)
    42.14s  agent 발화 시작: <ret> Let me check the pet policy for The Grandview Lofts.
    42.34s  user  발화 끝
    43.98s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.37s]: (tool result) Pet policy: cats and dogs allowed, weight limit 50lbs, o
    45.51s  agent 발화 시작: Cats and dogs are allowed, with a fifty-pound weight limit a
    45.51s  agent 발화 끝
    52.97s  agent 발화 끝
    54.56s  user  발화 시작: Fifty pounds…that works. How about parking?
    58.36s  <ret> 발화 (turn12 첫 프레임)
    58.52s  agent 발화 시작: <ret> Let's see about the parking situation at The Grandview
    58.63s  user  발화 끝
    60.36s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.35s]: (tool result) Parking: assigned spots, monthly fee $150, availability 
    62.83s  agent 발화 시작: Parking is assigned, with a monthly fee of one hundred and f
    62.87s  agent 발화 끝
    66.83s  user  발화 시작: Right.
    67.55s  user  발화 끝
    70.14s  user  발화 시작: Hmm, limited availability is a bit concerning. Is there publ
    70.14s  agent 발화 끝
    75.26s  <ret> 발화 (turn16 첫 프레임)
    75.50s  agent 발화 시작: <ret> Absolutely, let me check the public transport options 
    75.61s  user  발화 끝
    77.26s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.02s]: (tool result) Nearby transit: bus line 27 (2 min walk), subway station
    81.51s  agent 발화 시작: There’s a bus line, number twenty-seven, a two-minute walk a
    81.52s  agent 발화 끝
    88.95s  user  발화 시작: That bus line sounds convenient. Is there a grocery store wi
    89.15s  agent 발화 끝
    95.18s  <ret> 발화 (turn19 첫 프레임)
    95.20s  user  발화 끝
    95.42s  agent 발화 시작: <ret> Let's find out about grocery stores close to The Grand
    97.10s  ⚡SPAN 주입 [d'=1.92s / d_lead=4.35s]: (tool result) Grocery stores: Fresh Foods Market (5 min walk), City Gr
    99.76s  agent 발화 시작: Fresh Foods Market is a five-minute walk, and City Grocer is
    99.78s  agent 발화 끝
   105.83s  agent 발화 끝
   106.81s  user  발화 시작: Perfect. This is all really helpful, actually.
   109.59s  user  발화 끝
   109.96s  agent 발화 시작: [happy] I'm so glad I could help! It sounds like The Grandvi
   115.71s  agent 발화 끝
   115.78s  user  발화 시작: I think so too. Do you think I should bring anything to the 
   119.33s  agent 발화 시작: That’s a thoughtful question. Bringing a list of questions i
   119.40s  user  발화 끝
   122.75s  user  발화 시작: Uh-huh.
   123.39s  user  발화 끝
   125.25s  agent 발화 끝
   125.55s  user  발화 시작: Good point. I'll make one. Thanks, Tellar.
   128.19s  agent 발화 시작: You're very welcome. I’m here if anything else comes to mind
   128.27s  user  발화 끝
   132.27s  user  발화 시작: Yeah.
   133.09s  user  발화 끝
   133.83s  agent 발화 끝
   133.87s  user  발화 시작: I appreciate it. I think I'm all set for now.
   136.78s  user  발화 끝
   136.86s  agent 발화 시작: Excellent. Wishing you a productive viewing on June sixteent
   141.50s  agent 발화 끝
