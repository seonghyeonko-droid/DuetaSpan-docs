# v3_abs_21_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_abs_21",
#     "name": "하재",
#     "location": {
#       "city": "Seoul",
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

# EXAMINER(FDB-v2) 단계: S1 프랑스 상원 의원 수는 몇 명이에요? | S2 꽤 많네요. 프랑스 대통령은 누구예요? | S3 …대통령의 임기는 언제부터 언제까지예요? | S4 아, 그렇군요. 그럼 마크롱 대통령의 배우자는 누구세요?

     0.00s  user  발화 시작: 프랑스 상원 의원 수는 몇 명이에요?
     2.04s  <ret> 발화 (turn1 첫 프레임)
     2.28s  agent 발화 시작: <ret> 찾을 수 있는 정보가 없네요… 프랑스 상원 의원 수는 삼백사십팔 명입니다.
     2.35s  user  발화 끝
     2.54s  ⚡SPAN 주입 [d'=0.50s / d_lead=3.88s]: 프랑스 상원 의원 수는 348명입니다.
     4.07s  user  발화 시작: 맞아요.
     4.70s  user  발화 끝
     6.16s  agent 발화 끝
     7.48s  user  발화 시작: 아, 그렇군요. 그럼 프랑스 하원 의원 수는요?
    10.02s  <ret> 발화 (turn4 첫 프레임)
    10.25s  agent 발화 시작: <ret> 프랑스 하원 의원 수도 지금은 정확히 파악하기 어렵네요. 정보가 제한적이에요… 오백칠십칠 명입니다
    10.44s  user  발화 끝
    12.02s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.02s]: 프랑스 하원 의원 수는 오백칠십칠 명입니다.
    13.94s  user  발화 시작: 맞아요.
    14.57s  user  발화 끝
    16.18s  user  발화 시작: 음… 그렇군요. 프랑스 인구는 얼마나 되죠?
    16.27s  agent 발화 끝
    19.17s  <ret> 발화 (turn7 첫 프레임)
    19.41s  agent 발화 시작: <ret> 프랑스 인구는… 약 육천 팔백만 명으로 확인됩니다… 약 육천 칠백 칠십오만 명입니다.
    19.41s  user  발화 끝
    21.17s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.25s]: 프랑스의 인구는 약 6,775만 명입니다.
    25.65s  agent 발화 끝
    25.78s  user  발화 시작: 꽤 많네요. 프랑스 대통령은 누구예요?
    27.69s  <ret> 발화 (turn9 첫 프레임)
    27.85s  agent 발화 시작: <ret> 현재 프랑스 대통령은 에마뉘엘 마크롱 씨입니다… 에마뉘엘 마크롱입니다.
    27.85s  user  발화 끝
    29.19s  user  발화 시작: 예.
    29.64s  user  발화 끝
    29.69s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.21s]: 프랑스 대통령은 에마뉘엘 마크롱입니다.
    32.06s  agent 발화 끝
    32.15s  user  발화 시작: 마크롱 대통령이요. 혹시 마크롱…
    34.68s  user  발화 끝
    35.83s  user  발화 시작: …대통령의 임기는 언제부터 언제까지예요?
    37.69s  <ret> 발화 (turn13 첫 프레임)
    38.09s  agent 발화 시작: <ret> 마크롱 대통령의 임기는… 이천십칠년 오월부터 이천이십이년 오월까지였고, 다시 이천이십이년부터… 이
    38.19s  user  발화 끝
    39.69s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.60s]: 에마뉘엘 마크롱은 2017년 5월 14일에 프랑스 대통령으로 취임하여 5년 임기를 수행하고 있습니다.
    47.68s  agent 발화 끝
    48.82s  user  발화 시작: 다시요?
    49.36s  user  발화 끝
    49.39s  <ret> 발화 (turn15 첫 프레임)
    49.55s  agent 발화 시작: <ret> 네, 다시 이천이십이년부터 이천이십칠년까지 연임하고 있습니다… 오월까지입니다.
    51.39s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.14s]: 마크롱 대통령의 임기는 이천이십이년부터 이천이십칠년 오월까지입니다.
    54.69s  agent 발화 끝
    54.81s  user  발화 시작: 아, 그렇군요. 그럼 마크롱 대통령의 배우자는 누구세요?
    58.10s  <ret> 발화 (turn17 첫 프레임)
    58.42s  agent 발화 시작: <ret> 마크롱 대통령의 배우자는 브리지트 마크롱 여사입니다… 여사입니다.
    58.50s  user  발화 끝
    59.86s  ⚡SPAN 주입 [d'=1.76s / d_lead=3.74s]: 마크롱 대통령의 배우자는 브리지트 마크롱입니다.
    60.98s  user  발화 시작: 그렇죠.
    61.47s  user  발화 끝
    62.16s  agent 발화 끝
    62.60s  user  발화 시작: 브리지트 마크롱 여사군요. 알겠습니다. 감사합니다.
    65.69s  agent 발화 시작: 도움이 되었다니 다행입니다.
    65.84s  user  발화 끝
    66.82s  agent 발화 끝
