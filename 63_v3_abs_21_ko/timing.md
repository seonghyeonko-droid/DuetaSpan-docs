# v3_abs_21_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_abs_21",
#     "name": "하재",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "40s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-02",
#       "category": "home",
#       "text": "User's home address is 389 Maple Drive."
#     },
#     {
#       "date": "2026-03-10",
#       "category": "trip",
#       "text": "User is planning a trip to Vietnam in August."
#     },
#     {
#       "date": "2026-03-09",
#       "category": "pet",
#       "text": "User has a Poodle named Coco."
#     },
#     {
#       "date": "2026-02-26",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-20",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2026-02-28",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 프랑스 상원 의원 수는 몇 명이에요? | S2 양원제라고 하셨죠? 그게 정확히 어떤 건가요? | S3 아하, 그러니까 상원과 하원이 서로 협력하면서도 견제하는 관계 | S4 그렇군요. 프랑스 정치 시스템이 꽤 복잡하네요.

     0.00s  user  발화 시작: 프랑스 상원 의원 수는 몇 명이에요?
     2.12s  <ret> 발화 (turn1 첫 프레임)
     2.36s  agent 발화 시작: <ret> 음, 그 부분은 제가 정확히 알지 못하네요. 지금 바로 확인해 볼까요?
     2.40s  user  발화 끝
     2.62s  ⚡SPAN 주입 [d'=0.50s / d_lead=4.07s]: (no information found)
     6.39s  agent 발화 시작: 죄송해요. 프랑스 상원 의원 수에 대한 정보를 찾을 수 없었어요.
     6.43s  agent 발화 끝
     9.17s  user  발화 시작: 네.
     9.52s  user  발화 끝
    10.22s  agent 발화 끝
    10.92s  user  발화 시작: 아, 그렇군요. 그럼 프랑스에는 어떤 종류의 상원이 있나요?
    15.09s  user  발화 끝
    15.21s  agent 발화 시작: 프랑스에는 단원제 국회와 상원이 함께 있는 양원제가 있어요.
    19.32s  agent 발화 끝
    20.10s  user  발화 시작: 양원제라고 하셨죠? 그게 정확히 어떤 건가요?
    23.18s  agent 발화 시작: 양원제는 입법 권력을 두 개의 의회, 즉 하원과 상원에 나누는 제도예요.
    23.42s  user  발화 끝
    27.16s  user  발화 시작: 네.
    27.61s  user  발화 끝
    28.56s  agent 발화 끝
    28.58s  agent 발화 시작: 각 의회는 서로 다른 역할을 수행하며, 법안을 심의하고 통과시키는 과정에서 서로 견제하고 균형을 이루죠.
    35.35s  agent 발화 끝
    35.51s  user  발화 시작: 아하, 그러니까 상원과 하원이 서로 협력하면서도 견제하는 관계군요?
    39.82s  user  발화 끝
    40.25s  agent 발화 시작: 맞아요. 아주 잘 이해하셨어요. 서로 협력하면서도 견제하는 관계라고 보시면 돼요.
    41.86s  user  발화 시작: 예.
    42.40s  user  발화 끝
    45.25s  agent 발화 끝
    45.67s  user  발화 시작: 그럼 프랑스 상원의 역할은 구체적으로 어떤 것들이 있나요?
    48.84s  <ret> 발화 (turn14 첫 프레임)
    49.07s  agent 발화 시작: <ret> 상원은 주로 법안 심의와 국가 정책 결정에 중요한 역할을 합니다. 프랑스 상원은 프랑스 의회의 상
    49.14s  user  발화 끝
    50.36s  ⚡SPAN 주입 [d'=1.52s / d_lead=4.49s]: '[source: Britannica] The French Senate is the upper house of the Fren
    58.84s  user  발화 시작: 그렇군요. 프랑스 정치 시스템이 꽤 복잡하네요.
    58.94s  agent 발화 끝
    62.01s  agent 발화 시작: 조금 복잡할 수 있지만, 각 기관이 서로 균형을 이루도록 설계되어 있어서 안정적인 정치 시스템을 유지하는 데
    62.16s  user  발화 끝
    70.07s  agent 발화 끝
