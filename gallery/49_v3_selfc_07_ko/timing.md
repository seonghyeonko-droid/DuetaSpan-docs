# v3_selfc_07_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_selfc_07",
#     "name": "수람",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "early 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-03-27",
#       "category": "diet",
#       "text": "User is gluten-free."
#     },
#     {
#       "date": "2026-03-26",
#       "category": "trip",
#       "text": "User is planning a trip to Kyoto in March."
#     },
#     {
#       "date": "2026-02-20",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2025-11-07",
#       "category": "hobby",
#       "text": "User is into home fermentation."
#     },
#     {
#       "date": "2025-08-23",
#       "category": "work",
#       "text": "User works as a graduate student."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-27",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2025-10-27",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2025-08-13",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 기차표 좀 예매해 줘. 로스앤젤레스에서 샌프란시스코까지, 사월 | S2 …사월 육일로 해 줘. | S3 고마워. 이번 주 토요일 날씨 어때? | S4 응, 친구랑 영화 보려고 하는데, 괜찮은 영화 좀 찾아줘.

     0.00s  user  발화 시작: 기차표 좀 예매해 줘. 로스앤젤레스에서 샌프란시스코까지, 사월 오일로 두 장.
     5.36s  <ret> 발화 (turn1 첫 프레임)
     5.60s  agent 발화 시작: <ret> 네, 로스앤젤레스에서 샌프란시스코까지 사월 오일, 두 장 예매해 드렸습니다. 기차 번호는 칠백팔십
     5.60s  ⚡SPAN 주입 [d'=2.00s / d_lead=15.13s]: (tool result) {"train id": "789", "departure time": "08:00", "arrival 
     5.60s  user  발화 끝
    20.73s  user  발화 시작: 어.
    20.73s  agent 발화 끝
    21.29s  user  발화 시작: 음… 사월 오일이 아니라…
    21.29s  user  발화 끝
    23.53s  user  발화 시작: …사월 육일로 해 줘.
    23.53s  user  발화 끝
    25.45s  <ret> 발화 (turn5 첫 프레임)
    25.77s  agent 발화 시작: <ret> 로스앤젤레스에서 샌프란시스코까지 사월 육일, 두 장입니다. 기차 번호는 사백오십육이고, 열시에 출
    25.77s  ⚡SPAN 주입 [d'=2.00s / d_lead=13.45s]: (tool result) {"train id": "456", "departure time": "10:00", "arrival 
    25.77s  user  발화 끝
    39.22s  user  발화 시작: 진짜?
    39.22s  agent 발화 끝
    39.78s  agent 발화 시작: 혹시 다른 날짜나 시간으로 변경해 드릴까요?
    39.78s  user  발화 끝
    43.14s  user  발화 시작: 아니, 괜찮아. 그 기차표로 할게.
    43.14s  agent 발화 끝
    45.94s  agent 발화 시작: 다행입니다. 그럼 사월 육일 로스앤젤레스-샌프란시스코 기차표 두 장, 확인 번호 이 에프 삼 사 지 에이치로
    45.94s  user  발화 끝
    56.03s  user  발화 시작: 우와.
    56.03s  agent 발화 끝
    56.59s  user  발화 시작: 고마워. 이번 주 토요일 날씨 어때?
    56.59s  user  발화 끝
    59.87s  <ret> 발화 (turn12 첫 프레임)
    59.95s  agent 발화 시작: <ret> 이번 주 토요일, 칠월 십일일 날씨는 섭씨 이십오 점 오도이고, 습도는 육십팔퍼센트, 바람은 시속
    59.95s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.09s]: (tool result) "The weather on Saturday, July 11, 2026, will be 25.5°C,
    59.95s  user  발화 끝
    70.04s  user  발화 시작: 아, 그렇구나.
    70.04s  agent 발화 끝
    71.16s  agent 발화 시작: 날씨가 좋으면 야외 활동하기 좋겠네요. 혹시 다른 계획 있으신가요?
    71.16s  user  발화 끝
    76.20s  user  발화 시작: 응.
    76.20s  agent 발화 끝
    76.76s  user  발화 시작: 응, 친구랑 영화 보려고 하는데, 괜찮은 영화 좀 찾아줘.
    76.76s  user  발화 끝
    81.48s  <ret> 발화 (turn17 첫 프레임)
    81.80s  agent 발화 시작: <ret> 현재 '스카이바운드'라는 액션 영화가 좋은 평가를 받고 있습니다. 베라이어티닷컴에 따르면 시각적으
    81.80s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.28s]: (tool result) "The new action film 'Skybound' is currently playing at 
    81.80s  user  발화 끝
    89.09s  user  발화 시작: 스카이바운드? 재밌겠다.
    89.09s  agent 발화 끝
    90.21s  agent 발화 시작: 즐거운 시간 보내시길 바랍니다.
    90.21s  user  발화 끝
    92.45s  agent 발화 끝
