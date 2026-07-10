# v3_mcp_02_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mcp_02",
#     "name": "유람",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "40s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-10",
#       "category": "allergy",
#       "text": "User is allergic to penicillin."
#     },
#     {
#       "date": "2026-02-24",
#       "category": "pet",
#       "text": "User has a Siamese cat named Bella."
#     },
#     {
#       "date": "2025-12-24",
#       "category": "hobby",
#       "text": "User is into birdwatching."
#     },
#     {
#       "date": "2025-11-11",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2025-09-15",
#       "category": "trip",
#       "text": "User is planning a trip to Lisbon in May."
#     },
#     {
#       "date": "2025-07-31",
#       "category": "work",
#       "text": "User works as a graphic designer."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-19",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2026-05-11",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 오늘 서울 날씨 어때요? | S2 부산은 서울보다 조금 더 덥겠네요. | S3 와, 정말 고마워요. | S4 메가박스 해운대까지 가는 길 좀 알려줘.

     0.00s  user  발화 시작: 오늘 서울 날씨 어때요?
     1.24s  <ret> 발화 (turn1 첫 프레임)
     1.64s  agent 발화 시작: <ret> 서울은 현재 기온이 이십삼 점 영도이고, 습도는 칠십사%, 바람은 시속 오 점 오킬로미터입니다.
     1.79s  user  발화 끝
     3.24s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.95s]: (tool result) 23.0°C, humidity 74%, wind 5.5 km/h
     8.46s  user  발화 시작: 아, 네.
     8.58s  agent 발화 끝
     9.09s  user  발화 끝
     9.28s  agent 발화 시작: 날씨가 꽤 쾌적하네요. 혹시 다른 지역 날씨도 알아봐 드릴까요?
    11.02s  user  발화 시작: 네네.
    11.66s  user  발화 끝
    13.49s  agent 발화 끝
    13.70s  user  발화 시작: 그럼, 내일 부산 날씨도 알려주세요.
    15.62s  <ret> 발화 (turn6 첫 프레임)
    16.02s  agent 발화 시작: <ret> 내일 부산은 기온이 이십오 점 영도이고 습도는 육십팔%, 바람은 시속 칠 점 영킬로미터로 예상됩니
    16.12s  user  발화 끝
    16.98s  ⚡SPAN 주입 [d'=1.36s / d_lead=6.86s]: (tool result) 25.0°C, humidity 68%, wind 7.0 km/h
    22.88s  agent 발화 끝
    24.08s  user  발화 시작: 부산은 서울보다 조금 더 덥겠네요.
    26.52s  agent 발화 시작: 네, 그렇습니다. 부산은 서울보다 조금 더 따뜻할 것으로 보입니다. 혹시 여행 계획이 있으신가요?
    26.66s  user  발화 끝
    28.96s  user  발화 시작: 네.
    29.36s  user  발화 끝
    32.63s  agent 발화 끝
    33.19s  user  발화 시작: 다음 주 금요일에 부산 가는 기차표 예매해 줄 수 있어요?
    36.11s  <ret> 발화 (turn11 첫 프레임)
    36.35s  agent 발화 시작: <ret> 다음 주 금요일 서울에서 부산 가는 기차표를 예매했습니다. 오후 두시 삼십분 KTX, 좌석은 십오
    36.41s  user  발화 끝
    37.47s  ⚡SPAN 주입 [d'=1.36s / d_lead=11.73s]: (tool result) Seoul to Busan, next Friday, 14:30, KTX, ₩59800, seat 15
    48.08s  agent 발화 끝
    48.67s  user  발화 시작: 와, 정말 고마워요.
    50.25s  agent 발화 시작: 천만에요. 도움이 되어 기쁩니다. 혹시 부산에서 할 만한 일도 찾아볼까요?
    50.28s  user  발화 끝
    52.59s  user  발화 시작: 네.
    53.08s  user  발화 끝
    56.27s  agent 발화 끝
    57.28s  user  발화 시작: 음… 부산에 볼만한 영화관 좀 찾아줘.
    59.82s  <ret> 발화 (turn16 첫 프레임)
    60.13s  user  발화 끝
    60.22s  agent 발화 시작: <ret> 부산에서 영화관은 해운대 메가박스가 일 점 이킬로미터, 롯데시네마 부산이 이 점 오킬로미터, CG
    61.82s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.39s]: (tool result) Busan, Haeundae, Megabox Haeundae (1.2km), Lotte Cinema 
    65.91s  user  발화 시작: 네.
    66.17s  user  발화 끝
    68.61s  agent 발화 끝
    69.52s  user  발화 시작: 메가박스 해운대까지 가는 길 좀 알려줘.
    71.80s  <ret> 발화 (turn19 첫 프레임)
    72.20s  agent 발화 시작: <ret> 부산에서 메가박스 해운대까지 자동차로 이십분, 십이 점 오킬로미터입니다.
    72.43s  user  발화 끝
    73.08s  ⚡SPAN 주입 [d'=1.28s / d_lead=5.92s]: (tool result) Busan to Megabox Haeundae, driving, 20 minutes, 12.5 km
    78.13s  agent 발화 끝
    78.58s  user  발화 시작: 알겠어요. 감사합니다.
    79.97s  agent 발화 시작: 네, 천만에요. 즐거운 여행 되세요.
    80.05s  user  발화 끝
    82.88s  agent 발화 끝
