# v3_rag_25_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_25",
#     "name": "하빈",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "late 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-21",
#       "category": "home",
#       "text": "User's home address is 부산 해운대구 우동 123-4."
#     },
#     {
#       "date": "2026-05-19",
#       "category": "pet",
#       "text": "User has a Golden Retriever named Max."
#     },
#     {
#       "date": "2026-03-15",
#       "category": "diet",
#       "text": "User is gluten-free."
#     },
#     {
#       "date": "2026-02-15",
#       "category": "trip",
#       "text": "User is planning a trip to Kyoto in March."
#     },
#     {
#       "date": "2025-07-16",
#       "category": "allergy",
#       "text": "User is allergic to shellfish."
#     },
#     {
#       "date": "2025-06-19",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-03-15",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2026-01-17",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 요즘 노래 뭐 듣고 있어요?
     1.61s  agent 발화 시작: 저는 늘 새로운 음악을 찾아 듣는 걸 즐겨요. 혹시 특별히 관심 있는 장르가 있으세요?
     1.75s  user  발화 끝
     4.17s  user  발화 시작: 네.
     4.62s  user  발화 끝
     7.24s  user  발화 시작: 음… 컨트리 음악 좀 찾아볼까요? 아, 제가 옛날 노래를 좋아하거든요.
     7.36s  agent 발화 끝
    11.56s  <ret> 발화 (turn4 첫 프레임)
    11.96s  agent 발화 시작: <ret> 옛날 컨트리 음악을 좋아하신다면, 로레타 린과 콘웨이 트위티 콤비가 정말 유명했어요. 그분들은 컨
    11.96s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.15s]: Loretta Lynn received a string of Country Music Association awards for
    12.05s  user  발화 끝
    16.20s  user  발화 시작: 그렇죠.
    16.70s  user  발화 끝
    22.11s  agent 발화 끝
    22.21s  user  발화 시작: 콘웨이 트위티요? 그 이름은 처음 듣는 것 같아요. 다른 노래도 있었어요?
    26.61s  user  발화 끝
    26.71s  agent 발화 시작: 네, 두 분은 정말 많은 듀엣곡을 함께 불렀어요. 혹시 다른 가수에 대해서도 알아보고 싶으신가요?
    33.33s  agent 발화 끝
