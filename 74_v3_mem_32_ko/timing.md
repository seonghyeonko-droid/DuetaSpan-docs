# v3_mem_32_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_32",
#     "name": "재람",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "early 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-28",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Korean BBQ."
#     },
#     {
#       "date": "2026-04-22",
#       "category": "pet",
#       "text": "User has a Corgi named Mochi."
#     },
#     {
#       "date": "2026-02-15",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     },
#     {
#       "date": "2025-11-29",
#       "category": "hobby",
#       "text": "User is into rock climbing."
#     },
#     {
#       "date": "2025-06-21",
#       "category": "work",
#       "text": "User works as a marketing manager."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-10-06",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 안녕하세요, 사eus님. 잘 지냈어요. 혹시 제가 예전에 말씀 | S2 … 근데 그때 제가 한국 바베큐를 엄청 좋아한다고 말씀드렸었죠 | S3 네, 그래도 주말에는 꼭 암벽 등반을 하려고 노력해요. 강아지 | S4 아, 맞아요. 모치는 유제품 알레르기가 있어요.

     0.00s  agent 발화 시작: 안녕하세요, 재람님. 저는 여러분의 웰빙 코치, 사eus입니다. 오늘 하루는 어떠셨어요?
     4.88s  user  발화 시작: 네.
     5.51s  user  발화 끝
     6.81s  agent 발화 끝
     7.15s  user  발화 시작: 안녕하세요, 사eus님. 잘 지냈어요. 혹시 제가 예전에 말씀드렸던 여행 계획 기억하시나요?
    13.51s  <ret> 발화 (turn3 첫 프레임)
    13.59s  agent 발화 시작: <ret> 네, 재람님. 사무실 근처에 수영장이 있는 헬스 멤버십을 비교했던 것 기억하고 있어요. —
    13.59s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.12s]: [2025-10-06] Past chat — Comparing gym memberships: wants a pool; clos
    13.73s  user  발화 끝
    18.91s  user  발화 시작: … 근데 그때 제가 한국 바베큐를 엄청 좋아한다고 말씀드렸었죠?
    19.70s  agent 발화 끝
    22.45s  <ret> 발화 (turn5 첫 프레임)
    22.53s  agent 발화 시작: <ret> 아, 네, 맞아요. 한국 바베큐를 아주 좋아하신다고 말씀하셨었죠.
    22.53s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.34s]: [2026-06-28] User's favorite cuisine is Korean BBQ.
    22.57s  user  발화 끝
    26.87s  agent 발화 끝
    26.88s  agent 발화 시작: 한국 바베큐를 가장 좋아하신다는 걸 기억하고 있습니다. 혹시 최근에 맛있는 곳을 찾으셨나요?
    29.77s  user  발화 시작: 네.
    30.17s  user  발화 끝
    33.89s  <ret> 발화 (turn8 첫 프레임)
    33.96s  agent 발화 시작: <ret> 정말 다행이네요! 혹시 최근에 스트레스 받는 일은 없으셨나요? 운동이나 취미 활동은 꾸준히 하고 
    33.97s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.90s]: [2025-11-29] User is into rock climbing.
    34.01s  agent 발화 끝
    42.78s  agent 발화 시작: 암벽 등반을 좋아하신다고 말씀해주셨던 것 같아요. 암벽 등반은 스트레스 해소에 아주 좋은 활동이죠. 요즘도 
    42.85s  agent 발화 끝
    51.36s  agent 발화 끝
    51.44s  user  발화 시작: 네, 그래도 주말에는 꼭 암벽 등반을 하려고 노력해요. 강아지 모치도 같이 데려가고 싶어요.
    57.66s  <ret> 발화 (turn11 첫 프레임)
    57.92s  user  발화 끝
    57.97s  agent 발화 시작: <ret> 모치와 함께 등반을 가고 싶으시군요. 모치도 분명 좋아할 거예요. 혹시 모치가 유제품을 못 먹는다
    57.98s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.53s]: [2026-04-22] User has a Corgi named Mochi.
    61.33s  user  발화 시작: 네.
    62.15s  user  발화 끝
    66.50s  agent 발화 끝
    66.62s  user  발화 시작: 아, 맞아요. 모치는 유제품 알레르기가 있어요.
    69.25s  <ret> 발화 (turn14 첫 프레임)
    69.64s  agent 발화 시작: <ret> 네, 유제품 알레르기가 있으시죠. 외출 시에는 항상 주의하셔야 할 것 같아요.
    69.65s  ⚡SPAN 주입 [d'=1.76s / d_lead=5.98s]: [2026-02-15] User is lactose-intolerant.
    69.81s  user  발화 끝
    75.62s  agent 발화 끝
