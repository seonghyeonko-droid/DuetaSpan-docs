# v3_pause_16_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_pause_16",
#     "name": "Leo",
#     "location": {
#       "city": "Berlin",
#       "country": "Germany",
#       "timezone": "Europe/Berlin (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "German",
#     "gender": "male",
#     "age_range": "late 30s",
#     "language": "German"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-14",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-05-25",
#       "category": "allergy",
#       "text": "User is allergic to peanuts."
#     },
#     {
#       "date": "2026-04-17",
#       "category": "trip",
#       "text": "User is planning a trip to Iceland in March."
#     },
#     {
#       "date": "2026-02-10",
#       "category": "hobby",
#       "text": "User is into rock climbing."
#     },
#     {
#       "date": "2025-10-03",
#       "category": "home",
#       "text": "User's home address is 873 Elm Street."
#     },
#     {
#       "date": "2025-07-21",
#       "category": "diet",
#       "text": "User is vegan."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-03-23",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2025-10-26",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 I was just wondering…… | S2 Wow, 2000? That’s… a long time ago | S3 I’m trying to remember… | S4 …shopping there back then…

     0.00s  user  발화 시작: I was just wondering……
     0.00s  <ret> 발화 (turn2 첫 프레임)
     0.05s  user  발화 시작: …when did St. Michael change to.
     0.05s  user  발화 끝
     0.13s  agent 발화 시작: <ret> It looks like St. Michael became Marks & Spencer in tw
     0.13s  ⚡SPAN 주입 [d'=0.23s / d_lead=0.23s]: In 2000, the British retailer Marks & Spencer acquired the St. Michael
     0.13s  user  발화 끝
     0.35s  user  발화 시작: Wow, 2000? That’s… a long time ago!
     0.35s  agent 발화 끝
     0.44s  agent 발화 시작: It really is! Sometimes big shifts feel gradual, but looking
     0.44s  user  발화 끝
     0.66s  user  발화 시작: I’m trying to remember…
     0.66s  agent 발화 끝
     0.71s  user  발화 시작: …shopping there back then…
     0.71s  user  발화 끝
     0.76s  agent 발화 시작: It’s wonderful to reflect on memories tied to places we know
     0.76s  user  발화 끝
     1.00s  agent 발화 끝
