# v3_noinfo_23_cs — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_noinfo_23",
#     "name": "Manon",
#     "location": {
#       "city": "New York",
#       "country": "United States",
#       "timezone": "America/New_York (EST, UTC-5)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "female",
#     "age_range": "early 20s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-03-11",
#       "category": "home",
#       "text": "User's home address is 893 Pine Court."
#     },
#     {
#       "date": "2026-03-05",
#       "category": "hobby",
#       "text": "User is into alpine wildflower photography."
#     },
#     {
#       "date": "2025-10-06",
#       "category": "pet",
#       "text": "User has a tabby cat named Luna."
#     },
#     {
#       "date": "2025-09-30",
#       "category": "diet",
#       "text": "User is vegetarian."
#     },
#     {
#       "date": "2025-09-22",
#       "category": "allergy",
#       "text": "User is allergic to peanuts."
#     },
#     {
#       "date": "2025-08-09",
#       "category": "trip",
#       "text": "User is planning a trip to Vietnam in May."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-11",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2026-04-21",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2025-10-05",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 이선희 님 연락처가 혹시 있으세요? | S2 다음 달에 제주도 여행을 계획하고 있어요. | S3 기분 좋게 들리네요. 거기 좋은 하이킹 코스가 있나요? | S4 알겠습니다, 참고할게요. 한라산 국립공원 근처에 괜찮은 식당 

     0.00s  user  발화 시작: 이선희 님 연락처가 혹시 있으세요?
     2.67s  <ret> 발화 (turn1 첫 프레임)
     2.77s  agent 발화 시작: <ret> 죄송합니다, 이선희 님의 공개된 연락처는 찾을 수 없었습니다. 개인 정보로 되어 있는 것 같습니다
     2.77s  user  발화 끝
     4.01s  ⚡SPAN 주입 [d'=1.34s / d_lead=7.75s]: (no information found)
    10.52s  user  발화 시작: 아, 그렇군요. 그럼…
    10.52s  agent 발화 끝
    12.18s  user  발화 시작: 최신 앨범 발매일은 어떠세요?
    12.18s  user  발화 끝
    14.14s  <ret> 발화 (turn4 첫 프레임)
    14.40s  agent 발화 시작: <ret> 음, 그녀의 열다섯 번째 스튜디오 앨범, “Because You’re Here”는 이천이십삼 년 
    14.40s  user  발화 끝
    14.74s  ⚡SPAN 주입 [d'=0.60s / d_lead=9.97s]: Lee Sun-hee released her fifteenth studio album, “Because You’re Here,
    24.37s  user  발화 시작: 네.
    24.37s  agent 발화 끝
    24.92s  user  발화 시작: 다음 달에 제주도 여행을 계획하고 있어요.
    24.92s  user  발화 끝
    28.24s  agent 발화 시작: 제주도는 정말 아름다운 곳이에요! 원하시면 제주도에 대한 정보를 찾아 드릴 수 있어요.
    28.24s  user  발화 끝
    34.89s  user  발화 시작: 네, 부탁드려요. 제주 시의 칠월 이십 일 날 날씨 예보는 어떻게 되나요?
    34.89s  agent 발화 끝
    41.54s  agent 발화 시작: 네.
    41.54s  user  발화 끝
    42.08s  <ret> 발화 (turn10 첫 프레임)
    42.09s  agent 발화 시작: <ret> 칠월 이십 일, 이천이십육 년 제주 시는 섭씨 이십육 점 삼 도, 습도는 칠십팔 퍼센트, 풍속은 
    42.09s  agent 발화 끝
    42.61s  ⚡SPAN 주입 [d'=0.53s / d_lead=13.29s]: (tool result) 26.3°C, humidity 78%, wind 7.2 km/h, mostly cloudy.
    55.38s  user  발화 시작: 기분 좋게 들리네요. 거기 좋은 하이킹 코스가 있나요?
    55.38s  agent 발화 끝
    59.62s  <ret> 발화 (turn12 첫 프레임)
    59.81s  agent 발화 시작: <ret> 음, 한라산 국립공원에는 성판악과 관음사 코스 같은 곳이 있는데, 길이가 팔 점 일 킬로미터에서 
    59.81s  user  발화 끝
    60.04s  ⚡SPAN 주입 [d'=0.43s / d_lead=12.18s]: (tool result) Hallasan National Park offers several hiking trails, inc
    71.99s  user  발화 시작: 성판악 코스가 흥미로워 보이네요.
    71.99s  agent 발화 끝
    74.21s  agent 발화 시작: 인기가 많은 코스인데, 아름다운 경치와 다양한 생태계를 자랑합니다—
    74.21s  user  발화 끝
    78.64s  user  발화 시작: 그 코스를 완주하는 데 보통 얼마나 걸리나요?
    78.64s  agent 발화 끝
    82.52s  agent 발화 시작: 성판악 코스를 완주하는 데는 보통 일곱 시간에서 아홉 시간 정도 걸립니다. 속도에 따라 다르지만, 하루 종일
    82.52s  user  발화 끝
    92.49s  user  발화 시작: 알겠습니다, 참고할게요. 한라산 국립공원 근처에 괜찮은 식당 좀 찾아 주시겠어요?
    92.49s  agent 발화 끝
    97.64s  <ret> 발화 (turn18 첫 프레임)
    98.02s  agent 발화 시작: <ret> 네, 한라산 국립공원 근처에는 제주 김만복 식당이나 흑돼지 거리가 있는데, 현지 음식을 맛볼 수 
    98.02s  user  발화 끝
    98.40s  ⚡SPAN 주입 [d'=0.76s / d_lead=10.52s]: (tool result) Several restaurants are near Hallasan National Park, inc
   108.55s  user  발화 시작: 네.
   108.55s  agent 발화 끝
   109.10s  user  발화 시작: 정말 완벽하네요. 감사합니다, 투이아.
   109.10s  user  발화 끝
   111.31s  agent 발화 시작: 천만에요. 하이킹에 적절한 옷을 챙기시고, 수분 보충도 잊지 마세요! 준비를 철저히 하는 것이 중요합니다.
   111.31s  user  발화 끝
   119.07s  agent 발화 끝
