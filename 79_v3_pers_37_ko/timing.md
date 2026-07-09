# v3_pers_37_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_pers_37",
#     "name": "Noah",
#     "location": {
#       "city": "Sydney",
#       "country": "Australia",
#       "timezone": "Australia/Sydney (AEDT, UTC+11)",
#       "currency": "AUD ($)"
#     },
#     "nationality": "Australian",
#     "gender": "male",
#     "age_range": "early 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-19",
#       "category": "work",
#       "text": "User works as a nurse."
#     },
#     {
#       "date": "2026-06-02",
#       "category": "hobby",
#       "text": "User is into marathon training."
#     },
#     {
#       "date": "2026-04-04",
#       "category": "allergy",
#       "text": "User is allergic to penicillin."
#     },
#     {
#       "date": "2026-03-15",
#       "category": "trip",
#       "text": "User is planning a trip to Vietnam in August."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-03-17",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: 노아 씨, 안녕하세요. 저는 후나르예요. 새로운 도시에서 정착하는 걸 도와드리는 웰니스 코치랍니다. 시드니는
     9.76s  user  발화 시작: 음… 후나르라고 하니까 뭔가 마음이 편안해지는 것 같아요. 근데 웰니스 코치라… 정확히 뭘 하는 거예요?
     9.83s  agent 발화 끝
    16.38s  user  발화 끝
    16.52s  agent 발화 시작: [curious] 웰니스 코치는 몸과 마음의 균형을 찾도록 돕는 역할을 해요. 새로운 환경에 적응하면서 느끼
    31.64s  agent 발화 끝
    32.01s  user  발화 시작: 아, 그렇군요. 근데 시드니는 정말 살기 좋은 도시예요? 솔직히 좀 걱정되기도 하거든요.
    37.80s  user  발화 끝
    37.93s  agent 발화 시작: 시드니가 좋은 도시는 분명해요. 하지만 새로운 곳에 온다는 건 늘 설렘과 함께 걱정이 따르는 일이죠. 어떤 
    52.31s  agent 발화 끝
