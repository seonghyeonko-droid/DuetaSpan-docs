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
#       "text": "User's home address is 530 Elm Street."
#     },
#     {
#       "date": "2025-12-23",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Korean BBQ."
#     },
#     {
#       "date": "2025-10-20",
#       "category": "diet",
#       "text": "User is vegetarian."
#     },
#     {
#       "date": "2025-08-12",
#       "category": "allergy",
#       "text": "User is allergic to pollen."
#     },
#     {
#       "date": "2025-07-04",
#       "category": "hobby",
#       "text": "User is into marathon training."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-10-24",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2025-06-27",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 오션뷰 호텔, 샌디에이고, 이월 십일부터 칠박… | S2 그 호텔에 수영장이 있는지 궁금해. | S3 아, 그런데… 그 호텔 근처에 괜찮은 해변이 있을까? | S4 코로라도 해변이 어디에 있는지 알려줄 수 있어?

     0.00s  user  발화 시작: 오션뷰 호텔, 샌디에이고, 이월 십일부터 칠박…
     4.54s  user  발화 끝
     5.57s  user  발화 시작: …방 세 개 예약해 줘.
     6.82s  <ret> 발화 (turn2 첫 프레임)
     6.98s  agent 발화 시작: <ret> 오션뷰 호텔, 샌디에이고, 이월 십일부터 칠박, 방 세 개를 예약했습니다. 확인 번호는 팔 육 칠
     7.18s  user  발화 끝
     8.82s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.02s]: (tool result) Confirmation number is 8675309. Three rooms at Ocean Vie
    12.80s  user  발화 시작: 어어.
    13.63s  user  발화 끝
    17.00s  agent 발화 끝
    17.15s  user  발화 시작: 그 호텔에 수영장이 있는지 궁금해.
    19.54s  <ret> 발화 (turn5 첫 프레임)
    19.73s  user  발화 끝
    19.86s  agent 발화 시작: <ret> 네, 오션뷰 호텔에는 수영장이 있습니다.
    20.74s  ⚡SPAN 주입 [d'=1.20s / d_lead=2.73s]: (tool result) Yes, Ocean View Hotel has a swimming pool.
    22.59s  agent 발화 끝
    22.63s  user  발화 시작: 아, 그런데… 그 호텔 근처에 괜찮은 해변이 있을까?
    26.41s  agent 발화 시작: 근처 해변에 대해 알아보고 있는데—
    26.43s  user  발화 끝
    28.04s  user  발화 시작: … 혹시 호텔에서 해변까지 셔틀버스가 운행하는지 알 수 있을까?
    28.68s  agent 발화 끝
    31.16s  <ret> 발화 (turn9 첫 프레임)
    31.56s  agent 발화 시작: <ret> 잠시만 기다려 주세요.
    31.66s  ⚡SPAN 주입 [d'=0.50s / d_lead=1.10s]: (tool result) Yes, Ocean View Hotel offers a free shuttle to Coronado 
    31.69s  user  발화 끝
    32.66s  agent 발화 끝
    32.73s  agent 발화 시작: 네, 오션뷰 호텔에서는 코로라도 해변까지 두시간마다 무료 셔틀버스를 운행하고 있습니다.
    38.56s  agent 발화 끝
    40.08s  user  발화 시작: 코로라도 해변이 어디에 있는지 알려줄 수 있어?
    42.65s  <ret> 발화 (turn12 첫 프레임)
    42.80s  agent 발화 시작: <ret> 코로라도 해변은 샌디에이고 시내에서 배를 건너 코로라도 섬 서쪽에 위치해 있습니다.
    43.03s  user  발화 끝
    43.85s  ⚡SPAN 주입 [d'=1.20s / d_lead=5.47s]: [source: Google Maps] Coronado Beach is located on the west coast of C
    48.27s  agent 발화 끝
