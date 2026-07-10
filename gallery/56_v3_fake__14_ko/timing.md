# v3_fake__14_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_fake__14",
#     "name": "태국",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "50s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-02",
#       "category": "allergy",
#       "text": "User is allergic to shellfish."
#     },
#     {
#       "date": "2025-12-07",
#       "category": "diet",
#       "text": "User is vegan."
#     },
#     {
#       "date": "2025-07-07",
#       "category": "hobby",
#       "text": "User is into marathon training."
#     },
#     {
#       "date": "2025-06-04",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is sushi."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-14",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2026-04-16",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2026-01-04",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 음… 공화당 초창기 지도자는 누구였지? | S2 통나무집이라니… 신기하다. 그럼 링컨은 키가 얼마나 컸어? | S3 건강 관리? 그건 좋은 생각인데… | S4 아들들이 있었구나. 그럼 링컨은 어떻게 죽었어?

     0.00s  user  발화 시작: 음… 공화당 초창기 지도자는 누구였지?
     2.61s  <ret> 발화 (turn1 첫 프레임)
     2.76s  agent 발화 시작: <ret> 초창기 공화당을 이끌었던 분은 에이브러햄 링컨 대통령이셨어요. 그는 미국 열여섯대 대통령으로 천팔
     2.77s  ⚡SPAN 주입 [d'=2.00s / d_lead=11.55s]: Abraham Lincoln was the 16th President of the United States, serving f
     2.77s  user  발화 끝
    14.30s  user  발화 시작: 아, 링컨이구나. 근데 링컨은 무슨 일을 했더라?
    14.31s  agent 발화 끝
    17.51s  <ret> 발화 (turn3 첫 프레임)
    17.62s  user  발화 끝
    17.67s  agent 발화 시작: <ret> 링컨 대통령은 남북 전쟁을 이끌면서 나라를 지키고 노예제를 폐지하셨어요. 정말 위대한 업적이죠.
    17.67s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.05s]: Lincoln led the Union through the American Civil War, preserving the n
    21.36s  user  발화 시작: 응.
    21.57s  user  발화 끝
    24.71s  agent 발화 끝
    25.27s  user  발화 시작: 남북 전쟁이라… 그게 언제 시작됐었지?
    28.12s  <ret> 발화 (turn6 첫 프레임)
    28.52s  agent 발화 시작: <ret> 남북 전쟁은 천팔백육십일년 사월 십이일에 시작해서 천팔백육십오년 사월 구일에 끝났습니다. 사년이나
    28.52s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.99s]: The American Civil War began on April 12, 1861, and ended on April 9, 
    28.55s  user  발화 끝
    31.82s  user  발화 시작: 우와.
    32.45s  user  발화 끝
    37.31s  user  발화 시작: 사년이나… 엄청 길었네. 혹시 링컨 대통령은 변호사였어?
    37.51s  agent 발화 끝
    41.94s  <ret> 발화 (turn9 첫 프레임)
    42.04s  user  발화 끝
    42.09s  agent 발화 시작: <ret> 대통령이 되기 전에 링컨 대통령은 변호사였고, 일리노이 주 의원도 하셨다고 해요. 다재다능하셨네요
    42.10s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.69s]: Before becoming president, Abraham Lincoln was a lawyer and Illinois s
    49.76s  user  발화 시작: 변호사였구나. 그럼 링컨은 어디에서 태어났어?
    49.78s  agent 발화 끝
    52.60s  <ret> 발화 (turn11 첫 프레임)
    52.99s  agent 발화 시작: <ret> 링컨 대통령은 천팔백구년 이월 십이일, 켄터키 주 호지덴빌의 통나무집에서 태어났습니다. 소박한 환
    52.99s  user  발화 끝
    53.00s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.55s]: Abraham Lincoln was born in a log cabin in Hodgenville, Kentucky, on F
    59.80s  user  발화 시작: 어.
    60.15s  user  발화 끝
    62.41s  user  발화 시작: 통나무집이라니… 신기하다. 그럼 링컨은 키가 얼마나 컸어?
    62.54s  agent 발화 끝
    66.61s  <ret> 발화 (turn14 첫 프레임)
    66.63s  user  발화 끝
    66.68s  agent 발화 시작: <ret> 링컨 대통령은 육피트 사인치, 즉 백구십삼센티미터나 되셨어요. 당시로서는 굉장히 큰 키였답니다.
    66.69s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.69s]: Abraham Lincoln stood at 6 feet 4 inches (193 cm) tall, exceptionally 
    73.84s  user  발화 시작: 와, 엄청 크네! 혹시 링컨…
    74.37s  agent 발화 끝
    76.57s  user  발화 끝
    77.89s  user  발화 시작: …대통령이 쓴 유명한 연설문 있어?
    79.69s  <ret> 발화 (turn17 첫 프레임)
    80.08s  agent 발화 시작: <ret> 링컨 대통령의 게티즈버그 연설은 천팔백육십삼년에 발표되었는데, 미국 역사상 가장 유명한 연설 중 
    80.09s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.99s]: Lincoln’s Gettysburg Address, delivered in 1863, is one of the most fa
    80.15s  user  발화 끝
    85.53s  user  발화 시작: 응.
    85.92s  user  발화 끝
    89.07s  agent 발화 끝
    89.27s  user  발화 시작: 게티즈버그 연설? 그건 들어본 것 같아.
    91.90s  <ret> 발화 (turn20 첫 프레임)
    92.21s  agent 발화 시작: <ret> 아쉽지만, 그 연설에 대한 추가 정보는 지금 찾을 수 없네요.
    92.22s  user  발화 끝
    92.22s  ⚡SPAN 주입 [d'=1.60s / d_lead=4.67s]: (no information found)
    96.47s  <ret> 발화 (turn21 첫 프레임)
    96.70s  agent 발화 시작: <ret> 혹시 오늘 하루 건강 관리에 신경 쓰시는 건 어떠세요?
    96.71s  ⚡SPAN 주입(IRRELEVANT) [d'=2.00s / d_lead=3.52s]: The current temperature in Tokyo, Japan is 28.5°C, humidity is 68%, an
    96.88s  agent 발화 끝
   100.18s  user  발화 시작: 건강 관리? 그건 좋은 생각인데…
   100.22s  agent 발화 끝
   102.90s  user  발화 끝
   103.02s  agent 발화 시작: 규칙적인 운동과 건강한 식단은 정말 중요하죠. 저도 항상 강조하는 부분이에요.
   109.00s  user  발화 시작: 맞아, 운동해야 하는데… 요즘 너무 바빠서.
   109.11s  agent 발화 끝
   111.91s  user  발화 끝
   112.04s  agent 발화 시작: 바쁘시더라도 틈틈이 스트레칭이라도 하시면 도움이 될 거예요. 작은 습관이 큰 변화를 가져올 수 있답니다.
   117.47s  user  발화 시작: 응응.
   117.96s  user  발화 끝
   119.23s  user  발화 시작: 스트레칭… 알았어, 한번 해볼게.
   119.78s  agent 발화 끝
   121.48s  user  발화 끝
   121.51s  agent 발화 시작: 네, 잊지 마세요! 몸을 잘 챙기는 게 가장 중요하니까요.
   125.11s  agent 발화 끝
   125.64s  user  발화 시작: 근데 링컨 대통령은 결혼했었어?
   127.67s  <ret> 발화 (turn30 첫 프레임)
   127.91s  user  발화 끝
   127.98s  agent 발화 시작: <ret> 링컨 대통령은 천팔백사십이년에 메리 토드와 결혼했고, 네 명의 아들을 두셨어요. 행복한 가정이셨겠
   127.99s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.11s]: Abraham Lincoln married Mary Todd in 1842, and they had four sons.
   131.98s  user  발화 시작: 어.
   132.34s  user  발화 끝
   135.97s  user  발화 시작: 아들들이 있었구나. 그럼 링컨은 어떻게 죽었어?
   136.09s  agent 발화 끝
   139.05s  <ret> 발화 (turn33 첫 프레임)
   139.12s  agent 발화 시작: <ret> 링컨 대통령은 천팔백육십오년 사월 십오일에 존 윌크스 부스에게 암살당하셨습니다. 정말 안타까운 일
   139.13s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.04s]: Abraham Lincoln was assassinated by John Wilkes Booth on April 15, 186
   139.20s  user  발화 끝
   143.24s  user  발화 시작: 와.
   143.87s  user  발화 끝
   148.16s  agent 발화 끝
   149.27s  user  발화 시작: 암살당했구나… 너무 슬프다.
   151.86s  user  발화 끝
   152.22s  agent 발화 시작: 네, 정말 비극적인 사건이었죠. 하지만 링컨 대통령의 업적은 영원히 기억될 거예요.
   153.90s  user  발화 시작: 응.
   154.21s  user  발화 끝
   157.54s  agent 발화 끝
   157.58s  user  발화 시작: 맞아, 링컨은 정말 대단한 사람이었어.
   159.90s  agent 발화 시작: 링컨 대통령처럼 긍정적인 마음으로 하루를 보내시면 좋을 것 같아요. 힘내세요!
   159.93s  user  발화 끝
   163.29s  user  발화 시작: 응.
   163.68s  user  발화 끝
   165.93s  agent 발화 끝
   166.06s  user  발화 시작: 고마워, 젤라.
   167.30s  user  발화 끝
   167.43s  agent 발화 시작: 천만에요.
   168.43s  agent 발화 끝
