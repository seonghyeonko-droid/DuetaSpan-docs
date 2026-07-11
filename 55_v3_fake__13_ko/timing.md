# v3_fake__13_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_fake__13",
#     "name": "수온",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "50s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-17",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-05-06",
#       "category": "pet",
#       "text": "User has a Corgi named Mochi."
#     },
#     {
#       "date": "2026-03-05",
#       "category": "trip",
#       "text": "User is planning a trip to Vietnam in March."
#     },
#     {
#       "date": "2026-01-24",
#       "category": "home",
#       "text": "User's home address is 서울 강남구 역삼동 678-9."
#     },
#     {
#       "date": "2025-11-02",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Mexican."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-30",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2025-12-19",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2025-09-12",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 혹시 넷플릭스 '위대한 개츠비'에… | S2 …나오는 바이올렛을 누가 연기했는지 알아요? | S3 아, 맞아요. '기묘한 가족'이었죠. | S4 그럼, 영화 추천 좀 해줄 수 있어요? 요즘 볼 만한 거요.

     0.00s  user  발화 시작: 혹시 넷플릭스 '위대한 개츠비'에…
     2.91s  user  발화 끝
     4.22s  user  발화 시작: …나오는 바이올렛을 누가 연기했는지 알아요?
     7.21s  <ret> 발화 (turn2 첫 프레임)
     7.37s  agent 발화 시작: <ret> '위대한 개츠비'가 아니라 '기묘한 가족'이었네요. 바이올렛 보들레르는 말리나 와이스먼 씨가 연기
     7.37s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.21s]: Malina Weissman played Violet Baudelaire in A Series of Unfortunate Ev
     7.45s  user  발화 끝
    13.57s  agent 발화 끝
    14.72s  user  발화 시작: 아, 맞아요. '기묘한 가족'이었죠.
    17.26s  <ret> 발화 (turn4 첫 프레임)
    17.49s  user  발화 끝
    17.66s  agent 발화 시작: <ret> 네, 맞아요. 가끔 제목이 헷갈릴 때가 있죠. 저는 게리라라고 해요. 혹시 사회생활에 대한 고민도
    17.66s  ⚡SPAN 주입(IRRELEVANT) [d'=2.00s / d_lead=7.83s]: The current temperature in Reykjavik, Iceland is 7.0°C, with clear ski
    25.49s  agent 발화 끝
    25.95s  user  발화 시작: 그럼, 영화 추천 좀 해줄 수 있어요? 요즘 볼 만한 거요.
    30.01s  <ret> 발화 (turn6 첫 프레임)
    30.33s  agent 발화 시작: <ret> 지금 상영 중인 인기 영화는 '오펜하이머', '바비', '플라워 킬링 문'이에요. 취향에 맞는 영
    30.33s  ⚡SPAN 주입 [d'=1.20s / d_lead=7.64s]: (tool result) Results: Oppenheimer, Barbie, Killers of the Flower Moon
    30.35s  user  발화 끝
    37.97s  agent 발화 끝
