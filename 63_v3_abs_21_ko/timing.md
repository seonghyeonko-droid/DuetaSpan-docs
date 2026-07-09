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

# EXAMINER(FDB-v2) 단계: S1 프랑스 상원 의원 수는 몇 명이에요? | S2 오, 삼백사십팔 명이요? 꽤 많네요. | S3 오 년이군요. 한국이랑 다르네요. | S4 오늘은 좀 피곤하네요.

     0.00s  user  발화 시작: 프랑스 상원 의원 수는 몇 명이에요?
     1.84s  <ret> 발화 (turn1 첫 프레임)
     2.08s  agent 발화 시작: <ret> 음… 그 부분은 제가 정확히 알지 못하네요. 한번 찾아볼게요.
     2.25s  user  발화 끝
     2.34s  ⚡SPAN 주입 [d'=0.50s / d_lead=3.52s]: (no information found)
     5.57s  agent 발화 시작: 죄송해요. 프랑스 상원 의원 수에 대한 정보를 찾을 수 없었어요.
     5.59s  agent 발화 끝
     7.44s  user  발화 시작: 아.
     8.08s  user  발화 끝
     9.60s  agent 발화 끝
    10.30s  user  발화 시작: 아, 그렇군요. 그럼 프랑스 전체 의회 의원 수는요?
    13.51s  <ret> 발화 (turn5 첫 프레임)
    13.83s  agent 발화 시작: <ret> 의회 전체를 말씀하시는 거라면… 프랑스 의회는 국민의회 의원 오백칠십칠 명과 상원 의원 삼백사십팔
    13.86s  user  발화 끝
    14.55s  ⚡SPAN 주입 [d'=1.04s / d_lead=2.18s]: 'The French Parliament consists of two houses: the National Assembly w
    19.08s  user  발화 시작: 맞아요.
    19.80s  user  발화 끝
    22.55s  agent 발화 끝
    22.95s  user  발화 시작: 오, 삼백사십팔 명이요? 꽤 많네요.
    25.71s  user  발화 끝
    26.03s  agent 발화 시작: 네, 그렇죠? 규모가 꽤 큰 편이에요. 혹시 다른 궁금한 점이 있으세요?
    29.68s  agent 발화 끝
    30.19s  user  발화 시작: 그럼 프랑스 대통령 임기는 얼마나 되나요?
    32.96s  <ret> 발화 (turn10 첫 프레임)
    33.01s  user  발화 끝
    33.19s  agent 발화 시작: <ret> 대통령 임기는 꽤 중요한 질문이죠. 프랑스 대통령 임기는 오 년으로 정해져 있어요.
    33.92s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.16s]: 'The President of France is elected for a five-year term.' [source: Br
    34.82s  user  발화 시작: 예.
    35.41s  user  발화 끝
    38.38s  agent 발화 끝
    38.49s  user  발화 시작: 오 년이군요. 한국이랑 다르네요.
    40.55s  agent 발화 시작: 네, 한국 대통령 임기는 오 년이고요, 프랑스는 오 년으로 조금 다르죠. 혹시 다른 나라와 비교해 보고 싶으
    40.74s  user  발화 끝
    47.55s  agent 발화 끝
    47.56s  user  발화 시작: 아니요, 괜찮아요. 그냥 궁금해서요.
    49.55s  user  발화 끝
    49.70s  agent 발화 시작: 네, 알겠습니다. 혹시 다른 건강 습관에 대해 이야기해 볼까요? 아니면 오늘 하루 어떠셨는지요?
    55.37s  user  발화 시작: 오늘은 좀 피곤하네요.
    55.40s  agent 발화 끝
    56.87s  agent 발화 시작: [sigh] 피곤하시다니 안타깝네요. 충분한 휴식을 취하는 게 중요해요. 따뜻한 차 한 잔 어떠세요?
    56.89s  user  발화 끝
    63.74s  agent 발화 끝
