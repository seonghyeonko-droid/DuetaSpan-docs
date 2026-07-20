# v3_mcp_01_cs — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mcp_01",
#     "name": "Taylor",
#     "location": {
#       "city": "New York",
#       "country": "United States",
#       "timezone": "America/New_York (EST, UTC-5)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "non-binary",
#     "age_range": "late 40s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-16",
#       "category": "coffee",
#       "text": "User's usual coffee order is an iced americano."
#     },
#     {
#       "date": "2026-05-01",
#       "category": "hobby",
#       "text": "User is into freediving."
#     },
#     {
#       "date": "2026-02-15",
#       "category": "gym",
#       "text": "User has a gym membership near the station."
#     },
#     {
#       "date": "2026-02-03",
#       "category": "employer",
#       "text": "User works at a public university."
#     },
#     {
#       "date": "2026-02-02",
#       "category": "learning",
#       "text": "User is taking pottery classes."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-11",
#       "title": "Booking a Japan trip",
#       "bullets": [
#         "5 nights in Kyoto and Osaka in October",
#         "wants a JR Pass and a ryokan for one night"
#       ]
#     },
#     {
#       "date": "2026-01-07",
#       "title": "Refinancing a mortgage",
#       "bullets": [
#         "current rate is 4.2 percent",
#         "wants to compare 15- vs 30-year terms"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 그 아이 피 주소 어디야? | S2 서울? 부산에서 엄청 멀겠네. | S3 다음 주에 서울 여행 갈 건데, 카페 좀 찾아봐야겠다. | S4 …근데 경복궁 근처에 카페 있어?

     0.00s  user  발화 시작: 그 아이 피 주소 어디야?
     1.78s  <ret> 발화 (turn1 첫 프레임)
     1.82s  agent 발화 시작: <ret> 음, 그 아이 피 주소는 대한민국 서울특별시로 확인됩니다. 구체적으로 위도는 삼십칠 점 오육육오,
     1.82s  user  발화 끝
     2.45s  ⚡SPAN 주입 [d'=0.67s / d_lead=9.92s]: (tool result) {"latitude": 37.5665, "longitude": 126.9780, "city": "Se
    11.52s  user  발화 시작: 서울? 부산에서 엄청 멀겠네.
    11.74s  agent 발화 끝
    14.05s  agent 발화 시작: 네, 꽤 거리가 멀죠! 부산은 동남쪽 해안에 있고, 서울은 북쪽에 있거든요.
    14.10s  user  발화 끝
    19.69s  agent 발화 끝
    19.98s  user  발화 시작: 다음 주에 서울 여행 갈 건데, 카페 좀 찾아봐야겠다.
    23.35s  user  발화 끝
    23.69s  agent 발화 시작: 정말 좋겠네요! 서울은 카페 문화가 아주 발달했어요. 혹시 어떤 분위기를 원하세요—조용히 공부할 수 있는 곳
    34.71s  <ret> 발화 (turn6 첫 프레임)
    35.07s  agent 발화 시작: <ret> 뭐, 새로운 곳에 가면 친구 사귀는 게 어려울 수도 있겠네요… 보통 제일 힘든 부분인데, 먼저 다
    35.14s  agent 발화 끝
    36.21s  ⚡SPAN 주입 [d'=1.50s / d_lead=6.63s]: Reaching out first is often the hardest part, but people generally app
    42.89s  user  발화 시작: 응.
    43.20s  user  발화 끝
    50.65s  user  발화 시작: …근데 경복궁 근처에 카페 있어?
    50.70s  agent 발화 끝
    52.12s  <ret> 발화 (turn9 첫 프레임)
    52.56s  agent 발화 시작: <ret> 몇 군데 있어요! 카페 어니언 각국은 별점 사 점 오이고 가격대는 보통이고요, 문버드 온리 테레즈
    52.77s  user  발화 끝
    53.10s  ⚡SPAN 주입 [d'=0.98s / d_lead=9.59s]: (tool result) {"results": [{"name": "Cafe Onion Anguk", "address": "84
    58.70s  user  발화 시작: 오.
    59.52s  user  발화 끝
    62.13s  agent 발화 시작: 정말 멋진 곳들이네요! [laugh] 커피를 마시면서 대화를 시작하는 건 사람들을 만나는 좋은 방법이에요. 
    62.15s  agent 발화 끝
    73.59s  agent 발화 끝
