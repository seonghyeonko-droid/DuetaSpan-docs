# v3_mcp_00_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mcp_00",
#     "name": "서민",
#     "location": {
#       "city": "Busan",
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
#       "date": "2026-04-25",
#       "category": "diet",
#       "text": "User is pescatarian."
#     },
#     {
#       "date": "2026-04-21",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is sushi."
#     },
#     {
#       "date": "2026-03-23",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2025-10-08",
#       "category": "trip",
#       "text": "User is planning a trip to Vietnam in December."
#     },
#     {
#       "date": "2025-08-31",
#       "category": "home",
#       "text": "User's home address is 부산 수영구 광안동 210-3."
#     },
#     {
#       "date": "2025-07-27",
#       "category": "pet",
#       "text": "User has a Golden Retriever named Max."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-11-25",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2025-10-11",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2025-06-13",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 혹시 삼십칠 점 오 육, 백이십칠 점 영 육 좌표가 어디쯤인지 | S2 아, 종로구나. 그럼 거기서 가장 가까운 지하철역이 어디야? | S3 종각역… 거기는 예전에 자주 갔던 곳인데. | S4 음… 옛날에 친구랑 영화 보러 갔던 기억이 나.

     0.00s  user  발화 시작: 혹시 삼십칠 점 오 육, 백이십칠 점 영 육 좌표가 어디쯤인지 알려줄 수 있어?
     7.21s  <ret> 발화 (turn1 첫 프레임)
     7.45s  agent 발화 시작: <ret> 그 좌표는 대한민국 서울특별시 종로구 종로오길 십팔번지에 위치하고 있어요. 서울의 중심부라고 할 
     7.45s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.45s]: (tool result) {"address": "18, Jongno 5(o)-gil, Jongno-gu, Seoul, Sout
     7.45s  user  발화 끝
    14.91s  user  발화 시작: 아, 종로구나. 그럼 거기서 가장 가까운 지하철역이 어디야?
    14.91s  agent 발화 끝
    19.17s  agent 발화 시작: 그 근처에는 종각역이 가장 가깝습니다. 도보로 오분 정도면 갈 수 있을 거예요.
    19.17s  user  발화 끝
    25.55s  user  발화 시작: 종각역… 거기는 예전에 자주 갔던 곳인데.
    25.55s  agent 발화 끝
    28.75s  agent 발화 시작: 그곳은 오랜 추억이 있는 곳이군요. 기억에 남는 일이 있으셨던가요?
    28.75s  user  발화 끝
    33.54s  user  발화 시작: 음… 옛날에 친구랑 영화 보러 갔던 기억이 나.
    33.54s  agent 발화 끝
    37.80s  agent 발화 시작: 친구분과 함께 좋은 시간을 보내셨군요. 함께하는 추억은 언제나 소중하죠.
    37.80s  user  발화 끝
    42.59s  agent 발화 끝
