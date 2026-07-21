# v3_card_53_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_card_53",
#     "name": "성담",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "mid 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-27",
#       "category": "skill",
#       "text": "User is just getting back into salsa dancing."
#     },
#     {
#       "date": "2026-03-08",
#       "category": "temp",
#       "text": "User keeps the home thermostat around 26°C."
#     },
#     {
#       "date": "2026-02-26",
#       "category": "allergy",
#       "text": "User is allergic to eggs."
#     },
#     {
#       "date": "2026-02-08",
#       "category": "learning",
#       "text": "User is studying Japanese."
#     },
#     {
#       "date": "2026-01-19",
#       "category": "savings",
#       "text": "User is saving for a new car."
#     },
#     {
#       "date": "2026-01-04",
#       "category": "schedule",
#       "text": "User has on-call weekends."
#     },
#     {
#       "date": "2025-12-26",
#       "category": "dish",
#       "text": "User's go-to comfort dish is pad thai."
#     },
#     {
#       "date": "2025-12-17",
#       "category": "hobby",
#       "text": "User is into alpine wildflower photography."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-29",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers for a 3-story house",
#         "wanted coverage for the basement office"
#       ]
#     },
#     {
#       "date": "2026-04-19",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing the Kia Niro hybrid and Hyundai Ioniq",
#         "wants under 30k miles and below 25M won"
#       ]
#     },
#     {
#       "date": "2026-01-22",
#       "title": "Planning a camping trip",
#       "bullets": [
#         "a weekend at a lake site in September",
#         "asked about a 4-person tent and a cooler"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 안녕하세요, 트히아우스 씨. 오늘 하루도 잘 보내셨어요? | S2 부산대학교는 가본 적이 있어요. 캠퍼스가 예쁘더라고요. | S3 돼지국밥도 좋죠. 부산에 맛있는 돼지국밥집 있나요? | S4 네, 좀 지치네요.

     0.00s  user  발화 시작: 안녕하세요, 트히아우스 씨. 오늘 하루도 잘 보내셨어요?
     3.84s  user  발화 끝
     4.36s  agent 발화 시작: 안녕하세요, 성담 씨! 네, 덕분에 잘 보내고 있어요. 혹시 오늘 무슨 일로 찾아오셨나요?
    11.03s  agent 발화 끝
    11.19s  user  발화 시작: 그냥 심심해서요. 요즘 좀 외로운 것 같아요.
    14.37s  agent 발화 시작: 외로움을 느끼시는군요. 혼자 있는 시간이 많으신가 봐요. 괜찮아요, 그런 감정은 누구나 느낄 수 있어요.
    14.56s  user  발화 끝
    18.63s  user  발화 시작: 네.
    18.99s  user  발화 끝
    22.72s  user  발화 시작: 다음 주 칠월 이십삼일 오전 열시 삼십분에 차 정비 맡기기로 했어요.
    22.80s  agent 발화 끝
    26.91s  agent 발화 시작: 네, 기억해 둘게요.
    27.07s  user  발화 끝
    28.48s  agent 발화 끝
    28.86s  user  발화 시작: 비용은 오만 원 정도 예상하고 있어요.
    31.20s  agent 발화 시작: 네, 알겠습니다. 오만 원으로 기억해 둘게요.
    31.31s  user  발화 끝
    34.88s  user  발화 시작: 요즘 미국 대학에 관심이 생겨서요. 규모가 큰 학교들이 어디 있는지 궁금해요.
    34.99s  agent 발화 끝
    39.52s  <ret> 발화 (turn10 첫 프레임)
    39.75s  agent 발화 시작: <ret> 미국에서 규모가 큰 대학을 찾으신다면, 애리조나 주립대학교는 좋은 선택이 될 수 있어요. 이천이십
    39.79s  user  발화 끝
    40.65s  ⚡SPAN 주입 [d'=1.13s / d_lead=11.23s]: Arizona State University is one of the largest universities in the Uni
    50.97s  agent 발화 끝
    52.31s  user  발화 시작: 팔만 명 넘는 대학이라니, 정말 크네요. 다른 큰 대학은 없을까요?
    55.92s  agent 발화 시작: 네.
    56.56s  agent 발화 끝
    56.77s  <ret> 발화 (turn13 첫 프레임)
    57.24s  agent 발화 시작: <ret> 네, 또 다른 큰 대학으로는 텍사스 A&M 대학교가 있어요. 이천이십이년 가을 기준 총 학생 수는
    57.26s  user  발화 끝
    57.58s  ⚡SPAN 주입 [d'=0.81s / d_lead=10.06s]: Texas A&M University’s total enrollment for fall 2022 was 77,480 stude
    61.07s  user  발화 시작: 네.
    61.52s  user  발화 끝
    67.30s  agent 발화 끝
    67.55s  user  발화 시작: 텍사스 A&M 대학교도 크네요. 혹시 한국 대학 중에 규모가 큰 곳은 어디인가요?
    72.71s  <ret> 발화 (turn16 첫 프레임)
    72.73s  agent 발화 시작: <ret> 한국 대학교 중에서는 한국방송통신대학교가 가장 규모가 큰 편이에요. 이천이십삼년 기준으로 약 십팔
    72.73s  user  발화 끝
    74.29s  ⚡SPAN 주입 [d'=1.58s / d_lead=11.08s]: As of 2023, Korea National Open University has the largest student bod
    83.81s  agent 발화 끝
    84.52s  user  발화 시작: 아, 방송통신대학교요? 저는 정규 대학을 알아보고 있어요.
    88.97s  agent 발화 시작: 아, 정규 대학을 찾으시는군요. 그럼 다른 학교를 알아봐 드릴게요.
    89.10s  user  발화 끝
    92.46s  user  발화 시작: 네.
    92.86s  user  발화 끝
    94.21s  agent 발화 끝
    94.42s  user  발화 시작: 네, 부탁드려요. 부산에 있는 대학교 중에 규모가 큰 곳은 어디인가요?
    99.44s  <ret> 발화 (turn21 첫 프레임)
    99.59s  agent 발화 시작: <ret> 부산에 있는 대학교 중에서는 부산대학교가 규모가 큰 편이에요. 이천이십삼년 기준 학부생과 대학원생
    99.65s  user  발화 끝
   100.81s  ⚡SPAN 주입 [d'=1.37s / d_lead=12.11s]: Pusan National University had a total enrollment of 28,899 undergradua
   111.70s  agent 발화 끝
   111.73s  user  발화 시작: 부산대학교는 가본 적이 있어요. 캠퍼스가 예쁘더라고요.
   115.27s  <ret> 발화 (turn23 첫 프레임)
   115.41s  agent 발화 시작: <ret> 부산대학교 근처에는 카페 앙페므라는 곳이 유명해요. 디저트와 커피가 맛있다고 하네요. 네이버에서 
   115.47s  user  발화 끝
   116.49s  ⚡SPAN 주입 [d'=1.22s / d_lead=11.12s]: Cafe Une Femme is a popular cafe near Pusan National University, known
   119.10s  user  발화 시작: 네.
   119.51s  user  발화 끝
   126.53s  agent 발화 끝
   128.46s  user  발화 시작: 카페 앙페므요? 한번 가봐야겠네요.
   131.24s  user  발화 끝
   131.33s  agent 발화 시작: 네, 한번 가보세요. 분명 마음에 드실 거예요. 혹시 다른 맛집도 찾으시나요?
   137.94s  user  발화 시작: 영화 볼까요? 요즘 개봉한 영화 중에 재미있는 거 있으면 추천해 주세요.
   138.05s  agent 발화 끝
   142.51s  <ret> 발화 (turn28 첫 프레임)
   142.58s  agent 발화 시작: <ret> 요즘 한국 극장에서는 ‘인사이드 아웃 이’가 가장 평점이 높아요. 칠월 구일 기준으로 일만 구천육
   142.75s  user  발화 끝
   143.62s  ⚡SPAN 주입 [d'=1.11s / d_lead=12.57s]: “Inside Out 2” is currently the highest-rated film in South Korean cin
   147.63s  user  발화 시작: 정말요?
   148.44s  user  발화 끝
   155.03s  user  발화 시작: 인사이드 아웃 이요? 일편도 재미있게 봤는데, 이편도 봐야겠네요.
   155.15s  agent 발화 끝
   159.54s  agent 발화 시작: 네, 일편을 재미있게 보셨다면 이편도 분명 즐겁게 보실 수 있을 거예요.
   159.56s  user  발화 끝
   161.02s  user  발화 시작: 예.
   161.47s  user  발화 끝
   164.16s  agent 발화 끝
   164.94s  user  발화 시작: 혹시 부산에서 영화를 볼 수 있는 좋은 영화관 있나요?
   167.89s  <ret> 발화 (turn34 첫 프레임)
   167.97s  agent 발화 시작: <ret> 부산에는 롯데시네마 부산이 인기가 많아요. 다양한 영화를 상영하고 좌석도 편안하다고 합니다. 평점
   168.04s  user  발화 끝
   169.11s  ⚡SPAN 주입 [d'=1.22s / d_lead=9.83s]: Lotte Cinema Busan is a popular cinema in Busan, offering a variety of
   175.36s  user  발화 시작: 네.
   175.81s  user  발화 끝
   177.80s  agent 발화 끝
   178.36s  user  발화 시작: 롯데시네마 부산이요? 거기는 자주 가요.
   181.31s  user  발화 끝
   181.53s  agent 발화 시작: 자주 가시는 곳이군요. 혹시 다른 영화관도 알아볼까요?
   185.17s  user  발화 시작: 그렇죠.
   185.90s  user  발화 끝
   186.39s  agent 발화 끝
   187.33s  user  발화 시작: 아니요, 괜찮아요. 그럼 저녁 메뉴는 뭘 먹을까요?
   190.94s  user  발화 끝
   191.00s  agent 발화 시작: 저녁 메뉴요? 혹시 특별히 드시고 싶은 게 있으신가요?
   192.00s  🃏 CARD 주입 (2400f, 누적 41턴 요약, 118f): car repair date: 다음 주 칠월 이십삼일 오전 열시 삼십분; car repair cost: 오만 원; university location: 부산; m
   193.23s  user  발화 시작: 그렇죠.
   194.05s  user  발화 끝
   194.74s  agent 발화 끝
   196.00s  user  발화 시작: 그냥 맛있는 거 먹고 싶어요.
   197.64s  <ret> 발화 (turn43 첫 프레임)
   197.90s  agent 발화 시작: <ret> 맛있는 거요? 그럼 부산에서 유명한 돼지국밥을 추천해 드릴까요?
   197.99s  user  발화 끝
   198.81s  ⚡SPAN 주입 [d'=1.17s / d_lead=4.49s]: Dwaeji Gukbap (pork and rice soup) is a signature dish of Busan, known
   202.21s  agent 발화 시작: 부산에서는 돼지국밥이 유명해요. 진한 국물과 부드러운 돼지고기가 특징입니다.
   202.39s  agent 발화 끝
   208.03s  user  발화 시작: 돼지국밥도 좋죠. 부산에 맛있는 돼지국밥집 있나요?
   208.37s  agent 발화 끝
   211.90s  <ret> 발화 (turn46 첫 프레임)
   212.48s  user  발화 끝
   212.51s  agent 발화 시작: <ret> 부산에는 밀면전주집이라는 돼지국밥 전문점이 유명해요. 네이버에서 평점 사 점 이점을 받았다고 합니
   213.08s  ⚡SPAN 주입 [d'=1.18s / d_lead=7.60s]: Milmyeon Jeonju House is a well-known restaurant in Busan specializing
   216.19s  user  발화 시작: 아.
   216.68s  user  발화 끝
   220.11s  agent 발화 끝
   221.60s  user  발화 시작: 밀면전주집이요? 가봐야겠네요.
   224.49s  agent 발화 시작: 네, 한번 가보세요. 분명 맛있을 거예요.
   224.55s  user  발화 끝
   227.82s  agent 발화 끝
   228.03s  user  발화 시작: 오늘 하루가 어떻게 지나가는지 시간이 정말 빠르네요.
   231.27s  user  발화 끝
   231.84s  agent 발화 시작: 시간이 정말 빠르게 흐르는 것 같아요.
   234.44s  user  발화 시작: 칠월 이십삼일 차 정비 시간, 다시 한번 알려주세요.
   234.48s  agent 발화 끝
   237.81s  user  발화 끝
   238.06s  agent 발화 시작: 칠월 이십삼일 오전 열시 삼십분입니다.
   240.82s  agent 발화 끝
   240.87s  user  발화 시작: 차 정비 비용은 얼마였죠?
   243.04s  user  발화 끝
   243.29s  agent 발화 시작: 오만 원입니다.
   244.48s  agent 발화 끝
   245.53s  user  발화 시작: 아, 맞아요. 기억났네요.
   247.79s  user  발화 끝
   248.30s  agent 발화 시작: 다행이에요. 혹시 다른 필요한 정보가 있으신가요?
   250.13s  user  발화 시작: 네.
   250.85s  user  발화 끝
   252.05s  agent 발화 끝
   252.53s  user  발화 시작: 요즘 스트레스가 좀 쌓이는 것 같아요.
   254.83s  agent 발화 시작: 스트레스가 쌓이셨군요. 힘든 일이 있으신가요?
   254.93s  user  발화 끝
   259.13s  user  발화 시작: 그냥 여러 가지 일들이 겹쳐서 그래요.
   259.14s  agent 발화 끝
   261.20s  user  발화 끝
   261.20s  agent 발화 시작: 여러 가지 일이 겹쳐서 힘드신 거군요.
   262.82s  user  발화 시작: 네네.
   263.38s  user  발화 시작: 네, 좀 지치네요.
   263.45s  user  발화 끝
   263.79s  agent 발화 끝
   264.85s  user  발화 끝
   264.97s  agent 발화 시작: 지치셨군요. 잠시 쉬면서 기분 전환을 해보시는 건 어떠세요?
   268.21s  user  발화 시작: 아.
   268.70s  user  발화 끝
   269.88s  user  발화 시작: 쉬는 것도 좋죠. 하지만 해야 할 일들이 너무 많아요.
   270.06s  agent 발화 끝
   273.62s  user  발화 끝
   273.74s  agent 발화 시작: 해야 할 일들이 많아서 힘드시군요.
   276.19s  user  발화 시작: — 사실은, 저는 새로운 취미를 갖고 싶은데, 뭘 하면 좋을지 모르겠어요.
   276.33s  agent 발화 끝
   281.04s  user  발화 끝
   281.14s  user  발화 시작: … 부산에서 배울 수 있는 취미 강좌가 있을까요?
   283.77s  <ret> 발화 (turn71 첫 프레임)
   283.89s  agent 발화 시작: <ret> 새로운 취미를 갖고 싶으시군요. 부산에서 배울 수 있는 취미 강좌를 알아봐 드릴게요. 부산문화회관
   284.00s  user  발화 끝
   284.55s  ⚡SPAN 주입 [d'=0.78s / d_lead=14.99s]: Busan Culture Center offers a variety of hobby classes, including pott
   298.88s  agent 발화 끝
   299.07s  user  발화 시작: 도자기 공예도 재미있을 것 같아요.
   301.19s  user  발화 끝
   301.50s  agent 발화 시작: 도자기 공예도 좋은 선택이에요. 직접 만든 작품을 보면 뿌듯할 거예요.
   304.33s  user  발화 시작: 그렇죠.
   304.96s  user  발화 끝
   306.87s  agent 발화 끝
   308.35s  user  발화 시작: 네, 한번 알아봐야겠어요.
   310.17s  agent 발화 시작: 네, 한번 알아보세요. 분명 즐거운 시간이 될 거예요.
   310.25s  user  발화 끝
   312.26s  user  발화 시작: 그렇죠.
   312.89s  user  발화 끝
   314.19s  user  발화 시작: 오늘 정말 즐거운 대화였어요.
   314.52s  agent 발화 끝
   316.17s  user  발화 끝
   316.24s  agent 발화 시작: [happy] 저도 성담 씨와 대화해서 즐거웠어요.
   318.16s  user  발화 시작: 음.
   318.66s  user  발화 끝
   318.77s  user  발화 시작: 네, 감사합니다.
   318.82s  agent 발화 끝
   320.24s  user  발화 끝
   320.40s  agent 발화 시작: [happy] 천만에요. 항상 응원하겠습니다. 좋은 하루 보내세요!
   326.15s  agent 발화 끝
