# v3_chain_05_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_chain_05",
#     "name": "다안",
#     "location": {
#       "city": "Busan",
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
#       "date": "2026-04-05",
#       "category": "home",
#       "text": "User's home address is 부산 해운대구 우동 123-4."
#     },
#     {
#       "date": "2025-12-19",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Korean BBQ."
#     },
#     {
#       "date": "2025-12-17",
#       "category": "hobby",
#       "text": "User is into birdwatching."
#     },
#     {
#       "date": "2025-09-27",
#       "category": "trip",
#       "text": "User is planning a trip to Lisbon in August."
#     },
#     {
#       "date": "2025-07-01",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-01-28",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2025-10-06",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 이번 주 토요일에 서울 날씨 어때? | S2 음… 그럼 다음 주 화요일은? | S3 아, 그거 말고… 제가 지난달에 쓴 돈이 얼마인지 좀 알려줄  | S4 고마워요. 그럼 이번 달 예산은 어떻게 짜야 할까요?

     0.00s  user  발화 시작: 이번 주 토요일에 서울 날씨 어때?
     2.73s  <ret> 발화 (turn1 첫 프레임)
     3.05s  agent 발화 시작: <ret> 이번 주 토요일 서울 날씨는 섭씨 이십팔 점 칠도, 습도 육십팔퍼센트, 바람은 시속 삼 점 이킬로
     3.05s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.63s]: (tool result) The weather in Seoul on Saturday, July 12, 2026, will be
     3.05s  user  발화 끝
    11.68s  user  발화 시작: 그렇죠.
    11.68s  agent 발화 끝
    12.19s  user  발화 시작: 그럼 일요일은 어때?
    12.19s  user  발화 끝
    13.39s  <ret> 발화 (turn4 첫 프레임)
    13.71s  agent 발화 시작: <ret> 일요일 서울 날씨는 섭씨 삼십 점 일도, 습도 칠십이퍼센트, 바람은 시속 사 점 오킬로미터로 예상
    13.71s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.62s]: (tool result) The weather in Seoul on Sunday, July 13, 2026, will be 3
    13.71s  user  발화 끝
    21.33s  user  발화 시작: 네.
    21.33s  agent 발화 끝
    21.84s  user  발화 시작: 음… 그럼 다음 주 화요일은?
    21.84s  user  발화 끝
    24.13s  <ret> 발화 (turn7 첫 프레임)
    24.37s  agent 발화 시작: <ret> 다음 주 화요일 서울 날씨는 섭씨 이십육 점 삼도, 습도 칠십퍼센트, 바람은 시속 이 점 팔킬로미
    24.37s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.63s]: (tool result) The weather in Seoul on Tuesday, July 15, 2026, will be 
    24.37s  user  발화 끝
    33.01s  user  발화 시작: 정말요?
    33.01s  agent 발화 끝
    33.51s  user  발화 시작: 아, 그거 말고… 제가 지난달에 쓴 돈이 얼마인지 좀 알려줄 수 있어요?
    33.51s  user  발화 끝
    39.61s  agent 발화 시작: 제가 지난달 지출 내역을 확인해 드릴게요. 그런데 혹시 어떤 계좌의 지출인지 말씀해 주시겠어요?
    39.61s  user  발화 끝
    46.21s  user  발화 시작: 네.
    46.21s  agent 발화 끝
    46.72s  user  발화 시작: 우리은행 체크카드요.
    46.72s  user  발화 끝
    47.57s  <ret> 발화 (turn13 첫 프레임)
    47.73s  agent 발화 시작: <ret> 이천이십육년 유월 일일 기준으로 우리은행 체크카드 지난달 지출은 백이십오만 원입니다.
    47.73s  ⚡SPAN 주입 [d'=0.96s / d_lead=5.08s]: [2026-06-01] 우리은행 체크카드 지난달 지출: 1,250,000원.
    47.73s  user  발화 끝
    52.81s  user  발화 시작: 고마워요. 그럼 이번 달 예산은 어떻게 짜야 할까요?
    52.81s  agent 발화 끝
    56.87s  agent 발화 시작: 이번 달 예산을 짜는 데 도움을 드릴 수 있습니다. 지난달 지출을 바탕으로, 이번 달 목표를 설정해 보는 건
    56.87s  user  발화 끝
    66.52s  agent 발화 끝
