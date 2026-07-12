# v3_mcp_01_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mcp_01",
#     "name": "시재",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "late 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2025-11-16",
#       "category": "pet",
#       "text": "User has a Siamese cat named Bella."
#     },
#     {
#       "date": "2025-11-10",
#       "category": "home",
#       "text": "User's home address is 서울 강남구 역삼동 678-9."
#     },
#     {
#       "date": "2025-07-14",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Ethiopian."
#     },
#     {
#       "date": "2025-06-08",
#       "category": "hobby",
#       "text": "User is into alpine wildflower photography."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-09-03",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2025-08-06",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2025-06-04",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 이번 주 토요일에 영화 보러 가고 싶은데, 혹시 괜찮은 거 있어?
     5.81s  agent 발화 시작: 음, 아직 어떤 영화를 보고 싶으신지 말씀해 주시지 않으셨어요. 어떤 장르를 좋아하시나요?
     5.81s  user  발화 끝
    12.14s  user  발화 시작: 음… 액션 영화 보고 싶은데…
    12.14s  agent 발화 끝
    14.78s  user  발화 시작: …최신 개봉작 중에서 찾아봐 줘.
    14.78s  user  발화 끝
    17.18s  <ret> 발화 (turn4 첫 프레임)
    17.42s  agent 발화 시작: <ret> 최신 개봉작 중에서 액션 영화는 '탑건: 매버릭'이 있네요. 씨 지 브이 강남, 롯데시네마 월드,
    17.42s  ⚡SPAN 주입 [d'=2.00s / d_lead=12.67s]: (tool result) "Top Gun: Maverick (2022) - Action, Adventure, Drama. Sh
    17.42s  user  발화 끝
    30.08s  agent 발화 끝
