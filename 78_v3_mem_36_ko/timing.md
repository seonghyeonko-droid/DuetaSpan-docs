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


     0.00s  agent 발화 시작: [happy] 사히하 씨, 안녕하세요. 저는 재정 상담가 리라입니다. 오늘 어떤 걸 도와드릴까요?
     6.30s  agent 발화 끝
     6.85s  user  발화 시작: 음… 지난번에 스위스 여행 계획 얘기했었죠? 그때 뭐 얘기했는지 기억 안 나는데.
    11.83s  <ret> 발화 (turn2 첫 프레임)
    11.98s  agent 발화 시작: <ret> 스위스 여행 계획에 대해 말씀해주셨었죠. 내년 삼월에 스위스 여행을 계획하고 계셨어요.
    12.18s  user  발화 끝
    12.95s  ⚡SPAN 주입 [d'=1.12s / d_lead=3.14s]: [2026-07-14] User is planning a trip to Switzerland in March.
    18.88s  user  발화 시작: 아, 그렇네. 그럼 혹시 비행기 좌석은 뭘로 예약했는지도 기억나나요?
    18.89s  agent 발화 끝
    23.33s  <ret> 발화 (turn4 첫 프레임)
    23.73s  agent 발화 시작: <ret> 좌석 선호도에 대해서도 말씀해주셨었어요. 복도 쪽 좌석을 선호하신다고 하셨었죠.
    23.93s  user  발화 끝
    25.33s  ⚡SPAN 주입 [d'=2.00s / d_lead=2.78s]: [2026-03-03] User prefers an aisle seat when traveling.
    27.52s  user  발화 시작: 응.
    27.96s  user  발화 끝
    29.98s  agent 발화 끝
    30.65s  user  발화 시작: 알았어요, 고마워요! 이제 여행 준비해야겠네요.
    34.25s  user  발화 끝
