# v3_defer_09_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_defer_09",
#     "name": "준진",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "early 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-02-03",
#       "category": "trip",
#       "text": "User is planning a trip to Vietnam in December."
#     },
#     {
#       "date": "2026-01-31",
#       "category": "diet",
#       "text": "User is pescatarian."
#     },
#     {
#       "date": "2026-01-09",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Italian."
#     },
#     {
#       "date": "2025-12-31",
#       "category": "pet",
#       "text": "User has a Poodle named Coco."
#     },
#     {
#       "date": "2025-07-30",
#       "category": "allergy",
#       "text": "User is allergic to peanuts."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-01-31",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2026-01-01",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2025-09-18",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 콜로세움에 대한 자세한 정보를 알려줄 수 있을까요?
     3.43s  <ret> 발화 (turn1 첫 프레임)
     3.59s  agent 발화 시작: <ret> 콜로세움은 이탈리아 로마 중심부에 있는 타원형 원형 경기장이에요. 오만 명 이상을 수용할 수 있는
     3.59s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.94s]: (tool result) The Colosseum, also known as the Flavian Amphitheatre, i
     3.83s  user  발화 끝
     7.26s  user  발화 시작: 네.
     7.80s  user  발화 끝
    14.54s  agent 발화 끝
    16.28s  user  발화 시작: 음, 그럼 지금 날씨는 어때요?
    17.60s  <ret> 발화 (turn4 첫 프레임)
    17.92s  agent 발화 시작: <ret> 지금 로마는 섭씨 이십팔도이고, 습도는 육십오퍼센트, 바람은 시속 칠 점 이킬로미터로 맑은 하늘이
    17.92s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.83s]: (tool result) 28.0°C, humidity 65%, wind 7.2 km/h, clear skies
    18.12s  user  발화 끝
    25.44s  user  발화 시작: 이번 주 토요일에 맛있는 파스타 집을 예약해 줄 수 있을까요?
    25.75s  agent 발화 끝
    29.09s  agent 발화 시작: 이번 주 토요일 파스타 집 예약은 잠시만 기다려 주세요. 확인해 볼게요.
    29.28s  user  발화 끝
    32.60s  ⚡지연 SPAN 주입(선제발표 직전): Restaurant 'La Taverna dei Fori Imperiali' confirmed for Saturday, Jul
    33.30s  agent 발화 끝
    33.32s  agent 발화 시작: <ret> 예약 가능한 파스타 집을 찾아봤어요. 토요일 칠월 십일일 저녁 여덟시에 '라 타베르나 데이 포리 
    45.85s  agent 발화 끝
