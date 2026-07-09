# v3_mem_36_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_36",
#     "name": "Sahiha",
#     "location": {
#       "city": "Tokyo",
#       "country": "Japan",
#       "timezone": "Asia/Tokyo (JST, UTC+9)",
#       "currency": "JPY (¥)"
#     },
#     "nationality": "Japanese",
#     "gender": "non-binary",
#     "age_range": "early 30s",
#     "language": "Japanese"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-07-14",
#       "category": "trip",
#       "text": "User is planning a trip to Switzerland in March."
#     },
#     {
#       "date": "2026-05-07",
#       "category": "diet",
#       "text": "User is vegetarian."
#     },
#     {
#       "date": "2026-04-19",
#       "category": "allergy",
#       "text": "User is allergic to shellfish."
#     },
#     {
#       "date": "2026-03-24",
#       "category": "pet",
#       "text": "User has a Golden Retriever named Max."
#     },
#     {
#       "date": "2026-03-03",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-08-02",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2026-04-27",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: 사히하님, 안녕하세요. 저는 리라입니다. 돈 관리와 예산 관련해서 도와드리는 분이에요.
     3.24s  user  발화 시작: 그래.
     3.85s  user  발화 끝
     6.64s  user  발화 시작: 아, 네. 지난번에 스위스 여행 계획 세운다고 했었죠? 그때 얘기했던 거 좀 다시 알려주실 수 있어요?
     6.72s  agent 발화 끝
    12.46s  <ret> 발화 (turn3 첫 프레임)
    12.61s  agent 발화 시작: <ret> 스위스 여행 말씀이시군요.
    12.80s  user  발화 끝
    13.18s  ⚡SPAN 주입 [d'=0.72s / d_lead=1.93s]: [2026-07-14] User is planning a trip to Switzerland in March.
    14.48s  user  발화 시작: 아, 네 맞아요. 혹시 그때 여행 관련해서 제가 특별히 요청했던 게 있었나요? 기억이 잘 안 나네요.
    14.55s  agent 발화 끝
    20.21s  <ret> 발화 (turn5 첫 프레임)
    20.37s  agent 발화 시작: <ret> 좌석 선호도를 말씀하셨던 게 기억나요.
    20.59s  user  발화 끝
    21.33s  ⚡SPAN 주입 [d'=1.12s / d_lead=2.72s]: [2026-03-03] User prefers an aisle seat when traveling.
    23.09s  agent 발화 끝
    23.10s  agent 발화 시작: 복도 쪽 좌석을 선호하신다고 말씀해주셨어요. 혹시 다른 요청 사항도 있으실까요?
    28.95s  agent 발화 끝
