# v3_selfc_07_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_selfc_07",
#     "name": "연훈",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "50s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-05",
#       "category": "pet",
#       "text": "User has a Corgi named Mochi."
#     },
#     {
#       "date": "2026-05-01",
#       "category": "work",
#       "text": "User works as a graduate student."
#     },
#     {
#       "date": "2026-04-04",
#       "category": "hobby",
#       "text": "User is into vintage synth collecting."
#     },
#     {
#       "date": "2025-12-17",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-10-06",
#       "category": "trip",
#       "text": "User is planning a trip to Kyoto in October."
#     },
#     {
#       "date": "2025-09-19",
#       "category": "diet",
#       "text": "User is vegetarian."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-12-27",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2025-09-08",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2025-08-09",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 부산에서 서울 가는 버스 티켓 두 장…
     2.73s  user  발화 끝
     4.77s  user  발화 시작: …삼월 십팔일 오후 네시 십오분으로 해주세요.
     8.00s  user  발화 끝
     8.01s  <ret> 발화 (turn2 첫 프레임)
     8.24s  agent 발화 시작: <ret> 부산에서 서울 가는 버스 티켓 두 장이 확인되었습니다. 확인 번호는 비 이 구 엑스 칠 큐이고, 
     8.25s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.99s]: (tool result) Confirmation: B29X7Q, 2 tickets, Busan to Seoul, March 1
    19.23s  agent 발화 끝
    19.61s  user  발화 시작: 아, 삼월 십팔일이 아니라 십구일로 바꿔주세요.
    21.86s  <ret> 발화 (turn4 첫 프레임)
    22.18s  agent 발화 시작: <ret> 네, 날짜를 삼월 십구일로 변경해 드렸습니다. 새로운 확인 번호는 와이 팔 일 제트 삼 피이고, 
    22.18s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.76s]: Confirmation: Y81Z3P, 2 tickets, Busan to Seoul, March 19, 2026, 4:15 
    22.19s  user  발화 끝
    30.93s  agent 발화 끝
