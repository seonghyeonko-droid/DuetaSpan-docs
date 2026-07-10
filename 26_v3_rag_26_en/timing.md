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

# EXAMINER(FDB-v2) 단계: S1 Uh, hey. I’m trying to remember a  | S2 Oh, right! Germany. I knew it was  | S3 Oh wow, I didn’t know that! So Ger | S4 That’s really interesting! Thanks…

     0.00s  user  발화 시작: Uh, hey. I’m trying to remember a flag… it has black, red, a
     7.28s  user  발화 끝
     7.30s  agent 발화 시작: It sounds like you're trying to recall a particular national
    12.86s  user  발화 시작: Yeah, I think so. I saw it in a history book, I think. It wa
    12.95s  agent 발화 끝
    18.58s  <ret> 발화 (turn3 첫 프레임)
    18.64s  user  발화 끝
    18.81s  agent 발화 시작: <ret> The flag you’re thinking of… is likely the flag of Ger
    20.58s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.02s]: [source: Britannica] The flag of Germany features three horizontal ban
    21.57s  user  발화 시작: Right.
    22.38s  user  발화 끝
    24.84s  agent 발화 끝
    24.85s  user  발화 시작: Oh, right! Germany. I knew it was a European country. But wh
    32.26s  agent 발화 시작: Flag colors often have symbolic meaning, representing import
    32.31s  user  발화 끝
    37.60s  user  발화 시작: Hmm. I wonder if other countries use those colors too? I see
    37.63s  agent 발화 끝
    42.50s  <ret> 발화 (turn8 첫 프레임)
    42.82s  agent 발화 시작: <ret> Actually, Belgium also uses black, yellow, and red, th
    42.88s  user  발화 끝
    44.50s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.20s]: [source: Flags of the World] The flag of Belgium consists of three ver
    49.02s  agent 발화 끝
    49.06s  user  발화 시작: Oh wow, I didn’t know that! So Germany’s is horizontal, Belg
    55.31s  agent 발화 시작: Exactly! It’s interesting how different nations can share co
    55.40s  user  발화 끝
    60.53s  user  발화 시작: So, Germany’s colors… were they always like that? Or did the
    60.59s  agent 발화 끝
    66.19s  <ret> 발화 (turn12 첫 프레임)
    66.59s  agent 발화 시작: <ret> The black, red, and gold colors for Germany were first
    66.78s  user  발화 끝
    68.19s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.48s]: [source: History.com] The black, red, and gold colors of the German fl
    71.31s  user  발화 시작: Yeah.
    71.81s  user  발화 끝
    73.08s  agent 발화 끝
    74.29s  user  발화 시작: That’s really interesting! Thanks…
    76.92s  user  발화 끝
    79.00s  user  발화 시작: …Kiora. That helped a lot.
    82.05s  user  발화 끝
    82.08s  agent 발화 시작: [happy] You’re very welcome! It’s wonderful to help you conn
    86.29s  agent 발화 끝
