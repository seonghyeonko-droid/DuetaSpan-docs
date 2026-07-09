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

# EXAMINER(FDB-v2) 단계: S1 프랑스 상원 의원 수는 몇 명이에요? | S2 육 년이나 되네요. 그럼 지금 상원 의원들은 언제 선출됐을까요 | S3 아, 그렇군요. 그럼 지금쯤 다음 선거를 준비하고 있겠네요? | S4 아니요, 오늘은 여기까지 할게요. 감사합니다.

     0.00s  user  발화 시작: 프랑스 상원 의원 수는 몇 명이에요?
     1.65s  <ret> 발화 (turn1 첫 프레임)
     1.89s  agent 발화 시작: <ret> 음… 그 부분은 제가 지금 바로 정확하게 말씀드리기가 어렵네요.
     2.02s  user  발화 끝
     2.15s  ⚡SPAN 주입 [d'=0.50s / d_lead=4.07s]: (no information found)
     5.88s  agent 발화 시작: 죄송해요. 프랑스 상원 의원 수에 대한 정보는 찾을 수 없었어요.
     5.96s  agent 발화 끝
     8.65s  user  발화 시작: 네.
     9.10s  user  발화 끝
     9.71s  agent 발화 끝
    10.40s  user  발화 시작: 아, 그렇군요. 혹시 다른 방법으로 찾아볼 수 있을까요?
    13.34s  <ret> 발화 (turn5 첫 프레임)
    13.53s  user  발화 끝
    13.66s  agent 발화 시작: <ret> 물론이죠. 제가 지금 검색을 해 볼까요?
    14.46s  ⚡SPAN 주입 [d'=1.12s / d_lead=2.49s]: The French Senate has 348 senators, each elected by an electoral colle
    16.16s  agent 발화 끝
    16.29s  agent 발화 시작: 네, 검색해 보니… 프랑스 상원 의원은 총 삼백사십팔 명이라고 하네요. 임기는 육 년이라고 합니다.
    21.07s  user  발화 시작: 네.
    21.52s  user  발화 끝
    22.72s  agent 발화 끝
    23.68s  user  발화 시작: 육 년이나 되네요. 그럼 지금 상원 의원들은 언제 선출됐을까요?
    28.01s  <ret> 발화 (turn9 첫 프레임)
    28.17s  user  발화 끝
    28.23s  agent 발화 시작: <ret> 그건 지금 바로 확인해 볼게요.
    28.57s  ⚡SPAN 주입 [d'=0.56s / d_lead=1.43s]: Six years ago from today was September 26, 2018.
    29.66s  agent 발화 끝
    29.68s  agent 발화 시작: 지금으로부터 육 년 전은 2018년 9월 26일이었어요. 그때 선출되었을 겁니다.
    35.01s  agent 발화 끝
    35.35s  user  발화 시작: 아, 그렇군요. 그럼 지금쯤 다음 선거를 준비하고 있겠네요?
    38.96s  user  발화 끝
    39.33s  agent 발화 시작: 네, 맞아요. 시간이 꽤 빠르게 지나가죠. 혹시 다른 궁금한 점이 있으신가요?
    43.96s  agent 발화 끝
    44.46s  user  발화 시작: 아니요, 오늘은 여기까지 할게요. 감사합니다.
    46.77s  agent 발화 시작: 천만에요. 언제든 편하게 다시 찾아주세요.
    46.95s  user  발화 끝
    49.60s  agent 발화 끝
