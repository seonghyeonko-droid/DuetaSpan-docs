# v3_mcp_01_cs — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mcp_01",
#     "name": "Paul",
#     "location": {
#       "city": "Paris",
#       "country": "France",
#       "timezone": "Europe/Paris (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "French",
#     "gender": "male",
#     "age_range": "late 30s",
#     "language": "French"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-13",
#       "category": "gym",
#       "text": "User has a gym membership near the office."
#     },
#     {
#       "date": "2026-05-07",
#       "category": "work",
#       "text": "User works as a data analyst."
#     },
#     {
#       "date": "2026-04-17",
#       "category": "medication",
#       "text": "User takes antihistamines in spring."
#     },
#     {
#       "date": "2026-03-20",
#       "category": "employer",
#       "text": "User works at a game studio."
#     },
#     {
#       "date": "2026-03-08",
#       "category": "phone",
#       "text": "User uses an iPhone SE."
#     },
#     {
#       "date": "2025-12-26",
#       "category": "trip",
#       "text": "User is planning a trip to Hokkaido in April."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-03-18",
#       "title": "Planning a wedding",
#       "bullets": [
#         "guest list around 80 people",
#         "comparing two venues for next May"
#       ]
#     },
#     {
#       "date": "2026-01-04",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six on the 14th",
#         "looking for outdoor seating with a vegetarian option"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 부산에서 호텔 좀 잡아 줘. 다음 주말에. 저렴한 곳으로 부탁 | S2 음, 해운대 해변 근처면 좋겠어. 그리고 가능하면 밤에 십오만 | S3 그거 괜찮네. 그걸로 예약해 줘, 이틀, 칠월 십이일이랑 십삼 | S4 좋아! 그럼, 다음 주말 날씨는 어때?

     0.00s  user  발화 시작: 부산에서 호텔 좀 잡아 줘. 다음 주말에. 저렴한 곳으로 부탁해.
     4.46s  agent 발화 시작: 네, 부산은 정말 아름다운 곳이에요! 다음 주말에 호텔을 찾아 드릴게요. 혹시 특별히 원하시는 지역이나 호텔
     4.46s  user  발화 끝
    12.05s  user  발화 시작: 음, 해운대 해변 근처면 좋겠어. 그리고 가능하면 밤에 십오만 원 이하로.
    12.05s  agent 발화 끝
    16.96s  agent 발화 시작: 네.
    16.96s  user  발화 끝
    17.13s  <ret> 발화 (turn4 첫 프레임)
    17.41s  agent 발화 시작: <ret> 해운대 뷰 호텔을 찾았는데, 해운대 해변 근처에 있는 삼성급 호텔이고, 일박에 십이만 원이고, 방
    17.41s  agent 발화 끝
    18.21s  ⚡SPAN 주입 [d'=1.07s / d_lead=7.14s]: (tool result) {"hotel name": "Hotel Haeundae View", "address": "268, H
    24.55s  user  발화 시작: 어.
    24.55s  agent 발화 끝
    25.00s  user  발화 시작: 그거 괜찮네. 그걸로 예약해 줘, 이틀, 칠월 십이일이랑 십삼일로.
    25.00s  user  발화 끝
    28.47s  <ret> 발화 (turn7 첫 프레임)
    28.98s  ⚡SPAN 주입 [d'=0.51s / d_lead=10.71s]: (tool result) {"confirmation id": "HV260712", "hotel name": "Hotel Hae
    29.02s  agent 발화 시작: <ret> 해운대 뷰 호텔 예약이 칠월 십이일과 십삼일 이틀간 확정됐습니다. 예약 확인 번호는 에이치 브이 
    29.02s  user  발화 끝
    39.73s  user  발화 시작: 좋아! 그럼, 다음 주말 날씨는 어때?
    39.73s  agent 발화 끝
    42.36s  <ret> 발화 (turn9 첫 프레임)
    42.41s  agent 발화 시작: <ret> 다음 주말, 칠월 십이일 부산 날씨는 부분적으로 흐리고 기온은 섭씨 이십팔 점 오도, 습도는 육십
    42.41s  user  발화 끝
    43.28s  ⚡SPAN 주입 [d'=0.92s / d_lead=11.61s]: (tool result) {"temperature": "28.5°C", "humidity": "65%", "wind speed
    54.01s  agent 발화 끝
