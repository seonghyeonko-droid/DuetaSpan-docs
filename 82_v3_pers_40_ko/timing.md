# v3_pers_40_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_pers_40",
#     "name": "Kim",
#     "location": {
#       "city": "San Francisco",
#       "country": "United States",
#       "timezone": "America/Los_Angeles (PST, UTC-8)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "non-binary",
#     "age_range": "50s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-08-04",
#       "category": "home",
#       "text": "User's home address is 165 Cedar Lane."
#     },
#     {
#       "date": "2026-07-16",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Thai."
#     },
#     {
#       "date": "2026-07-13",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-06-19",
#       "category": "trip",
#       "text": "User is planning a trip to Switzerland in December."
#     },
#     {
#       "date": "2026-02-21",
#       "category": "diet",
#       "text": "User is gluten-free."
#     },
#     {
#       "date": "2026-02-14",
#       "category": "work",
#       "text": "User works as a software engineer."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-24",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2026-03-15",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: 김님, 만나 뵙게 되어 정말 기뻐요. 저는 아라라고 해요. 돈 문제나 예산 때문에 걱정이 많으신 분들을 돕는
     9.18s  agent 발화 끝
     9.32s  user  발화 시작: [surprised] 아라요? 이름이 꽤 독특하네요. 돈 문제는… 솔직히 매일매일 골치 아파요. 어떻게 시작
    17.53s  user  발화 끝
    17.54s  agent 발화 시작: 매일 힘드시겠어요. 막막하다는 말씀, 정말 공감돼요. 혹시 지금 가장 신경 쓰이는 부분이 있으신가요? 구체적
    27.28s  agent 발화 끝
    27.60s  user  발화 시작: 음… 솔직히 말하면, 이번 달 카드값이 너무 많이 나왔어요. 다음 달에는 어떻게 해야 할지 벌써부터 걱정이에
    35.90s  user  발화 끝
    36.12s  agent 발화 시작: 카드값이 많이 나와서 걱정이시군요. 괜찮아요, 흔히 있는 일이니까요. 혹시 평소에 예산을 세우는 편이신가요,
    45.62s  agent 발화 끝
