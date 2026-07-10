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

# EXAMINER(FDB-v2) 단계: S1 프랑스 상원 의원 수는 몇 명인가요? | S2 프랑스 대통령은 누가 선출했나요? | S3 기억력이 좋으시네요. | S4 …좀 해주실 수 있나요?

     0.00s  user  발화 시작: 프랑스 상원 의원 수는 몇 명인가요?
     2.38s  <ret> 발화 (turn1 첫 프레임)
     2.77s  agent 발화 시작: <ret> 프랑스 상원 의원 수에 대한 정보는 현재 찾을 수 없었습니다. 죄송합니다.
     2.90s  user  발화 끝
     4.38s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.40s]: (no information found)
     5.98s  user  발화 시작: 네.
     6.42s  user  발화 끝
     7.17s  agent 발화 끝
     7.45s  user  발화 시작: 아, 그렇군요. 그럼 프랑스 국회는요?
     9.62s  <ret> 발화 (turn4 첫 프레임)
     9.93s  agent 발화 시작: <ret> 프랑스 의회는 상원과 국민의회, 두 개의 원으로 구성되어 있습니다.
    10.03s  user  발화 끝
    11.54s  ⚡SPAN 주입 [d'=1.92s / d_lead=4.17s]: [source: Wikipedia] The French Parliament is bicameral, comprising the
    14.09s  agent 발화 끝
    14.25s  user  발화 시작: 국민의회 의원 수는요?
    16.23s  user  발화 끝
    16.34s  <ret> 발화 (turn6 첫 프레임)
    16.49s  agent 발화 시작: <ret> 국민의회는 총 오백칠십칠 명의 의원으로 이루어져 있습니다.
    18.34s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.70s]: [source: National Assembly of France] The National Assembly has 577 me
    19.21s  user  발화 시작: 네.
    19.52s  user  발화 끝
    20.19s  agent 발화 끝
    20.27s  agent 발화 시작: 혹시 다른 궁금한 점이 있으신가요?
    22.25s  agent 발화 끝
    22.25s  user  발화 시작: 프랑스 대통령은 누가 선출했나요?
    24.39s  <ret> 발화 (turn10 첫 프레임)
    24.47s  agent 발화 시작: <ret> 에마뉘엘 마크롱 대통령이 이천이십이년 사월 이십사일에 재선에 성공했습니다.
    24.51s  user  발화 끝
    25.91s  ⚡SPAN 주입 [d'=1.52s / d_lead=5.18s]: [source: Britannica] Emmanuel Macron was re-elected as president of Fr
    29.65s  agent 발화 끝
    29.86s  user  발화 시작: 그분은 몇 년도에 처음 대통령이 되었죠?
    32.30s  <ret> 발화 (turn12 첫 프레임)
    32.44s  user  발화 끝
    32.46s  agent 발화 시작: <ret> 마크롱 대통령은 처음 이천십칠년에 프랑스 대통령으로 선출되었습니다.
    33.58s  ⚡SPAN 주입 [d'=1.28s / d_lead=4.72s]: [source: Reuters] Emmanuel Macron was first elected president of Franc
    33.96s  user  발화 시작: 예.
    34.31s  user  발화 끝
    37.18s  agent 발화 끝
    37.31s  user  발화 시작: 기억력이 좋으시네요.
    39.05s  user  발화 끝
    39.20s  agent 발화 시작: [happy] 칭찬해 주셔서 감사합니다. 제가 도울 수 있어서 기쁩니다.
    42.89s  agent 발화 끝
    42.90s  user  발화 시작: 건강 관리에 대한 조언…
    44.60s  user  발화 끝
    46.31s  user  발화 시작: …좀 해주실 수 있나요?
    48.38s  user  발화 끝
    48.69s  agent 발화 시작: 규칙적인 생활 습관과 균형 잡힌 식단이 중요하다고 생각합니다. 충분한 수면도 잊지 마세요.
    55.38s  user  발화 시작: 좋은 말씀이네요. 감사해요.
    55.46s  agent 발화 끝
    57.31s  agent 발화 시작: 언제든 필요하시면 찾아주세요. 좋은 하루 보내세요.
    57.31s  user  발화 끝
    60.55s  agent 발화 끝
