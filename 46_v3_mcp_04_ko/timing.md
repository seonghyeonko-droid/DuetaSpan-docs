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


     0.00s  user  발화 시작: 혹시 사용자 에이전트를 SuperCrawler 버전 십 점 일로 설정해 줄 수 있을까요?
     4.92s  <ret> 발화 (turn1 첫 프레임)
     5.04s  user  발화 끝
     5.31s  agent 발화 시작: <ret> 사용자 에이전트를 SuperCrawler 버전 십 점 일로 설정했습니다. 지금부터 웹 브라우징 시
     6.92s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.34s]: (tool result) User agent set to SuperCrawler version 10.1
     8.87s  user  발화 시작: 네.
     9.27s  user  발화 끝
    11.65s  agent 발화 끝
    12.12s  user  발화 시작: 음… 근데 혹시 지금 제가 보고 있는 페이지의 사용자 에이전트가 제대로 변경되었는지 확인할 수 있을까요?
    17.73s  <ret> 발화 (turn4 첫 프레임)
    17.96s  agent 발화 시작: <ret> 네, 현재 사용자 에이전트는 SuperCrawler 버전 십 점 일로 확인됩니다. 변경이 잘 적용
    18.00s  user  발화 끝
    19.73s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.49s]: (tool result) Current user agent: SuperCrawler version 10.1
    24.45s  agent 발화 끝
    24.72s  user  발화 시작: 아, 다행이다. 그럼, 이제 이 사용자 에이전트로 구글에 접속해 볼까요?
    28.84s  user  발화 끝
    29.01s  agent 발화 시작: 구글에 접속해 드릴게요. 잠시만 기다려 주세요.
    31.78s  agent 발화 끝
