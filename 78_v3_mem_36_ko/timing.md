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


     0.00s  agent 발화 시작: 사히하 씨, 안녕하세요. 저는 리라입니다. 돈 관리와 예산 짜는 걸 도와드리는 카운슬러예요.
     7.32s  agent 발화 끝
     7.97s  user  발화 시작: 음… 전에 스위스 여행 계획 세운다고 얘기했었죠?
    11.71s  <ret> 발화 (turn2 첫 프레임)
    11.86s  agent 발화 시작: <ret> 기억하고 있어요. 스위스 여행은 내년 삼월에 가신다고 말씀해주셨어요. 혹시 구체적으로 어떤 준비를
    12.00s  user  발화 끝
    12.21s  ⚡SPAN 주입 [d'=0.50s / d_lead=1.07s]: [2026-07-14] User is planning a trip to Switzerland in March.
    17.15s  user  발화 시작: 응.
    17.64s  user  발화 끝
    20.21s  user  발화 시작: 비행기 티켓은 아직 안 샀는데, 혹시 지금 사는 게 좋을까요? 아니면 좀 더 기다려야 할까요?
    20.39s  agent 발화 끝
    26.01s  agent 발화 시작: 지금 비행기 티켓을 사는 건 조금 성급할 수도 있겠네요. 보통 출발일이 가까워질수록 가격이 변동하는 경우가 
    26.18s  user  발화 끝
    35.29s  agent 발화 끝
    36.02s  user  발화 시작: 음… 알겠습니다. 그럼 좀 더 기다려봐야겠네요.
    39.67s  user  발화 끝
