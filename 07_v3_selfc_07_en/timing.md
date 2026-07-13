# v3_selfc_07_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_selfc_07",
#     "name": "Alex",
#     "location": {
#       "city": "Toronto",
#       "country": "Canada",
#       "timezone": "America/Toronto (EST, UTC-5)",
#       "currency": "CAD ($)"
#     },
#     "nationality": "Canadian",
#     "gender": "non-binary",
#     "age_range": "late 20s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-14",
#       "category": "home",
#       "text": "User's home address is 44 Birch Road."
#     },
#     {
#       "date": "2026-06-03",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Ethiopian."
#     },
#     {
#       "date": "2025-12-14",
#       "category": "work",
#       "text": "User works as a nurse."
#     },
#     {
#       "date": "2025-08-11",
#       "category": "allergy",
#       "text": "User is allergic to penicillin."
#     },
#     {
#       "date": "2025-07-27",
#       "category": "diet",
#       "text": "User is gluten-free."
#     },
#     {
#       "date": "2025-06-12",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-11-21",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2025-10-18",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2025-10-09",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: I need to find a nice Italian restaurant nearby.
     3.59s  <ret> 발화 (turn1 첫 프레임)
     3.83s  agent 발화 시작: <ret> Trattoria La Luce is a popular choice, known for its a
     3.83s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.67s]: There are many Italian restaurants in Seoul, with Trattoria La Luce be
     3.83s  user  발화 끝
    11.50s  user  발화 시작: Uh-huh.
    11.50s  agent 발화 끝
    11.92s  user  발화 시작: Oh, uh, actually… Trattoria La Stella, that’s the one I mean
    11.92s  user  발화 끝
    16.45s  <ret> 발화 (turn4 첫 프레임)
    16.61s  agent 발화 시작: <ret> My apologies! Trattoria La Stella is at 27 Tojeong-ro,
    16.61s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.94s]: Trattoria La Stella is an Italian restaurant located at 27, Tojeong-ro
    16.61s  user  발화 끝
    25.55s  user  발화 시작: Could you reserve a table for two there for this Saturday ev
    25.55s  agent 발화 끝
    30.42s  <ret> 발화 (turn6 첫 프레임)
    30.66s  agent 발화 시작: <ret> I’ve reserved a table for two at Trattoria La Stella f
    30.66s  ⚡SPAN 주입 [d'=2.00s / d_lead=11.50s]: (tool result) Reservation confirmed at Trattoria La Stella for 2 peopl
    30.66s  user  발화 끝
    42.16s  agent 발화 끝
