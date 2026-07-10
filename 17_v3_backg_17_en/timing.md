# v3_backg_17_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_backg_17",
#     "name": "Taylor",
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
#       "date": "2026-06-21",
#       "category": "work",
#       "text": "User works as a accountant."
#     },
#     {
#       "date": "2025-11-28",
#       "category": "home",
#       "text": "User's home address is 480 Elm Street."
#     },
#     {
#       "date": "2025-11-02",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2025-09-16",
#       "category": "allergy",
#       "text": "User is allergic to shellfish."
#     },
#     {
#       "date": "2025-07-11",
#       "category": "hobby",
#       "text": "User is into alpine wildflower photography."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-03-21",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2025-06-03",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Who played Jessie Spano on Saved b | S2 …has she been in? | S3 …was *Showgirls* her first role af | S4 Hmm.

     0.00s  user  발화 시작: Who played Jessie Spano on Saved by the Bell?
     2.19s  <ret> 발화 (turn1 첫 프레임)
     2.58s  user  발화 끝
     2.59s  agent 발화 시작: <ret> It was Elizabeth Berkley who brought Jessie Spano to l
     2.59s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.58s]: Elizabeth Berkley played Jessie Spano on the television sitcom Saved b
     9.17s  agent 발화 끝
     9.24s  user  발화 시작: Oh, right. What else…
    10.62s  user  발화 끝
    11.71s  user  발화 시작: …has she been in?
    12.60s  <ret> 발화 (turn4 첫 프레임)
    12.84s  agent 발화 시작: <ret> Elizabeth Berkley's work extends beyond *Saved by the 
    12.84s  ⚡SPAN 주입 [d'=1.84s / d_lead=6.25s]: (tool result) Elizabeth Berkley has appeared in films such as Showgirl
    12.86s  user  발화 끝
    18.43s  user  발화 시작: …was *Showgirls* her first role after the show?
    19.09s  agent 발화 끝
    20.98s  user  발화 끝
    20.99s  agent 발화 시작: It actually wasn't; she had a few smaller roles before that,
    24.93s  user  발화 시작: Hmm.
    25.28s  agent 발화 시작: I understand you’re curious about the timeline of her career
    25.34s  user  발화 끝
    25.67s  agent 발화 끝
    30.71s  <ret> 발화 (turn9 첫 프레임)
    31.02s  agent 발화 시작: <ret> Sometimes, navigating a career path requires resilienc
    31.21s  agent 발화 끝
    32.71s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.38s]: Elizabeth Berkley attended UCLA and later founded Walkabout Foundation
    48.89s  agent 발화 끝
