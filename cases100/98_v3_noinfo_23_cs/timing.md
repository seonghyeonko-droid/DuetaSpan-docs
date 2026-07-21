# v3_noinfo_23_cs — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_noinfo_23",
#     "name": "Liam",
#     "location": {
#       "city": "Toronto",
#       "country": "Canada",
#       "timezone": "America/Toronto (EST, UTC-5)",
#       "currency": "CAD ($)"
#     },
#     "nationality": "Canadian",
#     "gender": "male",
#     "age_range": "50s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-11",
#       "category": "trip",
#       "text": "User is planning a trip to Morocco in March."
#     },
#     {
#       "date": "2026-05-13",
#       "category": "wake",
#       "text": "User usually wakes up around 7:30am."
#     },
#     {
#       "date": "2026-04-05",
#       "category": "streaming",
#       "text": "User subscribes to Wavve and Melon."
#     },
#     {
#       "date": "2026-03-03",
#       "category": "work",
#       "text": "User works as a electrician."
#     },
#     {
#       "date": "2026-02-23",
#       "category": "diet",
#       "text": "User is dairy-free."
#     },
#     {
#       "date": "2026-01-22",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is French."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-03",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing the Kia Niro hybrid and Hyundai Ioniq",
#         "wants under 30k miles and below 25M won"
#       ]
#     },
#     {
#       "date": "2026-05-29",
#       "title": "Learning to invest",
#       "bullets": [
#         "asked about index funds vs individual stocks",
#         "wants to start with 500k won a month"
#       ]
#     },
#     {
#       "date": "2026-05-02",
#       "title": "Comparing health insurance",
#       "bullets": [
#         "self-employed and needs dental",
#         "wants a low deductible"
#       ]
#     },
#     {
#       "date": "2026-04-11",
#       "title": "Refinancing a mortgage",
#       "bullets": [
#         "current rate is 4.2 percent",
#         "wants to compare 15- vs 30-year terms"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 안녕 허, 아니야 샤르마 연락처 알아? 전화번호가 필요해. | S2 다음 달쯤 이탈리아 여행을 생각하고 있어. | S3 너무 비싸네. 경유하는 옵션이 좀 더 저렴한 게 있어? | S4 좋다. 그럼 근처에 괜찮은 식당도 찾아줄래? 당연히 이탈리아 

     0.00s  user  발화 시작: 안녕 허, 아니야 샤르마 연락처 알아? 전화번호가 필요해.
     4.03s  <ret> 발화 (turn1 첫 프레임)
     4.14s  agent 발화 시작: <ret> 네, 확인해 봤는데, 아쉽게도 아니야 샤르마 님의 연락처는 찾을 수 없었습니다. 그 정보는 공개되
     4.26s  user  발화 끝
     5.83s  ⚡SPAN 주입 [d'=1.80s / d_lead=7.46s]: (no information found)
     9.00s  user  발화 시작: 아.
     9.26s  user  발화 끝
    11.60s  agent 발화 끝
    12.10s  user  발화 시작: 아, 아쉽다. 여기 근처에 사는 줄 알았는데.
    15.32s  user  발화 끝
    15.42s  agent 발화 시작: 빠르게 연락이 닿길 바라는 마음은 이해가 됩니다. 혹시 공통 지인을 통해 연락해 보시는 건 어떠세요?
    17.32s  user  발화 시작: 그치.
    18.09s  user  발화 끝
    21.44s  agent 발화 끝
    22.54s  user  발화 시작: 그래. 있잖아…
    24.18s  user  발화 끝
    26.26s  user  발화 시작: 다음 달쯤 이탈리아 여행을 생각하고 있어.
    27.10s  agent 발화 시작: 음.
    27.50s  agent 발화 끝
    29.16s  user  발화 끝
    29.32s  agent 발화 시작: 이탈리아는 정말 멋진 곳 같아요! 휴식을 취하기에 아주 좋은 곳이죠. 이탈리아 어디를 생각하고 계세요?
    33.63s  user  발화 시작: 음.
    34.08s  user  발화 끝
    36.32s  user  발화 시작: 로마, 인 것 같아. 콜로세움을 항상 보고 싶었거든.
    36.59s  agent 발화 끝
    40.09s  user  발화 끝
    40.20s  <ret> 발화 (turn12 첫 프레임)
    40.36s  agent 발화 시작: <ret> 알리탈리아 항공 에이 제트 육 공 이편은 팔월 십일 오후 두시 삼십분에 피닉스에서 출발해서 다음 
    41.49s  ⚡SPAN 주입 [d'=1.28s / d_lead=12.14s]: (tool result) {"flight number": "AZ602", "airline": "Alitalia", "depar
    44.76s  user  발화 시작: 아.
    45.34s  user  발화 끝
    52.50s  agent 발화 끝
    52.69s  user  발화 시작: 너무 비싸네. 경유하는 옵션이 좀 더 저렴한 게 있어?
    56.03s  <ret> 발화 (turn15 첫 프레임)
    56.18s  agent 발화 시작: <ret> 네, 유나이티드 항공 유 에이 구 팔 칠편은 프랑크푸르트를 경유해서 팔월 십일 오전 여덟시에 출발
    56.29s  user  발화 끝
    57.12s  ⚡SPAN 주입 [d'=1.08s / d_lead=11.45s]: (tool result) {"flight number": "UA987", "airline": "United Airlines",
    67.63s  agent 발화 끝
    67.78s  user  발화 시작: 그게 훨씬 낫네. 콜로세움 근처 호텔 좀 보여줄 수 있어?
    71.17s  <ret> 발화 (turn17 첫 프레임)
    71.78s  agent 발화 시작: <ret> 호텔 아르테미데는 콜로세움에서 약 일 점 오 킬로미터 거리에 있는 사성 반 호텔이고, 일박에 이백
    71.89s  user  발화 끝
    72.34s  ⚡SPAN 주입 [d'=1.16s / d_lead=8.85s]: (tool result) {"hotel name": "Hotel Artemide", "address": "Via Naziona
    75.24s  user  발화 시작: 응응.
    75.69s  user  발화 끝
    80.62s  agent 발화 끝
    80.65s  user  발화 시작: 좋다. 그럼 근처에 괜찮은 식당도 찾아줄래? 당연히 이탈리아 음식으로.
    86.45s  <ret> 발화 (turn20 첫 프레임)
    86.62s  agent 발화 시작: <ret> 라 타베르나 데이 포리 임페리알리는 콜로세움 근처에 있는 평점이 아주 좋은 이탈리아 식당이고, 가
    86.63s  user  발화 끝
    88.19s  ⚡SPAN 주입 [d'=1.73s / d_lead=8.81s]: (tool result) {"restaurant name": "La Taverna dei Fori Imperiali", "ad
    95.43s  agent 발화 끝
    95.49s  user  발화 시작: 완벽해! 정말 고마워, 허.
    97.70s  user  발화 끝
    97.80s  agent 발화 시작: 도와드릴 수 있어서 기쁩니다. 편안한 여행 계획을 세우시는 데 도움이 되었다니 다행입니다. 페이스를 조절하시
   106.60s  agent 발화 끝
