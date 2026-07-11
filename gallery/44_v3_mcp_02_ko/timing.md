# v3_mcp_02_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mcp_02",
#     "name": "은율",
#     "location": {
#       "city": "Seoul",
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
#       "date": "2026-06-10",
#       "category": "hobby",
#       "text": "User is into home fermentation."
#     },
#     {
#       "date": "2026-03-19",
#       "category": "home",
#       "text": "User's home address is 서울 강남구 역삼동 678-9."
#     },
#     {
#       "date": "2025-11-03",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-10-30",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Ethiopian."
#     },
#     {
#       "date": "2025-10-11",
#       "category": "pet",
#       "text": "User has a Corgi named Mochi."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-23",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2026-02-25",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 음… 마이애미 플로리다에 성인 한명, 최소 삼성급 호텔 좀 찾 | S2 음… 거긴 좀 작을 것 같아. 좀 더 넓은 곳으로 찾아봐 줄래 | S3 그중에서 바닷가 근처에 있는 곳이 있으면 좋겠어. | S4 고마워. 혹시 이번 주 토요일에 날씨는 어때?

     0.00s  user  발화 시작: 음… 마이애미 플로리다에 성인 한명, 최소 삼성급 호텔 좀 찾아줄 수 있어?
     0.00s  <ret> 발화 (turn1 첫 프레임)
     0.00s  <ret> 발화 (turn3 첫 프레임)
     0.06s  agent 발화 시작: <ret> 마이애미 플로리다에 성인 한명 기준, 최소 삼성급 호텔 백삼십이채가 있어요. 밤당 팔십구달러부터 
     0.06s  ⚡SPAN 주입 [d'=0.07s / d_lead=0.07s]: There are 132 houses available in Miami, Florida with a minimum of 3 s
     0.06s  user  발화 끝
     0.14s  user  발화 시작: 오, 생각보다 많네. 제일 저렴한 곳은 어디야?
     0.14s  agent 발화 끝
     0.16s  <ret> 발화 (turn9 첫 프레임)
     0.18s  agent 발화 시작: <ret> 가장 저렴한 곳은 "Bright and Cozy Studio"인데, 밤당 팔십구달러이고, 백이십삼
     0.18s  ⚡SPAN 주입 [d'=0.11s / d_lead=0.11s]: The cheapest house available is "Bright and Cozy Studio" priced at $89
     0.18s  user  발화 끝
     0.27s  <ret> 발화 (turn7 첫 프레임)
     0.29s  user  발화 시작: 진짜?
     0.29s  agent 발화 끝
     0.29s  agent 발화 시작: 그곳은 아늑하고 밝은 스튜디오 타입으로, 혼자 지내기에 충분할 거예요. 주변 관광지와의 거리도 가깝고요.
     0.29s  user  발화 끝
     0.36s  user  발화 시작: 음… 거긴 좀 작을 것 같아. 좀 더 넓은 곳으로 찾아봐 줄래?
     0.36s  agent 발화 끝
     0.39s  <ret> 발화 (turn13 첫 프레임)
     0.41s  <ret> 발화 (turn11 첫 프레임)
     0.43s  agent 발화 시작: <ret> 마이애미 플로리다에 침실이 두 개 이상인 곳은 사십오채가 있고, 밤당 이백달러에서 육백달러 사이입
     0.43s  ⚡SPAN 주입 [d'=0.07s / d_lead=0.07s]: There are 45 houses with at least two bedrooms available in Miami, Flo
     0.43s  user  발화 끝
     0.50s  user  발화 시작: 아, 좋네. 이백달러에서 삼백달러 사이로 좀 더 좁혀 줄 수 있어?
     0.50s  agent 발화 끝
     0.56s  agent 발화 시작: <ret> 침실이 두 개 이상이고 밤당 이백달러에서 삼백달러 사이인 곳은 십팔채가 있습니다.
     0.56s  ⚡SPAN 주입 [d'=0.06s / d_lead=0.06s]: There are 18 houses available in Miami, Florida with at least two bedr
     0.56s  user  발화 끝
     0.61s  user  발화 시작: 그중에서 바닷가 근처에 있는 곳이 있으면 좋겠어.
     0.61s  agent 발화 끝
     0.65s  agent 발화 시작: <ret> "Ocean View Apartment"는 사우스 비치에서 영 점 이마일 거리에 있고, 밤당 이백
     0.65s  ⚡SPAN 주입 [d'=0.10s / d_lead=0.10s]: "Ocean View Apartment" is located 0.2 miles from South Beach and is pr
     0.65s  user  발화 끝
     0.75s  user  발화 시작: 오, 그거 괜찮네. 예약 좀 해 줘.
     0.75s  agent 발화 끝
     0.79s  agent 발화 시작: <ret> "Ocean View Apartment" 예약이 완료되었습니다. 확인 번호는 칠 팔 구 이 삼 사
     0.79s  ⚡SPAN 주입 [d'=0.07s / d_lead=0.07s]: (tool result) Booking confirmed for "Ocean View Apartment", confirmati
     0.79s  user  발화 끝
     0.82s  <ret> 발화 (turn16 첫 프레임)
     0.86s  user  발화 시작: 응.
     0.86s  agent 발화 끝
     0.87s  user  발화 시작: 고마워. 혹시 이번 주 토요일에 날씨는 어때?
     0.87s  user  발화 끝
     0.90s  agent 발화 시작: <ret> 칠월 십일일 토요일 마이애미 플로리다의 날씨는 섭씨 삼십 점 오도, 습도 칠십팔퍼센트, 바람은 시
     0.90s  ⚡SPAN 주입 [d'=0.10s / d_lead=0.10s]: The weather in Miami, Florida on Saturday, July 11, 2026, will be 30.5
     0.90s  user  발화 끝
     1.00s  agent 발화 끝
