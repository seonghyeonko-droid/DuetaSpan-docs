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

# EXAMINER(FDB-v2) 단계: S1 내년 이월 십일부터 샌디에이고 오션뷰 호텔에 방 세 개 예약해 | S2 혹시 그 호텔에 수영장이 있는지 알려줄 수 있어? | S3 아, 좋은데… 근데 바다가 보이는 방으로 부탁할 수 있을까?  | S4 …혹시 호텔 근처에 괜찮은 해변이 있을까?

     0.00s  user  발화 시작: 내년 이월 십일부터 샌디에이고 오션뷰 호텔에 방 세 개 예약해 줘. 칠박으로.
     5.09s  <ret> 발화 (turn1 첫 프레임)
     5.25s  agent 발화 시작: <ret> 오션뷰 호텔, 이천이십칠년 이월 십일부터 칠박, 방 세 개 예약 완료되었습니다. 확인 번호는 R7
     5.32s  user  발화 끝
     7.09s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.43s]: confirmation_number=R729XJ,hotel_name=Ocean View Hotel,city=San Diego,
    15.68s  agent 발화 끝
    16.35s  user  발화 시작: 혹시 그 호텔에 수영장이 있는지 알려줄 수 있어?
    18.78s  <ret> 발화 (turn3 첫 프레임)
    19.10s  agent 발화 시작: <ret> 네, 오션뷰 호텔에는 수영장, 레스토랑, 바, 피트니스 센터가 있습니다.
    19.31s  user  발화 끝
    20.78s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.14s]: (tool result) swimming pool=True,restaurant=True,bar=True,fitness cent
    24.23s  agent 발화 끝
    24.30s  user  발화 시작: 아, 좋은데… 근데 바다가 보이는 방으로 부탁할 수 있을까? —
    28.38s  user  발화 시작: …혹시 호텔 근처에 괜찮은 해변이 있을까?
    28.55s  user  발화 끝
    31.27s  agent 발화 시작: 샌디에이고에는 코로라도 해변과 라호야 해변이 유명합니다. 두 곳 모두 오션뷰 호텔에서 차로 이십분 정도 거리
    31.38s  user  발화 끝
    37.63s  user  발화 시작: 헐.
    38.13s  user  발화 끝
    40.31s  agent 발화 끝
    40.33s  agent 발화 시작: 코로라도 해변은 서핑으로, 라호야 해변은 물개 관찰로 유명합니다. 두 해변 모두 산책하기에도 좋습니다. 즐거
    48.76s  agent 발화 끝
