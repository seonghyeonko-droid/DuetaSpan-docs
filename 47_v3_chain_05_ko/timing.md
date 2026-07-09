# v3_chain_05_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_chain_05",
#     "name": "유우",
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
#       "date": "2026-08-02",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-07-22",
#       "category": "pet",
#       "text": "User has a Siamese cat named Bella."
#     },
#     {
#       "date": "2026-03-21",
#       "category": "trip",
#       "text": "User is planning a trip to Iceland in October."
#     },
#     {
#       "date": "2026-02-20",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Thai."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-05",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2026-02-15",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 주니 카페 가격대는 어떻게 돼요? | S2 예약해 주세요. 두 명으로, 내일 저녁 일곱시에요. | S3 오분 정도면 괜찮겠네요. | S4 아뇰로티 델 플린 맛있겠네요.

     0.00s  user  발화 시작: 주니 카페 가격대는 어떻게 돼요?
     1.80s  <ret> 발화 (turn1 첫 프레임)
     2.11s  agent 발화 시작: <ret> 주니 카페의 가격대는 다소 높은 편이에요.
     2.21s  user  발화 끝
     3.40s  ⚡SPAN 주입 [d'=1.60s / d_lead=2.59s]: (tool result) Price range: $$$
     4.67s  agent 발화 시작: 가격대가 세 개 달러 표시로 되어 있습니다.
     4.70s  agent 발화 끝
     5.60s  user  발화 시작: 맞아요.
     6.09s  user  발화 끝
     6.93s  agent 발화 끝
     6.97s  user  발화 시작: 그럼 근처에 좀 더 저렴한 곳 없을까요?
     9.36s  agent 발화 시작: 물론입니다. 어떤 종류의 음식을 찾으세요?
     9.41s  user  발화 끝
    11.87s  user  발화 시작: 파스타요.
    11.94s  agent 발화 끝
    12.50s  user  발화 끝
    12.54s  <ret> 발화 (turn7 첫 프레임)
    12.69s  agent 발화 시작: <ret> 파스타를 찾으시는군요. 피오렐라와 토니 피자 나폴레타나가 가까운 파스타집입니다. 피오렐라는 중간 
    13.18s  ⚡SPAN 주입 [d'=0.64s / d_lead=1.25s]: (tool result) Restaurants serving pasta near Zuni Cafe: Fiorella, $$; 
    22.66s  agent 발화 끝
    24.02s  user  발화 시작: 피오렐라 메뉴 좀 알려줄 수 있어요?
    26.08s  <ret> 발화 (turn9 첫 프레임)
    26.14s  agent 발화 시작: <ret> 카초 에 페페는 이십이달러, 스파게티 알레 봉골레는 이십팔달러, 마르게리타 피자는 십팔달러입니다.
    26.15s  user  발화 끝
    28.08s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.41s]: (tool result) Fiorella menu highlights: Cacio e Pepe $22, Spaghetti al
    29.63s  user  발화 시작: 정말요?
    30.45s  user  발화 끝
    33.55s  agent 발화 끝
    34.07s  user  발화 시작: 스파게티 알레 봉골레 맛있을까요?
    36.63s  agent 발화 시작: 평이 아주 좋은 메뉴입니다. 많은 분들이 추천하시더라고요.
    36.66s  user  발화 끝
    38.91s  user  발화 시작: 네.
    39.41s  user  발화 끝
    40.21s  agent 발화 시작: 다른 메뉴도 궁금하신가요, 아니면 바로 예약해 드릴까요?
    40.38s  agent 발화 끝
    41.48s  user  발화 시작: 네네.
    42.11s  user  발화 끝
    43.68s  agent 발화 끝
    43.85s  user  발화 시작: 예약해 주세요. 두 명으로, 내일 저녁 일곱시에요.
    47.59s  <ret> 발화 (turn17 첫 프레임)
    47.66s  agent 발화 시작: <ret> 두 분이시군요. 피오렐라에 내일 저녁 일곱시에 두 분 예약이 완료되었습니다. 확인 번호는 팔 칠 
    47.68s  user  발화 끝
    48.39s  ⚡SPAN 주입 [d'=0.80s / d_lead=1.04s]: (tool result) Reservation confirmed at Fiorella for 2 people tomorrow 
    56.07s  user  발화 시작: 확인 번호 다시 한 번만 말해 줄 수 있을까요?
    56.51s  agent 발화 끝
    58.14s  user  발화 끝
    58.20s  agent 발화 시작: 네, 확인 번호는 팔 칠 육 오 사번입니다.
    61.15s  agent 발화 끝
    62.09s  user  발화 시작: 혹시 주차는 어떻게 해야 하나요?
    63.83s  <ret> 발화 (turn21 첫 프레임)
    63.89s  user  발화 끝
    63.90s  agent 발화 시작: <ret> 길가 주차는 제한적이고, 이천삼백 폴크 거리에 유료 주차장이 있습니다. 시간당 팔달러입니다.
    65.83s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.04s]: (tool result) Parking near Fiorella: Street parking (limited), paid lo
    70.85s  user  발화 시작: 유료 주차장까지 얼마나 걸릴까요?
    70.94s  agent 발화 끝
    72.77s  agent 발화 시작: 피오렐라에서 유료 주차장까지 도보로 약 오분 정도 걸립니다.
    72.92s  user  발화 끝
    76.70s  agent 발화 끝
    77.20s  user  발화 시작: 오분 정도면 괜찮겠네요.
    78.85s  agent 발화 시작: 그럼 내일 저녁 일곱시에 피오렐라에서 뵙겠습니다. 즐거운 시간 보내세요.
    78.95s  user  발화 끝
    83.15s  agent 발화 끝
    83.66s  user  발화 시작: 잠시만요.
    84.09s  user  발화 시작: 혹시 피오렐라 말고 다른 이탈리아 식당은 없을까요? 분위기가 좀 더 조용한 곳으로요.
    84.34s  agent 발화 시작: 네? —
    84.43s  user  발화 끝
    84.97s  agent 발화 끝
    89.76s  <ret> 발화 (turn29 첫 프레임)
    90.06s  agent 발화 시작: <ret> 세븐 힐스와 SPQR이 좀 더 조용한 이탈리아 식당입니다. 세븐 힐스는 중간 가격대, SPQR은 
    90.11s  user  발화 끝
    91.76s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.83s]: (tool result) Quieter Italian restaurants near Zuni Cafe: Seven Hills,
    97.46s  user  발화 시작: 세븐 힐스는 어떤 메뉴가 유명해요?
    97.89s  agent 발화 끝
   100.31s  <ret> 발화 (turn31 첫 프레임)
   100.37s  agent 발화 시작: <ret> 아뇰로티 델 플린은 이십육달러, 탈리아텔레 볼로네제는 이십사달러입니다.
   100.64s  user  발화 끝
   101.67s  ⚡SPAN 주입 [d'=1.36s / d_lead=5.00s]: (tool result) Seven Hills signature dishes: Agnolotti del Plin $26, Ta
   105.37s  agent 발화 끝
   105.55s  user  발화 시작: 아뇰로티 델 플린 맛있겠네요.
   107.81s  user  발화 끝
   107.88s  agent 발화 시작: 네, 많은 분들이 맛있다고 말씀하십니다.
   110.74s  agent 발화 끝
   110.81s  user  발화 시작: 그럼 세븐 힐스로 예약해 주세요. 내일 저녁 일곱시에 두 명이요.
   114.27s  <ret> 발화 (turn35 첫 프레임)
   114.58s  agent 발화 시작: <ret> 세븐 힐스로 변경하시겠군요. 세븐 힐스에 내일 저녁 일곱시에 두 분 예약이 완료되었습니다. 확인 
   114.64s  user  발화 끝
   115.47s  ⚡SPAN 주입 [d'=1.20s / d_lead=1.41s]: (tool result) Reservation confirmed at Seven Hills for 2 people tomorr
   118.20s  user  발화 시작: 정말요?
   118.93s  user  발화 끝
   123.20s  user  발화 시작: 확인 번호는요?
   123.48s  agent 발화 끝
   124.28s  agent 발화 시작: 확인 번호는 구 팔 칠 육 오번입니다.
   124.44s  user  발화 끝
   127.10s  agent 발화 끝
   127.21s  user  발화 시작: 감사합니다.
   127.94s  user  발화 끝
   128.03s  agent 발화 시작: 천만에요. 즐거운 저녁 식사 되세요!
   131.51s  agent 발화 끝
