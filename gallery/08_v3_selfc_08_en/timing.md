# v3_selfc_08_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_selfc_08",
#     "name": "Sam",
#     "location": {
#       "city": "New York",
#       "country": "United States",
#       "timezone": "America/New_York (EST, UTC-5)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "non-binary",
#     "age_range": "early 20s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-26",
#       "category": "trip",
#       "text": "User is planning a trip to Switzerland in December."
#     },
#     {
#       "date": "2026-05-04",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-03-13",
#       "category": "pet",
#       "text": "User has a Beagle named Rusty."
#     },
#     {
#       "date": "2025-07-17",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Italian."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-29",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Locate pharmacies inside Toronto. | S2 And what about Rexall? | S3 Perfect! | S4 Thank you.

     0.00s  user  발화 시작: Locate pharmacies inside Toronto.
     2.53s  <ret> 발화 (turn1 첫 프레임)
     2.92s  agent 발화 시작: <ret> I’ve found two pharmacies in Toronto for you. There’s 
     2.93s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.73s]: (tool result) {"results": [{"name": "Shoppers Drug Mart", "address": "
     3.10s  user  발화 끝
     8.28s  user  발화 시작: Mhm.
     8.91s  user  발화 끝
    12.65s  agent 발화 끝
    12.79s  user  발화 시작: Which one is closest to the CN Tower?
    15.18s  <ret> 발화 (turn4 첫 프레임)
    15.41s  agent 발화 시작: <ret> Shoppers Drug Mart is about 2.5 kilometers from the CN
    15.42s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.79s]: (tool result) {"distance": 2.5, "duration": 8, "units": "km", "mode": 
    15.61s  user  발화 끝
    17.81s  user  발화 시작: Oh.
    18.45s  user  발화 끝
    21.13s  agent 발화 시작: It’s a relatively quick trip, and a good option if you’re al
    21.20s  agent 발화 끝
    25.88s  user  발화 시작: Yeah, totally.
    27.40s  user  발화 끝
    28.04s  agent 발화 끝
    28.10s  user  발화 시작: And what about Rexall?
    29.14s  <ret> 발화 (turn9 첫 프레임)
    29.45s  agent 발화 시작: <ret> Rexall Pharmacy is a little further—about 3.1 kilomete
    29.46s  ⚡SPAN 주입 [d'=1.12s / d_lead=7.54s]: (tool result) {"distance": 3.1, "duration": 12, "units": "km", "mode":
    29.71s  user  발화 끝
    36.37s  user  발화 시작: …Do either of them have a 24-hour service?
    36.99s  agent 발화 끝
    39.33s  <ret> 발화 (turn11 첫 프레임)
    39.40s  agent 발화 시작: <ret> Shoppers Drug Mart is currently open, and they’re open
    39.41s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.72s]: (tool result) {"name": "Shoppers Drug Mart", "opening hours": {"open n
    39.42s  user  발화 끝
    46.12s  agent 발화 끝
    46.49s  user  발화 시작: Perfect!
    47.13s  agent 발화 시작: It’s wonderful to know you’ve found a convenient option. Tak
    47.31s  user  발화 끝
    49.17s  user  발화 시작: Right.
    49.66s  user  발화 끝
    54.26s  agent 발화 끝
    54.56s  user  발화 시작: Can you send the address to my phone?
    56.50s  <ret> 발화 (turn16 첫 프레임)
    56.73s  agent 발화 시작: <ret> I’ve just sent the address for Shoppers Drug Mart to y
    56.74s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.77s]: (tool result) {"status": "success", "message id": "a1b2c3d4"}
    56.96s  user  발화 끝
    63.49s  agent 발화 끝
    64.88s  user  발화 시작: Thank you.
    65.42s  agent 발화 시작: You’re very welcome. It’s all about making things a little e
    65.52s  user  발화 끝
    69.68s  agent 발화 끝
