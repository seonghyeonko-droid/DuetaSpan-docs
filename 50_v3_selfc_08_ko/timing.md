# v3_selfc_08_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_selfc_08",
#     "name": "채찬",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "40s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-04",
#       "category": "trip",
#       "text": "User is planning a trip to Vietnam in October."
#     },
#     {
#       "date": "2025-11-20",
#       "category": "pet",
#       "text": "User has a tabby cat named Luna."
#     },
#     {
#       "date": "2025-09-28",
#       "category": "home",
#       "text": "User's home address is 서울 용산구 이태원로 200."
#     },
#     {
#       "date": "2025-09-07",
#       "category": "diet",
#       "text": "User is vegetarian."
#     },
#     {
#       "date": "2025-08-05",
#       "category": "hobby",
#       "text": "User is into birdwatching."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-12-16",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2025-11-12",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 안녕하세요. 휴스턴에 괜찮은 미용실 좀 찾아주세요. | S2 음… 전에 파마를 한 적 있는데, 결과가 별로였어요. | S3 일 이 삼 사 오 육 칠 팔… 알겠습니다. 그 옆에 맛있는 커 | S4 아, 그렇군요. 스물네시간 전에 해야 한다…

     0.00s  user  발화 시작: 안녕하세요. 휴스턴에 괜찮은 미용실 좀 찾아주세요.
     3.74s  <ret> 발화 (turn1 첫 프레임)
     3.75s  user  발화 끝
     4.05s  agent 발화 시작: <ret> 휴스턴에는 블로우아웃 바라는 미용실이 있는데, 평점이 사 점 팔점에 리뷰가 삼백오십개 정도 있어요
     4.06s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.43s]: (tool result) There are several highly-rated hair salons in Houston, i
    12.44s  user  발화 시작: 블로우아웃 바가 어디에 있는지 좀 더 자세히 알려줄 수 있어요?
    12.48s  agent 발화 끝
    15.80s  <ret> 발화 (turn3 첫 프레임)
    16.11s  agent 발화 시작: <ret> 블로우아웃 바는 미국 텍사스주 휴스턴 웨스트하이머 로드 이천육백이십육번지 이백호에 있어요.
    16.12s  ⚡SPAN 주입 [d'=0.96s / d_lead=6.76s]: (tool result) The Blowout Bar Houston is located at 2626 Westheimer Rd
    16.28s  user  발화 끝
    18.12s  user  발화 시작: 정말요?
    19.08s  user  발화 끝
    22.88s  agent 발화 끝
    23.15s  user  발화 시작: 그 근처에 주차 공간이 있나요?
    24.81s  <ret> 발화 (turn6 첫 프레임)
    25.04s  agent 발화 시작: <ret> 블로우아웃 바 근처에 주차 공간이 여러 곳 있는데, 시간당 오달러에서 십오달러 정도예요.
    25.05s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.25s]: (tool result) There are several parking lots and street parking option
    25.22s  user  발화 끝
    29.80s  user  발화 시작: 진짜요?
    30.75s  user  발화 끝
    31.29s  agent 발화 끝
    32.30s  user  발화 시작: 그럼, 혹시 그 미용실 예약도 가능할까요?
    35.61s  <ret> 발화 (turn9 첫 프레임)
    35.85s  agent 발화 시작: <ret> 네, 토요일 칠월 십일일 오전 열시에 예약이 완료됐습니다. 확인 번호는 팔 칠 육 오 사 삼 이 
    35.85s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.90s]: (tool result) Appointment confirmed for Saturday, July 11, 2026 at 10:
    36.00s  user  발화 끝
    37.91s  user  발화 시작: 네.
    38.40s  user  발화 끝
    42.59s  user  발화 시작: 토요일이요? 아, 잠깐만요… 다음 주 토요일로 바꿔줄 수 있어요?
    42.75s  agent 발화 끝
    47.12s  <ret> 발화 (turn12 첫 프레임)
    47.35s  agent 발화 시작: <ret> 네, 칠월 십칠일 토요일 오전 열시로 변경했습니다. 확인 번호는 구 팔 칠 육 오 사 삼 이예요.
    47.36s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.35s]: (tool result) Appointment updated to Saturday, July 17, 2026 at 10:00 
    47.55s  user  발화 끝
    51.54s  user  발화 시작: 오.
    52.27s  user  발화 끝
    53.59s  agent 발화 시작: 다행이네요. 혹시 다른 스타일을 시도해 보신 적 있으세요? 새로운 스타일을 찾아보는 것도 재미있을 거예요.
    53.70s  agent 발화 끝
    60.13s  agent 발화 끝
    60.43s  user  발화 시작: 음… 전에 파마를 한 적 있는데, 결과가 별로였어요.
    64.53s  agent 발화 시작: 파마가 잘 안 나왔다니 아쉬우시겠네요. 혹시 어떤 스타일을 원하시는지 좀 더 자세히 말씀해 주시겠어요?
    64.69s  user  발화 끝
    68.62s  user  발화 시작: 네네.
    69.39s  user  발화 끝
    70.01s  user  발화 시작: 그냥 깔끔하게 다듬는 정도면 괜찮을 것 같아요.
    70.14s  agent 발화 끝
    72.82s  agent 발화 시작: 깔끔하게 다듬는 스타일이시군요. 블로우아웃 바에서 잘하는 스타일이에요.
    73.06s  user  발화 끝
    77.12s  agent 발화 끝
    77.47s  user  발화 시작: 그 미용실에 남자 선생님도 계신가요?
    79.68s  <ret> 발화 (turn21 첫 프레임)
    79.83s  agent 발화 시작: <ret> 네, 데이비드 첸, 마이클 리, 로버트 존스 세 분의 남자 선생님이 계세요.
    79.84s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.38s]: (tool result) The Blowout Bar Houston has three male stylists availabl
    80.05s  user  발화 끝
    85.20s  agent 발화 끝
    85.41s  user  발화 시작: 데이비드 첸 선생님으로 예약할 수 있을까요?
    88.30s  <ret> 발화 (turn23 첫 프레임)
    88.31s  user  발화 끝
    88.37s  agent 발화 시작: <ret> 네, 데이비드 첸 선생님으로 칠월 십칠일 토요일 오전 열시에 예약이 완료됐습니다. 확인 번호는 일
    88.38s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.24s]: (tool result) Appointment confirmed with David Chen on Saturday, July 
    96.61s  agent 발화 끝
    96.86s  user  발화 시작: 일 이 삼 사 오 육 칠 팔… 알겠습니다. 그 옆에 맛있는 커피숍도 있을까요?
   102.33s  <ret> 발화 (turn25 첫 프레임)
   102.48s  agent 발화 시작: <ret> 블로우아웃 바 근처에 커피숍이 여러 곳 있는데, 코먼 본드 비스트로 앤 베이커리가 걸어서 오분 거
   102.49s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.77s]: (tool result) There are several coffee shops near The Blowout Bar Hous
   102.74s  user  발화 끝
   109.25s  agent 발화 끝
   109.30s  user  발화 시작: 코먼 본드… 거기가 빵도 맛있나요?
   112.67s  user  발화 끝
   112.72s  agent 발화 시작: 네, 코먼 본드는 빵도 정말 맛있기로 유명해요. 특히 크루아상이 인기 많다고 하네요.
   115.65s  user  발화 시작: 예.
   116.28s  user  발화 끝
   117.90s  agent 발화 끝
   118.14s  user  발화 시작: 빵도 같이 먹어야겠네요.
   119.74s  user  발화 끝
   119.83s  agent 발화 시작: 좋은 생각이에요! 미용실 가기 전에 맛있는 빵과 커피로 기분 전환하는 것도 좋죠.
   124.99s  user  발화 시작: 그런데, 혹시 그 미용실에 예약 변경하는 방법 좀 알려줄 수 있나요? —
   125.01s  agent 발화 끝
   129.44s  user  발화 시작: …혹시 예약 변경하려면 얼마나 전에 해야 할까요?
   129.66s  user  발화 끝
   133.12s  agent 발화 시작: 예약 변경은 최소 스물네시간 전에 하셔야 해요. 그렇지 않으면 취소 수수료가 발생할 수 있습니다.
   133.23s  user  발화 끝
   139.28s  agent 발화 끝
   139.31s  user  발화 시작: 아, 그렇군요. 스물네시간 전에 해야 한다…
   142.19s  agent 발화 시작: 네, 스물네시간 전에 변경하시면 수수료 없이 변경하실 수 있어요.
   142.36s  user  발화 끝
   144.82s  user  발화 시작: 그렇군요.
   145.45s  user  발화 끝
   145.98s  agent 발화 끝
   147.39s  user  발화 시작: 지금 시계가 몇 시예요?
   148.66s  <ret> 발화 (turn38 첫 프레임)
   148.73s  agent 발화 시작: <ret> 지금은 이천이십육년 칠월 십일 금요일 오후 세시 십오분이에요.
   148.74s  ⚡SPAN 주입 [d'=1.12s / d_lead=4.16s]: (tool result) It is Friday, July 10, 2026 at 3:15 PM in Asia/Seoul rig
   148.91s  user  발화 끝
   152.88s  user  발화 시작: 시간이 벌써 이렇게 됐네요.
   152.89s  agent 발화 끝
   154.35s  agent 발화 시작: 시간이 정말 빠르죠. 오늘 하루도 즐겁게 보내세요.
   154.49s  user  발화 끝
   157.91s  agent 발화 끝
   158.41s  user  발화 시작: 고마워요.
   159.16s  agent 발화 시작: 천만에요.
   159.23s  user  발화 끝
   159.98s  agent 발화 끝
