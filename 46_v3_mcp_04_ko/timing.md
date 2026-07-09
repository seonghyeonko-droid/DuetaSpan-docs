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
#       "date": "2026-08-03",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-07-11",
#       "category": "allergy",
#       "text": "User is allergic to shellfish."
#     },
#     {
#       "date": "2026-04-05",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is sushi."
#     },
#     {
#       "date": "2026-01-15",
#       "category": "pet",
#       "text": "User has a Beagle named Rusty."
#     },
#     {
#       "date": "2026-01-05",
#       "category": "home",
#       "text": "User's home address is 289 Pine Court."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-12",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 혹시 웹 브라우저 사용자 에이전트를 슈퍼크롤러 버전 십 점 일로 설정해 줄 수 있을까요?
     4.87s  <ret> 발화 (turn1 첫 프레임)
     5.26s  agent 발화 시작: <ret> 네, 그렇게 해 드릴 수 있어요. 사용자 에이전트를 슈퍼크롤러 버전 십 점 일로 변경했습니다.
     5.33s  user  발화 끝
     6.07s  ⚡SPAN 주입 [d'=1.20s / d_lead=2.30s]: (tool result) User agent set to SuperCrawler version 10.1
     9.29s  user  발화 시작: 네.
     9.65s  user  발화 끝
    10.62s  agent 발화 끝
    11.44s  user  발화 시작: 그런데 혹시 지금 사용자 에이전트가 제대로 바뀌었는지 확인할 수 있을까요?
    15.30s  <ret> 발화 (turn4 첫 프레임)
    15.54s  agent 발화 시작: <ret> 지금 사용자 에이전트를 확인해 볼게요.
    15.60s  user  발화 끝
    16.43s  ⚡SPAN 주입 [d'=1.12s / d_lead=2.50s]: (tool result) Current user agent: SuperCrawler version 10.1
    17.97s  agent 발화 시작: 현재 사용자 에이전트는 슈퍼크롤러 버전 십 점 일로 설정되어 있습니다. 확인해 보셨으니 안심하셔도 될 것 같
    18.03s  agent 발화 끝
    24.74s  agent 발화 끝
