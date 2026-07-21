# v3_rag_24_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_24",
#     "name": "은온",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "60s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-16",
#       "category": "allergy",
#       "text": "User is allergic to eggs."
#     },
#     {
#       "date": "2026-05-20",
#       "category": "phone",
#       "text": "User uses an Xperia 1."
#     },
#     {
#       "date": "2026-04-18",
#       "category": "pet",
#       "text": "User has a Border Collie named Ziggy."
#     },
#     {
#       "date": "2026-03-23",
#       "category": "temp",
#       "text": "User keeps the home thermostat around 23°C."
#     },
#     {
#       "date": "2026-03-22",
#       "category": "hobby",
#       "text": "User is into sea kayaking."
#     },
#     {
#       "date": "2026-03-18",
#       "category": "dish",
#       "text": "User's go-to comfort dish is seafood pasta."
#     },
#     {
#       "date": "2025-12-05",
#       "category": "gym",
#       "text": "User has a gym membership near the station."
#     },
#     {
#       "date": "2025-12-03",
#       "category": "savings",
#       "text": "User is saving for a trip to Europe next year."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-12",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool and a sauna",
#         "prefers one within 10 minutes of the office"
#       ]
#     },
#     {
#       "date": "2026-04-14",
#       "title": "Learning to invest",
#       "bullets": [
#         "asked about index funds vs individual stocks",
#         "wants to start with 500k won a month"
#       ]
#     },
#     {
#       "date": "2026-02-13",
#       "title": "Training for a 10K",
#       "bullets": [
#         "current pace is around 6 minutes per km",
#         "race is in November"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 안녕하세요, 크래르. 요즘 너무 불안해서 잠을 잘 못 자요.
     4.38s  <ret> 발화 (turn1 첫 프레임)
     4.57s  agent 발화 시작: <ret> 안녕하세요! 불안해서 잠 못 이루시는군요. 그런 날이 있으시죠. 괜찮아요, 함께 편안하게 해볼까요
     4.72s  user  발화 끝
     4.86s  ⚡SPAN 주입 [d'=0.48s / d_lead=7.23s]: Martha Stewart is an American retail magnate, television personality, 
    11.80s  agent 발화 끝
    11.85s  agent 발화 시작: 마사 스튜어트는 미국의 유통 재벌이자 티 브이 유명인이자 작가라고 하네요. [happy] 혹시 불안감을 해소
    21.11s  user  발화 시작: 음… 혹시 홈 앤 어웨이에 나오는 루의 엄마 이름이 뭐였죠? 기억이 안 나네요.
    21.45s  agent 발화 끝
    28.90s  user  발화 끝
    28.95s  <ret> 발화 (turn4 첫 프레임)
    29.25s  agent 발화 시작: <ret> 홈 앤 어웨이에서 루 해리스의 엄마는 마사(앨리슨 멀버니)라고 합니다. [curious] 혹시 홈
    30.45s  ⚡SPAN 주입 [d'=1.50s / d_lead=9.74s]: Martha (Alison Mulvaney) is the mother of Roo Harris in the Australian
    38.99s  agent 발화 끝
