# v3_noinfo_23_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_noinfo_23",
#     "name": "은린",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "late 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-01-30",
#       "category": "work",
#       "text": "User works as a marketing manager."
#     },
#     {
#       "date": "2026-01-24",
#       "category": "allergy",
#       "text": "User is allergic to pollen."
#     },
#     {
#       "date": "2025-07-15",
#       "category": "pet",
#       "text": "User has a Corgi named Mochi."
#     },
#     {
#       "date": "2025-07-09",
#       "category": "diet",
#       "text": "User is vegetarian."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-11",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2026-01-21",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2025-10-15",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 엄마 친구분 연락처 알 수 있어? | S2 아, 맞다. 다음 주 화요일에 중요한 발표가 있는데, 발표 연 | S3 혹시 지난달에 내가 “긍정적인… | S4 그럼, 오늘 저녁 일곱시에 요가 수업 예약해 줄 수 있어?

     0.00s  user  발화 시작: 엄마 친구분 연락처 알 수 있어?
     1.42s  <ret> 발화 (turn1 첫 프레임)
     1.81s  agent 발화 시작: <ret> 죄송해요, 개인 정보라서 찾을 수 없어요. 다른 걸 도와드릴까요?
     1.82s  ⚡SPAN 주입 [d'=1.68s / d_lead=4.31s]: (no information found)
     1.99s  user  발화 끝
     4.45s  user  발화 시작: 아.
     5.22s  user  발화 끝
     6.12s  agent 발화 끝
     6.21s  user  발화 시작: 그럼, 이번 주 토요일에 서울 날씨는 어때?
     8.55s  <ret> 발화 (turn4 첫 프레임)
     8.79s  agent 발화 시작: <ret> 이번 주 토요일 서울 날씨는 이십삼도, 습도 칠십사%, 바람은 초속 오 점 오미터 정도예요.
     8.79s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.00s]: (tool result) 23.0°C, humidity 74%, wind 5.5 km/h
     8.98s  user  발화 끝
    12.20s  user  발화 시작: 응.
    12.60s  user  발화 끝
    15.78s  agent 발화 끝
    16.99s  user  발화 시작: 아, 맞다. 다음 주 화요일에 중요한 발표가 있는데, 발표 연습 좀 도와줄 수 있어?
    22.59s  agent 발화 시작: 발표 연습은 언제든 도와드릴 수 있어요. 어떤 부분부터 시작할까요?
    22.78s  user  발화 끝
    27.19s  agent 발화 시작: 발표 내용을 구성하는 것부터 시작해서—
    27.41s  agent 발화 끝
    29.23s  user  발화 시작: … 아니, 발표 내용 말고, 긴장 푸는 방법 좀 알려줘.
    29.77s  agent 발화 끝
    33.91s  agent 발화 시작: 아, 긴장 완화 방법을 원하시는군요. 심호흡을 하거나, 긍정적인 생각을 하는 게 도움이 될 거예요.
    33.95s  user  발화 끝
    40.40s  <ret> 발화 (turn11 첫 프레임)
    40.53s  agent 발화 끝
    40.56s  agent 발화 시작: <ret> 발표 전에 가벼운 스트레칭을 하는 것도 긴장을 푸는 좋은 방법이 될 수 있어요.
    40.56s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.90s]: A study by the American Psychological Association found that deep brea
    45.46s  agent 발화 끝
    45.59s  agent 발화 시작: 미국 심리학회 연구에 따르면, 심호흡 운동은 발표 전 불안 수준을 크게 낮추는 데 도움이 된다고 해요. 긴장
    55.64s  agent 발화 끝
    57.22s  user  발화 시작: 혹시 지난달에 내가 “긍정적인…
    59.42s  user  발화 끝
    60.94s  user  발화 시작: …마음가짐”이라고 메모한 적 있어?
    62.67s  <ret> 발화 (turn15 첫 프레임)
    62.90s  agent 발화 시작: <ret> 네, 이천이십육년 칠월 삼일에 “긍정적인 마음가짐”이라고 메모하신 내용이 있어요.
    62.91s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.60s]: [2026-07-03] 긍정적인 마음가짐
    63.02s  user  발화 끝
    68.50s  agent 발화 끝
    68.61s  user  발화 시작: 그럼, 오늘 저녁 일곱시에 요가 수업 예약해 줄 수 있어?
    71.48s  <ret> 발화 (turn17 첫 프레임)
    71.87s  agent 발화 시작: <ret> 네, 오늘 저녁 일곱시에 요가 수업 예약이 완료되었어요. 확인 번호는 구 팔 칠 육 오 사입니다.
    71.88s  ⚡SPAN 주입 [d'=1.92s / d_lead=7.23s]: (tool result) Appointment booked for yoga at 19:00 today. Confirmation
    72.12s  user  발화 끝
    79.05s  user  발화 시작: 알람 좀 맞춰줘. 내일 아침 여섯시에.
    79.10s  agent 발화 끝
    82.10s  user  발화 끝
    82.13s  <ret> 발화 (turn19 첫 프레임)
    82.36s  agent 발화 시작: <ret> 네, 내일 아침 여섯시에 알람을 설정했어요.
    82.37s  ⚡SPAN 주입 [d'=1.04s / d_lead=3.04s]: (tool result) Alarm set for 06:00 tomorrow.
    85.41s  agent 발화 끝
