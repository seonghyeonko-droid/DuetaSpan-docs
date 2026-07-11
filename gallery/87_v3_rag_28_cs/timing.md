# v3_rag_28_cs — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_28",
#     "name": "Thomas",
#     "location": {
#       "city": "Toronto",
#       "country": "Canada",
#       "timezone": "America/Toronto (EST, UTC-5)",
#       "currency": "CAD ($)"
#     },
#     "nationality": "Canadian",
#     "gender": "male",
#     "age_range": "early 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-04",
#       "category": "hobby",
#       "text": "User is into marathon training."
#     },
#     {
#       "date": "2026-02-10",
#       "category": "diet",
#       "text": "User is gluten-free."
#     },
#     {
#       "date": "2025-12-11",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Korean BBQ."
#     },
#     {
#       "date": "2025-11-03",
#       "category": "pet",
#       "text": "User has a Poodle named Coco."
#     },
#     {
#       "date": "2025-10-09",
#       "category": "home",
#       "text": "User's home address is 793 Pine Court."
#     },
#     {
#       "date": "2025-07-05",
#       "category": "work",
#       "text": "User works as a chef."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-10-27",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2025-08-05",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2025-07-06",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 안녕, 요즘 잠을 잘 못 자. | S2 어떤 루틴인데? | S3 백색 소음? 그게 뭔데? | S4 그거 괜찮네. 잠들기 전에 스크린 타임은 어때?

     0.00s  user  발화 시작: 안녕, 요즘 잠을 잘 못 자.
     2.58s  user  발화 끝
     2.90s  agent 발화 시작: 잠이 잘 안 오는 건 당연해요. 잠이 잘 안 올 때도 있죠.
     7.11s  agent 발화 끝
     7.32s  user  발화 시작: 응, 계속 뭔가 긴장돼.
     9.53s  agent 발화 시작: 요즘은 그런 느낌이 흔해요, 특히 바쁜 생활을 하시는 분들은요.
     9.58s  user  발화 끝
    14.53s  agent 발화 끝
    14.67s  user  발화 시작: 마음을 좀 가라앉히는 방법 같은 거 있어?
    17.22s  user  발화 끝
    17.53s  agent 발화 시작: 편안한 잠자리 루틴을 만드는 게 도움이 될 수 있어요.
    18.94s  user  발화 시작: 응.
    19.34s  user  발화 끝
    21.60s  agent 발화 끝
    21.83s  user  발화 시작: 어떤 루틴인데?
    22.80s  agent 발화 시작: 가벼운 스트레칭, 따뜻한 물에 몸 담그기, 아니면 책 읽기처럼 편안한 걸 하시면 돼요.
    23.02s  user  발화 끝
    25.84s  user  발화 시작: 어어.
    26.65s  user  발화 끝
    31.14s  agent 발화 끝
    31.63s  user  발화 시작: 책 읽어봤는데, 그때도 머릿속이 계속 돌아가.
    35.43s  agent 발화 시작: 괜찮아요. 자신에게 맞는 걸 찾는 데 시간이 걸릴 수 있어요.
    35.56s  user  발화 끝
    41.43s  user  발화 시작: 들으면 좋을 만한 거 있어?
    41.45s  agent 발화 끝
    42.86s  <ret> 발화 (turn13 첫 프레임)
    43.18s  user  발화 끝
    43.26s  agent 발화 시작: <ret> 잠을 돕기 위해 만들어진 소리들이 있어요. 예를 들어, 백색 소음은 모든 주파수가 평평하게 섞여 
    43.26s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.25s]: White noise is a random signal that has power spectral density which i
    46.16s  user  발화 시작: 응.
    46.66s  user  발화 끝
    51.51s  agent 발화 끝
    51.61s  user  발화 시작: 백색 소음? 그게 뭔데?
    54.32s  agent 발화 시작: 주변의 방해되는 소리를 가려주는 효과가 있어요.
    54.47s  user  발화 끝
    58.11s  agent 발화 끝
    58.71s  user  발화 시작: 음, 명상은 어때?
    61.06s  user  발화 끝
    61.41s  agent 발화 시작: 명상은 정말 좋아요. 마음을 안정시키고 생각을 차분하게 해 줄 수 있어요.
    67.46s  user  발화 시작: …근데 잠을 잘 자려면 어떤 명상이 제일 좋을까?
    68.12s  agent 발화 끝
    71.64s  <ret> 발화 (turn20 첫 프레임)
    71.72s  agent 발화 시작: <ret> 연구에 따르면 마음챙김 명상이 불면증 증상을 줄이는 데 효과가 있다고 해요.
    71.72s  ⚡SPAN 주입 [d'=1.04s / d_lead=7.27s]: A 2019 meta-analysis of 18 studies found that mindfulness meditation s
    71.85s  user  발화 끝
    76.58s  user  발화 시작: 응응.
    77.16s  user  발화 끝
    79.00s  agent 발화 끝
    79.43s  user  발화 시작: 그거 괜찮네. 잠들기 전에 스크린 타임은 어때?
    82.66s  user  발화 끝
    83.02s  agent 발화 시작: 잠들기 전에 스크린 타임을 줄이는 건 정말 좋은 생각이에요.
    86.00s  user  발화 시작: 어어.
    86.53s  user  발화 끝
    87.41s  agent 발화 끝
    89.96s  user  발화 시작: 잠들기 몇 시간 전에 스크린 보는 걸 멈춰야 해?
    92.45s  <ret> 발화 (turn26 첫 프레임)
    92.85s  agent 발화 시작: <ret> National Sleep Foundation에서는 잠들기 최소 한 시간 전에는 스크린을 보지 않
    92.85s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.64s]: The National Sleep Foundation recommends stopping screen use at least 
    93.06s  user  발화 끝
    97.76s  user  발화 시작: 그래.
    98.25s  user  발화 끝
   100.49s  agent 발화 끝
   101.71s  user  발화 시작: 한 시간, 알았어. 고마워, 도움이 됐어.
   105.02s  agent 발화 시작: 천만에요. 작은 변화가 큰 차이를 만들 수 있다는 걸 기억하세요.
   105.18s  user  발화 끝
   111.79s  agent 발화 끝
