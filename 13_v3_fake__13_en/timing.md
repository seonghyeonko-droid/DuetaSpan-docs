# v3_fake__13_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_fake__13",
#     "name": "Caleb",
#     "location": {
#       "city": "London",
#       "country": "United Kingdom",
#       "timezone": "Europe/London (GMT, UTC+0)",
#       "currency": "GBP (£)"
#     },
#     "nationality": "British",
#     "gender": "male",
#     "age_range": "early 20s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-01-18",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Thai."
#     },
#     {
#       "date": "2025-08-19",
#       "category": "diet",
#       "text": "User is gluten-free."
#     },
#     {
#       "date": "2025-07-27",
#       "category": "hobby",
#       "text": "User is into home fermentation."
#     },
#     {
#       "date": "2025-07-25",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-07-19",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2025-06-23",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 What channel is the Weather Channe | S2 Hmm, I think I remember setting up | S3 Oh, good! That's a relief. | S4 Okay, thanks, Gera.

     0.00s  user  발화 시작: What channel is the Weather Channel on Direct TV?
     3.45s  <ret> 발화 (turn1 첫 프레임)
     3.51s  user  발화 끝
     3.68s  agent 발화 시작: <ret> The Weather Channel is available on Direct TV channel 
     3.69s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.11s]: The Weather Channel is available on Direct TV channel 362.
     9.79s  user  발화 시작: And what about the local news?
     9.79s  agent 발화 끝
    11.39s  <ret> 발화 (turn3 첫 프레임)
    11.78s  agent 발화 시작: <ret> Local news channels vary depending on your location, o
    11.79s  ⚡SPAN 주입 [d'=1.20s / d_lead=3.75s]: (no information found)
    11.91s  user  발화 끝
    14.50s  user  발화 시작: Mm-hmm.
    15.14s  user  발화 끝
    15.15s  user  발화 시작: Hmm, I think I remember setting up a reminder.
    15.53s  agent 발화 끝
    18.16s  user  발화 끝
    18.23s  agent 발화 시작: It’s good to stay proactive about checking the weather—
    20.27s  user  발화 시작: …did I set a reminder for a storm warning last week?
    20.82s  agent 발화 끝
    23.49s  <ret> 발화 (turn8 첫 프레임)
    23.55s  agent 발화 시작: <ret> Yes, you did. On July 3rd, you set a reminder to check
    23.57s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.63s]: [2024-07-03] I set a reminder to check the weather for a potential sto
    23.82s  user  발화 끝
    30.17s  user  발화 시작: Oh, good! That's a relief.
    30.17s  agent 발화 끝
    32.15s  user  발화 끝
    32.60s  agent 발화 시작: I'm glad I could help you remember. It's easy to forget thos
    35.19s  user  발화 시작: Yeah.
    35.82s  user  발화 끝
    36.86s  agent 발화 끝
    38.64s  user  발화 시작: Is there a way to get alerts directly?
    41.18s  user  발화 끝
    41.44s  agent 발화 시작: Direct TV doesn't offer weather alerts directly, but you can
    46.76s  agent 발화 끝
    47.24s  user  발화 시작: Okay, thanks, Gera.
    48.76s  user  발화 끝
    48.88s  agent 발화 시작: You’re very welcome. Stay safe and dry out there!
    52.07s  agent 발화 끝
