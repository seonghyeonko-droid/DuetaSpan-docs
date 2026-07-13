# v3_chain_06_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_chain_06",
#     "name": "채린",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "50s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-18",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Ethiopian."
#     },
#     {
#       "date": "2026-02-12",
#       "category": "pet",
#       "text": "User has a Beagle named Rusty."
#     },
#     {
#       "date": "2025-12-22",
#       "category": "allergy",
#       "text": "User is allergic to shellfish."
#     },
#     {
#       "date": "2025-12-18",
#       "category": "diet",
#       "text": "User is vegetarian."
#     },
#     {
#       "date": "2025-12-10",
#       "category": "hobby",
#       "text": "User is into alpine wildflower photography."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-27",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2026-01-24",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 오늘 날씨 어때? | S2 이번 주 토요일에 영화 볼까 하는데… | S3 …근처 영화관 찾아줘. | S4 씨 지 브이 해운대 네시 삼십분 티켓 예매해 줘.

     0.00s  user  발화 시작: 오늘 날씨 어때?
     1.40s  <ret> 발화 (turn1 첫 프레임)
     1.57s  agent 발화 시작: <ret> 부산 날씨는 현재 이십육 점 칠도이고, 습도는 칠십이퍼센트, 바람은 시속 삼 점 일킬로미터입니다.
     1.57s  user  발화 끝
     2.62s  ⚡SPAN 주입 [d'=1.23s / d_lead=6.79s]: The weather in Busan is 26.7°C, humidity 72%, wind 3.1 km/h.
     8.36s  user  발화 시작: 어.
     8.36s  agent 발화 끝
     8.88s  user  발화 시작: 그럼 내일 모레 서울 날씨는?
     8.88s  user  발화 끝
    11.36s  <ret> 발화 (turn4 첫 프레임)
    11.50s  agent 발화 시작: <ret> 내일 모레, 칠월 십이일 서울 날씨는 이십팔 점 이도이고, 습도는 육십팔퍼센트, 바람은 시속 사 
    11.50s  user  발화 끝
    11.83s  ⚡SPAN 주입 [d'=0.47s / d_lead=8.88s]: The weather in Seoul on July 12, 2026 is 28.2°C, humidity 68%, wind 4.
    20.38s  user  발화 시작: 이번 주 토요일에 영화 볼까 하는데…
    20.38s  agent 발화 끝
    23.51s  user  발화 시작: …근처 영화관 찾아줘.
    23.51s  user  발화 끝
    25.01s  <ret> 발화 (turn7 첫 프레임)
    25.08s  agent 발화 시작: <ret> 씨 지 브이 해운대에서는 '인사이드 아웃 이'를 오후 두시, 네시 삼십분, 일곱시에 상영하고요, 
    25.08s  user  발화 끝
    25.82s  ⚡SPAN 주입 [d'=0.81s / d_lead=14.63s]: (tool result) CGV Busan Haeundae: "Inside Out 2", 14:00, 16:30, 19:00.
    39.71s  user  발화 시작: 응.
    39.71s  agent 발화 끝
    40.23s  user  발화 시작: 씨 지 브이 해운대 네시 삼십분 티켓 예매해 줘.
    40.23s  user  발화 끝
    44.61s  <ret> 발화 (turn10 첫 프레임)
    44.94s  agent 발화 시작: <ret> 씨 지 브이 해운대 '인사이드 아웃 이' 오후 네시 삼십분, 성인 두명 예매가 완료되었습니다. 확
    44.94s  user  발화 끝
    45.32s  ⚡SPAN 주입 [d'=0.70s / d_lead=11.50s]: (tool result) Booking confirmed for "Inside Out 2" at CGV Busan Haeund
    56.43s  agent 발화 끝
