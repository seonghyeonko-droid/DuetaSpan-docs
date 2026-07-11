# v3_mem_35_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_35",
#     "name": "은국",
#     "location": {
#       "city": "Busan",
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
#       "date": "2026-06-10",
#       "category": "work",
#       "text": "User works as a physical therapist."
#     },
#     {
#       "date": "2026-05-14",
#       "category": "hobby",
#       "text": "User is into birdwatching."
#     },
#     {
#       "date": "2026-02-12",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     },
#     {
#       "date": "2025-11-27",
#       "category": "allergy",
#       "text": "User is allergic to peanuts."
#     },
#     {
#       "date": "2025-09-08",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2025-07-24",
#       "category": "home",
#       "text": "User's home address is 대구 중구 동인동 88-1."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-07",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2026-04-18",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2025-07-08",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: 안녕하세요, 은국님. 저는 시오스입니다. 편안한 휴식을 도와드리는 에이전트예요.
     5.81s  user  발화 시작: 어… 안녕하세요. 혹시 여행 추천 좀 해 줄 수 있어요?
     6.20s  agent 발화 끝
     9.86s  <ret> 발화 (turn2 첫 프레임)
    10.01s  agent 발화 시작: <ret> 창가 자리를 선호하시는 걸로 기억하고 있어요. 그래서 바닷가 근처의 조용한 호텔을 추천해 드릴게요
    10.02s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.97s]: [2025-09-08] User prefers a window seat when traveling.
    10.25s  user  발화 끝
    12.55s  user  발화 시작: 어.
    13.18s  user  발화 끝
    17.75s  agent 발화 시작: 부산에서 가까운 거제도에 있는 호텔인데, 객실에서 바다가 한눈에 보인대요.
    17.98s  agent 발화 끝
    21.27s  user  발화 시작: 응.
    21.68s  user  발화 끝
    23.06s  user  발화 시작: 거제도요? 음… 전에 가 봤는데 별로였던 것 같아.
    23.45s  agent 발화 끝
    27.31s  <ret> 발화 (turn7 첫 프레임)
    27.54s  agent 발화 시작: <ret> 유당불내증이 있으시죠? 거제도 말고는 통영에 유제품을 사용하지 않는 건강한 식당들이 많아요.
    27.55s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.56s]: [2026-02-12] User is lactose-intolerant.
    27.59s  user  발화 끝
    30.73s  user  발화 시작: 그치.
    31.23s  user  발화 끝
    35.06s  user  발화 시작: 통영이면 괜찮겠네요.
    35.09s  agent 발화 끝
    37.06s  agent 발화 시작: 통영의 한려수호텔은 아름다운 정원과 함께 편안한 휴식을 제공한답니다.
    37.14s  user  발화 끝
    42.99s  agent 발화 끝
