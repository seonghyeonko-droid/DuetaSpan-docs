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

# EXAMINER(FDB-v2) 단계: S1 혹시 럭스 아우룬케 작곡가가 언제 태어났는지 알 수 있을까요? | S2 아, 네… | S3 …맞아요. 근데 그분이 어떤 스타일의 음악을 주로 했는지 궁금 | S4 …혹시 그분이 다른 작곡가들과 협업한 적은 없나요?

     0.00s  user  발화 시작: 혹시 럭스 아우룬케 작곡가가 언제 태어났는지 알 수 있을까요?
     4.33s  <ret> 발화 (turn1 첫 프레임)
     4.41s  agent 발화 시작: <ret> 럭스 아우룬케 씨는 천구백칠십년에 태어났습니다. 음악 공부에 관심이 많으신가 봐요.
     4.68s  user  발화 끝
     6.33s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.79s]: Lux Aurunque was born in 1970.
     7.54s  user  발화 시작: 예.
     8.18s  user  발화 끝
     9.83s  user  발화 시작: 아, 네…
    10.20s  agent 발화 끝
    10.97s  user  발화 끝
    12.48s  user  발화 시작: …맞아요. 근데 그분이 어떤 스타일의 음악을 주로 했는지 궁금해요.
    16.74s  <ret> 발화 (turn5 첫 프레임)
    16.78s  user  발화 끝
    16.90s  agent 발화 시작: <ret> 럭스 아우룬케 씨는 앰비언트 전자 음악으로 유명합니다—
    18.74s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.61s]: (tool result) Lux Aurunque is known for ambient electronic music.
    19.78s  user  발화 시작: …혹시 그분이 다른 작곡가들과 협업한 적은 없나요?
    20.50s  agent 발화 끝
    23.13s  <ret> 발화 (turn7 첫 프레임)
    23.21s  agent 발화 시작: <ret> 럭스 아우룬케 씨는 이천오년에 에라와 함께 'Celestial Echoes' 앨범에서 협업했습니다
    23.24s  user  발화 끝
    25.13s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.90s]: Lux Aurunque collaborated with Aera on the album 'Celestial Echoes' in
    30.11s  agent 발화 끝
