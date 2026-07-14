# v3_rag_28_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_28",
#     "name": "지민",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "50s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-13",
#       "category": "savings",
#       "text": "User is saving for an emergency fund of six months' expenses."
#     },
#     {
#       "date": "2026-04-03",
#       "category": "trip",
#       "text": "User is planning a trip to Norway in September."
#     },
#     {
#       "date": "2026-02-01",
#       "category": "medication",
#       "text": "User takes an inhaler for asthma."
#     },
#     {
#       "date": "2026-01-28",
#       "category": "dislike",
#       "text": "User can't stand olives."
#     },
#     {
#       "date": "2025-12-26",
#       "category": "car",
#       "text": "User drives a 2020 Kia Niro."
#     },
#     {
#       "date": "2025-12-07",
#       "category": "sibling",
#       "text": "User has a younger sibling named Marco."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-01",
#       "title": "Adopting a rescue dog",
#       "bullets": [
#         "looking at a 2-year-old Beagle mix",
#         "asked about crate training and vet costs"
#       ]
#     },
#     {
#       "date": "2026-04-24",
#       "title": "Building a PC",
#       "bullets": [
#         "budget around 2M won for gaming",
#         "torn between two GPUs"
#       ]
#     },
#     {
#       "date": "2026-03-28",
#       "title": "Booking a Japan trip",
#       "bullets": [
#         "5 nights in Kyoto and Osaka in October",
#         "wants a JR Pass and a ryokan for one night"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 오늘 날씨 어때? | S2 음… 뉴질랜드 국기에 별이 몇 개나 있어? | S3 네 개? 진짜? 뭔가 잘못된 것 같은데. | S4 아, 그렇구나. 그럼, 오늘 저녁에 맛있는 식당 좀 추천해 줘

     0.00s  user  발화 시작: 오늘 날씨 어때?
     1.27s  <ret> 발화 (turn1 첫 프레임)
     1.52s  agent 발화 시작: <ret> 부산 날씨는 현재 이십팔도이고, 습도는 육십오퍼센트, 바람은 시속 삼 점 이킬로미터입니다. [ha
     1.52s  user  발화 끝
     1.57s  ⚡SPAN 주입 [d'=0.30s / d_lead=8.10s]: (tool result) The weather in Busan is 28.0°C, humidity 65%, wind 3.2 k
     9.62s  user  발화 시작: 음… 뉴질랜드 국기에 별이 몇 개나 있어?
     9.62s  agent 발화 끝
    12.68s  <ret> 발화 (turn3 첫 프레임)
    12.98s  ⚡SPAN 주입 [d'=0.30s / d_lead=4.05s]: The flag of New Zealand features four stars representing the Southern 
    13.16s  agent 발화 시작: <ret> 뉴질랜드 국기에는 남십자성을 상징하는 별이 네 개 있습니다.
    13.16s  user  발화 끝
    17.21s  user  발화 시작: 어.
    17.21s  agent 발화 끝
    17.72s  user  발화 시작: 네 개? 진짜? 뭔가 잘못된 것 같은데.
    17.72s  user  발화 끝
    21.26s  agent 발화 시작: 네, 확실히 별은 네 개입니다. 혹시 다른 정보가 있으신가요?
    21.26s  user  발화 끝
    25.82s  user  발화 시작: 아, 그렇구나. 그럼, 오늘 저녁에 맛있는 식당 좀 추천해 줘.
    25.82s  agent 발화 끝
    30.88s  user  발화 끝
