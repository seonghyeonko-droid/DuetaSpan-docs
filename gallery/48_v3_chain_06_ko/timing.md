# v3_chain_06_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_chain_06",
#     "name": "현준",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "50s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-12",
#       "category": "home",
#       "text": "User's home address is 부산 해운대구 우동 123-4."
#     },
#     {
#       "date": "2026-03-31",
#       "category": "trip",
#       "text": "User is planning a trip to Vietnam in December."
#     },
#     {
#       "date": "2026-03-07",
#       "category": "hobby",
#       "text": "User is into birdwatching."
#     },
#     {
#       "date": "2026-02-17",
#       "category": "diet",
#       "text": "User is gluten-free."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-03-23",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2026-03-20",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2026-02-09",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 제 투두 리스트 마지막 줄 좀 읽어 줄 수 있어요? | S2 민지 언니 생일 파티 장소가… | S3 …어디였지? 기억이 잘 안 나네. | S4 …오늘 날씨가 어때? 파티에 뭘 입고 가야 할지 궁금해서.

     0.00s  user  발화 시작: 제 투두 리스트 마지막 줄 좀 읽어 줄 수 있어요?
     4.53s  <ret> 발화 (turn1 첫 프레임)
     4.70s  agent 발화 시작: <ret> 죄송해요, 투두 리스트 파일을 찾을 수 없네요. 파일 이름이 정확한지 다시 확인해 주시겠어요?
     4.70s  user  발화 끝
     5.76s  ⚡SPAN 주입 [d'=1.23s / d_lead=6.11s]: (no information found)
    10.81s  user  발화 시작: 네.
    10.81s  agent 발화 끝
    11.28s  user  발화 시작: 아, 맞다, '오늘 할 일'로 저장했어. 다시 읽어 줄 수 있을까?
    11.28s  user  발화 끝
    16.46s  agent 발화 시작: 네.
    16.46s  user  발화 끝
    16.85s  <ret> 발화 (turn5 첫 프레임)
    16.93s  agent 발화 시작: <ret> 네, 오늘 저녁 일곱시에 민지 언니 생일 파티 예약이 완료되었다고 적혀 있네요.
    16.93s  agent 발화 끝
    17.33s  ⚡SPAN 주입 [d'=0.47s / d_lead=5.64s]: (tool result) 오늘 저녁 7시에 민지 언니 생일 파티 예약 완료.
    22.57s  user  발화 시작: 아.
    22.57s  agent 발화 끝
    23.04s  user  발화 시작: 민지 언니 생일 파티 장소가…
    23.04s  user  발화 끝
    25.39s  user  발화 시작: …어디였지? 기억이 잘 안 나네.
    25.39s  user  발화 끝
    27.30s  <ret> 발화 (turn9 첫 프레임)
    27.74s  agent 발화 시작: <ret> 민지 언니 생일 파티는 강남역 근처의 별빛 레스토랑에서 열리고, 예약 확인 번호는 비 이 구 케이
    27.74s  user  발화 끝
    28.62s  ⚡SPAN 주입 [d'=1.32s / d_lead=10.81s]: 민지 언니의 생일 파티는 강남역 근처의 '별빛 레스토랑'에서 열립니다. 예약 확인 번호는 B29K7입니다.
    38.55s  user  발화 시작: 네.
    38.55s  agent 발화 끝
    39.02s  user  발화 시작: 아니, 괜찮아. 그런데 별빛 레스토랑까지—
    39.02s  user  발화 끝
    41.37s  user  발화 시작: …오늘 날씨가 어때? 파티에 뭘 입고 가야 할지 궁금해서.
    41.37s  user  발화 끝
    45.25s  <ret> 발화 (turn13 첫 프레임)
    45.60s  agent 발화 시작: <ret> 강남역 날씨는 현재 이십육 점 오도이고, 습도는 육십팔퍼센트, 바람은 시속 사 점 이킬로미터로 약
    45.60s  user  발화 끝
    46.29s  ⚡SPAN 주입 [d'=1.04s / d_lead=11.28s]: (tool result) Location: Gangnam-gu, Seoul, South Korea. Temperature: 2
    56.89s  agent 발화 끝
