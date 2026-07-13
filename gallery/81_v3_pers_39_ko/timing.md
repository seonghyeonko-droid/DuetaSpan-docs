# v3_pers_39_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_pers_39",
#     "name": "도민",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "late 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-09",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-01-25",
#       "category": "hobby",
#       "text": "User is into alpine wildflower photography."
#     },
#     {
#       "date": "2025-11-20",
#       "category": "trip",
#       "text": "User is planning a trip to Iceland in December."
#     },
#     {
#       "date": "2025-11-11",
#       "category": "allergy",
#       "text": "User is allergic to cat dander."
#     },
#     {
#       "date": "2025-11-06",
#       "category": "pet",
#       "text": "User has a tabby cat named Luna."
#     },
#     {
#       "date": "2025-07-04",
#       "category": "diet",
#       "text": "User is gluten-free."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-01-09",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: 안녕하세요, 도민님. 저는 페아나예요. 여행과 휴식 계획을 도와드리는 에이전트랍니다.
     4.82s  user  발화 시작: 음.
     4.82s  agent 발화 끝
     5.36s  user  발화 시작: 혹시 여행 말고도 다른 것도 도와주세요? 좀 복잡한 일이 있어서요.
     5.36s  user  발화 끝
    10.72s  agent 발화 시작: 어떤 복잡한 일이신가요? 편하게 말씀해 주세요. 제가 도울 수 있는 부분이 있다면 최선을 다해 볼게요.
    10.72s  user  발화 끝
    18.76s  user  발화 시작: 음… 사실 다음 달에 부모님 결혼 기념일을 챙겨야 하는데, 뭘 해드리면 좋아하실지 감이 안 와서요.
    18.76s  agent 발화 끝
    26.79s  agent 발화 시작: 부모님 결혼 기념일이라니, 정말 뜻깊은 일이죠. 부모님은 평소에 어떤 걸 좋아하시는지, 어떤 시간을 함께 보
    26.79s  user  발화 끝
    36.98s  user  발화 시작: 응.
    36.98s  agent 발화 끝
    37.51s  agent 발화 시작: 부모님 취향을 알면 더 좋은 선물을 고를 수 있을 것 같아요. 혹시 특별히 싫어하시는 건 있으신가요?
    37.51s  user  발화 끝
    46.09s  agent 발화 끝
