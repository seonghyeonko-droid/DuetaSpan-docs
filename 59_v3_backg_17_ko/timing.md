# v3_backg_17_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_backg_17",
#     "name": "보영",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "early 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-03-15",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2025-12-08",
#       "category": "diet",
#       "text": "User is gluten-free."
#     },
#     {
#       "date": "2025-11-24",
#       "category": "home",
#       "text": "User's home address is 대구 중구 동인동 88-1."
#     },
#     {
#       "date": "2025-08-13",
#       "category": "work",
#       "text": "User works as a high-school teacher."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-07",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2026-02-05",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2025-11-29",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 보잉 칠백칠십칠의 항속 거리가 궁금해. | S2 아, 그렇구나. 그럼 킬로미터로는 얼마나 돼? | S3 혹시 제일 멀리 날아간 보잉 칠백칠십칠 기록이 있어? | S4 음… 제주도는 어때?

     0.00s  user  발화 시작: 보잉 칠백칠십칠의 항속 거리가 궁금해.
     2.60s  <ret> 발화 (turn1 첫 프레임)
     2.76s  agent 발화 시작: <ret> 보잉 칠백칠십칠의 항속 거리는 오천이백사십에서 팔천오백오십오 해리 정도예요.
     2.76s  ⚡SPAN 주입 [d'=0.50s / d_lead=4.41s]: The Boeing 777 has a range of 5,240 to 8,555 nautical miles.
     2.76s  user  발화 끝
     7.17s  user  발화 시작: 아, 오늘 저녁 메뉴는 뭘로 할까?
     7.17s  agent 발화 끝
    10.48s  agent 발화 시작: 여행 계획 세우시는 데 도움이 되셨으면 좋겠네요.
    10.48s  user  발화 끝
    14.34s  user  발화 시작: 음.
    14.34s  agent 발화 끝
    14.89s  user  발화 시작: 해리는 또 뭐고?
    14.89s  user  발화 끝
    16.30s  <ret> 발화 (turn6 첫 프레임)
    16.54s  agent 발화 시작: <ret> 해리는 항해에 쓰이는 거리 단위인데, 육상 마일로 환산하면 약 일 점 일 오마일 정도 돼요.
    16.54s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.27s]: A nautical mile is a unit of distance used in navigation and is equal 
    16.54s  user  발화 끝
    24.82s  user  발화 시작: 아, 그렇구나. 그럼 킬로미터로는 얼마나 돼?
    24.82s  agent 발화 끝
    27.97s  <ret> 발화 (turn8 첫 프레임)
    28.13s  agent 발화 시작: <ret> 킬로미터로 환산하면 약 일만 오천팔백팔십이 점 오 일킬로미터 정도 됩니다.
    28.13s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.51s]: (tool result) 15882.51 kilometers
    28.13s  user  발화 끝
    33.64s  user  발화 시작: 오.
    33.64s  agent 발화 끝
    34.19s  user  발화 시작: 와, 진짜 멀리도 가네.
    34.19s  user  발화 끝
    36.40s  agent 발화 시작: 장거리 여행을 좋아하시는군요. 가족들과 함께 멋진 추억을 만드시길 바랍니다.
    36.40s  user  발화 끝
    41.36s  user  발화 시작: 혹시 제일 멀리 날아간 보잉 칠백칠십칠 기록이 있어?
    41.36s  agent 발화 끝
    45.45s  <ret> 발화 (turn13 첫 프레임)
    45.77s  agent 발화 시작: <ret> 보잉 칠백칠십칠로 가장 멀리 논스톱으로 날아간 기록은 홍콩에서 런던까지 일만 사천오백삼십사킬로미터
    45.77s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.17s]: The longest non-stop flight by a Boeing 777 was 14,534 km (8,998 nm) f
    45.77s  user  발화 끝
    52.94s  user  발화 시작: 응응.
    52.94s  agent 발화 끝
    53.50s  user  발화 시작: 런던까지! 대단하다.
    53.50s  user  발화 끝
    54.60s  agent 발화 시작: 아이들과 함께 런던 여행을 계획해 보시는 건 어떠세요? 잊지 못할 경험이 될 거예요.
    54.60s  user  발화 끝
    61.77s  user  발화 시작: 아이들이 아직 어려서… 좀 더 가까운 곳으로 알아봐야겠어.
    61.77s  agent 발화 끝
    66.18s  agent 발화 시작: 그렇군요. 아이들의 연령에 맞는 여행지를 찾아보는 게 좋겠어요. 어떤 곳을 선호하시나요?
    66.18s  user  발화 끝
    72.25s  user  발화 시작: 음.
    72.25s  agent 발화 끝
    72.80s  user  발화 시작: 음… 제주도는 어때?
    72.80s  user  발화 끝
    74.29s  <ret> 발화 (turn21 첫 프레임)
    74.45s  agent 발화 시작: <ret> 제주도는 한국 남쪽 해안에 있는 화산섬이에요. 아름다운 자연경관을 자랑하는 곳이죠.
    74.45s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.51s]: Jeju Island is a volcanic island off the southern coast of South Korea
    74.45s  user  발화 끝
    79.97s  user  발화 시작: 좋아, 그럼 제주도 항공권 좀 찾아줘.
    79.97s  agent 발화 끝
    82.88s  <ret> 발화 (turn23 첫 프레임)
    83.28s  agent 발화 시작: <ret> 서울에서 제주도 가는 항공권은 오만 원부터 시작합니다.
    83.28s  ⚡SPAN 주입 [d'=1.44s / d_lead=3.86s]: (tool result) Flights from Seoul to Jeju Island start at ₩50,000.
    83.28s  user  발화 끝
    87.14s  agent 발화 끝
