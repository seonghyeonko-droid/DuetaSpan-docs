# v3_abs_22_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_abs_22",
#     "name": "Remy",
#     "location": {
#       "city": "London",
#       "country": "United Kingdom",
#       "timezone": "Europe/London (GMT, UTC+0)",
#       "currency": "GBP (£)"
#     },
#     "nationality": "British",
#     "gender": "non-binary",
#     "age_range": "40s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-04",
#       "category": "hobby",
#       "text": "User is into birdwatching."
#     },
#     {
#       "date": "2026-03-25",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     },
#     {
#       "date": "2026-02-18",
#       "category": "pet",
#       "text": "User has a Poodle named Coco."
#     },
#     {
#       "date": "2026-02-11",
#       "category": "work",
#       "text": "User works as a architect."
#     },
#     {
#       "date": "2026-01-06",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2025-12-21",
#       "category": "allergy",
#       "text": "User is allergic to shellfish."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-02",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2026-01-20",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 What campus reduced its size in th | S2 …like in Seoul right now? | S3 Sounds lovely. Can you find me som | S4 Trattoria Uno sounds good. Can you

     0.00s  user  발화 시작: What campus reduced its size in the 1950's and 1960's?
     4.25s  <ret> 발화 (turn1 첫 프레임)
     4.33s  agent 발화 시작: <ret> But unfortunately, I don't have information about any 
     4.33s  user  발화 끝
     4.95s  ⚡SPAN 주입 [d'=0.70s / d_lead=6.49s]: (no information found)
    10.82s  user  발화 시작: Yeah.
    10.82s  agent 발화 끝
    11.25s  user  발화 시작: Oh, okay. Well, what’s the weather…
    11.25s  user  발화 끝
    13.85s  user  발화 시작: …like in Seoul right now?
    13.85s  user  발화 끝
    16.01s  agent 발화 시작: Uh-huh.
    16.01s  user  발화 끝
    16.16s  <ret> 발화 (turn6 첫 프레임)
    16.44s  agent 발화 시작: <ret> It’s currently 23.0 degrees Celsius in Seoul, with hum
    16.44s  agent 발화 끝
    17.25s  ⚡SPAN 주입 [d'=1.20s / d_lead=10.82s]: (tool result) 23.0°C, humidity 74%, wind 5.5 km/h
    27.26s  user  발화 시작: Yeah.
    27.26s  agent 발화 끝
    27.69s  user  발화 시작: Sounds lovely. Can you find me some Italian restaurants near
    27.69s  user  발화 끝
    31.42s  <ret> 발화 (turn9 첫 프레임)
    32.02s  agent 발화 시작: <ret> I found two Italian restaurants near you: Trattoria Un
    32.02s  user  발화 끝
    32.58s  ⚡SPAN 주입 [d'=1.16s / d_lead=10.82s]: (tool result) Trattoria Uno - Italian, 4.5 stars, 0.8 km away. Bella I
    42.84s  user  발화 시작: Oh.
    42.84s  agent 발화 끝
    43.27s  user  발화 시작: Trattoria Uno sounds good. Can you reserve a table for two t
    43.27s  user  발화 끝
    49.79s  <ret> 발화 (turn12 첫 프레임)
    50.19s  agent 발화 시작: <ret> Wonderful! Your reservation for two at Trattoria Uno i
    50.19s  user  발화 끝
    51.00s  ⚡SPAN 주입 [d'=1.35s / d_lead=11.25s]: (tool result) Reservation confirmed for 2 people at Trattoria Uno on 2
    61.44s  agent 발화 끝
