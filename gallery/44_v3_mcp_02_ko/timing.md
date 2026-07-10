# v3_mcp_02_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mcp_02",
#     "name": "우우",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "40s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-10",
#       "category": "allergy",
#       "text": "User is allergic to shellfish."
#     },
#     {
#       "date": "2026-05-15",
#       "category": "hobby",
#       "text": "User is into rock climbing."
#     },
#     {
#       "date": "2026-04-07",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Ethiopian."
#     },
#     {
#       "date": "2026-03-27",
#       "category": "trip",
#       "text": "User is planning a trip to Switzerland in December."
#     },
#     {
#       "date": "2026-01-25",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2026-01-10",
#       "category": "work",
#       "text": "User works as a accountant."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-30",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 음… 공유 폴더에 있는 이미지…
     2.96s  user  발화 끝
     3.95s  user  발화 시작: …파일 정보 좀 알려줄 수 있어?
     5.22s  <ret> 발화 (turn2 첫 프레임)
     5.62s  agent 발화 시작: <ret> 네, 공유 폴더의 이미지 파일은 sunset.jpg이고, 크기는 이 점 삼메가바이트, JPEG 형
     5.62s  ⚡SPAN 주입 [d'=2.00s / d_lead=11.50s]: (tool result) sunset.jpg, 2.3MB, image/jpeg, 2026-07-09T18:52:30Z
     5.83s  user  발화 끝
    13.90s  user  발화 시작: 그치.
    14.36s  user  발화 끝
    17.07s  user  발화 시작: 아, 그리고 이번 주 토요일에 영화 예매 좀 해줘.
    17.12s  agent 발화 끝
    20.30s  agent 발화 시작: 이번 주 토요일 영화 예매를 도와드릴게요. 어떤 영화를 보고 싶으세요?
    20.31s  user  발화 끝
    24.69s  agent 발화 끝
