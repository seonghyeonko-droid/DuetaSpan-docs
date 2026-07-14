# v3_rags_30_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rags_30",
#     "name": "Ella",
#     "location": {
#       "city": "Toronto",
#       "country": "Canada",
#       "timezone": "America/Toronto (EST, UTC-5)",
#       "currency": "CAD ($)"
#     },
#     "nationality": "Canadian",
#     "gender": "female",
#     "age_range": "early 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-15",
#       "category": "temp",
#       "text": "User keeps the home thermostat around 25°C."
#     },
#     {
#       "date": "2026-05-04",
#       "category": "bloodtype",
#       "text": "User's blood type is AB-."
#     },
#     {
#       "date": "2026-04-18",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2026-03-29",
#       "category": "emergency",
#       "text": "User's emergency contact is Mina."
#     },
#     {
#       "date": "2026-03-26",
#       "category": "dislike",
#       "text": "User can't stand natto."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-12-24",
#       "title": "Planning a camping trip",
#       "bullets": [
#         "a weekend at a lake site in September",
#         "asked about a 4-person tent and a cooler"
#       ]
#     },
#     {
#       "date": "2025-12-21",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six on the 14th",
#         "looking for outdoor seating with a vegetarian option"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: How many people in the United States identify as Unitarian U
     4.66s  <ret> 발화 (turn1 첫 프레임)
     4.84s  agent 발화 시작: <ret> [happy] Well, according to recent data, there are arou
     4.84s  user  발화 끝
     5.21s  ⚡SPAN 주입 [d'=0.56s / d_lead=14.53s]: As of 2020, there were approximately 199,850 adult members identified 
    19.37s  agent 발화 끝
