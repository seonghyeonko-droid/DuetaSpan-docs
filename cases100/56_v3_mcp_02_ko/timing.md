# v3_mcp_02_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mcp_02",
#     "name": "태찬",
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
#       "date": "2026-06-20",
#       "category": "diet",
#       "text": "User is vegan."
#     },
#     {
#       "date": "2026-05-12",
#       "category": "allergy",
#       "text": "User is allergic to peanuts."
#     },
#     {
#       "date": "2026-04-18",
#       "category": "dish",
#       "text": "User's go-to comfort dish is grilled salmon."
#     },
#     {
#       "date": "2026-02-20",
#       "category": "partner",
#       "text": "User's partner is named Daniel."
#     },
#     {
#       "date": "2026-02-15",
#       "category": "airline",
#       "text": "User usually flies with Korean Air."
#     },
#     {
#       "date": "2026-01-13",
#       "category": "temp",
#       "text": "User keeps the home thermostat around 20°C."
#     },
#     {
#       "date": "2025-12-10",
#       "category": "music",
#       "text": "User likes listening to city pop."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-10",
#       "title": "Choosing a preschool",
#       "bullets": [
#         "wants one within walking distance",
#         "asked about hours and monthly fees"
#       ]
#     },
#     {
#       "date": "2026-04-13",
#       "title": "Planning a wedding",
#       "bullets": [
#         "guest list around 80 people",
#         "comparing two venues for next May"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 데이비드 브라운 씨에게 제 위치를 보내고 싶어요. | S2 음… | S3 … 혹시 거기는 주차하기 편해? | S4 고마워, 오레스. 덕분에 많이 편해졌어.

     0.00s  user  발화 시작: 데이비드 브라운 씨에게 제 위치를 보내고 싶어요.
     3.08s  <ret> 발화 (turn1 첫 프레임)
     3.23s  agent 발화 시작: <ret> 데이비드 브라운 씨에게 위치 정보 공유가 완료됐어요. 현재 위치는 위도 삼십오 점 일 칠, 경도 
     3.23s  user  발화 끝
     4.39s  ⚡SPAN 주입 [d'=1.30s / d_lead=8.39s]: (tool result) {"status": "success", "latitude": 35.1795, "longitude": 
     6.53s  user  발화 시작: 네.
     7.26s  user  발화 끝
    11.62s  agent 발화 끝
    11.73s  user  발화 시작: 아, 다행이다. 혹시 내일 모레 부산 날씨는 어때?
    13.45s  agent 발화 시작: 네.
    13.95s  agent 발화 끝
    14.80s  <ret> 발화 (turn5 첫 프레임)
    15.16s  agent 발화 시작: <ret> 내일 모레 부산 날씨는 부분적으로 흐리고, 최고 기온은 이십팔 점 오도, 습도는 육십오퍼센트, 풍
    15.38s  user  발화 끝
    16.05s  ⚡SPAN 주입 [d'=1.25s / d_lead=8.91s]: (tool result) {"city": "Busan", "date": "2026-07-12", "temperature": 2
    21.26s  user  발화 시작: 네네.
    22.08s  user  발화 끝
    24.07s  agent 발화 끝
    24.19s  user  발화 시작: 음…
    24.69s  user  발화 끝
    25.05s  agent 발화 시작: 부산 여행 준비 잘 하세요! 혹시 필요한 정보가 더 있으신가요?
    28.84s  user  발화 시작: 이번 주 토요일에 서울에서 친구랑 저녁 먹기로 했는데, 분위기 좋은 레스토랑 추천해 줄 수 있어?
    28.88s  agent 발화 끝
    35.25s  <ret> 발화 (turn10 첫 프레임)
    35.38s  agent 발화 시작: <ret> 서울 강남구에 있는 '라 벨르 누이트'라는 프랑스 레스토랑을 추천해 드려요. 분위기가 로맨틱하고 
    35.42s  user  발화 끝
    36.72s  ⚡SPAN 주입 [d'=1.47s / d_lead=8.71s]: (tool result) "서울 강남구에 위치한 '라 벨르 누이트'는 로맨틱한 분위기의 프랑스 레스토랑으로, 훌륭한 음식과 와
    43.40s  user  발화 시작: … 혹시 거기는 주차하기 편해?
    44.09s  agent 발화 끝
    45.19s  agent 발화 시작: 네, '라 벨르 누이트'는 발렛 파킹을 제공한다고 합니다. 가격대는 조금 비싼 편이에요.
    45.24s  user  발화 끝
    48.42s  user  발화 시작: 음.
    48.82s  user  발화 끝
    51.03s  agent 발화 끝
    51.22s  user  발화 시작: 아, 알았어. 그럼 혹시 내일 아침 여덟시에 택시를 예약해 줄 수 있을까?
    55.83s  <ret> 발화 (turn15 첫 프레임)
    56.40s  agent 발화 시작: <ret> 네, 내일 아침 여덟시에 택시 예약이 완료됐습니다. 확인번호는 티 엑스 일 이 삼 사 오 육입니다
    56.54s  user  발화 끝
    57.27s  ⚡SPAN 주입 [d'=1.43s / d_lead=6.76s]: (tool result) {"status": "success", "pickup time": "2026-07-11T08:00:0
    63.16s  agent 발화 끝
    63.28s  user  발화 시작: 고마워, 오레스. 덕분에 많이 편해졌어.
    66.33s  user  발화 끝
