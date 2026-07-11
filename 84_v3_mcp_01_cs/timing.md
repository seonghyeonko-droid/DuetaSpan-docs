# v3_mcp_01_cs — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mcp_01",
#     "name": "Sky",
#     "location": {
#       "city": "Sydney",
#       "country": "Australia",
#       "timezone": "Australia/Sydney (AEDT, UTC+11)",
#       "currency": "AUD ($)"
#     },
#     "nationality": "Australian",
#     "gender": "non-binary",
#     "age_range": "late 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-03-25",
#       "category": "hobby",
#       "text": "User is into birdwatching."
#     },
#     {
#       "date": "2026-03-23",
#       "category": "diet",
#       "text": "User is pescatarian."
#     },
#     {
#       "date": "2026-03-13",
#       "category": "home",
#       "text": "User's home address is 865 Pine Court."
#     },
#     {
#       "date": "2026-02-07",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-09-24",
#       "category": "trip",
#       "text": "User is planning a trip to Lisbon in October."
#     },
#     {
#       "date": "2025-08-02",
#       "category": "work",
#       "text": "User works as a graduate student."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-08-09",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2025-06-27",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 안녕하세요. 교통 상황이 어떠신가요? | S2 네, 상하이의 해당 좌표, 31.23, 121.47 주변 교통 | S3 흠, 보통이군요… 지금 열려 있는 근처 식당을 찾아 주시겠어요 | S4 윈난 음식이요… 흥미로운데요. 혹시 거기 두 명 자리를 7시 

     0.00s  user  발화 시작: 안녕하세요. 교통 상황이 어떠신가요?
     0.01s  <ret> 발화 (turn2 첫 프레임)
     0.05s  user  발화 시작: 네, 상하이의 해당 좌표, 31.23, 121.47 주변 교통 상황이 궁금합니다.
     0.05s  user  발화 끝
     0.17s  agent 발화 시작: <ret> 음, 해당 좌표 주변 상하이 교통 상황은 현재 보통입니다. 지금 시간대에는 평소와 비슷해 보여요.
     0.17s  ⚡SPAN 주입 [d'=0.17s / d_lead=0.17s]: (tool result) {"distance": 0, "duration": 0, "status": "OK", "traffic"
     0.17s  user  발화 끝
     0.29s  <ret> 발화 (turn5 첫 프레임)
     0.33s  user  발화 시작: 네.
     0.33s  agent 발화 끝
     0.35s  user  발화 시작: 흠, 보통이군요… 지금 열려 있는 근처 식당을 찾아 주시겠어요?
     0.35s  user  발화 끝
     0.45s  agent 발화 시작: <ret> 글쎄요, 와이탄에 있는 윈난 음식점 로스트 헤븐이 지금 열려 있습니다. 정말 인기 있는 곳이에요.
     0.45s  ⚡SPAN 주입 [d'=0.17s / d_lead=0.17s]: (tool result) {"name": "Lost Heaven", "address": "Bund 27, Huangpu Dis
     0.45s  user  발화 끝
     0.47s  <ret> 발화 (turn7 첫 프레임)
     0.62s  user  발화 시작: 윈난 음식이요… 흥미로운데요. 혹시 거기 두 명 자리를 7시 30분에 예약해 주실 수 있을까요?
     0.62s  agent 발화 끝
     0.79s  agent 발화 시작: <ret> 네, 로스트 헤븐에 두 명 자리를 7시 30분에 예약했습니다. 확인 번호는 LH78923입니다. 
     0.79s  ⚡SPAN 주입 [d'=0.21s / d_lead=0.21s]: (tool result) {"confirmation id": "LH78923", "restaurant name": "Lost 
     0.79s  user  발화 끝
     1.00s  agent 발화 끝
