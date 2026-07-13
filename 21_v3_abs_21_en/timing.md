# v3_abs_21_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_abs_21",
#     "name": "Adam",
#     "location": {
#       "city": "Toronto",
#       "country": "Canada",
#       "timezone": "America/Toronto (EST, UTC-5)",
#       "currency": "CAD ($)"
#     },
#     "nationality": "Canadian",
#     "gender": "male",
#     "age_range": "40s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-24",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-02-01",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Ethiopian."
#     },
#     {
#       "date": "2025-10-01",
#       "category": "work",
#       "text": "User works as a nurse."
#     },
#     {
#       "date": "2025-09-16",
#       "category": "trip",
#       "text": "User is planning a trip to Kyoto in December."
#     },
#     {
#       "date": "2025-06-24",
#       "category": "home",
#       "text": "User's home address is 701 Elm Street."
#     },
#     {
#       "date": "2025-06-04",
#       "category": "hobby",
#       "text": "User is into rock climbing."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-11-10",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2025-07-24",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: What are the most common symptoms for men?
     3.21s  <ret> 발화 (turn1 첫 프레임)
     3.26s  agent 발화 시작: <ret> I'm sorry, but there isn't widely available informatio
     3.26s  user  발화 끝
     3.70s  ⚡SPAN 주입 [d'=0.49s / d_lead=5.29s]: (no information found)
     8.55s  user  발화 시작: …Is there anything about sleep problems, though?
     8.55s  agent 발화 끝
    11.40s  agent 발화 시작: Yes, certainly. Sleep disturbances are quite common, and can
    11.40s  user  발화 끝
    16.70s  user  발화 시작: Yeah.
    16.70s  agent 발화 끝
    17.11s  agent 발화 시작: Difficulty falling asleep, frequent waking during the night,
    17.11s  user  발화 끝
    25.25s  user  발화 시작: What can I do to improve my sleep quality?
    25.25s  agent 발화 끝
    28.92s  agent 발화 시작: Establishing a regular sleep schedule, creating a relaxing b
    28.92s  user  발화 끝
    36.65s  agent 발화 시작: Also, limiting caffeine and screen time before bed can make 
    36.65s  agent 발화 끝
    41.95s  user  발화 시작: Okay.
    41.95s  agent 발화 끝
    42.36s  agent 발화 시작: —and practicing relaxation techniques, like deep breathing, 
    42.36s  user  발화 끝
    52.54s  agent 발화 끝
