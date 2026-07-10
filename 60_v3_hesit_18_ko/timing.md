# v3_hesit_18_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_hesit_18",
#     "name": "은율",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "early 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-27",
#       "category": "hobby",
#       "text": "User is into marathon training."
#     },
#     {
#       "date": "2026-03-03",
#       "category": "work",
#       "text": "User works as a chef."
#     },
#     {
#       "date": "2025-12-02",
#       "category": "trip",
#       "text": "User is planning a trip to Lisbon in March."
#     },
#     {
#       "date": "2025-08-28",
#       "category": "allergy",
#       "text": "User is allergic to peanuts."
#     },
#     {
#       "date": "2025-07-08",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Korean BBQ."
#     },
#     {
#       "date": "2025-06-05",
#       "category": "home",
#       "text": "User's home address is 부산 해운대구 해운대로 570."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-12-26",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2025-10-20",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 베수비오 화산이 마지막으로 폭발한 게 언제였죠? 기억이 잘 안 | S2 아, 다행이네요. 그럼, 혹시 그 화산 근처에 여행 가도 괜찮 | S3 마르게리타… 메모해야겠네요. 그럼… | S4 아니요, 괜찮아요. 그럼, 혹시 나폴리에 숙소 추천해 줄 만한

     0.00s  user  발화 시작: 베수비오 화산이 마지막으로 폭발한 게 언제였죠? 기억이 잘 안 나네요.
     3.82s  <ret> 발화 (turn1 첫 프레임)
     4.03s  user  발화 끝
     4.13s  agent 발화 시작: <ret> 베수비오 화산은 천구백사십사년 삼월에 마지막으로 폭발했습니다. 혹시 다른 화산에 대해서도 궁금하신
     5.82s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.01s]: Mount Vesuvius last erupted in March 1944.
     9.90s  user  발화 시작: 네.
    10.35s  user  발화 끝
    12.14s  agent 발화 끝
    12.23s  user  발화 시작: 아, 그렇군요… 흐으으음… 그럼 그때 피해는 얼마나 심했었어요?
    16.10s  <ret> 발화 (turn4 첫 프레임)
    16.17s  agent 발화 시작: <ret> 천구백사십사년의 폭발은 주변 마을과 도시들에 상당한 피해를 입혔습니다. 당시 상황이 꽤 심각했었죠
    16.26s  user  발화 끝
    17.06s  ⚡SPAN 주입 [d'=0.96s / d_lead=7.79s]: The 1944 eruption caused significant damage to nearby towns and villag
    23.91s  user  발화 시작: 네, 그렇군요.
    23.96s  agent 발화 끝
    25.02s  user  발화 끝
    25.33s  agent 발화 시작: 주변 지역 주민들의 삶에 큰 영향을 미쳤습니다. 이탈리아 남부 지역의 역사에서 중요한 사건이었죠. 지금은 안
    34.37s  user  발화 시작: 네, 지금은 안전하다고 들었어요. 그럼… 그 화산은 지금도 활동 중이에요?
    34.84s  agent 발화 끝
    39.35s  <ret> 발화 (turn8 첫 프레임)
    39.42s  agent 발화 시작: <ret> 베수비오 화산은 현재도 활동 중인 화산이지만, 면밀히 감시되고 있습니다. 안심하셔도 될 것 같아요
    39.65s  user  발화 끝
    41.35s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.31s]: Mount Vesuvius is currently an active volcano, though it is closely mo
    46.73s  agent 발화 끝
    48.45s  user  발화 시작: 아, 다행이네요. 그럼, 혹시 그 화산 근처에 여행 가도 괜찮을까요?
    53.17s  <ret> 발화 (turn10 첫 프레임)
    53.56s  agent 발화 시작: <ret> 베수비오 화산 방문은 일반적으로 안전하지만, 현지 지침을 따르는 것이 중요합니다. 안전 수칙을 꼭
    53.68s  user  발화 끝
    55.17s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.83s]: Visiting Mount Vesuvius is generally safe, but it's important to follo
    61.21s  user  발화 시작: 현지 지침… 알겠습니다. 그럼, 그 화산 근처에 볼 만한 곳이 있을까요?
    61.39s  agent 발화 끝
    66.90s  user  발화 끝
    66.95s  <ret> 발화 (turn12 첫 프레임)
    67.03s  agent 발화 시작: <ret> 베수비오 화산 근처에는 나폴리가 약 삼 킬로미터 거리에 있고, 다른 명소들도 주변에 있습니다. 나
    68.95s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.97s]: Naples (40.8518, 14.2681): <name> (3.1 km), <name> (4.8 km), <name> (6
    73.90s  user  발화 시작: 네.
    74.30s  user  발화 끝
    76.78s  user  발화 시작: 나폴리요? 음… 나폴리는 어떤 곳이에요?
    77.00s  agent 발화 끝
    79.88s  <ret> 발화 (turn15 첫 프레임)
    80.04s  agent 발화 시작: <ret> 나폴리는 역사와 예술, 그리고 음식으로 유명한 활기 넘치는 이탈리아 도시입니다. 피자와 파스타가 
    80.19s  user  발화 끝
    81.16s  ⚡SPAN 주입 [d'=1.28s / d_lead=8.90s]: Naples is a vibrant Italian city known for its history, art, and cuisi
    88.94s  agent 발화 끝
    89.93s  user  발화 시작: 피자! 좋아요. 그럼, 나폴리에서 꼭 먹어봐야 할 피자는 뭐예요?
    95.04s  <ret> 발화 (turn17 첫 프레임)
    95.26s  user  발화 끝
    95.27s  agent 발화 시작: <ret> 마르게리타 피자가 나폴리 피자의 정수로 여겨집니다. 꼭 한번 드셔보시길 추천해요.
    97.04s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.12s]: Margherita pizza is considered the quintessential Neapolitan pizza.
   101.28s  user  발화 시작: 마르게리타… 메모해야겠네요. 그럼…
   101.39s  agent 발화 끝
   104.23s  user  발화 끝
   105.56s  user  발화 시작: …나폴리 가는 방법은 어떻게 되나요?
   107.56s  <ret> 발화 (turn20 첫 프레임)
   107.79s  agent 발화 시작: <ret> 서울에서 나폴리까지는 경유지가 있는 항공편을 이용하는 것이 일반적입니다. 예상 소요 시간은 십오에
   107.91s  user  발화 끝
   109.56s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.72s]: Take a flight from Seoul (ICN) to Naples (NAP) with a layover in <City
   113.47s  user  발화 시작: 네네.
   114.10s  user  발화 끝
   116.50s  user  발화 시작: 꽤 오래 걸리네요… 그럼, 그 항공권은 대략 얼마나 할까요?
   116.51s  agent 발화 끝
   120.46s  <ret> 발화 (turn23 첫 프레임)
   120.85s  agent 발화 시작: <ret> 한국항공에서 팔월 십오일에 서울에서 나폴리로 가는 항공권을 백팔십만 원에 판매하고 있습니다. 가격
   120.99s  user  발화 끝
   122.46s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.04s]: Korean Air (KE) is offering flights from Seoul to Naples for ₩1,800,00
   123.90s  user  발화 시작: 음.
   124.30s  user  발화 끝
   129.49s  user  발화 시작: 백팔십만 원… 생각보다 비싸네요.
   129.89s  agent 발화 끝
   131.79s  agent 발화 시작: 여행 시기에 따라 가격이 크게 달라질 수 있습니다. 좀 더 저렴한 항공편을 찾아볼까요?
   131.93s  user  발화 끝
   133.60s  user  발화 시작: 네.
   134.09s  user  발화 끝
   137.76s  agent 발화 끝
   138.24s  user  발화 시작: 아니요, 괜찮아요. 그럼, 혹시 나폴리에 숙소 추천해 줄 만한 곳이 있을까요?
   143.61s  <ret> 발화 (turn29 첫 프레임)
   143.94s  user  발화 끝
   144.00s  agent 발화 시작: <ret> 그랜드 호텔 베수비오는 일박에 이십오만 원부터, 호텔 피아차 벨리니는 일박에 십이만 원부터 이용 
   145.61s  ⚡SPAN 주입 [d'=2.00s / d_lead=11.45s]: Grand Hotel Vesuvio (4-star) is available from ₩250,000 per night. Hot
   148.69s  user  발화 시작: 네네.
   149.32s  user  발화 끝
   155.40s  user  발화 시작: 음… 너무 비싼 곳 말고, 적당한 가격의 호텔을 추천해 주세요.
   155.45s  agent 발화 끝
   160.41s  agent 발화 시작: 그럼 호텔 피아차 벨리니를 추천해 드립니다. 가성비가 좋고 위치도 괜찮다고 하네요.
   160.58s  user  발화 끝
   166.62s  agent 발화 끝
   167.13s  user  발화 시작: 알겠습니다. 그럼, 그 호텔 예약 좀 도와주시겠어요?
   170.30s  <ret> 발화 (turn34 첫 프레임)
   170.52s  agent 발화 시작: <ret> 호텔 피아차 벨리니가 팔월 십육일부터 이십일까지 일인 기준으로 예약되었습니다. 확인 번호는 칠사구
   170.69s  user  발화 끝
   172.30s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.72s]: Hotel Piazza Bellini booked for 1 guest from August 16 to August 20, 2
   179.24s  agent 발화 끝
   180.37s  user  발화 시작: 감사합니다. 덕분에 여행 계획이 거의 다 끝났네요.
   183.50s  agent 발화 시작: 도움이 되었다니 기쁩니다. 즐거운 여행 되세요.
   183.65s  user  발화 끝
   186.73s  agent 발화 끝
