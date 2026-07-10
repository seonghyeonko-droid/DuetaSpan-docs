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


     0.00s  user  발화 시작: 룩스 아우룬케 작곡가가 언제 태어났는지 궁금해요.
     4.02s  user  발화 끝
     4.12s  <ret> 발화 (turn1 첫 프레임)
     4.20s  agent 발화 시작: <ret> 룩스 아우룬케 작곡가의 탄생 연도를 여쭤보셨네요.
     5.40s  ⚡SPAN 주입 [d'=1.28s / d_lead=3.23s]: [source: Britannica] Lux Aurunque was born in 1970 and is known for hi
     7.43s  agent 발화 끝
     7.49s  agent 발화 시작: 룩스 아우룬케 작곡가는… 천구백칠십 년에 태어났습니다.
    11.23s  agent 발화 끝
    11.79s  user  발화 시작: 혹시 그분이 어떤 장르로 유명한가요?
    14.52s  agent 발화 시작: 아, 네, 룩스 아우룬케는 전자 음악을 혁신적으로 사용해서 유명한데요.
    14.71s  user  발화 끝
    16.96s  user  발화 시작: 네.
    17.32s  user  발화 끝
    19.19s  agent 발화 끝
    19.34s  agent 발화 시작: 전자 음악 분야에서 독특한 시도를 많이 했다고 하죠.
    21.92s  agent 발화 끝
