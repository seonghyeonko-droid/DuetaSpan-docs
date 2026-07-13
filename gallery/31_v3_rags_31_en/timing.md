# v3_rags_31_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rags_31",
#     "name": "Aiden",
#     "location": {
#       "city": "Sydney",
#       "country": "Australia",
#       "timezone": "Australia/Sydney (AEDT, UTC+11)",
#       "currency": "AUD ($)"
#     },
#     "nationality": "Australian",
#     "gender": "male",
#     "age_range": "late 20s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-03-22",
#       "category": "home",
#       "text": "User's home address is 642 Cedar Lane."
#     },
#     {
#       "date": "2026-02-08",
#       "category": "diet",
#       "text": "User is vegan."
#     },
#     {
#       "date": "2026-01-27",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Italian."
#     },
#     {
#       "date": "2026-01-22",
#       "category": "hobby",
#       "text": "User is into alpine wildflower photography."
#     },
#     {
#       "date": "2026-01-04",
#       "category": "pet",
#       "text": "User has a Golden Retriever named Max."
#     },
#     {
#       "date": "2025-12-03",
#       "category": "work",
#       "text": "User works as a nurse."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-12-21",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: Who sang the song “I Don’t Wanna Know”?
     2.59s  <ret> 발화 (turn1 첫 프레임)
     3.20s  agent 발화 시작: <ret> That song, “I Don’t Wanna Know”, is actually by Mario 
     3.20s  user  발화 끝
     4.09s  ⚡SPAN 주입 [d'=1.50s / d_lead=8.01s]: "I Don't Wanna Know" is a song by American singer Mario Winans featuri
    11.22s  agent 발화 끝
