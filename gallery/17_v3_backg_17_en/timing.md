# v3_backg_17_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_backg_17",
#     "name": "Dylan",
#     "location": {
#       "city": "New York",
#       "country": "United States",
#       "timezone": "America/New_York (EST, UTC-5)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "male",
#     "age_range": "40s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-01",
#       "category": "allergy",
#       "text": "User is allergic to peanuts."
#     },
#     {
#       "date": "2026-04-21",
#       "category": "hobby",
#       "text": "User is into home fermentation."
#     },
#     {
#       "date": "2026-04-10",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-04-09",
#       "category": "home",
#       "text": "User's home address is 634 Maple Drive."
#     },
#     {
#       "date": "2025-12-24",
#       "category": "trip",
#       "text": "User is planning a trip to Switzerland in March."
#     },
#     {
#       "date": "2025-12-07",
#       "category": "work",
#       "text": "User works as a marketing manager."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-12",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2025-12-22",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 I was reading about Chinese histor | S2 Oh, that’s interesting. I always t | S3 That makes sense. So, the Ming dyn | S4 …Wait, how long *is* the Great Wal

     0.00s  user  발화 시작: I was reading about Chinese history, and I’m curious – which
     6.31s  <ret> 발화 (turn1 첫 프레임)
     6.61s  ⚡SPAN 주입 [d'=0.30s / d_lead=10.53s]: The Great Wall of China was built over centuries, but the Qin dynasty 
     6.89s  agent 발화 시작: <ret> The Great Wall wasn’t built all at once, but the Qin d
     6.89s  user  발화 끝
    17.42s  user  발화 시작: Oh, that’s interesting. I always thought it was much later.
    17.42s  agent 발화 끝
    21.47s  agent 발화 시작: Mm-hmm.
    21.47s  user  발화 끝
    21.87s  agent 발화 시작: It’s a common misconception! Later dynasties, especially the
    21.87s  agent 발화 끝
    30.38s  user  발화 시작: That makes sense. So, the Ming dynasty did a lot of work on 
    30.38s  agent 발화 끝
    36.46s  agent 발화 시작: Okay.
    36.46s  user  발화 끝
    36.56s  <ret> 발화 (turn7 첫 프레임)
    36.80s  ⚡SPAN 주입 [d'=0.77s / d_lead=7.29s]: The Ming dynasty (1368–1644) undertook extensive construction and reno
    36.86s  agent 발화 시작: <ret> The Ming dynasty—from 1368 to 1644—did a huge amount o
    36.86s  agent 발화 끝
    44.15s  user  발화 시작: …Wait, how long *is* the Great Wall, actually?
    44.15s  agent 발화 끝
    47.00s  <ret> 발화 (turn9 첫 프레임)
    47.33s  ⚡SPAN 주입 [d'=1.50s / d_lead=9.72s]: The total length of the Great Wall, including all its branches, is est
    47.39s  agent 발화 시작: <ret> The total length, including all its branches, is estim
    47.39s  user  발화 끝
    57.11s  agent 발화 끝
