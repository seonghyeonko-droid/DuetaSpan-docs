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

# EXAMINER(FDB-v2) 단계: S1 시카고에서 덴버까지 세 명, 오월 십일에 가는 버스 좀 보여줘 | S2 응, 두 개 추가해 줘. | S3 혹시 시카고 출발 터미널은 어디야? | S4 [happy] 혹시 덴버 근처에 괜찮은 호텔 추천해 줄 수 있

     0.00s  user  발화 시작: 시카고에서 덴버까지 세 명, 오월 십일에 가는 버스 좀 보여줘.
     4.02s  <ret> 발화 (turn1 첫 프레임)
     4.33s  agent 발화 시작: <ret> 시카고에서 덴버까지 오월 십일에 세 명 기준으로 세 대의 버스가 있습니다. 아침 여덟시, 이백오십
     4.35s  user  발화 끝
     6.02s  ⚡SPAN 주입 [d'=2.00s / d_lead=12.57s]: (tool result) Three buses found: 8:00 AM, $250; 12:30 PM, $280; 6:00 P
    12.46s  user  발화 시작: 와.
    12.81s  user  발화 끝
    16.90s  agent 발화 끝
    18.03s  user  발화 시작: 아, 이백삼십달러짜리 저녁 버스로 예약해 줘.
    21.26s  <ret> 발화 (turn4 첫 프레임)
    21.57s  agent 발화 시작: <ret> 예약 진행하겠습니다. 저녁 여섯시 버스로 세 명 예약이 완료되었습니다. 확인 번호는 칠X9K2L입
    21.73s  user  발화 끝
    22.54s  ⚡SPAN 주입 [d'=1.28s / d_lead=1.34s]: (tool result) Reservation confirmed: Bus departs 6:00 PM, confirmation
    29.60s  agent 발화 끝
    29.77s  user  발화 시작: 혹시 짐 부치는 거 추가할 수 있어?
    32.00s  agent 발화 시작: 물론입니다. 짐을 추가하려면 각 짐당 이십달러의 추가 요금이 발생합니다. 몇 개의 짐을 부치시겠어요?
    32.02s  user  발화 끝
    36.81s  user  발화 시작: 대박.
    37.30s  user  발화 끝
    39.73s  agent 발화 끝
    39.88s  user  발화 시작: 음… 두 개 부쳐야 할 것 같아—
    42.31s  user  발화 시작: 근데 혹시 그 버스에 와이파이 있니?
    42.46s  user  발화 끝
    44.71s  <ret> 발화 (turn10 첫 프레임)
    44.90s  user  발화 끝
    44.94s  agent 발화 시작: <ret> 저녁 여섯시 버스에는 와이파이가 제공됩니다. 그럼 짐은 두 개 추가하시겠어요?
    46.71s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.38s]: (tool result) Wi-Fi is available on the 6:00 PM bus.
    50.32s  agent 발화 끝
    50.94s  user  발화 시작: 응, 두 개 추가해 줘.
    52.50s  <ret> 발화 (turn12 첫 프레임)
    52.51s  user  발화 끝
    52.73s  agent 발화 시작: <ret> 짐 추가하겠습니다. 짐 두 개가 추가되었습니다. 총 비용은 이백칠십달러입니다.
    53.00s  ⚡SPAN 주입 [d'=0.50s / d_lead=1.33s]: (tool result) Two luggage added, total cost now $270.
    58.64s  user  발화 시작: 결제는 어떻게 해야 해?
    58.71s  agent 발화 끝
    60.07s  user  발화 끝
    60.23s  agent 발화 시작: 신용카드나 직불카드로 결제하실 수 있습니다. 어떤 카드를 사용하시겠어요?
    63.97s  user  발화 시작: 아.
    64.47s  user  발화 끝
    65.61s  agent 발화 끝
    65.86s  user  발화 시작: 신용카드로 할게.
    67.10s  agent 발화 시작: 카드 번호, 유효 기간, CVC 번호를 말씀해 주시겠어요? 안전하게 처리됩니다.
    67.28s  user  발화 끝
    72.28s  agent 발화 끝
    74.13s  user  발화 시작: 사천백십일… (중략) 삼백이십일.
    75.30s  <ret> 발화 (turn19 첫 프레임)
    75.53s  agent 발화 시작: <ret> 결제를 진행하겠습니다. 결제가 완료되었습니다. 티켓은 이메일로 발송되었습니다.
    75.72s  user  발화 끝
    75.80s  ⚡SPAN 주입 [d'=0.50s / d_lead=1.67s]: (tool result) Payment successful. Your ticket is emailed to you.
    79.10s  user  발화 시작: 어어.
    79.64s  user  발화 끝
    81.21s  user  발화 시작: 혹시 시카고 출발 터미널은 어디야?
    81.37s  agent 발화 끝
    83.47s  <ret> 발화 (turn22 첫 프레임)
    83.55s  agent 발화 시작: <ret> 터미널 정보를 알려드릴게요. 출발 터미널은 유니언 스테이션 오번 게이트입니다.
    83.56s  user  발화 끝
    84.43s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.09s]: (tool result) Departure terminal is Union Station, Gate 5.
    86.31s  user  발화 시작: 진짜?
    86.95s  user  발화 끝
    89.81s  agent 발화 끝
    89.82s  user  발화 시작: 유니언 스테이션까지 가는 가장 빠른 길은? 지금 내 위치는 강남역이야.
    94.24s  <ret> 발화 (turn25 첫 프레임)
    94.63s  agent 발화 시작: <ret> 이호선을 타고 시청역에서 일호선으로 환승하여 시카고 유니언 스테이션으로 가세요. 예상 소요 시간은
    94.86s  user  발화 끝
    96.24s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.63s]: (tool result) Take subway line 2 to City Hall Station, then line 1 to 
   103.17s  user  발화 시작: 와, 생각보다 가깝네.
   103.25s  agent 발화 끝
   105.02s  agent 발화 시작: 네, 비교적 가깝습니다. 혹시 다른 도움이 필요하신가요?
   105.11s  user  발화 끝
   106.78s  user  발화 시작: 음.
   107.09s  user  발화 끝
   108.90s  agent 발화 끝
   109.34s  user  발화 시작: 음… 혹시 덴버 도착 터미널도 알려줄 수 있어?
   112.47s  <ret> 발화 (turn30 첫 프레임)
   112.66s  user  발화 끝
   112.70s  agent 발화 시작: <ret> 도착 터미널 정보를 알려드리겠습니다. 도착 터미널은 덴버 유니언 스테이션 십이번 베이입니다.
   113.19s  ⚡SPAN 주입 [d'=0.72s / d_lead=2.65s]: (tool result) Arrival terminal is Denver Union Station, Bay 12.
   115.55s  user  발화 시작: 응.
   116.04s  user  발화 끝
   119.97s  user  발화 시작: 알았어. 고마워.
   119.97s  agent 발화 끝
   121.44s  user  발화 끝
   121.59s  agent 발화 시작: 천만에요. 즐거운 여행 되세요. 혹시 여행 중에 필요한 정보가 있다면 언제든지 다시 찾아주세요.
   127.98s  agent 발화 끝
   128.66s  user  발화 시작: [happy] 혹시 덴버 근처에 괜찮은 호텔 추천해 줄 수 있어?
   131.47s  agent 발화 시작: 물론입니다. 어떤 스타일의 호텔을 선호하시나요? 럭셔리, 실속형, 아니면 조용한 곳을 원하시나요?
   131.62s  user  발화 끝
   138.87s  user  발화 시작: 음… 실속형으로 추천해 줘.
   139.07s  agent 발화 끝
   140.45s  <ret> 발화 (turn37 첫 프레임)
   140.84s  agent 발화 시작: <ret> 덴버에서 실속형 호텔 세 곳을 찾았습니다. 엠버 호텔은 백이십달러, 매븐 호텔은 백오십달러, 호스
   141.13s  user  발화 끝
   142.45s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.18s]: (tool result) Three budget hotels found: The Ember, $120/night; The Ma
   150.02s  agent 발화 끝
   150.23s  user  발화 시작: 엠버 호텔로 예약하고 싶어.
   152.21s  user  발화 끝
   152.37s  <ret> 발화 (turn39 첫 프레임)
   152.43s  agent 발화 시작: <ret> 엠버 호텔 예약하겠습니다. 엠버 호텔 예약이 완료되었습니다. 확인 번호는 구Z4R6B입니다.
   152.87s  ⚡SPAN 주입 [d'=0.50s / d_lead=2.35s]: (tool result) Reservation confirmed at The Ember, confirmation number 
   160.05s  user  발화 시작: 좋아, 이제 정말 다 준비됐네.
   160.26s  agent 발화 끝
   162.49s  agent 발화 시작: 네, 모든 준비가 완료되었습니다. 즐거운 여행 되세요. 혹시 출발 전에 또 궁금한 점이 있으시면 언제든지 말
   162.50s  user  발화 끝
   170.27s  agent 발화 끝
