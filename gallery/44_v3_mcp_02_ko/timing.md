# v3_mcp_02_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mcp_02",
#     "name": "유희",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "late 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-23",
#       "category": "allergy",
#       "text": "User is allergic to shellfish."
#     },
#     {
#       "date": "2026-03-30",
#       "category": "trip",
#       "text": "User is planning a trip to Vietnam in March."
#     },
#     {
#       "date": "2025-10-06",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     },
#     {
#       "date": "2025-08-07",
#       "category": "home",
#       "text": "User's home address is 부산 수영구 광안동 210-3."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-02-08",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2025-10-29",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2025-07-26",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 혹시 아마존에 접속해 줄 수 있어? | S2 음… 사실 잠이 잘 안 와서, 편안하게 잘 수 있는 걸 좀 찾 | S3 어, 좋지— 잠깐만, 혹시 지금 서울 날씨는 어때? | S4 …아, 그래도 잠자리랑은 상관없는 얘기니까, 다시 아마존 얘기

     0.00s  user  발화 시작: 혹시 아마존에 접속해 줄 수 있어?
     1.92s  <ret> 발화 (turn1 첫 프레임)
     2.32s  agent 발화 시작: <ret> 네, 아마존에 접속했습니다. 혹시 찾으시는 물건이 있으신가요?
     2.32s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.72s]: (tool result) Navigation completed successfully to https://www.amazon.
     2.40s  user  발화 끝
     6.92s  user  발화 시작: 음… 사실 잠이 잘 안 와서, 편안하게 잘 수 있는 걸 좀 찾아보려고.
     7.04s  agent 발화 끝
    11.92s  user  발화 끝
    12.05s  agent 발화 시작: 편안한 잠을 위한 물건을 찾으시는군요. 제가 몇 가지 추천해 드릴까요?
    15.68s  user  발화 시작: 어어.
    16.49s  user  발화 끝
    17.14s  agent 발화 끝
    17.42s  user  발화 시작: 어, 좋지— 잠깐만, 혹시 지금 서울 날씨는 어때?
    20.68s  <ret> 발화 (turn6 첫 프레임)
    20.84s  agent 발화 시작: <ret> 현재 서울 날씨는 이십육도, 습도는 육십팔퍼센트, 바람은 시속 삼 점 이킬로미터입니다.
    20.84s  ⚡SPAN 주입 [d'=1.76s / d_lead=6.39s]: Current weather in Seoul is 26.0°C, humidity 68%, wind 3.2 km/h.
    21.03s  user  발화 끝
    27.23s  agent 발화 끝
    28.47s  user  발화 시작: …아, 그래도 잠자리랑은 상관없는 얘기니까, 다시 아마존 얘기로 돌아가자.
    33.52s  agent 발화 시작: 네, 알겠습니다.
    33.66s  user  발화 끝
    34.99s  agent 발화 끝
