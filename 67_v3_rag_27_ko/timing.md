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
#       "text": "User's home address is 945 Elm Street."
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


     0.00s  user  발화 시작: 럭스 아우룬케 작곡가가 언제 태어났는지 궁금해요.
     2.73s  <ret> 발화 (turn1 첫 프레임)
     2.89s  agent 발화 시작: <ret> 럭스 아우룬케 작곡가는… 천구백칠십년에 태어났습니다.
     2.95s  user  발화 끝
     4.14s  user  발화 시작: 예.
     4.73s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.74s]: [source: Britannica] Lux Aurunque was born in 1970 and is known for hi
     6.63s  agent 발화 끝
     7.11s  user  발화 시작: 아, 천구백칠십년이면 제가 초등학교에 들어갈 때쯤이네요?
     7.61s  user  발화 끝
     7.72s  agent 발화 시작: 천구백칠십년생이시라면, 그 즈음 초등학교에 입학하셨을 수도 있겠네요. 럭스 아우룬케는 실험 음악 분야에서 중
     8.22s  user  발화 끝
     9.26s  user  발화 시작: 실험 음악이라… 어떤 스타일의 음악을 주로 만들었나요?
     9.70s  agent 발화 끝
    11.56s  user  발화 끝
