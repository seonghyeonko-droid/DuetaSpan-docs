# v3_mcp_01_cs — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mcp_01",
#     "name": "Camille",
#     "location": {
#       "city": "Berlin",
#       "country": "Germany",
#       "timezone": "Europe/Berlin (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "German",
#     "gender": "female",
#     "age_range": "early 20s",
#     "language": "German"
#   },
#   "saved_memories": [
#     {
#       "date": "2025-12-13",
#       "category": "work",
#       "text": "User works as a physical therapist."
#     },
#     {
#       "date": "2025-09-13",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-08-26",
#       "category": "home",
#       "text": "User's home address is 704 Elm Street."
#     },
#     {
#       "date": "2025-08-23",
#       "category": "trip",
#       "text": "User is planning a trip to Switzerland in December."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-18",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2025-11-11",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2025-06-09",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 데이비드 리 님께 5달러 요청해 주시면 될까요? | S2 정말 다행이네요, 감사합니다. 혹시 지금 승인됐는지 확인해 주 | S3 아, 잠깐만요. 혹시 오늘이 무슨 요일인지 다시 한번 알려주실 | S4 아니요, 지금은 괜찮습니다. 엘루나스, 고맙습니다.

     0.00s  user  발화 시작: 데이비드 리 님께 5달러 요청해 주시면 될까요?
     0.00s  <ret> 발화 (turn1 첫 프레임)
     0.09s  agent 발화 시작: <ret> 응, 데이비드 리 님께 5달러 요청 보냈어. 거래 ID는 8675309야. 지금 지출에 도움이 됐
     0.09s  ⚡SPAN 주입 [d'=0.19s / d_lead=0.19s]: (tool result) Payment request sent to David Lee for $5.00. Transaction
     0.09s  user  발화 끝
     0.28s  user  발화 시작: 네네.
     0.28s  agent 발화 끝
     0.29s  user  발화 시작: 정말 다행이네요, 감사합니다. 혹시 지금 승인됐는지 확인해 주실 수 있을까요?
     0.29s  user  발화 끝
     0.31s  <ret> 발화 (turn6 첫 프레임)
     0.42s  agent 발화 시작: 잠깐만, 그 요청 상태를 확인해 볼게—
     0.42s  user  발화 끝
     0.49s  user  발화 시작: 아, 잠깐만요. 혹시 오늘이 무슨 요일인지 다시 한번 알려주실 수 있을까요?
     0.49s  agent 발화 끝
     0.63s  agent 발화 시작: <ret> 데이비드 리 님이 결제를 승인했어! 5달러가 전송됐어. 거래 ID는 9876543이야.
     0.63s  ⚡SPAN 주입 [d'=0.13s / d_lead=0.13s]: (tool result) Payment of $5.00 to David Lee completed. Transaction ID:
     0.63s  user  발화 끝
     0.76s  user  발화 시작: 아니요, 지금은 괜찮습니다. 엘루나스, 고맙습니다.
     0.76s  agent 발화 끝
     0.82s  agent 발화 시작: 천만에. 도와드릴 수 있어서 기뻐. 작은 노력도 큰 변화를 만들 수 있다는 걸 기억해.
     0.82s  user  발화 끝
     1.00s  agent 발화 끝
