# v3_mcp_00_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mcp_00",
#     "name": "보형",
#     "location": {
#       "city": "Busan",
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
#       "date": "2026-06-13",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Ethiopian."
#     },
#     {
#       "date": "2026-04-10",
#       "category": "work",
#       "text": "User works as a nurse."
#     },
#     {
#       "date": "2026-03-13",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2026-03-05",
#       "category": "hobby",
#       "text": "User is into vintage synth collecting."
#     },
#     {
#       "date": "2025-09-17",
#       "category": "allergy",
#       "text": "User is allergic to pollen."
#     },
#     {
#       "date": "2025-08-04",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-01-26",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2026-01-01",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2025-08-08",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 에펠탑 파리 좌표 좀 알려줄 수 있을까요? | S2 음… 숙소도 예약해야 하는데, 에펠탑 근처에 좋은 호텔 있을까 | S3 그럼 스탠다드룸으로 예약해 주세요. | S4 짐은 어떻게 해야 할까요? 호텔에 짐 보관 서비스가 있나요?

     0.00s  user  발화 시작: 에펠탑 파리 좌표 좀 알려줄 수 있을까요?
     2.96s  <ret> 발화 (turn1 첫 프레임)
     3.20s  agent 발화 시작: <ret> 파리에 있는 에펠탑의 좌표는… 사십팔 점 팔 오 팔 사, 이 점 이 구 사 오입니다.
     3.38s  user  발화 끝
     4.96s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.77s]: (tool result) 48.8584, 2.2945
     5.38s  user  발화 시작: 어머.
     5.87s  user  발화 끝
     9.58s  user  발화 시작: 그 근처에 괜찮은 레스토랑 있나요?
     9.97s  agent 발화 끝
    11.73s  <ret> 발화 (turn4 첫 프레임)
    12.05s  agent 발화 시작: <ret> 에펠탑 근처에는 르 쥘 베르느, 레 옴브르, 비스트로 슈 프랑스 같은 레스토랑이 있습니다.
    12.11s  user  발화 끝
    13.73s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.47s]: (tool result) Le Jules Verne (French, $$$$), Les Ombres (French, $$$),
    17.52s  agent 발화 끝
    18.00s  user  발화 시작: 르 쥘 베르느 예약 좀 해 줄 수 있어요? 내일 저녁 여덟시에 두 명으로요.
    23.72s  <ret> 발화 (turn6 첫 프레임)
    23.80s  agent 발화 시작: <ret> 르 쥘 베르느 내일 저녁 여덟시에 두 분으로 예약이 완료되었습니다. 확인 번호는 칠 팔 구 이 삼
    23.97s  user  발화 끝
    25.72s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.02s]: (tool result) Reservation confirmed. Confirmation number: 789234
    31.82s  agent 발화 끝
    32.10s  user  발화 시작: 네, 알겠습니다.
    33.00s  agent 발화 시작: 작은 도움이라도 되어 기쁩니다. 혹시 다른 계획도 세우실 건가요?
    33.24s  user  발화 끝
    37.54s  agent 발화 끝
    37.79s  user  발화 시작: 음… 숙소도 예약해야 하는데, 에펠탑 근처에 좋은 호텔 있을까요?
    42.77s  <ret> 발화 (turn10 첫 프레임)
    42.78s  user  발화 끝
    42.93s  agent 발화 시작: <ret> 에펠탑 근처에는 호텔 플라자 아테네, 샹그릴라 파리, 풀만 파리 에펠탑 호텔이 있습니다.
    43.73s  ⚡SPAN 주입 [d'=0.96s / d_lead=5.93s]: (tool result) Hotel Plaza Athénée ($$$$), Shangri-La Paris ($$$), Pull
    48.86s  agent 발화 끝
    49.08s  user  발화 시작: 풀만 파리 에펠탑 호텔 가격이 얼마예요?
    52.20s  <ret> 발화 (turn12 첫 프레임)
    52.28s  agent 발화 시작: <ret> 풀만 파리 에펠탑 호텔은… 일박에 이백오십달러입니다.
    52.31s  user  발화 끝
    54.20s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.84s]: (tool result) $250 per night
    54.36s  user  발화 시작: 네.
    54.90s  user  발화 끝
    56.12s  agent 발화 끝
    56.49s  user  발화 시작: …그 호텔에 객실이 있는지 확인해 줄 수 있어요?
    59.36s  <ret> 발화 (turn15 첫 프레임)
    59.75s  agent 발화 시작: <ret> 풀만 파리 에펠탑 호텔에 객실이 있습니다. 스탠다드룸이 가능합니다.
    59.77s  user  발화 끝
    60.80s  ⚡SPAN 주입 [d'=1.44s / d_lead=4.68s]: (tool result) Available. Standard room available.
    64.39s  user  발화 시작: 그럼 스탠다드룸으로 예약해 주세요.
    64.42s  agent 발화 끝
    67.14s  <ret> 발화 (turn17 첫 프레임)
    67.44s  user  발화 끝
    67.54s  agent 발화 시작: <ret> 풀만 파리 에펠탑 호텔 스탠다드룸 예약이 완료되었습니다. 확인 번호는 일 이 삼 사 오 육번입니다
    68.26s  ⚡SPAN 주입 [d'=1.12s / d_lead=7.60s]: (tool result) Reservation confirmed. Confirmation number: 123456
    75.14s  agent 발화 끝
    75.51s  user  발화 시작: 좋은데요.
    76.33s  user  발화 끝
    76.38s  agent 발화 시작: 여행 준비를 도와드릴 수 있어서 정말 기쁩니다.
    79.29s  agent 발화 끝
    79.31s  user  발화 시작: 파리 날씨는 어때요? 내일?
    81.03s  <ret> 발화 (turn21 첫 프레임)
    81.27s  agent 발화 시작: <ret> 내일 파리의 날씨는… 십팔도, 구름이 조금 낄 것으로 예상됩니다.
    81.48s  user  발화 끝
    83.03s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.53s]: (tool result) 18°C, partly cloudy
    85.80s  agent 발화 끝
    86.43s  user  발화 시작: 짐은 어떻게 해야 할까요? 호텔에 짐 보관 서비스가 있나요?
    90.59s  <ret> 발화 (turn23 첫 프레임)
    90.67s  agent 발화 시작: <ret> 풀만 파리 에펠탑 호텔에는 짐 보관 서비스가 있습니다.
    90.78s  user  발화 끝
    92.43s  ⚡SPAN 주입 [d'=1.84s / d_lead=3.61s]: (tool result) Yes, luggage storage is available.
    94.27s  agent 발화 끝
    95.38s  user  발화 시작: 알겠습니다. 그럼, 짐 보관도 가능하네요.
    98.62s  user  발화 끝
    98.72s  agent 발화 시작: 네, 짐 보관도 가능합니다. 편안한 여행 되세요.
   101.80s  user  발화 시작: 감사합니다.
   102.05s  agent 발화 끝
   102.81s  user  발화 끝
