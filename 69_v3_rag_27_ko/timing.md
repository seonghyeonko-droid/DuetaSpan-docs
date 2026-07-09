# v3_rag_27_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_27",
#     "name": "Kim",
#     "location": {
#       "city": "Paris",
#       "country": "France",
#       "timezone": "Europe/Paris (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "French",
#     "gender": "non-binary",
#     "age_range": "early 20s",
#     "language": "French"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-07-25",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Italian."
#     },
#     {
#       "date": "2026-06-05",
#       "category": "hobby",
#       "text": "User is into rock climbing."
#     },
#     {
#       "date": "2026-04-20",
#       "category": "allergy",
#       "text": "User is allergic to shellfish."
#     },
#     {
#       "date": "2026-04-19",
#       "category": "home",
#       "text": "User's home address is 411 Maple Drive."
#     },
#     {
#       "date": "2026-02-28",
#       "category": "diet",
#       "text": "User is vegetarian."
#     },
#     {
#       "date": "2026-01-23",
#       "category": "work",
#       "text": "User works as a architect."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-07-17",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 럭스 아우룬케 작곡가가 언제 태어났는지 궁금해요.
     3.56s  user  발화 끝
     3.66s  <ret> 발화 (turn1 첫 프레임)
     3.74s  agent 발화 시작: <ret> 럭스 아우룬케는 일구칠공년에 태어났습니다.
     4.94s  ⚡SPAN 주입 [d'=1.28s / d_lead=3.42s]: [source: Britannica] Lux Aurunque was born in 1970 and is known for hi
     7.05s  agent 발화 시작: 일구칠공년에 태어났다는 기록이 있습니다. 전자 음악 분야에서 혁신적인 작품으로 알려져 있습니다.
     7.16s  agent 발화 끝
    13.39s  agent 발화 끝
    13.81s  user  발화 시작: 아, 혹시 그분이 어떤 스타일의 음악을 주로 하시는지 알 수 있을까요?
    17.78s  <ret> 발화 (turn4 첫 프레임)
    17.93s  agent 발화 시작: <ret> 주변음을 바탕으로 글리치, IDM 리듬을 혼합한 독특한 음향 풍경을 만들어내신다고 합니다.
    18.16s  user  발화 끝
    19.06s  ⚡SPAN 주입 [d'=1.28s / d_lead=6.67s]: [source: AllMusic] Lux Aurunque's music blends ambient textures with g
    21.34s  user  발화 시작: 네.
    21.88s  user  발화 끝
    24.30s  <ret> 발화 (turn6 첫 프레임)
    24.53s  agent 발화 시작: <ret> 그의 음악은 대중적으로 큰 인기를 얻었지는 않았지만, 평론가들 사이에서는 높은 평가를 받고 있습니
    24.60s  agent 발화 끝
    26.30s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.35s]: [source: Resident Advisor] While not a mainstream artist, Lux Aurunque
    30.73s  agent 발화 시작: 주류 음악가라고 할 수는 없지만, 실험적인 사운드 디자인으로 평론가들의 찬사를 받고 있습니다.
    30.88s  agent 발화 끝
    36.28s  agent 발화 끝
