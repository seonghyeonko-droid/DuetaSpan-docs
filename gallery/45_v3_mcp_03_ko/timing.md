# v3_mcp_03_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mcp_03",
#     "name": "혜경",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "late 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-07",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-11-29",
#       "category": "home",
#       "text": "User's home address is 부산 해운대구 우동 123-4."
#     },
#     {
#       "date": "2025-10-30",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     },
#     {
#       "date": "2025-07-14",
#       "category": "allergy",
#       "text": "User is allergic to peanuts."
#     },
#     {
#       "date": "2025-06-25",
#       "category": "hobby",
#       "text": "User is into alpine wildflower photography."
#     },
#     {
#       "date": "2025-06-02",
#       "category": "trip",
#       "text": "User is planning a trip to Switzerland in May."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-04",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2026-02-01",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 베이징 근처에 괜찮은 커피숍 있어요?
     2.14s  <ret> 발화 (turn1 첫 프레임)
     2.46s  agent 발화 시작: <ret> 베이징 차오양문와이따지에 스타벅스가 평점 사 점 이점에 지금은 열려 있어요.
     2.46s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.23s]: (tool result) Name — Starbucks; address — 101 Chaoyangmenwai Dajie, Do
     2.68s  user  발화 끝
     5.91s  user  발화 시작: 맞아요.
     6.55s  user  발화 끝
     7.70s  agent 발화 끝
     8.12s  user  발화 시작: 그곳까지 가는 길 좀 알려줄 수 있을까요?
    10.99s  <ret> 발화 (turn4 첫 프레임)
    11.07s  agent 발화 시작: <ret> 현재 위치에서 북쪽으로 쭉 가시다가 좌회전하시면 스타벅스가 오른쪽에 있을 거예요. 예상 시간은 십
    11.07s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.72s]: (tool result) Directions — Head north on …; turn left onto …; Starbuck
    11.35s  user  발화 끝
    17.79s  agent 발화 끝
