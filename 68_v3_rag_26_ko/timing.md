# v3_rag_26_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_26",
#     "name": "도원",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "early 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-10",
#       "category": "pet",
#       "text": "User has a Beagle named Rusty."
#     },
#     {
#       "date": "2026-03-01",
#       "category": "trip",
#       "text": "User is planning a trip to Kyoto in December."
#     },
#     {
#       "date": "2026-02-09",
#       "category": "work",
#       "text": "User works as a architect."
#     },
#     {
#       "date": "2025-09-27",
#       "category": "diet",
#       "text": "User is pescatarian."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-10",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2026-04-04",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2025-10-19",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 음… 요즘 계속 날씨가 안 좋네요. 독일 국기는 어떤 색깔이에요?
     5.66s  <ret> 발화 (turn1 첫 프레임)
     5.74s  agent 발화 시작: <ret> 날씨가 꿉꿉하긴 하네요. 독일 국기 색깔에 대해 알아볼까요?
     5.83s  user  발화 끝
     7.66s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.58s]: [source: Britannica] The flag of Germany consists of three equal horiz
    10.21s  agent 발화 시작: 독일 국기는 검정색, 빨간색, 그리고 금색의 가로 줄무늬 세 개로 이루어져 있어요.
    10.32s  agent 발화 끝
    16.29s  user  발화 시작: 아, 검정, 빨강, 금색이군요. 혹시 그 색깔들이 무슨 의미가 있어요?
    16.33s  agent 발화 끝
    22.02s  <ret> 발화 (turn4 첫 프레임)
    22.15s  agent 발화 시작: <ret> 색깔마다 의미가 담겨 있는 경우가 많죠. 그 의미에 대해 좀 더 자세히 알아볼까요?
    22.36s  user  발화 끝
    24.02s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.37s]: [source: History.com] The black represents determination, the red sign
    27.48s  agent 발화 시작: 검정색은 결의, 빨간색은 용기, 그리고 금색은 관용을 상징한다고 해요.
    27.52s  agent 발화 끝
    30.14s  user  발화 시작: 응응.
    30.92s  user  발화 끝
    33.32s  agent 발화 끝
    33.41s  user  발화 시작: 오, 흥미롭네요. 관용이라… 근데 독일은 옛날에 청동기 시대에도 번성했었나요?
    41.21s  <ret> 발화 (turn8 첫 프레임)
    41.36s  agent 발화 시작: <ret> 기원전 이천이백년에서 팔백년 사이에 독일 지역에서 청동기 문화가 번성했고, 중요한 고고학적 증거를
    41.48s  user  발화 끝
    43.21s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.95s]: [source: World History Encyclopedia] Bronze Age cultures flourished in
    50.31s  agent 발화 끝
