# v3_rag_28_cs — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_28",
#     "name": "Hana",
#     "location": {
#       "city": "Paris",
#       "country": "France",
#       "timezone": "Europe/Paris (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "French",
#     "gender": "female",
#     "age_range": "50s",
#     "language": "French"
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
#       "text": "User's home address is 512 Spruce Lane."
#     },
#     {
#       "date": "2026-01-29",
#       "category": "streaming",
#       "text": "User subscribes to Disney+ and YouTube Premium."
#     },
#     {
#       "date": "2025-12-13",
#       "category": "pet",
#       "text": "User has a Border Collie named Ziggy."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-11",
#       "title": "Meal-prep planning",
#       "bullets": [
#         "wants high-protein lunches under 600 calories",
#         "avoiding dairy this month"
#       ]
#     },
#     {
#       "date": "2026-03-31",
#       "title": "Building a PC",
#       "bullets": [
#         "budget around 2M won for gaming",
#         "torn between two GPUs"
#       ]
#     },
#     {
#       "date": "2026-02-05",
#       "title": "Studying for the TOEIC",
#       "bullets": [
#         "target score is 850",
#         "exam is in about six weeks"
#       ]
#     },
#     {
#       "date": "2026-01-20",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers for a 3-story house",
#         "wanted coverage for the basement office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 다음 주부터 새로운 일을 시작하는데, 좀 부담스럽고 걱정돼요. | S2 혹시 제가 멍청한 질문을 하면 어떡하죠? 아니면 뭔가를 이해하 | S3 그렇군요…사실 안심이 돼요. 그런데 일의 역사에 대해서도 생각 | S4 맞아요. 어쩌면 인간의 경험에 속하는 걸지도 몰라요. 고마워요

     0.00s  user  발화 시작: 다음 주부터 새로운 일을 시작하는데, 좀 부담스럽고 걱정돼요.
     1.94s  agent 발화 시작: 네.
     2.53s  agent 발화 끝
     4.65s  agent 발화 시작: 새로운 일을 시작하면 그렇게 느끼는 건 당연해요! 함께 하나씩 해결해 봐요. 지금 가장 부담스러운 게 뭔지 
     4.72s  user  발화 끝
     9.01s  user  발화 시작: 음.
     9.41s  user  발화 끝
    13.30s  user  발화 시작: 그냥…모든 게요. 제가 충분히 잘 못 할까 봐, 아니면 일을 망칠까 봐 걱정돼요.
    13.36s  agent 발화 끝
    20.15s  user  발화 끝
    20.28s  agent 발화 시작: 그런 걱정은 흔히들 하는 거니까 너무 염려하지 마세요. 누구나 처음부터 시작하는 거니까요. 적응하는 데 시간
    25.90s  user  발화 시작: 네.
    26.34s  user  발화 끝
    28.48s  agent 발화 끝
    28.83s  user  발화 시작: 혹시 제가 멍청한 질문을 하면 어떡하죠? 아니면 뭔가를 이해하지 못하면 어떡하죠?
    34.18s  <ret> 발화 (turn8 첫 프레임)
    34.62s  user  발화 끝
    34.76s  agent 발화 시작: <ret> 질문하는 건 정말 좋은 거예요! 배우고 성장하려는 의지가 있다는 걸 보여주는 거니까요. 신입 사원
    35.59s  ⚡SPAN 주입 [d'=1.42s / d_lead=17.44s]: A new employee should feel comfortable asking questions, as it demonst
    43.54s  user  발화 시작: 그렇죠.
    44.17s  user  발화 끝
    52.14s  user  발화 시작: 그렇군요…사실 안심이 돼요. 그런데 일의 역사에 대해서도 생각하게 되네요. 사람들이 이런 종류의 일을 언제부
    52.20s  agent 발화 끝
    62.25s  user  발화 끝
    62.29s  agent 발화 시작: <ret> 서양 개척 시대는 십오세기에 시작됐고, 탐험가와 식민지 개척자들이 무역과 농업 경제를 세웠어요. 
    62.30s  <ret> 발화 (turn11 첫 프레임)
    63.99s  ⚡SPAN 주입 [d'=1.69s / d_lead=12.04s]: The first wave of western settlement began in the early 15th century, 
    69.28s  user  발화 시작: 네네.
    69.86s  user  발화 끝
    74.33s  agent 발화 끝
    74.56s  user  발화 시작: 십오세기요? 와, 정말 오래됐네요. 그러니까 일 시작하는 게 항상 스트레스였던 건가요?
    81.28s  user  발화 끝
    81.34s  agent 발화 시작: 숨을 쉬세요. 항상 어려움은 있었을 거라고 생각해요. 물론 구체적인 내용은 많이 바뀌었겠지만요! 큰 그림을 
    90.70s  agent 발화 끝
    90.85s  user  발화 시작: 맞아요. 어쩌면 인간의 경험에 속하는 걸지도 몰라요. 고마워요, 다라.
    96.27s  user  발화 끝
    96.58s  agent 발화 시작: 도와드릴 수 있어서 기뻐요! 너무 걱정하지 마시고, 한 걸음씩 나아가세요. 분명 잘 해낼 수 있을 거예요!
   104.73s  agent 발화 끝
