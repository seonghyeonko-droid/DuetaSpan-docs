# v3_rag_28_cs — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_28",
#     "name": "Robin",
#     "location": {
#       "city": "Paris",
#       "country": "France",
#       "timezone": "Europe/Paris (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "French",
#     "gender": "non-binary",
#     "age_range": "early 30s",
#     "language": "French"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-07",
#       "category": "pet",
#       "text": "User has a Siamese cat named Bella."
#     },
#     {
#       "date": "2026-04-28",
#       "category": "home",
#       "text": "User's home address is 354 Pine Court."
#     },
#     {
#       "date": "2026-01-14",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Mexican."
#     },
#     {
#       "date": "2025-10-15",
#       "category": "hobby",
#       "text": "User is into marathon training."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-28",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 워싱턴 주에 가보려고 하는데, 거기는 어때? | S2 시애틀, 뭐 그런 데. 마리화나 합법이야? | S3 그게… 생각보다 얼마 안 됐네. 다른 주는 어때? | S4 아니, 아니, 워싱턴이 괜찮아. 지금 시애틀 날씨는 어때?

     0.00s  user  발화 시작: 워싱턴 주에 가보려고 하는데, 거기는 어때?
     3.34s  agent 발화 시작: 워싱턴은 정말 예쁜 곳이고, 다양한 풍경이 있어. 열대 우림부터 산까지 볼 수 있지. 커피 문화랑 아이 티 
     3.34s  user  발화 끝
    17.25s  user  발화 시작: 응.
    17.25s  agent 발화 끝
    17.80s  user  발화 시작: 시애틀, 뭐 그런 데. 마리화나 합법이야?
    17.80s  user  발화 끝
    20.72s  <ret> 발화 (turn4 첫 프레임)
    21.14s  agent 발화 시작: <ret> 워싱턴 주에서는 이천십이 년 십이 월 여섯 일에, 오백이 이니셔티브를 통해 합법이 됐어. 꽤 큰 
    21.14s  user  발화 끝
    21.71s  ⚡SPAN 주입 [d'=0.99s / d_lead=10.01s]: Recreational marijuana use became legal in Washington state on Decembe
    31.16s  user  발화 시작: 그게… 생각보다 얼마 안 됐네. 다른 주는 어때?
    31.16s  agent 발화 끝
    35.61s  agent 발화 시작: 그 뒤로 다른 주들도 많이 따라 했어. 다른 주들을 알아볼까, 아니면 아직 워싱턴에 집중할래?
    35.61s  user  발화 끝
    43.40s  user  발화 시작: 음.
    43.40s  agent 발화 끝
    43.95s  user  발화 시작: 아니, 아니, 워싱턴이 괜찮아. 지금 시애틀 날씨는 어때?
    43.95s  user  발화 끝
    48.20s  <ret> 발화 (turn9 첫 프레임)
    48.40s  agent 발화 시작: <ret> 지금 시애틀 날씨는 섭씨 십팔 점 구도이고, 습도는 육십이 퍼센트, 바람은 시속 삼 점 일 킬로미
    48.40s  user  발화 끝
    49.20s  ⚡SPAN 주입 [d'=0.99s / d_lead=12.24s]: (tool result) Seattle, WA: 18.9°C, humidity 62%, wind 3.1 km/h, condit
    60.64s  agent 발화 끝
