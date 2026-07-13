# v3_selfc_07_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_selfc_07",
#     "name": "가완",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "40s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-19",
#       "category": "allergy",
#       "text": "User is allergic to cat dander."
#     },
#     {
#       "date": "2026-06-01",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-04-07",
#       "category": "work",
#       "text": "User works as a chef."
#     },
#     {
#       "date": "2026-03-12",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Ethiopian."
#     },
#     {
#       "date": "2025-12-24",
#       "category": "home",
#       "text": "User's home address is 부산 수영구 광안동 210-3."
#     },
#     {
#       "date": "2025-12-06",
#       "category": "trip",
#       "text": "User is planning a trip to New Zealand in October."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-18",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2026-03-07",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2026-01-19",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 오늘 저녁에 영화 볼 만한 거 있어?
     3.15s  <ret> 발화 (turn1 첫 프레임)
     3.55s  agent 발화 시작: <ret> 지금 상영 중인 영화는…
     3.55s  user  발화 끝
     4.43s  ⚡SPAN 주입 [d'=1.28s / d_lead=2.03s]: {"function": "Movies_1_FindMovies", "arguments": {"location": "Busan",
     5.58s  user  발화 시작: …혹시 로맨틱 코미디는 없어?
     5.58s  agent 발화 끝
     7.36s  <ret> 발화 (turn3 첫 프레임)
     7.61s  agent 발화 시작: <ret> 로맨틱 코미디를 원하시는군요. '달콤한 거짓말'과 '사랑은 타이밍'이 있네요.
     7.61s  user  발화 끝
     7.66s  ⚡SPAN 주입 [d'=0.30s / d_lead=4.06s]: {"function": "Movies_1_FindMovies", "arguments": {"location": "Busan",
    11.67s  agent 발화 시작: '달콤한 거짓말'은 평점이 조금 더 높아요.
    11.67s  agent 발화 끝
    14.71s  user  발화 시작: 응.
    14.71s  agent 발화 끝
    15.22s  user  발화 시작: '달콤한 거짓말' 몇 시에 상영해?
    15.22s  user  발화 끝
    17.41s  <ret> 발화 (turn7 첫 프레임)
    17.76s  agent 발화 시작: <ret> '달콤한 거짓말'은 오늘 저녁 일곱시와 아홉시 삼십분에 상영합니다.
    17.76s  user  발화 끝
    18.41s  ⚡SPAN 주입 [d'=1.01s / d_lead=4.06s]: {"function": "Movies_1_GetTimesForMovie", "arguments": {"movie": "달콤한 
    21.82s  agent 발화 시작: 혹시 예매를 도와드릴까요?
    21.82s  agent 발화 끝
    23.34s  agent 발화 끝
