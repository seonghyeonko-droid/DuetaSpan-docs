# v3_noinfo_23_cs — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_noinfo_23",
#     "name": "Anna",
#     "location": {
#       "city": "London",
#       "country": "United Kingdom",
#       "timezone": "Europe/London (GMT, UTC+0)",
#       "currency": "GBP (£)"
#     },
#     "nationality": "British",
#     "gender": "female",
#     "age_range": "late 20s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-13",
#       "category": "diet",
#       "text": "User is vegan."
#     },
#     {
#       "date": "2026-03-14",
#       "category": "work",
#       "text": "User works as a physical therapist."
#     },
#     {
#       "date": "2025-06-21",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Italian."
#     },
#     {
#       "date": "2025-06-19",
#       "category": "trip",
#       "text": "User is planning a trip to Lisbon in March."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-09-07",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2025-08-08",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 어냐 샤르마 전화번호 있어? | S2 집 계약금 마련하려고 돈 모으고 있어. | S3 …좀 더 간단하게 설명해 줄 수 있어? | S4 와, 돈이 엄청나네.

     0.00s  user  발화 시작: 어냐 샤르마 전화번호 있어?
     1.76s  <ret> 발화 (turn1 첫 프레임)
     1.92s  agent 발화 시작: <ret> 죄송하지만, 어냐 샤르마 님의 전화번호는 검색 결과에서 찾을 수 없었습니다.
     1.92s  ⚡SPAN 주입 [d'=1.44s / d_lead=4.80s]: (no information found)
     1.92s  user  발화 끝
     6.72s  user  발화 시작: 아, 괜찮아. 아마 공개적으로 안 올렸나 보네.
     6.72s  agent 발화 끝
    10.07s  agent 발화 시작: 괜찮습니다. 많은 분들이 개인 정보를 비공개로 유지하는 것을 선호하십니다.
    10.07s  user  발화 끝
    14.39s  user  발화 시작: 그래.
    14.39s  agent 발화 끝
    14.87s  user  발화 시작: 오늘 서울 날씨 어때?
    14.87s  user  발화 끝
    16.47s  <ret> 발화 (turn6 첫 프레임)
    16.79s  agent 발화 시작: <ret> 현재 서울은 기온이 섭씨 이십삼도이고 습도는 칠십사퍼센트, 풍속은 시속 오 점 오킬로미터입니다.
    16.79s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.76s]: (tool result) 23.0°C, humidity 74%, wind 5.5 km/h
    16.79s  user  발화 끝
    22.55s  user  발화 시작: 진짜?
    22.55s  agent 발화 끝
    23.03s  user  발화 시작: 좋네.
    23.03s  user  발화 끝
    23.51s  agent 발화 시작: 그렇죠? 야외 활동하기 좋은 날씨입니다.
    23.51s  user  발화 끝
    25.91s  user  발화 시작: 그래.
    25.91s  agent 발화 끝
    26.39s  user  발화 시작: 집 계약금 마련하려고 돈 모으고 있어.
    26.39s  user  발화 끝
    29.26s  agent 발화 시작: 정말 멋진 목표네요! 인내심이 필요하지만, 내 집 마련을 위해 노력하는 것은 정말 보람 있는 일입니다.
    29.26s  user  발화 끝
    36.46s  user  발화 시작: 음.
    36.46s  agent 발화 끝
    36.94s  user  발화 시작: 예산 짜는 데 조언 좀 해 줄 수 있어?
    36.94s  user  발화 끝
    41.18s  <ret> 발화 (turn15 첫 프레임)
    41.26s  agent 발화 시작: <ret> 오로라이아가 도와드릴 수 있습니다. 예산은 수입을 지출과 저축에 배분하는 계획으로, 수입보다 지출
    41.26s  user  발화 끝
    42.30s  ⚡SPAN 주입 [d'=1.12s / d_lead=2.40s]: A budget is a plan for your money, allocating income to expenses and s
    55.65s  user  발화 시작: 음.
    55.65s  agent 발화 끝
    56.13s  user  발화 시작: 그거… 복잡하게 들리네. —
    56.13s  user  발화 끝
    58.05s  user  발화 시작: …좀 더 간단하게 설명해 줄 수 있어?
    58.05s  user  발화 끝
    61.41s  agent 발화 시작: 수입을 먼저 적고, 그다음에 고정 지출 – 월세, 공과금 – 그리고 변동 지출을 적어 봅시다.
    61.41s  user  발화 끝
    68.60s  user  발화 시작: 식료품이나 엔터테인먼트 같은 거?
    68.60s  agent 발화 끝
    70.52s  agent 발화 시작: 맞습니다. 그 후에는 저축과 즐길 거리에 남은 돈이 얼마나 있는지 확인해 보겠습니다.
    70.52s  user  발화 끝
    76.28s  user  발화 시작: 서울에서 평균 계약금은 얼마야?
    76.28s  agent 발화 끝
    77.80s  <ret> 발화 (turn23 첫 프레임)
    78.20s  agent 발화 시작: <ret> 최근 한국부동산원 보고서에 따르면 서울에서 주택을 구입할 때 평균 계약금은 약 이억 원 정도이지만
    78.20s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.59s]: (tool result) The average down payment for a home in Seoul is approxim
    78.20s  user  발화 끝
    87.79s  user  발화 시작: 와, 돈이 엄청나네.
    87.79s  agent 발화 끝
    89.23s  agent 발화 시작: 상당한 금액이지만, 저축 목표를 더 작고 관리하기 쉬운 단계로 나눌 수 있다는 것을 기억하세요.
    89.23s  user  발화 끝
    95.95s  user  발화 시작: 초보 주택 구매자를 위한 자료 좀 찾아 줄 수 있어?
    95.95s  agent 발화 끝
   100.43s  <ret> 발화 (turn27 첫 프레임)
   100.75s  agent 발화 시작: <ret> 한국주택금융협회에서는 저금리 대출 및 보조금 등 초보 주택 구매자를 위한 다양한 프로그램을 제공하
   100.75s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.12s]: (tool result) The Korea Housing Finance Association offers various pro
   100.75s  user  발화 끝
   109.86s  user  발화 시작: 헐.
   109.86s  agent 발화 끝
   110.34s  user  발화 시작: 고마워!
   110.34s  user  발화 끝
   110.82s  agent 발화 시작: 천만에요! 언제든지 도와드릴 준비가 되어 있습니다.
   110.82s  user  발화 끝
   113.70s  agent 발화 끝
