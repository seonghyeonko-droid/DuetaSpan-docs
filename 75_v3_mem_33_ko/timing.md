# v3_mem_33_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_33",
#     "name": "유아",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "early 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-17",
#       "category": "diet",
#       "text": "User is vegan."
#     },
#     {
#       "date": "2026-03-05",
#       "category": "trip",
#       "text": "User is planning a trip to Kyoto in May."
#     },
#     {
#       "date": "2026-02-08",
#       "category": "home",
#       "text": "User's home address is 인천 연수구 송도동 12-5."
#     },
#     {
#       "date": "2025-09-11",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Ethiopian."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-20",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2025-08-24",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2025-06-14",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 아, 네. 모라 씨, 만나서 반가워요. 지금 부산 시간 몇 시 | S2 혹시 제가 오월에 교토 여행을 간다고 말씀드렸었죠? | S3 사실 숙소 예약이 좀 늦어서 아직 못 했어요 — | S4 …혹시 교토에서 괜찮은 비건 식당 아세요?

     0.00s  agent 발화 시작: 안녕하세요, 유아님! 저는 모라예요. 부산으로 이사 오신 걸 도와드릴게요.
     3.90s  user  발화 시작: 네네.
     3.90s  agent 발화 끝
     4.34s  user  발화 시작: 아, 네. 모라 씨, 만나서 반가워요. 지금 부산 시간 몇 시예요?
     4.34s  user  발화 끝
     9.03s  <ret> 발화 (turn3 첫 프레임)
     9.11s  agent 발화 시작: <ret> 지금은 이천이십육년 칠월 십일 금요일 오후 세시 십칠분이에요. 부산에 잘 정착하실 수 있도록 최선
     9.11s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.50s]: (tool result) It is Friday, July 10, 2026 at 3:17 PM in Asia/Seoul rig
     9.11s  user  발화 끝
    15.61s  user  발화 시작: 그렇죠.
    15.61s  agent 발화 끝
    16.04s  user  발화 시작: 혹시 제가 오월에 교토 여행을 간다고 말씀드렸었죠?
    16.04s  user  발화 끝
    18.84s  <ret> 발화 (turn6 첫 프레임)
    19.08s  agent 발화 시작: <ret> 네, 오월에 교토 여행을 계획하고 계시다고 말씀하셨어요. 혹시 여행 준비는 잘 되어 가시나요?
    19.08s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.64s]: [2026-03-05] User is planning a trip to Kyoto in May.
    19.08s  user  발화 끝
    24.72s  user  발화 시작: 와.
    24.72s  agent 발화 끝
    25.15s  user  발화 시작: 사실 숙소 예약이 좀 늦어서 아직 못 했어요 —
    25.15s  user  발화 끝
    29.05s  user  발화 시작: …혹시 교토에서 괜찮은 비건 식당 아세요?
    29.05s  user  발화 끝
    31.41s  <ret> 발화 (turn10 첫 프레임)
    31.65s  agent 발화 시작: <ret> 교토에 있는 비건 라멘 우즈 교토는 별점 사 점 육점에 리뷰가 백이십개나 있어요. 비건 라멘과 일
    31.65s  ⚡SPAN 주입 [d'=1.28s / d_lead=9.11s]: (tool result) Vegan Ramen UZU Kyoto 4.6 stars, 120 reviews, $$ - Vegan
    31.65s  user  발화 끝
    40.76s  agent 발화 끝
