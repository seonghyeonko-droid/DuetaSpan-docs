# v3_to_ot_11_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_to_ot_11",
#     "name": "Marcus",
#     "location": {
#       "city": "New York",
#       "country": "United States",
#       "timezone": "America/New_York (EST, UTC-5)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "male",
#     "age_range": "early 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-28",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2026-04-07",
#       "category": "trip",
#       "text": "User is planning a trip to Vietnam in October."
#     },
#     {
#       "date": "2026-03-27",
#       "category": "work",
#       "text": "User works as a high-school teacher."
#     },
#     {
#       "date": "2026-01-08",
#       "category": "pet",
#       "text": "User has a Golden Retriever named Max."
#     },
#     {
#       "date": "2026-01-04",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is sushi."
#     },
#     {
#       "date": "2025-12-08",
#       "category": "diet",
#       "text": "User is gluten-free."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-05",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2026-03-01",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2025-12-15",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Do you know who wrote Mrs. Dallowa | S2 …about To the Lighthouse? | S3 Did you remember to take the trash | S4 I'm planning a trip to London next

     0.00s  user  발화 시작: Do you know who wrote Mrs. Dalloway and A Room of One’s Own?
     5.14s  <ret> 발화 (turn2 첫 프레임)
     5.19s  agent 발화 시작: Yeah.
     5.19s  user  발화 끝
     5.59s  agent 발화 시작: <ret> Those wonderful works were both written by Virginia Wo
     5.59s  agent 발화 끝
     6.31s  ⚡SPAN 주입 [d'=1.17s / d_lead=6.79s]: Virginia Woolf is widely known as the author of both Mrs. Dalloway, pu
    12.38s  user  발화 시작: Uh-huh.
    12.38s  agent 발화 끝
    12.78s  user  발화 시작: Oh, okay. And what…
    12.78s  user  발화 끝
    14.38s  user  발화 시작: …about To the Lighthouse?
    14.38s  user  발화 끝
    15.98s  agent 발화 시작: Yeah, yeah.
    15.98s  user  발화 끝
    16.70s  <ret> 발화 (turn7 첫 프레임)
    16.78s  agent 발화 시작: <ret> She also wrote To the Lighthouse, which came out in Ma
    16.78s  agent 발화 끝
    17.38s  ⚡SPAN 주입 [d'=0.68s / d_lead=7.19s]: Virginia Woolf also authored To the Lighthouse, which was first publis
    23.97s  user  발화 시작: Did you remember to take the trash out?
    23.97s  agent 발화 끝
    27.16s  user  발화 시작: That's really helpful, thank you.
    27.16s  user  발화 끝
    29.16s  agent 발화 시작: [happy] It’s my pleasure to share these details; I find Wool
    29.16s  user  발화 끝
    35.55s  user  발화 시작: Yeah.
    35.55s  agent 발화 끝
    35.95s  user  발화 시작: I'm planning a trip to London next month.
    35.95s  user  발화 끝
    39.15s  agent 발화 시작: Mhm.
    39.15s  user  발화 끝
    39.54s  agent 발화 시작: London is lovely! Perhaps you could visit the Woolf-related 
    39.54s  agent 발화 끝
    44.74s  agent 발화 끝
