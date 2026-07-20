# v3_mcp_01_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mcp_01",
#     "name": "예정",
#     "location": {
#       "city": "Seoul",
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
#       "date": "2026-06-16",
#       "category": "coffee",
#       "text": "User's usual coffee order is a cappuccino with oat milk."
#     },
#     {
#       "date": "2026-06-15",
#       "category": "hobby",
#       "text": "User is into sea kayaking."
#     },
#     {
#       "date": "2026-02-15",
#       "category": "gym",
#       "text": "User has a gym membership near the office."
#     },
#     {
#       "date": "2026-02-03",
#       "category": "employer",
#       "text": "User works at an airline."
#     },
#     {
#       "date": "2026-02-02",
#       "category": "learning",
#       "text": "User is taking an online data-science course."
#     },
#     {
#       "date": "2025-12-17",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-21",
#       "title": "Choosing a laptop",
#       "bullets": [
#         "budget around 1.8M won",
#         "needs it for video editing and light gaming"
#       ]
#     },
#     {
#       "date": "2026-01-12",
#       "title": "Planning a camping trip",
#       "bullets": [
#         "a weekend at a lake site in September",
#         "asked about a 4-person tent and a cooler"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 혹시 아이피 주소 십.영 점 일 위치가 어디인지 알려줄 수 있 | S2 서울역 근처에 맛집이 있으면 추천해 줄 수 있어? – | S3 … 혹시 혼자 먹기 좋은 곳으로만 알려줄래? | S4 무교동 라멘… 알았어. 고마워!

     0.00s  user  발화 시작: 혹시 아이피 주소 십.영 점 일 위치가 어디인지 알려줄 수 있어?
     3.48s  <ret> 발화 (turn1 첫 프레임)
     4.03s  agent 발화 시작: <ret> 그 아이피 주소는 한국 서울에 위치해 있습니다, 위도는 삼십칠 점 오 육도, 경도는 백이십육 점 
     4.21s  user  발화 끝
     4.51s  ⚡SPAN 주입 [d'=1.03s / d_lead=7.28s]: (tool result) {"latitude": 37.5665, "longitude": 126.9780, "city": "Se
    11.31s  agent 발화 끝
    11.47s  user  발화 시작: 서울이라고? 음… 그럼 혹시 서울에서 가장 가까운 지하철역이 어디야?
    16.55s  <ret> 발화 (turn3 첫 프레임)
    16.59s  agent 발화 시작: <ret> 서울역이 가장 가까운데, 서울역까지 거리는 약 영 점 오킬로미터입니다. 주소는 중구 한강대로 십번
    16.75s  user  발화 끝
    18.05s  ⚡SPAN 주입 [d'=1.50s / d_lead=7.23s]: (tool result) {"name": "Seoul Station", "distance": 0.5, "address": "1
    21.20s  user  발화 시작: 와.
    21.83s  user  발화 끝
    23.80s  agent 발화 시작: 서울역은 환승역이라 어디든 가기 편리할 거예요.
    23.82s  agent 발화 끝
    26.38s  user  발화 시작: 서울역 근처에 맛집이 있으면 추천해 줄 수 있어? –
    26.71s  agent 발화 끝
    29.38s  user  발화 시작: … 혹시 혼자 먹기 좋은 곳으로만 알려줄래?
    29.47s  user  발화 끝
    31.58s  <ret> 발화 (turn8 첫 프레임)
    31.85s  agent 발화 시작: <ret> 서울역 근처에 있는 무교동 라멘이 평점이 사 점 이점이고, 혼자 먹기 좋다고 하네요. 주소는 중구
    31.97s  user  발화 끝
    32.89s  ⚡SPAN 주입 [d'=1.31s / d_lead=9.13s]: (tool result) {"name": "Mugyodong Ramen", "rating": 4.2, "address": "7
    36.37s  user  발화 시작: 응.
    36.78s  user  발화 끝
    40.98s  agent 발화 끝
    41.12s  user  발화 시작: 무교동 라멘… 알았어. 고마워!
    43.42s  user  발화 끝
