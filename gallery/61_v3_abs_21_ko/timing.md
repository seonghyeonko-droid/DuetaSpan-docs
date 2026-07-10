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

# EXAMINER(FDB-v2) 단계: S1 프랑스 상원 의원 수는 몇 명이에요? | S2 …대통령은 누가 맡고 있나요? | S3 와, 높네요. 몽블랑은 어디에 있나요? | S4 루아르 강이군요. 감사합니다.

     0.00s  user  발화 시작: 프랑스 상원 의원 수는 몇 명이에요?
     2.34s  <ret> 발화 (turn1 첫 프레임)
     2.73s  agent 발화 시작: <ret> 프랑스 상원 의원 수에 대한 정보는 찾을 수 없었습니다. 죄송합니다.
     2.91s  user  발화 끝
     3.30s  ⚡SPAN 주입 [d'=0.96s / d_lead=7.84s]: (no information found)
     8.40s  user  발화 시작: 네.
     9.32s  user  발화 끝
    10.42s  user  발화 시작: 아, 그렇군요. 그럼 프랑스 하원 의원 수는요?
    10.57s  agent 발화 끝
    15.11s  <ret> 발화 (turn4 첫 프레임)
    15.15s  user  발화 끝
    15.42s  agent 발화 시작: <ret> 프랑스 국민의회 의원 수는… 오백칠십칠 명입니다.
    17.11s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.64s]: [source: Wikipedia] The National Assembly of France has 577 members.
    24.85s  user  발화 시작: 오, 알겠습니다. 그럼 프랑스…
    25.06s  agent 발화 끝
    25.43s  user  발화 끝
    26.86s  user  발화 시작: …대통령은 누가 맡고 있나요?
    31.03s  <ret> 발화 (turn7 첫 프레임)
    31.18s  agent 발화 시작: <ret> 현재 프랑스 대통령은… 에마뉘엘 마크롱 대통령입니다. 이천십칠년부터 임기를 시작하셨죠.
    31.21s  user  발화 끝
    33.03s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.99s]: [source: Britannica] Emmanuel Macron has been President of France sinc
    36.25s  user  발화 시작: 네.
    36.69s  user  발화 끝
    37.97s  agent 발화 시작: 대통령님은 프랑스를 이끌어가는 중요한 역할을 하고 계시죠.
    38.17s  agent 발화 끝
    42.05s  agent 발화 끝
    42.08s  user  발화 시작: 맞아요. 프랑스에서 가장 높은 산은 어디인가요?
    51.05s  <ret> 발화 (turn11 첫 프레임)
    51.28s  agent 발화 시작: <ret> 프랑스에서 가장 높은 산은… 몽블랑 산으로, 높이는 사천팔백칠 미터입니다.
    51.54s  user  발화 끝
    52.62s  user  발화 시작: 예.
    53.05s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.35s]: [source: WorldAtlas] Mont Blanc is the highest mountain in France, at 
    55.56s  user  발화 시작: 와, 높네요. 몽블랑은 어디에 있나요?
    55.63s  agent 발화 끝
    58.46s  user  발화 끝
    59.89s  agent 발화 시작: 몽블랑 산은 프랑스와 이탈리아 국경에 걸쳐 있습니다. 아름다운 곳이죠.
    59.92s  user  발화 끝
    68.09s  agent 발화 끝
    68.44s  user  발화 시작: 그렇군요. 프랑스에서 가장 긴 강은 뭔가요?
    69.26s  user  발화 끝
    69.28s  <ret> 발화 (turn16 첫 프레임)
    69.35s  agent 발화 시작: <ret> 프랑스에서 가장 긴 강은… 루아르 강으로, 길이는 천일십이 킬로미터입니다.
    70.80s  ⚡SPAN 주입 [d'=1.52s / d_lead=4.16s]: [source: National Geographic] The Loire is the longest river in France
    73.00s  user  발화 시작: 루아르 강이군요. 감사합니다.
    73.51s  agent 발화 끝
    81.68s  agent 발화 시작: 도움이 되었다니 기쁩니다.
    81.72s  user  발화 끝
    82.49s  agent 발화 끝
    82.74s  user  발화 시작: 아니요, 오늘은 여기까지 할게요.
    86.41s  agent 발화 시작: 좋은 하루 보내세요.
    86.54s  user  발화 끝
    92.66s  agent 발화 끝
