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


     0.00s  user  발화 시작: 혹시 웹 브라우저 사용자 에이전트를 SuperCrawler 버전 십 점 일로 설정해 줄 수 있을까요?
     5.04s  user  발화 끝
     5.17s  <ret> 발화 (turn1 첫 프레임)
     5.56s  agent 발화 시작: <ret> 사용자 에이전트를 SuperCrawler 버전 십 점 일로 설정했습니다. 확인해 보시겠어요?
     7.17s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.74s]: (tool result) User agent set to SuperCrawler version 10.1
     7.57s  user  발화 시작: 네.
     7.97s  user  발화 끝
     9.30s  agent 발화 끝
     9.71s  user  발화 시작: 음… 근데 그 버전이 최신 버전이 맞긴 한가요? 혹시 더 최신 버전이 있는지 알아봐 줄 수 있을까요?
    14.16s  <ret> 발화 (turn4 첫 프레임)
    14.39s  agent 발화 시작: <ret> SuperCrawler의 최신 버전은… 십 점 이입니다. 조금 더 업데이트된 버전이 있네요.
    14.43s  user  발화 끝
    16.16s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.48s]: (tool result) SuperCrawler latest version is 10.2
    18.87s  agent 발화 끝
    19.13s  user  발화 시작: 아, 그렇군요. 그럼 지금 바로 십 점 이로 바꿔 줄 수 있을까요?
    26.24s  <ret> 발화 (turn6 첫 프레임)
    26.27s  user  발화 끝
    26.32s  agent 발화 시작: <ret> 네, 사용자 에이전트를 SuperCrawler 버전 십 점 이로 변경했습니다. 이제 최신 버전이네
    28.24s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.58s]: (tool result) User agent set to SuperCrawler version 10.2
    30.90s  agent 발화 끝
