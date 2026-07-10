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


     0.00s  agent 발화 시작: 노연 씨, 안녕하세요. 저는 후나르입니다. 새로운 도시에서 안정을 찾도록 돕는 웰니스 코치예요. 부산으로 오
     9.91s  user  발화 시작: 흐음… 코치라. 부산에 온 지는 한 달 정도 됐어요. 근데 저는 그냥 좀… 심란해서요.
     9.92s  agent 발화 끝
    16.36s  user  발화 끝
    16.63s  agent 발화 시작: 심란하시다니, 마음이 편치 않으신 것 같네요. 혹시 어떤 점이 가장 걱정되시는지 조금 더 말씀해 주실 수 있
    21.66s  user  발화 시작: 어어.
    22.30s  user  발화 끝
    23.34s  agent 발화 시작: 새로운 환경에 적응하는 건 쉽지 않죠. 특히 혼자라면 더욱 그럴 거예요. 지금 느끼시는 감정을 솔직하게 표현
    23.39s  agent 발화 끝
    26.05s  user  발화 시작: 어.
    26.69s  user  발화 끝
    32.52s  agent 발화 끝
    33.05s  user  발화 시작: 그냥… 모든 게 다 낯설고, 뭘 해야 할지 모르겠어요.
    37.64s  user  발화 끝
