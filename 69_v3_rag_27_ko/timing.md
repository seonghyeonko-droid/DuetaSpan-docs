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
     3.19s  user  발화 끝
     3.47s  <ret> 발화 (turn1 첫 프레임)
     3.55s  agent 발화 시작: <ret> 럭스 아우룬케에 대해 알아보고 있었는데— 일구칠공년에 태어났어요. 혹시 다른 정보가 더 필요하신가
     4.75s  ⚡SPAN 주입 [d'=1.28s / d_lead=3.28s]: Lux Aurunque was born in nineteen seventy.
     7.87s  user  발화 시작: 예.
     8.46s  user  발화 끝
    11.43s  agent 발화 끝
    11.83s  user  발화 시작: 그분이 어떤 음악 스타일을 주로 하셨는지 알 수 있을까요?
    14.77s  <ret> 발화 (turn4 첫 프레임)
    14.85s  agent 발화 시작: <ret> 아, 네, 음악 스타일 말씀이시군요.
    15.07s  user  발화 끝
    15.27s  ⚡SPAN 주입 [d'=0.50s / d_lead=2.49s]: Lux Aurunque primarily composed neoclassical darkwave music.
    17.18s  agent 발화 시작: 주로 신 고전 다크웨이브 음악을 작곡하셨어요. 굉장히 독특한 스타일이죠.
    17.34s  agent 발화 끝
    20.59s  user  발화 시작: 음.
    21.27s  user  발화 끝
    23.11s  agent 발화 끝
    23.25s  user  발화 시작: 다크웨이브가 어떤 음악인가요? 잘 몰라서요.
    26.90s  agent 발화 시작: 다크웨이브는 짙은 분위기가 특징인 음악 장르예요. 멜로디가 어둡고 실험적인 사운드를 많이 사용하죠.
    26.90s  user  발화 끝
    34.13s  agent 발화 끝
