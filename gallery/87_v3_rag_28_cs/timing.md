# v3_rag_28_cs — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_28",
#     "name": "Felix",
#     "location": {
#       "city": "New York",
#       "country": "United States",
#       "timezone": "America/New_York (EST, UTC-5)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "male",
#     "age_range": "late 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-16",
#       "category": "hobby",
#       "text": "User is into vintage synth collecting."
#     },
#     {
#       "date": "2026-04-21",
#       "category": "allergy",
#       "text": "User is allergic to peanuts."
#     },
#     {
#       "date": "2026-04-17",
#       "category": "home",
#       "text": "User's home address is 972 Maple Drive."
#     },
#     {
#       "date": "2026-03-08",
#       "category": "diet",
#       "text": "User is gluten-free."
#     },
#     {
#       "date": "2026-01-25",
#       "category": "trip",
#       "text": "User is planning a trip to Switzerland in March."
#     },
#     {
#       "date": "2025-12-28",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-22",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2026-02-07",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 아까 흥얼거리는 노래가 있었는데, 누가 불렀는지 기억이 안 나요. “Ain’t too proud to beg
     7.48s  <ret> 발화 (turn1 첫 프레임)
     7.84s  agent 발화 시작: <ret> 네, 그 노래, "Ain't Too Proud to Beg"는 천구백육십육년에 The Tempta
     7.84s  user  발화 끝
     8.23s  ⚡SPAN 주입 [d'=0.75s / d_lead=6.86s]: The Temptations released the song "Ain't Too Proud to Beg" in 1966, an
    14.71s  user  발화 시작: 네.
    14.71s  agent 발화 끝
    15.20s  user  발화 시작: The Temptations… 음, 다른 사람일 줄 알았어요. 아직도 공연하고 있어요?
    15.20s  user  발화 끝
    20.10s  agent 발화 시작: 네, 공연하고 있어요! The Temptations는 여전히 투어를 하고 있는데, 멤버 구성은 시간이 지나면
    20.10s  user  발화 끝
    26.96s  user  발화 시작: 음.
    26.96s  agent 발화 끝
    27.45s  user  발화 시작: 아, 다행이다. 요즘 무슨 음악을 해요?
    27.45s  user  발화 끝
    30.39s  agent 발화 시작: 아.
    30.39s  user  발화 끝
    30.88s  agent 발화 시작: 주로 그들의 대표적인 히트곡들을 연주하지만, 공연에서는 새로운 곡들도 몇 곡 포함하고 있어요.
    30.88s  agent 발화 끝
    36.76s  agent 발화 끝
