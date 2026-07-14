# v3_rags_30_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rags_30",
#     "name": "혜서",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "mid 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-13",
#       "category": "bloodtype",
#       "text": "User's blood type is AB+."
#     },
#     {
#       "date": "2026-05-31",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2026-05-22",
#       "category": "dislike",
#       "text": "User can't stand blue cheese."
#     },
#     {
#       "date": "2026-03-26",
#       "category": "hobby",
#       "text": "User is into pottery."
#     },
#     {
#       "date": "2026-03-23",
#       "category": "plant",
#       "text": "User is growing a lemon tree at home."
#     },
#     {
#       "date": "2026-03-20",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Greek."
#     },
#     {
#       "date": "2026-03-11",
#       "category": "show",
#       "text": "User is currently watching a cooking competition show."
#     },
#     {
#       "date": "2026-02-25",
#       "category": "wake",
#       "text": "User usually wakes up at 5:30am for a run."
#     },
#     {
#       "date": "2026-01-08",
#       "category": "floor",
#       "text": "User lives on the 3rd floor."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-23",
#       "title": "Booking a Japan trip",
#       "bullets": [
#         "5 nights in Kyoto and Osaka in October",
#         "wants a JR Pass and a ryokan for one night"
#       ]
#     },
#     {
#       "date": "2026-03-28",
#       "title": "Meal-prep planning",
#       "bullets": [
#         "wants high-protein lunches under 600 calories",
#         "avoiding dairy this month"
#       ]
#     },
#     {
#       "date": "2026-03-13",
#       "title": "Planning a camping trip",
#       "bullets": [
#         "a weekend at a lake site in September",
#         "asked about a 4-person tent and a cooler"
#       ]
#     },
#     {
#       "date": "2026-02-07",
#       "title": "Studying for the TOEIC",
#       "bullets": [
#         "target score is 850",
#         "exam is in about six weeks"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 미국에 유니테리언 유니버설리스트는 몇 명이나 있을까?
     3.10s  <ret> 발화 (turn1 첫 프레임)
     3.20s  agent 발화 시작: <ret> 미국에는 약 십구만 구천 팔백 쉰명의 유니테리언 유니버설리스트가 있는 것으로 알려져 있습니다.
     3.20s  user  발화 끝
     4.03s  ⚡SPAN 주입 [d'=0.93s / d_lead=6.40s]: As of 2020, there were approximately 199,850 identified Unitarian Univ
     9.60s  agent 발화 끝
