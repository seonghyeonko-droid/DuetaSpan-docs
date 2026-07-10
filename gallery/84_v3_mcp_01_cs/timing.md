# v3_mcp_01_cs — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mcp_01",
#     "name": "Freya",
#     "location": {
#       "city": "San Francisco",
#       "country": "United States",
#       "timezone": "America/Los_Angeles (PST, UTC-8)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "female",
#     "age_range": "40s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-11",
#       "category": "work",
#       "text": "User works as a marketing manager."
#     },
#     {
#       "date": "2026-05-07",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2026-03-27",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Korean BBQ."
#     },
#     {
#       "date": "2026-01-26",
#       "category": "allergy",
#       "text": "User is allergic to peanuts."
#     },
#     {
#       "date": "2025-10-16",
#       "category": "pet",
#       "text": "User has a Golden Retriever named Max."
#     },
#     {
#       "date": "2025-10-12",
#       "category": "trip",
#       "text": "User is planning a trip to Switzerland in March."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-03",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 안녕하세요. 런던에 괜찮은 박물관 좀 찾아 주실 수 있을까요? | S2 아, 그렇군요. 그런데 지금 런던 날씨는 어떤가요? | S3 189파운드는 괜찮은 것 같아요. 그걸로 예약해 주시겠어요? | S4 보카 디 루포가 괜찮은 것 같네요. 조금 비싸지만 괜찮아요. 

     0.00s  user  발화 시작: 안녕하세요. 런던에 괜찮은 박물관 좀 찾아 주실 수 있을까요?
     3.60s  <ret> 발화 (turn1 첫 프레임)
     3.76s  agent 발화 시작: <ret> 음, 런던에는 좋은 박물관이 엄청 많아. 브리티시 뮤지엄은 리뷰가 470만 개고, 내셔널 갤러리는
     3.76s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.71s]: (tool result) The British Museum — 4.5 stars, 4.7m reviews; National G
     3.98s  user  발화 끝
    12.47s  agent 발화 끝
    12.48s  user  발화 시작: 흠, 내셔널 갤러리가 흥미로운 것 같은데, 입장료는 무료인가요?
    16.33s  <ret> 발화 (turn3 첫 프레임)
    16.64s  agent 발화 시작: <ret> 좋은 선택이야! 내셔널 갤러리 입장료는 무료인데, 특별 전시 같은 건 따로 돈을 받을 수도 있어.
    16.65s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.44s]: Admission to the National Gallery is free, except for special exhibiti
    16.83s  user  발화 끝
    21.43s  user  발화 시작: 네네.
    21.92s  user  발화 끝
    22.94s  user  발화 시작: 아, 그렇군요. 그런데 지금 런던 날씨는 어떤가요?
    23.08s  agent 발화 끝
    26.01s  <ret> 발화 (turn6 첫 프레임)
    26.07s  agent 발화 시작: <ret> 지금 런던은 18도이고, 습도는 65%, 바람은 시속 11.2킬로미터야.
    26.09s  ⚡SPAN 주입 [d'=1.60s / d_lead=5.89s]: (tool result) 18.0°C, humidity 65%, wind 11.2 km/h
    26.18s  user  발화 끝
    29.09s  user  발화 시작: 정말요?
    29.91s  user  발화 끝
    31.95s  agent 발화 끝
    32.03s  user  발화 시작: 기분이 좋네요! 사실 오늘 밤에 그 근처에 호텔을 예약해야 해요.
    35.99s  <ret> 발화 (turn9 첫 프레임)
    36.31s  agent 발화 시작: <ret> 몇 군데 찾아봤어! 레지던트 코벤트 가든은 1박에 189파운드이고, 평점은 4.7이야.
    36.31s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.63s]: (tool result) The Resident Covent Garden — £189/night, 4.7 stars; The 
    36.52s  user  발화 끝
    42.94s  agent 발화 끝
    43.95s  user  발화 시작: 189파운드는 괜찮은 것 같아요. 그걸로 예약해 주시겠어요?
    47.88s  <ret> 발화 (turn11 첫 프레임)
    48.03s  agent 발화 시작: <ret> 레지던트 코벤트 가든 예약 완료됐어, 확인 코드는 GH729KL이야.
    48.04s  ⚡SPAN 주입 [d'=1.84s / d_lead=5.46s]: (tool result) Booking confirmed for The Resident Covent Garden, check-
    48.11s  user  발화 끝
    51.79s  user  발화 시작: 정말요?
    52.52s  user  발화 끝
    53.35s  user  발화 시작: 정말 훌륭하네요! 그럼 근처에 괜찮은 이탈리아 식당 좀 찾아 주시겠어요?
    53.49s  agent 발화 끝
    58.42s  <ret> 발화 (turn14 첫 프레임)
    58.53s  user  발화 끝
    58.65s  agent 발화 시작: <ret> 근처에 좋은 이탈리아 식당이 꽤 있어! 리나 스토어 소호는 평점이 4.6이고, 가격은 20파운드에
    58.66s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.21s]: (tool result) Lina Stores Soho — 4.6 stars, £20-£30; Padella — 4.5 sta
    64.06s  user  발화 시작: 와.
    64.70s  user  발화 끝
    66.82s  user  발화 시작: 보카 디 루포가 괜찮은 것 같네요. 조금 비싸지만 괜찮아요. 정말 도와주셔서 감사합니다!
    66.86s  agent 발화 끝
    72.28s  user  발화 끝
    72.31s  agent 발화 시작: 천만에! 보카 디 루포도 좋은 선택이야. 런던 여행과 저녁 시간 즐겁게 보내고, 여행하면서 자기 자신에게도 
    80.80s  agent 발화 끝
