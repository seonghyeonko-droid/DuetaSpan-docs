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


     0.00s  agent 발화 시작: [happy] 사히하님, 안녕하세요. 저는 리라예요. 돈 관리와 예산 짜는 걸 도와드리는 상담사입니다.
     6.62s  agent 발화 끝
     7.22s  user  발화 시작: 리라 씨, 지난번에 차 알아보는 얘기 했었죠? 그 얘기 좀 더 해볼까요?
    11.87s  <ret> 발화 (turn2 첫 프레임)
    12.02s  agent 발화 시작: <ret> 네, 기억하고 있어요. 하이브리드 모델을 찾고 계시고, 주행 거리는 삼만 마일 이하를 원하셨죠.
    12.22s  user  발화 끝
    12.59s  ⚡SPAN 주입 [d'=0.72s / d_lead=1.58s]: [2026-08-02] Past chat — Researching a used car: comparing hybrid mode
    18.82s  user  발화 시작: 맞아요. 혹시 지금 시세가 어때요? 좋은 매물이 있으면 알려주세요.
    18.88s  agent 발화 끝
    23.22s  <ret> 발화 (turn4 첫 프레임)
    23.38s  agent 발화 시작: <ret> 토요타 프리우스 이천이십년식이 주행 거리가 이만 오천 마일이고, 가격은 이천이백만 원이에요. 혼다
    23.54s  user  발화 끝
    25.22s  ⚡SPAN 주입 [d'=2.00s / d_lead=13.22s]: (tool result) Toyota Prius 2020, 25000 miles, $22000. Honda Insight 20
    31.64s  user  발화 시작: 응.
    31.95s  user  발화 끝
    36.59s  agent 발화 끝
