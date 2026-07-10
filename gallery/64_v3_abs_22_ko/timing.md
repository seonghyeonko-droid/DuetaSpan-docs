# v3_abs_22_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_abs_22",
#     "name": "연현",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "late 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-09",
#       "category": "diet",
#       "text": "User is vegetarian."
#     },
#     {
#       "date": "2026-04-14",
#       "category": "pet",
#       "text": "User has a Siamese cat named Bella."
#     },
#     {
#       "date": "2025-11-30",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Italian."
#     },
#     {
#       "date": "2025-11-21",
#       "category": "hobby",
#       "text": "User is into birdwatching."
#     },
#     {
#       "date": "2025-10-24",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-06-09",
#       "category": "home",
#       "text": "User's home address is 부산 해운대구 해운대로 570."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-23",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2026-06-10",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 한나라 초기 궁궐 유적은 어디에서 발견됐을까요?
     2.60s  <ret> 발화 (turn1 첫 프레임)
     2.91s  agent 발화 시작: <ret> 아쉽게도, 그 부분에 대한 기록은 아직 찾을 수 없었어요.
     2.92s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.08s]: (no information found)
     3.14s  user  발화 끝
     4.84s  user  발화 시작: 응.
     5.24s  user  발화 끝
     6.99s  agent 발화 끝
     7.09s  user  발화 시작: 음… 그렇군요. 혹시 잠들기 전에 긴장을 푸는 데 도움이 되는 음악 추천해 주실 수 있나요?
    12.89s  <ret> 발화 (turn4 첫 프레임)
    13.21s  agent 발화 시작: <ret> 편안하게 잠들 수 있도록 클래식이나 자연의 소리 같은 음악이 도움이 될 수 있어요.
    13.21s  ⚡SPAN 주입 [d'=1.12s / d_lead=5.50s]: (tool result) Classical, ambient, and nature sounds are often recommen
    13.34s  user  발화 끝
    18.70s  agent 발화 시작: 혹시 특별히 선호하는 스타일이 있으신가요?
    18.71s  agent 발화 끝
    21.28s  agent 발화 끝
