# v3_fake__14_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_fake__14",
#     "name": "도서",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "40s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-02-19",
#       "category": "allergy",
#       "text": "User is allergic to cat dander."
#     },
#     {
#       "date": "2026-01-21",
#       "category": "pet",
#       "text": "User has a Beagle named Rusty."
#     },
#     {
#       "date": "2025-11-15",
#       "category": "diet",
#       "text": "User is pescatarian."
#     },
#     {
#       "date": "2025-08-27",
#       "category": "home",
#       "text": "User's home address is 대구 중구 동인동 88-1."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-26",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2025-12-24",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 스미스소니언 항공우주 박물관이 언제 개관했는지 궁금해요. | S2 혹시 박물관에서 가장 인기 있는 전시물은 무엇인가요? | S3 이십오분이면 괜찮네요. | S4 시간제 입장권이라… 조금 번거롭네요.

     0.00s  user  발화 시작: 스미스소니언 항공우주 박물관이 언제 개관했는지 궁금해요.
     3.76s  <ret> 발화 (turn1 첫 프레임)
     3.84s  user  발화 끝
     3.91s  agent 발화 시작: <ret> 항공우주 박물관은 일 년 중 가장 더운 달인 천구백칠십육년 칠월 일일에 처음 문을 열었어요. 새로
     3.92s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.43s]: The Smithsonian National Air and Space Museum first opened its doors t
     9.78s  user  발화 시작: 네.
    10.13s  user  발화 끝
    14.34s  agent 발화 끝
    15.72s  user  발화 시작: 아, 그렇군요. 박물관에 전시된…
    18.45s  user  발화 끝
    19.86s  user  발화 시작: …항공기 수는 얼마나 되나요?
    21.71s  <ret> 발화 (turn5 첫 프레임)
    21.85s  user  발화 끝
    21.86s  agent 발화 시작: <ret> 박물관에는 거의 육만 점의 유물이 있는데, 그중 약 이백오십대가 항공기나 우주선이에요. 다양한 역
    21.88s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.99s]: The museum’s collection comprises nearly 60,000 artifacts, including a
    30.85s  agent 발화 끝
    32.49s  user  발화 시작: 이백오십대나 된다니, 정말 많네요!
    34.83s  <ret> 발화 (turn7 첫 프레임)
    35.22s  user  발화 끝
    35.22s  agent 발화 시작: <ret> 그렇죠, 정말 놀라운 숫자죠. 역사의 흔적들을 직접 느껴보는 건 특별한 경험일 거예요.
    35.23s  ⚡SPAN 주입(IRRELEVANT) [d'=2.00s / d_lead=7.46s]: The average high temperature in Reykjavik, Iceland, in December is aro
    42.47s  agent 발화 시작: 여행 계획을 세우실 때 날씨도 중요하죠.
    42.69s  agent 발화 끝
    43.74s  user  발화 시작: 아.
    44.24s  user  발화 끝
    45.09s  user  발화 시작: 혹시 박물관에서 가장 인기 있는 전시물은 무엇인가요?
    45.52s  agent 발화 끝
    48.27s  <ret> 발화 (turn11 첫 프레임)
    48.34s  agent 발화 시작: <ret> 가장 인기 있는 전시물로는 천구백삼년 라이트 형제의 플라이어, 스피릿 오브 세인트루이스, 아폴로 
    48.35s  ⚡SPAN 주입 [d'=2.00s / d_lead=11.22s]: The 1903 Wright Flyer, the Spirit of St. Louis, and the Apollo 11 comm
    48.41s  user  발화 끝
    51.94s  user  발화 시작: 네.
    52.30s  user  발화 끝
    59.34s  user  발화 시작: 아폴로 십일호라니, 정말 역사적인 물건이네요.
    59.56s  agent 발화 끝
    62.15s  user  발화 끝
    62.20s  agent 발화 시작: 맞아요, 인류의 꿈을 담고 있는 중요한 유물이죠.
    65.67s  agent 발화 끝
    66.47s  user  발화 시작: 박물관에 가려면 대중교통을 이용하는 게 좋을까요?
    69.38s  <ret> 발화 (turn16 첫 프레임)
    69.45s  agent 발화 시작: <ret> 스미스소니언 역에서 내리셔서 블루 라인이나 오렌지 라인을 타시면 돼요. 대중교통으로 편리하게 가실
    69.46s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.79s]: (tool result) Directions to Smithsonian National Air and Space Museum:
    69.52s  user  발화 끝
    72.51s  user  발화 시작: 아.
    73.31s  user  발화 끝
    77.23s  agent 발화 끝
    79.36s  user  발화 시작: 스미스소니언 역까지 얼마나 걸릴까요?
    81.40s  <ret> 발화 (turn19 첫 프레임)
    81.79s  agent 발화 시작: <ret> 지하철로 약 이십오분 정도 걸립니다.
    81.80s  ⚡SPAN 주입 [d'=1.84s / d_lead=3.52s]: (tool result) Estimated travel time to Smithsonian Station: 25 minutes
    81.81s  user  발화 끝
    83.14s  user  발화 시작: 정말요?
    83.82s  user  발화 끝
    85.17s  user  발화 시작: 이십오분이면 괜찮네요.
    85.31s  agent 발화 끝
    86.78s  user  발화 끝
    86.88s  agent 발화 시작: 시간이 괜찮으시다면, 여유롭게 둘러보시는 것도 좋을 거예요.
    90.91s  agent 발화 끝
    91.05s  user  발화 시작: 박물관 근처에 맛집도 있을까요?
    92.90s  <ret> 발화 (turn24 첫 프레임)
    93.17s  user  발화 끝
    93.21s  agent 발화 시작: <ret> 스미스소니언 박물관 근처에는 올드 에비트 그릴(미국식, $$$), 라시카(인도식, $$$) 같은 
    93.22s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.51s]: (tool result) Restaurants near Smithsonian National Air and Space Muse
    98.33s  user  발화 시작: 음.
    98.82s  user  발화 끝
   100.72s  agent 발화 끝
   100.75s  user  발화 시작: 음… 미국식은 조금 그렇고, 인도식은 어떨까요?
   104.45s  agent 발화 시작: 인도 음식을 좋아하신다면 라시카를 추천해 드려요. —
   104.45s  user  발화 끝
   107.47s  user  발화 시작: … 혹시 박물관 티켓은 미리 예매해야 하나요?
   108.15s  agent 발화 끝
   110.21s  <ret> 발화 (turn29 첫 프레임)
   110.52s  user  발화 끝
   110.52s  agent 발화 시작: <ret> 미리 예매하시면 기다리는 시간을 줄일 수 있습니다.
   110.53s  ⚡SPAN 주입 [d'=1.68s / d_lead=3.37s]: (tool result) Smithsonian National Air and Space Museum: Timed entry p
   113.79s  agent 발화 시작: 특히 성수기에는 시간제 입장권을 예매하시는 것이 좋습니다. 미리 준비하시면 더욱 즐거운 관람이 가능할 거예요
   113.90s  agent 발화 끝
   117.67s  user  발화 시작: 맞아요.
   118.30s  user  발화 끝
   121.87s  user  발화 시작: 시간제 입장권이라… 조금 번거롭네요.
   121.95s  agent 발화 끝
   124.58s  agent 발화 시작: 조금 번거로울 수 있지만, 기다리는 시간을 줄여주니 괜찮을 거예요.
   124.60s  user  발화 끝
   127.00s  user  발화 시작: 그렇죠.
   127.54s  user  발화 끝
   129.06s  agent 발화 끝
   130.56s  user  발화 시작: 알겠습니다. 그럼 시간제 입장권을 예매해 볼까요?
   133.16s  <ret> 발화 (turn36 첫 프레임)
   133.47s  agent 발화 시작: <ret> 스미스소니언 항공우주 박물관 시간제 입장권 한장을 구매했습니다. 확인번호는 팔 칠 육 오 사 삼 
   133.48s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.97s]: (tool result) Timed entry pass for Smithsonian National Air and Space 
   133.60s  user  발화 끝
   141.34s  user  발화 시작: 감사합니다. 덕분에 잘 준비할 수 있겠네요.
   141.44s  agent 발화 끝
   144.20s  user  발화 끝
   144.25s  agent 발화 시작: 도움이 되었다니 기쁩니다. 즐거운 시간 보내세요.
   147.71s  agent 발화 끝
