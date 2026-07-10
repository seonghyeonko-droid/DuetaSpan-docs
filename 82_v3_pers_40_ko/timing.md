# v3_pers_40_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_pers_40",
#     "name": "예안",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "late 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-03-22",
#       "category": "pet",
#       "text": "User has a Beagle named Rusty."
#     },
#     {
#       "date": "2026-02-05",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-01-24",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     },
#     {
#       "date": "2025-07-27",
#       "category": "allergy",
#       "text": "User is allergic to pollen."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-30",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2025-10-03",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 헌 씨… 음, 솔직히 요즘 너무 불안하고 초조해서 어떻게 해야 | S2 사실… 취업 때문에 너무 걱정돼요. 계속 떨어지고, 앞으로 어 | S3 …헌 씨, 혹시 저처럼 불안감을 느끼는 사람들이 많나요? | S4 그렇군요… 다른 사람들도 다 비슷한 고민을 하고 있다는 게 조

     0.00s  agent 발화 시작: 예안 씨, 안녕하세요. 저는 여러분의 마음 건강을 돕는 상담사, 헌입니다. 오늘 하루는 어떠셨어요?
     7.74s  user  발화 시작: 헌 씨… 음, 솔직히 요즘 너무 불안하고 초조해서 어떻게 해야 할지 모르겠어요.
     7.83s  agent 발화 끝
    12.85s  agent 발화 시작: 불안하고 초조하시다니, 마음이 많이 힘드시겠네요. 어떤 점이 가장 불안하신가요? 구체적으로 말씀해 주시면 함
    13.06s  user  발화 끝
    22.07s  agent 발화 끝
    22.44s  user  발화 시작: 사실… 취업 때문에 너무 걱정돼요. 계속 떨어지고, 앞으로 어떻게 될지 막막하고—
    28.56s  user  발화 시작: …헌 씨, 혹시 저처럼 불안감을 느끼는 사람들이 많나요?
    28.69s  user  발화 끝
    32.42s  agent 발화 시작: 많은 분들이 비슷한 감정을 느끼십니다. 불안은 흔한 감정이고, 특히 미래에 대한 불확실성이 클 때 더욱 심해
    32.58s  user  발화 끝
    37.50s  user  발화 시작: 네.
    37.90s  user  발화 끝
    40.26s  user  발화 시작: 그렇군요… 다른 사람들도 다 비슷한 고민을 하고 있다는 게 조금 위로가 되네요.
    40.53s  agent 발화 끝
    45.25s  user  발화 끝
