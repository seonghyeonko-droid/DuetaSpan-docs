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

# EXAMINER(FDB-v2) 단계: S1 Hey, uh, I was wondering… do you k | S2 Yeah, well, I’m trying to study fo | S3 Belgium! Okay, that's two. Hmmm, w | S4 No, no, that’s okay. I think I jus

     0.00s  user  발화 시작: Hey, uh, I was wondering… do you know any countries with a f
     6.63s  <ret> 발화 (turn1 첫 프레임)
     6.87s  agent 발화 시작: <ret> The flag that features black, red, and yellow horizont
     6.90s  user  발화 끝
     8.63s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.49s]: [The flag of Germany features black, red, and yellow horizontal bands.
    11.29s  user  발화 시작: Oh, Germany! Right, of course. I should have remembered that
    11.36s  agent 발화 끝
    19.21s  user  발화 끝
    19.63s  agent 발화 시작: That’s perfectly alright! Everyone has areas they find a bit
    22.45s  user  발화 시작: Right.
    23.08s  user  발화 끝
    25.74s  agent 발화 끝
    25.79s  user  발화 시작: Yeah, well, I’m trying to study for this geography test, and
    31.95s  <ret> 발화 (turn6 첫 프레임)
    32.27s  agent 발화 시작: <ret> There is another flag with those colors, though in a d
    32.41s  user  발화 끝
    33.95s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.27s]: [The flag of Belgium is composed of three vertical bands: black, yello
    39.54s  agent 발화 끝
    39.61s  user  발화 시작: Belgium! Okay, that's two. Hmmm, what about… uh, are those c
    46.83s  user  발화 끝
    46.98s  agent 발화 시작: Those colors do appear in several national flags, often repr
    55.37s  agent 발화 끝
    55.40s  user  발화 시작: No, no, that’s okay. I think I just need to focus on memoriz
    62.44s  agent 발화 시작: You're very welcome! Remember, breaking down the task into s
    62.49s  user  발화 끝
    70.27s  agent 발화 끝
