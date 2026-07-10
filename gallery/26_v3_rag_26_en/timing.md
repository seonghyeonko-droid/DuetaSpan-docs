# v3_rag_26_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_26",
#     "name": "Emilia",
#     "location": {
#       "city": "New York",
#       "country": "United States",
#       "timezone": "America/New_York (EST, UTC-5)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "female",
#     "age_range": "late 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-10",
#       "category": "home",
#       "text": "User's home address is 249 Cedar Lane."
#     },
#     {
#       "date": "2026-04-10",
#       "category": "pet",
#       "text": "User has a Beagle named Rusty."
#     },
#     {
#       "date": "2026-02-09",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-11-30",
#       "category": "work",
#       "text": "User works as a accountant."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-09-24",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2025-05-28",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Uh, hey… I was wondering about fla | S2 Oh, Germany! Right. That rings a b | S3 Oh wow, that’s interesting. So two | S4 I think I’m good for now, thanks. 

     0.00s  user  발화 시작: Uh, hey… I was wondering about flags.
     3.05s  user  발화 끝
     3.09s  agent 발화 시작: Flags are fascinating, aren’t they? What about flags are you
     7.93s  user  발화 시작: Well, I’m trying to remember… is there a country whose flag 
     8.04s  agent 발화 끝
    13.63s  user  발화 끝
    13.78s  <ret> 발화 (turn3 첫 프레임)
    14.02s  agent 발화 시작: <ret> Yes, that’s the flag of Germany—black, red, and gold b
    15.78s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.65s]: The flag of Germany is composed of three horizontal bands of black, re
    16.56s  user  발화 시작: Right.
    17.20s  user  발화 끝
    19.61s  user  발화 시작: Oh, Germany! Right. That rings a bell. Hmm, I also need to f
    19.67s  agent 발화 끝
    26.68s  agent 발화 시작: Essays can feel daunting, but breaking them down helps. Do y
    26.69s  user  발화 끝
    33.30s  agent 발화 끝
    33.36s  user  발화 시작: Let’s stick with flags for a bit. Is there another flag with
    39.49s  <ret> 발화 (turn8 첫 프레임)
    39.81s  agent 발화 시작: <ret> Actually, yes! Belgium’s flag has black, yellow, and r
    39.89s  user  발화 끝
    41.49s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.28s]: The flag of Belgium consists of three vertical bands of black, yellow,
    45.09s  agent 발화 끝
    45.15s  user  발화 시작: Oh wow, that’s interesting. So two countries use those color
    49.45s  agent 발화 시작: It seems so! Flags often have interesting stories behind the
    49.55s  user  발화 끝
    55.23s  user  발화 시작: Yeah, it’s cool. I wonder why they picked those colors. But 
    55.33s  agent 발화 끝
    61.02s  agent 발화 시작: It's perfectly alright to switch gears! Sometimes a little m
    61.11s  user  발화 끝
    64.35s  user  발화 시작: Uh-huh.
    64.98s  user  발화 끝
    68.25s  agent 발화 끝
    69.51s  user  발화 시작: I think I’m good for now, thanks. Maybe just knowing about t
    75.36s  agent 발화 시작: That’s wonderful to hear! Sometimes a small distraction is e
    75.49s  user  발화 끝
    81.61s  agent 발화 끝
