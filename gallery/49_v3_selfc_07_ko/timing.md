# v3_selfc_07_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_selfc_07",
#     "name": "수빈",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "early 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-02",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Italian."
#     },
#     {
#       "date": "2026-03-14",
#       "category": "hobby",
#       "text": "User is into alpine wildflower photography."
#     },
#     {
#       "date": "2026-03-06",
#       "category": "diet",
#       "text": "User is gluten-free."
#     },
#     {
#       "date": "2025-12-15",
#       "category": "work",
#       "text": "User works as a software engineer."
#     },
#     {
#       "date": "2025-12-08",
#       "category": "allergy",
#       "text": "User is allergic to cat dander."
#     },
#     {
#       "date": "2025-11-19",
#       "category": "trip",
#       "text": "User is planning a trip to Lisbon in October."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-26",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2025-05-30",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 알람 열두시 십오 분으로 맞춰 줘. | S2 이번 주 토요일에 갈 영화 있나 찾아 봐 줘. | S3 … 그 영화 예매해 줘. 두 장. | S4 주말에 부산 갈 건데, 부산 날씨는 어때?

     0.00s  user  발화 시작: 알람 열두시 십오 분으로 맞춰 줘.
     2.32s  <ret> 발화 (turn1 첫 프레임)
     2.56s  agent 발화 시작: <ret> 알람이 오후 열두시 십오 분으로 설정되었어요. 확인 번호는 팔 구 엑스 제트 사 이입니다.
     2.56s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.63s]: (tool result) Alarm set for 12:15 PM. Confirmation ID: 89xz42.
     2.63s  user  발화 끝
     9.19s  agent 발화 끝
    10.46s  user  발화 시작: 음… 내일 아침 여섯 시로 바꿔 줘.
    12.61s  <ret> 발화 (turn3 첫 프레임)
    12.93s  agent 발화 시작: <ret> 알람을 내일 아침 여섯 시로 변경했어요. 확인 번호는 이 칠 에이 비 구 일입니다.
    12.93s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.55s]: (tool result) Alarm set for 6:00 AM. Confirmation ID: 27ab91.
    12.99s  user  발화 끝
    18.38s  user  발화 시작: 이번 주 토요일에 갈 영화 있나 찾아 봐 줘.
    18.48s  agent 발화 끝
    20.82s  user  발화 끝
    20.86s  <ret> 발화 (turn5 첫 프레임)
    21.02s  agent 발화 시작: <ret> 이번 주 토요일, 칠월 십이일에 롯데월드타워에서 '인사이드 아웃 이'가 상영돼요. 저녁 일곱시 삼
    21.02s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.85s]: (tool result) Showing 'Inside Out 2' at 7:30 PM, Lotte Cinema World To
    24.74s  user  발화 시작: 맞아요.
    25.19s  user  발화 끝
    27.78s  agent 발화 시작: 혹시 다른 영화나 시간을 원하시면 말씀해 주세요—
    27.87s  agent 발화 끝
    30.44s  user  발화 시작: … 그 영화 예매해 줘. 두 장.
    31.20s  agent 발화 끝
    32.52s  <ret> 발화 (turn9 첫 프레임)
    32.59s  agent 발화 시작: <ret> '인사이드 아웃 이' 두 장, 롯데월드타워 저녁 일곱시 삼십분 상영으로 예매 완료되었습니다. 확인
    32.59s  ⚡SPAN 주입 [d'=1.36s / d_lead=9.83s]: (tool result) Tickets confirmed. Two tickets for 'Inside Out 2' at Lot
    32.70s  user  발화 끝
    42.41s  agent 발화 끝
    43.00s  user  발화 시작: 고마워. 그건 됐고, 지금 날씨 어때?
    45.51s  <ret> 발화 (turn11 첫 프레임)
    45.82s  agent 발화 시작: <ret> 현재 기온은 이십사 점 오도, 습도는 육십팔퍼센트, 바람은 시속 삼 점 이킬로미터로 불고 있습니다
    45.83s  ⚡SPAN 주입 [d'=1.52s / d_lead=6.34s]: (tool result) It is 24.5°C, humidity 68%, wind 3.2 km/h.
    45.91s  user  발화 끝
    52.16s  agent 발화 끝
    53.00s  user  발화 시작: 주말에 부산 갈 건데, 부산 날씨는 어때?
    55.57s  <ret> 발화 (turn13 첫 프레임)
    55.81s  agent 발화 시작: <ret> 부산은 현재 기온이 이십육 점 일도, 습도는 칠십이퍼센트, 바람은 시속 사 점 팔킬로미터입니다. 
    55.81s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.80s]: (tool result) Busan: 26.1°C, humidity 72%, wind 4.8 km/h.
    55.96s  user  발화 끝
    64.61s  agent 발화 끝
