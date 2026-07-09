# v3_selfc_08_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_selfc_08",
#     "name": "Julia",
#     "location": {
#       "city": "Berlin",
#       "country": "Germany",
#       "timezone": "Europe/Berlin (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "German",
#     "gender": "female",
#     "age_range": "40s",
#     "language": "German"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-07-26",
#       "category": "home",
#       "text": "User's home address is 528 Birch Road."
#     },
#     {
#       "date": "2026-05-06",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     },
#     {
#       "date": "2026-04-21",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-03-15",
#       "category": "trip",
#       "text": "User is planning a trip to Iceland in May."
#     },
#     {
#       "date": "2026-02-01",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Mexican."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-01-13",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 시카고에서 덴버까지 세 명, 오월 십일에 가는 버스 좀 보여줘 | S2 아홉 시 버스는 얼마야? | S3 혹시 환불 규정도 알 수 있을까? | S4 혹시 덴버 날씨는 어때?

     0.00s  user  발화 시작: 시카고에서 덴버까지 세 명, 오월 십일에 가는 버스 좀 보여줘.
     3.84s  <ret> 발화 (turn1 첫 프레임)
     4.15s  agent 발화 시작: <ret> 시카고에서 덴버까지 오월 십일에 가는 버스는 한 대 있어요. 여덟시에 출발해서 여섯시에 도착하고,
     4.21s  user  발화 끝
     4.56s  ⚡SPAN 주입 [d'=0.72s / d_lead=1.81s]: (tool result) 1 bus found, Departure: 8:00 AM, Arrival: 6:00 PM, Price
    13.19s  agent 발화 끝
    13.54s  user  발화 시작: 백오십달러는 좀 비싸네… 다른 날짜는 어때?
    16.66s  <ret> 발화 (turn3 첫 프레임)
    17.06s  agent 발화 시작: <ret> 오월 십일일에는 두 대, 십이일에는 한 대, 십삼일에는 세 대가 있어요. 가격은 날마다 달라요.
    17.09s  user  발화 끝
    17.78s  ⚡SPAN 주입 [d'=1.12s / d_lead=1.39s]: (tool result) May 11: 2 buses, May 12: 1 bus, May 13: 3 buses, Prices 
    23.55s  agent 발화 끝
    23.89s  user  발화 시작: 오월 십일일 버스 시간 좀 알려줘.
    25.55s  <ret> 발화 (turn5 첫 프레임)
    25.86s  agent 발화 시작: <ret> 오월 십일일에는 아홉 시, 두 시, 저녁 일곱 시에 버스가 있어요.
    25.88s  user  발화 끝
    26.91s  ⚡SPAN 주입 [d'=1.36s / d_lead=2.50s]: (tool result) 9:00 AM, 2:00 PM, 7:00 PM
    28.61s  user  발화 시작: 대박.
    29.09s  user  발화 끝
    30.19s  user  발화 시작: 아홉 시 버스는 얼마야?
    30.44s  agent 발화 끝
    31.69s  <ret> 발화 (turn8 첫 프레임)
    31.79s  user  발화 끝
    31.92s  agent 발화 시작: <ret> 아홉 시 버스는 일인당 백이십달러입니다.
    33.53s  ⚡SPAN 주입 [d'=1.84s / d_lead=3.24s]: (tool result) $120 per person
    35.03s  user  발화 시작: 좋아, 그럼 아홉 시 버스로 세 명 예약해 줘.
    35.16s  agent 발화 끝
    37.83s  <ret> 발화 (turn10 첫 프레임)
    37.99s  user  발화 끝
    38.06s  agent 발화 시작: <ret> 예약을 진행하겠습니다. 예약이 완료됐습니다. 확인 번호는 칠 팔 구 사 오 육이고, 총 비용은 삼
    38.33s  ⚡SPAN 주입 [d'=0.50s / d_lead=1.15s]: (tool result) Booking confirmed, Confirmation number: 789456, Total co
    46.68s  agent 발화 끝
    47.18s  user  발화 시작: 삼백육십달러 맞나?— 아, 삼백오십달러였나?
    50.04s  <ret> 발화 (turn12 첫 프레임)
    50.19s  agent 발화 시작: <ret> 일인당 백이십달러이므로, 세 명이면 총 삼백육십달러가 맞습니다.
    50.42s  user  발화 끝
    51.00s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.06s]: (tool result) $120 per person
    53.64s  user  발화 시작: 그치.
    54.17s  user  발화 끝
    55.01s  agent 발화 끝
    55.97s  user  발화 시작: 혹시 환불 규정도 알 수 있을까?
    58.04s  user  발화 끝
    58.15s  <ret> 발화 (turn15 첫 프레임)
    58.21s  agent 발화 시작: <ret> 환불 규정을 알려드릴게요.
    59.11s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.07s]: (tool result) Full refund if canceled 24 hours before departure; 20% f
    60.21s  agent 발화 시작: 출발 스물네시간 전까지 취소하면 전액 환불되고, 스물네시간 이내 취소하면 이십% 수수료가 부과됩니다.
    60.28s  agent 발화 끝
    63.48s  user  발화 시작: 와.
    64.12s  user  발화 끝
    68.19s  agent 발화 끝
    68.23s  agent 발화 시작: 혹시 다른 도움이 필요하신가요?
    70.11s  user  발화 시작: 아니, 괜찮아.
    70.31s  agent 발화 끝
    71.48s  <ret> 발화 (turn20 첫 프레임)
    71.64s  agent 발화 시작: <ret> 예약 정보는 이메일로도 보내드릴게요.
    71.77s  user  발화 끝
    72.53s  ⚡SPAN 주입 [d'=1.04s / d_lead=2.58s]: (tool result) Confirmation email sent to user@example.com
    74.16s  agent 발화 시작: 예약 정보를 이메일로 보내드렸습니다.
    74.22s  agent 발화 끝
    76.75s  agent 발화 끝
    76.90s  user  발화 시작: 고마워.
    77.54s  user  발화 끝
    77.67s  agent 발화 시작: 즐거운 여행 되세요.
    79.14s  agent 발화 끝
    79.25s  user  발화 시작: 혹시 덴버 날씨는 어때?
    80.98s  <ret> 발화 (turn25 첫 프레임)
    81.13s  agent 발화 시작: <ret> 현재 덴버는 섭씨 십팔도이고, 화창하며, 바람은 시속 십육킬로미터입니다.
    81.32s  user  발화 끝
    82.10s  ⚡SPAN 주입 [d'=1.12s / d_lead=2.21s]: (tool result) Currently 65°F, Sunny, Wind: 10 mph
    83.90s  user  발화 시작: 그래.
    84.39s  user  발화 끝
    86.80s  user  발화 시작: 꽤 좋네.
    87.02s  agent 발화 끝
    87.53s  user  발화 끝
    87.62s  agent 발화 시작: 덴버 여행 준비 잘 하세요.
    89.93s  agent 발화 끝
    90.03s  user  발화 시작: 그래야지.
    90.84s  user  발화 끝
