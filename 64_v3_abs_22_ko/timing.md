# v3_abs_22_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_abs_22",
#     "name": "수완",
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
#       "date": "2026-05-22",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Korean BBQ."
#     },
#     {
#       "date": "2026-04-17",
#       "category": "trip",
#       "text": "User is planning a trip to Switzerland in May."
#     },
#     {
#       "date": "2025-11-15",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2025-09-25",
#       "category": "allergy",
#       "text": "User is allergic to penicillin."
#     },
#     {
#       "date": "2025-09-07",
#       "category": "diet",
#       "text": "User is vegetarian."
#     },
#     {
#       "date": "2025-08-14",
#       "category": "pet",
#       "text": "User has a Poodle named Coco."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-07-09",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 필리핀에서 시작된 프로젝트 이름이 뭐였죠?
     2.26s  <ret> 발화 (turn1 첫 프레임)
     2.54s  agent 발화 시작: <ret> 아쉽게도 그 프로젝트에 대한 정보는 찾을 수가 없네요. 혹시 다른 프로젝트를 말씀하시는 걸까요?
     2.54s  user  발화 끝
     3.35s  ⚡SPAN 주입 [d'=1.09s / d_lead=6.60s]: (no information found)
     9.13s  user  발화 시작: 음, 아무래도 기억이 잘 안 나네요.
     9.13s  agent 발화 끝
    12.18s  agent 발화 시작: 괜찮아요, 기억이 안 나는 건 흔한 일이랍니다. 혹시 프로젝트의 종류나 대략적인 시기를 알려주시면 좀 더 쉽
    12.18s  user  발화 끝
    22.33s  user  발화 시작: 그건… 잘 모르겠어요. 그냥 예전에 들었던 것 같아요.
    22.33s  agent 발화 끝
    26.39s  agent 발화 시작: 그렇군요. 그럼 다른 이야기를 해볼까요? 지금 기분은 어떠세요?
    26.39s  user  발화 끝
    30.45s  agent 발화 끝
