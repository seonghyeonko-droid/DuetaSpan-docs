# v3_selfc_08_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_selfc_08",
#     "name": "Quinn",
#     "location": {
#       "city": "New York",
#       "country": "United States",
#       "timezone": "America/New_York (EST, UTC-5)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "non-binary",
#     "age_range": "late 20s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-16",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2026-05-09",
#       "category": "diet",
#       "text": "User is vegetarian."
#     },
#     {
#       "date": "2026-02-07",
#       "category": "home",
#       "text": "User's home address is 697 Birch Road."
#     },
#     {
#       "date": "2025-10-25",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Italian."
#     },
#     {
#       "date": "2025-08-25",
#       "category": "work",
#       "text": "User works as a nurse."
#     },
#     {
#       "date": "2025-07-22",
#       "category": "hobby",
#       "text": "User is into vintage synth collecting."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-18",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 I need to find a good Italian rest | S2 Oh, actually—I meant near Gangnam  | S3 That sounds nice. Can you reserve  | S4 …table for two at 7 PM tonight?

     0.00s  user  발화 시작: I need to find a good Italian restaurant nearby, please.
     4.83s  agent 발화 시작: Yeah.
     4.83s  user  발화 끝
     4.99s  <ret> 발화 (turn2 첫 프레임)
     5.31s  agent 발화 시작: <ret> Seoul has a lot of Italian restaurants, and Trattoria 
     5.31s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.14s]: Seoul has many Italian restaurants; Trattoria da Maria is a highly-rat
     5.31s  agent 발화 끝
    15.45s  user  발화 시작: Oh, actually—I meant near Gangnam Station, not Itaewon.
    15.45s  agent 발화 끝
    19.07s  <ret> 발화 (turn4 첫 프레임)
    19.31s  agent 발화 시작: <ret> There’s La Casa, an Italian restaurant at 162-1 Seocho
    19.31s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.79s]: (tool result) {"restaurants": [{"name": "La Casa", "address": "162-1 S
    19.31s  user  발화 끝
    25.11s  user  발화 시작: That sounds nice. Can you reserve a…
    25.11s  agent 발화 끝
    28.49s  user  발화 시작: …table for two at 7 PM tonight?
    28.49s  user  발화 끝
    31.87s  agent 발화 시작: Exactly.
    31.87s  user  발화 끝
    32.11s  <ret> 발화 (turn8 첫 프레임)
    32.35s  agent 발화 시작: <ret> I’ve reserved a table for two at La Casa for 7 PM toni
    32.35s  ⚡SPAN 주입 [d'=1.44s / d_lead=8.69s]: (tool result) {"confirmation id": "LC2026071019002"}
    32.35s  agent 발화 끝
    41.04s  agent 발화 끝
