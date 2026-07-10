# v3_defer_09_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_defer_09",
#     "name": "보아",
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
#       "date": "2026-04-24",
#       "category": "pet",
#       "text": "User has a tabby cat named Luna."
#     },
#     {
#       "date": "2026-03-05",
#       "category": "home",
#       "text": "User's home address is 경기 성남시 분당구 판교로 235."
#     },
#     {
#       "date": "2025-12-23",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Italian."
#     },
#     {
#       "date": "2025-10-20",
#       "category": "diet",
#       "text": "User is pescatarian."
#     },
#     {
#       "date": "2025-08-12",
#       "category": "allergy",
#       "text": "User is allergic to shellfish."
#     },
#     {
#       "date": "2025-07-04",
#       "category": "hobby",
#       "text": "User is into vintage synth collecting."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-14",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 오션뷰 호텔, 샌디에이고, 이월 십일부터 칠박 세개 방 예약해 | S2 혹시 그 호텔에 수영장이 있는지 알려줄 수 있어? | S3 아, 피트니스 센터는 좋네. 그런데 혹시 해변까지 얼마나 걸릴 | S4 …혹시 호텔 근처에 맛있는 레스토랑도 추천해 줄 수 있어?

     0.00s  user  발화 시작: 오션뷰 호텔, 샌디에이고, 이월 십일부터 칠박 세개 방 예약해 줘.
     5.09s  <ret> 발화 (turn1 첫 프레임)
     5.25s  agent 발화 시작: <ret> 오션뷰 호텔, 샌디에이고에 이월 십일부터 칠박 세개 방을 예약했습니다. 확인 번호는 팔A9Z2X입
     5.25s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.53s]: (tool result) Ocean View Hotel in San Diego has been reserved for thre
     5.28s  user  발화 끝
    13.78s  agent 발화 끝
    14.17s  user  발화 시작: 혹시 그 호텔에 수영장이 있는지 알려줄 수 있어?
    16.81s  <ret> 발화 (turn3 첫 프레임)
    17.13s  agent 발화 시작: <ret> 오션뷰 호텔에는 야외 수영장과 피트니스 센터, 그리고 무료 아침 식사가 제공됩니다.
    17.13s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.88s]: Ocean View Hotel in San Diego features an outdoor swimming pool, a fit
    17.36s  user  발화 끝
    23.02s  agent 발화 끝
    24.50s  user  발화 시작: 아, 피트니스 센터는 좋네. 그런데 혹시 해변까지 얼마나 걸릴까?
    29.27s  agent 발화 시작: 해변까지 걸어서 십분 정도 걸립니다.
    29.32s  user  발화 끝
    30.62s  user  발화 시작: 헐.
    31.11s  user  발화 끝
    31.31s  agent 발화 시작: 네, 보통 걸음으로 십분 정도면 해변에 도착하실 수 있어요—
    31.34s  agent 발화 끝
    34.17s  user  발화 시작: …혹시 호텔 근처에 맛있는 레스토랑도 추천해 줄 수 있어?
    34.83s  agent 발화 끝
    37.57s  <ret> 발화 (turn9 첫 프레임)
    37.65s  agent 발화 시작: <ret> 오션뷰 호텔 근처에는 미치스 씨푸드라는 캐주얼한 레스토랑과 주니퍼 앤 아이비라는 고급 레스토랑이 
    37.65s  ⚡SPAN 주입 [d'=1.84s / d_lead=10.29s]: There are several highly-rated restaurants near Ocean View Hotel, incl
    37.87s  user  발화 끝
    47.94s  agent 발화 끝
