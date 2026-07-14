# v3_mcp_02_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mcp_02",
#     "name": "시진",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "late 40s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-28",
#       "category": "medication",
#       "text": "User takes a vitamin D supplement."
#     },
#     {
#       "date": "2026-04-10",
#       "category": "wake",
#       "text": "User usually wakes up close to 9am after night shifts."
#     },
#     {
#       "date": "2026-03-27",
#       "category": "temp",
#       "text": "User keeps the home thermostat around 22°C."
#     },
#     {
#       "date": "2026-03-19",
#       "category": "streaming",
#       "text": "User subscribes to Apple Music and Coupang Play."
#     },
#     {
#       "date": "2026-03-05",
#       "category": "trip",
#       "text": "User is planning a trip to Vietnam in July."
#     },
#     {
#       "date": "2026-01-12",
#       "category": "work",
#       "text": "User works as a dentist."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-25",
#       "title": "Training for a 10K",
#       "bullets": [
#         "current pace is around 6 minutes per km",
#         "race is in November"
#       ]
#     },
#     {
#       "date": "2026-03-25",
#       "title": "Renovating the bathroom",
#       "bullets": [
#         "budget of 6M won",
#         "wants a walk-in shower instead of a tub"
#       ]
#     },
#     {
#       "date": "2026-02-23",
#       "title": "Looking for a therapist",
#       "bullets": [
#         "prefers evening video sessions",
#         "wants someone who does CBT"
#       ]
#     },
#     {
#       "date": "2026-02-02",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool and a sauna",
#         "prefers one within 10 minutes of the office"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 혹시 도쿄역에서 황궁까지 걸어가면 얼마나 걸릴까?
     3.02s  <ret> 발화 (turn1 첫 프레임)
     3.42s  agent 발화 시작: <ret> 도쿄역에서 황궁까지 걸어가면 대략 이 점 일킬로미터이고, 보통 이십팔분 정도 걸립니다. 날씨가 좋
     3.42s  user  발화 끝
     4.02s  ⚡SPAN 주입 [d'=1.00s / d_lead=8.56s]: The walking distance between Tokyo Station and the Imperial Palace is 
    11.98s  user  발화 시작: 어, 이십팔분이면 괜찮네. 그럼 지금 바로 출발하면 딱 좋을 것 같은데.
    11.98s  agent 발화 끝
    17.91s  <ret> 발화 (turn3 첫 프레임)
    18.21s  ⚡SPAN 주입 [d'=0.30s / d_lead=12.55s]: (tool result) {"route": "Walking directions from Tokyo Station to the 
    18.25s  agent 발화 시작: <ret> 지금 출발하시면 도쿄역에서 북쪽으로 마루노우치 중앙도리를 따라 걸으시고, 니주바시도리로 우회전하신
    18.25s  user  발화 끝
    30.80s  user  발화 시작: 고마워, 베아우스. 그런데 혹시 지금 서울 날씨는 어때?
    30.80s  agent 발화 끝
    35.37s  agent 발화 시작: 그렇죠.
    35.37s  user  발화 끝
    35.83s  <ret> 발화 (turn6 첫 프레임)
    35.94s  agent 발화 시작: <ret> 현재 서울 날씨는 이십팔 점 오도이고, 습도는 육십팔퍼센트, 서남서풍이 약하게 불고 있습니다. 시
    35.94s  agent 발화 끝
    36.80s  ⚡SPAN 주입 [d'=0.97s / d_lead=10.84s]: The current weather in Seoul is 28.5°C, with humidity at 68%, and a li
    46.78s  agent 발화 끝
