# v3_rag_25_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_25",
#     "name": "Morgan",
#     "location": {
#       "city": "Toronto",
#       "country": "Canada",
#       "timezone": "America/Toronto (EST, UTC-5)",
#       "currency": "CAD ($)"
#     },
#     "nationality": "Canadian",
#     "gender": "non-binary",
#     "age_range": "late 20s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-08-03",
#       "category": "home",
#       "text": "User's home address is 461 Cedar Lane."
#     },
#     {
#       "date": "2026-06-25",
#       "category": "trip",
#       "text": "User is planning a trip to New Zealand in May."
#     },
#     {
#       "date": "2026-06-11",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     },
#     {
#       "date": "2026-05-11",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-01-21",
#       "category": "allergy",
#       "text": "User is allergic to cat dander."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-07-21",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2026-04-26",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 잭 소크랑 라파엘라 레지 선수, 혹시 같이 운동하는 스포츠가  | S2 아, 그렇군요. 혹시 두 분이 같이 출전한 경기 기록은 있어요 | S3 밥 브라이언과 마이크 브라이언은 들어본 것 같아요. 그분들은  | S4 아, 그렇군요. 테니스 선수들 세계는 정말 넓네요.

     0.00s  user  발화 시작: 잭 소크랑 라파엘라 레지 선수, 혹시 같이 운동하는 스포츠가 뭐예요?
     6.12s  user  발화 끝
     6.21s  <ret> 발화 (turn1 첫 프레임)
     6.37s  agent 발화 시작: <ret> 음, 두 분이 함께하는 스포츠에 대해 알아볼까요?
     7.80s  ⚡SPAN 주입 [d'=1.60s / d_lead=3.09s]: [source: Wikipedia] Jack Sock and Raffaella Reggi both compete in the 
     9.33s  agent 발화 시작: 두 분 모두 테니스 선수로 활동하고 계세요.
     9.46s  agent 발화 끝
    10.31s  user  발화 시작: 네.
    10.94s  user  발화 끝
    12.69s  user  발화 시작: 테니스요? 잭 소크는 알겠는데, 라파엘라 레지는 처음 들어봐요. 유명한 선수예요?
    12.71s  agent 발화 끝
    20.05s  <ret> 발화 (turn5 첫 프레임)
    20.21s  agent 발화 시작: <ret> 라파엘라 레지 선수도 꽤 알려진 분이세요.
    20.34s  user  발화 끝
    21.18s  ⚡SPAN 주입 [d'=1.12s / d_lead=2.96s]: [source: WTA Tennis] Raffaella Reggi is an Italian former professional
    23.10s  agent 발화 시작: 라파엘라 레지 선수는 한때 세계 랭킹 이십육위까지 올랐던 이탈리아의 프로 테니스 선수예요.
    23.18s  agent 발화 끝
    29.81s  agent 발화 끝
    30.65s  user  발화 시작: 오, 이십육위면 꽤 잘하는 거네요. 그럼 잭 소크 선수도 비슷한 랭킹이었나요?
    35.93s  <ret> 발화 (turn8 첫 프레임)
    36.32s  agent 발화 시작: <ret> 잭 소크 선수도 한때 높은 랭킹을 기록했었죠.
    36.54s  user  발화 끝
    37.93s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.61s]: [source: ATP Tour] Jack Sock achieved a career-high ATP singles rankin
    39.70s  agent 발화 시작: 잭 소크 선수는 이천십칠년 십일월에 ATP 단식 랭킹 팔위까지 올랐었어요.
    39.93s  agent 발화 끝
    45.39s  user  발화 시작: 팔위면 라파엘라 레지 선수보다 더 높네요. 두 분은 언제부터 같이 운동했어요?
    45.58s  agent 발화 끝
    51.51s  <ret> 발화 (turn11 첫 프레임)
    51.66s  agent 발화 시작: <ret> 두 분이 언제부터 함께 운동했는지 정확한 정보는 찾기 어렵네요.
    51.82s  user  발화 끝
    53.51s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.35s]: (no information found)
    55.81s  agent 발화 시작: 죄송해요. 두 분의 협업 시작 시점에 대한 정보는 찾을 수 없었어요.
    56.01s  agent 발화 끝
    61.46s  agent 발화 끝
    61.48s  user  발화 시작: 아, 그렇군요. 혹시 두 분이 같이 출전한 경기 기록은 있어요?
    66.34s  user  발화 끝
    66.40s  <ret> 발화 (turn14 첫 프레임)
    66.63s  agent 발화 시작: <ret> 네, 두 분이 혼합 복식으로 출전한 경기가 기록되어 있습니다.
    68.16s  ⚡SPAN 주입 [d'=1.76s / d_lead=4.07s]: [source: ESPN] Jack Sock and Raffaella Reggi partnered in mixed double
    70.57s  agent 발화 시작: 잭 소크 선수와 라파엘라 레지 선수는 이천이십년 도쿄 올림픽 혼합 복식에 함께 출전했어요.
    70.70s  agent 발화 끝
    77.35s  user  발화 시작: 도쿄 올림픽이요? 결과는 어땠어요?
    77.42s  agent 발화 끝
    80.04s  <ret> 발화 (turn17 첫 프레임)
    80.35s  agent 발화 시작: <ret> 두 분은 도쿄 올림픽 혼합 복식에서 좋은 성적을 거두지는 못했습니다.
    80.49s  user  발화 끝
    81.24s  ⚡SPAN 주입 [d'=1.20s / d_lead=5.00s]: [source: Olympics.com] Sock and Reggi lost in the first round of the m
    85.15s  agent 발화 시작: 두 분은 도쿄 올림픽 혼합 복식 일라운드에서 패배했어요.
    85.34s  agent 발화 끝
    88.39s  user  발화 시작: 진짜요?
    89.13s  user  발화 시작: 아쉽네요. 그럼 두 분 외에 다른 유명한 테니스 듀오도 많을까요?
    89.36s  user  발화 끝
    89.50s  agent 발화 끝
    94.30s  <ret> 발화 (turn21 첫 프레임)
    94.70s  agent 발화 시작: <ret> 물론이죠. 역사적으로 유명한 테니스 듀오는 정말 많습니다.
    94.92s  user  발화 끝
    96.30s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.58s]: [source: Britannica] Bob and Mike Bryan are widely regarded as one of 
    99.22s  agent 발화 시작: 밥 브라이언과 마이크 브라이언은 테니스 역사상 최고의 남자 복식 조중 하나로 꼽힙니다.
    99.28s  agent 발화 끝
   105.66s  agent 발화 끝
   105.69s  user  발화 시작: 밥 브라이언과 마이크 브라이언은 들어본 것 같아요. 그분들은 어떤 점이 유명했어요?
   112.14s  <ret> 발화 (turn24 첫 프레임)
   112.37s  agent 발화 시작: <ret> 그분들은 엄청난 꾸준함과 뛰어난 호흡으로 유명했죠.
   112.50s  user  발화 끝
   114.14s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.84s]: [source: USTA] Bob and Mike Bryan won 119 ATP doubles titles, the most
   116.04s  agent 발화 시작: 밥 브라이언과 마이크 브라이언은 오픈 시대 최다인 ATP 복식 타이틀 백십구개를 획득했어요.
   116.20s  agent 발화 끝
   121.02s  user  발화 시작: 그렇군요.
   121.93s  user  발화 끝
   123.56s  agent 발화 끝
   124.28s  user  발화 시작: 백십구개요? 대단하네요! 그럼 그분들도 혼합 복식도 같이 출전했었나요?
   130.47s  <ret> 발화 (turn28 첫 프레임)
   130.86s  agent 발화 시작: <ret> 네, 밥 브라이언과 마이크 브라이언도 혼합 복식에 출전한 적이 있습니다.
   131.04s  user  발화 끝
   132.47s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.81s]: [source: Tennis.com] The Bryan brothers won the mixed doubles title at
   135.50s  agent 발화 시작: 브라이언 형제는 이천삼년 US 오픈 혼합 복식에서 우승했어요.
   135.67s  agent 발화 끝
   139.09s  user  발화 시작: 그렇죠.
   139.90s  user  발화 끝
   141.01s  agent 발화 끝
   141.09s  user  발화 시작: 우승까지 했군요. 역시 대단하네요. 혹시 잭 소크 선수도 혼합 복식 우승 경험이 있을까요?
   148.41s  <ret> 발화 (turn32 첫 프레임)
   148.65s  agent 발화 시작: <ret> 잭 소크 선수도 혼합 복식에서 우승한 경험이 있습니다.
   148.88s  user  발화 끝
   150.41s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.70s]: [source: US Open] Jack Sock won the 2018 US Open mixed doubles title w
   152.20s  agent 발화 시작: 잭 소크 선수는 앨리 키크 선수와 함께 이천십팔년 US 오픈 혼합 복식에서 우승했어요.
   152.35s  agent 발화 끝
   158.68s  user  발화 시작: 앨리 키크 선수랑 같이요? 새로운 정보네요. 그럼 라파엘라 레지 선수도 혼합 복식 우승 경험이 있을까요?
   158.74s  agent 발화 끝
   166.99s  <ret> 발화 (turn35 첫 프레임)
   167.30s  agent 발화 시작: <ret> 라파엘라 레지 선수는 혼합 복식에서 우승한 기록은 찾을 수 없었습니다.
   167.39s  user  발화 끝
   168.43s  ⚡SPAN 주입 [d'=1.44s / d_lead=5.00s]: (no information found)
   172.18s  agent 발화 시작: 죄송해요. 라파엘라 레지 선수의 혼합 복식 우승 기록은 찾을 수 없었어요.
   172.30s  agent 발화 끝
   177.73s  agent 발화 끝
   178.18s  user  발화 시작: 아, 그렇군요. 테니스 선수들 세계는 정말 넓네요.
   182.14s  agent 발화 시작: 그렇죠. 테니스에는 정말 훌륭한 선수들이 많이 있답니다.
   182.29s  user  발화 끝
   184.69s  user  발화 시작: 음.
   185.23s  user  발화 끝
   186.53s  agent 발화 끝
   187.16s  user  발화 시작: 네, 오늘 새로운 걸 많이 알게 됐어요. 감사합니다.
   191.59s  user  발화 끝
   191.83s  agent 발화 시작: 도움이 되었다니 기쁩니다. 테니스에 대해 더 궁금한 점이 있으신가요?
   193.80s  user  발화 시작: 아.
   194.52s  user  발화 끝
   197.31s  user  발화 시작: 아니요, 오늘은 여기까지 할게요.
   197.34s  agent 발화 끝
   200.59s  user  발화 끝
   200.60s  agent 발화 시작: [happy] 그럼 다음에 또 찾아주세요.
   202.59s  agent 발화 끝
