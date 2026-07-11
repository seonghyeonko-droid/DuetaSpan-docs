# v3_chain_06_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_chain_06",
#     "name": "윤은",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "late 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-03-03",
#       "category": "home",
#       "text": "User's home address is 서울 종로구 세종대로 175."
#     },
#     {
#       "date": "2026-01-17",
#       "category": "allergy",
#       "text": "User is allergic to cat dander."
#     },
#     {
#       "date": "2025-12-08",
#       "category": "work",
#       "text": "User works as a physical therapist."
#     },
#     {
#       "date": "2025-06-03",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-05-31",
#       "category": "hobby",
#       "text": "User is into birdwatching."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-03-07",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2025-10-06",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2025-10-04",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 이번 주 토요일에 두 명, 마운틴뷰 앰피씨어터 파크웨이 천육백번지로 택시 좀 불러줘.
     0.02s  <ret> 발화 (turn1 첫 프레임)
     0.26s  agent 발화 시작: <ret> 네, 마운틴뷰 앰피씨어터 파크웨이 천육백번지로 두 분 택시를 예약해 드렸어요. 예상 도착 시간은 
     0.26s  ⚡SPAN 주입 [d'=0.50s / d_lead=0.50s]: (tool result) {"ride id": "RIDE-789456", "status": "scheduled", "estim
     0.26s  user  발화 끝
     0.76s  user  발화 시작: 우와.
     0.76s  agent 발화 끝
     0.78s  agent 발화 시작: 혹시 다른 계획도 도와드릴까요? 주말 여행 계획을 세우는 것도 괜찮겠네요.
     0.78s  user  발화 끝
     1.00s  agent 발화 끝
