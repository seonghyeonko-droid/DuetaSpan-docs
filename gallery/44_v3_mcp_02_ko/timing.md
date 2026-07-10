# v3_mcp_02_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mcp_02",
#     "name": "다경",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "late 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-01-07",
#       "category": "pet",
#       "text": "User has a Golden Retriever named Max."
#     },
#     {
#       "date": "2025-12-30",
#       "category": "work",
#       "text": "User works as a graphic designer."
#     },
#     {
#       "date": "2025-11-13",
#       "category": "home",
#       "text": "User's home address is 대구 중구 동인동 88-1."
#     },
#     {
#       "date": "2025-08-25",
#       "category": "diet",
#       "text": "User is gluten-free."
#     },
#     {
#       "date": "2025-07-19",
#       "category": "hobby",
#       "text": "User is into birdwatching."
#     },
#     {
#       "date": "2025-07-07",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-12-11",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2025-10-19",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2025-06-17",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 음… 프로젝트랑 웹사이트 관련된 폴더를 하나씩 만들어 줄 수 있어?
     4.04s  <ret> 발화 (turn1 첫 프레임)
     4.44s  agent 발화 시작: <ret> 프로젝트 폴더를 만들었어요. 이제 웹사이트 폴더도 만들어 드릴까요?
     4.44s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.12s]: (tool result) Directory "projects" created successfully.
     4.53s  user  발화 끝
     8.44s  user  발화 시작: 응, 그 웹사이트 폴더는 프로젝트 폴더 안에 넣어줘.
     8.56s  agent 발화 끝
    11.55s  <ret> 발화 (turn3 첫 프레임)
    11.95s  agent 발화 시작: <ret> 프로젝트 폴더 안에 새로운 웹사이트 폴더를 만들었습니다.
    11.95s  ⚡SPAN 주입 [d'=1.12s / d_lead=3.38s]: (tool result) Directory "projects/new website" created successfully.
    12.00s  user  발화 끝
    15.33s  agent 발화 끝
