# v3_to_ot_12_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_to_ot_12",
#     "name": "서람",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "late 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-01-18",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-01-06",
#       "category": "home",
#       "text": "User's home address is 경기 성남시 분당구 판교로 235."
#     },
#     {
#       "date": "2025-11-05",
#       "category": "hobby",
#       "text": "User is into marathon training."
#     },
#     {
#       "date": "2025-09-06",
#       "category": "pet",
#       "text": "User has a Corgi named Mochi."
#     },
#     {
#       "date": "2025-08-09",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Italian."
#     },
#     {
#       "date": "2025-07-29",
#       "category": "trip",
#       "text": "User is planning a trip to Lisbon in August."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-03-04",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2025-08-27",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2025-07-07",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 플로리다에서 제일 큰 도시 세 곳이 어디야? | S2 음, 그 도시들은 관광객한테 유명해? | S3 잠깐만, 아 맞다, 오늘 저녁에 김치찌개 끓여야 되네. | S4 어… 그래서, 그 도시들은 뭐가 유명해?

     0.00s  user  발화 시작: 플로리다에서 제일 큰 도시 세 곳이 어디야?
     3.23s  <ret> 발화 (turn1 첫 프레임)
     3.55s  agent 발화 시작: <ret> 플로리다에서 가장 큰 도시 중 하나는 올랜도-키시미-샌포드입니다.
     3.55s  ⚡SPAN 주입 [d'=1.20s / d_lead=3.55s]: Orlando-Kissimmee-Sanford is one of the largest metropolitan areas in 
     3.55s  user  발화 끝
     7.10s  user  발화 시작: 응.
     7.10s  agent 발화 끝
     7.61s  user  발화 시작: 음, 그 도시들은 관광객한테 유명해?
     7.61s  user  발화 끝
    10.15s  agent 발화 시작: 올랜도-키시미-샌포드는 관광객들에게 아주 인기 있는 곳이에요.
    10.15s  user  발화 끝
    13.19s  user  발화 시작: 응.
    13.19s  agent 발화 끝
    13.70s  user  발화 시작: 잠깐만, 아 맞다, 오늘 저녁에 김치찌개 끓여야 되네.
    13.70s  user  발화 끝
    17.76s  user  발화 시작: 어… 그래서, 그 도시들은 뭐가 유명해?
    17.76s  user  발화 끝
    20.56s  <ret> 발화 (turn8 첫 프레임)
    20.80s  agent 발화 시작: <ret> 올랜도는 월트 디즈니 월드 같은 테마파크로 유명한 관광지입니다.
    20.80s  ⚡SPAN 주입 [d'=1.76s / d_lead=4.06s]: Orlando is a popular destination, known for theme parks like Walt Disn
    20.80s  user  발화 끝
    24.86s  user  발화 시작: 응응.
    24.86s  agent 발화 끝
    25.36s  user  발화 끝
