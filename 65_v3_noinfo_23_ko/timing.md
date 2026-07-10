# v3_noinfo_23_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_noinfo_23",
#     "name": "윤형",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "early 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-29",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     },
#     {
#       "date": "2026-04-18",
#       "category": "home",
#       "text": "User's home address is 부산 수영구 광안동 210-3."
#     },
#     {
#       "date": "2025-11-17",
#       "category": "pet",
#       "text": "User has a Beagle named Rusty."
#     },
#     {
#       "date": "2025-10-06",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-08-24",
#       "category": "hobby",
#       "text": "User is into rock climbing."
#     },
#     {
#       "date": "2025-08-11",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Ethiopian."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-08",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2026-03-14",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2025-08-22",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 오늘 날씨 어때요?
     0.70s  <ret> 발화 (turn1 첫 프레임)
     1.09s  agent 발화 시작: <ret> 지금 서울 날씨는 이십육도이고, 습도는 칠십%, 바람은 시속 삼 점 이킬로미터입니다.
     1.10s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.77s]: (tool result) The weather in Seoul is currently 26.0°C, humidity 70%, 
     1.19s  user  발화 끝
     6.26s  user  발화 시작: 정말요?
     7.54s  user  발화 끝
     7.86s  agent 발화 끝
     7.92s  agent 발화 시작: 혹시 다른 지역 날씨도 궁금하신가요?
    10.69s  agent 발화 끝
    11.01s  user  발화 시작: 아니요, 괜찮아요. 그런데 스트레스 해소하는 방법 좀 알려주세요.
    14.21s  <ret> 발화 (turn5 첫 프레임)
    14.38s  user  발화 끝
    14.44s  agent 발화 시작: <ret> 스트레스 해소에 도움이 되는 방법은 여러 가지가 있습니다— 마음챙김 명상은 판단 없이 현재에 집중
    16.13s  ⚡SPAN 주입 [d'=1.92s / d_lead=3.88s]: Mindfulness meditation involves focusing on the present moment without
    22.10s  user  발화 시작: 네.
    22.59s  user  발화 끝
    25.10s  agent 발화 끝
    25.61s  user  발화 시작: … 잠깐만요, 명상은 좀 어려울 것 같은데, 좀 더 쉬운 방법은 없을까요?
    30.68s  agent 발화 시작: 좀 더 간단한 방법도 있어요.
    30.80s  user  발화 끝
    32.51s  agent 발화 끝
    32.62s  agent 발화 시작: 가벼운 산책이나 좋아하는 음악 듣는 것도 스트레스 해소에 효과적입니다.
    37.81s  agent 발화 끝
