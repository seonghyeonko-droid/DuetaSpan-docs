# v3_rag_26_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_26",
#     "name": "하호",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "early 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-28",
#       "category": "pet",
#       "text": "User has a Golden Retriever named Max."
#     },
#     {
#       "date": "2026-02-07",
#       "category": "home",
#       "text": "User's home address is 서울 마포구 성산동 45-6."
#     },
#     {
#       "date": "2025-12-01",
#       "category": "allergy",
#       "text": "User is allergic to pollen."
#     },
#     {
#       "date": "2025-06-20",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-11",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2025-10-10",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2025-05-30",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 아, 요즘 친구 만나는 게 좀 어렵네. | S2 부활절 봉기라… 그게 뭔데? | S3 그럼 완전 독립은 언제 이루어진 거지? | S4 릴리안 스미스라… 이름 처음 들어봐.

     0.00s  user  발화 시작: 아, 요즘 친구 만나는 게 좀 어렵네.
     4.23s  agent 발화 시작: 친구 관계에 어려움을 느끼시는군요. 로미가 옆에서 함께 고민하고 도와드릴게요.
     4.23s  user  발화 끝
     9.67s  user  발화 시작: 음.
     9.67s  agent 발화 끝
    10.27s  user  발화 시작: 고마워. 혹시 아일랜드 독립에 대해 알아볼 수 있을까? 갑자기 궁금해졌어.
    10.27s  user  발화 끝
    16.31s  agent 발화 시작: 그렇죠.
    16.31s  user  발화 끝
    16.80s  <ret> 발화 (turn5 첫 프레임)
    16.92s  agent 발화 시작: <ret> 아일랜드는 영국으로부터 독립을 얻은 건, 천구백이십이년에 아일랜드 자유국이 설립되고 천구백사십구년
    16.92s  agent 발화 끝
    17.47s  ⚡SPAN 주입 [d'=0.67s / d_lead=7.25s]: Ireland achieved independence from Britain in 1922, though the Irish F
    24.17s  user  발화 시작: 음, 천구백이십이년이구나. 근데 아일랜드 독립 운동의 배경은 뭐였지?
    24.17s  agent 발화 끝
    28.50s  <ret> 발화 (turn7 첫 프레임)
    29.00s  agent 발화 시작: <ret> 아일랜드 독립 운동은 수세기 동안의 영국 통치, 경제적 어려움, 문화적 억압 때문에 일어났고, 천
    29.00s  user  발화 끝
    29.94s  ⚡SPAN 주입 [d'=1.44s / d_lead=10.88s]: The Irish independence movement was fueled by centuries of British rul
    39.88s  user  발화 시작: 맞아.
    39.88s  agent 발화 끝
    40.48s  user  발화 시작: 부활절 봉기라… 그게 뭔데?
    40.48s  user  발화 끝
    42.75s  <ret> 발화 (turn10 첫 프레임)
    42.90s  agent 발화 시작: <ret> 부활절 봉기는 천구백십육년 더블린에서 아일랜드 공화주의자들이 영국 통치를 끝내기 위해 일으킨 무장
    42.90s  user  발화 끝
    43.47s  ⚡SPAN 주입 [d'=0.73s / d_lead=7.85s]: The Easter Rising was an armed insurrection in Dublin in 1916, launche
    50.75s  user  발화 시작: 응.
    50.75s  agent 발화 끝
    51.36s  user  발화 시작: 아, 그렇구나. 그럼 그 이후에 어떻게 독립하게 된 거야?
    51.36s  user  발화 끝
    56.44s  <ret> 발화 (turn13 첫 프레임)
    56.80s  agent 발화 시작: <ret> 부활절 봉기와 아일랜드 독립 전쟁(천구백십구년에서 천구백이십일년) 이후, 천구백이십일년 영국-아일
    56.80s  user  발화 끝
    57.64s  ⚡SPAN 주입 [d'=1.20s / d_lead=10.27s]: Following the Easter Rising and the Irish War of Independence (1919–19
    67.07s  user  발화 시작: 자치령? 완전 독립은 아니었나 보네.
    67.07s  agent 발화 끝
    70.09s  agent 발화 시작: 네, 처음부터 완전한 독립은 아니었어요. 하지만 점차적으로 자치권이 확대되었죠.
    70.09s  user  발화 끝
    75.53s  user  발화 시작: 그럼 완전 독립은 언제 이루어진 거지?
    75.53s  agent 발화 끝
    79.09s  <ret> 발화 (turn17 첫 프레임)
    79.15s  agent 발화 시작: <ret> 아일랜드 공화국은 천구백사십구년에 선포되면서 영국 연방과의 관계를 완전히 끊고 주권 독립 국가가 
    79.15s  user  발화 끝
    80.36s  ⚡SPAN 주입 [d'=1.27s / d_lead=7.85s]: The Republic of Ireland was declared in 1949, fully severing ties with
    87.01s  user  발화 시작: 어.
    87.01s  agent 발화 끝
    87.61s  user  발화 시작: 아하, 천구백사십구년이 완전 독립이구나. —
    87.61s  user  발화 끝
    90.63s  user  발화 시작: 근데, 아일랜드 독립운동에 여성들은 어떤 역할을 했어?
    90.63s  user  발화 끝
    94.75s  <ret> 발화 (turn21 첫 프레임)
    94.86s  agent 발화 시작: <ret> 여성들은 독립 운동에서 아주 중요한 역할을 했어요.
    94.86s  user  발화 끝
    95.51s  ⚡SPAN 주입 [d'=0.75s / d_lead=4.23s]: Women played a crucial role in the Irish independence movement, partic
    99.09s  agent 발화 시작: 여성들은 모금, 정보 수집부터 무장 투쟁, 정치 활동까지 독립 운동의 모든 부분에 참여했어요.
    99.09s  agent 발화 끝
   106.95s  user  발화 시작: 음.
   106.95s  agent 발화 끝
   107.33s  <ret> 발화 (turn24 첫 프레임)
   107.55s  agent 발화 시작: <ret> 네, 정말 대단하죠. 많은 여성들이 용감하게 싸웠어요. 독립운동가들 중에서도 릴리안 스미스는 특히
   107.55s  user  발화 끝
   108.30s  ⚡SPAN 주입 [d'=0.97s / d_lead=8.46s]: Lilian Smith was a prominent Irish republican activist and a key figur
   116.01s  agent 발화 시작: 릴리안 스미스는 아일랜드 독립 전쟁에서 중요한 역할을 한 저명한 아일랜드 공화주의 활동가로, 정보 활동과 용
   116.01s  agent 발화 끝
   126.28s  user  발화 시작: 릴리안 스미스라… 이름 처음 들어봐.
   126.28s  agent 발화 끝
   129.30s  agent 발화 시작: 릴리안 스미스는 독립 운동에 헌신했던 분이세요.
   129.30s  user  발화 끝
   132.93s  user  발화 시작: 음.
   132.93s  agent 발화 끝
   133.53s  user  발화 시작: 음, 아일랜드 독립 운동에 대해 많이 알게 됐네. 고마워, 로미.
   133.53s  user  발화 끝
   139.57s  agent 발화 시작: 예.
   139.57s  user  발화 끝
   140.18s  agent 발화 시작: 도움이 되었다니 기쁘네요.
   140.18s  agent 발화 끝
   141.99s  user  발화 시작: 아니, 오늘은 이 정도면 충분해.
   141.99s  agent 발화 끝
   145.01s  user  발화 끝
