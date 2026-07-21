# v3_mem_34_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_34",
#     "name": "서현",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "late 40s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-31",
#       "category": "learning",
#       "text": "User is learning to bake sourdough."
#     },
#     {
#       "date": "2026-04-12",
#       "category": "partner",
#       "text": "User's partner is named Emma."
#     },
#     {
#       "date": "2026-03-02",
#       "category": "airline",
#       "text": "User usually flies with Lufthansa."
#     },
#     {
#       "date": "2026-02-16",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-02-09",
#       "category": "music",
#       "text": "User likes listening to a lo-fi jazz playlist."
#     },
#     {
#       "date": "2025-12-26",
#       "category": "anniversary",
#       "text": "User's anniversary is July 17."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-18",
#       "title": "Comparing health insurance",
#       "bullets": [
#         "self-employed and needs dental",
#         "wants a low deductible"
#       ]
#     },
#     {
#       "date": "2026-03-20",
#       "title": "Planning a camping trip",
#       "bullets": [
#         "a weekend at a lake site in September",
#         "asked about a 4-person tent and a cooler"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 안녕하세요, 지아르님. 잘 부탁드립니다. | S2 버스 백일번이요? 지금 바로 출발하는 버스가 있는지 알아봐 주 | S3 …혹시 택시를 타면 얼마나 걸릴까요? | S4 생각보다 저렴하네요. 감사합니다.

     0.00s  agent 발화 시작: 안녕하세요, 서현님! 저는 지아르입니다. 재정 관리와 예산 계획을 도와드리는 라이프 코치예요.
     4.24s  user  발화 시작: 네.
     4.55s  user  발화 끝
     5.94s  agent 발화 끝
     6.44s  user  발화 시작: 안녕하세요, 지아르님. 잘 부탁드립니다.
     9.73s  user  발화 끝
     9.83s  agent 발화 시작: 혹시 지금 어디로 가려고 하시는 길이신가요?
    10.62s  user  발화 시작: 네네.
    11.02s  user  발화 끝
    12.47s  agent 발화 끝
    12.50s  user  발화 시작: 네, 집에서 부산역까지 가는 방법을 알고 싶어요.
    14.58s  <ret> 발화 (turn6 첫 프레임)
    15.08s  user  발화 끝
    15.08s  agent 발화 시작: <ret> 부산역까지는 자가용으로 약 십오 점 이킬로미터, 이십칠분 정도 걸립니다.
    15.50s  ⚡SPAN 주입 [d'=0.92s / d_lead=5.57s]: Busan (-35.10696, 128.77428): Busan Station (35.10567, 128.77594): 15.
    18.78s  user  발화 시작: 네.
    19.08s  user  발화 끝
    20.49s  <ret> 발화 (turn8 첫 프레임)
    20.60s  agent 발화 시작: <ret> 대중교통으로는 십육 점 삼킬로미터, 약 사십이분이 걸립니다. 버스 백일번을 타시면 됩니다.
    20.65s  agent 발화 끝
    21.09s  ⚡SPAN 주입 [d'=0.60s / d_lead=6.21s]: (tool result) {"distance": "16.3 km", "duration": "42 min", "route": [
    26.81s  agent 발화 끝
    28.28s  user  발화 시작: 버스 백일번이요? 지금 바로 출발하는 버스가 있는지 알아봐 주시겠어요?
    32.48s  <ret> 발화 (turn10 첫 프레임)
    32.64s  agent 발화 시작: <ret> 버스 백일번은 지금부터 열네시 사십오분에 출발하고, 부산역에는 열다섯시 이십칠분에 도착 예정입니다
    32.68s  user  발화 끝
    33.49s  ⚡SPAN 주입 [d'=1.00s / d_lead=7.68s]: (tool result) {"bus number": "101", "origin": "Busan", "destination": 
    40.31s  agent 발화 끝
    40.78s  user  발화 시작: 아, 그럼 지금 출발하면 늦겠네요—
    42.47s  user  발화 시작: …혹시 택시를 타면 얼마나 걸릴까요?
    42.59s  user  발화 끝
    44.52s  <ret> 발화 (turn13 첫 프레임)
    44.52s  agent 발화 시작: <ret> 택시로는 약 십삼 점 오킬로미터, 이십분 정도 소요될 것으로 예상됩니다.
    44.63s  user  발화 끝
    45.91s  ⚡SPAN 주입 [d'=1.39s / d_lead=5.06s]: Busan (-35.10696, 128.77428): Busan Station (35.10567, 128.77594): 13.
    47.53s  user  발화 시작: 맞아요.
    48.02s  user  발화 끝
    49.58s  agent 발화 끝
    51.08s  user  발화 시작: 택시비는 얼마나 할까요?
    51.94s  <ret> 발화 (turn16 첫 프레임)
    52.44s  agent 발화 시작: <ret> 예상 택시 요금은 일만 팔천 원입니다.
    52.46s  user  발화 끝
    52.54s  ⚡SPAN 주입 [d'=0.60s / d_lead=2.68s]: (tool result) {"estimated fare": "18000 KRW", "distance": "13.5 km", "
    53.88s  user  발화 시작: 네.
    54.18s  user  발화 끝
    54.76s  user  발화 시작: 생각보다 저렴하네요. 감사합니다.
    55.12s  agent 발화 끝
    56.83s  user  발화 끝
