# v3_fake__13_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_fake__13",
#     "name": "Charlotte",
#     "location": {
#       "city": "Berlin",
#       "country": "Germany",
#       "timezone": "Europe/Berlin (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "German",
#     "gender": "female",
#     "age_range": "late 20s",
#     "language": "German"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-17",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Mexican."
#     },
#     {
#       "date": "2026-05-18",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-05-06",
#       "category": "hobby",
#       "text": "User is into home fermentation."
#     },
#     {
#       "date": "2026-03-05",
#       "category": "trip",
#       "text": "User is planning a trip to Vietnam in March."
#     },
#     {
#       "date": "2026-01-24",
#       "category": "work",
#       "text": "User works as a nurse."
#     },
#     {
#       "date": "2025-11-02",
#       "category": "home",
#       "text": "User's home address is 745 Birch Road."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-09-16",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Who plays Violet Baudelaire in the | S2 Oh, okay. Do you think Violet was  | S3 I do, um, I think so. What about K | S4 Yes, he did.

     0.00s  user  발화 시작: Who plays Violet Baudelaire in the Netflix series?
     3.05s  <ret> 발화 (turn1 첫 프레임)
     3.26s  agent 발화 시작: <ret> That would be Malina Weissman, she wonderfully portray
     3.29s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.05s]: Malina Weissman played Violet Baudelaire in the Netflix series *A Seri
     3.52s  user  발화 끝
    10.30s  agent 발화 끝
    11.73s  user  발화 시작: Oh, okay. Do you think Violet was a good role model?
    15.18s  <ret> 발화 (turn3 첫 프레임)
    15.43s  user  발화 끝
    15.58s  agent 발화 시작: <ret> Violet certainly was! She’s incredibly resourceful and
    15.58s  ⚡SPAN 주입(IRRELEVANT) [d'=2.00s / d_lead=8.11s]: The current temperature in Ulaanbaatar, Mongolia is -18.2°C, with clea
    23.69s  agent 발화 끝
    24.67s  user  발화 시작: I do, um, I think so. What about Klaus?
    27.98s  <ret> 발화 (turn5 첫 프레임)
    28.09s  user  발화 끝
    28.29s  agent 발화 시작: <ret> Louis Hynes played Klaus, Violet's brother. He brought
    28.30s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.77s]: Louis Hynes portrayed Klaus Baudelaire, Violet’s brother, in *A Series
    32.86s  user  발화 시작: Uh-huh.
    33.36s  user  발화 끝
    34.93s  user  발화 시작: Yes, he did.
    35.05s  agent 발화 끝
    36.08s  user  발화 끝
    36.27s  agent 발화 시작: It’s nice to see siblings supporting each other, even in suc
    44.01s  agent 발화 끝
