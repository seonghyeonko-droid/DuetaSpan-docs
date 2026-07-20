# v3_mem_35_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_35",
#     "name": "보영",
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
#       "date": "2026-06-15",
#       "category": "learning",
#       "text": "User is training for a half-marathon."
#     },
#     {
#       "date": "2026-05-19",
#       "category": "work",
#       "text": "User works as a yoga instructor."
#     },
#     {
#       "date": "2026-04-03",
#       "category": "medication",
#       "text": "User takes antihistamines in spring."
#     },
#     {
#       "date": "2026-03-25",
#       "category": "music",
#       "text": "User likes listening to a lo-fi jazz playlist."
#     },
#     {
#       "date": "2026-01-28",
#       "category": "phone",
#       "text": "User uses an iPhone 15."
#     },
#     {
#       "date": "2026-01-17",
#       "category": "coffee",
#       "text": "User's usual coffee order is a cappuccino with oat milk."
#     },
#     {
#       "date": "2025-12-22",
#       "category": "emergency",
#       "text": "User's emergency contact is Clara."
#     },
#     {
#       "date": "2025-12-20",
#       "category": "floor",
#       "text": "User lives on the 15th floor."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-03",
#       "title": "Selling a used bike",
#       "bullets": [
#         "a 3-year-old road bike",
#         "asking around 400k won"
#       ]
#     },
#     {
#       "date": "2025-12-25",
#       "title": "Fixing a leaking faucet",
#       "bullets": [
#         "it's a single-handle kitchen tap",
#         "asked whether to replace the cartridge"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 안녕하세요, 트후나로님. 요즘 마라톤 준비 때문에 좀 힘든데, | S2 앰비언트 음악도 좋네요. 근데 제가 알레르기 때문에 봄에는 코 | S3 혹시 부산에 괜찮은 이비인후과 아세요? | S4 음, 괜찮아요. 그냥 봄이 지나면 괜찮아지겠죠.

     0.00s  agent 발화 시작: 안녕하세요, 보영님! 저는 트후나로예요. 커리어 고민이나 일 스트레스, 뭐든 편하게 말씀해 주세요.
     5.93s  agent 발화 끝
     6.06s  user  발화 시작: 안녕하세요, 트후나로님. 요즘 마라톤 준비 때문에 좀 힘든데, 혹시 운동하면서 듣기 좋은 음악 추천해 줄 수
    13.98s  <ret> 발화 (turn2 첫 프레임)
    14.00s  agent 발화 시작: <ret> 보영님은 로파이 재즈 플레이리스트를 좋아하시는군요. 운동할 때 듣기에도 정말 좋을 것 같아요.
    14.08s  user  발화 끝
    15.03s  ⚡SPAN 주입 [d'=1.05s / d_lead=7.00s]: [2026-03-25] User likes listening to a lo-fi jazz playlist.
    21.00s  agent 발화 끝
    22.35s  user  발화 시작: 아, 네, 맞아요! 로파이 재즈 진짜 좋아해요.
    26.56s  user  발화 끝
    26.70s  agent 발화 시작: [happy] 로파이 재즈 좋아하신다니 다행이네요. 혹시 다른 장르도 괜찮으신가요? 아니면 좀 더 신나는 음
    31.31s  user  발화 시작: 네.
    31.80s  user  발화 끝
    33.73s  agent 발화 시작: 그럼, 운동할 때 활력을 주는 앰비언트 음악도 추천해 드릴게요. 잔잔하면서도 리듬감이 있어서 마라톤 훈련에 
    33.84s  agent 발화 끝
    38.27s  user  발화 시작: 네.
    38.77s  user  발화 끝
    42.40s  agent 발화 끝
    43.10s  user  발화 시작: 앰비언트 음악도 좋네요. 근데 제가 알레르기 때문에 봄에는 코가 좀 많이 막혀요. —
    49.12s  user  발화 시작: 혹시 부산에 괜찮은 이비인후과 아세요?
    49.22s  user  발화 끝
    51.47s  <ret> 발화 (turn10 첫 프레임)
    51.84s  agent 발화 시작: <ret> 죄송해요, 부산에 괜찮은 이비인후과 정보는 지금 바로 찾을 수 없네요. 다른 방법으로 알아봐 드릴
    51.89s  user  발화 끝
    52.26s  ⚡SPAN 주입 [d'=0.80s / d_lead=7.42s]: (no information found)
    55.49s  user  발화 시작: 음.
    56.08s  user  발화 끝
    59.26s  agent 발화 끝
    60.37s  user  발화 시작: 음, 괜찮아요. 그냥 봄이 지나면 괜찮아지겠죠.
    64.62s  user  발화 끝
