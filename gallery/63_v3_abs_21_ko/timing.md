# v3_abs_21_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_abs_21",
#     "name": "하재",
#     "location": {
#       "city": "Seoul",
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
#       "date": "2026-03-16",
#       "category": "home",
#       "text": "User's home address is 389 Maple Drive."
#     },
#     {
#       "date": "2026-02-21",
#       "category": "trip",
#       "text": "User is planning a trip to Vietnam in August."
#     },
#     {
#       "date": "2026-02-20",
#       "category": "pet",
#       "text": "User has a Poodle named Coco."
#     },
#     {
#       "date": "2025-09-21",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-03-12",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2025-08-16",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 프랑스 상원 의원 수는 몇 명이에요? | S2 오, 그렇군요. 그럼 지금 프랑스 시간은 몇 시예요? | S3 삼월 십오일이요? 음… 그럼 그날씨는 어때요? | S4 루브르 박물관도 좋죠. 혹시 지금 예약할 수 있어요?

     0.00s  user  발화 시작: 프랑스 상원 의원 수는 몇 명이에요?
     1.85s  <ret> 발화 (turn1 첫 프레임)
     2.08s  agent 발화 시작: <ret> 프랑스 상원 의원 수에 대한 정보는 지금 바로 찾을 수 없네요. 죄송합니다.
     2.17s  user  발화 끝
     2.35s  ⚡SPAN 주입 [d'=0.50s / d_lead=3.70s]: (no information found)
     3.78s  user  발화 시작: 맞아요.
     4.41s  user  발화 끝
     5.78s  agent 발화 끝
     7.07s  user  발화 시작: 아, 괜찮아요. 그럼 프랑스 대통령은 누구예요?
     9.22s  <ret> 발화 (turn4 첫 프레임)
     9.45s  agent 발화 시작: <ret> 프랑스 대통령은… 에마뉘엘 마크롱 대통령입니다.
     9.66s  user  발화 끝
    10.58s  ⚡SPAN 주입 [d'=1.36s / d_lead=2.86s]: [source: Britannica] The president of France is Emmanuel Macron.
    11.16s  user  발화 시작: 맞아요.
    11.79s  user  발화 끝
    12.24s  user  발화 시작: 에마뉘엘 마크롱 대통령은 언제 대통령이 됐죠?
    12.31s  agent 발화 끝
    15.20s  <ret> 발화 (turn7 첫 프레임)
    15.43s  agent 발화 시작: <ret> 에마뉘엘 마크롱 대통령이 처음 대통령으로 선출된 건… 이천십칠년 오월 열사일입니다.
    15.47s  user  발화 끝
    17.20s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.60s]: [source: Wikipedia] Emmanuel Macron was first elected president on May
    21.03s  agent 발화 끝
    21.13s  user  발화 시작: 오, 그렇군요. 그럼 지금 프랑스 시간은 몇 시예요?
    23.84s  <ret> 발화 (turn9 첫 프레임)
    24.00s  agent 발화 시작: <ret> 지금 파리 시간은… 이천사년 이월 이십구일 오후 네 시 삼십이분입니다.
    24.13s  user  발화 끝
    25.48s  user  발화 시작: 예.
    25.84s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.63s]: (tool result) 2024-02-29 16:32
    25.97s  user  발화 끝
    28.63s  agent 발화 끝
    28.76s  user  발화 시작: 흐으으음… 프랑스에 가고 싶은데, 지금 비행기표가 얼마나 해요?
    32.38s  <ret> 발화 (turn12 첫 프레임)
    32.60s  user  발화 끝
    32.77s  agent 발화 시작: <ret> 서울에서 파리로 가는 비행기표 가격은… 백오십만 원입니다.
    33.82s  ⚡SPAN 주입 [d'=1.44s / d_lead=3.14s]: (tool result) 1,500,000 KRW
    35.91s  agent 발화 끝
    37.91s  user  발화 시작: 와, 비싸네요. 그럼 가장 저렴한 비행기표는 언제 떠나야 할까요?
    41.60s  <ret> 발화 (turn14 첫 프레임)
    41.76s  agent 발화 시작: <ret> 가장 저렴한 비행기표는… 이천사년 삼월 십오일에 출발하는 것이네요.
    41.93s  user  발화 끝
    43.36s  ⚡SPAN 주입 [d'=1.76s / d_lead=4.17s]: (tool result) 2024-03-15
    45.87s  user  발화 시작: 삼월 십오일이요? 음… 그럼 그날씨는 어때요?
    45.92s  agent 발화 끝
    48.31s  <ret> 발화 (turn16 첫 프레임)
    48.62s  agent 발화 시작: <ret> 그날 파리의 날씨는… 섭씨 십이도, 흐린 날씨로 예상됩니다.
    48.64s  user  발화 끝
    50.07s  ⚡SPAN 주입 [d'=1.76s / d_lead=3.74s]: (tool result) 12°C, Cloudy
    51.16s  user  발화 시작: 그렇죠.
    51.80s  user  발화 끝
    52.36s  agent 발화 끝
    52.60s  user  발화 시작: 흐리다고요? 아쉽네요. 그럼 파리에서 꼭 가봐야 할 곳은 어디예요?
    56.91s  agent 발화 시작: 파리에서 꼭 가봐야 할 곳은 에펠탑이 아닐까요? 정말 아름다운 곳이에요.
    56.96s  user  발화 끝
    59.58s  user  발화 시작: 그렇죠.
    60.08s  user  발화 끝
    61.04s  agent 발화 끝
    61.23s  user  발화 시작: 에펠탑은 가봤어요. 다른 곳은 없을까요?
    64.09s  user  발화 끝
    64.26s  agent 발화 시작: 음… 루브르 박물관도 추천해 드리고 싶어요. 예술 작품들을 감상하기에 정말 좋은 곳입니다.
    69.73s  agent 발화 끝
    69.91s  user  발화 시작: 루브르 박물관도 좋죠. 혹시 지금 예약할 수 있어요?
    73.44s  <ret> 발화 (turn24 첫 프레임)
    73.52s  agent 발화 시작: <ret> 루브르 박물관은… 이천사년 삼월 십오일에 예약 가능합니다.
    73.74s  user  발화 끝
    75.04s  ⚡SPAN 주입 [d'=1.60s / d_lead=3.70s]: (tool result) Available
    77.21s  user  발화 시작: 다행이다. 그럼 바로 예약해 주세요.
    77.22s  agent 발화 끝
    79.04s  <ret> 발화 (turn26 첫 프레임)
    79.20s  agent 발화 시작: <ret> 루브르 박물관 예약이 완료되었습니다. 주문 번호는 칠팔구사오륙입니다. 즐거운 여행 되세요.
    79.29s  user  발화 끝
    80.08s  ⚡SPAN 주입 [d'=1.04s / d_lead=5.23s]: (tool result) Booking confirmed. Order number: 789456
    84.43s  agent 발화 끝
