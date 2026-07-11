# v3_mcp_01_cs — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mcp_01",
#     "name": "Bruno",
#     "location": {
#       "city": "Toronto",
#       "country": "Canada",
#       "timezone": "America/Toronto (EST, UTC-5)",
#       "currency": "CAD ($)"
#     },
#     "nationality": "Canadian",
#     "gender": "male",
#     "age_range": "early 20s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-18",
#       "category": "allergy",
#       "text": "User is allergic to shellfish."
#     },
#     {
#       "date": "2026-05-23",
#       "category": "trip",
#       "text": "User is planning a trip to Lisbon in May."
#     },
#     {
#       "date": "2026-03-20",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2026-01-17",
#       "category": "home",
#       "text": "User's home address is 366 Birch Road."
#     },
#     {
#       "date": "2025-09-24",
#       "category": "work",
#       "text": "User works as a graphic designer."
#     },
#     {
#       "date": "2025-07-12",
#       "category": "diet",
#       "text": "User is gluten-free."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-02-23",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 혹시 문서 새 탭으로 열어 주실 수 있을까요?
     0.00s  <ret> 발화 (turn1 첫 프레임)
     0.13s  agent 발화 시작: <ret> 네, Tavily 문서가 이천이십사 년 7월 9일에 새 탭으로 열렸습니다.
     0.13s  ⚡SPAN 주입 [d'=0.16s / d_lead=0.16s]: (tool result) Documentation - Tavily 2024-07-09 Documentation is a key
     0.13s  user  발화 끝
     0.23s  <ret> 발화 (turn3 첫 프레임)
     0.30s  user  발화 시작: 음, 그게 아니라 Playwright 문서가 필요해요.
     0.30s  agent 발화 끝
     0.39s  agent 발화 시작: <ret> 아, 죄송합니다. Microsoft Learn에서 Playwright 문서를 찾았습니다. 안정적인
     0.39s  ⚡SPAN 주입 [d'=0.20s / d_lead=0.20s]: (tool result) Playwright - Documentation - Microsoft Learn Playwright 
     0.39s  user  발화 끝
     0.59s  user  발화 시작: 네.
     0.59s  agent 발화 끝
     0.61s  user  발화 시작: 정말 좋네요, 감사합니다. 지금 서울 날씨는 어떤가요?
     0.61s  user  발화 끝
     0.72s  agent 발화 시작: 서울 날씨 확인 중입니다… 현재 기온은 섭씨 23.0도이고, 습도는 74%, 풍속은 시속 5.5킬로미터입니다
     0.72s  user  발화 끝
     1.00s  agent 발화 끝
