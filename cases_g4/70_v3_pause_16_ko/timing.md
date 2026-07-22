# v3_pause_16_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_pause_16",
#     "name": "주서",
#     "location": {
#       "city": "Busan",
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
#       "date": "2026-06-14",
#       "category": "learning",
#       "text": "User is learning to play guitar."
#     },
#     {
#       "date": "2026-05-23",
#       "category": "hobby",
#       "text": "User is into home fermentation."
#     },
#     {
#       "date": "2026-04-01",
#       "category": "sibling",
#       "text": "User has a younger sibling named Yuna."
#     },
#     {
#       "date": "2026-02-28",
#       "category": "schedule",
#       "text": "User has a fully remote setup."
#     },
#     {
#       "date": "2026-02-19",
#       "category": "bloodtype",
#       "text": "User's blood type is A+."
#     },
#     {
#       "date": "2026-01-30",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Ethiopian."
#     },
#     {
#       "date": "2026-01-17",
#       "category": "dish",
#       "text": "User's go-to comfort dish is beef tacos."
#     },
#     {
#       "date": "2025-12-07",
#       "category": "phone",
#       "text": "User uses a Galaxy S24."
#     },
#     {
#       "date": "2025-12-06",
#       "category": "skill",
#       "text": "User is quite experienced with urban sketching."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-24",
#       "title": "Booking a moving company",
#       "bullets": [
#         "moving a 2-bedroom apartment across town on the 30th",
#         "needs help disassembling furniture"
#       ]
#     },
#     {
#       "date": "2026-01-15",
#       "title": "Building a PC",
#       "bullets": [
#         "budget around 2M won for gaming",
#         "torn between two GPUs"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 있잖아, 델리에 있는 중앙 사무국 남북 블록 설계한 사람이 누 | S2 응, 어떻게 시작해야 할지 모르겠어. | S3 …그게 정확히 왜 중요한 거야? | S4 와, 그럼 시간이 지날수록…

     0.00s  user  발화 시작: 있잖아, 델리에 있는 중앙 사무국 남북 블록 설계한 사람이 누구였지?
     2.13s  agent 발화 시작: 네.
     2.58s  agent 발화 끝
     4.38s  <ret> 발화 (turn2 첫 프레임)
     4.72s  user  발화 끝
     4.77s  agent 발화 시작: <ret> 영국인 건축가인 허버트 베이커가 설계했습니다.
     5.89s  ⚡SPAN 주입 [d'=1.51s / d_lead=2.72s]: The north and south blocks of the Central Secretariat in Delhi were de
     7.45s  user  발화 시작: 아, 맞다. 그 사람이 다른 건물도 많이 지었겠네.
     7.50s  agent 발화 끝
     8.45s  agent 발화 시작: 네네.
     9.17s  agent 발화 끝
    10.41s  user  발화 끝
    10.41s  agent 발화 시작: [happy] 네, 당시 영향력이 컸던 분이라 유명한 작품이 많을 거예요.
    14.00s  user  발화 시작: 근데 갑자기 생각난 건데…
    14.43s  agent 발화 끝
    15.84s  user  발화 끝
    16.82s  user  발화 시작: …나 요즘 돈 관리가 너무 안 돼.
    19.02s  agent 발화 시작: [sigh] 그럴 때가 있죠. 제가 예산 세우는 걸 좀 도와드릴까요?
    19.17s  user  발화 끝
    22.81s  agent 발화 끝
    23.03s  user  발화 시작: 응, 어떻게 시작해야 할지 모르겠어.
    25.28s  user  발화 끝
    25.76s  agent 발화 시작: 가장 기본이 되는 오 공 삼 공 이 공 법칙부터 시작해 보는 건 어때요?
    30.38s  agent 발화 끝
    30.54s  user  발화 시작: 그게 뭔데?
    31.36s  user  발화 끝
    31.38s  agent 발화 시작: 수입의 오십퍼센트는 필수 지출에, 삼십퍼센트는 원하는 곳에, 그리고 나머지 이십퍼센트는 저축이나 빚 갚는 데
    34.11s  user  발화 시작: 응응.
    34.60s  user  발화 끝
    40.33s  agent 발화 시작: 이렇게 나누면 돈의 흐름이 한눈에 보여서 관리가 훨씬 쉬워지거든요.
    40.51s  agent 발화 끝
    44.35s  agent 발화 끝
    44.43s  user  발화 시작: 이십퍼센트나 저축하는 게 가능할까?
    46.73s  user  발화 끝
    47.11s  agent 발화 시작: 처음에는 힘들 수 있어요. 하지만 조금씩 비중을 늘려가면 익숙해지실 거예요.
    51.98s  agent 발화 끝
    52.27s  user  발화 시작: 음, 일단 비상금부터 만들어야 한다는 말은 들었는데…
    56.90s  user  발화 끝
    58.09s  user  발화 시작: …그게 정확히 왜 중요한 거야?
    59.79s  agent 발화 시작: 갑작스러운 사고나 실직 같은 예상치 못한 상황이 왔을 때, 생활 리듬을 깨지 않고 버틸 수 있는 안전장치가 
    60.02s  user  발화 끝
    68.69s  agent 발화 끝
    69.14s  user  발화 시작: 하긴, 갑자기 큰돈 나갈 일이 생기면 막막하겠지.
    72.84s  user  발화 끝
    72.89s  agent 발화 시작: 맞아요. 그래서 보통 세개월에서 여섯개월 치 생활비를 목표로 모으는 것을 추천드려요.
    77.94s  user  발화 시작: 그럼 비상금은 그냥 통장에 넣어두면 돼?
    78.16s  agent 발화 끝
    80.52s  user  발화 끝
    80.76s  agent 발화 시작: 일반 통장보다는 이율이 조금 더 높으면서도 입출금이 자유로운 파킹 통장을 활용하시는 게—
    86.55s  user  발화 시작: …그럼 복리라는 건 뭐야? 그것도 비상금에 적용돼?
    87.24s  agent 발화 끝
    89.64s  agent 발화 시작: [curious] 아, 복리는 원금에만 이자가 붙는 게 아니라, 붙은 이자에 또 이자가 붙는 방식이에요.
    89.83s  user  발화 끝
    95.89s  agent 발화 끝
    96.12s  user  발화 시작: 와, 그럼 시간이 지날수록…
    98.06s  user  발화 끝
    99.67s  user  발화 시작: …돈이 엄청 빨리 불어나겠네?
   101.66s  user  발화 끝
   101.69s  agent 발화 시작: 정확해요. 그래서 하루라도 빨리 저축을 시작하는 게 복리 효과를 극대화하는 가장 좋은 방법입니다.
   108.40s  agent 발화 끝
   108.78s  user  발화 시작: 이제 좀 감이 오네. 고마워!
   111.16s  agent 발화 시작: [happy] 도움이 되어서 기뻐요.
   111.36s  user  발화 끝
   112.82s  agent 발화 끝
