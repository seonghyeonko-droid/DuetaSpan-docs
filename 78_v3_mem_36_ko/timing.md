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


     0.00s  agent 발화 시작: [happy] 사히하님, 안녕하세요. 저는 리라라고 해요. 돈 관리와 예산 계획에 대해 도와드리는 상담사입니
     7.83s  agent 발화 끝
     8.41s  user  발화 시작: 음… 스위스 여행 말인데, 혹시 제가 언제 가기로 했었죠? 갑자기 기억이 안 나네요.
    13.71s  <ret> 발화 (turn2 첫 프레임)
    13.86s  agent 발화 시작: <ret> 스위스 여행 계획을 세우셨었죠. 내년 삼월에 스위스 여행을 계획하고 계셨어요. 혹시 다른 준비는 
    14.01s  user  발화 끝
    14.75s  ⚡SPAN 주입 [d'=1.04s / d_lead=2.32s]: [2026-07-14] User is planning a trip to Switzerland in March.
    19.63s  user  발화 시작: 응.
    20.13s  user  발화 끝
    22.97s  user  발화 시작: 엇, 그러네요. 그런데 제가 음식 알레르기가 있잖아요. 혹시 스위스 음식 중에 조심해야 할 게 있을까요?
    23.14s  agent 발화 끝
    29.51s  <ret> 발화 (turn5 첫 프레임)
    29.91s  agent 발화 시작: <ret> 음식 알레르기가 있으시다고 말씀해주셨었죠. 갑각류 알레르기가 있으시니, 스위스에서도 갑각류가 들어
    30.11s  user  발화 끝
    31.51s  ⚡SPAN 주입 [d'=2.00s / d_lead=2.99s]: [2026-04-19] User is allergic to shellfish.
    40.39s  agent 발화 끝
