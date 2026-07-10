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
     5.09s  <ret> 발화 (turn1 첫 프레임)
     5.48s  agent 발화 시작: <ret> 사용자 에이전트를 SuperCrawler 버전 십 점 일로 설정했습니다. 이제 웹페이지를 요청할 
     5.51s  user  발화 끝
     7.09s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.62s]: (tool result) User agent set to SuperCrawler version 10.1
     9.41s  user  발화 시작: 아.
    10.04s  user  발화 끝
    14.10s  agent 발화 끝
    14.91s  user  발화 시작: 음, 그 사용자 에이전트로 구글 홈페이지에 접속해서 페이지 제목을 알려줄 수 있을까?
    20.10s  <ret> 발화 (turn4 첫 프레임)
    20.32s  agent 발화 시작: <ret> 구글 홈페이지의 제목은 'Google'입니다. SuperCrawler 사용자 에이전트로 접속하여 
    20.37s  user  발화 끝
    22.10s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.70s]: (tool result) Page title: Google
    25.93s  user  발화 시작: 아, 그런데 잠깐만. 혹시 지금 사용하고 있는 내 IP 주소도 알려줄 수 있어?
    26.02s  agent 발화 끝
    30.93s  user  발화 끝
    31.12s  <ret> 발화 (turn6 첫 프레임)
    31.19s  agent 발화 시작: <ret> 현재 사용하시는 IP 주소는 백구십이 점 영.이 점 사 사입니다.
    33.12s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.86s]: (tool result) Current IP address: 192.0.2.44
    36.05s  agent 발화 끝
