# v3_abs_22_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_abs_22",
#     "name": "연진",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "late 40s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-09",
#       "category": "employer",
#       "text": "User works at a fintech startup."
#     },
#     {
#       "date": "2026-05-27",
#       "category": "gym",
#       "text": "User has a gym membership near the office."
#     },
#     {
#       "date": "2026-05-26",
#       "category": "emergency",
#       "text": "User's emergency contact is Yuna."
#     },
#     {
#       "date": "2026-05-05",
#       "category": "learning",
#       "text": "User is learning to bake sourdough."
#     },
#     {
#       "date": "2026-03-07",
#       "category": "dislike",
#       "text": "User can't stand cilantro."
#     },
#     {
#       "date": "2026-02-24",
#       "category": "home",
#       "text": "User's home address is 서울 용산구 이태원로 200."
#     },
#     {
#       "date": "2026-01-12",
#       "category": "wake",
#       "text": "User usually wakes up around 7:30am."
#     },
#     {
#       "date": "2025-12-11",
#       "category": "phone",
#       "text": "User uses a Galaxy Z Flip."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-30",
#       "title": "Planning a dinner party",
#       "bullets": [
#         "hosting eight friends on Saturday",
#         "one guest is gluten-free"
#       ]
#     },
#     {
#       "date": "2026-05-25",
#       "title": "Selling a used bike",
#       "bullets": [
#         "a 3-year-old road bike",
#         "asking around 400k won"
#       ]
#     },
#     {
#       "date": "2026-03-07",
#       "title": "Planning a wedding",
#       "bullets": [
#         "guest list around 80 people",
#         "comparing two venues for next May"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 슬라브어 중에서 가장 많이 쓰이는 언어가 뭘까요? | S2 동유럽에만 쓰이는 건가요? | S3 음, 러시아어 말고 다른… | S4 … 폴란드어나 체코어도 슬라브어라고 들었는데, 그건 맞나요?

     0.00s  user  발화 시작: 슬라브어 중에서 가장 많이 쓰이는 언어가 뭘까요?
     4.19s  <ret> 발화 (turn1 첫 프레임)
     4.47s  agent 발화 시작: <ret> 죄송해요, 어떤 슬라브어가 가장 흔한지는 알 수 없네요.
     4.47s  user  발화 끝
     5.28s  ⚡SPAN 주입 [d'=1.09s / d_lead=5.11s]: (no information found)
     9.58s  user  발화 시작: 정말요?
     9.58s  agent 발화 끝
    10.21s  user  발화 시작: 아, 그렇군요. 그럼 러시아어는 슬라브어에 속하나요?
    10.21s  user  발화 끝
    13.98s  <ret> 발화 (turn4 첫 프레임)
    14.04s  agent 발화 시작: <ret> 러시아어는 동슬라브어족에 속하며, 동유럽 러시아인들이 사용하는 언어입니다.
    14.04s  user  발화 끝
    15.23s  ⚡SPAN 주입 [d'=1.26s / d_lead=4.47s]: Russian is an East Slavic language native to the Russians in Eastern E
    18.51s  user  발화 시작: 아.
    18.51s  agent 발화 끝
    19.15s  user  발화 시작: 동유럽에만 쓰이는 건가요?
    19.15s  user  발화 끝
    21.07s  agent 발화 시작: 러시아어는 러시아뿐만 아니라 카자흐스탄, 키르기스스탄 등에서도 널리 사용됩니다.
    21.07s  user  발화 끝
    26.17s  user  발화 시작: 네네.
    26.17s  agent 발화 끝
    26.81s  user  발화 시작: 음, 러시아어 말고 다른…
    26.81s  user  발화 끝
    29.37s  user  발화 시작: …슬라브어는 어떤 게 있나요? —
    29.37s  user  발화 끝
    32.56s  user  발화 시작: … 폴란드어나 체코어도 슬라브어라고 들었는데, 그건 맞나요?
    32.56s  user  발화 끝
    37.03s  agent 발화 시작: 네, 맞아요. 폴란드어와 체코어도 모두 슬라브어족에 속합니다. 서슬라브어에 해당하죠.
    37.03s  user  발화 끝
    42.77s  agent 발화 끝
