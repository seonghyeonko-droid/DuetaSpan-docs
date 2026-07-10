# v3_rag_27_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_27",
#     "name": "연준",
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
#       "date": "2026-05-17",
#       "category": "hobby",
#       "text": "User is into marathon training."
#     },
#     {
#       "date": "2025-12-07",
#       "category": "home",
#       "text": "User's home address is 서울 강남구 역삼동 678-9."
#     },
#     {
#       "date": "2025-12-06",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     },
#     {
#       "date": "2025-09-15",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Thai."
#     },
#     {
#       "date": "2025-06-11",
#       "category": "work",
#       "text": "User works as a high-school teacher."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-03",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 혹시 럭스 아우룬케 작곡가의 생년이 언제인지 알 수 있을까요? | S2 앰비언트 음악은 잘 모르지만, 혹시 그분이 다른 음악가와 협업 | S3 …그분이 활동했던 시기에 비슷한 음악을 하던 다른 작곡가는 누 | S4 …에이펙스 트윈은 처음 듣는 이름이네요.

     0.00s  user  발화 시작: 혹시 럭스 아우룬케 작곡가의 생년이 언제인지 알 수 있을까요?
     4.22s  <ret> 발화 (turn1 첫 프레임)
     4.30s  agent 발화 시작: <ret> 럭스 아우룬케 작곡가는 천구백칠십년에 태어났습니다.
     4.54s  user  발화 끝
     5.50s  ⚡SPAN 주입 [d'=1.28s / d_lead=3.52s]: Lux Aurunque was born in nineteen seventy.
     6.13s  user  발화 시작: 예.
     6.76s  user  발화 끝
     7.44s  user  발화 시작: 그분이 어떤 스타일의 음악을 주로 하셨는지도 궁금해요.
     7.82s  agent 발화 끝
    11.28s  user  발화 끝
    11.57s  <ret> 발화 (turn4 첫 프레임)
    11.64s  agent 발화 시작: <ret> 잠시만 기다려 주시겠어요?
    12.07s  ⚡SPAN 주입 [d'=0.50s / d_lead=1.65s]: (tool result) Lux Aurunque is known for ambient electronic music.
    13.27s  agent 발화 시작: 럭스 아우룬케는 앰비언트 전자 음악으로 유명합니다. 앰비언트 음악 좋아하세요?
    13.29s  agent 발화 끝
    16.08s  user  발화 시작: 음.
    16.48s  user  발화 끝
    18.13s  agent 발화 끝
    18.16s  user  발화 시작: 앰비언트 음악은 잘 모르지만, 혹시 그분이 다른 음악가와 협업한 적이 있을까요? —
    23.37s  user  발화 시작: …그분이 활동했던 시기에 비슷한 음악을 하던 다른 작곡가는 누가 있었나요?
    23.52s  user  발화 끝
    27.44s  <ret> 발화 (turn9 첫 프레임)
    27.68s  agent 발화 시작: <ret> 아, 네, 좋은 질문이에요. 비슷한 시기에 활동했던 다른 작곡가를 찾아볼까요? 럭스 아우룬케 작곡
    27.72s  user  발화 끝
    29.44s  ⚡SPAN 주입 [d'=2.00s / d_lead=11.92s]: Brian Eno and Aphex Twin were contemporaries of Lux Aurunque.
    34.08s  user  발화 시작: 아.
    34.48s  user  발화 끝
    39.60s  agent 발화 끝
    40.14s  user  발화 시작: 브라이언 이노는 들어본 적 있는데…
    42.53s  user  발화 끝
    44.40s  user  발화 시작: …에이펙스 트윈은 처음 듣는 이름이네요.
    47.31s  user  발화 끝
    47.61s  agent 발화 시작: 에이펙스 트윈은 실험적인 전자 음악으로 유명합니다. 한 번 들어보시면 좋아하실 수도 있어요.
    52.93s  agent 발화 끝
