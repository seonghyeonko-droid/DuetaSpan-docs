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

# EXAMINER(FDB-v2) 단계: S1 시카고에서 덴버까지 세 명, 오월 십일에 가는 버스 좀 보여줘 | S2 이름은 김민지, 연락처는 공 일 공 일 이 삼 사 오 육 칠  | S3 아, 그렇구나. 덴버 도착하면 근처에 맛집 좀 추천해 줄 수  | S4 칠십오도면 괜찮겠네. 덴버에서 시카고로 돌아오는 버스도 예약해

     0.00s  user  발화 시작: 시카고에서 덴버까지 세 명, 오월 십일에 가는 버스 좀 보여줘.
     3.95s  <ret> 발화 (turn1 첫 프레임)
     4.16s  user  발화 끝
     4.26s  agent 발화 시작: <ret> 알겠습니다. 시카고에서 덴버까지 오월 십일에 세 명 기준으로 세 대의 버스가 있습니다. 아침 여덟
     4.45s  ⚡SPAN 주입 [d'=0.50s / d_lead=0.52s]: (tool result) Three buses found: 8:00 AM, $250; 1:30 PM, $280; 6:00 PM
    11.57s  user  발화 시작: 와.
    12.01s  user  발화 끝
    15.61s  agent 발화 끝
    16.80s  user  발화 시작: 아, 이백팔십달러짜리는 좀 비싸네. 다른 날짜도 알아봐 줄 수 있어?
    21.56s  agent 발화 시작: 물론입니다. 어떤 날짜를 원하시나요?
    21.71s  user  발화 끝
    24.28s  agent 발화 끝
    24.44s  user  발화 시작: 음… 오월 십이일로 해 봐.
    26.75s  <ret> 발화 (turn6 첫 프레임)
    27.02s  user  발화 끝
    27.07s  agent 발화 시작: <ret> 오월 십이일에는 아침 아홉시, 이백사십달러, 오후 네시, 이백이십달러 두 대가 있습니다.
    27.71s  ⚡SPAN 주입 [d'=0.96s / d_lead=6.72s]: (tool result) Two buses found: 9:00 AM, $240; 4:00 PM, $220.
    33.78s  agent 발화 끝
    34.94s  user  발화 시작: 오, 이백이십달러짜리가 괜찮네. 근데 혹시 환불 정책은 어떻게 돼?
    39.23s  <ret> 발화 (turn8 첫 프레임)
    39.46s  agent 발화 시작: <ret> 출발 스물네시간 전 취소하면 전액 환불됩니다. 스물네시간 이내 취소 시에는 이십달러의 수수료가 발
    39.66s  user  발화 끝
    41.23s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.01s]: (tool result) Full refund if canceled 24 hours before departure. $20 f
    44.46s  user  발화 시작: 대박.
    44.96s  user  발화 끝
    47.42s  user  발화 시작: 스물네시간 전까지면 괜찮겠네. 그럼 그 버스 예약해 줘.
    47.47s  agent 발화 끝
    51.63s  user  발화 끝
    52.08s  agent 발화 시작: 예약 진행해 드리겠습니다. 승객 정보가 필요합니다.
    55.54s  agent 발화 끝
    57.20s  user  발화 시작: 이름은 김민지, 연락처는 공 일 공 일 이 삼 사 오 육 칠 팔이야.
    63.55s  user  발화 끝
    63.62s  agent 발화 시작: 김민지 님, 연락처 공 일 공 일 이 삼 사 오 육 칠 팔로 맞으신가요?
    69.60s  user  발화 시작: 응, 맞아.
    69.82s  agent 발화 끝
    70.62s  <ret> 발화 (turn15 첫 프레임)
    70.75s  user  발화 끝
    70.77s  agent 발화 시작: <ret> 확인했습니다. 예약이 완료되었습니다. 확인 번호는 B78923입니다.
    71.12s  ⚡SPAN 주입 [d'=0.50s / d_lead=0.86s]: (tool result) Booking confirmed. Confirmation number: B78923.
    75.79s  user  발화 시작: 확인 번호는 B78923… 혹시 수하물 규정이 어떻게 돼?
    75.94s  agent 발화 끝
    79.77s  <ret> 발화 (turn17 첫 프레임)
    80.00s  agent 발화 시작: <ret> 무료 위탁 수하물은 최대 오십파운드까지 가능합니다. 추가 수하물은 각당 삼십달러입니다.
    80.18s  user  발화 끝
    81.77s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.06s]: (tool result) One free checked bag up to 50 lbs. $30 for each addition
    84.40s  user  발화 시작: 그치.
    85.03s  user  발화 끝
    86.06s  agent 발화 끝
    86.44s  user  발화 시작: 오십파운드까지… 그럼 기내 반입은?
    89.39s  user  발화 끝
    89.40s  agent 발화 시작: 기내 반입은 작은 가방 하나만 허용됩니다.
    91.32s  user  발화 시작: 어어.
    91.95s  user  발화 끝
    92.73s  agent 발화 끝
    94.41s  user  발화 시작: 아, 그렇구나. 덴버 도착하면 근처에 맛집 좀 추천해 줄 수 있어?
    99.25s  agent 발화 시작: 물론입니다. 덴버에 도착하시면 근처 맛집을 추천해 드릴게요.
    99.32s  user  발화 끝
   102.99s  <ret> 발화 (turn24 첫 프레임)
   103.39s  agent 발화 시작: <ret> 덴버는 맛집이 많기로 유명하죠. 리오하, 머캔타일 다이닝 앤 프로비전, 루트 다운, 가드 앤 그레
   103.45s  agent 발화 끝
   103.95s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.01s]: (tool result) Five restaurants found: Rioja, Mercantile Dining & Provi
   107.73s  user  발화 시작: 응.
   108.23s  user  발화 끝
   112.94s  agent 발화 끝
   113.84s  user  발화 시작: 홉 앨리는 무슨 음식점이야?
   115.35s  <ret> 발화 (turn27 첫 프레임)
   115.74s  agent 발화 시작: <ret> 현대적인 중국 음식점이고, 주소는 라리머 삼천사백십육번지, 영업시간은 오후 다섯시부터 열시까지입니
   115.78s  user  발화 끝
   117.35s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.72s]: (tool result) Hop Alley: Modern Chinese, 3416 Larimer St, Denver. Open
   120.61s  user  발화 시작: 응.
   120.83s  user  발화 끝
   124.46s  agent 발화 끝
   125.24s  user  발화 시작: 저기, 혹시 홉 앨리 예약해 줄 수 있어?
   128.50s  agent 발화 시작: 네, 예약 가능합니다. 몇 시로 예약하시겠어요?
   128.52s  user  발화 끝
   130.36s  user  발화 시작: 응.
   130.81s  user  발화 끝
   131.55s  agent 발화 끝
   131.55s  user  발화 시작: 저녁 일곱시로 부탁해.
   133.09s  <ret> 발화 (turn33 첫 프레임)
   133.24s  agent 발화 시작: <ret> 저녁 일곱시로 예약해 드리겠습니다. 홉 앨리에 세명, 저녁 일곱시로 예약이 완료되었습니다. 확인 
   133.30s  user  발화 끝
   134.69s  ⚡SPAN 주입 [d'=1.60s / d_lead=2.81s]: (tool result) Reservation confirmed for 3 at Hop Alley, 7:00 PM. Confi
   140.73s  user  발화 시작: 진짜?
   141.68s  user  발화 끝
   143.07s  agent 발화 끝
   143.12s  user  발화 시작: 확인 번호는 R12345… 덴버 날씨는 어때?
   146.84s  <ret> 발화 (turn36 첫 프레임)
   147.23s  agent 발화 시작: <ret> 현재 덴버는 화씨 육십팔도, 부분적으로 구름이 많습니다. 최고 기온은 화씨 칠십오도, 최저 기온은
   147.47s  user  발화 끝
   148.84s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.23s]: (tool result) Denver: Currently 68°F, partly cloudy. High of 75°F, low
   156.46s  agent 발화 끝
   156.55s  user  발화 시작: 칠십오도면 괜찮겠네. 덴버에서 시카고로 돌아오는 버스도 예약해 줄 수 있어?
   162.31s  agent 발화 시작: 물론입니다. 돌아오는 날짜를 알려주세요.
   162.48s  user  발화 끝
   165.22s  agent 발화 끝
   166.03s  user  발화 시작: 오월 십오일로 해 줘.
   167.56s  <ret> 발화 (turn40 첫 프레임)
   167.68s  user  발화 끝
   167.72s  agent 발화 시작: <ret> 오월 십오일에는 아침 열시, 이백육십달러, 오후 두시, 이백구십달러, 저녁 일곱시, 이백사십달러 
   169.56s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.13s]: (tool result) Three buses found: 10:00 AM, $260; 2:00 PM, $290; 7:00 P
   176.85s  agent 발화 끝
   178.34s  user  발화 시작: 저녁 일곱시 이백사십달러짜리로 예약해 줘.
   181.29s  user  발화 끝
   181.35s  <ret> 발화 (turn42 첫 프레임)
   181.44s  agent 발화 시작: <ret> 오월 십오일 저녁 일곱시 시카고행 버스 예약이 완료되었습니다. 확인 번호는 B98765입니다.
   183.35s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.28s]: (tool result) Booking confirmed. Confirmation number: B98765.
   183.87s  user  발화 시작: 응.
   184.36s  user  발화 끝
   188.49s  user  발화 시작: 알았어. 정말 고마워.
   188.71s  agent 발화 끝
   190.37s  user  발화 끝
   190.44s  agent 발화 시작: 도움이 되었다니 기쁩니다. 즐거운 여행 되세요.
   193.76s  agent 발화 끝
