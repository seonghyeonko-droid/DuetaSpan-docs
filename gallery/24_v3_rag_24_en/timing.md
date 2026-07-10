# v3_rag_24_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_24",
#     "name": "Kim",
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
#       "date": "2026-05-05",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2026-03-27",
#       "category": "diet",
#       "text": "User is gluten-free."
#     },
#     {
#       "date": "2025-09-09",
#       "category": "hobby",
#       "text": "User is into birdwatching."
#     },
#     {
#       "date": "2025-08-28",
#       "category": "work",
#       "text": "User works as a chef."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-03-02",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: When does the next episode of The Handmaid's Tale air?
     3.62s  <ret> 발화 (turn1 첫 프레임)
     3.69s  agent 발화 시작: <ret> The eleventh episode aired on April twenty-fifth, two 
     3.70s  ⚡SPAN 주입 [d'=1.04s / d_lead=5.05s]: The eleventh episode of The Handmaid's Tale aired on April 25, 2018.
     3.70s  user  발화 끝
     7.07s  user  발화 시작: Yeah.
     7.71s  user  발화 끝
     8.72s  user  발화 시작: Oh, that was a while ago… um, what about the current season?
     8.74s  agent 발화 끝
    13.21s  user  발화 끝
    13.32s  agent 발화 시작: It's understandable to feel a bit disconnected from past air
    17.28s  user  발화 시작: Yeah.
    17.92s  user  발화 끝
    19.51s  user  발화 시작: Is there a way to find out when the newest episodes are rele
    19.57s  agent 발화 끝
    23.20s  <ret> 발화 (turn7 첫 프레임)
    23.42s  agent 발화 시작: <ret> New episodes are airing weekly on Wednesdays, starting
    23.44s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.74s]: (tool result) Season 6 of The Handmaid's Tale premiered on April 3, 20
    23.63s  user  발화 끝
    33.16s  agent 발화 끝
