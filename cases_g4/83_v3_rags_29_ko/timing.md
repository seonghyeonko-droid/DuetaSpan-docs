# v3_rags_29_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rags_29",
#     "name": "서영",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "mid 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-27",
#       "category": "streaming",
#       "text": "User subscribes to Apple Music and Coupang Play."
#     },
#     {
#       "date": "2026-05-02",
#       "category": "home",
#       "text": "User's home address is 부산 해운대구 해운대로 570."
#     },
#     {
#       "date": "2026-04-27",
#       "category": "hobby",
#       "text": "User is into birdwatching."
#     },
#     {
#       "date": "2026-02-20",
#       "category": "coffee",
#       "text": "User's usual coffee order is a cold brew."
#     },
#     {
#       "date": "2026-02-19",
#       "category": "skill",
#       "text": "User is just getting back into beekeeping."
#     },
#     {
#       "date": "2025-12-20",
#       "category": "music",
#       "text": "User likes listening to indie folk."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-07",
#       "title": "Refinancing a mortgage",
#       "bullets": [
#         "current rate is 4.2 percent",
#         "wants to compare 15- vs 30-year terms"
#       ]
#     },
#     {
#       "date": "2026-04-27",
#       "title": "Selling a used bike",
#       "bullets": [
#         "a 3-year-old road bike",
#         "asking around 400k won"
#       ]
#     },
#     {
#       "date": "2026-02-12",
#       "title": "Studying for the TOEIC",
#       "bullets": [
#         "target score is 850",
#         "exam is in about six weeks"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 우체국에 보면 파란색 상자들이…
     2.40s  user  발화 끝
     3.75s  user  발화 시작: …있던데 그게 정확히 뭐예요?
     5.36s  <ret> 발화 (turn2 첫 프레임)
     5.58s  agent 발화 시작: <ret> 아, 그 상자들 말씀이시죠? 우체국에 있는 파란색 상자들은 바로 우편 수거함입니다.
     5.59s  user  발화 끝
     6.44s  ⚡SPAN 주입 [d'=1.09s / d_lead=2.34s]: Blue boxes at the post office are mail collection boxes.
    12.02s  agent 발화 끝
