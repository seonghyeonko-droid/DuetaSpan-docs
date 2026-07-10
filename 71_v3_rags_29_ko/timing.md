# v3_rags_29_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rags_29",
#     "name": "준람",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "late 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-08",
#       "category": "diet",
#       "text": "User is pescatarian."
#     },
#     {
#       "date": "2026-05-12",
#       "category": "work",
#       "text": "User works as a graphic designer."
#     },
#     {
#       "date": "2026-05-06",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-11-24",
#       "category": "hobby",
#       "text": "User is into marathon training."
#     },
#     {
#       "date": "2025-09-06",
#       "category": "trip",
#       "text": "User is planning a trip to New Zealand in March."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-12-14",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2025-10-31",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 혹시 식스 플래그 캘리포니아에 놀이기구가 몇 개 있는지 알 수 있을까요?
     5.03s  <ret> 발화 (turn1 첫 프레임)
     5.19s  agent 발화 시작: <ret> 놀이기구는 총 마흔세 개가 있어요. 롤러코스터나 가족용, 워터파크 놀이기구도 다 포함된 숫자랍니다
     5.19s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.63s]: Six Flags California has forty-three rides, including roller coasters,
     5.37s  user  발화 끝
    11.81s  agent 발화 끝
