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


     0.00s  agent 발화 시작: 사히하님, 안녕하세요. 저는 리라입니다. 재정 상담을 도와드리는 역할을 하고 있어요.
     3.38s  user  발화 시작: Uh-huh.
     4.02s  user  발화 끝
     6.85s  user  발화 시작: 스위스 여행 계획 말씀드렸었죠? 혹시 그때 항공편 예약해둔 거 기억하세요?
     6.90s  agent 발화 끝
    11.72s  <ret> 발화 (turn3 첫 프레임)
    11.87s  agent 발화 시작: <ret> 네, 스위스 여행 계획에 대해 말씀해주셨었죠. 스위스 여행은 내년 삼월에 가실 예정이시네요. 항공
    12.09s  user  발화 끝
    13.00s  ⚡SPAN 주입 [d'=1.28s / d_lead=3.43s]: [2026-07-14] User is planning a trip to Switzerland in March.
    22.70s  user  발화 시작: 아, 맞아요. 아직 못 했어요. 혹시 지금 제일 저렴한 항공권 찾아볼 수 있을까요?
    22.73s  agent 발화 끝
    27.88s  <ret> 발화 (turn5 첫 프레임)
    28.27s  agent 발화 시작: <ret> 내년 삼월 첫째 날 출발, 스위스 에어 123편이 십오만 엔이고, 환승은 없어요. 돌아오는 편은 
    28.49s  user  발화 끝
    29.88s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.95s]: (tool result) Departing Tokyo on March 1st, 2026: Swiss Air flight 123
    39.21s  agent 발화 끝
