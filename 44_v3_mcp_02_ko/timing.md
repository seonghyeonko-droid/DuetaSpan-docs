# v3_mcp_02_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mcp_02",
#     "name": "Ethan",
#     "location": {
#       "city": "Toronto",
#       "country": "Canada",
#       "timezone": "America/Toronto (EST, UTC-5)",
#       "currency": "CAD ($)"
#     },
#     "nationality": "Canadian",
#     "gender": "male",
#     "age_range": "early 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-28",
#       "category": "allergy",
#       "text": "User is allergic to penicillin."
#     },
#     {
#       "date": "2026-06-05",
#       "category": "pet",
#       "text": "User has a Siamese cat named Bella."
#     },
#     {
#       "date": "2026-05-04",
#       "category": "hobby",
#       "text": "User is into birdwatching."
#     },
#     {
#       "date": "2026-04-11",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-03-08",
#       "category": "trip",
#       "text": "User is planning a trip to Lisbon in May."
#     },
#     {
#       "date": "2026-01-11",
#       "category": "work",
#       "text": "User works as a graphic designer."
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
#       "date": "2026-01-22",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 날씨 업데이트 좀 봐줄래? weather.example.com | S2 어, 맞아. 저녁에 비 올까? | S3 고마워. 아, 그리고 내일 모레 서울에서 부산 가는 기차표 예 | S4 와, 빠르다.

     0.00s  user  발화 시작: 날씨 업데이트 좀 봐줄래? weather.example.com에서.
     3.17s  <ret> 발화 (turn1 첫 프레임)
     3.56s  agent 발화 시작: <ret> 알겠습니다. 지금 weather.example.com의 날씨는 섭씨 이십오도에 맑습니다.
     3.67s  ⚡SPAN 주입 [d'=0.50s / d_lead=0.71s]: (tool result) The weather at weather.example.com is currently 25 degre
     3.70s  user  발화 끝
     8.51s  agent 발화 끝
     9.85s  user  발화 시작: 음, 좋네.
    10.94s  agent 발화 시작: 오늘 저녁에는 비가 올 가능성이 있는지 확인해 볼까요?
    11.14s  user  발화 끝
    12.39s  user  발화 시작: 그렇죠.
    13.02s  user  발화 끝
    14.38s  user  발화 시작: 어, 맞아. 저녁에 비 올까?
    14.63s  agent 발화 끝
    16.32s  <ret> 발화 (turn6 첫 프레임)
    16.71s  agent 발화 시작: <ret> 저녁에는 비가 올 확률이 육십%입니다.
    16.92s  user  발화 끝
    17.36s  ⚡SPAN 주입 [d'=1.04s / d_lead=3.05s]: (tool result) The forecast for this evening at weather.example.com is 
    19.76s  agent 발화 끝
    20.21s  user  발화 시작: 그렇군요. 그럼, 내일 아침 일곱시에 알람 맞춰줄래?
    24.23s  <ret> 발화 (turn8 첫 프레임)
    24.38s  agent 발화 시작: <ret> 네, 알람을 맞춰 드리겠습니다.
    24.56s  user  발화 끝
    25.51s  ⚡SPAN 주입 [d'=1.28s / d_lead=2.26s]: (tool result) Alarm set for tomorrow at 7:00 AM.
    26.55s  agent 발화 시작: 내일 아침 일곱시에 알람이 설정되었습니다.
    26.63s  agent 발화 끝
    29.58s  user  발화 시작: 고마워. 아, 그리고 내일 모레 서울에서 부산 가는 기차표 예매해줘.
    29.79s  agent 발화 끝
    34.90s  user  발화 끝
    35.24s  agent 발화 시작: 서울에서 부산으로 가는 기차표 예매를 도와드리겠습니다. 날짜는 내일 모레가 맞으신가요?
    37.61s  user  발화 시작: 네.
    38.11s  user  발화 끝
    41.31s  agent 발화 끝
    41.66s  user  발화 시작: 맞아. 내일 모레. KTX로.
    44.84s  <ret> 발화 (turn14 첫 프레임)
    45.22s  user  발화 끝
    45.24s  agent 발화 시작: <ret> 내일 모레 서울에서 부산 가는 KTX 기차표가 열네시 삼십분에 십이A 좌석으로 오만 구천팔백원에 
    46.84s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.60s]: (tool result) KTX train from Seoul to Busan booked for the day after t
    52.25s  user  발화 시작: 와, 빠르다.
    52.84s  agent 발화 끝
    53.35s  user  발화 끝
    53.49s  agent 발화 시작: 혹시 다른 도움이 필요하신가요?
    55.47s  agent 발화 끝
    55.67s  user  발화 시작: 아니, 괜찮아. 다 됐어.
    57.73s  agent 발화 시작: 즐거운 하루 보내세요.
    57.88s  user  발화 끝
    59.39s  agent 발화 끝
