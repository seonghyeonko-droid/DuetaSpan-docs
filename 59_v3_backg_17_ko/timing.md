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
     2.60s  agent 발화 시작: <ret> 음, 일반적으로는… 건강한 성인의 정상적인 심박수는 분당 육십 회에서 백 회 사이입니다.
     2.87s  user  발화 끝
     2.95s  ⚡SPAN 주입 [d'=0.50s / d_lead=1.24s]: [source: Mayo Clinic] A normal resting heart rate for adults ranges fr
     6.42s  user  발화 시작: 예.
     6.78s  user  발화 끝
     9.84s  user  발화 시작: 저녁 뭐 먹을까?
    10.06s  agent 발화 끝
    11.40s  user  발화 끝
    11.63s  agent 발화 시작: 하지만 개인차가 꽤 있어서, 운동량이나 스트레스 정도에 따라 달라질 수 있어요.
    16.48s  agent 발화 끝
    16.65s  user  발화 시작: 아, 그렇군요. 그럼 운동할 때는 얼마나 뛰어야 정상인 거예요?
    20.67s  user  발화 끝
