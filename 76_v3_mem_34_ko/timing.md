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

# EXAMINER(FDB-v2) 단계: S1 음… 저, 오늘 저녁에 맛있는 거 먹으러 가고 싶은데, 어디가 | S2 오, 정말요? | S3 '라 카사'는 어디에 있어요? 집에서 얼마나 떨어져 있을까요? | S4 아, 정말 다행이다.

     0.00s  agent 발화 시작: 아바 씨, 안녕하세요. 저는 히아예요. 오늘 어떤 도움을 드릴까요?
     4.42s  user  발화 시작: 음… 저, 오늘 저녁에 맛있는 거 먹으러 가고 싶은데, 어디가 좋을까요?
     4.63s  agent 발화 끝
     8.93s  agent 발화 시작: 아바 씨께서 좋아하시는 음식이 있으신가요? 혹시 특별히 끌리는 메뉴가 있으신가요?
     9.09s  user  발화 끝
    13.74s  user  발화 시작: 멕시코 음식을 제일 좋아해요.
    13.79s  agent 발화 끝
    15.52s  <ret> 발화 (turn4 첫 프레임)
    15.68s  agent 발화 시작: <ret> 아바 씨께서 멕시코 음식을 좋아하시는군요. 멕시코 음식을 가장 좋아하신다는 정보를 확인했어요. 파
    15.81s  user  발화 끝
    16.80s  ⚡SPAN 주입 [d'=1.28s / d_lead=2.64s]: [2026-07-22] User's favorite cuisine is Mexican.
    20.73s  user  발화 시작: 그치.
    21.22s  user  발화 끝
    25.03s  user  발화 시작: 오, 정말요?
    25.18s  agent 발화 끝
    26.07s  agent 발화 시작: 네, 물론이죠. 지금부터 몇 군데 추천해 드릴게요. 혹시 특별히 원하시는 분위기가 있으신가요?
    26.22s  user  발화 끝
    31.26s  agent 발화 끝
    31.52s  user  발화 시작: 야외 테라스가 있는 곳이면 좋겠어요.
    33.50s  <ret> 발화 (turn9 첫 프레임)
    33.73s  agent 발화 시작: <ret> 야외 테라스가 있는 곳을 찾으시는군요.
    33.92s  user  발화 끝
    34.00s  ⚡SPAN 주입 [d'=0.50s / d_lead=2.86s]: [2026-03-15] Past chat — Planning a birthday dinner: party of six; loo
    35.00s  user  발화 시작: 음.
    35.36s  user  발화 끝
    36.41s  agent 발화 시작: 파리에서 야외 테라스가 있는 멕시코 음식점은 '라 카사'와 '엘 소르'가 유명해요. 둘 다 평이 아주 좋거든
    36.59s  agent 발화 끝
    40.27s  user  발화 시작: 어.
    40.58s  user  발화 끝
    43.50s  agent 발화 끝
    43.69s  user  발화 시작: '라 카사'는 어디에 있어요? 집에서 얼마나 떨어져 있을까요?
    47.76s  <ret> 발화 (turn14 첫 프레임)
    47.91s  agent 발화 시작: <ret> '라 카사'의 위치를 알려드릴게요. 아바 씨의 집 주소는 삼십 Oak Avenue로 되어 있네요.
    47.99s  user  발화 끝
    48.72s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.04s]: [2026-02-11] User's home address is 30 Oak Avenue.
    63.72s  agent 발화 끝
    63.73s  user  발화 시작: 네, 보내주세요. 그리고 혹시 채식 메뉴도 있나요?
    66.70s  <ret> 발화 (turn16 첫 프레임)
    66.93s  agent 발화 시작: <ret> 물론입니다. '라 카사'는 채식 메뉴도 다양하게 준비되어 있어요.
    67.15s  user  발화 끝
    68.70s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.02s]: (tool result) Destination: La Casa, 12 Rue Saint-Denis, 75001 Paris; D
    70.80s  <ret> 발화 (turn17 첫 프레임)
    70.87s  agent 발화 시작: <ret> 아바 씨께서 채식을 하신다는 점도 알고 있어요. 걱정 마세요.
    70.96s  agent 발화 끝
    72.47s  user  발화 시작: 맞아.
    72.80s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.93s]: [2026-06-25] User is vegetarian.
    72.97s  user  발화 끝
    74.80s  agent 발화 끝
    74.83s  user  발화 시작: 아, 정말 다행이다.
    76.18s  agent 발화 시작: 네, 아바 씨의 취향을 고려해서 최고의 저녁 식사를 준비해 드릴게요. -
    76.35s  user  발화 끝
    80.07s  user  발화 시작: 응응.
    80.70s  user  발화 끝
    82.14s  user  발화 시작: 정말 고마워요, 히아.
    82.15s  agent 발화 끝
    83.75s  user  발화 끝
    83.88s  agent 발화 시작: 천만에요, 아바 씨. 언제든 필요하시면 말씀해주세요.
    88.14s  agent 발화 끝
