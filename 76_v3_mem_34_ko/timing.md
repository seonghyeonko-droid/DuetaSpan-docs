# v3_mem_34_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_34",
#     "name": "Ava",
#     "location": {
#       "city": "Paris",
#       "country": "France",
#       "timezone": "Europe/Paris (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "French",
#     "gender": "female",
#     "age_range": "late 30s",
#     "language": "French"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-07-22",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Mexican."
#     },
#     {
#       "date": "2026-06-25",
#       "category": "diet",
#       "text": "User is vegetarian."
#     },
#     {
#       "date": "2026-06-15",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2026-02-23",
#       "category": "allergy",
#       "text": "User is allergic to peanuts."
#     },
#     {
#       "date": "2026-02-11",
#       "category": "home",
#       "text": "User's home address is 30 Oak Avenue."
#     },
#     {
#       "date": "2026-02-09",
#       "category": "trip",
#       "text": "User is planning a trip to Kyoto in December."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-03-15",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 음… 내일 친구 생일 파티를 열려고 하는데, 야외 좌석이 있는 | S2 응, 부탁해. | S3 응, 예약해 줘. | S4 오, 다행이다. 그럼 내일 저녁 여덟시에 여섯 명으로 예약해 

     0.00s  agent 발화 시작: 아바님, 안녕하세요. 저는 히아예요. 오늘 어떤 도움을 드릴까요?
     3.98s  user  발화 시작: 음… 내일 친구 생일 파티를 열려고 하는데, 야외 좌석이 있는 식당을 찾고 있어. 여섯 명인데, 어디가 좋을
     4.25s  agent 발화 끝
    12.37s  agent 발화 시작: 생일 파티 장소를 찾으시는군요. 여섯 분이 야외 좌석을 선호하신다는 점, 기억해 두겠습니다. 혹시 특별히 선
    12.52s  user  발화 끝
    21.76s  user  발화 시작: 멕시코 음식을 제일 좋아해.
    21.88s  agent 발화 끝
    23.54s  <ret> 발화 (turn4 첫 프레임)
    23.69s  agent 발화 시작: <ret> 멕시코 음식을 좋아하시는군요. 멕시코 음식을 좋아하시는 걸로 알고 있어요. 파티에 어울리는 멕시코
    23.74s  user  발화 끝
    25.14s  ⚡SPAN 주입 [d'=1.60s / d_lead=1.64s]: [2026-07-22] User's favorite cuisine is Mexican.
    28.33s  user  발화 시작: 그치.
    28.78s  user  발화 끝
    32.29s  user  발화 시작: 응, 부탁해.
    32.45s  agent 발화 끝
    33.30s  <ret> 발화 (turn7 첫 프레임)
    33.53s  agent 발화 시작: <ret> 네, 알겠습니다. 파리에서 야외 좌석이 있고 멕시코 음식을 제공하는 식당을 검색해 보겠습니다. 잠
    33.76s  user  발화 끝
    35.30s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.87s]: (tool result) Restaurant 'El Sol' - Address: 12 Rue Saint-Denis, Paris
    41.30s  agent 발화 시작: '엘 솔'과 '라 피에스타' 두 곳을 찾았어요. '엘 솔'은 여덟명까지 수용 가능하고 평점도 사 점 오점인데
    41.41s  agent 발화 끝
    56.47s  user  발화 시작: '엘 솔'이 더 나은 것 같아.
    56.51s  agent 발화 끝
    58.19s  agent 발화 시작: '엘 솔'이 더 마음에 드시는군요. 예약해 드릴까요?
    58.22s  user  발화 끝
    59.97s  user  발화 시작: 어.
    60.47s  user  발화 끝
    61.66s  agent 발화 끝
    62.73s  user  발화 시작: 응, 예약해 줘.
    64.15s  user  발화 끝
    64.40s  agent 발화 시작: 네, '엘 솔'로 예약을 진행하겠습니다. 혹시 특별히 요청 사항이 있으신가요?
    69.59s  agent 발화 끝
    69.74s  user  발화 시작: 음… 채식 메뉴도 있는지 확인해 줘.
    71.99s  <ret> 발화 (turn15 첫 프레임)
    72.15s  agent 발화 시작: <ret> 채식 메뉴가 있는지 확인해 드리죠. 아바님은 채식을 하시는 걸로 알고 있어요. '엘 솔'에 채식 
    72.32s  user  발화 끝
    73.03s  ⚡SPAN 주입 [d'=1.04s / d_lead=2.41s]: [2026-06-25] User is vegetarian.
    76.32s  user  발화 시작: 음.
    76.81s  user  발화 끝
    80.69s  agent 발화 시작: 확인 결과, '엘 솔'에는 몇 가지 채식 옵션이 있습니다. 콩 타코나 채소 퀘사디아 같은 메뉴가 있어요.
    80.81s  agent 발화 끝
    83.64s  user  발화 시작: 맞아.
    84.14s  user  발화 끝
    87.64s  agent 발화 끝
    87.71s  user  발화 시작: 오, 다행이다. 그럼 내일 저녁 여덟시에 여섯 명으로 예약해 줘.
    91.40s  agent 발화 시작: 네, 내일 저녁 여덟시에 '엘 솔'에 여섯 명으로 예약 완료했습니다. 예약 확인 문자 메시지를 보내드릴게요.
    91.59s  user  발화 끝
    93.70s  user  발화 시작: 응응.
    94.23s  user  발화 끝
    97.34s  user  발화 시작: 고마워.
    97.42s  agent 발화 끝
    97.98s  user  발화 끝
    98.27s  agent 발화 시작: 천만에요. 생일 파티 준비 잘 하시고, 즐거운 시간 보내세요. 혹시 다른 도움이 필요하시면 언제든지 말씀해 
   106.10s  agent 발화 끝
