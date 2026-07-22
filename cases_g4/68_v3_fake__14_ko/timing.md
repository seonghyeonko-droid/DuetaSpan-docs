# v3_fake__14_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_fake__14",
#     "name": "노경",
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
#       "date": "2026-06-06",
#       "category": "music",
#       "text": "User likes listening to 90s hip-hop."
#     },
#     {
#       "date": "2026-05-22",
#       "category": "floor",
#       "text": "User lives on the 15th floor."
#     },
#     {
#       "date": "2026-05-19",
#       "category": "savings",
#       "text": "User is saving for a trip to Europe next year."
#     },
#     {
#       "date": "2026-04-28",
#       "category": "commute",
#       "text": "User drives about 40 minutes each way."
#     },
#     {
#       "date": "2026-04-25",
#       "category": "plant",
#       "text": "User is growing a monstera at home."
#     },
#     {
#       "date": "2026-03-07",
#       "category": "car",
#       "text": "User drives no car — uses car-sharing."
#     },
#     {
#       "date": "2026-01-23",
#       "category": "learning",
#       "text": "User is studying Japanese."
#     },
#     {
#       "date": "2026-01-20",
#       "category": "trip",
#       "text": "User is planning a trip to Georgia in March."
#     },
#     {
#       "date": "2025-12-07",
#       "category": "partner",
#       "text": "User's partner is named Mina."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-06",
#       "title": "Switching phone plans",
#       "bullets": [
#         "uses about 30GB of data a month",
#         "wants to keep the same number"
#       ]
#     },
#     {
#       "date": "2026-01-28",
#       "title": "Learning to invest",
#       "bullets": [
#         "asked about index funds vs individual stocks",
#         "wants to start with 500k won a month"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 요즘 뉴스 보니까 교도소 인원이 엄청 늘었다는데, 원래 언제부터 그렇게 급격히 많아진 거야?
     5.78s  <ret> 발화 (turn1 첫 프레임)
     5.79s  user  발화 끝
     5.80s  agent 발화 시작: <ret> 아, 그 부분은 기록을 보면 확실히 알 수 있어요. 확인해 보니 수감자 수가 급격하게 늘어나기 시
     6.97s  ⚡SPAN 주입 [d'=1.19s / d_lead=4.30s]: The US prison population began to rise dramatically starting in 1973.
    14.89s  agent 발화 끝
    15.38s  user  발화 시작: 천구백칠십삼년이면 진짜 오래됐네. 갑자기 왜 그렇게 된 거지?
    19.19s  <ret> 발화 (turn3 첫 프레임)
    19.32s  agent 발화 시작: <ret> [curious] 그러게요. 사회적인 분위기나 법 제도가 크게 변했을 가능성이 높아요. 어떤 이유
    19.50s  user  발화 끝
    20.03s  ⚡SPAN 주입(IRRELEVANT) [d'=0.84s / d_lead=6.63s]: The current temperature in Reykjavik, Iceland is 8 degrees Celsius wit
    23.12s  user  발화 시작: 아.
    23.76s  user  발화 끝
    25.95s  agent 발화 끝
    26.21s  user  발화 시작: 아, 생각해보니 그냥 나중에 찾아봐도 될 것 같아. 이제 좀 쉬어야지.
    28.33s  agent 발화 시작: 맞아요.
    28.97s  agent 발화 끝
    31.02s  user  발화 끝
    31.21s  agent 발화 시작: [happy] 네, 좋아요. 푹 쉬면서 마음 편히 충전하는 시간 가지시길 바랄게요!
    35.75s  agent 발화 끝
