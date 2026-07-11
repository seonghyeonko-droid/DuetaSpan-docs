# v3_rag_28_cs — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_28",
#     "name": "Nora",
#     "location": {
#       "city": "London",
#       "country": "United Kingdom",
#       "timezone": "Europe/London (GMT, UTC+0)",
#       "currency": "GBP (£)"
#     },
#     "nationality": "British",
#     "gender": "female",
#     "age_range": "50s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-21",
#       "category": "home",
#       "text": "User's home address is 819 Pine Court."
#     },
#     {
#       "date": "2026-03-10",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-02-11",
#       "category": "work",
#       "text": "User works as a graduate student."
#     },
#     {
#       "date": "2026-01-05",
#       "category": "hobby",
#       "text": "User is into home fermentation."
#     },
#     {
#       "date": "2025-10-13",
#       "category": "allergy",
#       "text": "User is allergic to peanuts."
#     },
#     {
#       "date": "2025-08-10",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Korean BBQ."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-01-22",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2026-01-01",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2025-07-21",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 야, 영화… 모아나, 그 영화가 무슨 섬을 배경으로 했어? 항 | S2 알았어, 그럼 지금 통가 날씨는 어때? | S3 블로우홀, 흥미로운데? 가기 전에 알아둬야 할 다른 거 있어? | S4 그럼 달러 2파앙가 정도 하는 거야?

     0.00s  user  발화 시작: 야, 영화… 모아나, 그 영화가 무슨 섬을 배경으로 했어? 항상 궁금했거든.
     5.70s  <ret> 발화 (turn2 첫 프레임)
     5.73s  user  발화 시작: 어.
     5.92s  user  발화 끝
     6.08s  user  발화 끝
     6.10s  agent 발화 시작: <ret> 모아나 영화는 폴리네시아 섬들에서 많은 영감을 받았고, 특히 통가 문화, 사람들, 신화에서 크게 
     6.10s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.66s]: Moana is largely inspired by the Polynesian islands, and specifically 
    11.36s  user  발화 시작: 응.
    11.71s  user  발화 끝
    16.42s  user  발화 시작: 통가? 음, 솔직히 하와이인 줄 알았어.
    16.77s  agent 발화 끝
    19.50s  agent 발화 시작: 흔히 오해하시는 부분이에요. 폴리네시아 문화들은 비슷한 점이 많거든요.
    19.66s  user  발화 끝
    21.28s  user  발화 시작: 알았어, 그럼 지금 통가 날씨는 어때?
    21.58s  agent 발화 끝
    23.36s  <ret> 발화 (turn7 첫 프레임)
    23.44s  agent 발화 시작: <ret> 현재 통가 기온은 섭씨 24.0도이고, 습도는 78%, 풍속은 시속 11.2킬로미터이며, 부분적으
    23.44s  ⚡SPAN 주입 [d'=2.00s / d_lead=11.13s]: (tool result) Temperature: 24.0°C, humidity: 78%, wind: 11.2 km/h, con
    23.59s  user  발화 끝
    34.48s  user  발화 시작: 그거… 괜찮네.
    34.57s  agent 발화 끝
    36.07s  agent 발화 시작: 정말 그래요. 멋진 휴가가 될 것 같아요.
    36.23s  user  발화 끝
    38.84s  agent 발화 끝
    38.85s  user  발화 시작: 사실 여행 계획 짜고 있어. 거기 볼거리 좀 알려줘.
    42.06s  <ret> 발화 (turn11 첫 프레임)
    42.21s  agent 발화 시작: <ret> 통가의 볼거리로는 하아타푸 해변, 왕궁, 마푸아 바에아 블로우홀, 통가 국립 박물관 등이 있어요.
    42.22s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.36s]: (tool result) Ha'atafu Beach, Royal Palace, Mapu 'a Vaea Blowholes, To
    42.38s  user  발화 끝
    48.46s  user  발화 시작: 응.
    48.85s  user  발화 끝
    51.57s  agent 발화 끝
    51.58s  agent 발화 시작: 역사도 풍부하고 아름다운 자연 경관도 가지고 있어요.
    55.33s  user  발화 시작: 어.
    55.91s  user  발화 끝
    56.73s  user  발화 시작: 블로우홀, 흥미로운데? 가기 전에 알아둬야 할 다른 거 있어?
    56.85s  agent 발화 끝
    62.05s  user  발화 끝
    62.17s  agent 발화 시작: 현지 관습과 전통을 알고 가는 게 좋아요.
    64.15s  user  발화 시작: 음.
    64.55s  user  발화 끝
    65.77s  agent 발화 끝
    65.88s  user  발화 시작: 뭐, 예를 들어? 무례하게 굴고 싶지 않아.
    69.15s  <ret> 발화 (turn19 첫 프레임)
    69.23s  agent 발화 시작: <ret> 통가 문화는 특히 어른과 왕족에 대한 존경심을 중요하게 생각하며, 단정한 복장을 선호해요.
    69.23s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.84s]: Tongan culture places a high value on respect, especially for elders a
    69.44s  user  발화 끝
    75.07s  agent 발화 끝
    75.41s  user  발화 시작: 알아둬야겠네. 거기는 화폐가 뭔데?
    77.29s  <ret> 발화 (turn21 첫 프레임)
    77.69s  agent 발화 시작: <ret> 통가의 화폐는 파앙가이고, 현재 미국 달러 1달러는 약 2.12 파앙가와 같아요.
    77.69s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.88s]: The currency of Tonga is the paʻanga, and one United States dollar is 
    77.90s  user  발화 끝
    80.01s  user  발화 시작: 오.
    80.83s  user  발화 끝
    85.57s  agent 발화 끝
    85.59s  user  발화 시작: 그럼 달러 2파앙가 정도 하는 거야?
    87.64s  user  발화 끝
    87.75s  agent 발화 시작: 대략 그렇죠. 물론 환율은 변동하지만, 지금은 그렇게 생각하시면 돼요.
    92.83s  agent 발화 끝
    93.54s  user  발화 시작: 휴… 정보가 너무 많네. [sigh]
    95.30s  agent 발화 시작: 계획을 세우는 건 부담스러울 수 있지만, 원활한 여행을 위해 가치가 있어요.
    95.59s  user  발화 끝
    96.60s  user  발화 시작: 어.
    97.42s  user  발화 끝
    98.34s  agent 발화 끝
    98.70s  user  발화 시작: 고마워. 그럼 호텔부터 찾아볼까?
   101.23s  <ret> 발화 (turn29 첫 프레임)
   101.46s  agent 발화 시작: <ret> 쇼어라인 그릴 & 리조트는 1박에 약 150달러이고, 하카우벨리 비치 리조트 & 스파는 약 220
   101.47s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.06s]: (tool result) The Shoreline Grill & Resort - $150/night, Hakauveli Bea
   101.61s  user  발화 끝
   111.53s  agent 발화 끝
