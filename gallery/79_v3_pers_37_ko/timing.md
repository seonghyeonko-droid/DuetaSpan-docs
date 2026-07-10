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


     0.00s  agent 발화 시작: 노연 씨, 안녕하세요. 저는 후나르예요. 부산으로 이사 오신 걸 축하드리고, 새로운 환경에 잘 적응하실 수 
     8.43s  agent 발화 끝
     9.38s  user  발화 시작: 혹시 제가 뭘 해야 할지 알려주는 챗봇 같은 건가요?
    12.93s  agent 발화 시작: 챗봇이라기보다는, 곁에서 편안하게 이야기 나눌 수 있는 분이라고 생각하시면 좋을 것 같아요. 새로운 곳에 오
    13.04s  user  발화 끝
    21.18s  user  발화 시작: 어어.
    22.00s  user  발화 끝
    23.91s  agent 발화 시작: 새로운 동네에 적응하는 건 기대되는 일도 많지만, 동시에 낯설고 불안한 마음이 드는 건 당연해요. 혹시 어떤
    23.91s  agent 발화 끝
    26.97s  user  발화 시작: 어.
    27.61s  user  발화 끝
    34.04s  user  발화 시작: 글쎄요… 혼자 카페에 가는 건 좋아하는데, 부산에는 아는 사람이 아무도 없어서 좀 그렇네요.
    34.26s  agent 발화 끝
    40.02s  user  발화 끝
    40.05s  agent 발화 시작: 혼자 카페에 가는 걸 좋아하시는군요. 부산에는 예쁜 카페가 정말 많아요. 혼자 시간을 보내는 것도 좋지만, 
    51.55s  agent 발화 끝
