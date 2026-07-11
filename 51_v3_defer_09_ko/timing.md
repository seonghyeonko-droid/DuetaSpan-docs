# v3_defer_09_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_defer_09",
#     "name": "예아",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "late 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-21",
#       "category": "allergy",
#       "text": "User is allergic to penicillin."
#     },
#     {
#       "date": "2026-01-12",
#       "category": "hobby",
#       "text": "User is into birdwatching."
#     },
#     {
#       "date": "2026-01-03",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-10-10",
#       "category": "home",
#       "text": "User's home address is 부산 해운대구 해운대로 570."
#     },
#     {
#       "date": "2025-10-06",
#       "category": "work",
#       "text": "User works as a software engineer."
#     },
#     {
#       "date": "2025-09-07",
#       "category": "diet",
#       "text": "User is vegetarian."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-07",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2025-11-25",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2025-08-20",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 오늘 오후 세시에 캘리포니아 쿠퍼티노의 원 인피니트… | S2 …루프까지 세 명 태워갈 일반 차량 불러줘. | S3 지금 바로 출발하는 건 안 돼? | S4 …혹시 지금 근처에 다른 택시 서비스는 어때?

     0.00s  user  발화 시작: 오늘 오후 세시에 캘리포니아 쿠퍼티노의 원 인피니트…
     0.00s  <ret> 발화 (turn2 첫 프레임)
     0.07s  user  발화 시작: …루프까지 세 명 태워갈 일반 차량 불러줘.
     0.07s  user  발화 끝
     0.15s  agent 발화 시작: <ret> 네, 쿠퍼티노 원 인피니트 루프까지 일반 차량을 예약해 드렸습니다. 예약 번호는 알 에스 이 공 
     0.15s  ⚡SPAN 주입 [d'=0.31s / d_lead=0.31s]: (tool result) {"ride id": "RS202607101500A", "status": "scheduled", "e
     0.15s  user  발화 끝
     0.45s  user  발화 시작: 지금 바로 출발하는 건 안 돼?
     0.45s  agent 발화 끝
     0.52s  agent 발화 시작: 지금 바로 출발하는 차량은 없습니다. 예약된 차량이 오후 세시에 도착 예정입니다.
     0.52s  user  발화 끝
     0.63s  user  발화 시작: 정말요?
     0.63s  agent 발화 끝
     0.64s  agent 발화 시작: 혹시 다른 시간으로 변경해 드릴까요? 아니면 다른 종류의 차량을 알아볼까요—
     0.64s  user  발화 끝
     0.74s  <ret> 발화 (turn8 첫 프레임)
     0.75s  user  발화 시작: …혹시 지금 근처에 다른 택시 서비스는 어때?
     0.75s  agent 발화 끝
     0.82s  agent 발화 시작: <ret> 주변에 FastCab 택시 서비스가 있으며, 예상 대기 시간은 오분이고 예상 요금은 칠십달러입니다
     0.82s  ⚡SPAN 주입 [d'=0.18s / d_lead=0.18s]: {"provider": "FastCab", "estimated_wait_time": "5 minutes", "estimated
     0.82s  user  발화 끝
     1.00s  agent 발화 끝
