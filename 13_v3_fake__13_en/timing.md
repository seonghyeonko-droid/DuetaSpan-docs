# v3_fake__13_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_fake__13",
#     "name": "Casey",
#     "location": {
#       "city": "London",
#       "country": "United Kingdom",
#       "timezone": "Europe/London (GMT, UTC+0)",
#       "currency": "GBP (£)"
#     },
#     "nationality": "British",
#     "gender": "non-binary",
#     "age_range": "early 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-08",
#       "category": "hobby",
#       "text": "User is into rock climbing."
#     },
#     {
#       "date": "2026-04-03",
#       "category": "pet",
#       "text": "User has a tabby cat named Luna."
#     },
#     {
#       "date": "2026-03-10",
#       "category": "work",
#       "text": "User works as a nurse."
#     },
#     {
#       "date": "2026-01-26",
#       "category": "home",
#       "text": "User's home address is 203 Birch Road."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-07-22",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2026-07-04",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2026-06-26",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 I was wondering, when is Demi Lova | S2 I mean, I just saw a post online. | S3 So, nothing new *right now*? Just  | S4 Oh, okay! 2017… still not super re

     0.00s  user  발화 시작: I was wondering, when is Demi Lovato’s new album coming out?
     6.37s  <ret> 발화 (turn1 첫 프레임)
     6.61s  agent 발화 시작: <ret> It’s wonderful you’re anticipating new music from Demi
     6.63s  user  발화 끝
     8.37s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.06s]: Demi Lovato’s album, *Confident*, was released in October 2015.
    12.48s  agent 발화 시작: Her album *Confident* came out in October of twenty fifteen.
    12.68s  agent 발화 끝
    18.43s  user  발화 시작: Oh, 2015? That feels like ages ago! Is she working on someth
    18.54s  agent 발화 끝
    24.34s  agent 발화 시작: It does feel like quite some time has passed. Many artists d
    24.54s  user  발화 끝
    31.34s  user  발화 시작: I mean, I just saw a post online.
    31.38s  agent 발화 끝
    33.97s  agent 발화 시작: It’s easy to get caught up in online buzz, and it’s understa
    34.06s  user  발화 끝
    40.64s  user  발화 시작: But is there an actual release date announced for a *new* al
    41.28s  agent 발화 끝
    44.61s  <ret> 발화 (turn8 첫 프레임)
    44.93s  agent 발화 시작: <ret> You’re right to ask for specifics. Let me check for cu
    45.08s  user  발화 끝
    46.61s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.84s]: Demi Lovato’s eighth studio album, *Revival*, was released on Septembe
    50.69s  agent 발화 시작: Her most recent album, *Revival*, was released September twe
    50.76s  agent 발화 끝
    52.79s  user  발화 시작: Mm-hmm.
    53.28s  user  발화 끝
    55.77s  <ret> 발화 (turn11 첫 프레임)
    56.16s  agent 발화 시작: <ret> Sometimes finding the details requires a bit of diggin
    56.34s  agent 발화 끝
    57.77s  ⚡SPAN 주입(IRRELEVANT) [d'=2.00s / d_lead=5.74s]: The giraffe, *Giraffa camelopardalis*, is an African artiodactyl mamma
    61.79s  agent 발화 시작: I find when we're seeking creative inspiration, sometimes a 
    61.91s  agent 발화 끝
    67.40s  agent 발화 끝
    67.51s  user  발화 시작: So, nothing new *right now*? Just *Revival* from 2016?
    72.97s  user  발화 끝
    73.35s  agent 발화 시작: It appears that as of today, there isn't a confirmed release
    81.00s  agent 발화 끝
    81.08s  user  발화 시작: Okay. Well, what about singles? Has she released any new sin
    86.15s  <ret> 발화 (turn16 첫 프레임)
    86.22s  agent 발화 시작: <ret> That's a good question. Let’s see if there’s any infor
    86.26s  user  발화 끝
    88.15s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.29s]: Demi Lovato released the single “Sorry Not Sorry” on July 11, 2017.
    92.32s  agent 발화 시작: She released “Sorry Not Sorry” on July eleventh, twenty seve
    92.51s  agent 발화 끝
    96.28s  user  발화 시작: Mm-hmm.
    96.96s  user  발화 끝
    99.92s  agent 발화 끝
   100.36s  user  발화 시작: Oh, okay! 2017… still not super recent, but better than noth
   107.59s  user  발화 끝
