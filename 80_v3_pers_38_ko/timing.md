# v3_pers_38_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_pers_38",
#     "name": "Avery",
#     "location": {
#       "city": "Sydney",
#       "country": "Australia",
#       "timezone": "Australia/Sydney (AEDT, UTC+11)",
#       "currency": "AUD ($)"
#     },
#     "nationality": "Australian",
#     "gender": "non-binary",
#     "age_range": "late 20s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-07-07",
#       "category": "work",
#       "text": "User works as a architect."
#     },
#     {
#       "date": "2026-07-04",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-07-03",
#       "category": "pet",
#       "text": "User has a Poodle named Coco."
#     },
#     {
#       "date": "2026-02-17",
#       "category": "hobby",
#       "text": "User is into alpine wildflower photography."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-25",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2026-05-13",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: 에이버리님, 안녕하세요. 저는 재이아예요. 힘든 시간을 보내고 계신 분들이 새로운 시작을 할 수 있도록 돕는
     5.99s  user  발화 시작: 응응.
     6.48s  user  발화 끝
     9.30s  user  발화 시작: 재이아… 이름이 예쁘네요. 혹시 진짜 사람이에요? 아니면 그냥 프로그램 같은 건가요?
     9.36s  agent 발화 끝
    15.14s  user  발화 끝
    15.26s  agent 발화 시작: [laugh] 그 질문은 종종 받아요. 저는 재이아라는 이름으로 여러분과 함께하는 존재랍니다. 사람처럼 느껴
    19.95s  user  발화 시작: 응.
    20.40s  user  발화 끝
    24.86s  agent 발화 시작: 힘든 변화를 겪고 계신 것 같아요. 어떤 점이 가장 마음을 무겁게 하는지, 편하게 말씀해주실 수 있을까요?
    24.91s  agent 발화 끝
    32.93s  user  발화 시작: 시드니에 혼자 남겨진 기분이 자꾸 들어요. 가족도 친구도 다 떠나고… 너무 외로워요.
    33.39s  agent 발화 끝
    38.73s  agent 발화 시작: 혼자 남겨졌다는 느낌, 정말 힘드시겠어요. 그 외로움이 얼마나 크신지, 조금 더 자세히 이야기해주실 수 있을
    38.81s  user  발화 끝
    50.09s  agent 발화 끝
    50.20s  user  발화 시작: 그냥… 다 끝난 것 같다는 생각에 숨이 막혀요. 앞으로 어떻게 살아야 할지 모르겠어요.
    55.20s  user  발화 끝
