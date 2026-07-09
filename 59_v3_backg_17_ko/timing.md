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
     3.49s  <ret> 발화 (turn1 첫 프레임)
     3.65s  agent 발화 시작: <ret> 음, 건강한 사람의 맥박수를 알아볼까요? 건강한 성인의 정상적인 맥박수는 분당 육십 회에서 백 회
     3.88s  user  발화 끝
     3.99s  ⚡SPAN 주입 [d'=0.50s / d_lead=2.67s]: A normal resting heart rate for adults ranges from 60 to 100 bpm.
     7.74s  user  발화 시작: 어.
     8.14s  user  발화 끝
    11.42s  user  발화 시작: 근데 그게 꼭 그래야 돼? 사람마다 좀 다르잖아.
    11.67s  agent 발화 끝
    14.34s  user  발화 끝
    14.60s  agent 발화 시작: 물론이지. 사람마다 차이가 있을 수 있는데, 일반적으로는 분당 오십 회에서 구십 회 정도가 건강한 범위로 알
    22.44s  agent 발화 끝
    22.45s  user  발화 시작: 아, 오늘 저녁 메뉴는 뭘로 할까나…
    25.63s  agent 발화 시작: [interrupting] 혹시 운동을 자주 하시는 편이야? 운동량에 따라서도 맥박수가 달라질 수 있거든.
    25.86s  user  발화 끝
    31.79s  agent 발화 끝
