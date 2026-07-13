# v3_backg_17_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_backg_17",
#     "name": "도율",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "late 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-01",
#       "category": "diet",
#       "text": "User is pescatarian."
#     },
#     {
#       "date": "2026-01-22",
#       "category": "hobby",
#       "text": "User is into rock climbing."
#     },
#     {
#       "date": "2026-01-11",
#       "category": "pet",
#       "text": "User has a Poodle named Coco."
#     },
#     {
#       "date": "2025-08-19",
#       "category": "trip",
#       "text": "User is planning a trip to Kyoto in May."
#     },
#     {
#       "date": "2025-08-13",
#       "category": "home",
#       "text": "User's home address is 서울 마포구 성산동 45-6."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-06",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2025-11-21",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 안녕하세요. 새로운 도시에 이사 왔는데, 정착하는 데 도움을  | S2 철이요? 생각보다 놀랍네요. 부산에서 맛집을 추천해 주실 수  | S3 — 혹시 부산에서 외국인들이 많이 찾는 관광지도 있나요? | S4 버스를 타야 하는군요. 알겠습니다.

     0.00s  user  발화 시작: 안녕하세요. 새로운 도시에 이사 왔는데, 정착하는 데 도움을 주실 수 있나요?
     5.96s  agent 발화 시작: 안녕하세요! 새로운 곳에 오신 걸 환영해요. 세아라고 해요. 이사 오신 곳은 어디신가요?
     5.96s  user  발화 끝
    12.46s  user  발화 시작: 서울에서 왔어요. 이번에 부산으로 이사 왔어요.
    12.46s  agent 발화 끝
    15.70s  agent 발화 시작: 부산이군요! 서울에서 오셨다면, 부산은 완전히 다른 분위기일 거예요. 혹시 부산에 대해 궁금한 점이 있으신가
    15.70s  user  발화 끝
    23.29s  user  발화 시작: 부산에서 가장 흔한 화학 물질이 뭔지 궁금해요.
    23.29s  agent 발화 끝
    26.84s  <ret> 발화 (turn5 첫 프레임)
    27.08s  agent 발화 시작: <ret> 지구에서 가장 흔한 화학 물질은 바로 철이에요. 지구 핵의 대부분을 차지할 뿐만 아니라 지각의 암
    27.08s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.29s]: Iron is the most abundant chemical element on Earth, making up a large
    27.08s  user  발화 끝
    37.37s  user  발화 시작: 음.
    37.37s  agent 발화 끝
    37.91s  user  발화 시작: 철이요? 생각보다 놀랍네요. 부산에서 맛집을 추천해 주실 수 있나요?
    37.91s  user  발화 끝
    42.78s  agent 발화 시작: 네.
    42.78s  user  발화 끝
    43.32s  agent 발화 시작: 부산은 맛집으로도 유명한 곳이에요. 어떤 종류의 음식을 좋아하세요?
    43.32s  agent 발화 끝
    47.66s  user  발화 시작: 해산물을 좋아해요. 특히 신선한 회를 먹고 싶어요.
    47.66s  agent 발화 끝
    51.21s  <ret> 발화 (turn11 첫 프레임)
    51.45s  agent 발화 시작: <ret> 신선한 회를 원하신다면, 자갈치 시장을 추천드려요. 다양한 해산물을 직접 고르시고, 근처 식당에서
    51.45s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.66s]: Jagalchi Fish Market is Busan’s most famous seafood market, offering a
    51.45s  user  발화 끝
    60.11s  user  발화 시작: 자갈치 시장이요? 거긴 어디에 있죠?
    60.11s  agent 발화 끝
    62.42s  <ret> 발화 (turn13 첫 프레임)
    62.82s  agent 발화 시작: <ret> 자갈치 시장에 가려면, 지하철 일호선을 타고 자갈치역에서 십번 출구로 나오시면 돼요. 역에서 도보
    62.82s  ⚡SPAN 주입 [d'=2.00s / d_lead=13.00s]: (tool result) {"directions": "Take subway line 1 to Jagalchi Station, 
    62.82s  user  발화 끝
    75.82s  user  발화 시작: — 혹시 부산에서 외국인들이 많이 찾는 관광지도 있나요?
    75.82s  agent 발화 끝
    80.15s  user  발화 시작: 부산에 오래 사신 분들은 자갈치 시장 말고 다른 곳도 추천하시나요?
    80.15s  user  발화 끝
    85.56s  agent 발화 시작: 음.
    85.56s  user  발화 끝
    86.10s  agent 발화 시작: 자갈치 시장 외에도, 해운대 해수욕장이나 감천문화마을도 외국인 관광객들에게 인기가 많아요. 특히 감천문화마을
    86.10s  agent 발화 끝
    94.77s  user  발화 시작: 음.
    94.77s  agent 발화 끝
    95.31s  user  발화 시작: 감천문화마을이요? 사진으로 봤는데 정말 예쁘더라고요. 거기는 어떻게 가나요?
    95.31s  user  발화 끝
    99.56s  <ret> 발화 (turn20 첫 프레임)
    99.64s  agent 발화 시작: <ret> 감천문화마을에 가려면, 지하철 일호선 토성역에서 일 일번, 이 일번, 또는 이 이번 버스를 타시면
    99.64s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.83s]: Gamcheon Culture Village is accessible by bus 1-1, 2-1, or 2-2 from To
    99.64s  user  발화 끝
   110.47s  user  발화 시작: 버스를 타야 하는군요. 알겠습니다.
   110.47s  agent 발화 끝
   112.64s  agent 발화 시작: 네, 맞아요. 혹시 감천문화마을에 대해 더 궁금한 점이 있으신가요? 아니면 다른 곳을 알아볼까요?
   112.64s  user  발화 끝
   119.68s  user  발화 시작: 다른 곳도 알아봐 주세요. 조용한 공원 같은 곳이 있으면 좋겠어요.
   119.68s  agent 발화 끝
   125.10s  agent 발화 시작: 조용한 공원을 원하시는군요. 부산에는 여러 아름다운 공원이 있답니다. 태종대 공원이나 이기대 공원을 추천해 
   125.10s  user  발화 끝
   132.68s  user  발화 시작: 태종대 공원이요? 거기는 어떤 곳인가요?
   132.68s  agent 발화 끝
   135.22s  <ret> 발화 (turn26 첫 프레임)
   135.38s  agent 발화 시작: <ret> 태종대 공원은 부산의 아름다운 해안 공원이에요. 바위 절벽과 등대, 멋진 바다 풍경을 자랑하며, 
   135.38s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.75s]: Taejongdae Park is a scenic coastal park in Busan, known for its rocky
   135.38s  user  발화 끝
   145.13s  agent 발화 끝
