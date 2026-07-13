# v3_backg_17_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_backg_17",
#     "name": "보람",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "40s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-01",
#       "category": "allergy",
#       "text": "User is allergic to peanuts."
#     },
#     {
#       "date": "2026-04-21",
#       "category": "hobby",
#       "text": "User is into home fermentation."
#     },
#     {
#       "date": "2026-04-10",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-04-09",
#       "category": "home",
#       "text": "User's home address is 서울 용산구 이태원로 200."
#     },
#     {
#       "date": "2025-12-24",
#       "category": "trip",
#       "text": "User is planning a trip to Switzerland in March."
#     },
#     {
#       "date": "2025-12-07",
#       "category": "work",
#       "text": "User works as a graphic designer."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-01-06",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2025-12-24",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2025-12-20",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 중국 만리장성을 지은 왕조가 어디였지? | S2 진나라가 언제 세워졌어? | S3 그 시대에 또 어떤 중요한 일이 있었어? | S4 …혹시 진시황릉도 그 시대에 지어진 거야?

     0.00s  user  발화 시작: 중국 만리장성을 지은 왕조가 어디였지?
     2.25s  <ret> 발화 (turn1 첫 프레임)
     2.65s  agent 발화 시작: <ret> 중국 만리장성을 지은 왕조는 진나라입니다.
     2.65s  user  발화 끝
     3.18s  ⚡SPAN 주입 [d'=0.92s / d_lead=2.65s]: The Qin dynasty constructed the Great Wall of China.
     5.30s  user  발화 시작: 어.
     5.30s  agent 발화 끝
     5.83s  user  발화 시작: 진나라가 언제 세워졌어?
     5.83s  user  발화 끝
     7.01s  <ret> 발화 (turn4 첫 프레임)
     7.42s  agent 발화 시작: <ret> 진나라는 기원전 이백이십일년에 세워졌습니다.
     7.42s  user  발화 끝
     8.19s  ⚡SPAN 주입 [d'=1.17s / d_lead=2.12s]: The Qin dynasty was established in 221 BC.
     9.54s  user  발화 시작: 그 시대에 또 어떤 중요한 일이 있었어?
     9.54s  agent 발화 끝
    13.26s  agent 발화 시작: 진나라는 중국을 최초로 통일한 왕조였어요—
    13.26s  user  발화 끝
    15.91s  user  발화 시작: …혹시 진시황릉도 그 시대에 지어진 거야?
    15.91s  agent 발화 끝
    19.09s  agent 발화 시작: 네, 맞아요. 진시황릉도 진나라 시대에 지어졌습니다.
    19.09s  user  발화 끝
    22.27s  user  발화 시작: 어.
    22.27s  agent 발화 끝
    22.80s  agent 발화 시작: 진시황릉은 진시황의 거대한 무덤으로, 그 규모가 엄청나답니다.
    22.80s  user  발화 끝
    26.51s  agent 발화 끝
