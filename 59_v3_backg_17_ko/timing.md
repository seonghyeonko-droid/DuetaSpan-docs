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


     0.00s  user  발화 시작: 심장이 건강한 사람의 평균 맥박수가 어떻게 돼? 궁금해.
     3.48s  <ret> 발화 (turn1 첫 프레임)
     3.64s  agent 발화 시작: <ret> 음, 건강한 사람의 맥박수를 알아볼까요? 보통 성인의 안정 시 맥박은 분당 육십 회에서 백 회 사
     3.88s  user  발화 끝
     3.98s  ⚡SPAN 주입 [d'=0.50s / d_lead=2.39s]: A normal resting heart rate for adults ranges from 60 to 100 bpm.
     7.55s  user  발화 시작: 어.
     8.37s  user  발화 끝
    11.08s  user  발화 시작: 근데, 그게 좀 넓은 범위 같은데? 더 자세히 알려줄 수 있어?
    11.29s  agent 발화 끝
    15.27s  user  발화 시작: 아, 오늘 저녁 뭐 먹을까…
    15.43s  user  발화 끝
    17.39s  <ret> 발화 (turn5 첫 프레임)
    17.53s  user  발화 끝
    17.62s  agent 발화 시작: <ret> 맥박수는 개인차가 크긴 해. 하지만 일반적으로 건강한 사람의 맥박수는 분당 오십 회에서 구십 회 
    19.39s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.23s]: The typical resting heart rate for a healthy adult is between 60 and 9
    24.84s  agent 발화 끝
    24.94s  agent 발화 시작: 건강한 성인의 일반적인 맥박수는 분당 오십 회에서 구십 회 정도야.
    29.79s  agent 발화 끝
