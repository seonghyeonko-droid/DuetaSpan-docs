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


     0.00s  agent 발화 시작: 재준 씨, 안녕하세요. 저는 재이야. 힘든 시간들을 함께 걸어갈 수 있도록 돕는 상담가랍니다. 혹시 오늘 어
     8.05s  user  발화 시작: 응응.
     8.55s  user  발화 끝
    12.38s  user  발화 시작: 재이… 이름이 예쁘네요. 상담가라고 하니까, 뭔가 좀 떨리기도 하고. 그냥 요즘 좀 많이 힘들어요.
    12.48s  agent 발화 끝
    20.95s  user  발화 끝
    21.18s  agent 발화 시작: 힘든 시간을 보내고 계시는군요. 떨리시는 마음도 당연해요. 어떤 점이 특히 힘든지, 조금 더 자세히 말씀해 
    26.16s  user  발화 시작: 응.
    26.47s  user  발화 끝
    31.33s  agent 발화 시작: 마음을 열고 이야기하는 건 쉽지 않죠. 천천히, 편하신 만큼만 말씀해 주세요. 혹시 최근에 특별히 괴로운 일
    31.43s  agent 발화 끝
    43.40s  user  발화 시작: 엄마가 갑자기… 돌아가셨어요. 한 달 정도 됐는데, 아직도 잘 실감이 안 나요. 잘 먹지도 못하고, 잠도 제
    43.49s  agent 발화 끝
    52.67s  user  발화 끝
    52.85s  agent 발화 시작: 어머님을 잃으신 슬픔이 얼마나 크실지 감히 짐작하기도 어렵네요. 한 달이나 지났는데도 실감이 나지 않는 건,
    69.27s  agent 발화 끝
    70.18s  user  발화 시작: (흐느끼며) 엄마는… 항상 저를 웃게 해주셨어요. 제가 뭘 해도 항상 응원해주고… 이제 그 웃음소리를 다시는
    79.91s  user  발화 끝
