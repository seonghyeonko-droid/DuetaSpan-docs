# v3_mcp_04_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mcp_04",
#     "name": "세완",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "early 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-30",
#       "category": "pet",
#       "text": "User has a Poodle named Coco."
#     },
#     {
#       "date": "2026-04-18",
#       "category": "work",
#       "text": "User works as a graphic designer."
#     },
#     {
#       "date": "2025-12-18",
#       "category": "trip",
#       "text": "User is planning a trip to Lisbon in October."
#     },
#     {
#       "date": "2025-09-02",
#       "category": "hobby",
#       "text": "User is into birdwatching."
#     },
#     {
#       "date": "2025-08-07",
#       "category": "allergy",
#       "text": "User is allergic to peanuts."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-04",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2026-02-07",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2025-09-04",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 시애틀에서 집을 구해야 하는데, 성인 한 명이고, 십일월 십오 | S2 일박에 백달러 이하면 좋겠어요. | S3 고마워요. 혹시 그 근처에 맛있는 식당도 추천해 줄 수 있을까 | S4 아, 좋네요. 그 식당까지 가는 길을 알려줄 수 있을까요?

     0.00s  user  발화 시작: 시애틀에서 집을 구해야 하는데, 성인 한 명이고, 십일월 십오일에 체크인해서 십팔일에 체크아웃하려고요.
     5.30s  <ret> 발화 (turn1 첫 프레임)
     5.70s  agent 발화 시작: <ret> 시애틀 파인 스트리트 백이십삼번지에 있는 집을 찾았습니다. 일박에 백오십달러이고, 예약 확인번호는
     5.70s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.08s]: (tool result) {"house id": "789012", "address": "123 Pine Street, Seat
     5.70s  user  발화 끝
    13.78s  user  발화 시작: 음… 그 가격이 좀 비싼 것 같은데, 좀 더 저렴한 곳을 찾아볼 수 있을까요?
    13.78s  agent 발화 끝
    20.43s  agent 발화 시작: 좀 더 저렴한 곳을 찾아볼게요. 어떤 가격대를 생각하고 계세요?
    20.43s  user  발화 끝
    24.71s  user  발화 시작: 일박에 백달러 이하면 좋겠어요.
    24.71s  agent 발화 끝
    26.29s  <ret> 발화 (turn5 첫 프레임)
    26.61s  agent 발화 시작: <ret> 오크 애비뉴 사백오십육번지에 일박에 구십달러인 집을 찾았습니다. 예약 확인번호는 디 이 에프 칠 
    26.61s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.60s]: (tool result) {"house id": "456789", "address": "456 Oak Avenue, Seatt
    26.61s  user  발화 끝
    34.21s  user  발화 시작: 진짜요?
    34.21s  agent 발화 끝
    34.69s  user  발화 시작: 좋아요, 그럼 그쪽으로 예약해 주세요.
    34.69s  user  발화 끝
    36.98s  <ret> 발화 (turn8 첫 프레임)
    37.06s  agent 발화 시작: <ret> 네, 오크 애비뉴 사백오십육번지 집으로 예약이 완료되었습니다. 확인번호는 지 에이치 아이 공 일 
    37.06s  ⚡SPAN 주입 [d'=0.64s / d_lead=8.08s]: (tool result) {"house id": "456789", "address": "456 Oak Avenue, Seatt
    37.06s  user  발화 끝
    45.14s  user  발화 시작: 고마워요. 혹시 그 근처에 맛있는 식당도 추천해 줄 수 있을까요?
    45.14s  agent 발화 끝
    49.89s  agent 발화 시작: 오크 애비뉴 주변에는 다양한 식당들이 있습니다. 어떤 종류의 음식을 좋아하세요?
    49.89s  user  발화 끝
    54.64s  user  발화 시작: 맞아요.
    54.64s  agent 발화 끝
    55.12s  user  발화 시작: 음… 해산물 종류가 좋을 것 같아요.
    55.12s  user  발화 끝
    57.89s  <ret> 발화 (turn13 첫 프레임)
    57.97s  agent 발화 시작: <ret> 엘름 스트리트 칠백팔십구번지에 있는 '더 크랩 쉑'이라는 해산물 식당이 평점이 사 점 오점이고 가
    57.97s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.13s]: (tool result) {"restaurant name": "The Crab Shack", "address": "789 El
    57.97s  user  발화 끝
    65.10s  user  발화 시작: 아, 좋네요. 그 식당까지 가는 길을 알려줄 수 있을까요?
    65.10s  agent 발화 끝
    69.13s  <ret> 발화 (turn15 첫 프레임)
    69.37s  agent 발화 시작: <ret> 오크 애비뉴에서 파인 스트리트를 향해 북쪽으로 가세요. 파인 스트리트에서 좌회전하여 엘름 스트리트
    69.37s  ⚡SPAN 주입 [d'=2.00s / d_lead=12.35s]: (tool result) {"directions": "Head north on Oak Avenue toward Pine Str
    69.37s  user  발화 끝
    81.73s  agent 발화 끝
