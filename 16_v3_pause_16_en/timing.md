# v3_pause_16_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_pause_16",
#     "name": "Avery",
#     "location": {
#       "city": "Berlin",
#       "country": "Germany",
#       "timezone": "Europe/Berlin (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "German",
#     "gender": "non-binary",
#     "age_range": "early 30s",
#     "language": "German"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-16",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2026-03-26",
#       "category": "work",
#       "text": "User works as a chef."
#     },
#     {
#       "date": "2026-01-22",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     },
#     {
#       "date": "2025-11-08",
#       "category": "pet",
#       "text": "User has a Beagle named Rusty."
#     },
#     {
#       "date": "2025-10-12",
#       "category": "home",
#       "text": "User's home address is 462 Cedar Lane."
#     },
#     {
#       "date": "2025-08-15",
#       "category": "allergy",
#       "text": "User is allergic to cat dander."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-03-08",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2025-09-29",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2025-07-11",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 I was reading about Canada… and uh | S2 …that’s before dinosaurs then? | S3 Wow. Is that… | S4 That’s incredible. Thanks, Thiaia.

     0.00s  user  발화 시작: I was reading about Canada… and uh… the Canadian Shield…
     4.15s  <ret> 발화 (turn1 첫 프레임)
     4.47s  agent 발화 시작: <ret> It’s a fascinating region, isn’t it? The Canadian Shie
     4.47s  ⚡SPAN 주입 [d'=2.00s / d_lead=12.11s]: The Canadian Shield formed during the Proterozoic Eon, approximately 4
     4.66s  user  발화 끝
    16.58s  agent 발화 끝
    16.88s  user  발화 시작: …that’s a really long time. So…
    18.49s  user  발화 끝
    19.43s  user  발화 시작: …that’s before dinosaurs then?
    21.18s  user  발화 끝
    21.44s  agent 발화 시작: Yes, absolutely. That’s well before the age of dinosaurs – d
    26.95s  user  발화 시작: Yeah.
    27.40s  user  발화 끝
    30.59s  agent 발화 시작: The Proterozoic Eon represents a huge span of Earth's histor
    30.71s  agent 발화 끝
    41.91s  agent 발화 끝
    42.75s  user  발화 시작: Wow. Is that…
    44.50s  user  발화 끝
    45.51s  user  발화 시작: …when most of the rocks there were made?
    47.02s  <ret> 발화 (turn9 첫 프레임)
    47.42s  agent 발화 시작: <ret> Most of the rocks you find there—igneous and metamorph
    47.42s  ⚡SPAN 주입 [d'=2.00s / d_lead=11.46s]: Most of the rocks in the Canadian Shield are igneous and metamorphic, 
    47.49s  user  발화 끝
    53.35s  user  발화 시작: Yeah, yeah.
    54.49s  user  발화 끝
    58.88s  agent 발화 끝
    59.31s  user  발화 시작: That’s incredible. Thanks, Thiaia.
    61.25s  user  발화 끝
