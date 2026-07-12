# v3_noinfo_23_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_noinfo_23",
#     "name": "재아",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "40s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-21",
#       "category": "trip",
#       "text": "User is planning a trip to Switzerland in March."
#     },
#     {
#       "date": "2026-01-10",
#       "category": "hobby",
#       "text": "User is into rock climbing."
#     },
#     {
#       "date": "2025-09-04",
#       "category": "home",
#       "text": "User's home address is 경기 성남시 분당구 판교로 235."
#     },
#     {
#       "date": "2025-07-10",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-07-31",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 혹시 김민지 씨 연락처 알 수 있을까요? | S2 음… 그렇군요. | S3 그럼, 이번 주 토요일 날씨는 어때요? | S4 아, 그렇군요.

     0.00s  user  발화 시작: 혹시 김민지 씨 연락처 알 수 있을까요?
     2.97s  <ret> 발화 (turn1 첫 프레임)
     3.37s  agent 발화 시작: <ret> 죄송합니다. 김민지 씨의 연락처는 찾을 수 없었습니다. 개인 정보 보호 때문에 제가 접근할 수 없
     3.37s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.68s]: (no information found)
     3.37s  user  발화 끝
    12.05s  user  발화 시작: 네네.
    12.05s  agent 발화 끝
    12.53s  user  발화 시작: 음… 그렇군요.
    12.53s  user  발화 끝
    13.50s  agent 발화 시작: 혹시 다른 분의 정보를 찾아드릴까요?
    13.50s  user  발화 끝
    15.91s  user  발화 시작: 그럼, 이번 주 토요일 날씨는 어때요?
    15.91s  agent 발화 끝
    18.56s  <ret> 발화 (turn6 첫 프레임)
    18.80s  agent 발화 시작: <ret> 이번 주 토요일인 칠월 십일일 날씨는 이십삼도, 습도는 칠십사퍼센트, 바람은 시속 오 점 오킬로미
    18.80s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.23s]: (tool result) 23.0°C, humidity 74%, wind 5.5 km/h
    18.80s  user  발화 끝
    26.03s  user  발화 시작: 진짜요?
    26.03s  agent 발화 끝
    26.51s  user  발화 시작: 아, 그렇군요.
    26.51s  user  발화 끝
    27.48s  agent 발화 시작: 맑은 날씨에 좋은 계획 세우시길 바랍니다.
    27.48s  user  발화 끝
    30.37s  agent 발화 끝
