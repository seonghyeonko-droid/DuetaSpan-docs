# v3_mcp_03_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mcp_03",
#     "name": "서현",
#     "location": {
#       "city": "Busan",
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
#       "date": "2026-06-08",
#       "category": "pet",
#       "text": "User has a Labrador named Cooper."
#     },
#     {
#       "date": "2026-05-10",
#       "category": "gym",
#       "text": "User has a gym membership near the office."
#     },
#     {
#       "date": "2026-01-23",
#       "category": "schedule",
#       "text": "User has rotating night shifts."
#     },
#     {
#       "date": "2026-01-09",
#       "category": "dish",
#       "text": "User's go-to comfort dish is bún chả."
#     },
#     {
#       "date": "2025-12-21",
#       "category": "medication",
#       "text": "User takes a statin."
#     },
#     {
#       "date": "2025-12-04",
#       "category": "anniversary",
#       "text": "User's anniversary is January 20."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-21",
#       "title": "Booking a Japan trip",
#       "bullets": [
#         "5 nights in Kyoto and Osaka in October",
#         "wants a JR Pass and a ryokan for one night"
#       ]
#     },
#     {
#       "date": "2025-12-26",
#       "title": "Buying a gift for a parent",
#       "bullets": [
#         "mom's 60th birthday next month",
#         "considering a spa day or a watch"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 콜로라도 덴버에 칠월 사일부터 팔일까지 성인 세명이 묵을 집 좀 예약해 줘.
     4.55s  <ret> 발화 (turn1 첫 프레임)
     5.14s  agent 발화 시작: <ret> [happy] 네, 예약 도와드렸습니다. 덴버 숙소 예약이 완료되었고, 예약 번호는 에이치 오 티
     5.19s  user  발화 끝
     5.60s  ⚡SPAN 주입 [d'=1.05s / d_lead=10.67s]: (tool result) Denver, CO, 07/04/2025, 07/08/2025, HOT2-005709, confirm
    13.08s  user  발화 시작: 응.
    13.39s  user  발화 끝
    15.77s  user  발화 시작: 고마워. 근데 덴버 날씨는 보통 어때?
    15.81s  agent 발화 끝
    18.23s  agent 발화 시작: 덴버는 고도가 높아서 햇볕은 강하지만 공기는 꽤 선선한 편이에요. 칠월이면 여행하시기에 정말 좋은 날씨일 겁
    18.50s  user  발화 끝
    26.67s  agent 발화 끝
