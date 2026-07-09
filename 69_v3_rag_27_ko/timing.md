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
     3.23s  user  발화 끝
     3.38s  <ret> 발화 (turn1 첫 프레임)
     3.44s  agent 발화 시작: <ret> 그 점에 대해서는— 럭스 아우룬케는 천구백칠십년에 태어났어요.
     3.94s  ⚡SPAN 주입 [d'=0.56s / d_lead=1.96s]: [source: Britannica] Lux Aurunque was born in nineteen seventy.
     5.85s  user  발화 시작: 예.
     6.54s  user  발화 끝
     8.02s  agent 발화 끝
     8.36s  user  발화 시작: 아, 그분이 현대 음악가였어요?
     9.81s  <ret> 발화 (turn4 첫 프레임)
    10.21s  agent 발화 시작: <ret> 네, 럭스 아우룬케는 현대 음악계에 큰 영향을 미쳤죠.
    10.44s  user  발화 끝
    10.69s  ⚡SPAN 주입 [d'=0.88s / d_lead=3.75s]: [source: AllMusic] Lux Aurunque’s compositions are known for their exp
    13.82s  agent 발화 시작: 럭스 아우룬케의 곡들은 실험적인 성향과 전자 음악 요소를 특징으로 해요.
    13.96s  agent 발화 끝
    16.97s  user  발화 시작: 음.
    17.55s  user  발화 끝
    19.29s  agent 발화 끝
    19.54s  user  발화 시작: 혹시 다른 작품도 많이 만들었나요?
    21.47s  <ret> 발화 (turn8 첫 프레임)
    21.71s  agent 발화 시작: <ret> 네, 럭스 아우룬케는 다양한 장르의 작품을 남겼어요.
    21.80s  user  발화 끝
    23.47s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.84s]: [source: Discogs] Lux Aurunque released over fifty albums throughout h
    25.43s  agent 발화 시작: 럭스 아우룬케는 생애 동안 쉰 곡이 넘는 앨범을 발표했고, 앰비언트부터 인더스트리얼까지 다양한 장르를 아우렀
    25.55s  agent 발화 끝
    33.54s  agent 발화 끝
