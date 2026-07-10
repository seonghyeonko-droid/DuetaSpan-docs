# v3_to_ot_12_cs — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_to_ot_12",
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
#       "date": "2025-11-15",
#       "category": "diet",
#       "text": "User is pescatarian."
#     },
#     {
#       "date": "2025-10-20",
#       "category": "pet",
#       "text": "User has a Poodle named Coco."
#     },
#     {
#       "date": "2025-09-09",
#       "category": "trip",
#       "text": "User is planning a trip to Iceland in May."
#     },
#     {
#       "date": "2025-07-28",
#       "category": "work",
#       "text": "User works as a physical therapist."
#     },
#     {
#       "date": "2025-06-30",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2025-05-28",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is sushi."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-12-11",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2025-11-09",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2025-06-28",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 캐나다 총리님은 어디에 사세요? | S2 혹시 거기가 큰 곳이에요? | S3 총리님께서 항상 그곳에 사셨던 건가요? | S4 혹시 일반인에게도 개방되어 있나요?

     0.00s  user  발화 시작: 캐나다 총리님은 어디에 사세요?
     2.61s  <ret> 발화 (turn1 첫 프레임)
     2.81s  user  발화 끝
     2.92s  agent 발화 시작: <ret> 아, 미리 계획하시는 모습이 보기 좋네요. 공식 관저는 오타와에 있는 스세스 드라이브 24번지예요
     2.93s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.57s]: The prime minister of Canada officially resides at 24 Sussex Drive in 
     7.45s  user  발화 시작: 네네.
     8.09s  user  발화 끝
    13.49s  agent 발화 끝
    13.65s  user  발화 시작: 혹시 거기가 큰 곳이에요?
    15.91s  user  발화 끝
    16.18s  agent 발화 시작: 정말 큰 곳이에요! 꽤 유명한 랜드마크이기도 하구요.
    18.56s  user  발화 시작: 네네.
    19.20s  user  발화 끝
    19.76s  user  발화 시작: 총리님께서 항상 그곳에 사셨던 건가요?
    20.30s  agent 발화 끝
    22.61s  <ret> 발화 (turn7 첫 프레임)
    23.00s  agent 발화 시작: <ret> 천구백오십 년부터 공식 관저로 사용되었지만, 잠시 사용하지 않은 기간도 있었답니다.
    23.01s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.58s]: 24 Sussex Drive has been the official residence of the prime minister 
    23.05s  user  발화 끝
    28.78s  user  발화 시작: 혹시 일반인에게도 개방되어 있나요?
    29.59s  agent 발화 끝
    31.36s  user  발화 끝
    31.46s  <ret> 발화 (turn9 첫 프레임)
    31.78s  agent 발화 시작: <ret> 안타깝게도 보통 일반인에게는 공개 투어를 하지 않는 곳이에요. 주로 업무용 및 사적인 거주 공간이
    31.78s  ⚡SPAN 주입 [d'=1.36s / d_lead=11.46s]: 24 Sussex Drive is not generally open for public tours.
    43.23s  agent 발화 끝
