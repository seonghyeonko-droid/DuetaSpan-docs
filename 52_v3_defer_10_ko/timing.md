# v3_defer_10_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_defer_10",
#     "name": "현국",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "early 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-30",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Korean BBQ."
#     },
#     {
#       "date": "2026-04-02",
#       "category": "work",
#       "text": "User works as a marketing manager."
#     },
#     {
#       "date": "2026-03-18",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2025-12-06",
#       "category": "hobby",
#       "text": "User is into marathon training."
#     },
#     {
#       "date": "2025-12-04",
#       "category": "home",
#       "text": "User's home address is 경기 성남시 분당구 판교로 235."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-13",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 오늘 로스앤젤레스에서 열리는 음악 행사 좀 알려줘.
     3.23s  <ret> 발화 (turn1 첫 프레임)
     3.24s  agent 발화 시작: <ret> 오늘 로스앤젤레스에서 열리는 음악 행사로는 롤링 스톤즈의 소파이 스타디움 콘서트와 할리우드 재즈 
     3.24s  user  발화 끝
     4.73s  ⚡SPAN 주입 [d'=1.50s / d_lead=6.47s]: There are several music events happening in Los Angeles today, July 10
     9.71s  user  발화 시작: 재즈 페스티벌이 어디서 열리는지 좀 더 자세히 알려줄 수 있어?
     9.71s  agent 발화 끝
    14.34s  agent 발화 시작: 네.
    14.34s  user  발화 끝
    14.78s  <ret> 발화 (turn4 첫 프레임)
    14.80s  agent 발화 시작: <ret> 할리우드 재즈 페스티벌은 이천삼백일 엔 Highland Ave, Los Angeles, 씨 에이 
    14.80s  agent 발화 끝
    15.73s  ⚡SPAN 주입 [d'=0.95s / d_lead=12.49s]: The Hollywood Jazz Festival is taking place at Hollywood Bowl, 2301 N 
    27.29s  user  발화 시작: 네.
    27.29s  agent 발화 끝
    27.75s  user  발화 끝
