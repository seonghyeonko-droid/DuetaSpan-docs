# v3_selfc_08_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_selfc_08",
#     "name": "우형",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "mid 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-11",
#       "category": "skill",
#       "text": "User is getting fairly good at home fermentation."
#     },
#     {
#       "date": "2026-06-10",
#       "category": "bloodtype",
#       "text": "User's blood type is A-."
#     },
#     {
#       "date": "2026-04-17",
#       "category": "dish",
#       "text": "User's go-to comfort dish is pad thai."
#     },
#     {
#       "date": "2026-03-09",
#       "category": "streaming",
#       "text": "User subscribes to Netflix and Spotify."
#     },
#     {
#       "date": "2026-01-02",
#       "category": "allergy",
#       "text": "User is allergic to soy."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-25",
#       "title": "Studying for the TOEIC",
#       "bullets": [
#         "target score is 850",
#         "exam is in about six weeks"
#       ]
#     },
#     {
#       "date": "2026-04-11",
#       "title": "Choosing a laptop",
#       "bullets": [
#         "budget around 1.8M won",
#         "needs it for video editing and light gaming"
#       ]
#     },
#     {
#       "date": "2026-02-11",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers for a 3-story house",
#         "wanted coverage for the basement office"
#       ]
#     },
#     {
#       "date": "2025-12-07",
#       "title": "Selling a used bike",
#       "bullets": [
#         "a 3-year-old road bike",
#         "asking around 400k won"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 환불 좀 해 주세요. 스물다섯 달러 오십센트요. 캡처 아이 디 | S2 다음 주 토요일에 부산 해운대 근처에 괜찮은 호텔 좀 찾아줄  | S3 음… 가격대는 보통 정도로 해 주세요. | S4 좋아요. 그럼 그 호텔로 예약해 주세요.

     0.00s  user  발화 시작: 환불 좀 해 주세요. 스물다섯 달러 오십센트요. 캡처 아이 디는 C-one-two-three-four-fiv
    15.67s  <ret> 발화 (turn1 첫 프레임)
    15.96s  user  발화 끝
    16.04s  agent 발화 시작: <ret> 네, 환불이 승인되었습니다. 스물다섯 달러 오십센트가 환불 처리되었고, 환불 아이 디는 R-sev
    16.64s  ⚡SPAN 주입 [d'=0.96s / d_lead=9.23s]: (tool result) {"refund id": "R-seven-eight-nine-zero-one-two-three-fou
    19.16s  user  발화 시작: 맞아.
    19.90s  user  발화 끝
    25.04s  user  발화 시작: 음… 잠깐만요, 송장 번호가 틀렸어요. 아이 엔 브이-nine-eight-seven-six-five-four
    25.27s  agent 발화 끝
    36.15s  <ret> 발화 (turn4 첫 프레임)
    36.32s  agent 발화 시작: <ret> 아, 송장 번호가 잘못되었군요. 아이 엔 브이-nine-eight-seven-six-five-fo
    36.49s  user  발화 끝
    36.50s  ⚡SPAN 주입 [d'=0.35s / d_lead=13.08s]: (tool result) {"refund id": "R-seven-eight-nine-zero-one-two-three-fou
    45.76s  user  발화 시작: 맞아.
    46.53s  user  발화 끝
    49.16s  agent 발화 시작: [happy] 환불이 완료되었다니 다행이네요.
    49.40s  agent 발화 끝
    51.19s  user  발화 시작: 다음 주 토요일에 부산 해운대 근처에 괜찮은 호텔 좀 찾아줄 수 있을까요?
    51.28s  agent 발화 끝
    55.92s  <ret> 발화 (turn8 첫 프레임)
    56.33s  user  발화 끝
    56.50s  agent 발화 시작: <ret> 부산 해운대는 아름다운 해변과 다채로운 시장, 산으로 유명한 멋진 도시죠. 다음 주 토요일에 해운
    56.93s  ⚡SPAN 주입 [d'=1.01s / d_lead=19.68s]: Busan is a major port city in South Korea, known for its beaches, colo
    76.18s  agent 발화 끝
    76.74s  user  발화 시작: 음… 가격대는 보통 정도로 해 주세요.
    79.17s  <ret> 발화 (turn10 첫 프레임)
    79.38s  agent 발화 시작: <ret> 보통 가격대라면 해운대 그랜드 호텔이 괜찮겠네요. 해변과도 가깝고, 평점도 좋고요.
    79.51s  user  발화 끝
    79.70s  ⚡SPAN 주입 [d'=0.54s / d_lead=6.20s]: (tool result) {"hotels": [{"name": "Park Hyatt Busan", "price": 300000
    82.43s  user  발화 시작: 응.
    82.82s  user  발화 끝
    85.46s  user  발화 시작: 좋아요. 그럼 그 호텔로 예약해 주세요.
    85.58s  agent 발화 끝
    87.61s  <ret> 발화 (turn13 첫 프레임)
    88.01s  agent 발화 시작: <ret> 네, 해운대 그랜드 호텔 예약이 완료되었습니다. 예약 아이 디는 B-one-two-three-fo
    88.14s  user  발화 끝
    88.82s  ⚡SPAN 주입 [d'=1.21s / d_lead=8.67s]: (tool result) {"booking id": "B-one-two-three-four-five-six-seven-eigh
    96.69s  agent 발화 끝
