# v3_selfc_08_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_selfc_08",
#     "name": "노진",
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
#       "date": "2026-06-02",
#       "category": "pet",
#       "text": "User has a Corgi named Mochi."
#     },
#     {
#       "date": "2025-12-29",
#       "category": "trip",
#       "text": "User is planning a trip to New Zealand in August."
#     },
#     {
#       "date": "2025-09-23",
#       "category": "work",
#       "text": "User works as a marketing manager."
#     },
#     {
#       "date": "2025-07-31",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Ethiopian."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-01-10",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2025-12-31",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2025-07-22",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 로마에서 삼월 이십오일에 무슨 공연 볼 수 있을까요? | S2 그럼, 그날 저녁 식사도 예약해 줄 수 있을까요? | S3 …근데 혹시 공연장 근처에 분위기 좋은 식당 있어요? | S4 혹시 삼월 이십육일에는 바티칸 투어 같은 거 할 수 있을까요?

     0.00s  user  발화 시작: 로마에서 삼월 이십오일에 무슨 공연 볼 수 있을까요?
     3.52s  <ret> 발화 (turn1 첫 프레임)
     3.84s  agent 발화 시작: <ret> 로마에서는 삼월 이십오일에 '로미오와 줄리엣'이 테아트로 델 오페라 디 로마에서, 그리고 '라 트
     3.84s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.16s]: (tool result) There are several theatrical performances scheduled in R
     3.84s  user  발화 끝
    12.00s  user  발화 시작: '라 트라비아타' 티켓 예매해 줄 수 있어요?
    12.00s  agent 발화 끝
    15.04s  <ret> 발화 (turn3 첫 프레임)
    15.36s  agent 발화 시작: <ret> '라 트라비아타' 티켓 두 장, 테아트로 코스탄치에서 삼월 이십오일에 예매 완료되었습니다. 확인 
    15.36s  ⚡SPAN 주입 [d'=1.04s / d_lead=9.12s]: (tool result) Booking confirmed for two tickets to 'La Traviata' at th
    15.36s  user  발화 끝
    24.49s  user  발화 시작: 그럼, 그날 저녁 식사도 예약해 줄 수 있을까요?
    24.49s  agent 발화 끝
    28.33s  agent 발화 시작: 저녁 식사도 예약해 드릴 수 있습니다. 어떤 종류의 음식을 좋아하시나요?
    28.33s  user  발화 끝
    33.13s  user  발화 시작: 음… 이탈리아 음식 말고 다른 걸 먹고 싶은데—
    33.13s  agent 발화 끝
    36.97s  user  발화 시작: …근데 혹시 공연장 근처에 분위기 좋은 식당 있어요?
    36.97s  user  발화 끝
    40.41s  <ret> 발화 (turn8 첫 프레임)
    40.81s  agent 발화 시작: <ret> 테아트로 코스탄치에서 도보 오분 거리에 있는 아로마 레스토랑은 구글에서 평점 사 점 오점에 리뷰가
    40.81s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.60s]: The Aroma restaurant, located just a five-minute walk from the Teatro 
    40.81s  user  발화 끝
    50.41s  user  발화 시작: 아, 거기 괜찮겠네요. 거기로 예약해 주세요.
    50.41s  agent 발화 끝
    53.13s  <ret> 발화 (turn10 첫 프레임)
    53.29s  agent 발화 시작: <ret> 아로마 레스토랑에서 삼월 이십오일 저녁 여덟시에 두 분을 위한 예약이 완료되었습니다. 예약 번호는
    53.29s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.12s]: (tool result) Reservation confirmed at Aroma restaurant near the Teatr
    53.29s  user  발화 끝
    62.42s  user  발화 시작: 혹시 삼월 이십육일에는 바티칸 투어 같은 거 할 수 있을까요?
    62.42s  agent 발화 끝
    67.06s  <ret> 발화 (turn12 첫 프레임)
    67.22s  agent 발화 시작: <ret> 삼월 이십육일에는 바티칸 박물관, 성 베드로 대성당, 시스티나 예배당을 방문할 수 있습니다. 약 
    67.22s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.60s]: (tool result) The Vatican Museums, St. Peter’s Basilica, and the Sisti
    67.22s  user  발화 끝
    76.82s  user  발화 시작: 가이드 투어 괜찮을 것 같아요. 예약해 줄 수 있을까요?
    76.82s  agent 발화 끝
    81.14s  agent 발화 시작: 가이드 투어 예약을 도와드리겠습니다. 몇 시쯤으로 예약하시겠어요?
    81.14s  user  발화 끝
    84.50s  agent 발화 시작: 투어 시간을 정하시면 바로 예약해 드리겠습니다.
    84.50s  agent 발화 끝
    87.38s  agent 발화 끝
