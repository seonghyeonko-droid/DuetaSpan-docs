# v3_fstart_15_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_fstart_15",
#     "name": "연현",
#     "location": {
#       "city": "Seoul",
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
#       "date": "2026-05-20",
#       "category": "allergy",
#       "text": "User is allergic to pollen."
#     },
#     {
#       "date": "2026-03-23",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-02-27",
#       "category": "trip",
#       "text": "User is planning a trip to Iceland in October."
#     },
#     {
#       "date": "2026-02-24",
#       "category": "work",
#       "text": "User works as a nurse."
#     },
#     {
#       "date": "2026-02-06",
#       "category": "home",
#       "text": "User's home address is 서울 용산구 이태원로 200."
#     },
#     {
#       "date": "2026-02-03",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Ethiopian."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-03",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2026-03-05",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2026-02-20",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 아, 잠깐만… 애플 주식 가격 추적 시작해 줄래? 근데 있잖아 | S2 음… 강남역 근처에 분위기 좋은 곳으로 찾아줘. | S3 ‘라 페스타’ 예약해 줘. 저녁 일곱시에 두 명. | S4 고마워! 그럼, 혹시 다음 주 화요일에 중요한 발표가 있는데,

     0.00s  user  발화 시작: 아, 잠깐만… 애플 주식 가격 추적 시작해 줄래? 근데 있잖아, 오늘 저녁에 맛있는 파스타집 어디가 좋을까?
     6.48s  <ret> 발화 (turn1 첫 프레임)
     7.07s  agent 발화 시작: <ret> 애플 주식은 오늘 백구십삼 점 이 이달러로 마감했고, 어제보다 일 점 오 칠달러 상승했어요. 파스
     7.07s  user  발화 끝
     7.28s  ⚡SPAN 주입 [d'=0.80s / d_lead=7.51s]: (tool result) Apple Inc. (AAPL) closed at $193.22 today, June 10, 2026
    14.58s  user  발화 시작: 음… 강남역 근처에 분위기 좋은 곳으로 찾아줘.
    14.58s  agent 발화 끝
    17.30s  <ret> 발화 (turn3 첫 프레임)
    17.67s  agent 발화 시작: <ret> 잠시만 기다려 주세요.
    17.67s  user  발화 끝
    17.72s  ⚡SPAN 주입 [d'=0.43s / d_lead=1.33s]: (tool result) There are several highly-rated Italian restaurants near 
    18.99s  agent 발화 시작: 강남역 근처에는 '라 페스타'와 '벨라 이탈리아'가 유명해요. 특히 '라 페스타'는 분위기가 정말 로맨틱하다
    18.99s  agent 발화 끝
    25.18s  user  발화 시작: ‘라 페스타’ 예약해 줘. 저녁 일곱시에 두 명.
    25.18s  agent 발화 끝
    28.34s  <ret> 발화 (turn6 첫 프레임)
    28.71s  agent 발화 시작: <ret> [happy] ‘라 페스타’ 저녁 일곱시에 두 명으로 예약해 드릴게요.
    28.71s  user  발화 끝
    28.91s  ⚡SPAN 주입 [d'=0.57s / d_lead=3.98s]: (tool result) Reservation confirmed at La Festa for 2 people on July 1
    32.69s  agent 발화 시작: ‘라 페스타’ 저녁 일곱시 두 명 예약이 완료되었어요. 확인 코드는 알 에프 칠 이 구 엑스입니다.
    32.69s  agent 발화 끝
    39.76s  user  발화 시작: 진짜?
    39.76s  agent 발화 끝
    40.20s  user  발화 시작: 고마워! 그럼, 혹시 다음 주 화요일에 중요한 발표가 있는데, 발표 연습하는 데 도움이 될 만한 앱 있어?
    40.20s  user  발화 끝
    47.71s  agent 발화 시작: [sigh] 다음 주 화요일 발표 연습을 위한 앱을 찾아볼까요? 어떤 종류의 도움을 원하시는지 좀 더 자세히
    47.71s  user  발화 끝
    60.96s  agent 발화 끝
