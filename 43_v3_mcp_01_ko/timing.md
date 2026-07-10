# v3_mcp_01_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mcp_01",
#     "name": "은아",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "early 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-26",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     },
#     {
#       "date": "2026-01-08",
#       "category": "work",
#       "text": "User works as a high-school teacher."
#     },
#     {
#       "date": "2025-09-27",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Mexican."
#     },
#     {
#       "date": "2025-09-12",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-01-05",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2025-12-19",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 런던 근처 일킬로미터 안에 있는 커피숍 좀 찾아줘.
     3.19s  <ret> 발화 (turn1 첫 프레임)
     3.38s  user  발화 끝
     3.43s  agent 발화 시작: <ret> 런던 근처 일킬로미터 안에는 코스타 커피, 스타벅스, 프레타 망제가 있어요. 옥스퍼드 스트리트 백
     3.43s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.24s]: (tool result) There are several coffee shops within 1 kilometer of Lon
    13.01s  user  발화 시작: … 스타벅스는 영업시간이 어떻게 돼?
    13.67s  agent 발화 끝
    15.21s  <ret> 발화 (turn3 첫 프레임)
    15.44s  agent 발화 시작: <ret> 스타벅스 리젠트 스트리트 점은 오늘 밤 열시까지 영업합니다.
    15.45s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.16s]: Starbucks at 456 Regent Street is open until 10:00 PM tonight.
    15.64s  user  발화 끝
    19.42s  agent 발화 시작: 스타벅스 리젠트 스트리트 점은 오늘 밤 열시까지 영업해요. 지금 가면 괜찮을 것 같아요.
    19.60s  agent 발화 끝
    25.76s  user  발화 시작: 그럼 거기로 가는 가장 빠른 길 알려줘.
    25.77s  agent 발화 끝
    28.76s  <ret> 발화 (turn6 첫 프레임)
    28.81s  user  발화 끝
    28.83s  agent 발화 시작: <ret> 현재 위치에서 스타벅스 리젠트 스트리트 점까지 가장 빠른 길은 옥스퍼드 서커스를 거쳐서 가는 거예
    28.84s  ⚡SPAN 주입 [d'=1.12s / d_lead=9.37s]: (tool result) The fastest route to Starbucks at 456 Regent Street, Lon
    38.20s  agent 발화 끝
