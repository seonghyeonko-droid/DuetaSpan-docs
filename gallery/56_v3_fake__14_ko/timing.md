# v3_fake__14_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_fake__14",
#     "name": "민람",
#     "location": {
#       "city": "Seoul",
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
#       "date": "2025-11-05",
#       "category": "hobby",
#       "text": "User is into birdwatching."
#     },
#     {
#       "date": "2025-10-27",
#       "category": "diet",
#       "text": "User is pescatarian."
#     },
#     {
#       "date": "2025-09-08",
#       "category": "home",
#       "text": "User's home address is 서울 용산구 이태원로 200."
#     },
#     {
#       "date": "2025-08-31",
#       "category": "pet",
#       "text": "User has a tabby cat named Luna."
#     },
#     {
#       "date": "2025-06-03",
#       "category": "allergy",
#       "text": "User is allergic to penicillin."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-11-22",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2025-09-06",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 그 노래, '조지아의 불 꺼진 밤'을 누가 썼는지 궁금해. | S2 음… 사실 요즘 날씨가 제일 궁금하네요. | S3 오, 꽤 덥겠네요. | S4 아, 그렇군요.

     0.00s  user  발화 시작: 그 노래, '조지아의 불 꺼진 밤'을 누가 썼는지 궁금해.
     0.00s  <ret> 발화 (turn1 첫 프레임)
     0.08s  agent 발화 시작: <ret> 그 노래를 작사한 분은 바비 러셀 님입니다. 꽤 유명한 노래죠.
     0.08s  ⚡SPAN 주입 [d'=0.09s / d_lead=0.09s]: Bobby Russell.
     0.08s  user  발화 끝
     0.12s  <ret> 발화 (turn8 첫 프레임)
     0.18s  user  발화 시작: 아, 네.
     0.18s  agent 발화 끝
     0.20s  agent 발화 시작: 혹시 다른 노래에 대해서도 궁금하신 점이 있으신가요?
     0.20s  user  발화 끝
     0.26s  agent 발화 시작: 지금은 다른 질문에 답변드릴 수 있습니다.
     0.26s  agent 발화 끝
     0.32s  user  발화 시작: 네.
     0.32s  agent 발화 끝
     0.33s  agent 발화 시작: 어떤 종류의 음악을 좋아하시는지 여쭤봐도 될까요?
     0.33s  user  발화 끝
     0.39s  user  발화 시작: 음… 사실 요즘 날씨가 제일 궁금하네요.
     0.39s  agent 발화 끝
     0.44s  agent 발화 시작: <ret> 현재 기온은 이십삼도이고, 습도는 칠십사퍼센트, 바람은 시속 오 점 오킬로미터입니다.
     0.44s  ⚡SPAN 주입 [d'=0.09s / d_lead=0.09s]: (tool result) Current conditions: 23.0°C, humidity 74%, wind 5.5 km/h.
     0.44s  user  발화 끝
     0.54s  user  발화 시작: 오, 꽤 덥겠네요.
     0.54s  agent 발화 끝
     0.57s  agent 발화 시작: 네, 오늘 하루는 꽤 더울 것으로 예상됩니다. 자외선 차단제를 꼭 챙기세요.
     0.57s  user  발화 끝
     0.59s  <ret> 발화 (turn13 첫 프레임)
     0.67s  user  발화 시작: 아.
     0.67s  agent 발화 끝
     0.68s  user  발화 시작: 알겠습니다. 혹시 이번 주 토요일에 비가 올까요?
     0.68s  user  발화 끝
     0.75s  agent 발화 시작: <ret> 토요일인 칠월 십이일에는 최고 기온이 이십오도로 예상되고, 비가 올 확률은 육십퍼센트입니다. 바람
     0.75s  ⚡SPAN 주입 [d'=0.14s / d_lead=0.14s]: (tool result) Forecast for July 12, 2026: 25.0°C, chance of rain 60%, 
     0.75s  user  발화 끝
     0.89s  user  발화 시작: 아, 그렇군요.
     0.89s  agent 발화 끝
     0.91s  agent 발화 시작: 날씨에 대한 정보가 도움이 되셨다니 기쁩니다. 혹시 다른 계획이 있으신가요?
     0.91s  user  발화 끝
     1.00s  agent 발화 끝
