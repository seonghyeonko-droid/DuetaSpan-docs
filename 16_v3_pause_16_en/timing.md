# v3_pause_16_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_pause_16",
#     "name": "Avery",
#     "location": {
#       "city": "Paris",
#       "country": "France",
#       "timezone": "Europe/Paris (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "French",
#     "gender": "non-binary",
#     "age_range": "late 20s",
#     "language": "French"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-14",
#       "category": "pet",
#       "text": "User has a tabby cat named Luna."
#     },
#     {
#       "date": "2026-03-10",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-02-10",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Korean BBQ."
#     },
#     {
#       "date": "2025-09-30",
#       "category": "allergy",
#       "text": "User is allergic to shellfish."
#     },
#     {
#       "date": "2025-05-27",
#       "category": "home",
#       "text": "User's home address is 293 Maple Drive."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-01",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2026-01-22",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Do you know who voiced… | S2 …that’s right, Josh Gad! I knew th | S3 Do you know… | S4 Okay, good to know. Thanks, Kion.

     0.00s  user  발화 시작: Do you know who voiced…
     1.97s  user  발화 시작: …Bailey in A Dog's Purpose? I’m…
     1.97s  user  발화 끝
     4.02s  <ret> 발화 (turn2 첫 프레임)
     4.34s  agent 발화 시작: <ret> It was Josh Gad who voiced Bailey in A Dog's Purpose, 
     4.34s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.92s]: Josh Gad voiced the character of Bailey in the 2017 film A Dog's Purpo
     4.34s  user  발화 끝
    10.25s  user  발화 시작: Yeah.
    10.25s  agent 발화 끝
    10.65s  user  발화 시작: …that’s right, Josh Gad! I knew that.
    10.65s  user  발화 끝
    13.41s  agent 발화 시작: It’s wonderful when a familiar voice brings a character to l
    13.41s  user  발화 끝
    18.54s  user  발화 시작: Yeah, totally.
    18.54s  agent 발화 끝
    19.33s  agent 발화 시작: Sometimes recognizing a voice can really deepen your connect
    19.33s  user  발화 끝
    24.06s  user  발화 시작: Do you know…
    24.06s  agent 발화 끝
    25.24s  user  발화 시작: …when the movie came out?
    25.24s  user  발화 끝
    26.81s  <ret> 발화 (turn10 첫 프레임)
    27.21s  agent 발화 시작: <ret> A Dog’s Purpose was released in the United States on J
    27.21s  ⚡SPAN 주입 [d'=0.96s / d_lead=5.92s]: A Dog's Purpose was released in the United States on January 27, 2017.
    27.21s  user  발화 끝
    33.13s  user  발화 시작: Yeah.
    33.13s  agent 발화 끝
    33.53s  user  발화 시작: Okay, good to know. Thanks, Kion.
    33.53s  user  발화 끝
    35.89s  user  발화 끝
