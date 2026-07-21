# v3_chain_06_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_chain_06",
#     "name": "주진",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "mid 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-24",
#       "category": "coffee",
#       "text": "User's usual coffee order is a cappuccino with oat milk."
#     },
#     {
#       "date": "2026-05-20",
#       "category": "floor",
#       "text": "User lives on the 5th floor."
#     },
#     {
#       "date": "2026-05-04",
#       "category": "savings",
#       "text": "User is saving for a down payment on an apartment."
#     },
#     {
#       "date": "2026-05-01",
#       "category": "work",
#       "text": "User works as a mechanical engineer."
#     },
#     {
#       "date": "2026-02-28",
#       "category": "music",
#       "text": "User likes listening to classical piano."
#     },
#     {
#       "date": "2025-12-03",
#       "category": "temp",
#       "text": "User keeps the home thermostat around 26°C."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-03-30",
#       "title": "Fixing a leaking faucet",
#       "bullets": [
#         "it's a single-handle kitchen tap",
#         "asked whether to replace the cartridge"
#       ]
#     },
#     {
#       "date": "2026-01-27",
#       "title": "Sorting out a visa",
#       "bullets": [
#         "applying for a working-holiday visa to Australia",
#         "asked about the bank-balance requirement"
#       ]
#     },
#     {
#       "date": "2026-01-23",
#       "title": "Meal-prep planning",
#       "bullets": [
#         "wants high-protein lunches under 600 calories",
#         "avoiding dairy this month"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 코드 생성 세션 시작해서 테스트 디렉터리에 저장해 줘.
     2.95s  <ret> 발화 (turn1 첫 프레임)
     3.24s  user  발화 끝
     3.25s  agent 발화 시작: <ret> [happy] 코드 생성 세션이 시작됐습니다. 세션 아이디는 씨 지 이 공 이 육 공 칠 일 공 
     3.92s  ⚡SPAN 주입 [d'=0.97s / d_lead=12.29s]: (tool result) {"session id": "cg-20260710-1433-892", "status": "active
    10.40s  user  발화 시작: 네네.
    11.04s  user  발화 끝
    15.53s  user  발화 시작: 음, 그 세션에 간단한 유닛 테스트 코드를 만들어 줘. 함수 이름은 'calculate_sum'으로 하고, 
    15.54s  agent 발화 끝
    22.53s  <ret> 발화 (turn4 첫 프레임)
    22.64s  agent 발화 시작: <ret> [happy] 네, 'calculate_sum' 함수에 대한 유닛 테스트 코드를 생성했습니다. 두
    22.80s  user  발화 끝
    23.18s  ⚡SPAN 주입 [d'=0.65s / d_lead=7.60s]: {"code": "def calculate_sum(a, b):\n  return a + b"}
    30.23s  agent 발화 끝
