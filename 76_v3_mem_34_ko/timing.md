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
#       "text": "User's home address is 124 Elm Street."
#     },
#     {
#       "date": "2025-08-25",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-08-06",
#       "category": "hobby",
#       "text": "User is into home fermentation."
#     },
#     {
#       "date": "2025-06-16",
#       "category": "work",
#       "text": "User works as a nurse."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-03-31",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2025-10-29",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2025-10-20",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 그냥 그래요. 저… 혹시 지금 집에서 해운대까지 얼마나 걸릴까 | S2 아니요, 괜찮아요. 혹시… 제가 채식주의자라는 거 기억하세요? | S3 유료 주차장… 아, 그럼 거기로 가는 길에 꽃집 들러도 될까요 | S4 아, 좋네요. 정말 고맙습니다.

     0.00s  agent 발화 시작: 지원 씨, 안녕하세요. 저는 에이전트 히아입니다. 오늘 하루는 어떠셨어요?
     4.95s  user  발화 시작: 그냥 그래요. 저… 혹시 지금 집에서 해운대까지 얼마나 걸릴까요?
     5.28s  agent 발화 끝
     9.55s  <ret> 발화 (turn2 첫 프레임)
     9.63s  agent 발화 시작: <ret> 지원 씨의 집 주소는 Elm Street 백이십사번지인데, 현재 교통 상황을 확인해 보면 해운대까
     9.90s  user  발화 끝
    11.55s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.99s]: [2026-04-15] User's home address is 124 Elm Street.
    13.44s  user  발화 시작: 음.
    13.93s  user  발화 끝
    18.40s  user  발화 시작: 아, 네… 그럼 대중교통은요?
    18.62s  agent 발화 끝
    20.46s  <ret> 발화 (turn5 첫 프레임)
    20.69s  agent 발화 시작: <ret> Elm Street에서 해운대까지 버스 백이십구번을 타시면 오십이분 정도 걸립니다.
    20.75s  user  발화 끝
    22.46s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.42s]: (tool result) Bus 129 from Elm Street to Haeundae, 52 minutes.
    25.85s  user  발화 시작: 오십이분… 으음…
    26.11s  agent 발화 끝
    27.55s  user  발화 끝
    27.64s  agent 발화 시작: 버스 노선 정보와 실시간 도착 예정 시간을 확인해 드릴까요?
    31.34s  agent 발화 끝
    31.57s  user  발화 시작: 아니요, 괜찮아요. 혹시… 제가 채식주의자라는 거 기억하세요?
    36.98s  user  발화 끝
    37.04s  <ret> 발화 (turn9 첫 프레임)
    37.12s  agent 발화 시작: <ret> 네, 지원 씨는 채식주의자이신 것을 기억하고 있습니다. 해운대에 도착해서 채식 식당을 찾으시는 건
    39.04s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.79s]: [2026-04-19] User is vegetarian.
    42.84s  user  발화 시작: 맞아요. 맛있는 비건 식당 있으면 추천 좀 해주세요.
    42.91s  agent 발화 끝
    46.47s  <ret> 발화 (turn11 첫 프레임)
    46.63s  agent 발화 시작: <ret> 해운대에 "Green Leaf"라는 비건 식당이 있는데, 평점이 사 점 오점이고 평균 가격은 일만
    46.86s  user  발화 끝
    48.47s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.01s]: (tool result) Vegan restaurant "Green Leaf" in Haeundae, 4.5 stars, ₩1
    49.80s  user  발화 시작: 어.
    50.43s  user  발화 끝
    52.65s  agent 발화 끝
    53.46s  user  발화 시작: 일만 오천 원… 괜찮네요. 그쪽 근처에 주차는 가능한가요?
    57.65s  <ret> 발화 (turn14 첫 프레임)
    57.72s  agent 발화 시작: <ret> "Green Leaf"는 길가 주차가 제한적이며, 근처에 유료 주차장이 있습니다.
    57.86s  user  발화 끝
    59.65s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.09s]: (tool result) "Green Leaf" has limited street parking; nearby paid par
    59.86s  user  발화 시작: 그치.
    60.30s  user  발화 끝
    62.76s  user  발화 시작: 유료 주차장… 아, 그럼 거기로 가는 길에 꽃집 들러도 될까요?
    62.82s  agent 발화 끝
    67.88s  agent 발화 시작: 지원 씨, 혹시 특별히 선호하시는 꽃 종류가 있으신가요?
    67.99s  user  발화 끝
    70.16s  user  발화 시작: 응응.
    70.79s  user  발화 끝
    71.39s  agent 발화 끝
    71.49s  user  발화 시작: 음… 카라를 좋아해요.
    73.24s  user  발화 끝
    73.27s  agent 발화 시작: 카라를 좋아하시는군요. 해운대 가는 길에 카라를 판매하는 꽃집을 찾아드릴까요?
    74.80s  user  발화 시작: 응.
    75.20s  user  발화 끝
    77.79s  agent 발화 끝
    77.87s  user  발화 시작: 네, 부탁드려요.
    79.12s  <ret> 발화 (turn23 첫 프레임)
    79.36s  agent 발화 시작: <ret> Elm Street에서 해운대로 가는 길에 "Flower Paradise"라는 꽃집이 있는데, 카
    79.52s  user  발화 끝
    80.48s  ⚡SPAN 주입 [d'=1.36s / d_lead=7.93s]: (tool result) "Flower Paradise" on the route, sells calla lilies, open
    82.94s  user  발화 시작: 응.
    83.39s  user  발화 끝
    87.28s  agent 발화 끝
    87.39s  user  발화 시작: 아, 좋네요. 정말 고맙습니다.
    89.42s  agent 발화 시작: 도움이 되어 기쁩니다.
    89.59s  user  발화 끝
    90.75s  agent 발화 끝
    91.23s  user  발화 시작: 아니요, 괜찮아요. 그럼 이만…
    93.21s  user  발화 끝
    93.24s  agent 발화 시작: 즐거운 여행 되세요.
    94.62s  agent 발화 끝
