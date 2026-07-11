# v3_backg_17_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_backg_17",
#     "name": "노재",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "late 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-08",
#       "category": "diet",
#       "text": "User is vegetarian."
#     },
#     {
#       "date": "2026-02-28",
#       "category": "allergy",
#       "text": "User is allergic to peanuts."
#     },
#     {
#       "date": "2025-12-01",
#       "category": "pet",
#       "text": "User has a Corgi named Mochi."
#     },
#     {
#       "date": "2025-11-08",
#       "category": "work",
#       "text": "User works as a nurse."
#     },
#     {
#       "date": "2025-07-31",
#       "category": "home",
#       "text": "User's home address is 인천 연수구 송도동 12-5."
#     },
#     {
#       "date": "2025-07-07",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Korean BBQ."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-03-13",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 혹시 동맥 문합이 어디에서 일어나는지 알려줄 수 있어?
     2.91s  <ret> 발화 (turn1 첫 프레임)
     3.06s  agent 발화 시작: <ret> 동맥 문합은 동맥들 사이에서 일어나서, 혈액 흐름을 위한 대체 경로를 제공한답니다.
     3.07s  ⚡SPAN 주입 [d'=0.50s / d_lead=5.47s]: Arterial anastomoses occur between arteries, providing alternate route
     3.23s  user  발화 끝
     6.31s  user  발화 시작: 응응.
     6.94s  user  발화 끝
     8.53s  agent 발화 끝
    10.09s  user  발화 시작: 아, 오늘 점심 뭐 먹을까나…
    12.21s  agent 발화 시작: 혈액 순환을 돕는 중요한 역할을 한다고 하네요.
    12.30s  user  발화 끝
    15.45s  agent 발화 끝
