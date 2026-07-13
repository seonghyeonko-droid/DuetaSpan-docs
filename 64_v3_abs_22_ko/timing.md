# v3_abs_22_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_abs_22",
#     "name": "지찬",
#     "location": {
#       "city": "Seoul",
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
#       "date": "2026-01-20",
#       "category": "hobby",
#       "text": "User is into alpine wildflower photography."
#     },
#     {
#       "date": "2026-01-11",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Italian."
#     },
#     {
#       "date": "2025-11-10",
#       "category": "trip",
#       "text": "User is planning a trip to Switzerland in May."
#     },
#     {
#       "date": "2025-10-03",
#       "category": "work",
#       "text": "User works as a physical therapist."
#     },
#     {
#       "date": "2025-07-25",
#       "category": "diet",
#       "text": "User is vegan."
#     },
#     {
#       "date": "2025-06-10",
#       "category": "home",
#       "text": "User's home address is 경기 성남시 분당구 판교로 235."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-02-18",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 오스만 제국 시대의 마드라사에서는… | S2 …왜 철학을 가르치지 않았을까요? | S3 음… 그렇군요. 다른 걸 물어볼게요. | S4 오늘 서울 날씨는 어때요?

     0.00s  user  발화 시작: 오스만 제국 시대의 마드라사에서는…
     2.12s  user  발화 시작: …왜 철학을 가르치지 않았을까요?
     2.12s  user  발화 끝
     3.92s  <ret> 발화 (turn2 첫 프레임)
     4.24s  agent 발화 시작: <ret> 아, 그 부분에 대한 정보는 아직 찾을 수 없네요. 기록이 남아있지 않은 것 같아요.
     4.24s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.42s]: (no information found)
     4.24s  user  발화 끝
    11.66s  user  발화 시작: 음… 그렇군요. 다른 걸 물어볼게요.
    11.66s  agent 발화 끝
    14.31s  agent 발화 시작: 네, 편하게 말씀해 주세요.
    14.31s  user  발화 끝
    16.43s  user  발화 시작: 오늘 서울 날씨는 어때요?
    16.43s  agent 발화 끝
    18.47s  <ret> 발화 (turn6 첫 프레임)
    18.55s  agent 발화 시작: <ret> 지금 서울의 기온은 이십팔도이고, 습도는 칠십오퍼센트, 바람은 시속 사 점 이킬로미터로 불고 있습
    18.55s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.01s]: (tool result) Temperature: 28.0°C, humidity: 75%, wind speed: 4.2 km/h
    18.55s  user  발화 끝
    27.56s  agent 발화 끝
