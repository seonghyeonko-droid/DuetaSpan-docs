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


     0.00s  user  발화 시작: uhhh… 혹시 사용자 에이전트를 SuperCrawler 버전 십 점 일로 설정해 줄 수 있을까요?
     5.65s  <ret> 발화 (turn1 첫 프레임)
     5.75s  user  발화 끝
     6.04s  agent 발화 시작: <ret> 사용자 에이전트를 SuperCrawler 버전 십 점 일로 설정했습니다. 확인해 보시겠어요?
     7.65s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.95s]: (tool result) User-Agent: SuperCrawler/10.1
     8.22s  user  발화 시작: 맞아요.
     8.86s  user  발화 끝
    10.99s  agent 발화 끝
    11.34s  user  발화 시작: 음… 그건 됐고, 그럼 지금 서울 날씨는 어때요?
    14.46s  <ret> 발화 (turn4 첫 프레임)
    14.69s  agent 발화 시작: <ret> 지금 서울은 기온이 스물셋 점 영도이고, 습도는 칠십사 퍼센트, 바람은 시속 오 점 오킬로미터입니
    14.85s  user  발화 끝
    16.45s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.88s]: (tool result) 23.0°C, humidity 74%, wind 5.5 km/h
    22.57s  agent 발화 끝
