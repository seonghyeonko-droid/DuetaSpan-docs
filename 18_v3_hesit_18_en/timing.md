# v3_hesit_18_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_hesit_18",
#     "name": "Emilia",
#     "location": {
#       "city": "New York",
#       "country": "United States",
#       "timezone": "America/New_York (EST, UTC-5)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "female",
#     "age_range": "40s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-02-13",
#       "category": "hobby",
#       "text": "User is into birdwatching."
#     },
#     {
#       "date": "2026-02-11",
#       "category": "work",
#       "text": "User works as a marketing manager."
#     },
#     {
#       "date": "2026-02-03",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Mexican."
#     },
#     {
#       "date": "2026-01-02",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-12-19",
#       "category": "home",
#       "text": "User's home address is 520 Elm Street."
#     },
#     {
#       "date": "2025-12-17",
#       "category": "pet",
#       "text": "User has a Siamese cat named Bella."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-17",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2026-04-22",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2025-12-15",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Hey Ores, do you know who sings th | S2 “Kill Bill” is good! I always thin | S3 …wait, *SOS*? Is that the one with | S4 Wow, number one! That’s amazing fo

     0.00s  user  발화 시작: Hey Ores, do you know who sings the female part in “What Lov
     6.42s  <ret> 발화 (turn1 첫 프레임)
     6.59s  agent 발화 시작: <ret> That’s a lovely song! SZA is the artist who sings the 
     6.59s  user  발화 끝
     6.72s  ⚡SPAN 주입 [d'=0.30s / d_lead=9.15s]: SZA and Maroon 5 collaborated on the song "What Lovers Do," released i
    15.74s  user  발화 시작: Yeah.
    15.74s  agent 발화 끝
    16.11s  user  발화 시작: Oh, right! SZA, of course. Hmm, well, is she known for other
    16.11s  user  발화 끝
    21.07s  <ret> 발화 (turn5 첫 프레임)
    21.23s  agent 발화 시작: Mm-hmm.
    21.23s  user  발화 끝
    21.60s  agent 발화 시작: <ret> [happy] Absolutely! SZA has a really distinctive voice
    21.60s  agent 발화 끝
    21.88s  ⚡SPAN 주입 [d'=0.81s / d_lead=9.15s]: SZA gained wider recognition with her debut studio album, Ctrl (2017),
    30.75s  user  발화 시작: Yeah.
    30.75s  agent 발화 끝
    31.12s  user  발화 시작: “Kill Bill” is good! I always think about the movie when I h
    31.12s  user  발화 끝
    36.24s  agent 발화 시작: It’s interesting how songs can bring other things to mind, i
    36.24s  user  발화 끝
    43.20s  user  발화 시작: Yeah, it does. Uh, is she… well, is she still making music n
    43.20s  agent 발화 끝
    47.96s  agent 발화 시작: Uh-huh.
    47.96s  user  발화 끝
    48.32s  agent 발화 시작: Yes, she is! SZA released her second studio album, *SOS*, in
    48.32s  agent 발화 끝
    53.08s  user  발화 시작: …wait, *SOS*? Is that the one with “Shirt”? I think I heard 
    53.08s  agent 발화 끝
    59.09s  <ret> 발화 (turn14 첫 프레임)
    59.31s  agent 발화 시작: Okay.
    59.31s  user  발화 끝
    59.67s  agent 발화 시작: <ret> That’s right! “Shirt” is a single from the *SOS* album
    59.67s  agent 발화 끝
    60.32s  ⚡SPAN 주입 [d'=1.23s / d_lead=7.32s]: SZA’s second studio album, *SOS*, released in December 2022, features 
    66.99s  user  발화 시작: Yeah.
    66.99s  agent 발화 끝
    67.36s  user  발화 시작: Oh, okay, good to know. So, she's pretty busy then?
    67.36s  user  발화 끝
    70.61s  <ret> 발화 (turn17 첫 프레임)
    71.02s  agent 발화 시작: <ret> [curious] It certainly seems that way! She’s been tour
    71.02s  user  발화 끝
    71.56s  ⚡SPAN 주입 [d'=0.95s / d_lead=8.79s]: *SOS* debuted at number one on the Billboard 200 chart in the United S
    79.81s  user  발화 시작: Yeah.
    79.81s  agent 발화 끝
    80.17s  user  발화 시작: Wow, number one! That’s amazing for her. That’s really good.
    80.17s  user  발화 끝
    83.83s  user  발화 끝
