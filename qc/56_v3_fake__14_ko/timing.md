# v3_fake__14_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_fake__14",
#     "name": "수민",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "50s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-08",
#       "category": "sibling",
#       "text": "User has a younger sibling named Ava."
#     },
#     {
#       "date": "2026-06-05",
#       "category": "trip",
#       "text": "User is planning a trip to Hokkaido in November."
#     },
#     {
#       "date": "2026-04-16",
#       "category": "work",
#       "text": "User works as a translator."
#     },
#     {
#       "date": "2026-04-11",
#       "category": "home",
#       "text": "User's home address is 부산 해운대구 해운대로 570."
#     },
#     {
#       "date": "2026-03-23",
#       "category": "hobby",
#       "text": "User is into trail running."
#     },
#     {
#       "date": "2026-03-07",
#       "category": "schedule",
#       "text": "User has a fully remote setup."
#     },
#     {
#       "date": "2026-01-22",
#       "category": "music",
#       "text": "User likes listening to city pop."
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

# EXAMINER(FDB-v2) 단계: S1 안녕하세요, 델라로 씨. 요즘 직장 동료랑 계속 부딪히는데… | S2 음, 그 사람은 좀 완고하고, 제 의견을 잘 들어주지 않아요. | S3 답답하고, 무시당하는 느낌이 들어요. | S4 단호하게 말하는 게 쉽지는 않네요.

     0.00s  user  발화 시작: 안녕하세요, 델라로 씨. 요즘 직장 동료랑 계속 부딪히는데…
     3.36s  user  발화 시작: …어떻게 해야 할까요?
     3.36s  user  발화 끝
     4.48s  <ret> 발화 (turn2 첫 프레임)
     4.62s  agent 발화 시작: <ret> 안녕하세요. 직장 동료와의 갈등 때문에 힘드시군요. 어떤 점이 가장 어려우신가요?
     4.62s  user  발화 끝
     5.53s  ⚡SPAN 주입 [d'=1.05s / d_lead=4.20s]: Conflict resolution involves understanding the other person's perspect
     8.82s  agent 발화 시작: 갈등 해결은 상대방의 관점을 이해하고 공통점을 찾는 것이 중요해요. 서로의 입장을 좀 더 자세히 알아볼까요?
     8.82s  agent 발화 끝
    15.12s  user  발화 시작: 네네.
    15.12s  agent 발화 끝
    15.54s  user  발화 시작: 음, 그 사람은 좀 완고하고, 제 의견을 잘 들어주지 않아요.
    15.54s  user  발화 끝
    19.70s  <ret> 발화 (turn7 첫 프레임)
    19.74s  agent 발화 시작: 음.
    19.74s  user  발화 끝
    20.16s  agent 발화 시작: <ret> 완고하고 의견을 잘 들어주지 않는 상대방과 소통하는 건 쉽지 않죠. 혹시 구체적인 상황을 예시로 
    20.16s  agent 발화 끝
    20.70s  ⚡SPAN 주입(IRRELEVANT) [d'=1.00s / d_lead=7.14s]: The average rainfall in Reykjavik, Iceland is 798 mm per year.
    27.30s  agent 발화 시작: 상황을 좀 더 자세히 말씀해주시면 더 정확한 조언을 드릴 수 있을 것 같아요.
    27.30s  agent 발화 끝
    32.75s  user  발화 시작: 네.
    32.75s  agent 발화 끝
    33.17s  agent 발화 시작: 혹시 상대방의 행동으로 인해 어떤 감정을 느끼시는지 말씀해주실 수 있을까요? 감정을 명확히 표현하는 것도 중
    33.17s  user  발화 끝
    39.47s  user  발화 시작: 답답하고, 무시당하는 느낌이 들어요.
    39.47s  agent 발화 끝
    40.84s  <ret> 발화 (turn12 첫 프레임)
    41.14s  ⚡SPAN 주입 [d'=0.30s / d_lead=5.46s]: Assertive communication involves expressing your needs and opinions cl
    41.15s  agent 발화 시작: <ret> 답답하고 무시당하는 느낌이 드신다니, 정말 힘드시겠어요. 그런 감정을 표현하는 방법을 찾아보는 게
    41.15s  user  발화 끝
    46.61s  agent 발화 시작: 자신의 요구와 의견을 명확하고 존중하는 방식으로 표현하는 단호한 의사소통이 도움이 될 수 있어요.
    46.61s  agent 발화 끝
    52.07s  user  발화 시작: 단호하게 말하는 게 쉽지는 않네요.
    52.07s  agent 발화 끝
    54.17s  agent 발화 시작: 물론 쉽지 않죠. 하지만 연습을 통해 조금씩 나아질 수 있어요. 한번 함께 연습해 볼까요?
    54.17s  user  발화 끝
    60.05s  agent 발화 시작: 아니면, 좀 더 편안한 마음으로 대화할 수 있는 다른 방법도 찾아볼 수 있어요.
    60.05s  agent 발화 끝
    65.51s  agent 발화 끝
