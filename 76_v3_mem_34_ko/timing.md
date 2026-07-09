# v3_mem_34_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_34",
#     "name": "Ava",
#     "location": {
#       "city": "Paris",
#       "country": "France",
#       "timezone": "Europe/Paris (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "French",
#     "gender": "female",
#     "age_range": "late 30s",
#     "language": "French"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-19",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Mexican."
#     },
#     {
#       "date": "2026-04-15",
#       "category": "diet",
#       "text": "User is vegetarian."
#     },
#     {
#       "date": "2026-03-22",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-08-25",
#       "category": "allergy",
#       "text": "User is allergic to peanuts."
#     },
#     {
#       "date": "2025-08-06",
#       "category": "home",
#       "text": "User's home address is 30 Oak Avenue."
#     },
#     {
#       "date": "2025-06-16",
#       "category": "trip",
#       "text": "User is planning a trip to Kyoto in December."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-02-09",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 음… 요즘 좀 많이 흔들리고 있어요. 뭘 해야 할지 모르겠어요 | S2 아직 딱 정해진 건 없어요. 그냥… 뭔가 다른 걸 하고 싶다는 | S3 음… 요리 수업은 괜찮을 것 같아요. 그런데 시간이 될까요? | S4 사실… 알레르기가 있어서 외식을 잘 못 해요.

     0.00s  agent 발화 시작: 아바 씨, 안녕하세요. 저는 히아예요. 편안하게 이야기 나누면서 변화의 과정을 함께 걷는 여정을 도와드릴게요
     7.28s  user  발화 시작: 음… 요즘 좀 많이 흔들리고 있어요. 뭘 해야 할지 모르겠어요.
     7.51s  agent 발화 끝
    11.35s  agent 발화 시작: 삶의 전환기에는 흔들리는 건 당연해요. 어떤 부분에서 가장 힘드신가요? 구체적으로 말씀해주시면 제가 좀 더 
    11.53s  user  발화 끝
    20.49s  user  발화 시작: 직장을 옮겨야 할지, 아니면 그냥 다니면서 다른 걸 배워야 할지… 잘 모르겠어요.
    20.53s  agent 발화 끝
    26.67s  agent 발화 시작: 새로운 길을 찾는다는 건 쉽지 않죠. 혹시 어떤 직종으로 옮기시는 걸 고려하고 계신가요?
    26.74s  user  발화 끝
    29.68s  user  발화 시작: 그치.
    30.11s  user  발화 끝
    32.28s  user  발화 시작: 아직 딱 정해진 건 없어요. 그냥… 뭔가 다른 걸 하고 싶다는 생각만 들어요.
    32.41s  agent 발화 끝
    37.01s  agent 발화 시작: 새로운 분야에 대한 갈망은 자연스러운 거예요. 혹시 전에 해보고 싶었던 일이 있었나요?
    37.14s  user  발화 끝
    42.11s  agent 발화 끝
    42.36s  user  발화 시작: 사실 예전에 요리사가 되고 싶었어요.
    44.64s  <ret> 발화 (turn9 첫 프레임)
    44.79s  agent 발화 시작: <ret> 요리사요? [curious] 좋아하시는 음식이 있으신가요?
    44.94s  user  발화 끝
    46.32s  ⚡SPAN 주입 [d'=1.68s / d_lead=3.47s]: [2026-04-19] User's favorite cuisine is Mexican.
    48.12s  agent 발화 시작: 멕시코 음식을 가장 좋아하시는군요. 멕시코 요리는 창의성과 열정이 필요한 분야잖아요.
    48.26s  agent 발화 끝
    50.74s  user  발화 시작: 음.
    51.23s  user  발화 끝
    53.58s  agent 발화 시작: 요리 수업을 들어보는 건 어떠세요? 아니면 관련 책을 읽으면서 시작해보는 것도 좋고요.
    53.63s  agent 발화 끝
    56.42s  user  발화 시작: 어.
    56.91s  user  발화 끝
    58.90s  agent 발화 끝
    59.42s  user  발화 시작: 음… 요리 수업은 괜찮을 것 같아요. 그런데 시간이 될까요?
    63.33s  <ret> 발화 (turn15 첫 프레임)
    63.56s  agent 발화 시작: <ret> 삼십 Oak Avenue에 사시는군요. 그 근처에 요리 수업을 찾아서 시간을 맞춰볼 수 있을 거예
    63.63s  user  발화 끝
    65.33s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.78s]: [2025-08-06] User's home address is 30 Oak Avenue.
    68.94s  user  발화 시작: 아, 그러네요. 한번 찾아봐야겠어요.
    69.34s  agent 발화 끝
    71.25s  agent 발화 시작: [happy] 네, 잘 찾아보세요. 새로운 도전을 응원할게요. 혹시 다른 걱정되는 부분이 있으신가요?
    71.34s  user  발화 끝
    73.33s  user  발화 시작: 맞아.
    73.78s  user  발화 끝
    76.28s  user  발화 시작: 사실… 알레르기가 있어서 외식을 잘 못 해요.
    76.34s  agent 발화 끝
    79.58s  <ret> 발화 (turn20 첫 프레임)
    79.61s  user  발화 끝
    79.81s  agent 발화 시작: <ret> [sigh] 알레르기가 있으시군요. 어떤 알레르기인가요?
    80.78s  ⚡SPAN 주입 [d'=1.20s / d_lead=3.60s]: [2025-08-25] User is allergic to peanuts.
    83.35s  agent 발화 시작: 땅콩 알레르기가 있으시군요. 외식을 할 때 주의해야 할 부분이 많을 것 같아요.
    83.41s  agent 발화 끝
    88.77s  agent 발화 끝
