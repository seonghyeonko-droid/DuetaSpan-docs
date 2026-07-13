# v3_rag_24_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_24",
#     "name": "가재",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "50s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-08",
#       "category": "hobby",
#       "text": "User is into rock climbing."
#     },
#     {
#       "date": "2026-04-22",
#       "category": "work",
#       "text": "User works as a graduate student."
#     },
#     {
#       "date": "2026-04-08",
#       "category": "pet",
#       "text": "User has a Corgi named Mochi."
#     },
#     {
#       "date": "2026-01-04",
#       "category": "home",
#       "text": "User's home address is 부산 해운대구 우동 123-4."
#     },
#     {
#       "date": "2025-12-12",
#       "category": "trip",
#       "text": "User is planning a trip to Lisbon in March."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-06",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2026-01-20",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 요즘 친구 사귀는 게 너무 어렵네요.
     2.95s  agent 발화 시작: 친구를 만드는 게 쉽지 않다고 느끼시는군요. 혼자 힘들어하지 마세요.
     2.95s  user  발화 끝
     7.38s  user  발화 시작: 음… 혹시 친구를 잘 사귀는 방법 같은 게 있을까요?
     7.38s  agent 발화 끝
    11.71s  <ret> 발화 (turn4 첫 프레임)
    11.81s  agent 발화 시작: 네.
    11.81s  user  발화 끝
    12.30s  agent 발화 시작: <ret> 좋은 친구 관계를 만들려면 시간과 노력이 필요하지만, 적극적으로 경청하고 진심으로 관심을 보이며 
    12.30s  agent 발화 끝
    12.57s  ⚡SPAN 주입 [d'=0.86s / d_lead=8.36s]: Building strong friendships takes time and effort, but actively listen
    20.66s  user  발화 시작: 네.
    20.66s  agent 발화 끝
    21.15s  agent 발화 시작: 혹시 어떤 상황에서 친구를 사귀는 게 특히 어렵다고 느끼시나요?
    21.15s  user  발화 끝
    25.58s  agent 발화 끝
