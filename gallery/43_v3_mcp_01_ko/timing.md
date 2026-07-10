# v3_mcp_01_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mcp_01",
#     "name": "하훈",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "50s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-26",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Korean BBQ."
#     },
#     {
#       "date": "2026-01-26",
#       "category": "trip",
#       "text": "User is planning a trip to Iceland in October."
#     },
#     {
#       "date": "2025-10-13",
#       "category": "diet",
#       "text": "User is pescatarian."
#     },
#     {
#       "date": "2025-08-08",
#       "category": "work",
#       "text": "User works as a nurse."
#     },
#     {
#       "date": "2025-07-05",
#       "category": "allergy",
#       "text": "User is allergic to pollen."
#     },
#     {
#       "date": "2025-06-24",
#       "category": "hobby",
#       "text": "User is into alpine wildflower photography."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-12-12",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 혹시 제로 제로 일 세션이… | S2 …토큰을 얼마나 사용했는지 알 수 있을까요? | S3 음, 그게 좀 높네요. 토큰 사용량을 줄일 수 있는 방법이 있 | S4 아니요, 괜찮아요. 다른 걸 물어볼게요. 이번 주 토요일 날씨

     0.00s  user  발화 시작: 혹시 제로 제로 일 세션이…
     1.93s  user  발화 끝
     3.59s  user  발화 시작: …토큰을 얼마나 사용했는지 알 수 있을까요?
     5.63s  <ret> 발화 (turn2 첫 프레임)
     5.86s  agent 발화 시작: <ret> 제로 제로 일 세션은 칠월 구일 기준으로 토큰의 삼십칠 점 팔퍼센트를 사용했습니다.
     5.87s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.07s]: (tool result) Session 001 utilized 37.8% of allocated tokens as of Jul
     6.03s  user  발화 끝
     7.82s  user  발화 시작: 음.
     8.31s  user  발화 끝
    11.72s  user  발화 시작: 음, 그게 좀 높네요. 토큰 사용량을 줄일 수 있는 방법이 있을까요?
    11.93s  agent 발화 끝
    15.93s  agent 발화 시작: 토큰 사용량을 줄이는 방법은 여러 가지가 있답니다. 좀 더 자세히 알아볼까요?
    16.07s  user  발화 끝
    19.38s  user  발화 시작: 그렇죠.
    19.83s  user  발화 끝
    21.40s  agent 발화 끝
    21.70s  user  발화 시작: 아니요, 괜찮아요. 다른 걸 물어볼게요. 이번 주 토요일 날씨가 어때요?
    26.55s  user  발화 끝
    26.75s  <ret> 발화 (turn8 첫 프레임)
    26.91s  agent 발화 시작: <ret> 이번 주 토요일인 칠월 십일일은 이십팔 점 오도이고, 습도는 육십팔퍼센트, 남서풍이 십오킬로미터 
    26.91s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.39s]: (tool result) The weather on Saturday, July 11, 2026, will be 28.5°C, 
    35.29s  agent 발화 끝
