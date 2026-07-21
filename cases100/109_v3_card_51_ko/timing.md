# v3_card_51_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_card_51",
#     "name": "정준",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "50s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-18",
#       "category": "trip",
#       "text": "User is planning a trip to Switzerland in June."
#     },
#     {
#       "date": "2026-04-28",
#       "category": "plant",
#       "text": "User is growing a lemon tree at home."
#     },
#     {
#       "date": "2026-04-22",
#       "category": "commute",
#       "text": "User drives about 40 minutes each way."
#     },
#     {
#       "date": "2026-02-09",
#       "category": "music",
#       "text": "User likes listening to K-ballads."
#     },
#     {
#       "date": "2026-01-02",
#       "category": "hobby",
#       "text": "User is into urban sketching."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-21",
#       "title": "Planning a camping trip",
#       "bullets": [
#         "a weekend at a lake site in September",
#         "asked about a 4-person tent and a cooler"
#       ]
#     },
#     {
#       "date": "2025-12-31",
#       "title": "Planning a dinner party",
#       "bullets": [
#         "hosting eight friends on Saturday",
#         "one guest is gluten-free"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 오늘 진짜 바쁘네. | S2 어디가 제일 좋을까? | S3 아, 그렇지. 기억해 줘서 고마워. | S4 아, 오늘 저녁 메뉴는 뭘 먹을까?

     0.00s  user  발화 시작: 오늘 진짜 바쁘네.
     1.40s  agent 발화 시작: 네, 그러시군요. 오늘 하루도 힘내세요.
     1.52s  user  발화 끝
     3.83s  agent 발화 끝
     4.27s  user  발화 시작: 치과 예약해 둔 거 기억하지? 시월 십오일 오후 열두시 삼십분.
     8.57s  user  발화 끝
     9.13s  agent 발화 시작: 네, 기억해 둘게요. 이만 원짜리 진료였죠?
    12.38s  agent 발화 끝
    12.46s  user  발화 시작: 맞아, 그거. 아, 요즘 뭔가 심심해. 뭐 재미있는 거 없을까?
    17.26s  user  발화 끝
    17.31s  agent 발화 시작: 심심하시군요. 뭔가 새로운 취미를 시작해 보시는 건 어떠세요?
    19.61s  user  발화 시작: 응.
    19.87s  user  발화 끝
    21.95s  agent 발화 끝
    22.73s  user  발화 시작: 취미라… 뭘 해야 할지 모르겠어.
    25.32s  agent 발화 시작: [curious] 혹시 미술에 관심 있으신가요?
    25.33s  user  발화 끝
    27.36s  user  발화 시작: 미술? 음… 괜찮을지도.
    27.49s  agent 발화 끝
    29.41s  <ret> 발화 (turn10 첫 프레임)
    29.68s  user  발화 끝
    29.69s  agent 발화 시작: <ret> 미켈란젤로의 천지창조는 천오백팔년에서 천오백십이년 사이에 시스티나 예배당 천장에 그려진 프레스코화
    30.36s  ⚡SPAN 주입 [d'=0.96s / d_lead=3.33s]: The Creation of Adam is a fresco by the Italian Renaissance artist Mic
    38.02s  agent 발화 끝
    38.62s  user  발화 시작: 아, 천지창조! 손가락 두 개가 닿는 그림이지?
    41.80s  user  발화 끝
    41.97s  agent 발화 시작: 맞아요. 아주 유명한 작품이죠.
    44.28s  user  발화 시작: 그 그림, 어디에 있어요?
    44.34s  agent 발화 끝
    46.20s  user  발화 끝
    46.40s  agent 발화 시작: 바티칸 시국에 있는 시스티나 예배당에 있습니다.
    47.65s  user  발화 시작: 그래.
    48.05s  user  발화 끝
    49.45s  agent 발화 끝
    49.55s  user  발화 시작: 바티칸… 가보고 싶다.
    51.34s  agent 발화 시작: [happy] 언젠가 꼭 방문해 보시길 바랍니다.
    51.38s  user  발화 끝
    53.87s  agent 발화 끝
    54.00s  user  발화 시작: 아, 근데 부산에도 미술관이 많잖아.
    56.44s  user  발화 끝
    56.67s  agent 발화 시작: 네, 부산에도 좋은 미술관들이 많이 있습니다.
    59.66s  user  발화 시작: 어디가 제일 좋을까?
    59.79s  agent 발화 끝
    60.45s  <ret> 발화 (turn21 첫 프레임)
    60.85s  agent 발화 시작: <ret> 부산의 미술관을 알아봐 드릴까요? 부산시립미술관은 해운대구 수영강변대로 백삼에 위치하고 있고, 평
    61.04s  user  발화 끝
    61.46s  ⚡SPAN 주입 [d'=1.01s / d_lead=2.41s]: (tool result) {"restaurants": [{"name": "부산시립미술관", "address": "부산 해운대구
    64.73s  user  발화 시작: 그래.
    65.22s  user  발화 끝
    70.50s  agent 발화 끝
    70.83s  user  발화 시작: 오, 평점 괜찮네. 거기가 제일 가까울까?
    73.60s  agent 발화 시작: 네, 현재 계신 곳에서 가장 가까운 미술관입니다.
    73.72s  user  발화 끝
    75.42s  user  발화 시작: 헐.
    75.82s  user  발화 끝
    76.73s  agent 발화 끝
    77.02s  user  발화 시작: 가볼 만하겠는데.
    78.31s  user  발화 끝
    78.41s  agent 발화 시작: [laugh] 네, 한번 방문해 보세요. 분명 즐거운 시간을 보내실 수 있을 거예요.
    80.97s  user  발화 시작: 응응.
    81.41s  user  발화 끝
    83.92s  user  발화 시작: 아, 근데 부산역 근처에 맛집도 추천해 줄 수 있어?
    84.05s  agent 발화 끝
    86.90s  <ret> 발화 (turn30 첫 프레임)
    87.10s  agent 발화 시작: <ret> 부산역 근처 맛집을 찾아 드릴까요? 부산역 근처 밀면집은 동구 중앙대로 이 이 일에 있고, 평점은
    87.11s  user  발화 끝
    88.26s  ⚡SPAN 주입 [d'=1.36s / d_lead=2.49s]: (tool result) {"restaurants": [{"name": "밀면집", "address": "부산 동구 중앙대로 
    97.01s  user  발화 시작: 밀면? 부산 명물이잖아.
    97.06s  agent 발화 끝
    98.68s  agent 발화 시작: 네, 부산에 오시면 꼭 드셔봐야 할 음식입니다.
    98.79s  user  발화 끝
   100.62s  user  발화 시작: 그래.
   100.92s  user  발화 끝
   101.72s  user  발화 시작: 좋아, 그럼 나중에 밀면 먹으러 가야겠다.
   101.82s  agent 발화 끝
   104.30s  user  발화 끝
   104.41s  agent 발화 시작: [happy] 네, 맛있게 드세요.
   105.73s  user  발화 시작: 아, 오늘 날씨 어때?
   105.78s  agent 발화 끝
   107.14s  <ret> 발화 (turn37 첫 프레임)
   107.15s  user  발화 끝
   107.18s  agent 발화 시작: <ret> 현재 부산의 기온은 이십팔도이고, 날씨는 맑으며, 습도는 육십퍼센트입니다.
   107.90s  ⚡SPAN 주입 [d'=0.76s / d_lead=6.01s]: (tool result) {"weather": {"temperature": 28, "condition": "맑음", "humi
   113.19s  agent 발화 끝
   113.40s  user  발화 시작: 맑네. 나들이 가기 좋겠다.
   115.66s  user  발화 끝
   115.79s  agent 발화 시작: 네, 완연한 여름 날씨네요.
   117.89s  agent 발화 끝
   118.02s  user  발화 시작: 아, 맞다. 치과 예약했던 거, 또 언제였지?
   121.21s  user  발화 끝
   121.23s  agent 발화 시작: 시월 십오일 오후 열두시 삼십분입니다.
   124.24s  agent 발화 끝
   124.94s  user  발화 시작: 아, 그렇지. 기억해 줘서 고마워.
   127.00s  user  발화 끝
   127.03s  agent 발화 시작: [curious] 천만에요.
   128.13s  agent 발화 끝
   128.62s  user  발화 시작: 혹시 영화 볼 만한 거 있어?
   129.87s  <ret> 발화 (turn45 첫 프레임)
   130.10s  user  발화 끝
   130.15s  agent 발화 시작: <ret> 영화 정보를 찾아 드릴까요? 현재 부산에서 상영 중인 영화 중 엘리멘탈은 애니메이션 장르이고, 평
   130.73s  ⚡SPAN 주입 [d'=0.87s / d_lead=2.23s]: (tool result) {"movies": [{"title": "엘리멘탈", "genre": "애니메이션", "rating"
   139.61s  agent 발화 끝
   139.64s  user  발화 시작: 엘리멘탈? 평점 높네.
   141.66s  user  발화 끝
   142.15s  agent 발화 시작: 네, 많은 사람들에게 호평을 받고 있습니다.
   145.06s  agent 발화 끝
   146.56s  user  발화 시작: 아, 혹시 부산역 근처에 괜찮은 카페도 있어?
   149.59s  <ret> 발화 (turn49 첫 프레임)
   149.74s  user  발화 끝
   149.90s  agent 발화 시작: <ret> 부산역 근처 카페를 찾아 드릴까요? 커피베네 부산역점은 동구 중앙대로 일 사 일에 위치하고 있고,
   151.57s  ⚡SPAN 주입 [d'=1.98s / d_lead=2.70s]: (tool result) {"restaurants": [{"name": "커피베네 부산역점", "address": "부산 동구
   159.62s  user  발화 시작: 커피베네? 거기 괜찮아.
   159.63s  agent 발화 끝
   161.24s  agent 발화 시작: 네, 잠시 쉬어가기 좋은 곳입니다.
   161.36s  user  발화 끝
   163.61s  agent 발화 끝
   163.78s  user  발화 시작: 아, 치과 예약했던 게 얼마였지?
   165.80s  agent 발화 시작: 이만 원이었습니다.
   165.86s  user  발화 끝
   167.14s  agent 발화 끝
   167.25s  user  발화 시작: 아, 맞다.
   168.02s  user  발화 끝
   168.07s  agent 발화 시작: [sigh] 기억력이 흐릿해지시는 것 같아 안타깝네요.
   169.44s  user  발화 시작: 그래.
   169.88s  user  발화 끝
   171.55s  user  발화 시작: 괜찮아. 나이 먹으면 그럴 수 있지.
   171.62s  agent 발화 끝
   173.63s  user  발화 끝
   173.65s  agent 발화 시작: 네, 그럴 수도 있죠. 하지만 저는 항상 곁에 있으니 걱정 마세요.
   178.20s  agent 발화 끝
   178.24s  user  발화 시작: 고마워.
   178.82s  user  발화 끝
   178.88s  agent 발화 시작: [happy] 천만에요.
   179.98s  agent 발화 끝
   180.33s  user  발화 시작: 아, 오늘 저녁 메뉴는 뭘 먹을까?
   182.74s  user  발화 끝
   183.18s  agent 발화 시작: 저녁 메뉴를 고민하시는군요. 혹시 특별히 드시고 싶은 게 있으신가요?
   188.12s  user  발화 시작: 음… 돼지국밥이 먹고 싶다.
   188.42s  agent 발화 끝
   190.51s  agent 발화 시작: 돼지국밥! 좋은 선택이네요. 부산에 오시면 꼭 드셔봐야 할 음식이죠.
   190.54s  user  발화 끝
   192.00s  🃏 CARD 주입 (2400f, 누적 65턴 요약, 100f): dental appmt: 시월 십오일 오후 열두시 삼십분; art interest: 미술; location preference: 바티칸; dinner pref: 
   193.30s  user  발화 시작: 응.
   193.71s  user  발화 끝
   196.00s  agent 발화 끝
   196.01s  user  발화 시작: 그렇지.
   196.54s  user  발화 끝
   197.07s  agent 발화 시작: 부산역 근처에 맛있는 돼지국밥집도 많습니다.
   200.93s  user  발화 시작: 아, 그럼 추천해 줘.
   200.95s  agent 발화 끝
   202.04s  <ret> 발화 (turn69 첫 프레임)
   202.06s  agent 발화 시작: <ret> 돼지국밥집을 찾아 드릴까요? 송정세대국밥은 해운대구 구남로사십일번길 이십이에 위치하고 있고, 평점
   202.06s  user  발화 끝
   203.25s  ⚡SPAN 주입 [d'=1.21s / d_lead=1.86s]: (tool result) {"restaurants": [{"name": "송정3대국밥", "address": "부산 해운대구 
   211.35s  agent 발화 끝
   211.37s  user  발화 시작: 송정세대국밥? 한번 가봐야겠다.
   214.12s  agent 발화 시작: 네, 맛있게 드세요.
   214.23s  user  발화 끝
   215.67s  agent 발화 끝
   216.29s  user  발화 시작: 아, 오늘 날씨 다시 한번 확인해 줄 수 있어?
   219.11s  <ret> 발화 (turn73 첫 프레임)
   219.20s  agent 발화 시작: <ret> 현재 부산의 기온은 이십구도이고, 날씨는 맑으며, 습도는 오십팔퍼센트입니다.
   219.37s  user  발화 끝
   219.71s  ⚡SPAN 주입 [d'=0.60s / d_lead=5.59s]: (tool result) {"weather": {"temperature": 29, "condition": "맑음", "humi
   221.79s  user  발화 시작: 응.
   222.22s  user  발화 끝
   224.69s  user  발화 시작: 맑네.
   224.78s  agent 발화 끝
   225.46s  user  발화 끝
   225.52s  agent 발화 시작: 네, 오늘도 좋은 날씨입니다.
   227.47s  user  발화 시작: 아, 그럼 이만 끊을게.
   227.54s  agent 발화 끝
   228.84s  agent 발화 시작: 네, 즐거운 하루 보내세요.
   228.87s  user  발화 끝
   230.54s  agent 발화 끝
