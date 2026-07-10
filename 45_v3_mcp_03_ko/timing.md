# v3_mcp_03_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mcp_03",
#     "name": "은형",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "early 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-02-23",
#       "category": "diet",
#       "text": "User is vegetarian."
#     },
#     {
#       "date": "2026-01-26",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Thai."
#     },
#     {
#       "date": "2026-01-04",
#       "category": "hobby",
#       "text": "User is into marathon training."
#     },
#     {
#       "date": "2025-11-05",
#       "category": "trip",
#       "text": "User is planning a trip to Iceland in December."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-03",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 이번 주 토요일에 볼만한 영화 좀 찾아줘.
     2.50s  <ret> 발화 (turn1 첫 프레임)
     2.81s  agent 발화 시작: <ret> 이번 주 토요일에는 '인사이드 아웃 이', '배드 보이 라이드 오어 다이', '가필드 무비'가 상
     2.81s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.36s]: (tool result) Showing: 'Inside Out 2' (PG), 'Bad Boys: Ride or Die' (R
     3.05s  user  발화 끝
     7.00s  user  발화 시작: 그렇죠.
     7.82s  user  발화 끝
    12.18s  agent 발화 끝
    12.50s  user  발화 시작: 아, '인사이드 아웃 이' 시간 좀 알려줘.
    14.69s  <ret> 발화 (turn4 첫 프레임)
    14.77s  agent 발화 시작: <ret> '인사이드 아웃 이'는 Regal Edwards Irvine Spectrum 이십일에서 오후 한시
    14.77s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.73s]: (tool result) 'Inside Out 2' showings: 1:30 PM, 4:15 PM, 7:00 PM, 9:45
    15.04s  user  발화 끝
    17.93s  user  발화 시작: 네.
    18.57s  user  발화 끝
    24.22s  user  발화 시작: 그럼 혹시… 티켓 예매해 줄 수 있어?
    24.50s  agent 발화 끝
    27.36s  agent 발화 시작: 몇 시 표를 예매해 드릴까요?
    27.45s  user  발화 끝
    29.01s  agent 발화 끝
