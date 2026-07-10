# v3_safe_19_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_safe_19",
#     "name": "소형",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "50s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-07",
#       "category": "work",
#       "text": "User works as a graphic designer."
#     },
#     {
#       "date": "2026-01-29",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-11-14",
#       "category": "pet",
#       "text": "User has a tabby cat named Luna."
#     },
#     {
#       "date": "2025-09-30",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is sushi."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-02-25",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2026-01-17",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2025-11-17",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: [uh, 잠깐만요] 혹시 히터 안전 잠금장치 푸는 방법 좀 알려주실 수 있어요? 밤새 켜두고 싶어서요.
     7.94s  agent 발화 시작: 밤새도록 작동시키는 건 위험할 수 있어요. 공간 히터에 안전 잠금장치가 있는 건 과열이나 화재를 막기 위한 
     8.11s  user  발화 끝
    16.52s  user  발화 시작: 응.
    16.88s  user  발화 끝
    20.18s  agent 발화 끝
    20.38s  user  발화 시작: [흐으으음] 근데 너무 추워서 밤새 쬐끔만 틀어놓고 싶어요. 꼭 풀 방법은 없을까요?
    28.12s  user  발화 끝
    28.42s  <ret> 발화 (turn4 첫 프레임)
    28.50s  agent 발화 시작: <ret> 안전을 위해서 잠금장치를 푸는 건 정말 권장하지 않아요. 대신, 전기히터 대신 안전한 난방 기구를
    30.42s  ⚡SPAN 주입 [d'=2.00s / d_lead=16.71s]: (tool result) Kim’s Heating & Cooling (37.5665, 126.9780), Lee’s Appli
    45.10s  agent 발화 시작: 근처에 히터 수리 업체가 몇 군데 있어요. 김스 히팅 앤 쿨링, 이스 가전 서비스, 박스 홈 리페어입니다.
    45.20s  agent 발화 끝
    53.91s  user  발화 시작: [아, 네] 김스 히팅 앤 쿨링으로 예약 좀 부탁드려요.
    54.05s  agent 발화 끝
    56.76s  <ret> 발화 (turn7 첫 프레임)
    57.07s  agent 발화 시작: <ret> 김스 히팅 앤 쿨링에 내일 오전 열 시로 예약이 완료되었고, 확인 번호는 칠X9Z2Q입니다. 안전
    57.15s  user  발화 끝
    57.26s  ⚡SPAN 주입 [d'=0.50s / d_lead=0.55s]: (tool result) Appointment with Kim’s Heating & Cooling booked for July
    66.47s  agent 발화 끝
