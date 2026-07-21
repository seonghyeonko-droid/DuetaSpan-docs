# v3_rag_28_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_28",
#     "name": "하담",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "late 40s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-10",
#       "category": "show",
#       "text": "User is currently watching a slow-burn detective drama."
#     },
#     {
#       "date": "2026-05-29",
#       "category": "savings",
#       "text": "User is saving for a new car."
#     },
#     {
#       "date": "2026-04-27",
#       "category": "coffee",
#       "text": "User's usual coffee order is a cold brew."
#     },
#     {
#       "date": "2026-04-22",
#       "category": "trip",
#       "text": "User is planning a trip to Bali in May."
#     },
#     {
#       "date": "2026-04-06",
#       "category": "car",
#       "text": "User drives a 2022 Volkswagen Golf."
#     },
#     {
#       "date": "2026-03-08",
#       "category": "floor",
#       "text": "User lives on the 15th floor."
#     },
#     {
#       "date": "2026-02-01",
#       "category": "streaming",
#       "text": "User subscribes to Netflix and Spotify."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-24",
#       "title": "Building a PC",
#       "bullets": [
#         "budget around 2M won for gaming",
#         "torn between two GPUs"
#       ]
#     },
#     {
#       "date": "2026-03-06",
#       "title": "Comparing health insurance",
#       "bullets": [
#         "self-employed and needs dental",
#         "wants a low deductible"
#       ]
#     },
#     {
#       "date": "2026-01-05",
#       "title": "Choosing a laptop",
#       "bullets": [
#         "budget around 1.8M won",
#         "needs it for video editing and light gaming"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 초록 파리 종류가 뭐예요? 혹시 아세요?
     2.34s  user  발화 끝
     2.51s  agent 발화 시작: 어떤 파리에 대해 궁금하신 건지 조금 더 자세히 말씀해 주시겠어요?
     4.41s  user  발화 시작: 네.
     4.67s  user  발화 끝
     6.30s  agent 발화 끝
     7.50s  user  발화 시작: 그냥 초록색 파리요. 정원 같은 데서 많이 보이던데…
    11.11s  <ret> 발화 (turn4 첫 프레임)
    11.16s  user  발화 끝
    11.18s  agent 발화 시작: <ret> 파리의 종류는 정말 다양하죠. 초록색 파리는 보통 Calliphoridae 과에 속하는 파리인데,
    12.19s  ⚡SPAN 주입 [d'=1.08s / d_lead=2.28s]: A blow fly is a type of fly in the family Calliphoridae, known for its
    23.74s  agent 발화 끝
    23.74s  user  발화 시작: 아, 청파리요? 좀 징그럽네요. 다른 파리는요?
    27.01s  <ret> 발화 (turn6 첫 프레임)
    27.53s  user  발화 끝
    27.58s  agent 발화 시작: <ret> 지금 서울 날씨는 이십팔도, 구름이 조금 낀 상태입니다.
    28.34s  ⚡SPAN 주입 [d'=1.33s / d_lead=3.70s]: (tool result) Current weather in Seoul, South Korea: 28°C, Partly Clou
    31.27s  agent 발화 끝
