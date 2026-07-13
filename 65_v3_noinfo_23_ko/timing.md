# v3_noinfo_23_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_noinfo_23",
#     "name": "현슬",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "late 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-17",
#       "category": "home",
#       "text": "User's home address is 서울 용산구 이태원로 200."
#     },
#     {
#       "date": "2026-06-12",
#       "category": "diet",
#       "text": "User is gluten-free."
#     },
#     {
#       "date": "2026-04-18",
#       "category": "work",
#       "text": "User works as a physical therapist."
#     },
#     {
#       "date": "2026-02-16",
#       "category": "allergy",
#       "text": "User is allergic to pollen."
#     },
#     {
#       "date": "2025-12-18",
#       "category": "trip",
#       "text": "User is planning a trip to New Zealand in December."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-23",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2026-04-18",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2026-02-05",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 브레리님, 안녕하세요. 요즘 공부에 집중이 잘 안 돼서 고민이 | S2 …혹시 제가 지금 제일 중요한 과목을 찾는 데 도움을 주실 수 | S3 토익 시험을 준비하고 있어요. | S4 와이 비 엠이 유명하군요.

     0.00s  user  발화 시작: 브레리님, 안녕하세요. 요즘 공부에 집중이 잘 안 돼서 고민이에요.
     4.09s  agent 발화 시작: 안녕하세요! 공부에 집중이 안 된다니, 힘드시겠어요. 제가 도와드릴게요.
     4.09s  user  발화 끝
     7.73s  user  발화 시작: 네.
     7.73s  agent 발화 끝
     8.19s  user  발화 시작: 네, 감사합니다.
     8.19s  user  발화 끝
     9.10s  agent 발화 시작: 혹시 공부 방법을 바꿔보는 건 어떠세요? 예를 들어, 뽀모도로 기법이나 간격 반복 학습법 같은 걸 시도해 볼
     9.10s  user  발화 끝
    17.74s  user  발화 시작: 맞아요.
    17.74s  agent 발화 끝
    18.19s  agent 발화 시작: 뽀모도로 기법은 이십오분 공부하고 오분 휴식하는 걸 반복하는 방법인데, 집중력을 높이는 데 도움이 될 수 있
    18.19s  user  발화 끝
    26.83s  user  발화 시작: …혹시 제가 지금 제일 중요한 과목을 찾는 데 도움을 주실 수 있나요?
    26.83s  agent 발화 끝
    32.29s  agent 발화 시작: 예.
    32.29s  user  발화 끝
    32.75s  agent 발화 시작: 아, 네, 그럼요. 어떤 과목이 가장 중요한지 찾는 걸 도와드릴게요. 어떤 시험을 준비하고 계신가요?
    32.75s  agent 발화 끝
    39.11s  agent 발화 시작: 죄송하지만, 현재 어떤 시험을 준비하고 계신지 알려주시면, 어떤 과목이 가장 중요한지 찾을 수 있을 것 같아
    39.11s  agent 발화 끝
    48.66s  user  발화 시작: 네.
    48.66s  agent 발화 끝
    49.12s  user  발화 시작: 토익 시험을 준비하고 있어요.
    49.12s  user  발화 끝
    50.94s  agent 발화 시작: 토익 시험을 준비하시는군요! 토익은 어휘, 문법, 듣기, 읽기 영역을 골고루 공부해야 하는데요, 현재 어느 
    50.94s  user  발화 끝
    59.12s  user  발화 시작: 듣기가 가장 약한 것 같아요.
    59.12s  agent 발화 끝
    60.81s  <ret> 발화 (turn15 첫 프레임)
    61.11s  ⚡SPAN 주입 [d'=0.30s / d_lead=8.64s]: (tool result) 토익 (TOEIC) 듣기 공부 자료는 YBM, 해커스, 파고다 등 다양한 학원 및 온라인 사이트에서 
    61.40s  agent 발화 시작: <ret> 듣기가 약하시군요. 토익 듣기 영역은 다양한 억양과 속도를 가진 음성을 이해하는 게 중요해요. 토
    61.40s  user  발화 끝
    70.04s  agent 발화 시작: 토익 듣기 공부 자료는 와이 비 엠, 해커스, 파고다 같은 곳에서 많이 제공하는 것 같아요. 특히 와이 비 
    70.04s  agent 발화 끝
    80.50s  user  발화 시작: 와이 비 엠이 유명하군요.
    80.50s  agent 발화 끝
    82.32s  agent 발화 시작: 네, 와이 비 엠은 토익 전문 학원으로 유명해요. 토익 공부에 필요한 다양한 자료와 강의를 제공하고 있어요.
    82.32s  user  발화 끝
    89.59s  agent 발화 끝
