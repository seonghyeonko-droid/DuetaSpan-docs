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


     0.00s  user  발화 시작: 혹시 웹 브라우저 사용자 에이전트를 SuperCrawler 버전 십 점 일로 설정해 줄 수 있을까요?
     4.36s  <ret> 발화 (turn1 첫 프레임)
     4.75s  agent 발화 시작: <ret> 네, 그렇게 해 드릴게요. 사용자 에이전트를 SuperCrawler 버전 십 점 일로 설정했습니다
     4.81s  user  발화 끝
     6.04s  ⚡SPAN 주입 [d'=1.68s / d_lead=1.85s]: (tool result) User agent set to SuperCrawler version 10.1.
     7.48s  user  발화 시작: 예.
     7.84s  user  발화 끝
    10.31s  agent 발화 끝
    10.90s  user  발화 시작: 음… 잠깐만요, 혹시 지금 제 브라우저 설정을 확인해 볼 수 있을까요? 제대로 적용됐는지 궁금해서요.
    18.01s  <ret> 발화 (turn4 첫 프레임)
    18.16s  agent 발화 시작: <ret> 현재 사용자 에이전트는 SuperCrawler 버전 십 점 일로 설정되어 있습니다.
    18.18s  user  발화 끝
    20.01s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.00s]: (tool result) Current user agent: SuperCrawler version 10.1.
    21.82s  user  발화 시작: 네.
    22.23s  user  발화 끝
    23.16s  agent 발화 끝
    24.05s  user  발화 시작: 아, 그럼 이제 다른 웹사이트에 접속했을 때 SuperCrawler로 보이겠네요?
    27.80s  user  발화 끝
    27.92s  agent 발화 시작: 네, 맞습니다. 이제 웹사이트에서는 SuperCrawler 버전 십 점 일로 인식될 거예요.
    33.19s  agent 발화 끝
