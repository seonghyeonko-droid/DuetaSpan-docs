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

# EXAMINER(FDB-v2) 단계: S1 프랑스 상원 의원 수는 몇 명이에요? | S2 오, 그렇군요. 그럼 국회 의원과 상원 의원 수 차이는 얼마나 | S3 아, 그건 나중에 알아봐도 괜찮을 것 같아요. 지금은 의원 수 | S4 음… 지금은 괜찮아요. 감사합니다.

     0.00s  user  발화 시작: 프랑스 상원 의원 수는 몇 명이에요?
     1.70s  <ret> 발화 (turn1 첫 프레임)
     1.94s  agent 발화 시작: <ret> 음… 프랑스 상원 의원 수에 대한 정보는 지금 바로 확인이 어렵네요.
     2.07s  user  발화 끝
     2.20s  ⚡SPAN 주입 [d'=0.50s / d_lead=4.35s]: (no information found)
     6.24s  agent 발화 시작: 죄송해요. 현재로서는 프랑스 상원 의원 수가 몇 명인지 알 수 없어요.
     6.29s  agent 발화 끝
     8.36s  user  발화 시작: 아.
     8.98s  user  발화 끝
    10.77s  agent 발화 끝
    11.48s  user  발화 시작: 아, 그렇군요. 그럼 프랑스 의회 전체 의원 수는요?
    14.49s  <ret> 발화 (turn5 첫 프레임)
    14.80s  agent 발화 시작: <ret> 프랑스 의회 전체 의원 수에 대해서는 정보를 찾아볼 수 있어요. 잠시만 기다려 주세요.
    14.86s  user  발화 끝
    16.49s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.18s]: The French Parliament consists of a National Assembly of 577 members a
    19.98s  agent 발화 끝
    20.07s  agent 발화 시작: 프랑스 의회는 총 오백칠십칠 명의 국회의원과 삼백사십팔 명의 상원 의원으로 구성되어 있어요. 국회 의원 수가
    27.70s  user  발화 시작: 맞아요.
    28.48s  user  발화 끝
    32.32s  agent 발화 끝
    33.29s  user  발화 시작: 오, 그렇군요. 그럼 국회 의원과 상원 의원 수 차이는 얼마나 나나요?
    37.45s  user  발화 끝
    37.80s  agent 발화 시작: [interrupting] 잠깐만요, 그 전에 프랑스 의회가 어떤 역할을 하는지 궁금하지 않으세요?
    42.61s  agent 발화 끝
    43.05s  user  발화 시작: 아, 그건 나중에 알아봐도 괜찮을 것 같아요. 지금은 의원 수 차이가 궁금해요.
    47.21s  user  발화 끝
    47.58s  agent 발화 시작: 네, 알겠습니다. 국회 의원 수와 상원 의원 수 차이는 이백삼십구 명입니다.
    52.90s  agent 발화 끝
    52.98s  agent 발화 시작: 국회 의원이 삼백사십팔 명 더 많아요.
    53.67s  user  발화 시작: 예.
    54.13s  user  발화 끝
    55.25s  agent 발화 끝
    55.50s  user  발화 시작: 생각보다 꽤 많이 나네요.
    57.12s  agent 발화 시작: 그렇죠? 의회 구성에 따라 역할 분담도 다를 수 있어요. 혹시 다른 궁금한 점 있으세요?
    57.20s  user  발화 끝
    62.12s  agent 발화 끝
    62.31s  user  발화 시작: 음… 지금은 괜찮아요. 감사합니다.
    65.68s  user  발화 끝
    65.90s  agent 발화 시작: 도움이 되었다니 기쁘네요. 언제든지 또 궁금한 점이 있으면 말씀해 주세요.
    70.30s  agent 발화 끝
