# v3_rag_28_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_28",
#     "name": "하율",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "early 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-01-14",
#       "category": "pet",
#       "text": "User has a tabby cat named Luna."
#     },
#     {
#       "date": "2026-01-07",
#       "category": "home",
#       "text": "User's home address is 부산 해운대구 우동 123-4."
#     },
#     {
#       "date": "2025-11-15",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Italian."
#     },
#     {
#       "date": "2025-10-15",
#       "category": "hobby",
#       "text": "User is into alpine wildflower photography."
#     },
#     {
#       "date": "2025-09-04",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2025-08-05",
#       "category": "allergy",
#       "text": "User is allergic to cat dander."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-01",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2025-09-15",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 있잖아, 워싱턴에서 대마초 합법화된 거 언제야? | S2 잠깐만, 그게 언제라고? 다시 한번 말해줄래? | S3 음, 그건 좀 오래됐네. 지금 시애틀 날씨는 어때? | S4 꽤 덥네. 여행 계획 세워야겠다.

     0.00s  user  발화 시작: 있잖아, 워싱턴에서 대마초 합법화된 거 언제야?
     3.16s  <ret> 발화 (turn1 첫 프레임)
     3.41s  agent 발화 시작: <ret> 워싱턴 주에서 기호용 대마초는 이천십이년 십이월 육일에 합법화되었어요. 이니셔티브 오백이가 통과되
     3.41s  user  발화 끝
     3.46s  ⚡SPAN 주입 [d'=0.30s / d_lead=7.39s]: Recreational marijuana use became legal in Washington State on Decembe
    10.80s  user  발화 시작: 잠깐만, 그게 언제라고? 다시 한번 말해줄래?
    10.80s  agent 발화 끝
    14.22s  agent 발화 시작: 이천십이년 십이월 육일입니다.
    14.22s  user  발화 끝
    15.92s  user  발화 시작: 음, 그건 좀 오래됐네. 지금 시애틀 날씨는 어때?
    15.92s  agent 발화 끝
    20.41s  <ret> 발화 (turn5 첫 프레임)
    20.47s  agent 발화 시작: <ret> 시애틀은 현재 이십삼 점 구도이고, 습도는 육십팔퍼센트, 바람은 시속 칠 점 이킬로미터, 구름이 
    20.47s  user  발화 끝
    20.71s  ⚡SPAN 주입 [d'=0.30s / d_lead=9.10s]: (tool result) Seattle, WA: 23.9°C, humidity 68%, wind 7.2 km/h, condit
    29.57s  user  발화 시작: 어.
    29.57s  agent 발화 끝
    30.14s  user  발화 시작: 꽤 덥네. 여행 계획 세워야겠다.
    30.14s  user  발화 끝
    32.98s  user  발화 끝
