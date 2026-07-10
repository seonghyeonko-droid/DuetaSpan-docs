# v3_defer_10_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_defer_10",
#     "name": "은국",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "late 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-05",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is sushi."
#     },
#     {
#       "date": "2026-04-03",
#       "category": "diet",
#       "text": "User is gluten-free."
#     },
#     {
#       "date": "2025-12-04",
#       "category": "home",
#       "text": "User's home address is 경기 성남시 분당구 판교로 235."
#     },
#     {
#       "date": "2025-11-16",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2025-11-06",
#       "category": "pet",
#       "text": "User has a Corgi named Mochi."
#     },
#     {
#       "date": "2025-10-13",
#       "category": "allergy",
#       "text": "User is allergic to peanuts."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-02-24",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2026-01-16",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2025-10-23",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 시카고 리버 이스트 스물한 극장에서 상영하는 드라마 영화 좀  | S2 저녁 여덟시 표 두 장 예매해 줘. | S3 고마워. 혹시 오늘 날씨 어때? | S4 오늘 저녁에 비 올 가능성 있어?

     0.00s  user  발화 시작: 시카고 리버 이스트 스물한 극장에서 상영하는 드라마 영화 좀 알려줘.
     4.16s  <ret> 발화 (turn1 첫 프레임)
     4.23s  agent 발화 시작: <ret> 시카고 리버 이스트 스물한 극장에서는 크리스토퍼 놀란 감독의 드라마 “오펜하이머”와 셀린 송 감독
     4.24s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.30s]: (tool result) The AMC River East 21 in Chicago is showing “Oppenheimer
     4.26s  user  발화 끝
     9.59s  user  발화 시작: 어어.
    10.22s  user  발화 끝
    12.48s  user  발화 시작: “오펜하이머” 상영 시간 좀 알려줄래?
    12.54s  agent 발화 끝
    14.08s  <ret> 발화 (turn4 첫 프레임)
    14.48s  agent 발화 시작: <ret> “오펜하이머”는 오늘 AMC 리버 이스트 스물한 극장에서 오후 한시 삼십분, 오후 네시 사십오분,
    14.48s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.90s]: (tool result) “Oppenheimer” is playing at AMC River East 21 today at 1
    14.64s  user  발화 끝
    23.39s  agent 발화 끝
    23.51s  user  발화 시작: 저녁 여덟시 표 두 장 예매해 줘.
    25.07s  <ret> 발화 (turn6 첫 프레임)
    25.38s  agent 발화 시작: <ret> “오펜하이머” 저녁 여덟시 AMC 리버 이스트 스물한 극장 표 두 장, 확인번호는 칠 팔 엑스 구
    25.39s  ⚡SPAN 주입 [d'=1.36s / d_lead=8.58s]: (tool result) Two tickets for “Oppenheimer” at AMC River East 21 at 8:
    25.59s  user  발화 끝
    33.96s  agent 발화 끝
    34.97s  user  발화 시작: 고마워. 혹시 오늘 날씨 어때?
    36.53s  <ret> 발화 (turn8 첫 프레임)
    36.92s  agent 발화 시작: <ret> 지금 시카고 날씨는 이십사 점 오도이고, 습도는 육십팔%, 바람은 남서쪽에서 시속 칠 점 이킬로미
    36.93s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.32s]: (tool result) The weather in Chicago is currently 24.5°C, with humidit
    37.09s  user  발화 끝
    40.57s  user  발화 시작: 응.
    41.02s  user  발화 끝
    44.24s  agent 발화 끝
    44.57s  user  발화 시작: 오늘 저녁에 비 올 가능성 있어?
    46.04s  <ret> 발화 (turn11 첫 프레임)
    46.44s  agent 발화 시작: <ret> 오늘 저녁 시카고에 비가 올 가능성은 이십% 정도예요.
    46.44s  ⚡SPAN 주입 [d'=1.76s / d_lead=3.84s]: (tool result) There is a 20% chance of rain in Chicago tonight.
    46.50s  user  발화 끝
    50.08s  <ret> 발화 (turn12 첫 프레임)
    50.24s  agent 발화 시작: <ret> 날씨가 조금 쌀쌀해질 수 있으니 가벼운 겉옷을 챙기시는 게 좋겠어요. 마음이 조금 편안해지셨으면 
    50.28s  agent 발화 끝
    52.08s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.46s]: (no information found)
    56.49s  agent 발화 끝
