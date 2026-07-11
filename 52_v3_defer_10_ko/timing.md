# v3_defer_10_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_defer_10",
#     "name": "정연",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "early 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-03-10",
#       "category": "hobby",
#       "text": "User is into birdwatching."
#     },
#     {
#       "date": "2026-03-01",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     },
#     {
#       "date": "2026-02-23",
#       "category": "trip",
#       "text": "User is planning a trip to Lisbon in March."
#     },
#     {
#       "date": "2026-02-05",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-11-23",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2025-11-04",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 해리 스타일스 워터멜론 슈가 틀어줘, 파티오에서. | S2 아, 맞아. 근데 프리아, 혹시… 어제 저녁에 뭐 먹었어? | S3 응, 그래야지. 근데 프리아, 혹시 내가 칠월 십오일에 중요한 | S4 정말 그래. 아, 프리아, 오늘 저녁에 영화 볼까 하는데, 볼

     0.00s  user  발화 시작: 해리 스타일스 워터멜론 슈가 틀어줘, 파티오에서.
     0.00s  <ret> 발화 (turn1 첫 프레임)
     0.00s  <ret> 발화 (turn5 첫 프레임)
     0.00s  <ret> 발화 (turn7 첫 프레임)
     0.02s  agent 발화 시작: <ret> 네, 해리 스타일스의 워터멜론 슈가를 파티오에서 틀어 드릴게요. 신나는 노래죠?
     0.02s  ⚡SPAN 주입 [d'=0.03s / d_lead=0.03s]: (tool result) Playing "Watermelon Sugar" by Harry Styles on the patio.
     0.02s  user  발화 끝
     0.05s  user  발화 시작: 응, 완전 좋아. 근데 프리아, 다음 주 화요일에 김민지 씨랑 저녁 약속 잡고 싶은데, 괜찮은 레스토랑 알아
     0.05s  agent 발화 끝
     0.11s  agent 발화 시작: 다음 주 화요일 저녁 식사 장소를 찾아 드릴게요. 김민지 씨와 즐거운 시간 보내세요.
     0.11s  user  발화 끝
     0.14s  user  발화 시작: 고마워. 아, 그리고 이번 주 금요일 날씨 어때?
     0.14s  agent 발화 끝
     0.17s  agent 발화 시작: <ret> 이번 주 금요일 날씨는 섭씨 이십육 점 오도, 습도는 육십팔퍼센트, 바람은 시속 칠 점 이킬로미터
     0.17s  ⚡SPAN 주입 [d'=0.06s / d_lead=0.06s]: (tool result) The weather on Friday, July 11, 2026 will be 26.5°C, hum
     0.17s  user  발화 끝
     0.22s  user  발화 시작: 으음… 잠깐만, 지난달에 제가 적금 넣었던 거 기억나?
     0.22s  agent 발화 끝
     0.25s  agent 발화 시작: <ret> [이 공 이 육 공 칠 공 일] 적금 오십만 원 넣기로 했어.
     0.25s  ⚡SPAN 주입 [d'=0.04s / d_lead=0.04s]: [2026-07-01] 적금 50만 원 넣기로 했어.
     0.25s  user  발화 끝
     0.27s  <ret> 발화 (turn14 첫 프레임)
     0.29s  agent 발화 시작: 네, 칠월 일일에 오십만 원 적금에 넣기로 하셨던 거 기억하고 있어요.
     0.29s  agent 발화 끝
     0.32s  user  발화 시작: 그래.
     0.32s  agent 발화 끝
     0.32s  user  발화 시작: 아, 맞아. 근데 프리아, 혹시… 어제 저녁에 뭐 먹었어?
     0.32s  user  발화 끝
     0.34s  <ret> 발화 (turn19 첫 프레임)
     0.35s  <ret> 발화 (turn24 첫 프레임)
     0.35s  agent 발화 시작: 저는 음식을 먹지 않아서 어제 저녁은… 특별히 없었어요. 대신 사용자님께 좋은 정보를 드릴 수 있어서 기뻤답
     0.35s  user  발화 끝
     0.40s  user  발화 시작: 응.
     0.40s  agent 발화 끝
     0.40s  user  발화 시작: [surprised] 어… 그렇구나. 혹시 서울에서 가장 유명한 빵집 좀 찾아줄 수 있어?
     0.40s  user  발화 끝
     0.43s  agent 발화 시작: <ret> 서울에서 가장 유명한 빵집은 파리바게트예요. 강남구 강남대로 백이십삼에 위치하고 있으며, 평점은 
     0.43s  ⚡SPAN 주입 [d'=0.05s / d_lead=0.05s]: (tool result) The most famous bakery in Seoul is “Paris Baguette”, wit
     0.43s  user  발화 끝
     0.48s  user  발화 시작: 맞아.
     0.48s  agent 발화 끝
     0.48s  user  발화 시작: 파리바게트? 아, 거기 가봐야겠다. 이번 주 토요일에 갈까?
     0.48s  user  발화 끝
     0.51s  <ret> 발화 (turn27 첫 프레임)
     0.51s  agent 발화 시작: 이번 주 토요일은 칠월 십일일이네요. 파리바게트에서 맛있는 빵 많이 드세요!
     0.51s  user  발화 끝
     0.54s  user  발화 시작: 응, 그래야지. 근데 프리아, 혹시 내가 칠월 십오일에 중요한 회의가 있는 거 기억해?
     0.54s  agent 발화 끝
     0.58s  agent 발화 시작: <ret> 네, 칠월 십오일 오후 두시에 중요한 회의가 있다고 메모해 뒀어요. 잊지 않도록 미리 알림 설정해
     0.58s  ⚡SPAN 주입 [d'=0.05s / d_lead=0.05s]: [2026-07-08] 7월 15일 오후 2시에 중요한 회의가 있다고 적어 뒀어.
     0.58s  user  발화 끝
     0.58s  <ret> 발화 (turn29 첫 프레임)
     0.62s  user  발화 시작: 진짜?
     0.62s  agent 발화 끝
     0.63s  user  발화 시작: 음… 알림은 됐어. 근데 프리아, 혹시 나 요즘 너무 돈을 많이 쓰는 것 같아.
     0.63s  user  발화 끝
     0.67s  agent 발화 시작: 돈을 많이 쓰시는 것 같아 걱정이시군요. 예산을 세우고 지출을 관리하는 걸 도와드릴 수 있어요. 함께 계획을
     0.67s  user  발화 끝
     0.72s  user  발화 시작: 좋아, 한번 해보자. 근데 프리아, 오늘이 몇 월 며칠이지?
     0.72s  agent 발화 끝
     0.75s  agent 발화 시작: <ret> 지금은 이천이십육년 칠월 십일 금요일 오후 세시 오십이분이에요. 시간이 정말 빠르네요.
     0.75s  ⚡SPAN 주입 [d'=0.03s / d_lead=0.03s]: (tool result) It is Friday, July 10, 2026 at 3:52 PM in Asia/Seoul rig
     0.75s  user  발화 끝
     0.78s  user  발화 시작: 음.
     0.78s  agent 발화 끝
     0.78s  user  발화 시작: 정말 그래. 아, 프리아, 오늘 저녁에 영화 볼까 하는데, 볼만한 영화 추천해 줄 수 있어?
     0.78s  user  발화 끝
     0.83s  agent 발화 시작: <ret> 현재 평점이 가장 높은 영화는 인사이드 아웃 이인데, 이천삼백사십오개의 리뷰에서 팔 점 오점을 받
     0.83s  ⚡SPAN 주입 [d'=0.05s / d_lead=0.05s]: (tool result) The highest-rated movie currently playing is "Inside Out
     0.83s  user  발화 끝
     0.88s  user  발화 시작: 인사이드 아웃 이? 오, 괜찮다. 그럼 예매해줘.
     0.88s  agent 발화 끝
     0.90s  agent 발화 시작: <ret> 네, 인사이드 아웃 이 오늘 저녁 일곱시에 메가박스 강남에서 두석 예매 완료되었습니다. 확인 번호
     0.90s  ⚡SPAN 주입 [d'=0.06s / d_lead=0.06s]: (tool result) Two tickets for "Inside Out 2" at 7:00 PM on July 10, 20
     0.90s  user  발화 끝
     0.96s  user  발화 시작: 진짜?
     0.96s  agent 발화 끝
     0.96s  user  발화 시작: 고마워, 프리아. 덕분에 오늘 저녁은 즐거울 것 같아.
     0.96s  user  발화 끝
     0.98s  agent 발화 시작: 저도 사용자님께서 즐거운 시간 보내시길 바랍니다.
     0.98s  user  발화 끝
     1.00s  agent 발화 끝
