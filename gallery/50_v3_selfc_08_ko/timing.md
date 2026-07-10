# v3_selfc_08_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_selfc_08",
#     "name": "연영",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "early 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-05",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     },
#     {
#       "date": "2026-02-10",
#       "category": "work",
#       "text": "User works as a accountant."
#     },
#     {
#       "date": "2025-11-07",
#       "category": "home",
#       "text": "User's home address is 368 Pine Court."
#     },
#     {
#       "date": "2025-06-09",
#       "category": "trip",
#       "text": "User is planning a trip to New Zealand in May."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-07",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2025-09-01",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2025-06-25",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 시카고에서 덴버까지 세 명, 오월 십일에 가는 버스 좀 보여줘 | S2 일A, 일B, 이A로 지정해 줘. | S3 레드 록스 원형 극장이 더 궁금한데, 거기로 가는 버스가 있어 | S4 오월 이십일로 예약해 줘.

     0.00s  user  발화 시작: 시카고에서 덴버까지 세 명, 오월 십일에 가는 버스 좀 보여줘.
     4.16s  <ret> 발화 (turn1 첫 프레임)
     4.40s  user  발화 끝
     4.47s  agent 발화 시작: <ret> 시카고에서 덴버까지 오월 십일, 세 명 기준으로 버스편은… 여덟시에 출발해서 네시에 도착하는 백이
     6.16s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.55s]: [{"bus_number": "123", "departure_time": "08:00", "arrival_time": "16:
    10.58s  user  발화 시작: 와.
    11.35s  user  발화 끝
    14.02s  agent 발화 끝
    14.28s  user  발화 시작: 음… 오월 구일로 바꿔봐.
    16.50s  <ret> 발화 (turn4 첫 프레임)
    16.90s  user  발화 끝
    16.90s  agent 발화 시작: <ret> 오월 구일로 변경하면, 열시에 출발해서 여섯시에 도착하는 사백오십육번이 있고, 가격은 십팔만 원입
    18.50s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.86s]: [{"bus_number": "456", "departure_time": "10:00", "arrival_time": "18:
    23.76s  agent 발화 끝
    25.14s  user  발화 시작: 십팔만 원은 좀 비싸네… 더 저렴한 게 있어?
    27.95s  <ret> 발화 (turn6 첫 프레임)
    28.34s  agent 발화 시작: <ret> 오월 구일에 십육만 원 이하의 버스는 오후 두시에 출발해서 밤 열시에 도착하는 칠백팔십구번이 있습
    28.37s  user  발화 끝
    29.95s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.72s]: [{"bus_number": "789", "departure_time": "14:00", "arrival_time": "22:
    32.45s  user  발화 시작: 대박.
    33.08s  user  발화 끝
    34.84s  user  발화 시작: 칠백팔십구번으로 예약해 줘.
    35.06s  agent 발화 끝
    36.78s  <ret> 발화 (turn9 첫 프레임)
    37.17s  agent 발화 시작: <ret> 칠백팔십구번 버스 세 명으로 예약 완료되었고, 확인 번호는 XYZ123입니다.
    37.34s  user  발화 끝
    38.78s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.88s]: {"confirmation_number": "XYZ123"}
    43.05s  agent 발화 끝
    43.15s  user  발화 시작: 혹시 좌석 지정도 가능해?
    45.07s  <ret> 발화 (turn11 첫 프레임)
    45.22s  agent 발화 시작: <ret> 칠백팔십구번 버스의 좌석은 일A, 일B, 이A, 이B, 삼A, 삼B로 구성되어 있습니다.
    45.23s  user  발화 끝
    47.07s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.60s]: [{"seats": ["1A", "1B", "2A", "2B", "3A", "3B"]}]
    50.61s  user  발화 시작: 일A, 일B, 이A로 지정해 줘.
    50.82s  agent 발화 끝
    53.04s  <ret> 발화 (turn13 첫 프레임)
    53.19s  agent 발화 시작: <ret> 좌석 일A, 일B, 이A로 지정되었습니다.
    53.34s  user  발화 끝
    55.04s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.23s]: {"status": "success"}
    55.44s  user  발화 시작: 그치.
    56.16s  user  발화 끝
    56.42s  agent 발화 끝
    56.66s  user  발화 시작: 혹시 덴버에 도착해서 바로 시내까지 가는 버스가 있어?
    60.18s  <ret> 발화 (turn16 첫 프레임)
    60.25s  agent 발화 시작: <ret> 덴버 도착 후 시내까지 가는 구백구십구번 버스는 밤 열시 삼십분에 출발해서 열한시에 도착하고, 요
    60.50s  user  발화 끝
    62.18s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.38s]: [{"bus_number": "999", "departure_time": "22:30", "arrival_time": "23:
    64.30s  user  발화 시작: 그래.
    64.94s  user  발화 끝
    68.60s  user  발화 시작: 아, 구백구십구번 버스도 같이 예약해 줘.
    68.63s  agent 발화 끝
    71.20s  <ret> 발화 (turn19 첫 프레임)
    71.35s  agent 발화 시작: <ret> 구백구십구번 버스 세 명으로 예약 완료되었고, 확인 번호는 ABC456입니다.
    71.51s  user  발화 끝
    72.56s  ⚡SPAN 주입 [d'=1.36s / d_lead=5.65s]: {"confirmation_number": "ABC456"}
    75.54s  user  발화 시작: 진짜?
    76.27s  user  발화 끝
    77.00s  agent 발화 끝
    77.24s  user  발화 시작: 혹시 덴버는 지금 날씨가 어때?
    79.07s  <ret> 발화 (turn22 첫 프레임)
    79.46s  agent 발화 시작: <ret> 덴버의 현재 날씨는 이십도, 맑습니다.
    79.68s  user  발화 끝
    80.70s  user  발화 시작: 응.
    81.07s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.14s]: {"temperature": "20", "condition": "Sunny"}
    81.28s  user  발화 끝
    82.33s  user  발화 시작: 이십도면 괜찮겠네. 덴버에 볼 만한 곳도 알려줘.
    82.59s  agent 발화 끝
    85.98s  <ret> 발화 (turn25 첫 프레임)
    86.03s  user  발화 끝
    86.12s  agent 발화 시작: <ret> 덴버에서는 덴버 미술관과 레드 록스 원형 극장을 추천합니다.
    87.98s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.84s]: [{"name": "Denver Art Museum", "description": "A leading art museum"},
    89.95s  agent 발화 끝
    90.19s  user  발화 시작: 레드 록스 원형 극장이 더 궁금한데, 거기로 가는 버스가 있어?
    94.13s  <ret> 발화 (turn27 첫 프레임)
    94.28s  agent 발화 시작: <ret> 덴버 시내에서 레드 록스 원형 극장까지 가는 백일번 버스는 열두시에 출발해서 한시에 도착하고, 요
    94.54s  user  발화 끝
    96.13s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.69s]: [{"bus_number": "101", "departure_time": "12:00", "arrival_time": "13:
   100.08s  user  발화 시작: 진짜?
   101.14s  user  발화 끝
   101.97s  agent 발화 끝
   102.73s  user  발화 시작: 그 버스도 예약할 수 있어?
   103.92s  <ret> 발화 (turn30 첫 프레임)
   103.99s  agent 발화 시작: <ret> 백일번 버스 세 명으로 예약 완료되었고, 확인 번호는 DEF789입니다.
   104.25s  user  발화 끝
   105.28s  ⚡SPAN 주입 [d'=1.36s / d_lead=5.79s]: {"confirmation_number": "DEF789"}
   109.78s  agent 발화 끝
   110.70s  user  발화 시작: 좋아. 이제 여행 준비는 다 끝났네.
   113.80s  agent 발화 시작: 여행 준비가 모두 완료되셨다니 다행입니다.
   113.89s  user  발화 끝
   116.22s  user  발화 시작: 근데… 덴버에서 시카고로 돌아오는 버스표는 언제부터 예약할 수 있어?
   116.57s  agent 발화 끝
   120.94s  <ret> 발화 (turn34 첫 프레임)
   121.09s  agent 발화 시작: <ret> 덴버에서 시카고로 돌아오는 버스표는 오월 십오일부터 예약 가능합니다.
   121.27s  user  발화 끝
   122.94s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.67s]: {"available_from": "May 15"}
   125.77s  agent 발화 끝
   125.80s  user  발화 시작: …오월 십오일 이후에 예약해도 괜찮은데, 혹시 할인되는 날짜가 있을까?
   130.23s  <ret> 발화 (turn36 첫 프레임)
   130.39s  agent 발화 시작: <ret> 오월 이십일에 십% 할인된 가격으로 덴버에서 시카고행 버스표를 예약할 수 있습니다.
   130.62s  user  발화 끝
   132.08s  user  발화 시작: 응.
   132.23s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.10s]: [{"date": "May 20", "discount": "10%"}]
   132.53s  user  발화 끝
   135.48s  agent 발화 끝
   136.87s  user  발화 시작: 오월 이십일로 예약해 줘.
   138.26s  <ret> 발화 (turn39 첫 프레임)
   138.57s  agent 발화 시작: <ret> 오월 이십일 덴버에서 시카고행 버스표 세 명으로 예약 완료되었고, 확인 번호는 GHI012입니다.
   138.75s  user  발화 끝
   139.70s  ⚡SPAN 주입 [d'=1.44s / d_lead=7.00s]: {"confirmation_number": "GHI012"}
   145.56s  agent 발화 끝
   145.63s  user  발화 시작: 좋아, 이제 진짜 끝났네.
   147.67s  agent 발화 시작: 모든 예약이 마무리되셨다니 기쁩니다.
   147.84s  user  발화 끝
   150.16s  agent 발화 끝
   150.68s  user  발화 시작: 혹시 여행자 보험도 들어줄 수 있어?
   152.87s  <ret> 발화 (turn43 첫 프레임)
   153.18s  agent 발화 시작: <ret> 세 명 기준 여행자 보험은 삼만 원이고, 모든 보장을 포함합니다.
   153.40s  user  발화 끝
   154.87s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.31s]: [{"price": 30, "coverage": "Full"}]
   156.06s  user  발화 시작: 헐.
   156.56s  user  발화 끝
   157.34s  user  발화 시작: 그걸로 해 줘.
   157.48s  agent 발화 끝
   157.78s  <ret> 발화 (turn46 첫 프레임)
   158.17s  agent 발화 시작: <ret> 여행자 보험 가입 완료되었고, 보험 증권 번호는 JKL345입니다.
   158.35s  user  발화 끝
   159.78s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.81s]: {"policy_number": "JKL345"}
   160.06s  user  발화 시작: 와.
   160.83s  user  발화 끝
   162.98s  agent 발화 끝
   163.01s  user  발화 시작: 완벽해. 정말 고마워.
   164.85s  agent 발화 시작: 도움이 되었다니 저도 기쁩니다.
   165.08s  user  발화 끝
   166.78s  agent 발화 끝
