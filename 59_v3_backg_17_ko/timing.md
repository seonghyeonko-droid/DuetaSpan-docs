# v3_backg_17_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_backg_17",
#     "name": "Remy",
#     "location": {
#       "city": "Sydney",
#       "country": "Australia",
#       "timezone": "Australia/Sydney (AEDT, UTC+11)",
#       "currency": "AUD ($)"
#     },
#     "nationality": "Australian",
#     "gender": "non-binary",
#     "age_range": "early 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-21",
#       "category": "hobby",
#       "text": "User is into alpine wildflower photography."
#     },
#     {
#       "date": "2026-06-19",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2026-02-17",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Korean BBQ."
#     },
#     {
#       "date": "2026-01-27",
#       "category": "work",
#       "text": "User works as a architect."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-07-10",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2026-03-26",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 혹시 건강한 사람의 평균 심박수가 어떻게 돼요?
     2.45s  <ret> 발화 (turn1 첫 프레임)
     2.61s  agent 발화 시작: <ret> 네, 건강한 분들의 심박수에 대해 알려드릴게요. 건강한 성인의 정상적인 안정 시 심박수는 분당 오
     2.86s  user  발화 끝
     2.95s  ⚡SPAN 주입 [d'=0.50s / d_lead=2.81s]: A normal resting heart rate for adults ranges from 50 to 90 bpm.
     6.90s  user  발화 시작: 예.
     7.36s  user  발화 끝
    10.78s  user  발화 시작: 저녁 메뉴는 뭘로 할까?
    11.04s  agent 발화 끝
    12.64s  user  발화 시작: 아, 그럼 운동할 때는 얼마나 올라가요?
    12.80s  user  발화 끝
    15.18s  user  발화 끝
