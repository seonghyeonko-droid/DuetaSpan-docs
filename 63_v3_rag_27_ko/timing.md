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
     3.53s  <ret> 발화 (turn1 첫 프레임)
     3.77s  agent 발화 시작: <ret> 룩스 아우룬케 작곡가의 탄생 연도를 여쭤보셨군요.
     3.79s  user  발화 끝
     4.03s  ⚡SPAN 주입 [d'=0.50s / d_lead=3.33s]: [source: Britannica] Lux Aurunque was born in 1970 and is known for hi
     7.10s  agent 발화 시작: 룩스 아우룬케 작곡가는… 천구백칠십 년에 태어났습니다.
     7.10s  agent 발화 끝
     9.03s  user  발화 시작: 예.
     9.34s  user  발화 끝
    10.79s  agent 발화 끝
    10.98s  user  발화 시작: 잠깐만요, 그분은 주로 어떤 장르를 작곡하셨나요?
    14.22s  <ret> 발화 (turn5 첫 프레임)
    14.30s  user  발화 끝
    14.54s  agent 발화 시작: <ret> 아, 네, 룩스 아우룬케 작곡가의 장르에 대해 궁금하시군요.
    16.06s  ⚡SPAN 주입 [d'=1.84s / d_lead=3.71s]: [source: AllMusic] Lux Aurunque’s compositions span electronic, ambien
    18.18s  agent 발화 시작: 룩스 아우룬케 작곡가는 전자 음악, 앰비언트, 실험 음악 등 다양한 장르를 아우르는 곡들을 만들었습니다.
    18.24s  agent 발화 끝
    25.12s  agent 발화 끝
