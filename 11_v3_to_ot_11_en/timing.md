# v3_to_ot_11_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_to_ot_11",
#     "name": "Toaira",
#     "location": {
#       "city": "Tokyo",
#       "country": "Japan",
#       "timezone": "Asia/Tokyo (JST, UTC+9)",
#       "currency": "JPY (¥)"
#     },
#     "nationality": "Japanese",
#     "gender": "non-binary",
#     "age_range": "40s",
#     "language": "Japanese"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-07-24",
#       "category": "allergy",
#       "text": "User is allergic to penicillin."
#     },
#     {
#       "date": "2026-07-09",
#       "category": "hobby",
#       "text": "User is into home fermentation."
#     },
#     {
#       "date": "2026-05-28",
#       "category": "trip",
#       "text": "User is planning a trip to Iceland in December."
#     },
#     {
#       "date": "2026-03-14",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     },
#     {
#       "date": "2026-02-21",
#       "category": "work",
#       "text": "User works as a software engineer."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-14",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2026-03-23",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2026-01-12",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 I was just wondering, has that hap | S2 Wow, that’s… longer ago than I tho | S3 Hey, did you remember to take the  | S4 Sorry about that. So, Paxton, huh?

     0.00s  user  발화 시작: I was just wondering, has that happened to the A’s recently?
     4.36s  <ret> 발화 (turn1 첫 프레임)
     4.75s  agent 발화 시작: <ret> That’s a good question, and it’s happened— it occurred
     4.76s  user  발화 끝
     5.48s  ⚡SPAN 주입 [d'=1.12s / d_lead=2.55s]: The last time the Oakland A’s were no-hit was April 21, 2018.
    10.22s  agent 발화 끝
    10.57s  user  발화 시작: Wow, that’s… longer ago than I thought. Who pitched it?
    14.05s  <ret> 발화 (turn3 첫 프레임)
    14.18s  user  발화 끝
    14.29s  agent 발화 시작: <ret> I can certainly look that up for you.
    15.02s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.08s]: James Paxton pitched a no-hitter against the Oakland Athletics on Apri
    16.29s  agent 발화 시작: James Paxton pitched the no-hitter against the A’s on that d
    16.36s  agent 발화 끝
    19.42s  user  발화 시작: Hey, did you remember to take the chicken out?
    19.99s  agent 발화 끝
    21.68s  user  발화 시작: Sorry about that. So, Paxton, huh? He’s still playing?
    21.77s  user  발화 끝
    25.10s  agent 발화 시작: [laugh] It’s alright, we all have things on our minds. Yes, 
    25.23s  user  발화 끝
    28.00s  <ret> 발화 (turn8 첫 프레임)
    28.39s  agent 발화 시작: <ret> James Paxton currently pitches— he now plays for the L
    28.47s  agent 발화 끝
    28.71s  ⚡SPAN 주입 [d'=0.72s / d_lead=1.58s]: James Paxton currently plays for the Los Angeles Dodgers.
    33.52s  agent 발화 끝
