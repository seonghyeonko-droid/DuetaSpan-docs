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


     0.00s  agent 발화 시작: 사히하 씨, 안녕하세요. 저는 리라입니다. 돈 관리와 예산 관련 상담을 도와드리는 분이에요.
     3.26s  user  발화 시작: Uh-huh.
     3.76s  user  발화 끝
     6.64s  user  발화 시작: 음… 전에 스위스 여행 계획 세운다고 말씀드렸었죠?
     6.67s  agent 발화 끝
    10.17s  <ret> 발화 (turn3 첫 프레임)
    10.32s  agent 발화 시작: <ret> 스위스 여행 말씀이시군요. 내년 3월에 스위스 여행을 계획하고 계시는군요. 혹시 여행 준비는 잘 
    10.48s  user  발화 끝
    10.89s  ⚡SPAN 주입 [d'=0.72s / d_lead=1.79s]: [2026-07-14] User is planning a trip to Switzerland in March.
    19.24s  user  발화 시작: 네, 그런데 갑자기 궁금한 게 생겼어요. 제가 채식주의자잖아요.
    19.27s  agent 발화 끝
    23.42s  <ret> 발화 (turn5 첫 프레임)
    23.58s  agent 발화 시작: <ret> 채식주의자이신 건 알고 있습니다. 스위스에서도 채식 식당을 찾기 어려울까 봐 걱정되시는군요. 괜찮
    23.78s  user  발화 끝
    24.54s  ⚡SPAN 주입 [d'=1.12s / d_lead=2.58s]: [2026-05-07] User is vegetarian.
    34.52s  agent 발화 끝
