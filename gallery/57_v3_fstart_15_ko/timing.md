# v3_fstart_15_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_fstart_15",
#     "name": "다완",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "early 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-11",
#       "category": "allergy",
#       "text": "User is allergic to cat dander."
#     },
#     {
#       "date": "2026-05-29",
#       "category": "pet",
#       "text": "User has a Poodle named Coco."
#     },
#     {
#       "date": "2026-05-25",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Ethiopian."
#     },
#     {
#       "date": "2026-05-23",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2026-04-03",
#       "category": "trip",
#       "text": "User is planning a trip to Iceland in August."
#     },
#     {
#       "date": "2025-12-11",
#       "category": "work",
#       "text": "User works as a marketing manager."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-18",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2026-03-13",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2026-02-26",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 자전거로 이동하면 어디까지 갈 수 있지? 지금 있는 곳에서.
     3.63s  <ret> 발화 (turn2 첫 프레임)
     3.68s  agent 발화 시작: 네.
     3.68s  user  발화 끝
     4.02s  ⚡SPAN 주입 [d'=0.39s / d_lead=1.23s]: (tool result) {"origin": "current location", "destination": "anywhere"
     4.09s  agent 발화 시작: <ret> 어디까지 가고 싶으세요?
     4.09s  agent 발화 끝
     5.31s  agent 발화 시작: 현재 위치에서 자전거로 갈 수 있는 곳을 찾아볼게요. 잠시만 기다려 주세요.
     5.31s  agent 발화 끝
     9.81s  agent 발화 시작: [happy] 자전거로 오킬로미터 안에 카페 세 곳이 있어요. 가장 가까운 곳은 도보 십분 거리입니다. 다른
     9.81s  agent 발화 끝
    16.76s  agent 발화 끝
