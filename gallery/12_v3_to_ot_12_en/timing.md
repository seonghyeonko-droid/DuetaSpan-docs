# v3_to_ot_12_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_to_ot_12",
#     "name": "Ruby",
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
#       "date": "2026-05-30",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Ethiopian."
#     },
#     {
#       "date": "2026-04-25",
#       "category": "hobby",
#       "text": "User is into alpine wildflower photography."
#     },
#     {
#       "date": "2026-03-01",
#       "category": "home",
#       "text": "User's home address is 332 Cedar Lane."
#     },
#     {
#       "date": "2026-01-20",
#       "category": "allergy",
#       "text": "User is allergic to shellfish."
#     },
#     {
#       "date": "2025-12-23",
#       "category": "work",
#       "text": "User works as a accountant."
#     },
#     {
#       "date": "2025-12-01",
#       "category": "trip",
#       "text": "User is planning a trip to Vietnam in August."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-11",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2026-02-02",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2026-01-07",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Hi, how are you today? | S2 So, if something weighs three ston | S3 Really? For weight? That’s interes | S4 That’s a lot of fractions!

     0.00s  user  발화 시작: Hi, how are you today?
     1.72s  agent 발화 시작: I’m doing wonderfully, thank you for asking! It’s a lovely d
     1.72s  user  발화 끝
     8.61s  user  발화 시작: Okay.
     8.61s  agent 발화 끝
     8.96s  user  발화 시작: Good. I was wondering, how many pounds are in a stone?
     8.96s  user  발화 끝
    12.35s  <ret> 발화 (turn4 첫 프레임)
    12.75s  agent 발화 시작: <ret> A stone is equal to fourteen pounds.
    12.75s  ⚡SPAN 주입 [d'=1.36s / d_lead=2.41s]: A stone is equal to fourteen pounds—that's one of those traditional un
    12.75s  user  발화 끝
    15.16s  user  발화 시작: Oh, okay. That’s good to know.
    15.16s  agent 발화 끝
    17.22s  agent 발화 시작: It certainly is! Knowing these conversions can be surprising
    17.22s  user  발화 끝
    23.77s  user  발화 시작: [laugh] True! I saw it in an old book.
    23.77s  agent 발화 끝
    26.87s  agent 발화 시작: [happy] Those old books do love their stones, don't they? It
    26.87s  user  발화 끝
    33.76s  user  발화 시작: Uh-huh.
    33.76s  agent 발화 끝
    34.11s  user  발화 시작: So, if something weighs three stones, how much is that in po
    34.11s  user  발화 끝
    37.92s  <ret> 발화 (turn11 첫 프레임)
    38.24s  agent 발화 시작: <ret> If something weighs three stones, that’s equal to fort
    38.24s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.44s]: One stone is equivalent to fourteen pounds, so three stones would equa
    38.24s  user  발화 끝
    41.68s  user  발화 시작: Wow, forty-two! That’s a lot.
    41.68s  agent 발화 끝
    43.41s  agent 발화 시작: It is! It really puts things into perspective when you think
    43.41s  user  발화 끝
    48.57s  user  발화 시작: I wonder if they still use stones much in Britain?
    48.57s  agent 발화 끝
    51.62s  <ret> 발화 (turn15 첫 프레임)
    52.02s  agent 발화 시작: <ret> They don’t use it as much as they used to, but stones 
    52.02s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.23s]: While pounds and kilograms are more common now, stones are still often
    52.02s  user  발화 끝
    59.25s  user  발화 시작: Really? For weight? That’s interesting.
    59.25s  agent 발화 끝
    60.98s  agent 발화 시작: It’s a bit of a cultural holdover—many people still state th
    60.98s  user  발화 끝
    67.87s  user  발화 시작: Yeah.
    67.87s  agent 발화 끝
    68.21s  user  발화 시작: That’s… well, I was reading about boxing.
    68.21s  user  발화 끝
    70.62s  agent 발화 시작: Boxing often uses stones to categorize weight classes—
    70.62s  user  발화 끝
    73.38s  user  발화 시작: …wait, do different boxing organizations use different stone
    73.38s  agent 발화 끝
    76.48s  user  발화 시작: Yeah.
    76.48s  user  발화 끝
    76.58s  <ret> 발화 (turn23 첫 프레임)
    76.82s  agent 발화 시작: <ret> Different boxing organizations do indeed use slightly 
    76.82s  ⚡SPAN 주입 [d'=1.52s / d_lead=6.55s]: The weight classes in boxing vary slightly between organizations, but 
    76.82s  user  발화 끝
    83.37s  agent 발화 시작: Weight classes vary, but generally include limits at 8 stone
    83.37s  agent 발화 끝
    90.60s  user  발화 시작: That’s a lot of fractions!
    90.60s  agent 발화 끝
    92.32s  agent 발화 시작: It can be a bit tricky, yes! It reflects the need for very p
    92.32s  user  발화 끝
    98.53s  user  발화 시작: Mm-hmm.
    98.53s  agent 발화 끝
    98.87s  user  발화 시작: So, if I weighed eleven stone, would that be…
    98.87s  user  발화 끝
   101.81s  <ret> 발화 (turn29 첫 프레임)
   101.97s  agent 발화 시작: <ret> Eleven stones is equal to one hundred and fifty-four p
   101.97s  ⚡SPAN 주입 [d'=1.04s / d_lead=3.44s]: Eleven stones is equal to one hundred and fifty-four pounds—simply by 
   101.97s  user  발화 끝
   105.42s  user  발화 시작: Yeah.
   105.42s  agent 발화 끝
   105.76s  user  발화 시작: Okay, that makes sense. Thanks for helping me with this!
   105.76s  user  발화 끝
   109.21s  agent 발화 시작: You’re very welcome!
   109.21s  user  발화 끝
   110.24s  agent 발화 끝
