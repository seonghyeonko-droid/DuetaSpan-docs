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
     0.00s  <ret> 발화 (turn1 첫 프레임)
     0.00s  <ret> 발화 (turn3 첫 프레임)
     0.00s  <ret> 발화 (turn5 첫 프레임)
     0.04s  agent 발화 시작: <ret> 알람이 오후 열두시 십오 분으로 설정되었어요. 확인 번호는 팔 구 엑스 제트 사 이입니다.
     0.04s  ⚡SPAN 주입 [d'=0.10s / d_lead=0.10s]: (tool result) Alarm set for 12:15 PM. Confirmation ID: 89xz42.
     0.04s  user  발화 끝
     0.14s  user  발화 시작: 음… 내일 아침 여섯 시로 바꿔 줘.
     0.14s  agent 발화 끝
     0.19s  agent 발화 시작: <ret> 알람을 내일 아침 여섯 시로 변경했어요. 확인 번호는 이 칠 에이 비 구 일입니다.
     0.19s  ⚡SPAN 주입 [d'=0.10s / d_lead=0.10s]: (tool result) Alarm set for 6:00 AM. Confirmation ID: 27ab91.
     0.19s  user  발화 끝
     0.23s  <ret> 발화 (turn9 첫 프레임)
     0.29s  user  발화 시작: 이번 주 토요일에 갈 영화 있나 찾아 봐 줘.
     0.29s  agent 발화 끝
     0.35s  agent 발화 시작: <ret> 이번 주 토요일, 칠월 십이일에 롯데월드타워에서 '인사이드 아웃 이'가 상영돼요. 저녁 일곱시 삼
     0.35s  ⚡SPAN 주입 [d'=0.09s / d_lead=0.09s]: (tool result) Showing 'Inside Out 2' at 7:30 PM, Lotte Cinema World To
     0.35s  user  발화 끝
     0.44s  user  발화 시작: 맞아요.
     0.44s  agent 발화 끝
     0.45s  agent 발화 시작: 혹시 다른 영화나 시간을 원하시면 말씀해 주세요—
     0.45s  user  발화 끝
     0.50s  user  발화 시작: … 그 영화 예매해 줘. 두 장.
     0.50s  agent 발화 끝
     0.55s  agent 발화 시작: <ret> '인사이드 아웃 이' 두 장, 롯데월드타워 저녁 일곱시 삼십분 상영으로 예매 완료되었습니다. 확인
     0.55s  ⚡SPAN 주입 [d'=0.14s / d_lead=0.14s]: (tool result) Tickets confirmed. Two tickets for 'Inside Out 2' at Lot
     0.55s  user  발화 끝
     0.65s  <ret> 발화 (turn11 첫 프레임)
     0.69s  user  발화 시작: 고마워. 그건 됐고, 지금 날씨 어때?
     0.69s  agent 발화 끝
     0.72s  <ret> 발화 (turn13 첫 프레임)
     0.73s  agent 발화 시작: <ret> 현재 기온은 이십사 점 오도, 습도는 육십팔퍼센트, 바람은 시속 삼 점 이킬로미터로 불고 있습니다
     0.73s  ⚡SPAN 주입 [d'=0.10s / d_lead=0.10s]: (tool result) It is 24.5°C, humidity 68%, wind 3.2 km/h.
     0.73s  user  발화 끝
     0.83s  user  발화 시작: 주말에 부산 갈 건데, 부산 날씨는 어때?
     0.83s  agent 발화 끝
     0.88s  agent 발화 시작: <ret> 부산은 현재 기온이 이십육 점 일도, 습도는 칠십이퍼센트, 바람은 시속 사 점 팔킬로미터입니다. 
     0.88s  ⚡SPAN 주입 [d'=0.12s / d_lead=0.12s]: (tool result) Busan: 26.1°C, humidity 72%, wind 4.8 km/h.
     0.88s  user  발화 끝
     1.00s  agent 발화 끝
