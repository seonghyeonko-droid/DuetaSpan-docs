# v3_pers_41_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_pers_41",
#     "name": "도경",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "50s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-30",
#       "category": "pet",
#       "text": "User has a Golden Retriever named Max."
#     },
#     {
#       "date": "2026-03-08",
#       "category": "home",
#       "text": "User's home address is 경기 성남시 분당구 판교로 235."
#     },
#     {
#       "date": "2026-01-21",
#       "category": "diet",
#       "text": "User is pescatarian."
#     },
#     {
#       "date": "2025-10-14",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Korean BBQ."
#     },
#     {
#       "date": "2025-09-22",
#       "category": "allergy",
#       "text": "User is allergic to peanuts."
#     },
#     {
#       "date": "2025-06-12",
#       "category": "hobby",
#       "text": "User is into vintage synth collecting."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-02-06",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2025-06-30",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 혹시 어떤 일을 하는 분이세요? | S2 사실 요즘 계속 미루고 있는 일이 있어서… 자꾸 마음이 불편해 | S3 음… 새로운 프로젝트인데, 시작할 엄두가 안 나요. 실패할까  | S4 Dura님 말씀이 맞아요. 작은 것부터 시작해 봐야겠네요.

     0.00s  agent 발화 시작: 안녕하세요, 도경님. 저는 Dura예요.
     2.58s  agent 발화 끝
     3.60s  user  발화 시작: 혹시 어떤 일을 하는 분이세요?
     5.06s  agent 발화 시작: 저는 주로 일상생활에서 조금 더 편안하게, 그리고 생산적으로 지낼 수 있도록 돕는 역할을 해요. 마치 마음의
     5.25s  user  발화 끝
     8.02s  user  발화 시작: 맞아요.
     8.70s  user  발화 끝
    14.58s  agent 발화 시작: 요즘 뭔가 마음이 복잡하거나, 해야 할 일들이 산처럼 느껴지시나요? 때로는 잠시 멈춰서 자신을 돌아보는 시간
    14.60s  agent 발화 끝
    23.38s  agent 발화 끝
    23.44s  user  발화 시작: 사실 요즘 계속 미루고 있는 일이 있어서… 자꾸 마음이 불편해요.
    27.66s  agent 발화 시작: 미루는 일 때문에 힘드시군요. 어떤 일인지 말씀해 주실 수 있으세요? 혹시 그 일이 왜 자꾸 미뤄지는지, 어
    27.84s  user  발화 끝
    37.35s  agent 발화 끝
    37.43s  user  발화 시작: 음… 새로운 프로젝트인데, 시작할 엄두가 안 나요. 실패할까 봐 걱정되고, 완벽하게 해내야 할 것 같아서…
    44.07s  agent 발화 시작: 새로운 프로젝트라니, 정말 멋진 도전이네요. 완벽해야 한다는 생각 때문에 시작이 어려운 건 흔한 일이에요. 
    44.15s  user  발화 끝
    55.47s  agent 발화 끝
    55.60s  user  발화 시작: Dura님 말씀이 맞아요. 작은 것부터 시작해 봐야겠네요.
    58.78s  agent 발화 시작: 맞아요, 도경님. 작은 성공들이 모여 큰 변화를 만들어낼 수 있어요. 너무 조급해하지 마시고, 자신을 믿으면
    58.79s  user  발화 끝
    67.83s  agent 발화 끝
