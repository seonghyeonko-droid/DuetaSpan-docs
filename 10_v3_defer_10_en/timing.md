# v3_defer_10_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_defer_10",
#     "name": "Julian",
#     "location": {
#       "city": "Paris",
#       "country": "France",
#       "timezone": "Europe/Paris (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "French",
#     "gender": "male",
#     "age_range": "late 20s",
#     "language": "French"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-05",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is sushi."
#     },
#     {
#       "date": "2026-04-03",
#       "category": "diet",
#       "text": "User is gluten-free."
#     },
#     {
#       "date": "2025-12-04",
#       "category": "home",
#       "text": "User's home address is 545 Birch Road."
#     },
#     {
#       "date": "2025-11-16",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2025-11-06",
#       "category": "pet",
#       "text": "User has a Corgi named Mochi."
#     },
#     {
#       "date": "2025-10-13",
#       "category": "allergy",
#       "text": "User is allergic to peanuts."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-02-24",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2026-01-16",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2025-10-23",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 What drama movies are playing at t | S2 Can you book me a ticket for the 4 | S3 Sure, take your time. | S4 Oh. Okay, let's do the 7:00 PM sho

     0.00s  user  발화 시작: What drama movies are playing at the AMC River East twenty-o
     4.40s  <ret> 발화 (turn1 첫 프레임)
     4.47s  agent 발화 시작: <ret> The AMC River East twenty-one in Chicago has showings 
     4.48s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.88s]: (tool result) The AMC River East 21 in Chicago is showing “Civil War”,
     4.49s  user  발화 끝
    12.36s  agent 발화 끝
    12.44s  user  발화 시작: What time is “Civil War” playing?
    14.32s  <ret> 발화 (turn3 첫 프레임)
    14.63s  agent 발화 시작: <ret> “Civil War” is playing at 1:30 PM, 4:15 PM, and 7:00 P
    14.64s  ⚡SPAN 주입 [d'=1.04s / d_lead=6.34s]: (tool result) “Civil War” is playing at AMC River East 21 in Chicago a
    14.84s  user  발화 끝
    18.90s  user  발화 시작: Uh-huh.
    19.48s  user  발화 끝
    20.81s  agent 발화 시작: It’s good to have options, isn’t it? Sometimes just knowing 
    20.97s  agent 발화 끝
    22.50s  user  발화 시작: Mm-hmm.
    22.94s  user  발화 끝
    26.04s  agent 발화 끝
    27.30s  user  발화 시작: Can you book me a ticket for the 4:15 showing?
    29.52s  <ret> 발화 (turn8 첫 프레임)
    29.83s  agent 발화 시작: <ret> Give me a moment while I check ticket availability for
    29.84s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.35s]: (no information found)
    30.02s  user  발화 끝
    34.18s  agent 발화 끝
    35.35s  user  발화 시작: Sure, take your time.
    36.77s  user  발화 끝
    36.93s  agent 발화 시작: It can be helpful to slow down, even when we’re trying to ge
    39.87s  ⚡지연 SPAN 주입(선제발표 직전): The 4:15 PM showing of “Civil War” at AMC River East 21 in Chicago is 
    40.73s  agent 발화 시작: <ret> I’m so sorry, but it appears that the 4:15 PM showing 
    40.86s  agent 발화 끝
    51.46s  user  발화 시작: Oh. Okay, let's do the 7:00 PM showing then.
    51.53s  agent 발화 끝
    55.21s  <ret> 발화 (turn13 첫 프레임)
    55.37s  agent 발화 시작: <ret> Your ticket for the 7:00 PM showing is confirmed, with
    55.37s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.15s]: (tool result) Your ticket for “Civil War” at AMC River East 21 in Chic
    55.44s  user  발화 끝
    65.52s  agent 발화 끝
