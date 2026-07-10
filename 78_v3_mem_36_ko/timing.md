# v3_mem_36_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_36",
#     "name": "혜호",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "early 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-03-06",
#       "category": "home",
#       "text": "User's home address is 부산 해운대구 우동 123-4."
#     },
#     {
#       "date": "2026-01-22",
#       "category": "allergy",
#       "text": "User is allergic to shellfish."
#     },
#     {
#       "date": "2025-12-08",
#       "category": "diet",
#       "text": "User is vegetarian."
#     },
#     {
#       "date": "2025-11-06",
#       "category": "hobby",
#       "text": "User is into alpine wildflower photography."
#     },
#     {
#       "date": "2025-10-11",
#       "category": "work",
#       "text": "User works as a graphic designer."
#     },
#     {
#       "date": "2025-07-02",
#       "category": "pet",
#       "text": "User has a Golden Retriever named Max."
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


     0.00s  agent 발화 시작: 안녕하세요, 혜호님. 저는 모시라고 합니다. 돈 관리와 예산 관련해서 도와드리는 상담사예요.
     3.36s  user  발화 시작: 그래.
     4.14s  user  발화 끝
     6.91s  agent 발화 끝
     7.12s  user  발화 시작: 아, 네. 전에 부산에 사는 제 집 주소 말씀드렸었죠?
    10.54s  <ret> 발화 (turn3 첫 프레임)
    10.69s  agent 발화 시작: <ret> 네, 혜호님. 부산 해운대구 우동 일 이 삼 사로 등록되어 있습니다.
    10.91s  user  발화 끝
    12.22s  ⚡SPAN 주입 [d'=1.68s / d_lead=5.13s]: [2026-03-06] User's home address is 부산 해운대구 우동 123-4.
    15.83s  agent 발화 끝
    16.31s  user  발화 시작: 혹시 그 집에 Max가 좋아하는 꽃 이름도 적어 둔 거 있나?
    19.47s  <ret> 발화 (turn5 첫 프레임)
    19.86s  agent 발화 시작: <ret> 죄송하지만, Max가 좋아하는 꽃 이름에 대한 정보는 찾을 수 없었습니다.
    19.92s  user  발화 끝
    21.47s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.53s]: (no information found)
    24.39s  agent 발화 끝
