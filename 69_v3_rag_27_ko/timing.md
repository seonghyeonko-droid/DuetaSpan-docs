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

# EXAMINER(FDB-v2) 단계: S1 럭스 아우룬케 작곡가가 태어난 해가 언제예요? | S2 그분이 활동했던 시기는 언제쯤이었나요? | S3 … 그분이 다른 작곡가들과 협업한 적이 있나요? | S4 아냐 볼코프 씨는 어떤 음악가예요?

     0.00s  user  발화 시작: 럭스 아우룬케 작곡가가 태어난 해가 언제예요?
     3.07s  <ret> 발화 (turn1 첫 프레임)
     3.15s  agent 발화 시작: <ret> 럭스 아우룬케 씨는 천구백칠십년에 태어났습니다.
     3.37s  user  발화 끝
     4.35s  ⚡SPAN 주입 [d'=1.28s / d_lead=3.42s]: Lux Aurunque was born in nineteen seventy.
     4.92s  user  발화 시작: 예.
     5.46s  user  발화 끝
     6.19s  user  발화 시작: 그분이 활동했던 시기는 언제쯤이었나요?
     6.57s  agent 발화 끝
     8.96s  user  발화 끝
     9.23s  <ret> 발화 (turn4 첫 프레임)
     9.31s  agent 발화 시작: <ret> 그분은 천구백구십년대에 가장 활발하게 활동하셨습니다. 음악 스타일은 어떤 쪽에 속하는지 아세요?
     9.95s  ⚡SPAN 주입 [d'=0.72s / d_lead=5.98s]: Lux Aurunque was most active during the nineteen nineties.
    12.77s  user  발화 시작: 음.
    13.17s  user  발화 끝
    15.28s  agent 발화 끝
    15.59s  user  발화 시작: … 그분이 다른 작곡가들과 협업한 적이 있나요?
    18.51s  <ret> 발화 (turn7 첫 프레임)
    18.75s  agent 발화 시작: <ret> 럭스 아우룬케 씨는 아냐 볼코프 씨를 포함한 여러 예술가들과 협업했습니다. 주로 어떤 장르의 음악
    18.83s  user  발화 끝
    20.51s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.25s]: Lux Aurunque collaborated with several artists, including Anya Volkov.
    23.12s  user  발화 시작: 아.
    23.57s  user  발화 끝
    26.99s  agent 발화 끝
    29.44s  user  발화 시작: 아냐 볼코프 씨는 어떤 음악가예요?
    31.68s  <ret> 발화 (turn10 첫 프레임)
    31.88s  user  발화 끝
    31.91s  agent 발화 시작: <ret> 아냐 볼코프 씨는 현대 클래식 피아니스트입니다. 두 분의 협업은 어떤 느낌이었을까요?
    33.28s  ⚡SPAN 주입 [d'=1.60s / d_lead=5.00s]: Anya Volkov is a contemporary classical pianist.
    36.91s  agent 발화 끝
