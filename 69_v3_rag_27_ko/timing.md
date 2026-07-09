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

# EXAMINER(FDB-v2) 단계: S1 룩스 아우룬케 작곡가가 언제 태어났는지 궁금해요. | S2 혹시 그분이 어떤 장르의 음악을 주로 하셨나요? | S3 어떤 스타일의 음악을 주로 하셨는지 궁금해요. | S4 아, 실험 음악이군요. 그분 음악을 들어볼 수 있는 곳이 있을

     0.00s  user  발화 시작: 룩스 아우룬케 작곡가가 언제 태어났는지 궁금해요.
     3.61s  user  발화 끝
     3.73s  <ret> 발화 (turn1 첫 프레임)
     3.80s  agent 발화 시작: <ret> 그 점에 대해서는— 룩스 아우룬케는 천구백칠십년에 태어났습니다.
     4.85s  ⚡SPAN 주입 [d'=1.12s / d_lead=2.20s]: [source: Britannica] Lux Aurunque was born in nineteen seventy.
     6.56s  user  발화 시작: 예.
     7.20s  user  발화 끝
     8.95s  agent 발화 끝
     9.34s  user  발화 시작: 아, 그렇군요. 그럼 그분이 활동했던 시기는 언제쯤이었을까요?
    12.58s  <ret> 발화 (turn4 첫 프레임)
    12.71s  agent 발화 시작: <ret> 그분의 활동 시기를 알아보고 싶으시군요.
    12.95s  user  발화 끝
    13.08s  ⚡SPAN 주입 [d'=0.50s / d_lead=3.05s]: [source: AllMusic] Aurunque's most notable work occurred during the ea
    15.65s  agent 발화 시작: 룩스 아우룬케는 천구백팔십년대 초기에 가장 활발하게 활동했습니다.
    15.76s  agent 발화 끝
    18.54s  user  발화 시작: 음.
    19.13s  user  발화 끝
    20.65s  agent 발화 끝
    20.96s  user  발화 시작: 혹시 그분이 어떤 장르의 음악을 주로 하셨나요?
    23.65s  agent 발화 시작: 아, 그—
    23.68s  user  발화 끝
    23.96s  user  발화 시작: 어떤 스타일의 음악을 주로 하셨는지 궁금해요.
    24.70s  agent 발화 끝
    26.44s  <ret> 발화 (turn10 첫 프레임)
    26.84s  agent 발화 시작: <ret> 룩스 아우룬케는 주로 실험 음악과 전자 음악을 하셨습니다.
    27.02s  user  발화 끝
    27.72s  ⚡SPAN 주입 [d'=1.28s / d_lead=4.31s]: [source: Discogs] Lux Aurunque is categorized as an experimental and e
    31.08s  agent 발화 시작: 룩스 아우룬케는 실험 음악과 전자 음악 작곡가로 분류됩니다.
    31.15s  agent 발화 끝
    33.47s  user  발화 시작: 그러니까요.
    34.19s  user  발화 끝
    35.75s  agent 발화 끝
    35.81s  user  발화 시작: 아, 실험 음악이군요. 그분 음악을 들어볼 수 있는 곳이 있을까요?
    39.27s  <ret> 발화 (turn14 첫 프레임)
    39.59s  agent 발화 시작: <ret> 룩스 아우룬케의 음악을 들을 수 있는 곳을 찾아볼까요?
    39.65s  user  발화 끝
    39.77s  ⚡SPAN 주입 [d'=0.50s / d_lead=4.08s]: [source: Bandcamp] Lux Aurunque's music is available for streaming and
    43.51s  agent 발화 시작: 룩스 아우룬케의 음악은 Bandcamp에서 스트리밍하고 구매할 수 있습니다.
    43.66s  agent 발화 끝
    48.51s  agent 발화 끝
