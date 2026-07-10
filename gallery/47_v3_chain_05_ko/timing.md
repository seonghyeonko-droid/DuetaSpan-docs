# v3_chain_05_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_chain_05",
#     "name": "유국",
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
#       "date": "2026-03-30",
#       "category": "hobby",
#       "text": "User is into marathon training."
#     },
#     {
#       "date": "2025-12-16",
#       "category": "pet",
#       "text": "User has a Siamese cat named Bella."
#     },
#     {
#       "date": "2025-11-09",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Mexican."
#     },
#     {
#       "date": "2025-09-23",
#       "category": "trip",
#       "text": "User is planning a trip to Vietnam in August."
#     },
#     {
#       "date": "2025-09-17",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2025-08-07",
#       "category": "home",
#       "text": "User's home address is 부산 해운대구 해운대로 570."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-10-23",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2025-09-27",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 비틀즈의 애비 로드 앨범에서 천구백육십구년에 나온 노래 좀 찾 | S2 …더 선”만 따로 재생해 줄래? | S3 …이 앨범이 발매된 지 얼마나 됐지? | S4 맞아, 정말 그래. 혹시 지금 서울 날씨 어때?

     0.00s  user  발화 시작: 비틀즈의 애비 로드 앨범에서 천구백육십구년에 나온 노래 좀 찾아줘.
     4.16s  <ret> 발화 (turn1 첫 프레임)
     4.35s  user  발화 끝
     4.47s  agent 발화 시작: <ret> 비틀즈는 천구백육십구년 구월 이십육일에 애비 로드 앨범을 발표했는데, “컴 투게더”, “썸씽”, 
     4.48s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.61s]: (tool result) The Beatles released their album Abbey Road on September
    15.08s  agent 발화 끝
    15.53s  user  발화 시작: 음, 그중에 “히어 컴즈…
    18.30s  user  발화 끝
    20.05s  user  발화 시작: …더 선”만 따로 재생해 줄래?
    21.53s  <ret> 발화 (turn4 첫 프레임)
    21.83s  agent 발화 시작: <ret> “히어 컴즈 더 선”을 재생합니다.
    21.85s  ⚡SPAN 주입 [d'=1.20s / d_lead=2.81s]: (tool result) Playing "Here Comes the Sun" by The Beatles.
    21.98s  user  발화 끝
    23.51s  user  발화 시작: 어.
    24.14s  user  발화 끝
    24.50s  agent 발화 시작: 이 곡은 앨범의 마지막 부분에 위치하고 있어서—
    24.65s  agent 발화 끝
    27.34s  user  발화 시작: …이 앨범이 발매된 지 얼마나 됐지?
    28.06s  agent 발화 끝
    29.20s  <ret> 발화 (turn8 첫 프레임)
    29.28s  agent 발화 시작: <ret> 애비 로드 앨범은 천구백육십구년에 발매되었으니, 현재 오십사년이 넘었어요.
    29.28s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.06s]: Abbey Road was released in September 1969, meaning it is currently ove
    29.36s  user  발화 끝
    35.19s  agent 발화 시작: 시간이 참 빠르죠.
    35.34s  agent 발화 끝
    36.80s  agent 발화 끝
    38.16s  user  발화 시작: 맞아, 정말 그래. 혹시 지금 서울 날씨 어때?
    41.61s  <ret> 발화 (turn11 첫 프레임)
    42.00s  agent 발화 시작: <ret> 지금 서울은 기온이 이십팔 점 삼도이고, 습도는 육십팔%, 바람은 시속 삼 점 일킬로미터로 불고 
    42.00s  user  발화 끝
    42.01s  ⚡SPAN 주입 [d'=1.04s / d_lead=8.62s]: (tool result) It is 28.3°C, humidity 68%, wind 3.1 km/h in Seoul right
    50.50s  agent 발화 시작: 이사 오시면 날씨가 좋으실 거예요.
    50.62s  agent 발화 끝
    52.76s  agent 발화 끝
