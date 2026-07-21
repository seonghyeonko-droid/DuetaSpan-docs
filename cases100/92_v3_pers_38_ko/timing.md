# v3_pers_38_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_pers_38",
#     "name": "서빈",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "50s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-12",
#       "category": "employer",
#       "text": "User works at a research institute."
#     },
#     {
#       "date": "2026-03-23",
#       "category": "coffee",
#       "text": "User's usual coffee order is a flat white."
#     },
#     {
#       "date": "2026-03-20",
#       "category": "gym",
#       "text": "User has a gym membership near the station."
#     },
#     {
#       "date": "2026-03-04",
#       "category": "music",
#       "text": "User likes listening to a lo-fi jazz playlist."
#     },
#     {
#       "date": "2026-02-28",
#       "category": "airline",
#       "text": "User usually flies with Singapore Airlines."
#     },
#     {
#       "date": "2026-02-25",
#       "category": "commute",
#       "text": "User drives about 40 minutes each way."
#     },
#     {
#       "date": "2026-02-23",
#       "category": "dish",
#       "text": "User's go-to comfort dish is green curry."
#     },
#     {
#       "date": "2026-01-28",
#       "category": "schedule",
#       "text": "User has a 9-to-6 weekday schedule."
#     },
#     {
#       "date": "2025-12-08",
#       "category": "work",
#       "text": "User works as a midwife."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-03",
#       "title": "Planning a dinner party",
#       "bullets": [
#         "hosting eight friends on Saturday",
#         "one guest is gluten-free"
#       ]
#     },
#     {
#       "date": "2026-02-08",
#       "title": "Booking a Japan trip",
#       "bullets": [
#         "5 nights in Kyoto and Osaka in October",
#         "wants a JR Pass and a ryokan for one night"
#       ]
#     },
#     {
#       "date": "2026-01-02",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot next Tuesday",
#         "prefers Dr. Han at Bright Smile Clinic"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 그런데, 제가 뭘 어떻게 해야 할지 막막해서요. | S2 … 사실, 제가 전에 하던 일과는 완전히 다른 분야라서 자신감 | S3 그게 제일 큰 문제예요. 뭘 어떻게 시작해야 할지 감이 안 와 | S4 작은 성공 경험… 구체적으로 뭘 해야 할까요?

     0.00s  agent 발화 시작: 안녕하세요, 서빈님. 저는 멘이라고 해요. 새로운 직장에서 잘 적응하실 수 있도록 돕는 웰니스 코치랍니다.
     2.88s  user  발화 시작: 네.
     3.51s  user  발화 끝
     6.35s  agent 발화 끝
     6.49s  user  발화 시작: 그런데, 제가 뭘 어떻게 해야 할지 막막해서요.
    11.29s  agent 발화 시작: 새로운 시작이 불안하신 건 당연해요. 많은 분들이 처음엔 비슷한 감정을 느끼신답니다. 혹시 어떤 점이 가장 
    11.35s  user  발화 끝
    18.70s  agent 발화 끝
    19.66s  user  발화 시작: … 사실, 제가 전에 하던 일과는 완전히 다른 분야라서 자신감이 없어요.
    26.70s  agent 발화 시작: 아, 이전 경력과 다른 분야라니, 그럴 수 있죠—
    26.85s  user  발화 끝
    29.07s  user  발화 시작: 그게 제일 큰 문제예요. 뭘 어떻게 시작해야 할지 감이 안 와요.
    29.80s  agent 발화 끝
    35.84s  user  발화 끝
    36.03s  agent 발화 시작: 새로운 분야에 대한 막막함은 충분히 이해가 가요. 마치 처음 배우는 악기를 다루는 것과 비슷하죠. 작은 성공
    39.84s  user  발화 시작: 네.
    40.57s  user  발화 끝
    45.35s  agent 발화 끝
    45.43s  user  발화 시작: 작은 성공 경험… 구체적으로 뭘 해야 할까요?
    50.62s  user  발화 끝
