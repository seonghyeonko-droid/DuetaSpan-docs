# v3_mem_35_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_35",
#     "name": "태준",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "early 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-15",
#       "category": "trip",
#       "text": "User is planning a trip to Vietnam in May."
#     },
#     {
#       "date": "2026-05-30",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Ethiopian."
#     },
#     {
#       "date": "2026-04-11",
#       "category": "hobby",
#       "text": "User is into birdwatching."
#     },
#     {
#       "date": "2026-03-22",
#       "category": "pet",
#       "text": "User has a Poodle named Coco."
#     },
#     {
#       "date": "2025-12-24",
#       "category": "allergy",
#       "text": "User is allergic to cat dander."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-11-29",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: 안녕하세요, 태준님! 저는 트후라예요. 공부나 동기 부여에 도움을 드리는 에이전트랍니다.
     6.19s  user  발화 시작: 어, 안녕하세요.
     6.19s  agent 발화 끝
     7.43s  agent 발화 시작: 혹시 요즘 여행 계획 세우고 계신가요?
     7.43s  user  발화 끝
    11.15s  user  발화 시작: 응.
    11.15s  agent 발화 끝
    11.77s  user  발화 시작: 응, 베트남에 가려고 하는데…
    11.77s  user  발화 끝
    14.08s  <ret> 발화 (turn5 첫 프레임)
    14.24s  agent 발화 시작: <ret> 베트남 여행을 생각하시는군요. 제가 기억하기로는 태준님은 에티오피아 음식을 가장 좋아하시죠.
    14.24s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.19s]: [2026-05-30] User's favorite cuisine is Ethiopian.
    14.24s  user  발화 끝
    20.44s  user  발화 시작: 어어.
    20.44s  agent 발화 끝
    21.05s  agent 발화 시작: 그래서 베트남에서도 에티오피아 음식을 맛볼 수 있는 곳을 찾아드릴까요? 하노이에 괜찮은 곳이 있어요.
    21.05s  user  발화 끝
    29.11s  user  발화 시작: 하노이요? 음… 괜찮은 것 같기도 하고.
    29.11s  agent 발화 끝
    32.58s  <ret> 발화 (turn9 첫 프레임)
    32.82s  agent 발화 시작: <ret> 하노이에 '하베샤 이천'이라는 에티오피아 레스토랑이 있어요. 평점은 사 점 오점이고, 가격대는 중
    32.82s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.05s]: (tool result) {"restaurants": [{"name": "Habesha 2000", "address": "26
    32.82s  user  발화 끝
    40.87s  agent 발화 끝
