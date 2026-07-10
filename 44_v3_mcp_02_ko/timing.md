# v3_mcp_02_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mcp_02",
#     "name": "수경",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "early 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-31",
#       "category": "hobby",
#       "text": "User is into rock climbing."
#     },
#     {
#       "date": "2026-01-05",
#       "category": "trip",
#       "text": "User is planning a trip to Vietnam in October."
#     },
#     {
#       "date": "2025-10-22",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-10-14",
#       "category": "allergy",
#       "text": "User is allergic to peanuts."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-24",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2025-07-18",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 어, 오늘 밤에 공포 영화 볼까 하는데, 시카고 뮤직 박스 극 | S2 고마워. 아, 근데 혹시 내일 날씨 어때? | S3 꽤 덥겠네. 그럼 알람 맞춰놔 줘. 내일 아침 일곱시에. | S4 아, 맞다. 그 메모 있었지. 잊고 있었네.

     0.00s  user  발화 시작: 어, 오늘 밤에 공포 영화 볼까 하는데, 시카고 뮤직 박스 극장에서 상영하는 거 있는지 찾아봐 줄래?
     5.10s  <ret> 발화 (turn1 첫 프레임)
     5.50s  agent 발화 시작: <ret> 시카고 뮤직 박스 극장에서는 지금 '유전'과 '겟 아웃' 두 편의 공포 영화를 상영하고 있습니다.
     5.50s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.48s]: (tool result) Title — domain: snippet
     5.70s  user  발화 끝
    11.90s  user  발화 시작: 오, '유전' 괜찮아 보이네. 그럼 그거 티켓 예매해 줘. 오늘 밤 여덟시 타임으로 두 장.
    11.98s  agent 발화 끝
    17.32s  <ret> 발화 (turn3 첫 프레임)
    17.72s  agent 발화 시작: <ret> 네, '유전' 오늘 밤 여덟시 타임으로 두 장 예매 완료되었습니다. 확인 번호는 칠 사 구 이 팔
    17.72s  ⚡SPAN 주입 [d'=1.76s / d_lead=7.23s]: (tool result) Confirmation ID: 74928a
    17.83s  user  발화 끝
    20.34s  user  발화 시작: 그래.
    20.84s  user  발화 끝
    24.95s  agent 발화 끝
    25.20s  user  발화 시작: 고마워. 아, 근데 혹시 내일 날씨 어때?
    27.66s  <ret> 발화 (turn6 첫 프레임)
    27.82s  agent 발화 시작: <ret> 내일 시카고 날씨는 최고 기온이 이십오 점 오도이고, 습도는 육십팔%, 바람은 시속 칠 점 이킬로
    27.82s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.57s]: (tool result) 25.5°C, humidity 68%, wind 7.2 km/h
    27.97s  user  발화 끝
    36.39s  agent 발화 끝
    37.50s  user  발화 시작: 꽤 덥겠네. 그럼 알람 맞춰놔 줘. 내일 아침 일곱시에.
    40.94s  <ret> 발화 (turn8 첫 프레임)
    41.02s  agent 발화 시작: <ret> 네, 내일 아침 일곱시에 알람을 설정했습니다.
    41.02s  ⚡SPAN 주입 [d'=1.92s / d_lead=2.96s]: (tool result) Alarm set for 7:00 AM
    41.25s  user  발화 끝
    43.98s  agent 발화 끝
    44.38s  user  발화 시작: 알람 맞춰줘서 고마워. 음… 혹시 지난번에 내가 뭐라고 메모해 둔 거 있어?
    49.09s  <ret> 발화 (turn10 첫 프레임)
    49.33s  agent 발화 시작: <ret> 네, 이천이십사년 칠월 십오일에 “내일 아침 일곱시에 알람 맞춰줘”라고 메모해 두셨습니다.
    49.33s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.49s]: [2024-07-15] 내일 아침 7시에 알람 맞춰줘.
    49.47s  user  발화 끝
    55.82s  agent 발화 끝
    56.55s  user  발화 시작: 아, 맞다. 그 메모 있었지. 잊고 있었네.
    59.46s  user  발화 끝
