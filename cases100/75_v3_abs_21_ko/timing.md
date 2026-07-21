# v3_abs_21_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_abs_21",
#     "name": "유슬",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "early 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-17",
#       "category": "medication",
#       "text": "User takes antihistamines in spring."
#     },
#     {
#       "date": "2026-02-22",
#       "category": "bloodtype",
#       "text": "User's blood type is O+."
#     },
#     {
#       "date": "2026-02-16",
#       "category": "dislike",
#       "text": "User can't stand liver."
#     },
#     {
#       "date": "2026-02-04",
#       "category": "employer",
#       "text": "User works at a fintech startup."
#     },
#     {
#       "date": "2026-02-01",
#       "category": "savings",
#       "text": "User is saving for paying off student loans."
#     },
#     {
#       "date": "2025-12-09",
#       "category": "allergy",
#       "text": "User is allergic to tree nuts."
#     },
#     {
#       "date": "2025-12-07",
#       "category": "diet",
#       "text": "User is pescatarian."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-11",
#       "title": "Renovating the bathroom",
#       "bullets": [
#         "budget of 6M won",
#         "wants a walk-in shower instead of a tub"
#       ]
#     },
#     {
#       "date": "2026-05-06",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing the Kia Niro hybrid and Hyundai Ioniq",
#         "wants under 30k miles and below 25M won"
#       ]
#     },
#     {
#       "date": "2026-02-06",
#       "title": "Meal-prep planning",
#       "bullets": [
#         "wants high-protein lunches under 600 calories",
#         "avoiding dairy this month"
#       ]
#     },
#     {
#       "date": "2026-01-08",
#       "title": "Planning a dinner party",
#       "bullets": [
#         "hosting eight friends on Saturday",
#         "one guest is gluten-free"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 안녕하세요, 빈 씨. 요즘 좀 의욕이 안 나요.
     2.85s  user  발화 끝
     3.30s  agent 발화 시작: 안녕하세요! 의욕이 없으시다니, 마음이 편치 않으시겠어요. 제가 빈이라고 해요.
     4.06s  agent 발화 끝
     4.19s  user  발화 시작: 네, 그렇죠. 뭘 해야 할지 모르겠어요.
     6.32s  <ret> 발화 (turn3 첫 프레임)
     6.75s  user  발화 끝
     6.83s  agent 발화 시작: <ret> 뭘 해야 할지 모르는 건 흔한 일이에요. 작은 것부터 시작해보는 건 어떨까요?
     8.26s  ⚡SPAN 주입 [d'=1.93s / d_lead=5.46s]: Motivation is the physiological or psychological process that gives pu
    12.29s  agent 발화 끝
    12.44s  agent 발화 시작: 동기 부여는 행동의 목적을 부여하는 생리적 또는 심리적 과정이라고 해요. [happy] 작은 성공 경험을 쌓
    16.22s  user  발화 시작: 음.
    16.48s  user  발화 끝
    20.59s  agent 발화 끝
    20.76s  agent 발화 시작: 혹시 최근에 즐거웠던 일이나 성취감을 느꼈던 일이 있으세요?
    22.88s  user  발화 시작: 네.
    23.47s  user  발화 끝
    24.59s  user  발화 시작: 음… 딱히 떠오르는 건 없네요.
    24.83s  agent 발화 끝
    27.67s  user  발화 끝
    27.85s  agent 발화 시작: 괜찮아요. 지금부터라도 찾아보면 된답니다.
    31.78s  agent 발화 끝
