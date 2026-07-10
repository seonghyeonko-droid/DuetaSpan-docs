# v3_pers_37_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_pers_37",
#     "name": "노연",
#     "location": {
#       "city": "Busan",
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
#       "date": "2026-02-09",
#       "category": "work",
#       "text": "User works as a nurse."
#     },
#     {
#       "date": "2026-01-06",
#       "category": "hobby",
#       "text": "User is into marathon training."
#     },
#     {
#       "date": "2025-09-20",
#       "category": "allergy",
#       "text": "User is allergic to penicillin."
#     },
#     {
#       "date": "2025-08-17",
#       "category": "trip",
#       "text": "User is planning a trip to Vietnam in August."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-02-05",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: 노연 씨, 안녕하세요. 저는 여러분의 정착을 돕는 웰니스 코치, 후나예요. 부산으로 오신 걸 환영드리고, 새
    11.72s  user  발화 시작: 후나라고 하셨죠? 이름이 좀 특이하시네요. 혹시… 일본 이름인가요?
    11.82s  agent 발화 끝
    15.74s  user  발화 끝
    15.87s  agent 발화 시작: [curious] 아, 물어봐 주셔서 고마워요. 후나는 제 부모님께서 지어주신 이름이에요. 특별한 의미가 담
    24.61s  user  발화 시작: 어어.
    25.24s  user  발화 끝
    27.41s  user  발화 시작: 부산에 온 지 얼마 안 됐는데, 사실 아직 뭘 해야 할지 잘 모르겠어요. 그냥 집에서만 지내는 것 같고…
    27.65s  agent 발화 끝
    33.39s  user  발화 끝
    33.74s  agent 발화 시작: 새로운 곳에 오셨을 때는 그런 감정을 느끼시는 게 당연해요. 낯선 환경에 적응하는 데는 시간이 필요하니까요.
    44.55s  agent 발화 끝
