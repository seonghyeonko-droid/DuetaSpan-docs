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

# EXAMINER(FDB-v2) 단계: S1 럭스 아우룬케 작곡가가 언제 태어났는지 알 수 있을까요? | S2 …혹시 그분이 다른 아티스트와 협업한 적이 있나요? | S3 레이종 데트르와는 어떤 곡을 같이 만들었나요? | S4 그 곡은 어디에서 들을 수 있나요?

     0.00s  user  발화 시작: 럭스 아우룬케 작곡가가 언제 태어났는지 알 수 있을까요?
     3.91s  <ret> 발화 (turn1 첫 프레임)
     3.99s  agent 발화 시작: <ret> 럭스 아우룬케 씨는 천구백칠십년에 태어났습니다.
     4.21s  user  발화 끝
     5.59s  user  발화 시작: 예.
     5.59s  ⚡SPAN 주입 [d'=1.68s / d_lead=3.09s]: Lux Aurunque was born in 1970.
     6.22s  user  발화 끝
     7.00s  user  발화 시작: 그분이 어떤 장르의 음악을 주로 했는지 궁금해요.
     7.08s  agent 발화 끝
    10.10s  <ret> 발화 (turn4 첫 프레임)
    10.23s  user  발화 끝
    10.24s  agent 발화 시작: <ret> 그분의 음악 장르에 대해 자세히 알아봐 드릴게요.
    10.60s  ⚡SPAN 주입 [d'=0.50s / d_lead=2.59s]: Lux Aurunque is known for his work in dark ambient and ritual electron
    12.77s  agent 발화 시작: 럭스 아우룬케 씨는 다크 앰비언트와 의식 전자 음악으로 유명합니다. 좀 더 구체적으로 어떤 점이 궁금하신가요
    12.83s  agent 발화 끝
    16.50s  user  발화 시작: 음.
    16.95s  user  발화 끝
    18.99s  user  발화 시작: …혹시 그분이 다른 아티스트와 협업한 적이 있나요?
    19.21s  agent 발화 끝
    22.19s  <ret> 발화 (turn8 첫 프레임)
    22.51s  user  발화 끝
    22.59s  agent 발화 시작: <ret> 럭스 아우룬케 씨는 레이종 데트르와 트레포네마 같은 아티스트들과 협업한 적이 있습니다. 혹시 특정
    24.19s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.69s]: Lux Aurunque has collaborated with artists such as Raison d'être and T
    26.65s  user  발화 시작: 아.
    27.09s  user  발화 끝
    30.17s  user  발화 시작: 레이종 데트르와는 어떤 곡을 같이 만들었나요?
    30.28s  agent 발화 끝
    33.33s  <ret> 발화 (turn11 첫 프레임)
    33.49s  agent 발화 시작: <ret> 레이종 데트르와의 협업 곡에 대해 찾아보겠습니다.
    33.77s  user  발화 끝
    35.09s  ⚡SPAN 주입 [d'=1.76s / d_lead=2.96s]: Lux Aurunque and Raison d'être collaborated on the track "Subterranean
    36.36s  agent 발화 시작: 럭스 아우룬케 씨와 레이종 데트르 씨는 이천오년에 “지하 통로”라는 곡을 함께 만들었습니다. 도움이 되었으면
    36.45s  agent 발화 끝
    38.72s  user  발화 시작: 그렇죠.
    39.55s  user  발화 끝
    43.77s  agent 발화 끝
    44.58s  user  발화 시작: 그 곡은 어디에서 들을 수 있나요?
    46.17s  <ret> 발화 (turn15 첫 프레임)
    46.48s  agent 발화 시작: <ret> “지하 통로”를 들을 수 있는 곳을 알아봐 드리겠습니다.
    46.66s  user  발화 끝
    46.67s  ⚡SPAN 주입 [d'=0.50s / d_lead=3.23s]: "Subterranean Passage" — Lux Aurunque & Raison d'être (Echoes of the V
    49.71s  agent 발화 끝
