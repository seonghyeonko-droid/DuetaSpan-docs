# v3_to_ot_12_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
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

# EXAMINER(FDB-v2) 단계: S1 Where does the prime minister of C | S2 Oh, is it a big place? | S3 Has the prime minister *always* li | S4 …but is it open to the public at a

     0.00s  user  발화 시작: Where does the prime minister of Canada live?
     1.99s  <ret> 발화 (turn1 첫 프레임)
     2.21s  agent 발화 시작: <ret> Well, it’s lovely to plan ahead—the official residence
     2.23s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.37s]: The prime minister of Canada officially resides at 24 Sussex Drive in 
     2.49s  user  발화 끝
     5.36s  user  발화 시작: Mm-hmm.
     5.85s  user  발화 끝
     9.50s  user  발화 시작: Oh, is it a big place?
     9.58s  agent 발화 끝
    10.89s  agent 발화 시작: It certainly is! It’s quite a landmark, really.
    10.92s  user  발화 끝
    12.49s  user  발화 시작: Mm-hmm.
    12.99s  user  발화 끝
    13.71s  agent 발화 끝
    14.71s  user  발화 시작: Has the prime minister *always* lived there?
    17.11s  <ret> 발화 (turn7 첫 프레임)
    17.30s  user  발화 끝
    17.35s  agent 발화 시작: <ret> It’s been the official residence since nineteen fifty—
    17.35s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.75s]: 24 Sussex Drive has been the official residence of the prime minister 
    22.48s  user  발화 시작: …but is it open to the public at all?
    23.10s  agent 발화 끝
    24.54s  <ret> 발화 (turn9 첫 프레임)
    24.56s  user  발화 끝
    24.94s  agent 발화 시작: <ret> It isn't usually open for public tours, unfortunately—
    24.94s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.04s]: 24 Sussex Drive is not generally open for public tours.
    33.98s  agent 발화 끝
