# v3_rags_29_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rags_29",
#     "name": "성온",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "50s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-02-25",
#       "category": "work",
#       "text": "User works as a marketing manager."
#     },
#     {
#       "date": "2026-02-12",
#       "category": "hobby",
#       "text": "User is into birdwatching."
#     },
#     {
#       "date": "2026-02-03",
#       "category": "home",
#       "text": "User's home address is 대구 중구 동인동 88-1."
#     },
#     {
#       "date": "2026-01-02",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2025-12-07",
#       "category": "allergy",
#       "text": "User is allergic to penicillin."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-08-30",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2025-06-17",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 크레이터 레이크 화산이 마지막으로 분화한 게 언제였지?
     3.62s  <ret> 발화 (turn1 첫 프레임)
     3.75s  user  발화 끝
     3.78s  agent 발화 시작: <ret> 크레이터 레이크 화산이 마지막으로 분화한 건 대략 사천팔백년 전이라고 하네요.
     3.78s  ⚡SPAN 주입 [d'=1.92s / d_lead=4.17s]: The last eruption of Crater Lake volcano occurred approximately 4,800 
     7.95s  agent 발화 끝
