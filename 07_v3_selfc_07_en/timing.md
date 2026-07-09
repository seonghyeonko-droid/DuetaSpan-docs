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

# EXAMINER(FDB-v2) 단계: S1 Set up a viewing for me at The Gra | S2 Let’s go with 3:15. | S3 I’m a little anxious about the who | S4 That’s… actually helpful. Thank yo

     0.00s  user  발화 시작: Set up a viewing for me at The Grandview Lofts on June fifte
     3.71s  <ret> 발화 (turn1 첫 프레임)
     3.94s  agent 발화 시작: <ret> Certainly, I can help with that.
     4.16s  user  발화 끝
     4.67s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.12s]: (tool result) A viewing at The Grandview Lofts is available on June fi
     5.90s  agent 발화 시작: I’ve scheduled a viewing for you at The Grandview Lofts on J
     6.05s  agent 발화 끝
    11.91s  agent 발화 끝
    12.07s  user  발화 시작: That’s… actually, could we do it on June sixteenth instead?
    16.04s  <ret> 발화 (turn4 첫 프레임)
    16.19s  agent 발화 시작: <ret> [laugh] No problem at all, let’s change that date.
    16.33s  user  발화 끝
    17.00s  ⚡SPAN 주입 [d'=0.96s / d_lead=4.45s]: (tool result) A viewing at The Grandview Lofts is available on June si
    20.49s  agent 발화 시작: The Grandview Lofts has openings on June sixteenth at 10:00 
    20.64s  agent 발화 끝
    25.98s  user  발화 시작: Mm-hmm.
    26.66s  user  발화 끝
    28.87s  user  발화 시작: Let’s go with 3:15.
    28.88s  agent 발화 끝
    30.50s  <ret> 발화 (turn8 첫 프레임)
    30.73s  agent 발화 시작: <ret> Excellent choice.
    30.81s  user  발화 끝
    31.00s  ⚡SPAN 주입 [d'=0.50s / d_lead=1.42s]: (tool result) Your viewing at The Grandview Lofts is confirmed for Jun
    31.98s  agent 발화 시작: Your viewing is confirmed for June sixteenth at 3:15 PM. You
    32.15s  agent 발화 끝
    38.12s  user  발화 시작: Yeah, yeah.
    39.83s  user  발화 끝
    41.05s  agent 발화 시작: It’s wonderful you’re taking this step, and a new home can b
    41.16s  agent 발화 끝
    46.75s  agent 발화 끝
    48.91s  user  발화 시작: I’m a little anxious about the whole process, honestly.
    51.86s  user  발화 끝
    52.26s  agent 발화 시작: That's perfectly normal. Transitions often stir up a mix of 
    58.23s  agent 발화 끝
    59.11s  user  발화 시작: I— I mean, what if I don't like it?
    61.04s  user  발화 끝
    61.05s  agent 발화 시작: It’s okay to have those “what ifs.” Exploring those feelings
    68.86s  agent 발화 시작: Sometimes, visualizing success can ease anxiety too.
    69.03s  agent 발화 끝
    71.78s  user  발화 시작: Uh-huh.
    72.27s  user  발화 끝
    73.74s  user  발화 시작: That’s… actually helpful. Thank you.
    73.91s  agent 발화 끝
    76.29s  user  발화 끝
    76.64s  agent 발화 시작: You're very welcome. I'm glad I could offer a little support
    84.20s  agent 발화 끝
