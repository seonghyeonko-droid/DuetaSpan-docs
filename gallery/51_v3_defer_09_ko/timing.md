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

# EXAMINER(FDB-v2) 단계: S1 오션뷰 호텔 샌디에이고… | S2 훌륭해. 혹시 그 호텔에서 해변까지 얼마나 걸릴까? | S3 음… 혹시 수영장이 있나? | S4 …근데, 혹시 호텔 근처에 괜찮은 레스토랑도 알아봐 줄 수 있

     0.00s  user  발화 시작: 오션뷰 호텔 샌디에이고…
     2.26s  user  발화 끝
     3.23s  user  발화 시작: …이월 십일부터 칠박 세개 방 예약해 줘.
     5.79s  <ret> 발화 (turn2 첫 프레임)
     5.95s  agent 발화 시작: <ret> 오션뷰 호텔 샌디에이고, 이월 십일부터 십칠일까지 세개 방이 예약되었고, 총 비용은 천팔백칠십오 
     6.14s  user  발화 끝
     7.79s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.15s]: (tool result) Confirmation ID: 8A9Z2B, Ocean View Hotel, San Diego, 3 
    11.85s  user  발화 시작: 어어.
    12.49s  user  발화 끝
    16.10s  agent 발화 끝
    16.30s  user  발화 시작: 훌륭해. 혹시 그 호텔에서 해변까지 얼마나 걸릴까?
    19.52s  <ret> 발화 (turn5 첫 프레임)
    19.81s  user  발화 끝
    19.82s  agent 발화 시작: <ret> 호텔에서 해변까지 거리는 팔백오십 미터이고, 걸어서 약 십일분 정도 걸립니다.
    21.52s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.86s]: (tool result) Distance to beach: 850 meters, estimated walking time: 1
    24.68s  agent 발화 끝
    24.71s  user  발화 시작: 음… 혹시 수영장이 있나?
    26.21s  <ret> 발화 (turn7 첫 프레임)
    26.61s  agent 발화 시작: <ret> 네, 오션뷰 호텔에는 야외 수영장이 있고, 아침 여덟시부터 밤 열시까지 이용 가능합니다.
    26.69s  user  발화 끝
    28.21s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.34s]: (tool result) Ocean View Hotel, San Diego, has an outdoor swimming poo
    32.95s  agent 발화 끝
    33.08s  user  발화 시작: 아, 그거 좋네—
    34.16s  user  발화 시작: …근데, 혹시 호텔 근처에 괜찮은 레스토랑도 알아봐 줄 수 있어?
    34.32s  user  발화 끝
    37.90s  <ret> 발화 (turn10 첫 프레임)
    38.06s  agent 발화 시작: <ret> 호텔 근처에 밋츠 씨푸드(육백오십미터), 이탈리안 비스트로(구백미터), 타코 숍(사백미터)이 있습
    38.27s  user  발화 끝
    39.10s  ⚡SPAN 주입 [d'=1.20s / d_lead=6.11s]: (tool result) Mitch's Seafood: 650 meters, Italian Bistro: 900 meters,
    44.17s  agent 발화 끝
