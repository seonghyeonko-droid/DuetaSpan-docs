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

# EXAMINER(FDB-v2) 단계: S1 시카고에서 덴버까지 세 명… | S2 …혹시 그 버스에 와이파이 되는지 알 수 있어? | S3 이백오십달러면 좀 비싸네. 더 저렴한 곳은 없을까? | S4 돌아오는 버스 확인 번호는 구 팔 칠 육 오 사번이네. 알았어

     0.00s  user  발화 시작: 시카고에서 덴버까지 세 명…
     2.26s  user  발화 끝
     3.77s  user  발화 시작: …오월 십일에 가는 버스 좀 보여줘.
     5.93s  <ret> 발화 (turn2 첫 프레임)
     6.21s  user  발화 끝
     6.25s  agent 발화 시작: <ret> 오월 십일 시카고에서 덴버까지 가는 버스는 그레이하운드, 오후 두시 삼십분 출발, 일인당 이백이십
     7.93s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.70s]: (tool result) Buses found: Greyhound, 14:30 departure, $220 per person
    11.17s  user  발화 시작: 와.
    11.62s  user  발화 끝
    13.94s  agent 발화 끝
    14.40s  user  발화 시작: 그레이하운드 말고 다른 버스 회사도 있어?
    16.69s  <ret> 발화 (turn5 첫 프레임)
    16.98s  user  발화 끝
    17.00s  agent 발화 시작: <ret> 플릭스버스도 있어요. 오전 여덟시에 출발하며, 일인당 백팔십오달러입니다.
    18.69s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.16s]: (tool result) FlixBus, 08:00 departure, $185 per person.
    23.16s  agent 발화 끝
    23.53s  user  발화 시작: 플릭스버스가 더 저렴하네. 혹시 수하물 규정은 어떻게 돼?
    27.03s  <ret> 발화 (turn7 첫 프레임)
    27.26s  agent 발화 시작: <ret> 플릭스버스는 휴대 수하물은 무료이고, 위탁 수하물은 오십파운드까지 삼십달러입니다.
    27.46s  user  발화 끝
    29.03s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.83s]: (tool result) One free carry-on, $30 for checked baggage up to 50lbs.
    30.89s  user  발화 시작: 대박.
    31.39s  user  발화 끝
    33.10s  agent 발화 끝
    33.44s  user  발화 시작: 음… 근데 혹시 오월 구일로 날짜를 바꿔서 알아봐 줄 수 있어?
    37.92s  <ret> 발화 (turn10 첫 프레임)
    38.11s  user  발화 끝
    38.15s  agent 발화 시작: <ret> 오월 구일 플릭스버스는 오후 네시에 출발하며, 일인당 백구십달러입니다.
    39.92s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.88s]: (tool result) FlixBus, 16:00 departure, $190 per person.
    43.47s  user  발화 시작: 아, 구일은 십일보다 조금 더 비싸네—
    44.03s  agent 발화 끝
    46.17s  user  발화 시작: …혹시 그 버스에 와이파이 되는지 알 수 있어?
    46.34s  user  발화 끝
    48.82s  <ret> 발화 (turn13 첫 프레임)
    49.05s  agent 발화 시작: <ret> 해당 노선에는 무료 와이파이가 제공되고, 각 좌석에 전원 콘센트도 있습니다.
    49.08s  user  발화 끝
    50.82s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.61s]: (tool result) Free Wi-Fi available on this route. Power outlets at eac
    54.66s  agent 발화 끝
    54.71s  user  발화 시작: 와이파이 있으면 좋지. 그럼 오월 구일 플릭스버스로 세 명 예약해 줘.
    59.52s  <ret> 발화 (turn15 첫 프레임)
    59.59s  agent 발화 시작: <ret> 예약이 완료되었습니다. 확인 번호는 칠 팔 구 사 오 육번입니다.
    59.62s  user  발화 끝
    61.52s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.86s]: (tool result) Booking confirmed. Confirmation number: 789456.
    63.09s  user  발화 시작: 그치.
    63.58s  user  발화 끝
    63.98s  user  발화 시작: 확인 번호 다시 한 번만 말해줄래?
    64.45s  agent 발화 끝
    65.82s  user  발화 끝
    66.38s  agent 발화 시작: 확인 번호는 칠 팔 구 사 오 육번입니다.
    69.39s  user  발화 시작: 고마워. 혹시 시카고 버스 터미널에서 출발하는 시간까지 가는 방법도 알려줄 수 있어?
    69.94s  agent 발화 끝
    74.83s  <ret> 발화 (turn20 첫 프레임)
    75.22s  agent 발화 시작: <ret> 블루라인 기차를 오헤어 방향으로 타고 클라크/레이크 역에서 내려서 오분 정도 걸어가시면 됩니다.
    75.22s  user  발화 끝
    76.83s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.16s]: (tool result) Take the Blue Line train towards O'Hare. Get off at the 
    78.13s  user  발화 시작: 그래.
    78.58s  user  발화 끝
    81.37s  agent 발화 끝
    81.90s  user  발화 시작: 블루라인… 알았어. 그럼 혹시 덴버 버스 터미널 근처에 괜찮은 호텔도 알아봐 줄 수 있을까?
    87.76s  <ret> 발화 (turn23 첫 프레임)
    88.15s  agent 발화 시작: <ret> 덴버 버스 터미널 근처에는 메이븐 호텔 앳 데어리 블록이 있고, 별점은 네개이며 일박에 이백오십달
    88.34s  user  발화 끝
    89.76s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.62s]: (tool result) The Maven Hotel at Dairy Block, 4 stars, $250/night.
    94.74s  user  발화 시작: 진짜?
    95.47s  user  발화 끝
    96.77s  agent 발화 끝
    96.87s  user  발화 시작: 이백오십달러면 좀 비싸네. 더 저렴한 곳은 없을까?
   100.31s  <ret> 발화 (turn26 첫 프레임)
   100.69s  agent 발화 시작: <ret> 데이즈 인 바이 윈덤 덴버 다운타운은 별점 두개, 일박에 백이십달러입니다.
   100.71s  user  발화 끝
   102.31s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.70s]: (tool result) Days Inn by Wyndham Denver Downtown, 2 stars, $120/night
   103.07s  user  발화 시작: 응.
   103.37s  user  발화 끝
   106.35s  user  발화 시작: 백이십달러면 괜찮네. 그럼 그 호텔 예약해 줘. 오월 구일 밤에 체크인하고 십일 아침에 체크아웃하는 걸로.
   106.39s  agent 발화 끝
   114.09s  user  발화 끝
   114.13s  <ret> 발화 (turn29 첫 프레임)
   114.29s  agent 발화 시작: <ret> 호텔 예약이 완료되었습니다. 확인 번호는 일 이 삼 칠 팔 구번입니다.
   115.89s  ⚡SPAN 주입 [d'=1.76s / d_lead=5.56s]: (tool result) Hotel booked. Confirmation number: 123789.
   119.79s  user  발화 시작: 호텔 확인 번호도 일 이 삼 칠 팔 구번이네. 잘 기억해야겠다.
   119.85s  agent 발화 끝
   124.38s  agent 발화 시작: 네, 잘 기억해 두시는 게 좋겠습니다.
   124.51s  user  발화 끝
   125.38s  user  발화 시작: 응.
   125.73s  user  발화 끝
   126.45s  agent 발화 끝
   127.47s  user  발화 시작: 혹시 덴버에서 시카고로 돌아오는 버스 티켓도 미리 예약해 둘까?
   131.48s  <ret> 발화 (turn34 첫 프레임)
   131.80s  agent 발화 시작: <ret> 오월 십일일 덴버에서 시카고로 가는 그레이하운드 버스는 오전 열시에 출발하며, 일인당 이백삼십달러
   131.82s  user  발화 끝
   132.84s  ⚡SPAN 주입 [d'=1.36s / d_lead=7.88s]: (tool result) Greyhound, 10:00 departure, $230 per person.
   139.68s  agent 발화 끝
   139.78s  user  발화 시작: 음… 이백삼십달러면 괜찮은 것 같아. 그럼 그 버스도 예약해 줘.
   144.84s  <ret> 발화 (turn36 첫 프레임)
   145.00s  agent 발화 시작: <ret> 예약이 완료되었습니다. 확인 번호는 구 팔 칠 육 오 사번입니다.
   145.10s  user  발화 끝
   146.84s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.59s]: (tool result) Booking confirmed. Confirmation number: 987654.
   149.59s  agent 발화 끝
   150.44s  user  발화 시작: 돌아오는 버스 확인 번호는 구 팔 칠 육 오 사번이네. 알았어.
   155.57s  agent 발화 시작: 네, 확인해 주셔서 감사합니다.
   155.76s  user  발화 끝
   157.32s  agent 발화 끝
   158.67s  user  발화 시작: 이번 여행 준비는 거의 다 된 것 같아.
   161.25s  user  발화 끝
   161.34s  agent 발화 시작: 여행 준비를 꼼꼼히 하시는 모습이 보기 좋습니다.
   164.57s  agent 발화 끝
   164.62s  user  발화 시작: 여행 전에 혹시 챙겨야 할 특별한 물건 같은 건 없을까?
   168.35s  agent 발화 시작: 장거리 버스 여행이라면 편안한 신발과 목베개를 챙기시는 것이 좋습니다.
   168.37s  user  발화 끝
   170.57s  user  발화 시작: 그니까.
   171.02s  user  발화 끝
   173.31s  user  발화 시작: 아, 목베개! 좋은 생각이야.
   173.58s  agent 발화 끝
   175.39s  agent 발화 시작: 편안한 여행 되세요.
   175.56s  user  발화 끝
   177.13s  agent 발화 끝
   178.23s  user  발화 시작: 고마워, 덕분에 여행 준비 잘 된 것 같아.
   181.04s  agent 발화 시작: 도움이 되었다니 기쁩니다.
   181.19s  user  발화 끝
   182.88s  agent 발화 끝
