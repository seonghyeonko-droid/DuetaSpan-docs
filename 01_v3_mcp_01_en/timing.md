# v3_mcp_01_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mcp_01",
#     "name": "Hana",
#     "location": {
#       "city": "Toronto",
#       "country": "Canada",
#       "timezone": "America/Toronto (EST, UTC-5)",
#       "currency": "CAD ($)"
#     },
#     "nationality": "Canadian",
#     "gender": "female",
#     "age_range": "late 20s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-26",
#       "category": "diet",
#       "text": "User is vegan."
#     },
#     {
#       "date": "2026-06-11",
#       "category": "trip",
#       "text": "User is planning a trip to Vietnam in March."
#     },
#     {
#       "date": "2026-03-09",
#       "category": "work",
#       "text": "User works as a physical therapist."
#     },
#     {
#       "date": "2026-01-20",
#       "category": "hobby",
#       "text": "User is into rock climbing."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-04",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2026-03-13",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2025-12-26",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 I need to find a good Italian rest | S2 Hmm, that sounds…expensive. Is the | S3 Bella Pasta… that sounds better. C | S4 …for this Saturday at 7 PM?

     0.00s  user  발화 시작: I need to find a good Italian restaurant nearby, something w
     5.79s  <ret> 발화 (turn1 첫 프레임)
     5.82s  agent 발화 시작: <ret> [happy] Of course! I can help with that. Let me find s
     5.82s  user  발화 끝
     6.63s  ⚡SPAN 주입 [d'=0.84s / d_lead=8.50s]: Restaurants_2_FindRestaurants
    13.96s  <ret> 발화 (turn2 첫 프레임)
    14.32s  agent 발화 시작: <ret> I found La Tavola, at 23 Gangnam-daero 107-gil, with a
    14.32s  agent 발화 끝
    15.15s  ⚡SPAN 주입 [d'=1.39s / d_lead=8.95s]: (tool result) {"restaurant name": "La Tavola", "address": "23 Gangnam-
    23.27s  user  발화 시작: Hmm, that sounds…expensive. Is there anything a bit cheaper?
    23.27s  agent 발화 끝
    26.92s  <ret> 발화 (turn4 첫 프레임)
    27.22s  ⚡SPAN 주입 [d'=0.30s / d_lead=4.92s]: Restaurants_2_FindRestaurants
    27.29s  agent 발화 시작: <ret> There's Bella Pasta, rated 4.2 stars, with a $ price t
    27.29s  user  발화 끝
    32.22s  user  발화 시작: Bella Pasta… that sounds better. Could you reserve a table f
    32.22s  agent 발화 끝
    38.03s  user  발화 시작: …for this Saturday at 7 PM?
    38.03s  user  발화 끝
    40.16s  <ret> 발화 (turn7 첫 프레임)
    40.72s  agent 발화 시작: <ret> [curious] Absolutely! I’ve reserved a table for two at
    40.72s  user  발화 끝
    40.96s  ⚡SPAN 주입 [d'=0.80s / d_lead=11.19s]: (tool result) {"confirmation id": "BP7111902", "restaurant name": "Bel
    51.90s  agent 발화 끝
