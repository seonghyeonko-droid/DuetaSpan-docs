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
#       "date": "2026-03-06",
#       "category": "trip",
#       "text": "User is planning a trip to Switzerland in March."
#     },
#     {
#       "date": "2026-01-22",
#       "category": "diet",
#       "text": "User is vegetarian."
#     },
#     {
#       "date": "2025-12-08",
#       "category": "allergy",
#       "text": "User is allergic to shellfish."
#     },
#     {
#       "date": "2025-11-06",
#       "category": "pet",
#       "text": "User has a Golden Retriever named Max."
#     },
#     {
#       "date": "2025-07-02",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-11-22",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2025-06-01",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: 사히하님, 안녕하세요. 저는 리라입니다. 돈 관리와 예산 관련 상담을 도와드리는 역할을 하고 있어요.
     8.11s  agent 발화 끝
     8.66s  user  발화 시작: 음… 스위스 여행 계획 세우고 있는데, 혹시 제가 언제 가기로 했었죠? 갑자기 기억이 안 나네요.
    15.42s  <ret> 발화 (turn2 첫 프레임)
    15.58s  agent 발화 시작: <ret> 기억이 잘 안 나실 때도 있으시죠. 내년 삼월에 스위스 여행을 계획하고 계셨어요.
    15.75s  user  발화 끝
    16.70s  ⚡SPAN 주입 [d'=1.28s / d_lead=3.36s]: [2026-03-06] User is planning a trip to Switzerland in March.
    22.23s  user  발화 시작: 아, 맞다! 스위스! 그럼 혹시 제가 뭘 챙겨가면 좋을까요? 알레르기 때문에 걱정이 좀 돼요.
    22.30s  agent 발화 끝
    29.44s  <ret> 발화 (turn4 첫 프레임)
    29.84s  agent 발화 시작: <ret> 여행 전에 미리 준비하면 훨씬 편하시겠죠. 조개류 알레르기가 있으시니, 스위스 음식 드실 때 조심
    30.01s  user  발화 끝
    31.44s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.51s]: [2025-11-06] User is allergic to shellfish.
    35.64s  user  발화 시작: 응.
    36.14s  user  발화 끝
    39.20s  agent 발화 끝
    39.90s  user  발화 시작: 감사합니다, 리라 씨.
    41.32s  user  발화 끝
