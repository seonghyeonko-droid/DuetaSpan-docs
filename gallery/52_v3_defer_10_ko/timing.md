# v3_defer_10_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_defer_10",
#     "name": "세우",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "early 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-24",
#       "category": "hobby",
#       "text": "User is into birdwatching."
#     },
#     {
#       "date": "2026-03-21",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2025-10-03",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Mexican."
#     },
#     {
#       "date": "2025-09-26",
#       "category": "pet",
#       "text": "User has a Corgi named Mochi."
#     },
#     {
#       "date": "2025-07-06",
#       "category": "home",
#       "text": "User's home address is 서울 용산구 이태원로 200."
#     },
#     {
#       "date": "2025-06-17",
#       "category": "trip",
#       "text": "User is planning a trip to Kyoto in May."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-14",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2026-01-18",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2025-12-06",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 음, 혹시 지난달에 제가 제주도 갔을 때 날씨가 어땠는지 알려 | S2 아, 그럼 오늘 서울 날씨는 어때요? | S3 그건 그렇고… | S4 …제가 어제 브라우저 세션 백이십삼번 지워달라고 했었죠.

     0.00s  user  발화 시작: 음, 혹시 지난달에 제가 제주도 갔을 때 날씨가 어땠는지 알려줄 수 있을까요?
     5.27s  user  발화 끝
     5.35s  <ret> 발화 (turn1 첫 프레임)
     5.42s  agent 발화 시작: <ret> 죄송해요, 지난달 제주도 날씨에 대한 정보는 찾을 수 없네요. 혹시 다른 날짜를 말씀해 주시겠어요
     5.43s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.26s]: (no information found)
     8.27s  user  발화 시작: 음.
     8.72s  user  발화 끝
    11.50s  user  발화 시작: 아, 그럼 오늘 서울 날씨는 어때요?
    11.68s  agent 발화 끝
    13.30s  <ret> 발화 (turn4 첫 프레임)
    13.70s  agent 발화 시작: <ret> 오늘 서울은 섭씨 이십삼도이고, 습도는 칠십사%, 바람은 시속 오 점 오킬로미터로 불고 있어요.
    13.70s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.18s]: (tool result) 23.0°C, humidity 74%, wind 5.5 km/h
    13.90s  user  발화 끝
    18.21s  user  발화 시작: 그래.
    18.56s  user  발화 끝
    20.88s  agent 발화 끝
    21.78s  user  발화 시작: 그건 그렇고…
    22.78s  user  발화 끝
    24.07s  user  발화 시작: …제가 어제 브라우저 세션 백이십삼번 지워달라고 했었죠.
    26.08s  ⚡지연 SPAN 주입(선제발표 직전): Session 123 cleared successfully.
    27.14s  agent 발화 시작: <ret> 잠시만 기다려 주세요. 세션 백이십삼번 삭제가 완료되었어요. 이제 마음 편히 새로운 시작을 하실 
    27.30s  user  발화 끝
    35.15s  agent 발화 끝
