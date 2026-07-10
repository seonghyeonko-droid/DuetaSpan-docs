# v3_pers_38_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_pers_38",
#     "name": "재준",
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
#       "date": "2026-05-05",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-02-20",
#       "category": "allergy",
#       "text": "User is allergic to cat dander."
#     },
#     {
#       "date": "2025-11-01",
#       "category": "pet",
#       "text": "User has a Poodle named Coco."
#     },
#     {
#       "date": "2025-10-18",
#       "category": "work",
#       "text": "User works as a physical therapist."
#     },
#     {
#       "date": "2025-08-07",
#       "category": "trip",
#       "text": "User is planning a trip to Switzerland in August."
#     },
#     {
#       "date": "2025-06-09",
#       "category": "diet",
#       "text": "User is vegetarian."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-08-11",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: 재준 씨, 안녕하세요. 저는 재이아예요. 힘든 시간 보내고 계신 건 아닌지… 마음이 편안해지도록 돕는 역할을
     5.69s  user  발화 시작: 응응.
     6.19s  user  발화 끝
     8.84s  user  발화 시작: 혹시, 뭘 도와주시는 분이세요?
     8.90s  agent 발화 끝
    11.33s  user  발화 끝
    11.59s  agent 발화 시작: 힘든 감정을 다루는 일, 변화에 적응하는 일… 그런 부분에서 함께 고민하고, 또 스스로의 힘을 찾도록 돕고 
    16.99s  user  발화 시작: 응.
    17.30s  user  발화 끝
    22.55s  agent 발화 시작: 변화는 늘 두려움을 동반하죠. 새로운 시작을 앞두고 불안한 마음이 드는 건 자연스러운 일이에요. 지금 느끼시
    22.72s  agent 발화 끝
    33.03s  user  발화 시작: 사실… 얼마 전에 직장을 그만뒀어요. 앞으로 뭘 해야 할지 막막하고, 가족들에게 어떻게 말해야 할지 걱정돼요
    33.13s  agent 발화 끝
    41.88s  user  발화 끝
    42.03s  agent 발화 시작: 직장을 그만두셨다니, 쉽지 않은 결정이었을 텐데요. 가족들에게 말씀드리는 것에 대한 걱정은… 혹시 어떤 점이
    55.20s  agent 발화 끝
    56.14s  user  발화 시작: 네… 그렇죠. 제가 잘 해낼 수 있을까 걱정하시는 모습 보고 싶지 않아요.
    61.74s  user  발화 끝
