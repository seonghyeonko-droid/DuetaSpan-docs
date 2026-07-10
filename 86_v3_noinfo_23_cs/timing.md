# v3_noinfo_23_cs — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_noinfo_23",
#     "name": "Zoe",
#     "location": {
#       "city": "Berlin",
#       "country": "Germany",
#       "timezone": "Europe/Berlin (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "German",
#     "gender": "female",
#     "age_range": "50s",
#     "language": "German"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-11",
#       "category": "home",
#       "text": "User's home address is 131 Cedar Lane."
#     },
#     {
#       "date": "2026-05-12",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is sushi."
#     },
#     {
#       "date": "2025-12-29",
#       "category": "trip",
#       "text": "User is planning a trip to Lisbon in December."
#     },
#     {
#       "date": "2025-11-06",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-10-15",
#       "category": "work",
#       "text": "User works as a graduate student."
#     },
#     {
#       "date": "2025-08-28",
#       "category": "hobby",
#       "text": "User is into rock climbing."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-11-06",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2025-10-31",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 저기, 혹시 사라 밀러 씨 전화번호 아세요? 작년에 컨퍼런스에 | S2 아, 음, 아쉽네요. 그럼 작년 7월 4일 서울 날씨는 어땠어 | S3 좋네요. 다음 주에 부산 호텔을 예약해야 할 것 같아요. | S4 흠, 파라다이스 괜찮은 것 같아요. 거기 방 예약해 주실 수 

     0.00s  user  발화 시작: 저기, 혹시 사라 밀러 씨 전화번호 아세요? 작년에 컨퍼런스에서 만났었거든요.
     5.63s  <ret> 발화 (turn1 첫 프레임)
     5.65s  user  발화 끝
     5.79s  agent 발화 시작: <ret> 아, 찾긴 했는데, 사라 밀러 씨 전화번호는 찾을 수가 없네. 정보가 공개되지 않은 것 같아.
     5.79s  ⚡SPAN 주입 [d'=1.44s / d_lead=6.59s]: (no information found)
    12.38s  agent 발화 끝
    12.61s  user  발화 시작: 아, 음, 아쉽네요. 그럼 작년 7월 4일 서울 날씨는 어땠어요?
    17.72s  <ret> 발화 (turn3 첫 프레임)
    18.12s  agent 발화 시작: <ret> 작년 7월 4일에는 서울 날씨가 28.5도였고, 구름이 조금 낀 맑은 날씨였어. 습도도 68퍼센트
    18.12s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.02s]: (tool result) The weather in Seoul on July 4, 2025, was 28.5°C with pa
    18.27s  user  발화 끝
    26.14s  agent 발화 끝
    26.28s  user  발화 시작: 좋네요. 다음 주에 부산 호텔을 예약해야 할 것 같아요.
    29.82s  <ret> 발화 (turn5 첫 프레임)
    30.02s  user  발화 끝
    30.05s  agent 발화 시작: <ret> 다음 주 부산 호텔 몇 군데 찾았어. 파라다이스 호텔은 별점이 4.5개이고, 밤에 210달러고, 
    30.05s  ⚡SPAN 주입 [d'=1.04s / d_lead=10.43s]: (tool result) Busan hotels: Paradise Hotel Busan (4.5 stars, $210/nigh
    40.41s  user  발화 시작: 흠, 파라다이스 괜찮은 것 같아요. 거기 방 예약해 주실 수 있으세요?
    40.48s  agent 발화 끝
    44.92s  <ret> 발화 (turn7 첫 프레임)
    45.00s  agent 발화 시작: <ret> 파라다이스 호텔 부산에 다음 주 방을 예약했어. 확인 코드는 PHB7492야. 여행 잘 다녀와.
    45.00s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.28s]: (tool result) Paradise Hotel Busan for 1 night, check-in July 17, 2026
    45.03s  user  발화 끝
    52.28s  agent 발화 끝
