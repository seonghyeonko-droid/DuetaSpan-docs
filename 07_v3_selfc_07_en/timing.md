# v3_selfc_07_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_selfc_07",
#     "name": "Dylan",
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
#       "date": "2026-02-28",
#       "category": "trip",
#       "text": "User is planning a trip to Kyoto in May."
#     },
#     {
#       "date": "2026-02-12",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is sushi."
#     },
#     {
#       "date": "2025-10-13",
#       "category": "diet",
#       "text": "User is pescatarian."
#     },
#     {
#       "date": "2025-10-12",
#       "category": "pet",
#       "text": "User has a Golden Retriever named Max."
#     },
#     {
#       "date": "2025-08-18",
#       "category": "hobby",
#       "text": "User is into alpine wildflower photography."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-03-05",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2025-10-10",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2025-09-27",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: Book two bus tickets from Dallas, Texas to Houston, Texas fo
     5.55s  <ret> 발화 (turn1 첫 프레임)
     5.79s  agent 발화 시작: <ret> I’ve secured two bus tickets for you—
     5.79s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.53s]: (tool result) Confirmation: TX598LK3, departing 07/04/2026 at 12:00 PM
     5.79s  user  발화 끝
     8.33s  user  발화 시작: …does that bus have Wi-Fi?
     8.33s  agent 발화 끝
     9.98s  <ret> 발화 (turn3 첫 프레임)
    10.14s  agent 발화 시작: <ret> Greyhound buses on that route generally offer free Wi-
    10.14s  ⚡SPAN 주입 [d'=1.92s / d_lead=5.79s]: (tool result) Greyhound buses on the Dallas to Houston route generally
    10.14s  user  발화 끝
    15.93s  user  발화 시작: Yeah, yeah.
    15.93s  agent 발화 끝
    16.66s  agent 발화 시작: I’m glad I could help with that! Traveling can be so much sm
    16.66s  user  발화 끝
    23.90s  agent 발화 끝
