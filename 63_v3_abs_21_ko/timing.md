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
#       "date": "2026-03-16",
#       "category": "home",
#       "text": "User's home address is 389 Maple Drive."
#     },
#     {
#       "date": "2026-02-21",
#       "category": "trip",
#       "text": "User is planning a trip to Vietnam in August."
#     },
#     {
#       "date": "2026-02-20",
#       "category": "pet",
#       "text": "User has a Poodle named Coco."
#     },
#     {
#       "date": "2025-09-21",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-03-12",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2025-08-16",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 프랑스 상원 의원 수는 몇 명이에요? | S2 상원 의원 수가 생각보다 많네요. 상원의 역할은 주로 뭘 하나 | S3 아, 그렇군요. 그럼 국민의회는요? | S4 네, 그렇군요. 설명해 주셔서 감사합니다.

     0.00s  user  발화 시작: 프랑스 상원 의원 수는 몇 명이에요?
     2.16s  <ret> 발화 (turn1 첫 프레임)
     2.40s  agent 발화 시작: <ret> 음… 그 부분은 제가 정확히 알지 못하네요.
     2.58s  user  발화 끝
     2.66s  ⚡SPAN 주입 [d'=0.50s / d_lead=2.91s]: (no information found)
     5.14s  agent 발화 시작: 죄송해요. 프랑스 상원 의원 수에 대한 정보를 찾을 수 없었어요.
     5.31s  agent 발화 끝
     7.84s  user  발화 시작: 네.
     8.46s  user  발화 끝
     8.93s  agent 발화 끝
     9.59s  user  발화 시작: 아, 그렇군요. 그럼 프랑스 전체 의회 의원 수는요?
    12.95s  <ret> 발화 (turn5 첫 프레임)
    13.27s  agent 발화 시작: <ret> 잠깐만요, 확인해 볼게요.
    13.29s  user  발화 끝
    13.75s  ⚡SPAN 주입 [d'=0.80s / d_lead=1.42s]: [source: Wikipedia] The Parliament of France is bicameral, comprising 
    14.69s  agent 발화 끝
    14.78s  agent 발화 시작: 프랑스 의회는 국민의회와 상원으로 이루어져 있고, 국민의회는 오백칠십칠 명, 상원 의원은 삼백사십팔 명이에요
    19.89s  user  발화 시작: 네.
    20.32s  user  발화 끝
    21.64s  agent 발화 끝
    22.61s  user  발화 시작: 상원 의원 수가 생각보다 많네요. 상원의 역할은 주로 뭘 하나요?
    27.47s  user  발화 끝
    27.86s  agent 발화 시작: 상원은 주로 법안 심의와 국민의회에서 통과된 법안 검토를 담당하고 있어요.
    32.53s  agent 발화 끝
    33.06s  user  발화 시작: 아, 그렇군요. 그럼 국민의회는요?
    35.18s  user  발화 끝
    35.58s  agent 발화 시작: 국민의회는 주로 법안을 발의하고 통과시키는 역할을 하죠. 상원과 함께 프랑스의 입법 기능을 수행해요.
    42.72s  agent 발화 끝
    43.06s  user  발화 시작: 음… 알겠어요. 프랑스 정치 시스템이 복잡하네요.
    46.90s  user  발화 끝
    46.99s  agent 발화 시작: 복잡하게 느껴지실 수 있지만, 상호 견제와 균형을 통해 안정적인 정치 시스템을 유지하고 있어요.
    48.82s  user  발화 시작: 예.
    49.31s  user  발화 끝
    52.83s  agent 발화 끝
    53.06s  user  발화 시작: 네, 그렇군요. 설명해 주셔서 감사합니다.
    55.92s  user  발화 끝
    56.12s  agent 발화 시작: 천만에요. 언제든지 궁금한 점이 있으면 편하게 말씀해 주세요.
    59.96s  agent 발화 끝
