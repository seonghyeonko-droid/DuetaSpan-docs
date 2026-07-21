# v3_rags_29_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rags_29",
#     "name": "다진",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "late 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-27",
#       "category": "music",
#       "text": "User likes listening to classical piano."
#     },
#     {
#       "date": "2026-06-15",
#       "category": "medication",
#       "text": "User takes medication for migraines."
#     },
#     {
#       "date": "2026-05-31",
#       "category": "diet",
#       "text": "User is gluten-free."
#     },
#     {
#       "date": "2026-04-16",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Georgian."
#     },
#     {
#       "date": "2026-03-10",
#       "category": "gym",
#       "text": "User has a gym membership near home."
#     },
#     {
#       "date": "2026-02-14",
#       "category": "work",
#       "text": "User works as a barista."
#     },
#     {
#       "date": "2025-12-26",
#       "category": "emergency",
#       "text": "User's emergency contact is Leo."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-14",
#       "title": "Planning a dinner party",
#       "bullets": [
#         "hosting eight friends on Saturday",
#         "one guest is gluten-free"
#       ]
#     },
#     {
#       "date": "2025-12-19",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six on the 14th",
#         "looking for outdoor seating with a vegetarian option"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 크로스컨트리 스키가 올림픽 종목으로 추가된 건 언제야?
     3.25s  <ret> 발화 (turn1 첫 프레임)
     3.48s  agent 발화 시작: <ret> 크로스컨트리 스키는 천구백이십사년 동계 올림픽에서 처음 종목으로 채택되었어요.
     3.62s  user  발화 끝
     4.33s  ⚡SPAN 주입 [d'=1.09s / d_lead=4.94s]: Cross-country skiing was first included in the Winter Olympics in 1924
     8.42s  agent 발화 끝
