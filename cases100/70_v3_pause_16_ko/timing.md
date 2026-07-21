# v3_pause_16_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_pause_16",
#     "name": "윤율",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "60s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-25",
#       "category": "employer",
#       "text": "User works at a consulting firm."
#     },
#     {
#       "date": "2026-02-17",
#       "category": "gym",
#       "text": "User has a gym membership near home."
#     },
#     {
#       "date": "2026-02-16",
#       "category": "learning",
#       "text": "User is studying for the CPA exam."
#     },
#     {
#       "date": "2026-01-24",
#       "category": "child",
#       "text": "User has a child named Rin, age 13."
#     },
#     {
#       "date": "2026-01-08",
#       "category": "skill",
#       "text": "User is just getting back into bread baking."
#     },
#     {
#       "date": "2025-12-09",
#       "category": "allergy",
#       "text": "User is allergic to tree nuts."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-12",
#       "title": "Meal-prep planning",
#       "bullets": [
#         "wants high-protein lunches under 600 calories",
#         "avoiding dairy this month"
#       ]
#     },
#     {
#       "date": "2026-03-04",
#       "title": "Adopting a rescue dog",
#       "bullets": [
#         "looking at a 2-year-old Beagle mix",
#         "asked about crate training and vet costs"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 중국 최초의 중앙집권 제국을 세운 사람이 누구였지? | S2 아, 맞다… 근데 그 사람… | S3 …좀 독재자였다고 들었는데. | S4 …그거 말고 다른 업적은 없었어?

     0.00s  user  발화 시작: 중국 최초의 중앙집권 제국을 세운 사람이 누구였지?
     3.60s  <ret> 발화 (turn1 첫 프레임)
     3.84s  agent 발화 시작: <ret> 중국 역사에 대해 궁금하시군요.
     4.00s  user  발화 끝
     4.20s  ⚡SPAN 주입 [d'=0.60s / d_lead=2.17s]: First Qin Emperor.
     6.01s  agent 발화 끝
     6.06s  agent 발화 시작: 중국 최초의 중앙집권 제국을 세운 사람은 진시황제입니다.
    10.27s  agent 발화 끝
    10.32s  user  발화 시작: 음…
    10.95s  user  발화 끝
    11.44s  agent 발화 시작: 진나라의 첫 번째 황제셨어요.
    13.56s  agent 발화 끝
    13.59s  user  발화 시작: 아, 맞다… 근데 그 사람…
    16.55s  user  발화 끝
    18.56s  user  발화 시작: …좀 독재자였다고 들었는데.
    20.70s  user  발화 끝
    20.87s  <ret> 발화 (turn7 첫 프레임)
    20.92s  agent 발화 시작: <ret> 진시황제에 대해 더 알고 싶으신가요? 진시황제는 법가 사상을 바탕으로 강력한 중앙집권 체제를 구축
    21.47s  ⚡SPAN 주입 [d'=0.60s / d_lead=3.12s]: First Qin Emperor.
    24.80s  user  발화 시작: 그래.
    25.55s  user  발화 끝
    28.95s  agent 발화 시작: 그는 분서갱유로 유명하기도 하죠.
    29.03s  agent 발화 끝
    31.15s  agent 발화 끝
    31.69s  user  발화 시작: …그거 말고 다른 업적은 없었어?
    33.46s  <ret> 발화 (turn11 첫 프레임)
    33.61s  user  발화 끝
    33.96s  agent 발화 시작: <ret> 물론 있습니다. 진시황제는 만리장성을 연결하고…
    34.06s  ⚡SPAN 주입 [d'=0.60s / d_lead=4.11s]: First Qin Emperor.
    38.07s  agent 발화 끝
    38.16s  agent 발화 시작: 만리장성을 연결하고 통일된 문자, 화폐, 도량형을 정비하는 등 여러 업적을 남겼습니다. 그의 통치는 중국 역
    48.35s  agent 발화 끝
