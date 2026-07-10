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
#       "text": "User's home address is 대구 중구 동인동 88-1."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-12-21",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2025-07-16",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 혹시 사용자 에이전트를 SuperCrawler 버전 십 점 일로 설정해 줄 수 있을까요?
     4.31s  <ret> 발화 (turn1 첫 프레임)
     4.44s  user  발화 끝
     4.69s  agent 발화 시작: <ret> 사용자 에이전트를 SuperCrawler 버전 십 점 일로 설정했습니다.
     4.71s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.56s]: (tool result) User agent set to SuperCrawler version 10.1.
     6.61s  user  발화 시작: 네.
     7.02s  user  발화 끝
     8.25s  agent 발화 끝
     8.69s  user  발화 시작: 음… 혹시 지금 웹사이트가 제대로 보이는지 확인해 줄 수 있을까요?
    12.90s  <ret> 발화 (turn4 첫 프레임)
    13.13s  agent 발화 시작: <ret> 웹사이트가 성공적으로 로드되었고, 상태 코드는 이백입니다.
    13.14s  ⚡SPAN 주입 [d'=1.76s / d_lead=4.16s]: (tool result) Website loaded successfully. Status code: 200.
    13.36s  user  발화 끝
    17.29s  agent 발화 끝
    17.65s  user  발화 시작: 아, 네, 알겠습니다. 혹시 지금 서울 날씨는 어때요?
    20.94s  <ret> 발화 (turn6 첫 프레임)
    20.97s  user  발화 끝
    21.02s  agent 발화 시작: <ret> 현재 서울의 기온은 이십삼도이고, 습도는 칠십사%, 바람은 시속 오 점 오킬로미터입니다.
    21.02s  ⚡SPAN 주입 [d'=0.64s / d_lead=5.97s]: (tool result) 23.0°C, humidity 74%, wind 5.5 km/h.
    26.99s  agent 발화 끝
