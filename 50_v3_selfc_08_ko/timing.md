# v3_selfc_08_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_selfc_08",
#     "name": "유우",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "late 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-18",
#       "category": "home",
#       "text": "User's home address is 서울 용산구 이태원로 200."
#     },
#     {
#       "date": "2026-04-13",
#       "category": "hobby",
#       "text": "User is into vintage synth collecting."
#     },
#     {
#       "date": "2025-12-26",
#       "category": "work",
#       "text": "User works as a chef."
#     },
#     {
#       "date": "2025-08-28",
#       "category": "allergy",
#       "text": "User is allergic to shellfish."
#     },
#     {
#       "date": "2025-06-16",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-09-25",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2025-07-16",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 오늘 서울 날씨 어때? | S2 이번 주말에 부산 갈 건데, 부산 날씨는 어때? | S3 밀양 순대… 거기는 예약 가능한가? | S4 혹시… 이천십팔년에 한국 영화제에서 상영된 영화 좀 알려줄 수

     0.00s  user  발화 시작: 오늘 서울 날씨 어때?
     1.31s  <ret> 발화 (turn1 첫 프레임)
     1.61s  user  발화 끝
     1.62s  agent 발화 시작: <ret> 현재 서울 날씨는 이십육도이고, 습도는 칠십팔%, 바람은 시속 삼 점 이킬로미터입니다.
     1.63s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.11s]: (tool result) The current weather in Seoul is 26.0°C, humidity 78%, wi
     7.49s  user  발화 시작: 흐음, 그럼 내일은 어때?
     7.73s  agent 발화 끝
     8.68s  <ret> 발화 (turn3 첫 프레임)
     9.07s  agent 발화 시작: <ret> 내일 서울 날씨는 이십팔도로 예상되며, 비가 올 확률은 육십%입니다.
     9.08s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.86s]: (tool result) The weather in Seoul tomorrow will be 28.0°C, with a 60%
     9.24s  user  발화 끝
    13.93s  agent 발화 끝
    14.06s  user  발화 시작: 이십팔도… 아, 이십오도였으면 좋겠는데.
    17.67s  user  발화 끝
    17.78s  agent 발화 시작: 날씨는 예측하기 어렵지만, 이십오도라면 훨씬 더 시원하겠네요.
    19.92s  user  발화 시작: 네.
    20.55s  user  발화 끝
    21.81s  user  발화 시작: 이번 주말에 부산 갈 건데, 부산 날씨는 어때?
    21.85s  agent 발화 끝
    25.70s  <ret> 발화 (turn8 첫 프레임)
    25.77s  agent 발화 시작: <ret> 이번 주말 부산 날씨는 이십사도로 화창하고, 바람도 잔잔할 것으로 보입니다.
    25.78s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.14s]: (tool result) This weekend in Busan, the weather will be 24.0°C, sunny
    25.97s  user  발화 끝
    27.93s  user  발화 시작: 그렇죠.
    28.76s  user  발화 끝
    30.78s  agent 발화 시작: 부산 여행 계획 세우시는 데 도움이 되셨으면 좋겠어요.
    30.91s  agent 발화 끝
    32.33s  user  발화 시작: 음.
    32.88s  user  발화 끝
    34.02s  agent 발화 끝
    34.09s  user  발화 시작: 부산에서 갈만한 맛집 좀 알려줘.
    36.04s  <ret> 발화 (turn13 첫 프레임)
    36.27s  agent 발화 시작: <ret> 부산에서 해운대 암소 보검정이라는 한국 음식점이 평점이 아주 높습니다.
    36.28s  ⚡SPAN 주입 [d'=1.76s / d_lead=5.18s]: (tool result) In Busan, Haeundae Amso Bogeomjeong is a highly-rated Ko
    36.54s  user  발화 끝
    41.20s  user  발화 시작: 암소 보검정… 아, 돼지국밥집 가고 싶어.
    41.45s  agent 발화 끝
    44.39s  <ret> 발화 (turn15 첫 프레임)
    44.62s  agent 발화 시작: <ret> 돼지국밥도 부산에서 꼭 드셔봐야 할 음식이죠.
    44.63s  ⚡SPAN 주입 [d'=1.04s / d_lead=3.23s]: (tool result) Milyang Sunji is a popular pork soup restaurant in Busan
    44.76s  user  발화 끝
    47.80s  agent 발화 시작: 부산에는 밀양 순대가 유명한 돼지국밥집이 있습니다.
    47.85s  agent 발화 끝
    51.49s  agent 발화 끝
    51.87s  user  발화 시작: 밀양 순대… 거기는 예약 가능한가?
    54.46s  <ret> 발화 (turn18 첫 프레임)
    54.85s  agent 발화 시작: <ret> 죄송하지만, 밀양 순대에 대한 예약 정보는 찾을 수 없습니다.
    54.86s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.53s]: (no information found)
    55.10s  user  발화 끝
    58.08s  user  발화 시작: 네.
    58.72s  user  발화 끝
    59.24s  user  발화 시작: 아, 그럼 다른 돼지국밥집 예약해 줘.
    59.39s  agent 발화 끝
    61.41s  <ret> 발화 (turn21 첫 프레임)
    61.56s  agent 발화 시작: <ret> 부산 돼지국밥에서 토요일 저녁 일곱시에 두 분을 위한 자리를 예약했습니다. 확인 번호는 비 유 일
    61.57s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.97s]: (tool result) I have reserved a table for two at Busan Pork Soup for S
    61.82s  user  발화 끝
    67.39s  user  발화 시작: 네.
    67.84s  user  발화 끝
    69.53s  agent 발화 끝
    69.66s  user  발화 시작: 비 유 일 이 삼 사 오… 알았어. 고마워.
    73.26s  user  발화 끝
    73.29s  agent 발화 시작: 즐거운 부산 여행 되시길 바랍니다.
    74.83s  user  발화 시작: 혹시… 이천십팔년에 한국 영화제에서 상영된 영화 좀 알려줄 수 있어?
    75.04s  agent 발화 끝
    79.64s  <ret> 발화 (turn26 첫 프레임)
    80.01s  user  발화 끝
    80.04s  agent 발화 시작: <ret> 이천십팔년 한국 영화제에서는 '버닝'과 '숍홀릭 루이'가 상영되었습니다.
    80.04s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.99s]: (tool result) In 2018, “Burning” and “Shopaholic Louis” were shown at 
    85.03s  agent 발화 끝
    85.26s  user  발화 시작: 버닝… 그 영화 재밌었지.
    87.50s  agent 발화 시작: '버닝'은 깊이 있는 이야기로 많은 사람들에게 감동을 줬죠.
    87.70s  user  발화 끝
    91.12s  agent 발화 시작: 혹시 다른 영화에 대해서도 궁금하신 점이 있으신가요?
    91.24s  agent 발화 끝
    94.50s  agent 발화 끝
