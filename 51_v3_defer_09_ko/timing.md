# v3_defer_09_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_defer_09",
#     "name": "윤희",
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
#       "date": "2026-05-13",
#       "category": "diet",
#       "text": "User is gluten-free."
#     },
#     {
#       "date": "2026-05-09",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Italian."
#     },
#     {
#       "date": "2026-04-12",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2026-03-23",
#       "category": "trip",
#       "text": "User is planning a trip to Vietnam in March."
#     },
#     {
#       "date": "2026-01-24",
#       "category": "home",
#       "text": "User's home address is 서울 마포구 성산동 45-6."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-01",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2025-10-17",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 시카고 근처 커피숍 좀 찾아줄래, 세 킬로미터 이내로. | S2 인텔리젠시아 커피까지 가는 길 좀 알려줘. | S3 이번 주 토요일에 예약 가능한 괜찮은 레스토랑 좀 찾아봐 줄래 | S4 음… 이탈리아 음식 괜찮아.

     0.00s  user  발화 시작: 시카고 근처 커피숍 좀 찾아줄래, 세 킬로미터 이내로.
     3.95s  <ret> 발화 (turn1 첫 프레임)
     4.11s  agent 발화 시작: <ret> 시카고에서 삼킬로미터 이내에 인텔리젠시아 커피와 스타벅스 두 곳이 있어요. 인텔리젠시아 커피는 브
     4.11s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.73s]: (tool result) {"html attributions": [], "results": [{"geometry": {"loc
     4.11s  user  발화 끝
    12.83s  user  발화 시작: 인텔리젠시아 커피까지 가는 길 좀 알려줘.
    12.83s  agent 발화 끝
    15.59s  <ret> 발화 (turn3 첫 프레임)
    15.91s  agent 발화 시작: <ret> 현재 위치에서 인텔리젠시아 커피까지는 삼 점 이킬로미터, 운전으로 팔분 정도 걸립니다.
    15.91s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.65s]: (tool result) {"distance": {"text": "3.2 km", "value": 3188}, "duratio
    15.91s  user  발화 끝
    21.56s  user  발화 시작: 오.
    21.56s  agent 발화 끝
    22.07s  user  발화 시작: 이번 주 토요일에 예약 가능한 괜찮은 레스토랑 좀 찾아봐 줄래?
    22.07s  user  발화 끝
    27.20s  agent 발화 시작: 이번 주 토요일 레스토랑 예약을 도와드릴게요. 혹시 특별히 선호하는 종류나 분위기가 있으세요?
    27.20s  user  발화 끝
    33.36s  user  발화 시작: 음… 이탈리아 음식 괜찮아.
    33.36s  agent 발화 끝
    35.42s  agent 발화 시작: 이탈리아 음식 좋아하시는군요. 시카고에서 평점 좋은 이탈리아 레스토랑을 찾아볼게요. 잠깐만 기다려 주세요.
    35.42s  user  발화 끝
    41.58s  agent 발화 끝
