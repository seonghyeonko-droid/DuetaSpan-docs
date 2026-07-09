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
#       "date": "2026-05-08",
#       "category": "hobby",
#       "text": "User is into alpine wildflower photography."
#     },
#     {
#       "date": "2026-04-03",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-08-18",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Korean BBQ."
#     },
#     {
#       "date": "2025-08-14",
#       "category": "work",
#       "text": "User works as a architect."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-01-18",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2025-07-10",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 음… 건강한 사람의 평균 심박수는 어떻게 돼요?
     4.03s  <ret> 발화 (turn1 첫 프레임)
     4.18s  agent 발화 시작: <ret> 보통 성인의 경우, 건강한 성인의 정상적인 심박수는 분당 육십 회에서 백 회 사이입니다.
     4.44s  user  발화 끝
     4.53s  ⚡SPAN 주입 [d'=0.50s / d_lead=1.42s]: [source: Mayo Clinic] A normal resting heart rate for adults ranges fr
     7.28s  user  발화 시작: 예.
     7.73s  user  발화 끝
    10.07s  user  발화 시작: 그럼 운동할 때는 얼마나 올라가는 걸까요?
    10.34s  agent 발화 끝
    12.67s  user  발화 시작: [sigh] 아, 오늘따라 지하철이 왜 이렇게 붐비지?
    12.85s  user  발화 끝
    15.72s  user  발화 끝
    16.00s  agent 발화 시작: 운동 강도에 따라 다르지만, 최대 심박수의 칠십오 퍼센트 정도까지는 괜찮다고 합니다.
    21.65s  agent 발화 끝
