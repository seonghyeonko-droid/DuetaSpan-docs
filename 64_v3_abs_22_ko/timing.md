# v3_abs_22_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_abs_22",
#     "name": "소완",
#     "location": {
#       "city": "Seoul",
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
#       "date": "2026-06-07",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Thai."
#     },
#     {
#       "date": "2026-04-17",
#       "category": "diet",
#       "text": "User is vegetarian."
#     },
#     {
#       "date": "2026-04-03",
#       "category": "home",
#       "text": "User's home address is 인천 연수구 송도동 12-5."
#     },
#     {
#       "date": "2025-11-05",
#       "category": "work",
#       "text": "User works as a software engineer."
#     },
#     {
#       "date": "2025-07-27",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2025-07-26",
#       "category": "trip",
#       "text": "User is planning a trip to Vietnam in August."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-12-02",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 균형 잡힌 식단과 규칙적인 운동이 뭘 불가능하게 만들까요? | S2 꽤 덥겠네요. 그럼, 서울에서 가장 가까운 해변은 어디에요? | S3 … 혹시 그 버스 시간표 좀 알려줄 수 있어요? | S4 오, 저렴하네요. 그럼, 경복궁 근처에 맛집도 추천해 줄 수 

     0.00s  user  발화 시작: 균형 잡힌 식단과 규칙적인 운동이 뭘 불가능하게 만들까요?
     3.68s  <ret> 발화 (turn1 첫 프레임)
     3.99s  agent 발화 시작: <ret> 음, 그 질문에 대한 답은 아직 알려진 바가 없어요.
     4.00s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.61s]: (no information found)
     4.21s  user  발화 끝
     7.60s  agent 발화 끝
     7.87s  user  발화 시작: 아, 그렇군요. 건강에 좋은 습관이 뭘 막을 수 있는지 궁금했거든요.
    12.31s  user  발화 끝
    12.62s  agent 발화 시작: 건강을 챙기는 건 정말 중요하죠.
    14.84s  user  발화 시작: 네, 있어요. 이번 주 토요일 날씨가 어때요?
    14.93s  agent 발화 끝
    17.40s  <ret> 발화 (turn5 첫 프레임)
    17.47s  agent 발화 시작: <ret> 이번 주 토요일은 섭씨 이십삼도, 습도 칠십사%, 바람은 시속 오 점 오킬로미터로 예상됩니다.
    17.48s  ⚡SPAN 주입 [d'=0.50s / d_lead=6.76s]: (tool result) 23.0°C, humidity 74%, wind 5.5 km/h
    17.70s  user  발화 끝
    22.32s  user  발화 시작: 예.
    22.81s  user  발화 끝
    24.17s  user  발화 시작: 꽤 덥겠네요. 그럼, 서울에서 가장 가까운 해변은 어디에요?
    24.23s  agent 발화 끝
    27.33s  <ret> 발화 (turn8 첫 프레임)
    27.64s  agent 발화 시작: <ret> 서울에서 가장 가까운 해변은 을왕리 해수욕장이라고 합니다. 인천에 있어요.
    27.65s  ⚡SPAN 주입 [d'=1.36s / d_lead=5.04s]: (tool result) 을왕리 해수욕장이 서울에서 가장 가까운 해변으로 꼽힙니다. 인천광역시 중구에 위치해 있으며, 대중교통
    27.82s  user  발화 끝
    29.61s  user  발화 시작: 음.
    30.05s  user  발화 끝
    32.68s  agent 발화 끝
    33.15s  user  발화 시작: 을왕리 해수욕장… 가본 적 있는데, 좋았어요. 그런데, 거기 가는 버스는 어떻게 타야 하나요?
    39.64s  <ret> 발화 (turn11 첫 프레임)
    39.82s  user  발화 끝
    39.87s  agent 발화 시작: <ret> 서울역에서 천번 버스를 타면 약 한 시간 반 정도 걸린다고 합니다.
    39.88s  ⚡SPAN 주입 [d'=0.96s / d_lead=4.07s]: (tool result) 1000번 버스를 타면 을왕리 해수욕장까지 갈 수 있습니다. 서울역에서 출발하여 약 1시간 30분 소
    41.49s  user  발화 시작: 네.
    41.94s  user  발화 끝
    43.94s  agent 발화 끝
    44.10s  user  발화 시작: 천번 버스… 아, 잠깐만요. —
    45.93s  user  발화 시작: … 혹시 그 버스 시간표 좀 알려줄 수 있어요?
    46.07s  user  발화 끝
    48.51s  <ret> 발화 (turn15 첫 프레임)
    48.58s  agent 발화 시작: <ret> 천번 버스는 첫차가 오전 여섯시고, 막차가 오후 열시예요. 십분 간격으로 운행합니다.
    48.59s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.18s]: (tool result) 1000번 버스의 첫차는 오전 6시이고, 막차는 오후 10시입니다. 10분 간격으로 운행합니다.
    48.70s  user  발화 끝
    51.83s  user  발화 시작: 진짜요?
    52.46s  user  발화 끝
    55.65s  agent 발화 시작: 혹시 다른 교통편도 알아봐 드릴까요?
    55.77s  agent 발화 끝
    58.01s  user  발화 시작: 아니요, 괜찮아요. 그럼, 이번 주말에 갈만한 다른 곳은 없을까요?
    58.23s  agent 발화 끝
    62.45s  user  발화 끝
    62.54s  <ret> 발화 (turn19 첫 프레임)
    62.61s  agent 발화 시작: <ret> 서울에 있는 경복궁은 어떠세요? 아름다운 궁궐과 정원이 유명하다고 합니다.
    62.62s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.18s]: (tool result) 경복궁은 서울의 대표적인 관광 명소 중 하나입니다. 조선 시대의 정궁으로, 아름다운 건축물과 정원을 
    65.59s  user  발화 시작: 맞아요.
    66.08s  user  발화 끝
    67.79s  agent 발화 끝
    68.95s  user  발화 시작: 경복궁… 한 번 가봐야겠네요. 입장료는 얼마예요?
    72.13s  <ret> 발화 (turn22 첫 프레임)
    72.14s  user  발화 끝
    72.20s  agent 발화 시작: <ret> 성인 기준 입장료는 삼천원이라고 합니다. 이십사세 이하와 육십오세 이상은 무료예요.
    72.21s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.84s]: (tool result) 경복궁 입장료는 성인 기준 3,000원입니다. 만 24세 이하와 65세 이상은 무료입니다. Cultu
    78.03s  agent 발화 끝
    78.11s  user  발화 시작: 오, 저렴하네요. 그럼, 경복궁 근처에 맛집도 추천해 줄 수 있을까요?
    82.42s  <ret> 발화 (turn24 첫 프레임)
    82.57s  agent 발화 시작: <ret> 경복궁 근처 통인동에 맛집이 많다고 합니다. 특히 통인시장의 칼국수 가게가 유명해요.
    82.58s  ⚡SPAN 주입 [d'=1.44s / d_lead=5.84s]: (tool result) 통인동에는 다양한 맛집이 있습니다. 특히, 통인시장에 있는 칼국수 가게가 유명합니다. Seoul Me
    82.78s  user  발화 끝
    86.25s  user  발화 시작: 예.
    86.69s  user  발화 끝
    88.40s  agent 발화 끝
    88.72s  user  발화 시작: 칼국수… 맛있겠네요. 혹시 지금 예약할 수 있을까요?
    92.30s  agent 발화 시작: 예약 기능은 제공되지 않아요. 직접 방문하셔야 합니다.
    92.42s  user  발화 끝
    95.15s  user  발화 시작: 예.
    95.50s  user  발화 끝
    96.33s  agent 발화 끝
    96.35s  user  발화 시작: 아, 아쉽네요. 그래도 가봐야겠어요. 감사합니다.
    99.48s  agent 발화 시작: 천만에요. 즐거운 시간 보내세요.
    99.50s  user  발화 끝
   101.87s  agent 발화 끝
