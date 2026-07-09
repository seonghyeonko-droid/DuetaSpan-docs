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

# EXAMINER(FDB-v2) 단계: S1 프랑스 상원 의원 수는 몇 명이에요? | S2 오백칠십칠 명이요? 생각보다 많네요. | S3 음… 그럼 프랑스 대통령은 누가 지금이에요? | S4 아니요, 괜찮아요. 감사합니다.

     0.00s  user  발화 시작: 프랑스 상원 의원 수는 몇 명이에요?
     2.10s  <ret> 발화 (turn1 첫 프레임)
     2.33s  agent 발화 시작: <ret> 프랑스 상원 의원 수에 대해 궁금하시군요. 죄송하지만, 현재 프랑스 상원 의원 수에 대한 정보를 
     2.49s  user  발화 끝
     2.60s  ⚡SPAN 주입 [d'=0.50s / d_lead=2.57s]: (no information found)
     7.68s  user  발화 시작: 네.
     8.13s  user  발화 끝
     9.23s  user  발화 시작: 아, 그렇군요. 그럼 프랑스 국회 의원 수는요?
     9.60s  agent 발화 끝
    11.85s  <ret> 발화 (turn4 첫 프레임)
    12.09s  agent 발화 시작: <ret> 프랑스 국회 의원 수에 대해서는 알려드릴 수 있습니다. 프랑스 국회는 총 오백칠십칠 명의 의원으로
    12.13s  user  발화 끝
    13.61s  ⚡SPAN 주입 [d'=1.76s / d_lead=3.64s]: The French National Assembly has 577 members.
    17.49s  user  발화 시작: 네.
    17.93s  user  발화 끝
    19.37s  agent 발화 끝
    20.05s  user  발화 시작: 오백칠십칠 명이요? 생각보다 많네요.
    22.96s  user  발화 끝
    23.34s  agent 발화 시작: [surprised] 맞아요. 꽤 많은 의원들이 활동하고 있습니다.
    26.30s  agent 발화 끝
    26.45s  user  발화 시작: 그럼 상원과 하원을 합치면 총 몇 명이 되는 거죠?
    30.14s  user  발화 끝
    30.18s  agent 발화 시작: 상원 의원 수 정보를 찾을 수 없어서 정확한 합계를 말씀드리기는 어렵습니다.
    35.04s  agent 발화 끝
    36.92s  user  발화 시작: 음… 그럼 프랑스 대통령은 누가 지금이에요?
    39.65s  <ret> 발화 (turn11 첫 프레임)
    39.88s  agent 발화 시작: <ret> 현재 프랑스 대통령에 대해 말씀드릴게요. 현재 프랑스 대통령은 에마뉘엘 마크롱 대통령입니다.
    39.98s  user  발화 끝
    40.61s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.48s]: Emmanuel Macron is the current president of France.
    41.64s  user  발화 시작: 예.
    42.09s  user  발화 끝
    45.34s  agent 발화 끝
    45.43s  user  발화 시작: 에마뉘엘 마크롱 대통령이군요. 알겠습니다.
    48.81s  agent 발화 시작: 혹시 다른 궁금한 점이 있으신가요? 아니면 프랑스에 대한 다른 정보를 찾아볼까요?
    48.94s  user  발화 끝
    53.91s  agent 발화 끝
    54.46s  user  발화 시작: 아니요, 괜찮아요. 감사합니다.
    56.12s  user  발화 끝
