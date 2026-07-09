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
#       "date": "2026-05-20",
#       "category": "home",
#       "text": "User's home address is 461 Cedar Lane."
#     },
#     {
#       "date": "2025-10-29",
#       "category": "trip",
#       "text": "User is planning a trip to New Zealand in May."
#     },
#     {
#       "date": "2025-09-03",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     },
#     {
#       "date": "2025-08-06",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2025-05-29",
#       "category": "allergy",
#       "text": "User is allergic to cat dander."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-11-23",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2025-06-18",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 잭 소크랑 라파엘라 레지와 어떤 스포츠를 같이 했는지 궁금해요 | S2 그렇죠, 그렇죠. 그럼 두 분이 같이 테니스 경기를 한 다른  | S3 그랜드 슬램 우승이라니 대단하네요. 그럼 잭 소크 선수도 그랜 | S4 아, 레지 선수는 은퇴하셨군요. 그럼 소크 선수는 지금도 계속

     0.00s  user  발화 시작: 잭 소크랑 라파엘라 레지와 어떤 스포츠를 같이 했는지 궁금해요.
     5.48s  <ret> 발화 (turn1 첫 프레임)
     5.60s  user  발화 끝
     5.63s  agent 발화 시작: <ret> 잭 소크 선수와 라파엘라 레지 선수는 이천이십년 하계 올림픽에서 혼합 복식 테니스 경기에 함께 출
     7.48s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.83s]: [source: Wikipedia] Jack Sock and Raffaella Reggi competed together in
    10.15s  user  발화 시작: 와.
    10.78s  user  발화 끝
    13.42s  user  발화 시작: 아, 올림픽에서요? 그런데 그 두 분이 테니스 선수라는 건 확실한가요? 다른 스포츠를 할 수도 있잖아요.
    13.46s  agent 발화 끝
    22.14s  <ret> 발화 (turn4 첫 프레임)
    22.21s  agent 발화 시작: <ret> 잭 소크 선수는 미국 프로 테니스 선수이고, ATP 단식 랭킹 최고 순위는 세계 팔위였어요.
    22.23s  user  발화 끝
    24.14s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.01s]: [source: ATP Tour] Jack Sock is an American professional tennis player
    30.22s  agent 발화 끝
    32.00s  user  발화 시작: 음, 잭 소크 선수는 알겠는데, 라파엘라 레지 선수도 테니스 선수라는 걸 보여주실 수 있나요?
    40.26s  <ret> 발화 (turn6 첫 프레임)
    40.33s  agent 발화 시작: <ret> 라파엘라 레지 선수는 이탈리아의 은퇴한 프로 테니스 선수이고, WTA 단식 랭킹 최고 순위는 백칠
    40.57s  user  발화 끝
    42.26s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.18s]: [source: ITF Tennis] Raffaella Reggi is an Italian former professional
    49.44s  user  발화 시작: 백칠십삼위면 아주 높은 순위는 아니네요? 올림픽에 나갈 정도면 그래도 실력이 꽤 좋았을 텐데.
    49.51s  agent 발화 끝
    57.06s  agent 발화 시작: 올림픽에 출전하는 것 자체가 엄청난 성과예요.
    57.27s  user  발화 끝
    60.79s  user  발화 시작: 그렇죠, 그렇죠. 그럼 두 분이 같이 테니스 경기를 한 다른 대회도 있을까요? 올림픽 말고.
    60.80s  agent 발화 끝
    67.20s  <ret> 발화 (turn10 첫 프레임)
    67.59s  agent 발화 시작: <ret> 이천이십 도쿄 올림픽에서 잭 소크 선수와 라파엘라 레지 선수는 혼합 복식 일라운드에서 패배했어요.
    67.74s  user  발화 끝
    69.20s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.13s]: [source: Olympics.com] At the Tokyo 2020 Olympics, Jack Sock and Raffa
    73.02s  user  발화 시작: 진짜요?
    73.98s  user  발화 끝
    74.72s  agent 발화 끝
    75.97s  user  발화 시작: 아, 올림픽에서는 일라운드에서 졌군요. 조금 아쉽네요. 혹시 그 경기 결과에 대해 좀 더 자세히 알 수 있을
    83.95s  <ret> 발화 (turn13 첫 프레임)
    84.09s  agent 발화 시작: <ret> 잭 소크 선수와 라파엘라 레지 선수는 일라운드에서 호주의 맥스 퍼셀 선수와 샘 스토서 선수에게 육
    84.26s  user  발화 끝
    85.95s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.04s]: [source: ESPN] Jack Sock and Raffaella Reggi were defeated by Australi
    93.13s  agent 발화 끝
    93.61s  user  발화 시작: 음… 호주 선수들에게 졌군요. 맥스 퍼셀 선수랑 샘 스토서 선수도 유명한 테니스 선수들이죠?
   102.20s  <ret> 발화 (turn15 첫 프레임)
   102.51s  agent 발화 시작: <ret> 샘 스토서 선수는 호주 프로 테니스 선수이고, 한때 세계 사위였으며 그랜드 슬램 우승 경력이 있어
   102.75s  user  발화 끝
   104.20s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.85s]: [source: WTA Tennis] Sam Stosur is an Australian professional tennis p
   107.04s  user  발화 시작: 그렇군요.
   108.09s  user  발화 끝
   109.36s  agent 발화 끝
   109.44s  user  발화 시작: 그랜드 슬램 우승이라니 대단하네요. 그럼 잭 소크 선수도 그랜드 슬램 우승 경험이 있을까요?
   116.77s  <ret> 발화 (turn18 첫 프레임)
   117.00s  agent 발화 시작: <ret> 잭 소크 선수는 마이크 브라이언 선수와 함께 이천십칠년 US 오픈 남자 복식에서 우승했어요.
   117.14s  user  발화 끝
   118.77s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.04s]: [source: US Open] Jack Sock won the 2017 US Open men's doubles title w
   121.61s  user  발화 시작: 그렇죠.
   122.43s  user  발화 끝
   124.04s  agent 발화 끝
   124.08s  user  발화 시작: 아, 복식으로 우승했군요. 단식으로는 우승하지 못했네요.
   129.12s  user  발화 끝
   129.19s  agent 발화 시작: 네, 단식으로는 아직 그랜드 슬램 우승이 없어요.
   133.10s  user  발화 시작: 그렇군요. 두 분이 다시 함께 경기를 할 가능성은 있을까요?
   133.31s  agent 발화 끝
   137.92s  user  발화 끝
   138.12s  agent 발화 시작: 두 분이 다시 함께 경기를 할 가능성은 현재로서는 알 수 없어요.
   142.88s  user  발화 시작: 알 수 없다는 건, 은퇴해서 그런 건가요?
   143.07s  agent 발화 끝
   146.26s  <ret> 발화 (turn25 첫 프레임)
   146.34s  agent 발화 시작: <ret> 라파엘라 레지 선수는 이천십구년에 프로 테니스에서 은퇴했어요.
   146.49s  user  발화 끝
   148.26s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.28s]: [source: Tennis.com] Raffaella Reggi retired from professional tennis 
   148.52s  user  발화 시작: 음.
   148.96s  user  발화 끝
   151.16s  user  발화 시작: 아, 레지 선수는 은퇴하셨군요. 그럼 소크 선수는 지금도 계속 테니스를 치고 있나요?
   151.62s  agent 발화 끝
   157.94s  <ret> 발화 (turn28 첫 프레임)
   158.03s  agent 발화 시작: <ret> 이천이십삼년 십일월 현재, 잭 소크 선수의 세계 랭킹은 백삼십일위예요.
   158.20s  user  발화 끝
   159.62s  ⚡SPAN 주입 [d'=1.68s / d_lead=6.11s]: [source: ATP Tour] As of November 2023, Jack Sock is ranked No. 131 in
   163.95s  user  발화 시작: 백삼십일위면 예전보다 순위가 많이 떨어졌네요. 그래도 여전히 테니스 선수로 활동하고 있다는 게 놀랍네요.
   164.13s  agent 발화 끝
   172.58s  user  발화 끝
   172.96s  agent 발화 시작: 끊임없이 노력하는 모습이 멋지죠.
   176.15s  agent 발화 끝
   177.44s  user  발화 시작: 네, 정말 멋지네요. 오늘 알려주신 정보 감사합니다.
   181.65s  user  발화 끝
   181.67s  agent 발화 시작: 도움이 되었다니 기쁘네요. 언제든지 다시 찾아주세요.
   185.70s  agent 발화 끝
