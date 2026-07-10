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


     0.00s  user  발화 시작: 혹시 웹 브라우저 사용자 에이전트를 SuperCrawler 버전 십 점 일로 설정해 주실 수 있을까요?
     5.28s  <ret> 발화 (turn1 첫 프레임)
     5.67s  agent 발화 시작: <ret> 사용자 에이전트를 SuperCrawler 버전 십 점 일로 설정했습니다. 이제 웹사이트를 요청할 
     5.88s  user  발화 끝
     7.28s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.30s]: (tool result) User agent set to SuperCrawler version 10.1
     9.43s  user  발화 시작: 맞아요.
    10.06s  user  발화 끝
    13.96s  agent 발화 끝
    14.71s  user  발화 시작: 음, 그런데 혹시 지금 제 사용자 에이전트가 제대로 바뀌었는지 확인해 볼 수 있을까요?
    20.75s  <ret> 발화 (turn4 첫 프레임)
    20.98s  agent 발화 시작: <ret> 네, 현재 사용자 에이전트는 SuperCrawler 버전 십 점 일로 설정되어 있습니다. 확인해 
    21.19s  user  발화 끝
    22.75s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.45s]: (tool result) Current user agent: SuperCrawler version 10.1
    28.34s  user  발화 시작: 아, 다행이다. 혹시 다른 웹사이트에 접속했을 때도 계속 유지될까요?
    28.44s  agent 발화 끝
    33.11s  user  발화 끝
    33.49s  agent 발화 시작: 네, 지금 설정된 사용자 에이전트는 브라우저 세션 동안 계속 유지됩니다. 세션을 닫기 전까지는 다른 웹사이트
    42.44s  agent 발화 끝
