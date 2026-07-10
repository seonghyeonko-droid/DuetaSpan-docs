# v3_mem_34_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_34",
#     "name": "지원",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "40s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-19",
#       "category": "diet",
#       "text": "User is vegetarian."
#     },
#     {
#       "date": "2026-04-15",
#       "category": "home",
#       "text": "User's home address is 서울 마포구 성산동 45-6."
#     },
#     {
#       "date": "2025-08-25",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-08-06",
#       "category": "hobby",
#       "text": "User is into alpine wildflower photography."
#     },
#     {
#       "date": "2025-06-16",
#       "category": "work",
#       "text": "User works as a architect."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-13",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 음… 안녕하세요. | S2 친구 집은 강남역 근처예요. | S3 아, 일만 팔천 원이요? | S4 아, 네, 좋겠어요.

     0.00s  agent 발화 시작: 안녕하세요, 지원님. 저는 여러분의 삶의 전환을 돕는 가이드, 히아입니다.
     4.96s  user  발화 시작: 음… 안녕하세요.
     5.18s  agent 발화 끝
     6.67s  agent 발화 시작: 혹시 어디로 이동하실 계획이 있으신가요?
     6.90s  user  발화 끝
     9.21s  agent 발화 끝
    10.69s  user  발화 시작: 네, 친구 집인데…
    12.19s  <ret> 발화 (turn4 첫 프레임)
    12.35s  agent 발화 시작: <ret> 서울 마포구 성산동 사 오 육에서 출발하시는군요. 어디로 가실 건가요?
    12.35s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.91s]: [2026-04-15] User's home address is 서울 마포구 성산동 45-6.
    12.44s  user  발화 끝
    15.82s  user  발화 시작: 어.
    16.32s  user  발화 끝
    17.20s  user  발화 시작: 친구 집은 강남역 근처예요.
    17.25s  agent 발화 끝
    19.33s  <ret> 발화 (turn7 첫 프레임)
    19.49s  agent 발화 시작: <ret> 자가용으로 가시면 약 이십오분, 십이 점 삼킬로미터 정도 걸립니다. 대중교통은 사십분 정도 소요될
    19.49s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.81s]: (tool result) The fastest route to Gangnam Station from 45-6 Seongsan-
    19.65s  user  발화 끝
    24.22s  user  발화 시작: 어.
    24.85s  user  발화 끝
    26.30s  agent 발화 끝
    26.39s  agent 발화 시작: 혹시 지금 출발하시겠어요? 아니면 특정 시간에 출발하시고 싶으세요?
    28.55s  user  발화 시작: 어.
    29.38s  user  발화 끝
    30.31s  user  발화 시작: 지금 바로 가려고요.
    30.33s  agent 발화 끝
    31.72s  <ret> 발화 (turn12 첫 프레임)
    31.77s  user  발화 끝
    31.80s  agent 발화 시작: <ret> 차량이 확정되었습니다. 예상 도착 시간은 이십칠분이고, 기아 카니발 차량, 박지훈 기사님, 번호판
    31.80s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.81s]: (tool result) Ride confirmed. ETA is 27 minutes. Vehicle: Kia Carnival
    42.61s  agent 발화 끝
    42.83s  user  발화 시작: 아, 일만 팔천 원이요?
    44.76s  user  발화 끝
    44.82s  agent 발화 시작: 네, 일만 팔천 원입니다.
    46.48s  agent 발화 끝
    46.60s  user  발화 시작: 혹시… 제가 채식주의자라는 걸 기억하시죠?
    49.86s  <ret> 발화 (turn16 첫 프레임)
    50.12s  user  발화 끝
    50.26s  agent 발화 시작: <ret> 네, 지원님은 채식주의자이신 걸 기억하고 있습니다. 혹시 강남역 근처에 채식 식당을 알아봐 드릴까
    50.26s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.11s]: [2026-04-19] User is vegetarian.
    52.81s  user  발화 시작: 그치.
    53.21s  user  발화 끝
    56.38s  agent 발화 끝
    56.59s  user  발화 시작: 아, 네, 좋겠어요.
    57.52s  <ret> 발화 (turn19 첫 프레임)
    57.84s  agent 발화 시작: <ret> 강남역 근처에 '러빙헛'(평점 사 점 오, 평균 가격 일만 오천 원), '비건 키친'(평점 사 점
    57.84s  ⚡SPAN 주입 [d'=2.00s / d_lead=12.24s]: (tool result) Found 3 vegetarian restaurants near Gangnam Station: Lov
    57.96s  user  발화 끝
    62.68s  user  발화 시작: 응응.
    63.31s  user  발화 끝
    70.09s  agent 발화 끝
    70.15s  user  발화 시작: 러빙헛이 제일 평점이 좋네요.
    72.44s  agent 발화 시작: 네, '러빙헛'이 평점이 가장 좋네요.
    72.55s  user  발화 끝
    74.69s  agent 발화 끝
