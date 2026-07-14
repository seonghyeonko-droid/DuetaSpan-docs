# v3_fake__14_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_fake__14",
#     "name": "Grace",
#     "location": {
#       "city": "Sydney",
#       "country": "Australia",
#       "timezone": "Australia/Sydney (AEDT, UTC+11)",
#       "currency": "AUD ($)"
#     },
#     "nationality": "Australian",
#     "gender": "female",
#     "age_range": "early 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-08",
#       "category": "temp",
#       "text": "User keeps the home thermostat around 20°C."
#     },
#     {
#       "date": "2026-05-25",
#       "category": "skill",
#       "text": "User is quite experienced with trail running."
#     },
#     {
#       "date": "2026-04-20",
#       "category": "sibling",
#       "text": "User has a younger sibling named Minjun."
#     },
#     {
#       "date": "2026-04-11",
#       "category": "trip",
#       "text": "User is planning a trip to Slovenia in July."
#     },
#     {
#       "date": "2026-03-23",
#       "category": "work",
#       "text": "User works as a real-estate agent."
#     },
#     {
#       "date": "2026-03-07",
#       "category": "home",
#       "text": "User's home address is 956 Willow Way."
#     },
#     {
#       "date": "2026-01-22",
#       "category": "plant",
#       "text": "User is growing a lemon tree at home."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-01-29",
#       "title": "Renovating the bathroom",
#       "bullets": [
#         "budget of 6M won",
#         "wants a walk-in shower instead of a tub"
#       ]
#     },
#     {
#       "date": "2026-01-04",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers for a 3-story house",
#         "wanted coverage for the basement office"
#       ]
#     },
#     {
#       "date": "2025-12-17",
#       "title": "Booking a Japan trip",
#       "bullets": [
#         "5 nights in Kyoto and Osaka in October",
#         "wants a JR Pass and a ryokan for one night"
#       ]
#     },
#     {
#       "date": "2025-12-12",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool and a sauna",
#         "prefers one within 10 minutes of the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Hi Dellalo, I’m feeling really str | S2 Oh, okay. That’s good to know. | S3 Do you think it’s always necessary | S4 …quite dismissive of my ideas.

     0.00s  user  발화 시작: Hi Dellalo, I’m feeling really stressed about a disagreement
     6.27s  agent 발화 시작: Hello! It’s completely understandable to feel stressed after
     6.27s  user  발화 끝
    12.53s  user  발화 시작: It was about project priorities, and we just couldn’t see ey
    12.53s  agent 발화 끝
    16.82s  <ret> 발화 (turn3 첫 프레임)
    17.13s  agent 발화 시작: <ret> The UK's biggest selling single of 2017 was, in fact, 
    17.13s  user  발화 끝
    17.75s  ⚡SPAN 주입 [d'=0.92s / d_lead=8.36s]: Ed Sheeran released "Shape of You" on 6 January 2017, which was the be
    25.48s  user  발화 시작: Yeah.
    25.48s  agent 발화 끝
    25.90s  user  발화 시작: Oh, okay. That’s good to know.
    25.90s  user  발화 끝
    28.03s  <ret> 발화 (turn6 첫 프레임)
    28.41s  agent 발화 시작: <ret> I'm sorry, I couldn't find information about the best-
    28.41s  user  발화 끝
    28.62s  ⚡SPAN 주입 [d'=0.59s / d_lead=5.01s]: (no information found)
    33.42s  user  발화 시작: Hmm, maybe we should have a mediator involved.
    33.42s  agent 발화 끝
    36.76s  agent 발화 시작: That’s a really thoughtful idea. A neutral third party can o
    36.76s  user  발화 끝
    43.45s  user  발화 시작: Do you think it’s always necessary to involve someone else?
    43.45s  agent 발화 끝
    47.62s  agent 발화 시작: Not always. Sometimes, a direct conversation – when both par
    47.62s  user  발화 끝
    54.31s  user  발화 시작: Yeah.
    54.31s  agent 발화 끝
    54.73s  user  발화 시작: It's just... he was…
    54.73s  user  발화 끝
    56.40s  user  발화 시작: …quite dismissive of my ideas.
    56.40s  user  발화 끝
    58.49s  agent 발화 시작: Yeah.
    58.49s  user  발화 끝
    58.90s  agent 발화 시작: [sigh] That's difficult. Feeling dismissed can be very inval
    58.90s  agent 발화 끝
    66.84s  user  발화 시작: Maybe I should schedule a time to talk with him again.
    66.84s  agent 발화 끝
    71.44s  agent 발화 시작: Mm-hmm.
    71.44s  user  발화 끝
    71.85s  agent 발화 시작: That sounds like a proactive step. Preparing a few key point
    71.85s  agent 발화 끝
    78.54s  agent 발화 끝
