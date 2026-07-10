# v3_fake__14_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_fake__14",
#     "name": "Marcus",
#     "location": {
#       "city": "Toronto",
#       "country": "Canada",
#       "timezone": "America/Toronto (EST, UTC-5)",
#       "currency": "CAD ($)"
#     },
#     "nationality": "Canadian",
#     "gender": "male",
#     "age_range": "late 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-23",
#       "category": "home",
#       "text": "User's home address is 240 Birch Road."
#     },
#     {
#       "date": "2026-02-26",
#       "category": "diet",
#       "text": "User is vegetarian."
#     },
#     {
#       "date": "2025-11-09",
#       "category": "work",
#       "text": "User works as a graduate student."
#     },
#     {
#       "date": "2025-10-10",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Thai."
#     },
#     {
#       "date": "2025-09-14",
#       "category": "pet",
#       "text": "User has a tabby cat named Luna."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-01-07",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 I was just listening to Mamma Mia! | S2 Oh, Björn Ulvaeus! I keep getting  | S3 What other songs did Björn Ulvaeus | S4 It really shows. It makes the show

     0.00s  user  발화 시작: I was just listening to Mamma Mia! and I’m curious… who wrot
     7.13s  user  발화 끝
     7.27s  agent 발화 시작: That’s a lovely song to ask about, and a very common questio
    13.24s  user  발화 시작: It really is. I’m trying to learn more about the people behi
    13.24s  agent 발화 끝
    17.16s  <ret> 발화 (turn3 첫 프레임)
    17.48s  agent 발화 시작: <ret> Understanding the creators can really deepen your appr
    17.49s  user  발화 끝
    19.16s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.69s]: [source: Wikipedia] "My Love, My Life" was written by Björn Ulvaeus.
    22.92s  <ret> 발화 (turn4 첫 프레임)
    23.08s  agent 발화 시작: <ret> The songwriter behind “My Love, My Life” is… Björn Ulv
    23.17s  agent 발화 끝
    24.92s  ⚡SPAN 주입(IRRELEVANT) [d'=2.00s / d_lead=7.79s]: (tool result) AAPL: 170.34 +0.45
    30.62s  user  발화 시작: Oh, Björn Ulvaeus! I keep getting his name mixed up with Ben
    30.86s  agent 발화 끝
    34.95s  agent 발화 시작: It’s easy to do, they formed such a strong partnership. Both
    34.97s  user  발화 끝
    41.07s  agent 발화 끝
    42.01s  user  발화 시작: What other songs did Björn Ulvaeus write for Mamma Mia!?
    45.78s  <ret> 발화 (turn8 첫 프레임)
    46.02s  agent 발화 시작: <ret> Björn Ulvaeus, along with Benny Andersson, co-wrote ev
    46.18s  user  발화 끝
    47.78s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.67s]: [source: Mamma Mia! official website] Björn Ulvaeus and Benny Andersso
    54.69s  agent 발화 끝
    56.00s  user  발화 시작: Wow, they wrote *all* of them? That’s incredible!
    59.69s  agent 발화 시작: [happy] It is, isn’t it? They have a really remarkable talen
    59.69s  user  발화 끝
    63.12s  user  발화 시작: Yeah.
    63.57s  user  발화 끝
    67.80s  agent 발화 끝
    68.37s  user  발화 시작: It really shows. It makes the show so… complete.
    72.14s  agent 발화 시작: I agree. A cohesive musical vision is so important, and they
    72.21s  user  발화 끝
    79.18s  agent 발화 끝
