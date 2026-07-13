# v3_noinfo_23_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_noinfo_23",
#     "name": "우완",
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
#       "date": "2026-01-13",
#       "category": "work",
#       "text": "User works as a architect."
#     },
#     {
#       "date": "2025-12-18",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Ethiopian."
#     },
#     {
#       "date": "2025-11-11",
#       "category": "pet",
#       "text": "User has a Golden Retriever named Max."
#     },
#     {
#       "date": "2025-08-07",
#       "category": "hobby",
#       "text": "User is into marathon training."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-09",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 혹시 김민지 씨 연락처 알아요? | S2 아, 그렇군요. 그럼 내일 모레 토요일에 서울 날씨는 어때요? | S3 그럼 그날 저녁에 영화 볼 만한 거 있을까요? | S4 미션 임파서블, 씨 지 브이 강남으로 예매해 줘. 저녁 일곱시

     0.00s  user  발화 시작: 혹시 김민지 씨 연락처 알아요?
     1.85s  <ret> 발화 (turn1 첫 프레임)
     2.25s  agent 발화 시작: <ret> 죄송하지만, 김민지 씨의 연락처는 찾을 수 없었어요. 개인 정보라서 공개되어 있지 않은 것 같아요
     2.25s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.31s]: (no information found)
     2.25s  user  발화 끝
     8.56s  user  발화 시작: 아, 그렇군요. 그럼 내일 모레 토요일에 서울 날씨는 어때요?
     8.56s  agent 발화 끝
    12.38s  <ret> 발화 (turn3 첫 프레임)
    12.62s  agent 발화 시작: <ret> 내일 모레 토요일인 칠월 십일일 서울 날씨는 최고 기온이 이십오 점 오도, 습도는 육십팔퍼센트, 
    12.62s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.01s]: (tool result) 25.5°C, humidity 68%, wind 4.2 km/h
    12.62s  user  발화 끝
    21.63s  user  발화 시작: 응.
    21.63s  agent 발화 끝
    22.08s  user  발화 시작: 그럼 그날 저녁에 영화 볼 만한 거 있을까요?
    22.08s  user  발화 끝
    25.36s  <ret> 발화 (turn6 첫 프레임)
    25.68s  agent 발화 시작: <ret> 칠월 십일일 저녁 서울에서 상영하는 영화 중에는 ‘미션 임파서블: 데드 레코닝 PART ONE’과
    25.68s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.91s]: (tool result) "미션 임파서블: 데드 레코닝 PART ONE" - 19:00, 21:30, CGV 강남, "엘리멘탈
    25.68s  user  발화 끝
    35.60s  user  발화 시작: 응.
    35.60s  agent 발화 끝
    36.05s  user  발화 시작: 미션 임파서블, 씨 지 브이 강남으로 예매해 줘. 저녁 일곱시 삼십분으로.
    36.05s  user  발화 끝
    40.76s  <ret> 발화 (turn9 첫 프레임)
    41.00s  agent 발화 시작: <ret> 네, ‘미션 임파서블: 데드 레코닝 PART ONE’ 씨 지 브이 강남 칠월 십일일 일곱시 삼십분
    41.00s  ⚡SPAN 주입 [d'=2.00s / d_lead=12.17s]: (tool result) 예약 완료: 미션 임파서블: 데드 레코닝 PART ONE, CGV 강남, 7월 11일 19:30, 좌
    41.00s  user  발화 끝
    53.17s  agent 발화 시작: 영화 보러 가시기 전에 맛있는 저녁 식사도 하실 계획이신가요?
    53.17s  agent 발화 끝
    57.22s  agent 발화 끝
