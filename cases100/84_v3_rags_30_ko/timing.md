# v3_rags_30_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rags_30",
#     "name": "예민",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "mid 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-27",
#       "category": "hobby",
#       "text": "User is into salsa dancing."
#     },
#     {
#       "date": "2026-06-23",
#       "category": "trip",
#       "text": "User is planning a trip to Portugal in March."
#     },
#     {
#       "date": "2026-05-11",
#       "category": "savings",
#       "text": "User is saving for a trip to Europe next year."
#     },
#     {
#       "date": "2026-05-10",
#       "category": "skill",
#       "text": "User is getting fairly good at vintage synth collecting."
#     },
#     {
#       "date": "2026-03-27",
#       "category": "music",
#       "text": "User likes listening to a lo-fi jazz playlist."
#     },
#     {
#       "date": "2026-03-22",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-03-11",
#       "category": "commute",
#       "text": "User works from home."
#     },
#     {
#       "date": "2026-01-15",
#       "category": "home",
#       "text": "User's home address is 경기 성남시 분당구 판교로 235."
#     },
#     {
#       "date": "2026-01-02",
#       "category": "streaming",
#       "text": "User subscribes to Wavve and Melon."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-27",
#       "title": "Learning to invest",
#       "bullets": [
#         "asked about index funds vs individual stocks",
#         "wants to start with 500k won a month"
#       ]
#     },
#     {
#       "date": "2026-05-15",
#       "title": "Switching phone plans",
#       "bullets": [
#         "uses about 30GB of data a month",
#         "wants to keep the same number"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 영화 '셀레나'에 나오는 노래들은 누가 부르나요?
     2.02s  <ret> 발화 (turn1 첫 프레임)
     2.63s  agent 발화 시작: <ret> 영화 '셀레나'의 노래들은 셀레나가 직접 불렀습니다.
     2.72s  user  발화 끝
     3.57s  ⚡SPAN 주입 [d'=1.55s / d_lead=3.61s]: Selena sang the songs in the movie Selena.
     6.24s  agent 발화 끝
