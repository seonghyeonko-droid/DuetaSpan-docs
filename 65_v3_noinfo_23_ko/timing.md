# v3_noinfo_23_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_noinfo_23",
#     "name": "Noah",
#     "location": {
#       "city": "San Francisco",
#       "country": "United States",
#       "timezone": "America/Los_Angeles (PST, UTC-8)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "male",
#     "age_range": "40s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-07-23",
#       "category": "hobby",
#       "text": "User is into marathon training."
#     },
#     {
#       "date": "2026-02-21",
#       "category": "allergy",
#       "text": "User is allergic to cat dander."
#     },
#     {
#       "date": "2026-02-01",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2026-01-07",
#       "category": "diet",
#       "text": "User is vegetarian."
#     },
#     {
#       "date": "2026-01-04",
#       "category": "home",
#       "text": "User's home address is 521 Oak Avenue."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-03-15",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2026-01-25",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 작년 십이월 스물네 째 도쿄 날씨가 어땠어? | S2 아, 토요일에 비라니… 그럼 우산을 꼭 챙겨야겠다. | S3 음… 너무 비싸지 않고, 깨끗하고, 교통이 편한 곳이면 좋겠어 | S4 음… 그럼 케이오 플라자로 예약해 줘. 이번 주말 일박으로.

     0.00s  user  발화 시작: 작년 십이월 스물네 째 도쿄 날씨가 어땠어?
     2.68s  <ret> 발화 (turn1 첫 프레임)
     3.08s  agent 발화 시작: <ret> 작년 십이월 스물네 째 도쿄는 오도였고, 약간의 눈이 왔어요.
     3.23s  user  발화 끝
     4.68s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.86s]: (tool result) Temperature was 5 degrees Celsius, with light snow.
     6.28s  user  발화 시작: 진짜?
     6.92s  user  발화 끝
     7.93s  agent 발화 끝
     8.15s  user  발화 시작: 오, 추웠겠네. 그럼 지금 도쿄 날씨는 어때?
    11.81s  <ret> 발화 (turn4 첫 프레임)
    12.05s  agent 발화 시작: <ret> 지금은 조금 더 따뜻해요.
    12.09s  user  발화 끝
    12.70s  ⚡SPAN 주입 [d'=0.88s / d_lead=1.29s]: (tool result) Currently 12 degrees Celsius, cloudy.
    13.35s  agent 발화 끝
    13.46s  agent 발화 시작: 현재 도쿄는 십이도이고, 흐린 날씨예요.
    14.81s  user  발화 시작: 응.
    15.21s  user  발화 끝
    16.33s  agent 발화 끝
    16.55s  user  발화 시작: 음… 이번 주말에 도쿄 여행 가려고 하는데, 혹시 비 올 가능성이 있을까?
    21.63s  <ret> 발화 (turn8 첫 프레임)
    21.79s  agent 발화 시작: <ret> 이번 주말 도쿄 날씨를 알아볼게요.
    21.88s  user  발화 끝
    22.75s  ⚡SPAN 주입 [d'=1.12s / d_lead=2.25s]: (tool result) Saturday: 10 degrees, rain. Sunday: 8 degrees, cloudy.
    23.98s  agent 발화 시작: 토요일은 십도에 비가 오고, 일요일은 팔도에 흐릴 것으로 예상돼요.
    24.05s  agent 발화 끝
    28.14s  agent 발화 끝
    29.77s  user  발화 시작: 아, 토요일에 비라니… 그럼 우산을 꼭 챙겨야겠다.
    33.41s  agent 발화 시작: 네, 우산을 챙기시는 게 좋겠어요. 혹시 여행 준비에 도움이 될 만한 다른 정보가 필요하신가요?
    33.51s  user  발화 끝
    39.10s  agent 발화 끝
    39.31s  user  발화 시작: 음… 도쿄에서 괜찮은 호텔 좀 추천해 줄 수 있어?
    42.73s  agent 발화 시작: 물론이죠. 어떤 스타일의 호텔을 선호하시나요?
    42.78s  user  발화 끝
    45.45s  user  발화 시작: 음… 너무 비싸지 않고, 깨끗하고, 교통이 편한 곳이면 좋겠어.
    45.50s  agent 발화 끝
    50.43s  <ret> 발화 (turn15 첫 프레임)
    50.59s  agent 발화 시작: <ret> 알겠습니다. 그런 호텔을 찾아볼게요.
    50.78s  user  발화 끝
    51.39s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.12s]: (tool result) Park Hyatt Tokyo, Keio Plaza Hotel Tokyo available.
    52.72s  agent 발화 끝
    52.75s  agent 발화 시작: 파크 하얏트 도쿄, 그리고 케이오 플라자 호텔 도쿄가 있어요.
    56.45s  agent 발화 끝
    56.90s  user  발화 시작: 파크 하얏트… 영화에서 본 것 같아. 가격은 어느 정도 해?
    60.69s  <ret> 발화 (turn18 첫 프레임)
    61.09s  agent 발화 시작: <ret> 파크 하얏트 도쿄의 가격을 확인해 볼게요.
    61.14s  user  발화 끝
    61.65s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.36s]: (tool result) 300,000 yen per night.
    63.44s  agent 발화 끝
    63.52s  agent 발화 시작: 이번 주말 일박에 삼십만 엔이에요.
    65.77s  agent 발화 끝
    66.22s  user  발화 시작: 헐… 너무 비싸다. 다른 호텔은 어때?
    69.63s  <ret> 발화 (turn21 첫 프레임)
    69.69s  user  발화 끝
    69.86s  agent 발화 시작: <ret> 케이오 플라자 호텔 도쿄는 일박에 이십만 엔이에요.
    70.13s  ⚡SPAN 주입 [d'=0.50s / d_lead=2.95s]: (tool result) 200,000 yen per night.
    72.81s  agent 발화 끝
    72.97s  agent 발화 시작: 케이오 플라자 호텔 도쿄는 일박에 이십만 엔입니다.
    76.21s  agent 발화 끝
    77.15s  user  발화 시작: 음… 그럼 케이오 플라자로 예약해 줘. 이번 주말 일박으로.
    81.20s  <ret> 발화 (turn24 첫 프레임)
    81.60s  agent 발화 시작: <ret> 케이오 플라자 호텔 도쿄를 이번 주말 일박으로 예약해 드릴게요.
    81.64s  user  발화 끝
    83.04s  ⚡SPAN 주입 [d'=1.84s / d_lead=3.70s]: (tool result) Booking confirmed. Confirmation number is ABC123XYZ.
    85.30s  agent 발화 끝
    85.41s  agent 발화 시작: 예약이 완료됐습니다. 확인 번호는 ABC123XYZ예요.
    89.69s  user  발화 시작: 와, 고마워! 덕분에 여행 준비 잘 할 수 있겠어.
    89.75s  agent 발화 끝
    92.81s  agent 발화 시작: 천만에요. 즐거운 여행 되세요!
    93.06s  user  발화 끝
    95.31s  agent 발화 끝
