# v3_backg_17_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_backg_17",
#     "name": "Ava",
#     "location": {
#       "city": "Paris",
#       "country": "France",
#       "timezone": "Europe/Paris (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "French",
#     "gender": "female",
#     "age_range": "early 20s",
#     "language": "French"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-25",
#       "category": "hobby",
#       "text": "User is into alpine wildflower photography."
#     },
#     {
#       "date": "2026-04-07",
#       "category": "pet",
#       "text": "User has a Poodle named Coco."
#     },
#     {
#       "date": "2026-02-19",
#       "category": "trip",
#       "text": "User is planning a trip to Switzerland in December."
#     },
#     {
#       "date": "2025-12-30",
#       "category": "home",
#       "text": "User's home address is 68 Birch Road."
#     },
#     {
#       "date": "2025-12-24",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-26",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2026-04-02",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2026-02-19",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Hi Frialo, I was wondering who own | S2 That’s good to know. What about th | S3 …but does that affect the movie ri | S4 That seems a little unfair, doesn'

     0.00s  user  발화 시작: Hi Frialo, I was wondering who owns the rights to the Black 
     4.77s  agent 발화 시작: Hi there! That's a great question. The rights to the Black P
     4.77s  user  발화 끝
    10.90s  user  발화 시작: Oh, okay. I always get those studio things mixed up.
    10.90s  agent 발화 끝
    14.30s  agent 발화 시작: It's very easy to do! There are a lot of players in the movi
    14.30s  user  발화 끝
    19.41s  user  발화 시작: So, does Disney have anything to do with it then?
    19.41s  agent 발화 끝
    22.43s  <ret> 발화 (turn5 첫 프레임)
    22.81s  agent 발화 시작: <ret> Yes, Disney does! Disney acquired Marvel Entertainment
    22.81s  user  발화 끝
    23.09s  ⚡SPAN 주입 [d'=0.75s / d_lead=4.77s]: The Walt Disney Company acquired Marvel Entertainment in 2009 for $4 b
    27.58s  user  발화 시작: Exactly.
    27.58s  agent 발화 끝
    27.92s  agent 발화 시작: It was a huge deal, and it gave Disney access to a fantastic
    27.92s  user  발화 끝
    33.37s  user  발화 시작: Do they own all of Marvel’s characters outright, or just hav
    33.37s  agent 발화 끝
    37.74s  <ret> 발화 (turn10 첫 프레임)
    37.80s  agent 발화 시작: Yeah.
    37.80s  user  발화 끝
    38.08s  ⚡SPAN 주입 [d'=1.14s / d_lead=5.79s]: Marvel Studios, a subsidiary of The Walt Disney Company, maintains own
    38.14s  agent 발화 시작: <ret> Marvel Studios, which is part of Disney, actually owns
    38.14s  agent 발화 끝
    43.92s  user  발화 시작: That’s good to know. What about the comic books themselves?
    43.92s  agent 발화 끝
    47.31s  <ret> 발화 (turn12 첫 프레임)
    47.33s  agent 발화 시작: <ret> The comic books are published by Marvel Comics, anothe
    47.33s  user  발화 끝
    48.14s  ⚡SPAN 주입 [d'=0.83s / d_lead=4.43s]: Marvel Comics, a subsidiary of Marvel Entertainment, publishes America
    51.76s  user  발화 시작: So, it's all pretty interconnected, then?
    51.76s  agent 발화 끝
    53.80s  agent 발화 시작: It’s a whole ecosystem of creative ownership.
    53.80s  user  발화 끝
    56.18s  user  발화 시작: Yeah.
    56.18s  agent 발화 끝
    56.52s  user  발화 시작: I was reading about copyright issues with some older comics.
    56.52s  user  발화 끝
    59.93s  agent 발화 시작: Mm-hmm.
    59.93s  user  발화 끝
    60.27s  agent 발화 시작: That's a really interesting area—
    60.27s  agent 발화 끝
    61.97s  user  발화 시작: …but does that affect the movie rights at all?
    61.97s  agent 발화 끝
    65.04s  agent 발화 시작: That’s a good point to bring up! While copyright issues with
    65.04s  user  발화 끝
    72.87s  user  발화 시작: Oh, that makes sense. So the movie rights are separate?
    72.87s  agent 발화 끝
    76.27s  agent 발화 시작: Precisely. The movie rights are negotiated separately, even 
    76.27s  user  발화 끝
    81.04s  user  발화 시작: Mm-hmm.
    81.04s  agent 발화 끝
    81.38s  user  발화 시작: [sigh] It’s all so complicated. I’m glad you could explain t
    81.38s  user  발화 끝
    85.12s  agent 발화 시작: [happy] I'm happy to help! It can be a bit of a maze, but un
    85.12s  user  발화 끝
    91.59s  user  발화 시작: What about the actors? Do they own any rights to their chara
    91.59s  agent 발화 끝
    95.17s  <ret> 발화 (turn27 첫 프레임)
    95.47s  ⚡SPAN 주입 [d'=0.30s / d_lead=5.45s]: Actors generally do not own the rights to the characters they portray.
    95.68s  agent 발화 시작: <ret> Typically, actors don’t own the rights to the characte
    95.68s  user  발화 끝
   101.13s  user  발화 시작: Mm-hmm.
   101.13s  agent 발화 끝
   101.47s  user  발화 시작: That seems a little unfair, doesn't it?
   101.47s  user  발화 끝
   103.85s  agent 발화 시작: It's a common arrangement in the industry, but it's definite
   103.85s  user  발화 끝
   108.96s  user  발화 시작: I guess so. Is there any way for actors to benefit long-term
   108.96s  agent 발화 끝
   113.05s  agent 발화 시작: They can negotiate for royalties or profit-sharing based on 
   113.05s  user  발화 끝
   118.83s  user  발화 시작: That's good to hear. Thanks for all the information, Frialo.
   118.83s  agent 발화 끝
   122.24s  agent 발화 시작: [laugh] You’re very welcome! I’m glad I could clarify things
   122.24s  user  발화 끝
   130.41s  agent 발화 끝
