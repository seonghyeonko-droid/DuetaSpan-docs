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
#       "date": "2026-05-05",
#       "category": "home",
#       "text": "User's home address is 528 Birch Road."
#     },
#     {
#       "date": "2026-02-10",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     },
#     {
#       "date": "2025-12-04",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2025-11-07",
#       "category": "trip",
#       "text": "User is planning a trip to Iceland in May."
#     },
#     {
#       "date": "2025-06-09",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Mexican."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-05",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 시카고에서 덴버까지 세 명, 오월 십일에 가는 버스 좀 보여줘 | S2 백팔십달러면 괜찮네. 혹시— | S3 김민지, 공 일 공 일 이 삼 사 오 육 칠 팔. | S4 고마워.

     0.00s  user  발화 시작: 시카고에서 덴버까지 세 명, 오월 십일에 가는 버스 좀 보여줘.
     3.64s  <ret> 발화 (turn1 첫 프레임)
     3.83s  user  발화 끝
     3.96s  agent 발화 시작: <ret> 오월 십일 오전 열한시 삼십분에 출발하는 그레이하운드 버스가 있으며, 일인당 이백이십오달러입니다.
     5.64s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.00s]: (tool result) 11:30 AM departure, Greyhound, $225 per person.
    10.96s  agent 발화 끝
    11.38s  user  발화 시작: 혹시 더 저렴한 거 있어?
    12.57s  <ret> 발화 (turn3 첫 프레임)
    12.96s  agent 발화 시작: <ret> 죄송해요, 이백이십오달러 미만으로는 버스를 찾을 수 없습니다.
    12.99s  user  발화 끝
    14.57s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.68s]: (tool result) No buses found under $225.
    17.64s  agent 발화 끝
    17.93s  user  발화 시작: 그럼, 오월 십이일은 어때?
    19.89s  <ret> 발화 (turn5 첫 프레임)
    20.28s  agent 발화 시작: <ret> 오월 십이일 오전 여덟시에 출발하는 플릭스버스가 있으며, 일인당 백팔십달러입니다.
    20.52s  user  발화 끝
    21.89s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.97s]: (tool result) 8:00 AM departure, FlixBus, $180 per person.
    23.93s  user  발화 시작: 대박.
    24.38s  user  발화 끝
    25.96s  user  발화 시작: 백팔십달러면 괜찮네. 혹시—
    26.26s  agent 발화 끝
    28.24s  user  발화 시작: 그 버스는 직행이야?
    28.50s  user  발화 끝
    29.28s  <ret> 발화 (turn9 첫 프레임)
    29.67s  agent 발화 시작: <ret> 네, 플릭스버스 오전 여덟시 출발편은 직행이며, 스무시간이 소요됩니다.
    29.81s  user  발화 끝
    31.28s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.19s]: (tool result) FlixBus, 8:00 AM, direct, 20 hours.
    31.73s  user  발화 시작: 와.
    32.27s  user  발화 끝
    34.65s  agent 발화 시작: 스무시간이면 꽤 긴 여정이네요. 편안한 여행을 위해 필요한 물품을 챙기는 것이 좋겠어요.
    34.85s  agent 발화 끝
    40.72s  agent 발화 끝
    41.22s  user  발화 시작: 그 버스 예약해 줘.
    42.52s  agent 발화 시작: 예약을 진행해 드릴게요. 승객 이름과 연락처를 알려주시겠어요?
    42.69s  user  발화 끝
    47.10s  user  발화 시작: 김민지, 공 일 공 일 이 삼 사 오 육 칠 팔.
    47.15s  agent 발화 끝
    51.70s  <ret> 발화 (turn15 첫 프레임)
    51.73s  user  발화 끝
    51.94s  agent 발화 시작: <ret> 예약이 완료되었습니다. 예약 ID는 BX78945입니다.
    52.82s  ⚡SPAN 주입 [d'=1.12s / d_lead=4.86s]: (tool result) Reservation confirmed, ID: BX78945.
    55.41s  user  발화 시작: 그치.
    55.91s  user  발화 끝
    56.79s  agent 발화 끝
    57.74s  user  발화 시작: 혹시 좌석 지정할 수 있어?
    59.09s  <ret> 발화 (turn18 첫 프레임)
    59.48s  agent 발화 시작: <ret> 일번부터 오번, 팔번부터 십이번, 십오번부터 십구번 좌석이 남아있습니다.
    59.49s  user  발화 끝
    61.09s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.05s]: (tool result) Available seats: 1-5, 8-12, 15-19.
    61.83s  user  발화 시작: 그래.
    62.27s  user  발화 끝
    64.53s  agent 발화 끝
    66.26s  user  발화 시작: 팔번으로 부탁해.
    67.45s  <ret> 발화 (turn21 첫 프레임)
    67.60s  agent 발화 시작: <ret> 팔번 좌석으로 지정해 드릴게요.
    67.73s  user  발화 끝
    68.57s  ⚡SPAN 주입 [d'=1.12s / d_lead=2.44s]: (tool result) Seat 8 confirmed.
    69.77s  user  발화 시작: 고마워.
    70.04s  agent 발화 끝
    70.44s  user  발화 끝
    70.55s  agent 발화 시작: 도움이 되었다니 기쁩니다. 혹시 다른 필요한 것이 있으신가요?
    72.44s  user  발화 시작: 응.
    72.66s  user  발화 끝
    74.90s  agent 발화 끝
    75.22s  user  발화 시작: 아니, 괜찮아.
    76.51s  user  발화 끝
    76.53s  agent 발화 시작: 즐거운 여행 되세요. 혹시라도 궁금한 점이 있다면 언제든지 다시 찾아주세요.
    82.51s  agent 발화 끝
