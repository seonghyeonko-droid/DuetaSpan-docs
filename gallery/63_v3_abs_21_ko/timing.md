# v3_abs_21_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_abs_21",
#     "name": "현율",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "early 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-18",
#       "category": "diet",
#       "text": "User is vegetarian."
#     },
#     {
#       "date": "2026-04-15",
#       "category": "work",
#       "text": "User works as a graphic designer."
#     },
#     {
#       "date": "2026-01-13",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Ethiopian."
#     },
#     {
#       "date": "2025-09-27",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-09-01",
#       "category": "allergy",
#       "text": "User is allergic to shellfish."
#     },
#     {
#       "date": "2025-06-16",
#       "category": "trip",
#       "text": "User is planning a trip to Iceland in December."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-10-18",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2025-06-26",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2025-06-17",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 로마 문명이 왜 멸망했는지 궁금해.
     2.31s  user  발화 끝
     2.39s  agent 발화 시작: 로마 문명의 멸망 원인은 아직 명확하게 밝혀지지 않았어요.
     4.40s  user  발화 시작: 네.
     4.70s  user  발화 끝
     5.76s  agent 발화 끝
     5.80s  user  발화 시작: 아, 그렇군요. 그럼 요즘 날씨는 어때요?
     8.64s  <ret> 발화 (turn4 첫 프레임)
     8.72s  agent 발화 시작: <ret> 지금 서울은 이십팔도이고, 습도는 육십오퍼센트, 바람은 시속 삼 점 이킬로미터예요.
     8.72s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.32s]: (tool result) {"city": "Seoul", "temperature": "28.0°C", "humidity": "
     8.89s  user  발화 끝
    11.21s  user  발화 시작: 정말요?
    12.02s  user  발화 끝
    14.04s  agent 발화 끝
    15.55s  user  발화 시작: 꽤 덥네요.
    16.70s  user  발화 끝
    16.97s  agent 발화 시작: 네, 정말 덥죠. 더위 조심하시고요.
    19.27s  agent 발화 끝
