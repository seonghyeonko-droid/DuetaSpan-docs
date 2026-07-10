# v3_to_ot_11_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_to_ot_11",
#     "name": "Aiden",
#     "location": {
#       "city": "London",
#       "country": "United Kingdom",
#       "timezone": "Europe/London (GMT, UTC+0)",
#       "currency": "GBP (£)"
#     },
#     "nationality": "British",
#     "gender": "male",
#     "age_range": "late 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-03-06",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-02-22",
#       "category": "diet",
#       "text": "User is vegetarian."
#     },
#     {
#       "date": "2025-11-06",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Ethiopian."
#     },
#     {
#       "date": "2025-09-23",
#       "category": "pet",
#       "text": "User has a Beagle named Rusty."
#     },
#     {
#       "date": "2025-09-10",
#       "category": "hobby",
#       "text": "User is into home fermentation."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-11-21",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2025-05-28",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 I’ve been having heartburn lately. | S2 Hey, did you finish that report ye | S3 So, is it something I can take as  | S4 Okay, good to know. What’s a safe 

     0.00s  user  발화 시작: I’ve been having heartburn lately. What neutralizes stomach 
     3.71s  <ret> 발화 (turn1 첫 프레임)
     4.09s  agent 발화 시작: <ret> Bicarbonate is a base that neutralizes stomach acid wh
     4.11s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.32s]: Bicarbonate is a base that neutralizes stomach acid when it reaches th
     4.26s  user  발화 끝
    13.29s  user  발화 시작: Hmm, interesting. What exactly *is* bicarbonate?
    13.41s  agent 발화 끝
    17.41s  <ret> 발화 (turn3 첫 프레임)
    17.64s  agent 발화 시작: <ret> Sodium bicarbonate is a white crystalline powder and a
    17.64s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.92s]: Sodium bicarbonate is a white crystalline powder that is a source of c
    17.69s  user  발화 끝
    20.18s  user  발화 시작: Yeah.
    20.63s  user  발화 끝
    23.56s  agent 발화 끝
    23.75s  user  발화 시작: Hey, did you finish that report yet?
    25.51s  user  발화 시작: So, is it something I can take as a supplement, then?
    25.59s  user  발화 끝
    28.29s  <ret> 발화 (turn7 첫 프레임)
    28.36s  agent 발화 시작: <ret> Sodium bicarbonate is available as an over-the-counter
    28.37s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.00s]: Sodium bicarbonate is available as an over-the-counter antacid for tem
    28.37s  user  발화 끝
    37.36s  agent 발화 끝
    38.19s  user  발화 시작: Okay, good to know. What’s a safe dosage?
    40.91s  <ret> 발화 (turn9 첫 프레임)
    41.00s  user  발화 끝
    41.13s  agent 발화 시작: <ret> A typical dose is 1/2 to 1 teaspoon in water, but don’
    41.15s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.41s]: (tool result) A typical dose of sodium bicarbonate for heartburn is 1/
    48.55s  agent 발화 끝
