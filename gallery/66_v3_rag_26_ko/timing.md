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

# EXAMINER(FDB-v2) 단계: S1 어… 요즘 독일 여행 생각 중인데, 혹시 독일 국기 색깔이 뭐 | S2 아, 맞다, 검정, 빨강, 노랑이었지. 근데 그 색깔들이 무슨 | S3 오, 그렇구나. 신기하네. 근데 요즘 독일 날씨는 어때? 갑자 | S4 아, 그렇구나. 그럼 독일 여행 가서 꼭 사야 할 기념품 같은

     0.00s  user  발화 시작: 어… 요즘 독일 여행 생각 중인데, 혹시 독일 국기 색깔이 뭐더라? 까먹었어.
     6.06s  <ret> 발화 (turn1 첫 프레임)
     6.38s  agent 발화 시작: <ret> 독일 여행을 생각하시는군요.
     6.53s  user  발화 끝
     7.82s  ⚡SPAN 주입 [d'=1.76s / d_lead=8.20s]: [source: Britannica] The flag of Germany consists of three equal horiz
    14.46s  agent 발화 시작: 독일 국기는 검정색, 빨간색, 그리고 노란색의 가로 줄무늬 세 개로 이루어져 있어요.
    14.58s  agent 발화 끝
    21.69s  agent 발화 끝
    22.30s  user  발화 시작: 아, 맞다, 검정, 빨강, 노랑이었지. 근데 그 색깔들이 무슨 의미가 있는 건가?
    30.84s  <ret> 발화 (turn4 첫 프레임)
    30.91s  agent 발화 시작: <ret> 국기 색상에는 각각 의미가 담겨 있다고 하죠.
    31.10s  user  발화 끝
    31.34s  ⚡SPAN 주입 [d'=0.50s / d_lead=0.63s]: [source: History.com] The colors of the German flag represent liberty 
    31.40s  agent 발화 시작: 독일 국기 색깔은 자유(검정색), 용기(빨간색), 그리고 번영(노란색)을 상징한다고 해요.
    31.54s  agent 발화 끝
    34.36s  user  발화 시작: 응응.
    37.89s  agent 발화 끝
    37.99s  user  발화 시작: 오, 그렇구나. 신기하네. 근데 요즘 독일 날씨는 어때? 갑자기 추워졌다는 뉴스 봤는데.
    42.66s  user  발화 끝
    42.98s  agent 발화 시작: 독일 날씨에 대한 뉴스를 보셨군요. 지금은 제가 날씨 정보를 바로 알 수는 없어요.
    43.13s  user  발화 끝
    47.83s  agent 발화 끝
    47.98s  user  발화 시작: 아, 그렇구나. 그럼 독일 여행 가서 꼭 사야 할 기념품 같은 거 있을까?
    54.83s  <ret> 발화 (turn10 첫 프레임)
    55.22s  agent 발화 시작: <ret> 독일 여행에서 기념품을 찾으시는군요.
    55.44s  user  발화 끝
    56.83s  ⚡SPAN 주입 [d'=2.00s / d_lead=12.66s]: [source: Lonely Planet] Popular souvenirs from Germany include cuckoo 
    67.76s  agent 발화 시작: 독일에서 인기 있는 기념품으로는 뻐꾸기 시계, 맥주잔, 그리고 크리스마스 장식이 있어요.
    67.88s  agent 발화 끝
    73.36s  agent 발화 끝
