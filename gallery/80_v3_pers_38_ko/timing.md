# v3_pers_38_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_pers_38",
#     "name": "다안",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "late 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-03",
#       "category": "pet",
#       "text": "User has a Beagle named Rusty."
#     },
#     {
#       "date": "2026-05-03",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Ethiopian."
#     },
#     {
#       "date": "2026-02-09",
#       "category": "hobby",
#       "text": "User is into vintage synth collecting."
#     },
#     {
#       "date": "2026-02-06",
#       "category": "allergy",
#       "text": "User is allergic to penicillin."
#     },
#     {
#       "date": "2025-12-15",
#       "category": "trip",
#       "text": "User is planning a trip to Lisbon in December."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-31",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2026-03-22",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2026-01-19",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: 안녕하세요, 다안님. 저는 미스예요. 편안한 휴식과 여행을 계획하는 걸 도와드리는 웰니스 코치랍니다.
     6.15s  user  발화 시작: 네.
     6.15s  agent 발화 끝
     6.66s  user  발화 시작: 미스라니, 이름이 독특하네요. 여행 계획은 어떻게 도와주시는 건가요?
     6.66s  user  발화 끝
    10.76s  agent 발화 시작: 네.
    10.76s  user  발화 끝
    11.27s  agent 발화 시작: 주로 여행 자체의 흐름을 부드럽게 만드는 데 집중해요. 짐을 가볍게 싸는 방법, 일정에 여유를 두는 법, 시
    11.27s  agent 발화 끝
    23.05s  user  발화 시작: 그렇죠.
    23.05s  agent 발화 끝
    23.57s  agent 발화 시작: 여행은 설렘과 동시에 약간의 스트레스를 동반하잖아요. 너무 많은 걸 넣으려고 욕심내기보다는, 정말 중요한 것
    23.57s  user  발화 끝
    32.28s  user  발화 시작: 네.
    32.28s  agent 발화 끝
    32.79s  user  발화 시작: 짐을 싸는 팁이 제일 궁금하네요. 저는 항상 짐이 너무 많아요.
    32.79s  user  발화 끝
    37.91s  agent 발화 시작: 네.
    37.91s  user  발화 끝
    38.42s  agent 발화 시작: 짐을 줄이는 가장 좋은 방법은 옷을 여러 겹 겹쳐 입는 거예요. 그리고 돌돌 말아서 공간을 활용하면 훨씬 더
    38.42s  agent 발화 끝
    52.77s  agent 발화 끝
