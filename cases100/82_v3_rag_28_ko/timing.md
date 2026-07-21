# v3_rag_28_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_28",
#     "name": "준재",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "50s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-12",
#       "category": "diet",
#       "text": "User is vegetarian."
#     },
#     {
#       "date": "2026-02-08",
#       "category": "plant",
#       "text": "User is growing a monstera at home."
#     },
#     {
#       "date": "2026-02-07",
#       "category": "home",
#       "text": "User's home address is 서울 종로구 세종대로 175."
#     },
#     {
#       "date": "2026-01-29",
#       "category": "streaming",
#       "text": "User subscribes to Wavve and Melon."
#     },
#     {
#       "date": "2025-12-13",
#       "category": "pet",
#       "text": "User has a Poodle named Coco."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-21",
#       "title": "Choosing a preschool",
#       "bullets": [
#         "wants one within walking distance",
#         "asked about hours and monthly fees"
#       ]
#     },
#     {
#       "date": "2026-03-31",
#       "title": "Meal-prep planning",
#       "bullets": [
#         "wants high-protein lunches under 600 calories",
#         "avoiding dairy this month"
#       ]
#     },
#     {
#       "date": "2026-03-11",
#       "title": "Building a PC",
#       "bullets": [
#         "budget around 2M won for gaming",
#         "torn between two GPUs"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 새로운 직장 생활을 시작하는데, 뭔가 조언을 해 줄 수 있을까 | S2 어떤 이야기를요? 구체적으로 좀 알려주세요. | S3 십오세기요? 생각보다 훨씬 빠르네요. 요즘은 어떻게 달라졌을까 | S4 음… 관계를 맺는 게 제일 어려울 것 같아요.

     0.00s  user  발화 시작: 새로운 직장 생활을 시작하는데, 뭔가 조언을 해 줄 수 있을까요?
     1.64s  agent 발화 시작: 네네.
     2.40s  agent 발화 끝
     3.88s  user  발화 끝
     4.00s  agent 발화 시작: 새로운 시작을 축하드려요! [happy] 적응하는 데 도움이 될 만한 몇 가지 이야기를 해 드릴게요.
     6.53s  user  발화 시작: 그렇죠.
     6.96s  user  발화 끝
     9.06s  user  발화 시작: 어떤 이야기를요? 구체적으로 좀 알려주세요.
     9.17s  agent 발화 끝
    11.54s  <ret> 발화 (turn5 첫 프레임)
    11.70s  agent 발화 시작: <ret> 서구 개척의 첫 물결은 십오세기에 시작되었는데, 탐험과 무역 기회가 그 원동력이었어요.
    11.73s  user  발화 끝
    13.21s  ⚡SPAN 주입 [d'=1.67s / d_lead=6.05s]: The first wave of western settlement began in the early 15th century, 
    17.76s  agent 발화 끝
    17.79s  user  발화 시작: 십오세기요? 생각보다 훨씬 빠르네요. 요즘은 어떻게 달라졌을까요?
    22.46s  user  발화 끝
    22.79s  agent 발화 시작: 요즘은 훨씬 더 복잡해졌죠. [curious] 하지만 기본은 같아요. 새로운 환경에 적응하고, 관계를 맺고,
    27.51s  user  발화 시작: 음.
    27.82s  user  발화 끝
    29.73s  user  발화 시작: 음… 관계를 맺는 게 제일 어려울 것 같아요.
    29.73s  agent 발화 끝
    32.34s  agent 발화 시작: 관계를 맺는 건 중요하죠. [sigh] 하지만 너무 조급해하지 마세요. 천천히 알아가면 돼요.
    32.40s  user  발화 끝
    37.80s  agent 발화 끝
