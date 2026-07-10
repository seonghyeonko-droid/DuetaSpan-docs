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


     0.00s  agent 발화 시작: 노연 씨, 안녕하세요. 저는 후나르예요. 새로운 도시에서 안정감을 찾도록 돕는 웰니스 코치입니다. 부산으로 
    10.62s  agent 발화 끝
    10.95s  user  발화 시작: 어머, 코치라고 하시니까 뭔가 좀 딱딱한 느낌인데요. 저는 그냥 편하게 이야기하고 싶어요.
    15.53s  agent 발화 시작: 아, 그러셨군요. 편하게 말씀하세요. 후나르라고 불러주시면 돼요. 딱딱하게 느껴지셨다면 죄송해요. 어떤 점이
    15.58s  user  발화 끝
    23.39s  user  발화 시작: 어어.
    24.02s  user  발화 끝
    26.11s  agent 발화 시작: 새로운 곳에 적응하는 건 쉽지 않죠. 특히 혼자라면 더 그럴 거예요. 혹시 지금 가장 불편한 점이 있으신가요
    26.15s  agent 발화 끝
    28.27s  user  발화 시작: 어.
    33.53s  user  발화 시작: 사실은… 주변에 아는 사람이 한 명도 없어서 외로워요. 혼자 밥 먹는 것도, 길 걸어 다니는 것도 좀 힘들고
    33.61s  agent 발화 끝
    41.32s  user  발화 끝
    41.77s  user  발화 끝
