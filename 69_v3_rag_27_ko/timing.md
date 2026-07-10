# v3_rag_27_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_27",
#     "name": "지훈",
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
#       "date": "2026-04-01",
#       "category": "hobby",
#       "text": "User is into alpine wildflower photography."
#     },
#     {
#       "date": "2025-09-23",
#       "category": "pet",
#       "text": "User has a Poodle named Coco."
#     },
#     {
#       "date": "2025-07-31",
#       "category": "home",
#       "text": "User's home address is 서울 종로구 세종대로 175."
#     },
#     {
#       "date": "2025-07-18",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-06-30",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Italian."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-11-17",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2025-06-22",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 안녕하세요. 여행 계획 좀 짜주실 수 있을까요? | S2 네시간 반이나요? 음… 좀 멀긴 하네요. | S3 음… 튤립도 좋네요. 혹시 태안에 숙소도 예약해 줄 수 있나요 | S4 푸른 게… 맛있겠네요. 그럼 태안에서 게를 먹을 수 있는 맛집

     0.00s  user  발화 시작: 안녕하세요. 여행 계획 좀 짜주실 수 있을까요?
     3.62s  agent 발화 시작: 안녕하세요! 여행 계획은 언제나 즐거운 일이죠. 어디로 떠나고 싶으신가요?
     3.75s  user  발화 끝
     7.04s  user  발화 시작: 예.
     7.54s  user  발화 끝
     8.17s  user  발화 시작: 음… 아직 정해 보진 못했어요. 그냥 봄에 꽃구경 갈 만한 곳이 있을까요?
     8.29s  agent 발화 끝
    13.94s  agent 발화 시작: 봄에 꽃구경이라니, 정말 멋진 생각이에요. 혹시 특별히 선호하는 꽃 종류가 있으신가요?
    13.96s  user  발화 끝
    19.57s  user  발화 시작: 글쎄요… 벚꽃이 예쁘긴 하죠. 벚꽃 명소가 어디 있을까요?
    19.77s  agent 발화 끝
    23.62s  <ret> 발화 (turn6 첫 프레임)
    24.00s  agent 발화 시작: <ret> 벚꽃 명소라면 한국 진해시가 아주 유명해요. 봄마다 수백만 명의 방문객이 찾는 곳이랍니다.
    24.02s  ⚡SPAN 주입 [d'=1.76s / d_lead=6.54s]: The city of Jinhae in South Korea is famous for its annual cherry blos
    24.11s  user  발화 끝
    30.44s  user  발화 시작: 아, 진해군요. 거기는 얼마나 멀까요? 지금 제 위치에서요.
    30.54s  agent 발화 끝
    35.43s  <ret> 발화 (turn8 첫 프레임)
    35.44s  user  발화 끝
    35.50s  agent 발화 시작: <ret> 현재 위치에서 진해까지는 자동차로 약 네시간 삼십분, 삼백팔십킬로미터 정도 됩니다.
    35.51s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.64s]: (tool result) Jinhae, South Korea is 380 kilometers away, approximatel
    37.28s  user  발화 시작: 그렇죠.
    37.92s  user  발화 끝
    41.15s  agent 발화 끝
    41.34s  user  발화 시작: 네시간 반이나요? 음… 좀 멀긴 하네요.
    45.17s  user  발화 끝
    45.29s  agent 발화 시작: 네, 조금 멀긴 하죠. 하지만 진해의 벚꽃은 정말 아름다워서 충분히 가볼 만한 가치가 있답니다.
    48.72s  user  발화 시작: 네.
    49.12s  user  발화 끝
    50.38s  agent 발화 끝
    51.71s  user  발화 시작: 그래도 봄에 예쁜 꽃을 볼 수 있다면 괜찮을 것 같아요. 혹시 다른 곳도 추천해 주실 수 있나요?
    58.00s  <ret> 발화 (turn14 첫 프레임)
    58.24s  agent 발화 시작: <ret> 다른 곳으로는 충청남도 태안군에서 사월에 열리는 태안 튤립 축제가 있어요. 수백만 송이의 튤립을 
    58.24s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.32s]: The Taean Tulip Festival in Taean County, South Korea, showcases over 
    58.34s  user  발화 끝
    65.57s  agent 발화 끝
    67.23s  user  발화 시작: 태안 튤립 축제… 듣기만 해도 예쁘네요. 거기는 얼마나 걸릴까요?
    71.91s  <ret> 발화 (turn16 첫 프레임)
    71.98s  agent 발화 시작: <ret> 현재 위치에서 태안군까지는 자동차로 약 두시간, 백오십킬로미터 정도 됩니다.
    71.99s  ⚡SPAN 주입 [d'=0.96s / d_lead=4.53s]: (tool result) Taean County, South Korea is 150 kilometers away, approx
    72.18s  user  발화 끝
    76.51s  agent 발화 끝
    77.12s  user  발화 시작: 두시간이면 훨씬 가깝네요. 그럼 태안으로 가는 게 좋을까요?
    81.72s  agent 발화 시작: 태안은 진해보다 가까워서 이동 시간이 짧다는 장점이 있죠. 벚꽃도 예쁘지만 튤립도 아주 아름다워요.
    81.73s  user  발화 끝
    87.36s  agent 발화 끝
    87.46s  user  발화 시작: 음… 튤립도 좋네요. 혹시 태안에 숙소도 예약해 줄 수 있나요?
    91.97s  <ret> 발화 (turn20 첫 프레임)
    92.05s  agent 발화 시작: <ret> 네, 태안군에서 사월 십오일부터 십칠일까지 이용 가능한 호텔이 세 곳 있어요. 숙박 요금은 밤에 
    92.05s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.17s]: (tool result) There are 3 hotels available in Taean County from April 
    92.18s  user  발화 끝
   101.22s  agent 발화 끝
   101.63s  user  발화 시작: 팔십달러면 괜찮네요. 그럼 제일 저렴한 곳으로 예약해 주세요.
   105.96s  <ret> 발화 (turn22 첫 프레임)
   106.36s  agent 발화 시작: <ret> 네, 태안군 선플라워 호텔 예약이 사월 십오일부터 십칠일까지 확정되었습니다. 확인 번호는 티 에스
   106.36s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.76s]: (tool result) Your hotel reservation at Hotel Sunflower in Taean Count
   106.48s  user  발화 끝
   108.87s  user  발화 시작: 네네.
   109.69s  user  발화 끝
   112.95s  user  발화 시작: 와, 감사합니다! 덕분에 여행 계획이 거의 다 끝났네요.
   113.12s  agent 발화 끝
   117.31s  user  발화 끝
   117.52s  agent 발화 시작: 천만에요. 도움이 되었다니 정말 기쁩니다. 즐거운 여행 되세요!
   121.55s  user  발화 시작: 아, 그런데 혹시 태안에서 꼭 먹어봐야 할 음식이 있을까요?
   122.01s  agent 발화 끝
   125.19s  <ret> 발화 (turn27 첫 프레임)
   125.27s  agent 발화 시작: <ret> 태안은 신선한 해산물로 유명한데요, 특히 푸른 게 요리가 아주 맛있습니다. 찜이나 매콤한 찌개로 
   125.27s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.18s]: Taean is known for its fresh seafood, particularly its blue crabs, whi
   125.53s  user  발화 끝
   130.51s  user  발화 시작: 네.
   131.14s  user  발화 끝
   132.42s  user  발화 시작: 푸른 게… 맛있겠네요. 그럼 태안에서 게를 먹을 수 있는 맛집도 추천해 주실 수 있나요?
   132.45s  agent 발화 끝
   139.04s  <ret> 발화 (turn30 첫 프레임)
   139.12s  agent 발화 시작: <ret> 태안군에서 평점이 높은 해산물 맛집은 금강마리나, 태안해안식당, 블루크랩 하우스 세 곳이 있습니다
   139.12s  ⚡SPAN 주입 [d'=0.96s / d_lead=6.44s]: (tool result) Three seafood restaurants in Taean County are highly rat
   139.18s  user  발화 끝
   145.55s  agent 발화 끝
   146.34s  user  발화 시작: 세 곳이나 있네요. 그럼 금강마리나로 가볼게요.
   149.76s  agent 발화 시작: 금강마리나도 좋은 선택이에요. 신선한 해산물을 맛볼 수 있을 거예요.
   149.90s  user  발화 끝
   153.99s  user  발화 시작: 정말 감사합니다. 덕분에 완벽한 봄 여행 계획을 세울 수 있었어요.
   154.06s  agent 발화 끝
   158.91s  agent 발화 시작: 천만에요.
   159.03s  user  발화 끝
   159.52s  user  발화 시작: 네, 알겠습니다. 정말 고마워요.
   159.87s  agent 발화 끝
   162.66s  agent 발화 시작: 즐거운 여행 되시길 바랍니다!
   162.75s  user  발화 끝
   164.27s  agent 발화 끝
