# v3_mcp_04_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mcp_04",
#     "name": "시호",
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
#       "date": "2026-06-21",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-06-02",
#       "category": "allergy",
#       "text": "User is allergic to shellfish."
#     },
#     {
#       "date": "2026-01-04",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is sushi."
#     },
#     {
#       "date": "2025-07-08",
#       "category": "pet",
#       "text": "User has a Beagle named Rusty."
#     },
#     {
#       "date": "2025-05-30",
#       "category": "home",
#       "text": "User's home address is 289 Pine Court."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-12-21",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 혹시 웹 브라우저 사용자 에이전트를 슈퍼크롤러 버전 십 점 일로 설정해 줄 수 있을까요?
     4.91s  <ret> 발화 (turn1 첫 프레임)
     5.31s  agent 발화 시작: <ret> 네, 그렇게 해 드릴 수 있습니다. 사용자 에이전트를 슈퍼크롤러 버전 십 점 일로 설정했습니다.
     5.32s  user  발화 끝
     6.11s  ⚡SPAN 주입 [d'=1.20s / d_lead=2.46s]: (tool result) User agent set to SuperCrawler version 10.1.
     7.83s  user  발화 시작: 아.
     8.15s  user  발화 끝
    11.05s  agent 발화 끝
    11.75s  user  발화 시작: 음… 혹시 지금 사용자 에이전트가 제대로 설정됐는지 확인해 줄 수 있을까요?
    16.12s  <ret> 발화 (turn4 첫 프레임)
    16.36s  agent 발화 시작: <ret> 현재 사용자 에이전트는 슈퍼크롤러 버전 십 점 일로 설정되어 있습니다. 확인해 보셨으니 안심하셔도
    16.37s  user  발화 끝
    18.12s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.41s]: (tool result) Current user agent: SuperCrawler version 10.1.
    23.76s  agent 발화 끝
