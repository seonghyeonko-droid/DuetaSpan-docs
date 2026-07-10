# v3_selfc_07_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_selfc_07",
#     "name": "수아",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "late 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-05",
#       "category": "work",
#       "text": "User works as a graduate student."
#     },
#     {
#       "date": "2026-04-09",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Mexican."
#     },
#     {
#       "date": "2026-03-11",
#       "category": "pet",
#       "text": "User has a Corgi named Mochi."
#     },
#     {
#       "date": "2026-01-24",
#       "category": "trip",
#       "text": "User is planning a trip to Kyoto in December."
#     },
#     {
#       "date": "2026-01-12",
#       "category": "hobby",
#       "text": "User is into alpine wildflower photography."
#     },
#     {
#       "date": "2025-12-07",
#       "category": "diet",
#       "text": "User is pescatarian."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-10",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2026-05-05",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 기본 지원에 대한 연간 구독 플랜을 만들어 줄 수 있을까요,  | S2 네, 다음 주에 뉴욕에 가는데— | S3 … 혹시 그 호텔 예약도 도와줄 수 있나요? | S4 제인 호텔이 괜찮아 보이네요.

     0.00s  user  발화 시작: 기본 지원에 대한 연간 구독 플랜을 만들어 줄 수 있을까요, 제품 번호는 구천십이입니다.
     5.83s  user  발화 끝
     5.87s  <ret> 발화 (turn1 첫 프레임)
     6.10s  agent 발화 시작: <ret> 제품 구천십이에 대한 연간 기본 지원 구독 플랜을 만들었습니다. 확인 번호는 칠b4n9x입니다. 
     6.11s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.81s]: (tool result) Subscription plan created: annual basic support for prod
    16.91s  agent 발화 끝
    17.41s  user  발화 시작: 음… 아니요, 그런데 지금 뉴욕 날씨가 어때요?
    20.45s  <ret> 발화 (turn3 첫 프레임)
    20.74s  user  발화 끝
    20.76s  agent 발화 시작: <ret> 현재 뉴욕은 맑고, 기온은 이십팔 점 삼도, 습도는 육십오%, 바람은 시속 팔 점 이킬로미터입니다
    20.77s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.27s]: (tool result) 28.3°C, humidity 65%, wind 8.2 km/h, clear skies.
    29.95s  user  발화 시작: 네, 다음 주에 뉴욕에 가는데—
    30.03s  agent 발화 끝
    31.70s  user  발화 끝
    31.72s  user  발화 시작: … 혹시 그 호텔 예약도 도와줄 수 있나요?
    33.80s  user  발화 끝
    33.89s  agent 발화 시작: 호텔 예약도 도와드릴 수 있습니다. 어떤 종류의 호텔을 찾으세요?
    38.87s  user  발화 시작: 음… 맨해튼에 있는 가성비 좋은 호텔을 찾고 있어요.
    38.89s  agent 발화 끝
    43.21s  user  발화 끝
    43.29s  <ret> 발화 (turn8 첫 프레임)
    43.53s  agent 발화 시작: <ret> 맨해튼에서 가성비 좋은 호텔로는 제인 호텔이 일박에 백오십달러, 더 포드 호텔이 백이십달러, 프리
    43.53s  ⚡SPAN 주입 [d'=1.28s / d_lead=10.30s]: (tool result) The Jane Hotel - $150/night, The Pod Hotels - $120/night
    49.03s  user  발화 시작: 와.
    49.39s  user  발화 끝
    53.83s  agent 발화 끝
    54.59s  user  발화 시작: 제인 호텔이 괜찮아 보이네요.
    56.56s  user  발화 끝
    56.58s  agent 발화 시작: 제인 호텔이 마음에 드시는군요. 정말 좋은 선택이에요. 분위기가 독특하고, 위치도 좋다고 들었어요.
    63.63s  agent 발화 끝
