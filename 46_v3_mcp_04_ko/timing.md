# v3_mcp_04_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mcp_04",
#     "name": "정경",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "early 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-16",
#       "category": "home",
#       "text": "User's home address is 경기 성남시 분당구 판교로 235."
#     },
#     {
#       "date": "2026-02-03",
#       "category": "work",
#       "text": "User works as a high-school teacher."
#     },
#     {
#       "date": "2026-01-22",
#       "category": "pet",
#       "text": "User has a Golden Retriever named Max."
#     },
#     {
#       "date": "2025-10-15",
#       "category": "hobby",
#       "text": "User is into vintage synth collecting."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-12-11",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2025-11-26",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2025-09-06",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 비비씨 뉴스 좀 훑어봐 줄래? 깊이는 세 단계로 하고, 링크는 쉰개까지.
     0.00s  <ret> 발화 (turn1 첫 프레임)
     0.11s  agent 발화 시작: <ret> 비비씨 뉴스 웹사이트를 최대 깊이 삼단계, 링크 쉰개까지 훑어봤어요. 그 결과 상위 열개 링크를 
     0.11s  ⚡SPAN 주입 [d'=0.15s / d_lead=0.15s]: (tool result) {"url": "https://www.bbc.com/news", "max depth": 3, "max
     0.11s  user  발화 끝
     0.27s  user  발화 시작: 음… 그 중에서 중국 관련 뉴스 링크가 있어?
     0.27s  agent 발화 끝
     0.32s  <ret> 발화 (turn6 첫 프레임)
     0.35s  agent 발화 시작: 네, 비비씨 뉴스에서 중국 관련 기사 링크는 이거예요. https://www.bbc.com/news/worl
     0.35s  user  발화 끝
     0.44s  user  발화 시작: 진짜요?
     0.44s  agent 발화 끝
     0.45s  user  발화 시작: 이번 주 토요일에 서울에서 재즈 콘서트 하는 곳 찾아줄 수 있어?
     0.45s  user  발화 끝
     0.56s  agent 발화 시작: <ret> 이번 주 토요일 서울에서 재즈 콘서트를 할 수 있는 곳은 서울 재즈 클럽과 원스 인 서울 두 곳을
     0.56s  ⚡SPAN 주입 [d'=0.44s / d_lead=0.44s]: (tool result) {"restaurants": [{"name": "Seoul Jazz Club", "address": 
     0.56s  user  발화 끝
     1.00s  agent 발화 끝
