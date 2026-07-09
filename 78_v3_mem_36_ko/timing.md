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


     0.00s  agent 발화 시작: [happy] 사히하 씨, 안녕하세요. 저는 리라입니다. 돈 문제나 예산 관리에 대해 도와드리는 상담사예요.
     7.65s  agent 발화 끝
     8.27s  user  발화 시작: 음… 혹시 제가 예전에 얘기했던 스위스 여행 계획 기억하세요?
    13.16s  <ret> 발화 (turn2 첫 프레임)
    13.32s  agent 발화 시작: <ret> 네, 기억하고 있어요. 스위스 여행은 내년 삼월에 가실 예정이시군요. 혹시 구체적으로 어떤 부분을
    13.46s  user  발화 끝
    13.88s  ⚡SPAN 주입 [d'=0.72s / d_lead=1.74s]: [2026-07-14] User is planning a trip to Switzerland in March.
    18.73s  user  발화 시작: 응.
    19.22s  user  발화 끝
    21.88s  user  발화 시작: 그… 여행 전에 혹시 필요한 예방 접종 같은 게 있을까요?
    22.04s  agent 발화 끝
    25.91s  agent 발화 시작: [curious] 예방 접종 말씀이시군요. 하지만 여행 전에 의사와 상담하시는 게 가장 안전할 것 같아요.
    26.09s  user  발화 끝
    33.37s  agent 발화 끝
