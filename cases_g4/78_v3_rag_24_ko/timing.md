# v3_rag_24_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_24",
#     "name": "재람",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "early 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-14",
#       "category": "coffee",
#       "text": "User's usual coffee order is an iced americano."
#     },
#     {
#       "date": "2026-06-10",
#       "category": "dish",
#       "text": "User's go-to comfort dish is pad thai."
#     },
#     {
#       "date": "2026-05-23",
#       "category": "schedule",
#       "text": "User has a hybrid 3-days-in-office week."
#     },
#     {
#       "date": "2026-04-02",
#       "category": "home",
#       "text": "User's home address is 인천 연수구 송도동 12-5."
#     },
#     {
#       "date": "2026-03-09",
#       "category": "airline",
#       "text": "User usually flies with ANA."
#     },
#     {
#       "date": "2026-02-11",
#       "category": "gym",
#       "text": "User has a gym membership near the office."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-01",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot next Tuesday",
#         "prefers Dr. Han at Bright Smile Clinic"
#       ]
#     },
#     {
#       "date": "2026-02-25",
#       "title": "Renovating the bathroom",
#       "bullets": [
#         "budget of 6M won",
#         "wants a walk-in shower instead of a tub"
#       ]
#     },
#     {
#       "date": "2026-02-06",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six on the 14th",
#         "looking for outdoor seating with a vegetarian option"
#       ]
#     },
#     {
#       "date": "2025-12-13",
#       "title": "Studying for the TOEIC",
#       "bullets": [
#         "target score is 850",
#         "exam is in about six weeks"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 뉴욕에 틴 팬 앨리라는 곳이 있었다며? 정확히 어디쯤이었어? | S2 그렇구나. 근데 지금 뉴욕 날씨는 어때? 여행 계획 짜고 있거 | S3 날씨 좋네! 그럼 거기서 가볼 만한 명소 좀 추천해 줄래? | S4 다 가보고 싶다. 결정하기 어렵네.

     0.00s  user  발화 시작: 뉴욕에 틴 팬 앨리라는 곳이 있었다며? 정확히 어디쯤이었어?
     4.56s  <ret> 발화 (turn1 첫 프레임)
     4.73s  user  발화 끝
     4.75s  agent 발화 시작: <ret> 아, 음악 역사에서 정말 중요한 곳이죠. 그곳은 뉴욕시의 웨스트 이십팔번가에 있었습니다. 옛 노래
     5.29s  ⚡SPAN 주입 [d'=0.73s / d_lead=2.99s]: Tin Pan Alley was located on West 28th Street in New York City.
     8.83s  user  발화 시작: 아.
     9.55s  user  발화 끝
    12.70s  user  발화 시작: 그렇구나. 근데 지금 뉴욕 날씨는 어때? 여행 계획 짜고 있거든.
    12.73s  agent 발화 끝
    17.20s  <ret> 발화 (turn4 첫 프레임)
    17.29s  agent 발화 시작: <ret> [happy] 지금 뉴욕은 이십이도이고 구름이 조금 낀 상태입니다.
    17.42s  user  발화 끝
    19.20s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.37s]: (tool result) Current weather in New York City: 22 degrees Celsius, Pa
    20.66s  agent 발화 끝
    20.73s  user  발화 시작: 날씨 좋네! 그럼 거기서 가볼 만한 명소 좀 추천해 줄래?
    24.48s  <ret> 발화 (turn6 첫 프레임)
    24.78s  agent 발화 시작: <ret> 엠파이어 스테이트 빌딩이나 센트럴 파크, 그리고 메트로폴리탄 미술관을 추천해 드려요.
    24.81s  user  발화 끝
    25.68s  ⚡SPAN 주입 [d'=1.20s / d_lead=5.05s]: (tool result) Top attractions in New York City include the Empire Stat
    29.82s  agent 발화 끝
    31.49s  user  발화 시작: 다 가보고 싶다. 결정하기 어렵네.
    34.00s  agent 발화 시작: [laugh] 선택지가 많을 땐 마음이 설레면서도 고민되죠. 천천히 가치 있게 느껴지는 곳부터 골라보세요.
    34.07s  user  발화 끝
    40.34s  agent 발화 끝
