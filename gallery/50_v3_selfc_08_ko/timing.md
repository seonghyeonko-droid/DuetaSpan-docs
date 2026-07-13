# v3_selfc_08_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_selfc_08",
#     "name": "도우",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "40s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-04",
#       "category": "home",
#       "text": "User's home address is 부산 해운대구 해운대로 570."
#     },
#     {
#       "date": "2026-05-23",
#       "category": "pet",
#       "text": "User has a Poodle named Coco."
#     },
#     {
#       "date": "2026-05-22",
#       "category": "work",
#       "text": "User works as a graduate student."
#     },
#     {
#       "date": "2025-12-19",
#       "category": "trip",
#       "text": "User is planning a trip to Lisbon in March."
#     },
#     {
#       "date": "2025-12-06",
#       "category": "diet",
#       "text": "User is vegetarian."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-01-20",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2026-01-14",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2025-12-16",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 코드 생성 마무리하고 실험 비원 이십삼의 테스트 파일도 만들어 | S2 …가장 인기 있는 레스토랑 좀 찾아줄래? | S3 가온이 좀 더 자세히 알고 싶어. | S4 아, 고마워! 그럼 혹시 내일 모레 부산 날씨는 어때?

     0.00s  user  발화 시작: 코드 생성 마무리하고 실험 비원 이십삼의 테스트 파일도 만들어 줘.
     4.69s  <ret> 발화 (turn1 첫 프레임)
     4.99s  agent 발화 시작: <ret> 실험 비원 이십삼 테스트 파일 생성이 완료되었습니다.
     4.99s  user  발화 끝
     5.99s  ⚡SPAN 주입 [d'=1.31s / d_lead=3.50s]: (tool result) File 'experiment bee_123 test.py' created successfully.
     8.49s  user  발화 시작: 그렇군요.
     8.49s  agent 발화 끝
     8.99s  user  발화 시작: 음… 그럼 이번 주 토요일에 서울에서…
     8.99s  user  발화 끝
    11.98s  user  발화 시작: …가장 인기 있는 레스토랑 좀 찾아줄래?
    11.98s  user  발화 끝
    14.48s  <ret> 발화 (turn5 첫 프레임)
    14.94s  ⚡SPAN 주입 [d'=0.46s / d_lead=8.49s]: (tool result) {"restaurants": [{"name": "Gaon", "cuisine": "Korean", "
    14.98s  agent 발화 시작: <ret> 서울에서 가장 인기 있는 레스토랑은 가온과 정식입니다. 가온은 한국 요리 전문점으로 평점이 사 점
    14.98s  user  발화 끝
    23.47s  user  발화 시작: 그렇죠.
    23.47s  agent 발화 끝
    23.97s  agent 발화 시작: 정식도 한국 요리 전문점이고 평점은 사 점 육점이며 가격대는 조금 비싼 편입니다.
    23.97s  user  발화 끝
    29.96s  user  발화 시작: 가온이 좀 더 자세히 알고 싶어.
    29.96s  agent 발화 끝
    32.95s  <ret> 발화 (turn9 첫 프레임)
    32.96s  agent 발화 시작: <ret> 가온은 서울 강남구 언주로 구에 위치한 미슐랭 삼스타 한국 레스토랑입니다 — 전통 한국 요리를 현
    32.96s  user  발화 끝
    33.79s  ⚡SPAN 주입 [d'=0.85s / d_lead=14.48s]: Gaon is a Michelin three-star Korean restaurant in Seoul, South Korea,
    47.44s  user  발화 시작: —그런데 혹시 거기 예약 가능해?
    47.44s  agent 발화 끝
    49.75s  <ret> 발화 (turn11 첫 프레임)
    49.93s  agent 발화 시작: <ret> 확인 번호는 지 에이 오 엔 이 공 이 육 공 칠 일 일 칠 공 공입니다.
    49.93s  user  발화 끝
    50.99s  ⚡SPAN 주입 [d'=1.24s / d_lead=8.49s]: (tool result) Reservation confirmed for Gaon on July 11, 2026 at 7:00 
    58.42s  user  발화 시작: 아, 고마워! 그럼 혹시 내일 모레 부산 날씨는 어때?
    58.42s  agent 발화 끝
    62.91s  agent 발화 시작: 네네.
    62.91s  user  발화 끝
    63.26s  <ret> 발화 (turn14 첫 프레임)
    63.41s  agent 발화 시작: <ret> 이천이십육년 칠월 십이일 부산 날씨는 이십팔 점 오도, 습도 육십팔퍼센트, 풍속은 시속 칠 점 이
    63.41s  agent 발화 끝
    64.60s  ⚡SPAN 주입 [d'=1.34s / d_lead=9.99s]: (tool result) The weather in Busan on July 12, 2026 will be 28.5°C, hu
    73.40s  agent 발화 끝
