# v3_fake__13_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_fake__13",
#     "name": "정람",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "50s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-15",
#       "category": "hobby",
#       "text": "User is into home fermentation."
#     },
#     {
#       "date": "2026-04-28",
#       "category": "pet",
#       "text": "User has a Golden Retriever named Max."
#     },
#     {
#       "date": "2026-01-05",
#       "category": "home",
#       "text": "User's home address is 서울 마포구 성산동 45-6."
#     },
#     {
#       "date": "2025-07-31",
#       "category": "work",
#       "text": "User works as a nurse."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-08-27",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2025-08-25",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2025-08-14",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 미국에서 최초의 TV는 언제 나왔어요? | S2 아, 부자들만 볼 수 있었겠네요. | S3 컬러 TV는 언제 처음 나왔어요? | S4 생각보다 엄청 작았네요.

     0.00s  user  발화 시작: 미국에서 최초의 TV는 언제 나왔어요?
     2.42s  <ret> 발화 (turn1 첫 프레임)
     2.58s  agent 발화 시작: <ret> 최초의 TV 방송은 천구백이십팔년 칠월 이일에 시작되었답니다. 뉴욕 스키넥터디의 WGY 방송국에서
     2.58s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.32s]: July 2, 1928, marked the debut of mechanical television broadcasting i
     2.72s  user  발화 끝
     7.07s  user  발화 시작: 와.
     7.56s  user  발화 끝
    11.90s  agent 발화 끝
    12.79s  user  발화 시작: 와, 정말 오래됐네요.
    15.15s  user  발화 끝
    15.59s  agent 발화 시작: 시간이 참 빠르죠. 기술 발전의 역사가 느껴지네요. 요즘은 정말 다양한 방송을 즐길 수 있으니 말이에요.
    20.14s  user  발화 시작: 응.
    20.49s  user  발화 끝
    22.44s  agent 발화 끝
    22.56s  user  발화 시작: 그 방송국은 뭘 방송했어요?
    24.18s  <ret> 발화 (turn7 첫 프레임)
    24.42s  agent 발화 시작: <ret> WGY 방송국은 뉴스, 날씨, 음악 공연 같은 실험적인 프로그램을 방송했대요. 주로 기계식 TV 
    24.42s  ⚡SPAN 주입 [d'=1.20s / d_lead=8.02s]: WGY’s early broadcasts consisted of experimental programs, including n
    24.63s  user  발화 끝
    32.44s  agent 발화 끝
    32.56s  user  발화 시작: 기계식 TV요? 그게 뭐예요?
    34.97s  user  발화 끝
    35.21s  <ret> 발화 (turn9 첫 프레임)
    35.36s  agent 발화 시작: <ret> 기계식 TV는 지금 우리가 보는 디지털 TV와는 달라서, 회전하는 디스크를 이용해서 영상을 만들었
    35.37s  ⚡SPAN 주입(IRRELEVANT) [d'=2.00s / d_lead=8.52s]: The current price of Bitcoin is $67,321.55, with a 24-hour change of +
    43.85s  agent 발화 시작: 그런 기술을 거쳐 지금의 TV가 탄생한 거겠죠. 세상은 끊임없이 변화하는 것 같아요.
    43.88s  agent 발화 끝
    49.41s  agent 발화 끝
    50.69s  user  발화 시작: 그럼 그 방송을 볼 수 있는 사람은 얼마나 됐어요?
    53.46s  <ret> 발화 (turn12 첫 프레임)
    53.70s  agent 발화 시작: <ret> 천구백이십팔년에는 기계식 TV가 비싸고 흔하지 않아서, 방송을 볼 수 있는 사람은 취미로 하는 사
    53.70s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.97s]: Mechanical television sets were expensive and relatively uncommon in 1
    53.92s  user  발화 끝
    58.30s  user  발화 시작: 헐.
    58.79s  user  발화 끝
    61.65s  user  발화 시작: 아, 부자들만 볼 수 있었겠네요.
    61.67s  agent 발화 끝
    63.93s  agent 발화 시작: 그렇죠. 기술이 발전하면서 점점 더 많은 사람들이 TV를 즐길 수 있게 되었으니까요.
    63.95s  user  발화 끝
    67.92s  user  발화 시작: 응응.
    68.42s  user  발화 끝
    69.48s  agent 발화 끝
    70.48s  user  발화 시작: 그 이후에 TV가 어떻게 발전했는지 궁금해요.
    73.91s  agent 발화 시작: 이후 전자식 TV가 개발되면서 화질이 훨씬 좋아졌고—
    73.95s  user  발화 끝
    76.59s  user  발화 시작: …전자식 TV는 언제부터 나왔어요?
    77.24s  agent 발화 끝
    79.22s  <ret> 발화 (turn20 첫 프레임)
    79.38s  agent 발화 시작: <ret> 천구백이십칠년 구월 칠일에 파일로 판스워스가 최초의 완전 전자식 TV 시스템을 시연했고, 천구백이
    79.38s  ⚡SPAN 주입 [d'=2.00s / d_lead=12.56s]: Philo Farnsworth demonstrated the first all-electronic television syst
    79.54s  user  발화 끝
    91.95s  agent 발화 끝
    92.15s  user  발화 시작: 두 사람 다 중요한 역할을 했군요.
    94.14s  agent 발화 시작: 네, 두 사람 모두 TV 역사에서 빼놓을 수 없는 인물이에요. 기술 발전은 혼자만의 노력으로는 이루어지기 어
    94.36s  user  발화 끝
   100.57s  agent 발화 끝
   100.75s  user  발화 시작: 컬러 TV는 언제 처음 나왔어요?
   102.92s  <ret> 발화 (turn24 첫 프레임)
   103.08s  agent 발화 시작: <ret> 미국에서 최초의 컬러 TV 방송은 천구백오십사년 일월 일일에 NBC에서 시작되었어요. NTSC 컬
   103.08s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.71s]: The first color television broadcast in the United States occurred on 
   103.24s  user  발화 끝
   109.32s  user  발화 시작: 음.
   109.82s  user  발화 끝
   111.79s  agent 발화 끝
   112.86s  user  발화 시작: 컬러 TV가 나오기까지 시간이 꽤 걸렸네요.
   115.72s  user  발화 끝
   115.89s  agent 발화 시작: 기술이 발전하는 데는 시간이 필요하죠. 많은 사람들의 노력과 실험이 있었기에 지금의 컬러 TV를 볼 수 있는
   123.30s  agent 발화 끝
   123.78s  user  발화 시작: 요즘은 TV가 너무 커졌어요.
   126.18s  user  발화 끝
   126.61s  agent 발화 시작: 맞아요. 기술이 발전하면서 화면 크기도 점점 커지고 화질도 좋아지고 있네요.
   128.68s  user  발화 시작: 응.
   129.13s  user  발화 끝
   131.33s  agent 발화 끝
   132.67s  user  발화 시작: 옛날 TV는 화면이 얼마나 됐어요?
   134.96s  <ret> 발화 (turn32 첫 프레임)
   135.35s  agent 발화 시작: <ret> 초기 기계식 TV 화면은 기술적인 한계 때문에 대각선으로 몇 인치에서 십이인치 정도밖에 되지 않았
   135.36s  ⚡SPAN 주입 [d'=1.84s / d_lead=6.81s]: Early mechanical television screens were typically small, ranging from
   135.53s  user  발화 끝
   139.68s  user  발화 시작: 와.
   140.49s  user  발화 끝
   142.15s  user  발화 시작: 생각보다 엄청 작았네요.
   142.16s  agent 발화 끝
   143.94s  user  발화 끝
   144.24s  agent 발화 시작: 그렇죠. 지금의 큰 화면 TV와 비교하면 정말 작죠.
   148.08s  agent 발화 끝
   149.15s  user  발화 시작: TV가 우리 삶에 많은 영향을 줬네요.
   151.59s  user  발화 끝
   152.01s  agent 발화 시작: 네, TV는 정보 전달, 오락, 문화 등 우리 삶의 여러 측면에 큰 영향을 미쳤어요.
   153.79s  user  발화 시작: 음.
   154.24s  user  발화 끝
   157.25s  agent 발화 끝
   157.28s  user  발화 시작: 앞으로 TV는 어떻게 될까요?
   159.31s  agent 발화 시작: 앞으로 TV는 인공지능과 결합해서 더욱 개인화된 서비스를 제공할 것 같아요. 더욱 편리하고 즐거운 경험을 할
   159.36s  user  발화 끝
   166.62s  agent 발화 끝
   166.79s  user  발화 시작: 인공지능 TV라니, 신기하네요.
   169.22s  agent 발화 시작: 기술은 끊임없이 발전하니까요. 앞으로 어떤 놀라운 TV가 나올지 기대되네요.
   169.46s  user  발화 끝
   174.36s  agent 발화 끝
