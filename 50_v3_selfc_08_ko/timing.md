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

# EXAMINER(FDB-v2) 단계: S1 시카고에서 덴버까지 세 명, 오월 십일에 가는 버스 좀 보여줘 | S2 음… 열두시 삼십분으로 변경하고 싶은데 가능해? | S3 수수료는 얼마였어? | S4 좋아. 그럼 혹시 덴버 버스 터미널에서 공항까지 가는 방법도 

     0.00s  user  발화 시작: 시카고에서 덴버까지 세 명, 오월 십일에 가는 버스 좀 보여줘.
     4.02s  <ret> 발화 (turn1 첫 프레임)
     4.34s  agent 발화 시작: <ret> 네, 오월 십일 시카고에서 덴버행 버스를 찾아볼게요. 오월 십일 시카고에서 덴버행 버스는 그레이하
     4.35s  user  발화 끝
     6.02s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.63s]: (tool result) origin:Chicago, destination:Denver, date:2024-05-10, num
    12.83s  user  발화 시작: 와.
    13.46s  user  발화 끝
    17.56s  agent 발화 끝
    18.59s  user  발화 시작: 제일 싼 거로 예약해 줘.
    19.84s  <ret> 발화 (turn4 첫 프레임)
    20.15s  agent 발화 시작: <ret> 가장 저렴한 그레이하운드 버스로 예약해 드릴까요? 네, 그레이하운드 버스로 예약 완료되었습니다. 
    20.21s  user  발화 끝
    21.84s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.07s]: (tool result) reservation_id:GH78945, bus_company:Greyhound, origin:Ch
    31.69s  agent 발화 끝
    31.88s  user  발화 시작: 혹시 환불 규정이 어떻게 돼?
    33.50s  <ret> 발화 (turn6 첫 프레임)
    33.73s  agent 발화 시작: <ret> 그레이하운드 환불 규정을 알아볼게요. 출발 스물네시간 전까지 취소하면 전액 환불되고, 스물네시간 
    33.86s  user  발화 끝
    34.62s  ⚡SPAN 주입 [d'=1.12s / d_lead=2.51s]: (tool result) bus_company:Greyhound, refund_policy:Full refund if canc
    40.87s  user  발화 시작: 대박.
    41.36s  user  발화 끝
    45.04s  agent 발화 끝
    45.26s  user  발화 시작: 아, 스물네시간 전이구나. 그럼 혹시 시카고 버스 터미널에서 출발하는 시간 좀 알려줄 수 있어?
    51.50s  <ret> 발화 (turn9 첫 프레임)
    51.60s  user  발화 끝
    51.73s  agent 발화 시작: <ret> 시카고 버스 터미널 출발 시간은 확인해 드릴게요. 오월 십일 시카고 버스 터미널에서 출발하는 그레
    53.18s  ⚡SPAN 주입 [d'=1.68s / d_lead=3.57s]: (tool result) origin:Chicago, bus_company:Greyhound, date:2024-05-10, 
    63.97s  agent 발화 끝
    64.22s  user  발화 시작: 음… 열두시 삼십분으로 변경하고 싶은데 가능해?
    68.19s  user  발화 끝
    68.22s  agent 발화 시작: 네, 열두시 삼십분으로 변경해 드릴 수 있습니다. —
    70.55s  user  발화 시작: 혹시 수하물 규정도 알려줄 수 있어?
    71.32s  agent 발화 끝
    73.14s  user  발화 끝
    73.15s  <ret> 발화 (turn13 첫 프레임)
    73.30s  agent 발화 시작: <ret> 아, 네. 수하물 규정을 먼저 알려드릴게요.
    75.15s  ⚡SPAN 주입 [d'=2.00s / d_lead=2.86s]: (tool result) bus_company:Greyhound, checked_baggage_allowance:1 bag (
    76.07s  agent 발화 시작: 위탁 수하물은 최대 오십파운드까지 한개, 휴대 수하물은 최대 이십오파운드까지 한개 허용됩니다.
    76.16s  agent 발화 끝
    82.19s  user  발화 시작: 그럼 열두시 삼십분으로 변경해 줘.
    82.70s  agent 발화 끝
    84.05s  <ret> 발화 (turn16 첫 프레임)
    84.44s  agent 발화 시작: <ret> 열두시 삼십분으로 변경하는 것을 확인해 드릴까요? 네, 열두시 삼십분으로 변경되었습니다. 변경 수
    84.55s  user  발화 끝
    85.57s  ⚡SPAN 주입 [d'=1.52s / d_lead=3.53s]: (tool result) reservation_id:GH78945, new_departure_time:12:30, confir
    91.90s  user  발화 시작: 그치.
    92.30s  user  발화 끝
    94.45s  agent 발화 끝
    94.98s  user  발화 시작: 수수료는 얼마였어?
    96.37s  agent 발화 시작: 변경 수수료는 오달러였습니다.
    96.40s  user  발화 끝
    98.78s  user  발화 시작: 혹시 버스 안에서 와이파이 돼?
    98.95s  agent 발화 끝
   100.30s  <ret> 발화 (turn21 첫 프레임)
   100.52s  agent 발화 시작: <ret> 그레이하운드 버스 내 와이파이 가능 여부를 확인해 볼게요.
   100.53s  user  발화 끝
   102.30s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.21s]: (tool result) bus_company:Greyhound, wifi_availability:Available on mo
   104.51s  agent 발화 시작: 대부분의 노선에서 와이파이가 제공되지만, 보장은 어렵습니다.
   104.73s  agent 발화 끝
   107.56s  user  발화 시작: 어어.
   108.05s  user  발화 끝
   109.51s  agent 발화 끝
   109.60s  user  발화 시작: 아, 그렇구나. 그럼 시카고 버스 터미널에 주차할 곳은 있어?
   113.50s  <ret> 발화 (turn25 첫 프레임)
   113.65s  agent 발화 시작: <ret> 시카고 버스 터미널 근처 주차장 정보를 찾아볼게요.
   113.80s  user  발화 끝
   115.50s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.75s]: (tool result) location:Chicago Bus Terminal, parking_options:SpotHero;
   117.17s  agent 발화 시작: 스포트히어로, LAZ 파킹, 파크위즈 주차장이 있으며, 시간당 십달러, 십오달러 또는 하루 팔달러입니다.
   117.40s  agent 발화 끝
   120.63s  user  발화 시작: 진짜?
   121.27s  user  발화 끝
   124.40s  user  발화 시작: 하루 팔달러인 곳으로 예약해 줘.
   124.90s  agent 발화 끝
   126.20s  <ret> 발화 (turn29 첫 프레임)
   126.59s  agent 발화 시작: <ret> 하루 팔달러인 파크위즈 주차장으로 예약해 드릴까요?
   126.70s  ⚡SPAN 주입 [d'=0.50s / d_lead=3.56s]: (tool result) parking_reservation_id:PW98765, parking_provider:ParkWhi
   126.79s  user  발화 끝
   130.00s  agent 발화 시작: 네, 파크위즈 주차장으로 하루 동안 예약 완료되었습니다. 예약 번호는 PW98765이고, 확인 번호는 BZ4
   130.15s  agent 발화 끝
   138.76s  agent 발화 끝
   139.68s  user  발화 시작: 좋아. 그럼 혹시 덴버 버스 터미널에서 공항까지 가는 방법도 알려줄 수 있어?
   144.28s  <ret> 발화 (turn32 첫 프레임)
   144.35s  agent 발화 시작: <ret> 덴버 버스 터미널에서 공항까지 가는 방법을 알아볼게요.
   144.49s  user  발화 끝
   145.48s  ⚡SPAN 주입 [d'=1.20s / d_lead=4.35s]: (tool result) terminal:Denver Bus Terminal, airport:Denver Internation
   148.66s  agent 발화 시작: RTD A-Line 기차, 택시, 차량 공유 서비스가 있으며, 예상 비용은 각각 십 점 오 영달러, 삼십달러
   148.70s  agent 발화 끝
   152.42s  user  발화 시작: 응.
   152.73s  user  발화 끝
   157.55s  agent 발화 끝
   157.85s  user  발화 시작: 기차는 얼마나 걸려?
   159.28s  <ret> 발화 (turn36 첫 프레임)
   159.44s  agent 발화 시작: <ret> RTD A-Line 기차로 이동하는 데 걸리는 시간을 확인해 볼게요.
   159.60s  user  발화 끝
   161.28s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.21s]: (tool result) line:RTD A-Line, origin:Denver Bus Terminal, destination
   163.60s  agent 발화 시작: RTD A-Line 기차로 이동하면 약 삼십칠분 정도 소요됩니다.
   163.65s  agent 발화 끝
   167.59s  user  발화 시작: 좋아. 그럼 오월 십일에 시카고에서 덴버까지 버스 예약, 파크위즈 주차 예약, 그리고 덴버 공항까지 기차 타
   167.95s  agent 발화 끝
   176.92s  agent 발화 시작: 네, 오월 십일 시카고에서 덴버행 버스 예약, 파크위즈 주차 예약, 덴버 공항까지 기차 이용으로 정리되었습니
   176.96s  user  발화 끝
   188.24s  agent 발화 끝
