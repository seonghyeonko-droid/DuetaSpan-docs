# v3_defer_10_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_defer_10",
#     "name": "지훈",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "50s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-12",
#       "category": "home",
#       "text": "User's home address is 부산 해운대구 우동 123-4."
#     },
#     {
#       "date": "2026-03-22",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-12-21",
#       "category": "work",
#       "text": "User works as a software engineer."
#     },
#     {
#       "date": "2025-12-13",
#       "category": "hobby",
#       "text": "User is into vintage synth collecting."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-11",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2025-07-17",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 자전거로 광둥탑에서 진씨 가옥까지 얼마나 걸릴까? | S2 좋아. 그럼 진씨 가옥… | S3 Panxi Restaurant가 제일 괜찮아 보이는데, 예약해 | S4 …그 근처에 전통 공예품 파는 곳도 있니?

     0.00s  user  발화 시작: 자전거로 광둥탑에서 진씨 가옥까지 얼마나 걸릴까?
     3.64s  <ret> 발화 (turn1 첫 프레임)
     3.71s  agent 발화 시작: <ret> 자전거로 광둥탑에서 진씨 가옥까지는 대략 이 점 삼킬로미터이고, 십이분 정도 걸릴 거예요. 즐거운
     3.72s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.93s]: (tool result) The bike ride from Canton Tower to Chen Clan Academy is 
     3.83s  user  발화 끝
    11.64s  agent 발화 끝
    11.78s  user  발화 시작: 음, 십이분이면 괜찮네. 근데 지금 날씨는 어때?
    15.02s  <ret> 발화 (turn3 첫 프레임)
    15.38s  user  발화 끝
    15.41s  agent 발화 시작: <ret> 지금 광저우 날씨는 삼십일 점 이도이고, 습도는 칠십팔%, 동풍이 육 점 팔킬로미터 속도로 살짝 
    15.42s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.30s]: (tool result) The current weather in Guangzhou is 31.2°C, with humidit
    22.90s  user  발화 시작: 응.
    23.34s  user  발화 끝
    25.67s  user  발화 시작: 좋아. 그럼 진씨 가옥…
    25.71s  agent 발화 끝
    27.38s  user  발화 끝
    29.33s  user  발화 시작: …주변에 맛집도 좀 찾아줘.
    31.04s  <ret> 발화 (turn7 첫 프레임)
    31.43s  agent 발화 시작: <ret> 진씨 가옥 근처에는 Dian Dou De, Tao Tao Ju, Panxi Restaurant 같
    31.43s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.36s]: (tool result) There are several highly-rated restaurants near Chen Cla
    31.68s  user  발화 끝
    34.62s  user  발화 시작: 어.
    35.02s  user  발화 끝
    38.79s  agent 발화 끝
    39.67s  user  발화 시작: Panxi Restaurant가 제일 괜찮아 보이는데, 예약해 줄 수 있어?
    42.62s  <ret> 발화 (turn10 첫 프레임)
    42.78s  agent 발화 시작: <ret> 네, Panxi Restaurant에 칠월 십일일 저녁 일곱시에 혼자 예약했습니다. 확인 번호는 
    42.78s  ⚡SPAN 주입 [d'=1.20s / d_lead=6.44s]: (tool result) Reservation confirmed for Panxi Restaurant, table for on
    42.96s  user  발화 끝
    49.15s  user  발화 시작: 어, 잠깐만. 혹시…
    49.22s  agent 발화 끝
    51.50s  agent 발화 시작: Panxi Restaurant는 전통 광동 요리를 맛볼 수 있는 곳으로 —
    51.59s  user  발화 끝
    54.54s  user  발화 시작: …그 근처에 전통 공예품 파는 곳도 있니?
    55.10s  agent 발화 끝
    56.76s  <ret> 발화 (turn14 첫 프레임)
    56.91s  agent 발화 시작: <ret> 네, 진씨 가옥 근처 오백미터 이내에 전통 공예품을 파는 곳들이 여러 군데 있어요. 리완 호수 공
    56.92s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.74s]: (tool result) Several shops selling traditional crafts are located wit
    57.12s  user  발화 끝
    64.65s  agent 발화 끝
    64.82s  user  발화 시작: 오, 좋아. 그럼 리완 호수 공예 시장까지 자전거로 얼마나 걸릴까?
    68.80s  <ret> 발화 (turn16 첫 프레임)
    69.11s  agent 발화 시작: <ret> 진씨 가옥에서 리완 호수 공예 시장까지는 자전거로 일 점 팔킬로미터이고, 팔분 정도 걸릴 거예요.
    69.12s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.76s]: (tool result) The bike ride from Chen Clan Academy to Liwan Lake Park 
    69.27s  user  발화 끝
    77.87s  agent 발화 끝
