# v3_defer_10_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_defer_10",
#     "name": "라국",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "late 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-27",
#       "category": "diet",
#       "text": "User is gluten-free."
#     },
#     {
#       "date": "2026-04-06",
#       "category": "trip",
#       "text": "User is planning a trip to Lisbon in March."
#     },
#     {
#       "date": "2026-02-23",
#       "category": "allergy",
#       "text": "User is allergic to shellfish."
#     },
#     {
#       "date": "2026-02-22",
#       "category": "hobby",
#       "text": "User is into marathon training."
#     },
#     {
#       "date": "2026-01-18",
#       "category": "pet",
#       "text": "User has a Siamese cat named Bella."
#     },
#     {
#       "date": "2025-12-26",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Mexican."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-01-10",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Kansas City에 괜찮은 바비큐 식당 좀 찾아줄 수 있어 | S2 음, 그럼 Joe's Kansas City Bar-B-Que는 | S3 아, Z-Man 샌드위치! 그거 맛있어 보이는데… 혹시 지금  | S4 사십오분에서 한시간이라… 좀 길다. 다른 데도 찾아볼까?

     0.00s  user  발화 시작: Kansas City에 괜찮은 바비큐 식당 좀 찾아줄 수 있어?
     4.47s  agent 발화 시작: 네.
     4.47s  user  발화 끝
     4.95s  <ret> 발화 (turn2 첫 프레임)
     4.96s  agent 발화 시작: <ret> Kansas City는 바비큐로 아주 유명한 곳이에요. 그 지역에 백 개가 넘는 바비큐 식당이 있
     4.96s  agent 발화 끝
     5.05s  ⚡SPAN 주입 [d'=1.42s / d_lead=8.44s]: Kansas City is renowned for its barbecue, with over one hundred barbec
    13.40s  user  발화 시작: 네.
    13.40s  agent 발화 끝
    13.89s  user  발화 시작: 음, 그럼 Joe's Kansas City Bar-B-Que는 어때? 거기 괜찮아?
    13.89s  user  발화 끝
    18.34s  <ret> 발화 (turn5 첫 프레임)
    18.36s  agent 발화 시작: <ret> Joe's Kansas City Bar-B-Que는 Kansas City에서 아주 인기 있는 곳이
    18.36s  user  발화 끝
    18.64s  ⚡SPAN 주입 [d'=0.30s / d_lead=7.94s]: Joe's Kansas City Bar-B-Que is a popular barbecue restaurant in Kansas
    26.30s  user  발화 시작: 아, Z-Man 샌드위치! 그거 맛있어 보이는데… 혹시 지금 거기가 얼마나 바쁠까?
    26.30s  agent 발화 끝
    31.76s  agent 발화 시작: 잠깐만 기다려 주세요.
    31.76s  user  발화 끝
    32.29s  ⚡지연 SPAN 주입(선제발표 직전): The current wait time at Joe's Kansas City Bar-B-Que is approximately 
    33.25s  agent 발화 시작: <ret> 지금 Joe's Kansas City Bar-B-Que의 혼잡도를 확인하는 데 시간이 좀 걸렸어요
    33.25s  agent 발화 끝
    47.64s  user  발화 시작: 사십오분에서 한시간이라… 좀 길다. 다른 데도 찾아볼까?
    47.64s  agent 발화 끝
    51.11s  user  발화 끝
