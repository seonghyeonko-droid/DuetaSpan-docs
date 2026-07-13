# v3_selfc_08_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_selfc_08",
#     "name": "Felix",
#     "location": {
#       "city": "London",
#       "country": "United Kingdom",
#       "timezone": "Europe/London (GMT, UTC+0)",
#       "currency": "GBP (£)"
#     },
#     "nationality": "British",
#     "gender": "male",
#     "age_range": "late 20s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-04",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-05-23",
#       "category": "home",
#       "text": "User's home address is 669 Elm Street."
#     },
#     {
#       "date": "2026-05-22",
#       "category": "allergy",
#       "text": "User is allergic to penicillin."
#     },
#     {
#       "date": "2026-03-19",
#       "category": "work",
#       "text": "User works as a software engineer."
#     },
#     {
#       "date": "2025-12-19",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Mexican."
#     },
#     {
#       "date": "2025-12-06",
#       "category": "hobby",
#       "text": "User is into alpine wildflower photography."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-01-20",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2026-01-14",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2025-12-16",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Please wrap up code generation and | S2 Hmm, I was actually hoping for som | S3 What time does Bella Notte close t | S4 …for two at eight thirty?

     0.00s  user  발화 시작: Please wrap up code generation and create the test file for 
     5.56s  <ret> 발화 (turn1 첫 프레임)
     5.94s  agent 발화 시작: <ret> Okay, I’ve created the test file, ‘test_bee_123.py’, f
     5.94s  user  발화 끝
     6.07s  ⚡SPAN 주입 [d'=0.51s / d_lead=7.42s]: (tool result) File 'test bee_123.py' created successfully.
    13.36s  user  발화 시작: Great. And can you find me restaurants nearby that have outd
    13.36s  agent 발화 끝
    17.73s  <ret> 발화 (turn4 첫 프레임)
    17.82s  agent 발화 시작: Yeah.
    17.82s  user  발화 끝
    18.19s  agent 발화 시작: <ret> [happy] Certainly! There are a couple of options nearb
    18.19s  agent 발화 끝
    18.75s  ⚡SPAN 주입 [d'=1.03s / d_lead=9.28s]: Restaurants with outdoor seating near you include 'The Garden Bistro' 
    27.47s  user  발화 시작: The Garden Bistro sounds nice. What's their address?
    27.47s  agent 발화 끝
    30.02s  <ret> 발화 (turn6 첫 프레임)
    30.38s  ⚡SPAN 주입 [d'=0.84s / d_lead=7.05s]: The Garden Bistro is located at 12 Oak Street, Anytown, USA.
    30.44s  agent 발화 시작: <ret> The Garden Bistro is at twelve Oak Street in Anytown. 
    30.44s  user  발화 끝
    37.49s  user  발화 시작: Hmm, I was actually hoping for something a little more… uh, 
    37.49s  agent 발화 끝
    41.95s  agent 발화 시작: I understand—
    41.95s  user  발화 끝
    42.69s  user  발화 시작: …do you know if there are any Italian places with outdoor se
    42.69s  agent 발화 끝
    48.56s  <ret> 발화 (turn11 첫 프레임)
    48.63s  agent 발화 시작: Right.
    48.63s  user  발화 끝
    49.00s  agent 발화 시작: <ret> There’s Bella Notte, an Italian restaurant with outdoo
    49.00s  agent 발화 끝
    49.31s  ⚡SPAN 주입 [d'=0.92s / d_lead=8.54s]: (tool result) 'Bella Notte' is an Italian restaurant with outdoor seat
    57.54s  user  발화 시작: Mm-hmm.
    57.54s  agent 발화 끝
    57.91s  user  발화 시작: What time does Bella Notte close tonight?
    57.91s  user  발화 끝
    60.16s  <ret> 발화 (turn14 첫 프레임)
    60.45s  ⚡SPAN 주입 [d'=0.63s / d_lead=8.54s]: Bella Notte closes at 10:00 PM tonight.
    60.51s  agent 발화 시작: <ret> Bella Notte closes at ten PM tonight. They usually get
    60.51s  user  발화 끝
    69.05s  user  발화 시작: Yeah.
    69.05s  agent 발화 끝
    69.42s  user  발화 시작: Could you reserve a table…
    69.42s  user  발화 끝
    71.27s  user  발화 시작: …for two at eight thirty?
    71.27s  user  발화 끝
    73.13s  agent 발화 시작: Yeah.
    73.13s  user  발화 끝
    73.26s  <ret> 발화 (turn19 첫 프레임)
    73.50s  agent 발화 시작: <ret> Your reservation for two at Bella Notte is confirmed f
    73.50s  agent 발화 끝
    73.81s  ⚡SPAN 주입 [d'=1.50s / d_lead=6.68s]: (tool result) Reservation confirmed for two at Bella Notte at 8:30 PM.
    80.18s  user  발화 시작: Nice.
    80.18s  agent 발화 끝
    80.55s  user  발화 시작: Perfect. And can you add a reminder to my calendar for that 
    80.55s  user  발화 끝
    84.76s  <ret> 발화 (turn22 첫 프레임)
    85.38s  agent 발화 시작: <ret> [happy] Of course! I’ve set an alarm for eight fifteen
    85.38s  user  발화 끝
    85.58s  ⚡SPAN 주입 [d'=0.82s / d_lead=9.65s]: (tool result) Alarm set for 8:15 PM with message: "Bella Notte reserva
    95.03s  agent 발화 끝
