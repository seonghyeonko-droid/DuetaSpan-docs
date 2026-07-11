# v3_fake__13_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_fake__13",
#     "name": "예영",
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
#       "date": "2026-06-18",
#       "category": "hobby",
#       "text": "User is into rock climbing."
#     },
#     {
#       "date": "2026-01-16",
#       "category": "pet",
#       "text": "User has a Poodle named Coco."
#     },
#     {
#       "date": "2025-10-10",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Mexican."
#     },
#     {
#       "date": "2025-09-28",
#       "category": "trip",
#       "text": "User is planning a trip to Switzerland in May."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-10-09",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2025-07-22",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 혹시 '한 솔로' 영화 만드는 데 얼마나 들었는지 알아요? | S2 아, 아니요. 그냥 궁금해서요. 그럼… 이번 주 금요일 날씨는 | S3 그건… 됐어요. 혹시 칠월… | S4 아니요, 괜찮아요. 고마워요.

     0.00s  user  발화 시작: 혹시 '한 솔로' 영화 만드는 데 얼마나 들었는지 알아요?
     3.78s  <ret> 발화 (turn1 첫 프레임)
     3.93s  agent 발화 시작: <ret> '한 솔로' 영화 제작에는 최소 이억 오천만 달러가 들었다고 합니다. 영화 제작비가 꽤 많이 들었
     3.94s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.76s]: at least $250 million.
     3.97s  user  발화 끝
    10.69s  agent 발화 끝
    10.80s  user  발화 시작: 음…
    11.19s  user  발화 끝
    11.27s  <ret> 발화 (turn3 첫 프레임)
    11.66s  agent 발화 시작: <ret> 서울에 대해 궁금하신 점이 있으신가요? 이천이십사년 기준으로 서울의 인구는 구백육십육만 일천 육백
    11.99s  ⚡SPAN 주입 [d'=0.72s / d_lead=2.48s]: The population of Seoul is 9,661,601 as of 2024.
    24.25s  user  발화 시작: 아, 아니요. 그냥 궁금해서요. 그럼… 이번 주 금요일 날씨는 어때요?
    24.55s  agent 발화 끝
    28.93s  <ret> 발화 (turn5 첫 프레임)
    29.25s  agent 발화 시작: <ret> 이번 주 금요일 서울의 날씨는 섭씨 이십삼도, 습도는 칠십사퍼센트, 바람은 시속 오 점 오킬로미터
    29.25s  ⚡SPAN 주입 [d'=1.20s / d_lead=7.41s]: (tool result) 23.0°C, humidity 74%, wind 5.5 km/h
    29.44s  user  발화 끝
    36.66s  agent 발화 끝
    36.86s  user  발화 시작: 오, 좋네요.
    37.67s  <ret> 발화 (turn7 첫 프레임)
    37.83s  agent 발화 시작: <ret> 날씨가 좋으면 야외 활동하기에 좋겠네요.
    37.83s  ⚡SPAN 주입(IRRELEVANT) [d'=1.28s / d_lead=2.77s]: The average lifespan of a goldfish is 5 to 10 years.
    37.96s  user  발화 끝
    40.60s  agent 발화 끝
    40.66s  agent 발화 시작: 금붕어 수명에 대한 정보가 들어왔네요.
    43.25s  agent 발화 끝
    43.51s  user  발화 시작: 그건… 됐어요. 혹시 칠월…
    46.31s  user  발화 끝
    47.90s  user  발화 시작: …십오일에 약속 잡을 수 있어요?
    49.77s  <ret> 발화 (turn11 첫 프레임)
    49.98s  user  발화 끝
    50.01s  agent 발화 시작: <ret> 칠월 십오일 오후 세시에 약속이 확정되었습니다. 확인 번호는 팔 구 엑스 제트 이 삼입니다. 혹시
    50.01s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.94s]: (tool result) Appointment confirmed for July 15, 2026 at 3:00 PM. Conf
    52.82s  user  발화 시작: 진짜?
    53.45s  user  발화 끝
    58.95s  agent 발화 끝
    59.38s  user  발화 시작: 아니요, 괜찮아요. 고마워요.
    61.43s  agent 발화 시작: 천만에요. 언제든지 편하게 찾아주세요. 드로라로는 항상 여러분의 재정 관리를 돕겠습니다.
    61.65s  user  발화 끝
    67.36s  agent 발화 끝
