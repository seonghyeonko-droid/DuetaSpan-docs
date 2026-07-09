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

# EXAMINER(FDB-v2) 단계: S1 시카고에서 덴버까지 세 명, 오월 십일에 가는 버스 좀 보여줘 | S2 백팔십달러면 괜찮네. 플릭스버스로 예약해 줘. | S3 혹시 시카고 버스 터미널에서 얼마나 일찍 가야 해? | S4 그래야겠다.

     0.00s  user  발화 시작: 시카고에서 덴버까지 세 명, 오월 십일에 가는 버스 좀 보여줘.
     4.53s  <ret> 발화 (turn1 첫 프레임)
     4.72s  user  발화 끝
     4.85s  agent 발화 시작: <ret> 오월 십일 열네시 삼십분에 출발하는 그레이하운드 버스가 있고, 요금은 이백오십달러, 소요 시간은 
     6.53s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.39s]: (tool result) 14:30, Greyhound, $250, 20h 15m
    13.24s  agent 발화 끝
    13.59s  user  발화 시작: 이백오십달러는 좀 비싸네. 혹시 더 싼 거 있어?
    17.37s  <ret> 발화 (turn3 첫 프레임)
    17.42s  user  발화 끝
    17.68s  agent 발화 시작: <ret> 좀 더 저렴한 옵션을 찾아볼까요?
    18.33s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.54s]: (tool result) None found
    20.07s  agent 발화 시작: 죄송해요. 이백달러 이하의 버스는 현재 없습니다.
    20.22s  agent 발화 끝
    24.00s  agent 발화 끝
    24.10s  user  발화 시작: 그럼 오월 십일일은 어때?
    25.29s  <ret> 발화 (turn6 첫 프레임)
    25.69s  agent 발화 시작: <ret> 오월 십일일에는 어떤 버스가 있는지 알아볼게요.
    25.93s  user  발화 끝
    26.97s  ⚡SPAN 주입 [d'=1.68s / d_lead=3.23s]: (tool result) 08:00, FlixBus, $180, 22h 30m
    28.74s  agent 발화 시작: 오월 십일일 여덟시에 출발하는 플릭스버스가 있고, 요금은 백팔십달러, 소요 시간은 스물두시간 삼십분입니다.
    28.93s  agent 발화 끝
    33.47s  user  발화 시작: 대박.
    33.87s  user  발화 끝
    36.28s  user  발화 시작: 백팔십달러면 괜찮네. 플릭스버스로 예약해 줘.
    36.39s  agent 발화 끝
    39.63s  <ret> 발화 (turn10 첫 프레임)
    39.71s  user  발화 끝
    39.78s  agent 발화 시작: <ret> 플릭스버스로 예약을 진행하겠습니다.
    40.67s  ⚡SPAN 주입 [d'=1.04s / d_lead=2.45s]: (tool result) Confirmation: ABC123XYZ, Passengers: 3, Date: May 11, 08
    42.14s  agent 발화 시작: 예약이 완료되었습니다. 확인 코드는 ABC123XYZ이고, 오월 십일일 여덟시에 플릭스버스가 출발합니다.
    42.23s  agent 발화 끝
    51.46s  user  발화 시작: 혹시 짐 규정이 어떻게 돼?
    51.50s  agent 발화 끝
    53.01s  <ret> 발화 (turn13 첫 프레임)
    53.07s  user  발화 끝
    53.41s  agent 발화 시작: <ret> 플릭스버스의 짐 규정을 확인해 드릴게요.
    54.77s  ⚡SPAN 주입 [d'=1.76s / d_lead=3.19s]: (tool result) 1 checked bag (max 20kg) + 1 carry-on (max 7kg)
    56.43s  agent 발화 시작: 위탁 수하물 한개(최대 이십kg)와 휴대 수하물 한개(최대 칠kg)를 허용합니다.
    56.60s  agent 발화 끝
    63.52s  agent 발화 끝
    64.47s  user  발화 시작: 이십kg이면 충분하겠지?
    66.40s  user  발화 끝
    66.81s  agent 발화 시작: 이십kg이면 대부분의 여행객에게 충분할 거예요.
    68.21s  user  발화 시작: 와.
    68.56s  user  발화 끝
    70.31s  agent 발화 시작: 여행 준비는 잘 되어 가시나요? 평소에 장거리 여행을 자주 하시나요?
    70.47s  agent 발화 끝
    73.93s  user  발화 시작: 아.
    74.42s  user  발화 끝
    75.32s  user  발화 시작: 혹시 시카고 버스 터미널에서 얼마나 일찍 가야 해?
    75.49s  agent 발화 끝
    78.40s  <ret> 발화 (turn21 첫 프레임)
    78.79s  agent 발화 시작: <ret> 시카고 버스 터미널에서는 출발 시간 최소 한시간 전에 도착하시는 것이 좋습니다.
    78.97s  user  발화 끝
    80.40s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.05s]: (tool result) Chicago Bus Station, 631 W Harrison St, opens 06:00
    83.64s  agent 발화 시작: 시카고 버스 터미널은 오전 여섯시에 개장하며, 육백삼십일 W Harrison St에 위치해 있습니다.
    83.84s  agent 발화 끝
    89.89s  agent 발화 끝
    89.92s  user  발화 시작: 좋아. 터미널까지 가는 길은 어떻게 찾아?
    92.86s  <ret> 발화 (turn24 첫 프레임)
    92.98s  user  발화 끝
    93.01s  agent 발화 시작: <ret> 터미널까지 가는 길을 안내해 드릴게요.
    94.14s  ⚡SPAN 주입 [d'=1.28s / d_lead=2.44s]: (tool result) 1. Take the Blue Line train towards O'Hare. 2. Get off a
    95.31s  agent 발화 시작: 블루 라인 기차를 타고 오헤어 방면으로 가세요. 해리슨 역에서 내려 해리슨 거리를 서쪽으로 영 점 오마일 걸
    95.45s  agent 발화 끝
    99.66s  user  발화 시작: 그래.
   100.10s  user  발화 끝
   104.21s  user  발화 시작: 블루 라인… 알았어.
   104.36s  agent 발화 끝
   106.47s  user  발화 끝
   106.62s  agent 발화 시작: 장거리 여행 전에 스트레칭을 가볍게 해 주시는 것도 도움이 될 수 있습니다.
   108.80s  user  발화 시작: 응.
   109.20s  user  발화 끝
   111.61s  agent 발화 끝
   111.64s  user  발화 시작: 그래야겠다.
   112.34s  agent 발화 시작: 여행 전에 충분한 휴식을 취하는 것도 중요합니다.
   112.46s  user  발화 끝
   115.88s  user  발화 시작: 그럼.
   116.14s  agent 발화 끝
   116.38s  user  발화 끝
   116.40s  agent 발화 시작: 여행 중에는 물을 자주 마시는 것을 잊지 마세요.
   118.01s  user  발화 시작: 음.
   118.36s  user  발화 끝
   120.00s  agent 발화 끝
   120.29s  user  발화 시작: 응, 알았어.
   121.39s  user  발화 끝
   121.40s  agent 발화 시작: 즐거운 여행 되세요. 혹시 다른 도움이 필요하시면 언제든지 말씀해주세요.
   127.10s  agent 발화 끝
