# v3_rag_25_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_25",
#     "name": "세서",
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
#       "date": "2026-04-29",
#       "category": "work",
#       "text": "User works as a graduate student."
#     },
#     {
#       "date": "2026-02-21",
#       "category": "hobby",
#       "text": "User is into alpine wildflower photography."
#     },
#     {
#       "date": "2026-02-18",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2025-12-22",
#       "category": "pet",
#       "text": "User has a Corgi named Mochi."
#     },
#     {
#       "date": "2025-12-05",
#       "category": "allergy",
#       "text": "User is allergic to penicillin."
#     },
#     {
#       "date": "2025-06-11",
#       "category": "trip",
#       "text": "User is planning a trip to Vietnam in May."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-12-06",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 안녕하세요. 새로운 도시에 이사 왔는데, 정착하는 데 도움이  | S2 A1 도로가 영국에서 가장 긴 도로라고요? | S3 스테이지코치 팔십육번은 어디로 가나요?. | S4 육 점 이마일이면 얼마나 걸릴까요?

     0.00s  user  발화 시작: 안녕하세요. 새로운 도시에 이사 왔는데, 정착하는 데 도움이 필요해요.
     4.49s  user  발화 끝
     4.62s  agent 발화 시작: 안녕하세요. 새로운 도시 정착을 도와드릴 수 있어서 기쁩니다. 어떤 점이 가장 걱정되세요?
     6.60s  user  발화 시작: 네.
     7.09s  user  발화 끝
    10.55s  agent 발화 끝
    10.93s  user  발화 시작: 음… 교통이 좀 걱정되네요.…
    13.24s  user  발화 끝
    14.55s  user  발화 시작: …대중교통이 잘 되어 있는지 궁금해요.
    16.46s  <ret> 발화 (turn5 첫 프레임)
    16.85s  agent 발화 시작: <ret> Stainby는 링컨셔의 South Kesteven 지역에 있는 작은 마을이고, A1 도로에서 서
    16.86s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.37s]: Stainby is a hamlet in the South Kesteven district of Lincolnshire, an
    16.95s  user  발화 끝
    22.16s  user  발화 시작: 와.
    22.93s  user  발화 끝
    24.22s  agent 발화 끝
    24.26s  user  발화 시작: A1 도로가 영국에서 가장 긴 도로라고요?
    27.04s  <ret> 발화 (turn8 첫 프레임)
    27.12s  agent 발화 시작: <ret> 네, A1은 영국에서 가장 긴 번호가 매겨진 도로입니다.
    27.12s  ⚡SPAN 주입 [d'=1.52s / d_lead=3.98s]: The A1 is the longest numbered road in which country?
    27.31s  user  발화 끝
    29.16s  user  발화 시작: 진짜요?
    29.79s  user  발화 끝
    30.94s  agent 발화 시작: 혹시 Stainby 주변의 버스 노선을 알아봐 드릴까요?
    31.10s  agent 발화 끝
    34.18s  user  발화 시작: 네, 알아봐 주세요.
    34.27s  agent 발화 끝
    35.04s  <ret> 발화 (turn12 첫 프레임)
    35.43s  agent 발화 시작: <ret> Stainby 근처에서 스테이지코치 팔십육번과 아리바 이번 버스를 찾았습니다.
    35.44s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.37s]: (tool result) Buses found near Stainby: Stagecoach 86, Arriva 2.
    35.56s  user  발화 끝
    37.01s  user  발화 시작: 네.
    37.46s  user  발화 끝
    40.65s  user  발화 시작: 스테이지코치 팔십육번은 어디로 가나요?.
    40.81s  agent 발화 끝
    43.13s  agent 발화 시작: 스테이지코치 팔십육번은… —
    43.38s  user  발화 끝
    44.34s  user  발화 시작: …근처에 큰 마트나 쇼핑센터는 어디에 있나요?
    45.12s  agent 발화 끝
    46.92s  <ret> 발화 (turn17 첫 프레임)
    47.23s  agent 발화 시작: <ret> Stainby는 A1 도로에서 서쪽으로 이마일 떨어져 있고, 테스코 익스트라 슈퍼마켓이 남쪽으로 
    47.24s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.78s]: Stainby is situated 2 mi west from the A1 road, and there is a Tesco E
    47.34s  user  발화 끝
    51.37s  user  발화 시작: 아.
    52.19s  user  발화 끝
    54.98s  user  발화 시작: 육 점 이마일이면 얼마나 걸릴까요?
    55.02s  agent 발화 끝
    56.76s  <ret> 발화 (turn20 첫 프레임)
    56.99s  agent 발화 시작: <ret> 테스코 익스트라 슈퍼마켓까지 차로 십오분, 육 점 이마일 정도 걸립니다.
    57.00s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.81s]: (tool result) Driving directions to Tesco Extra supermarket: 15 minute
    57.15s  user  발화 끝
    58.99s  user  발화 시작: 네.
    59.48s  user  발화 끝
    61.64s  user  발화 시작: 좋아요. 정말 감사합니다.
    61.80s  agent 발화 끝
    63.71s  user  발화 끝
    64.06s  agent 발화 시작: 도움이 되었다니 다행입니다. 새로운 곳에서 잘 정착하시길 바랍니다.
    67.94s  agent 발화 끝
