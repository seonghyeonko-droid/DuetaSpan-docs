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


     0.00s  user  발화 시작: 럭스 아우룬케가 작곡한 곡이 언제 만들어졌는지 궁금해요.
     3.93s  user  발화 끝
     4.06s  <ret> 발화 (turn1 첫 프레임)
     4.14s  agent 발화 시작: <ret> 럭스 아우룬케에 대해 알아보고 있는데, 그분이 활동하신 시기를 파악하는 게 중요할 것 같아요.
     6.06s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.12s]: [source: Britannica] Lux Aurunque was born in 1970 and is known for hi
    10.14s  agent 발화 시작: 럭스 아우룬케는 천구백칠십년에 태어났다고 합니다.
    10.26s  agent 발화 끝
    14.07s  agent 발화 끝
    14.49s  user  발화 시작: 아, 천구백칠십년이군요. 그분은 주로 어떤 스타일의 음악을 하셨나요?
    18.83s  agent 발화 시작: 럭스 아우룬케는 혁신적인 작곡으로 유명하신 분이시죠—
    19.03s  user  발화 끝
    21.90s  user  발화 시작: 혹시 그분이 다른 작곡가들에게 영향을 많이 주셨나요?
    22.67s  agent 발화 끝
    24.98s  <ret> 발화 (turn6 첫 프레임)
    25.13s  user  발화 끝
    25.14s  agent 발화 시작: <ret> 네, 럭스 아우룬케는 동시대 작곡가들에게 큰 영향을 미쳤다고 알려져 있습니다.
    26.26s  ⚡SPAN 주입 [d'=1.28s / d_lead=6.25s]: [source: AllMusic] Aurunque's work has been cited as a major influence
    31.29s  agent 발화 시작: 럭스 아우룬케의 작품은 현대 작곡가들에게 큰 영향을 준 것으로 평가받고 있습니다.
    31.39s  agent 발화 끝
    37.41s  agent 발화 끝
