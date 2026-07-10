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


     0.00s  agent 발화 시작: 재준님, 안녕하세요. 저는 재이아입니다. 힘든 시간들을 함께 걸어가는 분들을 돕는 역할을 하고 있어요. 편안
     6.85s  user  발화 시작: 응응.
     7.34s  user  발화 끝
    10.66s  agent 발화 끝
    10.85s  user  발화 시작: 재이아… 이름이 참 예쁘네요. 혹시, 심리 상담 같은 거 하시는 건가요?
    16.63s  agent 발화 시작: 이름에 대해 좋게 봐주셔서 감사합니다. 심리 상담이라고 딱 잘라 말하기는 어렵지만, 변화와 상실로 힘들어하는
    16.64s  user  발화 끝
    22.15s  user  발화 시작: 응.
    22.56s  user  발화 끝
    27.75s  agent 발화 시작: 슬픔은 개인마다 다르게 다가오기 때문에, 정해진 답은 없어요. 재준님께서는 지금 어떤 점이 가장 힘드신가요?
    28.00s  agent 발화 끝
    39.25s  agent 발화 끝
    39.64s  user  발화 시작: 아빠가 돌아가신 지 한 달 정도 됐어요. 아직도… 잘 모르겠어요. 뭘 해야 할지, 어떻게 해야 할지.
    47.57s  user  발화 끝
    47.69s  agent 발화 시작: 아버지의 부고를 들으니 마음이 아픕니다. 한 달은 슬픔을 받아들이기에 아주 짧은 시간이에요. 괜찮으시다면, 
    60.82s  agent 발화 끝
    61.02s  user  발화 시작: 그냥… 멍해요. 뭘 해야 할지, 뭘 먹어야 할지, 심지어 숨 쉬는 것도 가끔 힘들어요.
    68.48s  user  발화 끝
    68.71s  agent 발화 시작: 멍한 느낌, 정말 힘드시겠어요. 일상적인 일들조차 버겁게 느껴지는 건, 슬픔이 몸과 마음에 깊숙이 자리 잡았
    84.72s  agent 발화 끝
