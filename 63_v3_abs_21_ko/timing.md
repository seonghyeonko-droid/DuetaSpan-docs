# v3_abs_21_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_abs_21",
#     "name": "도형",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "late 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-11",
#       "category": "trip",
#       "text": "User is planning a trip to Vietnam in May."
#     },
#     {
#       "date": "2026-05-23",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     },
#     {
#       "date": "2026-04-14",
#       "category": "allergy",
#       "text": "User is allergic to penicillin."
#     },
#     {
#       "date": "2026-03-07",
#       "category": "pet",
#       "text": "User has a Beagle named Rusty."
#     },
#     {
#       "date": "2026-02-20",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is sushi."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-02-02",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 천구백일년 인구 조사에 따르면 호주에서 장로교 신자라고 주장하 | S2 아, 그렇군요. 그럼 호주에서 가장 흔한 종교는 뭐였어요? | S3 음, 꽤 차이가 나네요. | S4 네, 이번 주 토요일 서울 날씨는 어때요?

     0.00s  user  발화 시작: 천구백일년 인구 조사에 따르면 호주에서 장로교 신자라고 주장하는 사람이 몇 명이나 되나요?
     5.40s  <ret> 발화 (turn1 첫 프레임)
     5.63s  agent 발화 시작: <ret> 죄송합니다. 천구백일년 호주 인구 조사에서 장로교 신자 수를 찾을 수 없었습니다.
     5.63s  user  발화 끝
     6.54s  ⚡SPAN 주입 [d'=1.14s / d_lead=5.16s]: (no information found)
    10.79s  user  발화 시작: 아, 그렇군요. 그럼 호주에서 가장 흔한 종교는 뭐였어요?
    10.79s  agent 발화 끝
    13.95s  <ret> 발화 (turn3 첫 프레임)
    14.53s  ⚡SPAN 주입 [d'=0.58s / d_lead=7.04s]: In 1901, the most common religion in Australia was Protestantism, with
    14.55s  agent 발화 시작: <ret> 천구백일년 호주에서 가장 흔한 종교는 개신교였는데, 인구의 칠십사퍼센트가 그렇게 밝혔고, 그 다음
    14.55s  user  발화 끝
    21.59s  user  발화 시작: 진짜?
    21.59s  agent 발화 끝
    22.06s  user  발화 시작: 음, 꽤 차이가 나네요.
    22.06s  user  발화 끝
    23.93s  agent 발화 시작: 네.
    23.93s  user  발화 끝
    24.40s  agent 발화 시작: 개신교가 압도적으로 많았던 시대였던 것 같아요.
    24.40s  agent 발화 끝
    27.22s  user  발화 시작: 그래.
    27.22s  agent 발화 끝
    27.69s  user  발화 시작: 네, 이번 주 토요일 서울 날씨는 어때요?
    27.69s  user  발화 끝
    30.88s  <ret> 발화 (turn10 첫 프레임)
    30.97s  agent 발화 시작: <ret> 이번 주 토요일 서울 날씨는 이십팔 점 오도, 습도 육십오퍼센트, 풍속 사 점 이미터, 부분적으로
    30.97s  user  발화 끝
    31.67s  ⚡SPAN 주입 [d'=0.79s / d_lead=8.45s]: (tool result) {"temperature": 28.5, "humidity": 65, "wind speed": 4.2,
    39.42s  agent 발화 끝
