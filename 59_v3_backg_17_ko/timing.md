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
     2.95s  <ret> 발화 (turn1 첫 프레임)
     3.10s  agent 발화 시작: <ret> 심박수는 개인차가 있지만, 일반적으로… 건강한 성인의 경우, 안정 시 심박수는 분당 육십 회에서 
     3.37s  user  발화 끝
     3.45s  ⚡SPAN 주입 [d'=0.50s / d_lead=1.96s]: '[source: Mayo Clinic] A normal resting heart rate for adults ranges f
     7.11s  user  발화 시작: 예.
     7.47s  user  발화 끝
    10.71s  user  발화 시작: [sigh] 오늘따라 일이 너무 많네.
    10.93s  agent 발화 끝
    13.53s  user  발화 끝
    13.77s  agent 발화 시작: 혹시 운동을 꾸준히 하시나요? 운동량에 따라서도 심박수가 달라질 수 있습니다.
    19.56s  agent 발화 끝
