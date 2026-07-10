# v3_to_ot_11_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_to_ot_11",
#     "name": "준찬",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "late 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-22",
#       "category": "work",
#       "text": "User works as a high-school teacher."
#     },
#     {
#       "date": "2025-08-19",
#       "category": "diet",
#       "text": "User is pescatarian."
#     },
#     {
#       "date": "2025-07-19",
#       "category": "home",
#       "text": "User's home address is 서울 종로구 세종대로 175."
#     },
#     {
#       "date": "2025-06-16",
#       "category": "hobby",
#       "text": "User is into alpine wildflower photography."
#     },
#     {
#       "date": "2025-06-12",
#       "category": "trip",
#       "text": "User is planning a trip to New Zealand in March."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-25",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2026-01-04",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2025-09-08",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 트리니다드 토바고의 수도가 어디예요? | S2 좀 쉬면서 뭘 하고 싶은지 찾아보려고요. | S3 네, 말씀드렸는데… 오히려 더 화를 내셨어요. | S4 맞아요. 엄마는 항상 학생들을 걱정하셨어요.

     0.00s  user  발화 시작: 트리니다드 토바고의 수도가 어디예요?
     2.27s  user  발화 끝
     2.52s  <ret> 발화 (turn1 첫 프레임)
     2.76s  agent 발화 시작: <ret> 트리니다드 토바고의 수도는 포트오프스페인이에요. 혹시 여행 계획이 있으신가요?
     2.76s  ⚡SPAN 주입 [d'=1.60s / d_lead=4.91s]: Port of Spain is the capital of Trinidad and Tobago.
     4.76s  user  발화 시작: 예.
     5.12s  user  발화 끝
     7.67s  agent 발화 끝
     8.01s  user  발화 시작: 아, 아니요. 그냥 궁금해서요.
    10.47s  agent 발화 시작: 궁금한 건 언제든 물어보세요. 제가 아는 선에서 최대한 도와드릴게요.
    10.69s  user  발화 끝
    14.86s  user  발화 시작: 그럼, 혹시… 요즘 제가 좀 불안하거든요.
    14.96s  agent 발화 끝
    17.94s  agent 발화 시작: 불안하시군요. 요즘 세상이 워낙 그렇죠. 걱정되는 일이 있으세요?
    18.09s  user  발화 끝
    21.22s  user  발화 시작: 네.
    21.71s  user  발화 끝
    22.75s  agent 발화 끝
    25.07s  user  발화 시작: 그냥… 가족 문제요. 엄마랑 계속 다투고 있어요.
    29.18s  user  발화 끝
    29.38s  agent 발화 시작: 엄마와 다투신다니, 마음이 많이 힘드시겠어요. 어떤 점 때문에 다투시는 건가요?
    35.02s  agent 발화 끝
    36.00s  user  발화 시작: 엄마는 제가 직장을 너무 쉽게 그만뒀다고 생각하시는 것 같아요.
    39.89s  user  발화 끝
    40.01s  agent 발화 시작: 직장을 그만두신 것에 대해 어머니께서 걱정하시는군요. 어떤 일을 하셨었나요?
    45.25s  agent 발화 끝
    45.56s  user  발화 시작: 그냥… 사무직이었어요. 너무 힘들어서 그만뒀어요.
    49.21s  user  발화 끝
    49.56s  agent 발화 시작: 사무직이 힘드셨다니, 얼마나 고생하셨을지 짐작이 가네요. 지금은 어떤 생각을 하고 계세요?
    55.12s  user  발화 시작: 네네.
    55.76s  user  발화 끝
    56.65s  agent 발화 끝
    57.16s  user  발화 시작: 좀 쉬면서 뭘 하고 싶은지 찾아보려고요.
    60.02s  agent 발화 시작: 쉬면서 앞으로 뭘 하고 싶은지 찾아보는 건 좋은 생각이에요. 혹시 특별히 관심 있는 분야가 있으세요?
    60.06s  user  발화 끝
    65.46s  user  발화 시작: 네.
    65.77s  user  발화 끝
    67.25s  agent 발화 끝
    67.48s  user  발화 시작: 음… 글 쓰는 게 좋더라고요. 소설 같은 거요.
    70.36s  agent 발화 시작: 글 쓰는 걸 좋아하시는군요! 소설이라니, 멋진데요. 혹시 이미 써보신 적이 있으세요?
    70.53s  user  발화 끝
    76.52s  agent 발화 끝
    77.04s  user  발화 시작: 네, 조금 써봤어요. 근데 잘 될지는 모르겠어요.
    79.91s  agent 발화 시작: 조금 써보셨다니, 대단하시네요. 잘 될지 안 될지는 아무도 모르는 거니까 너무 걱정하지 마세요.
    80.08s  user  발화 끝
    84.50s  user  발화 시작: 네.
    85.00s  user  발화 끝
    86.62s  agent 발화 끝
    86.80s  user  발화 시작: 엄마는 제가 글 쓰는 건 돈이 안 된다고 하세요.
    89.61s  agent 발화 시작: 어머니께서 돈이 안 된다고 하시는군요. 그 말씀이 좀 속상하시겠어요.
    89.76s  user  발화 끝
    91.58s  user  발화 시작: 네.
    91.94s  user  발화 끝
    93.78s  agent 발화 끝
    93.86s  user  발화 시작: 네, 너무 속상해요. 제가 뭘 하든 잔소리만 하세요.
    96.93s  agent 발화 시작: 자꾸 잔소리만 들으시면 정말 힘드시겠어요. 혹시 어머니께 솔직하게 말씀드려 보셨어요?
    97.10s  user  발화 끝
   102.44s  agent 발화 끝
   102.67s  user  발화 시작: 네, 말씀드렸는데… 오히려 더 화를 내셨어요.
   106.51s  user  발화 끝
   106.69s  agent 발화 시작: 솔직하게 말씀드렸는데 오히려 더 화를 내시다니, 정말 답답하시겠네요.
   111.58s  user  발화 시작: 어떻게 해야 할까요? 엄마랑 사이가 좀 좋아졌으면 좋겠어요.
   111.87s  agent 발화 끝
   115.79s  agent 발화 시작: 엄마와의 관계가 좋아지길 바라시는군요. 우선, 어머니의 입장에서 생각해 보시는 건 어떠세요?
   115.83s  user  발화 끝
   122.03s  agent 발화 끝
   122.06s  user  발화 시작: 어머니의 입장에서… 음…
   123.77s  <ret> 발화 (turn33 첫 프레임)
   124.08s  agent 발화 시작: <ret> 어머니께서는 딸이 안정적인 삶을 살기를 바라시기 때문에, 지금의 선택에 대해 걱정하시는 걸 수도 
   124.13s  user  발화 끝
   125.77s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.12s]: Parents often worry about their children’s financial stability and fut
   137.81s  agent 발화 끝
   139.01s  user  발화 시작: 그럴 수도 있겠네요…
   140.38s  agent 발화 시작: 혹시 어머니께서는 어떤 직업을 가지셨나요?
   140.39s  user  발화 끝
   143.29s  agent 발화 끝
   143.52s  user  발화 시작: 엄마는 학교 선생님이셨어요.
   145.74s  agent 발화 시작: 학교 선생님이셨군요. 선생님이시라면 학생들의 미래를 생각하는 걸 당연하게 여기실 것 같아요.
   145.78s  user  발화 끝
   151.71s  agent 발화 끝
   151.92s  user  발화 시작: 맞아요. 엄마는 항상 학생들을 걱정하셨어요.
   155.53s  user  발화 끝
   155.56s  agent 발화 시작: 학생들을 걱정하시는 어머니의 마음을 생각하면, 지금의 불안감을 이해하는 데 도움이 될 수도 있겠네요.
   158.49s  user  발화 시작: 네.
   158.98s  user  발화 끝
   161.67s  agent 발화 끝
   162.08s  user  발화 시작: 그럼… 제가 좀 더 노력하는 모습을 보여드리면 될까요?
   165.64s  user  발화 끝
   165.76s  agent 발화 시작: 노력하는 모습을 보여드리는 건 좋은 방법이에요. 구체적으로 어떤 노력을 할 수 있을까요?
   171.18s  agent 발화 끝
   171.71s  user  발화 시작: 글 쓰는 걸 꾸준히 하고…
   173.45s  user  발화 끝
   175.23s  user  발화 시작: …또 다른 일도 찾아보려고요.
   176.94s  agent 발화 시작: 꾸준히 글을 쓰고, 다른 일도 찾아보신다니, 정말 멋진 계획이네요. 응원할게요.
   176.98s  user  발화 끝
   180.82s  user  발화 시작: 음.
   181.31s  user  발화 끝
   182.63s  agent 발화 끝
   183.14s  user  발화 시작: 고마워요. 덕분에 좀 마음이 풀리는 것 같아요.
   185.99s  user  발화 끝
   186.06s  agent 발화 시작: 도움이 되셨다니 다행이에요.
   187.67s  agent 발화 끝
