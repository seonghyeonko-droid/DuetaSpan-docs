# v3_rag_28_cs — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_28",
#     "name": "Ruby",
#     "location": {
#       "city": "Paris",
#       "country": "France",
#       "timezone": "Europe/Paris (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "French",
#     "gender": "female",
#     "age_range": "40s",
#     "language": "French"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-28",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2026-06-12",
#       "category": "allergy",
#       "text": "User is allergic to peanuts."
#     },
#     {
#       "date": "2026-05-20",
#       "category": "home",
#       "text": "User's home address is 910 Oak Avenue."
#     },
#     {
#       "date": "2026-03-27",
#       "category": "pet",
#       "text": "User has a tabby cat named Luna."
#     },
#     {
#       "date": "2025-11-01",
#       "category": "work",
#       "text": "User works as a chef."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-24",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2025-09-16",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2025-08-14",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 안녕하세요, 제르. 여기 정착하려고 하니까 좀 정신이 없네요! | S2 카타르군요, 그렇군요. 몰랐어요. 지금 날씨는… | S3 와, 더운데요! 근처에 괜찮은 식당을 찾고 있어요. | S4 딱이에요! 제가 딱 필요한 곳이네요. 고마워요, 제르.

     0.00s  user  발화 시작: 안녕하세요, 제르. 여기 정착하려고 하니까 좀 정신이 없네요!
     4.31s  user  발화 끝
     4.33s  agent 발화 시작: 아, 안녕하세요! 정착하는 게 쉽지 않죠, 그렇지요?
     8.32s  agent 발화 끝
     8.70s  user  발화 시작: 감사합니다. 혹시 2022년 월드컵은 누가 개최했는지 궁금합니다.
    13.26s  <ret> 발화 (turn3 첫 프레임)
    13.50s  agent 발화 시작: <ret> 이천이십이 년 FIFA 월드컵은 카타르에서 개최됐습니다. 아랍 세계에서 처음 열린 대회였답니다.
    13.50s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.39s]: The 2022 FIFA World Cup was hosted by Qatar, marking the first time th
    13.57s  user  발화 끝
    21.89s  agent 발화 끝
    22.67s  user  발화 시작: 카타르군요, 그렇군요. 몰랐어요. 지금 날씨는…
    27.34s  user  발화 끝
    29.36s  user  발화 시작: …거기서 어때요?
    30.30s  <ret> 발화 (turn6 첫 프레임)
    30.54s  agent 발화 시작: <ret> 지금 카타르의 기온은 섭씨 32.0도이고, 습도는 65퍼센트, 풍속은 시속 8.9킬로미터입니다.
    30.54s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.97s]: (tool result) 32.0°C, humidity 65%, wind 8.9 km/h
    30.65s  user  발화 끝
    38.29s  user  발화 시작: 네.
    38.74s  user  발화 끝
    40.51s  agent 발화 끝
    40.57s  user  발화 시작: 와, 더운데요! 근처에 괜찮은 식당을 찾고 있어요.
    44.27s  user  발화 끝
    44.55s  agent 발화 시작: 음, 맛있는 곳을 찾는 건 집처럼 편안하게 지내는 좋은 방법이 될 거예요—
    49.55s  user  발화 시작: …혹시 한국 음식 파는 곳이 있나요?
    50.10s  agent 발화 끝
    51.44s  <ret> 발화 (turn11 첫 프레임)
    51.60s  agent 발화 시작: <ret> 아리랑 한식당이 있는데, 평점이 4.5점이고 거리는 0.8킬로미터, 가격대는 보통입니다.
    51.60s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.04s]: (tool result) Arirang Korean Restaurant, 4.5 stars, 0.8km, $$
    51.67s  user  발화 끝
    56.83s  user  발화 시작: 네.
    57.24s  user  발화 끝
    60.63s  user  발화 시작: 딱이에요! 제가 딱 필요한 곳이네요. 고마워요, 제르.
    60.65s  agent 발화 끝
    64.68s  agent 발화 시작: 천만에요! 제가 식당을 찾는 데 도움이 되어서 기쁩니다. 고향의 맛을 찾는 게 정말 중요하잖아요?
    64.84s  user  발화 끝
    72.80s  agent 발화 끝
