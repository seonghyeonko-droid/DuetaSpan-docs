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


     0.00s  user  발화 시작: 혹시 건강한 사람의 평균 심박수가 어떻게 돼요? 궁금해서요.
     3.43s  <ret> 발화 (turn1 첫 프레임)
     3.58s  agent 발화 시작: <ret> 보통 성인의 심박수는요, 한 분에 육십 번에서 백 번 정도라고 해요.
     3.84s  user  발화 끝
     3.93s  ⚡SPAN 주입 [d'=0.50s / d_lead=1.24s]: '[source: Mayo Clinic] A normal resting heart rate for adults ranges f
     5.88s  user  발화 시작: 예.
     6.28s  user  발화 끝
     7.89s  user  발화 시작: 저녁 뭐 먹을까?
     8.12s  agent 발화 끝
     9.17s  user  발화 시작: 아, 그런데 운동할 때는 더 빨라지잖아요?
     9.31s  user  발화 끝
    12.03s  user  발화 끝
    12.33s  agent 발화 시작: 네, 운동할 때는 심박수가 당연히 더 빨라지죠. 혈액 순환이 활발해지니까요.
    17.51s  agent 발화 끝
