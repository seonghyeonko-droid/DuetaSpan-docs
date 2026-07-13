# v3_fake__13_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_fake__13",
#     "name": "도아",
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
#       "date": "2026-01-09",
#       "category": "trip",
#       "text": "User is planning a trip to Vietnam in March."
#     },
#     {
#       "date": "2025-08-04",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-06-04",
#       "category": "hobby",
#       "text": "User is into home fermentation."
#     },
#     {
#       "date": "2025-06-03",
#       "category": "pet",
#       "text": "User has a Beagle named Rusty."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-20",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2025-12-15",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 파울라 압둘의 'Opposites Attract'에 누가 함께 불렀어?
     3.28s  <ret> 발화 (turn1 첫 프레임)
     3.44s  agent 발화 시작: <ret> 파울라 압둘의 'Opposites Attract'에는 마브 건이 함께 불렀답니다. 꽤 유명한 듀엣
     3.44s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.41s]: Marv Gunn sang with Paula Abdul on "Opposites Attract".
     3.44s  user  발화 끝
     8.77s  <ret> 발화 (turn2 첫 프레임)
     8.85s  agent 발화 시작: <ret> 요즘 날씨가 많이 더운데, 시원한 곳으로 여행 가고 싶어지네요.
     8.85s  ⚡SPAN 주입(IRRELEVANT) [d'=2.00s / d_lead=4.43s]: The average high temperature in Ulaanbaatar, Mongolia in July is 22.4°
     8.85s  agent 발화 끝
    13.28s  user  발화 시작: 어.
    13.28s  agent 발화 끝
    13.77s  user  발화 시작: 아, 맞아. 혹시 이번…
    13.77s  user  발화 끝
    15.73s  user  발화 시작: …주 토요일에 서울 날씨 어때?
    15.73s  user  발화 끝
    17.87s  <ret> 발화 (turn6 첫 프레임)
    18.19s  agent 발화 시작: <ret> 서울 이번 주 토요일 날씨는 섭씨 이십팔도에 습도 칠십팔퍼센트, 바람은 시속 사 점 일킬로미터로 
    18.19s  ⚡SPAN 주입 [d'=1.20s / d_lead=7.38s]: (tool result) Current conditions in Seoul are 28.0°C, humidity 78%, wi
    18.19s  user  발화 끝
    25.57s  agent 발화 시작: 혹시 주말에 서울에서 특별한 계획 있으신가요?
    25.57s  agent 발화 끝
    28.52s  agent 발화 끝
