# v3_backg_17_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_backg_17",
#     "name": "윤영",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "60s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-29",
#       "category": "medication",
#       "text": "User takes blood-pressure medication."
#     },
#     {
#       "date": "2026-05-03",
#       "category": "skill",
#       "text": "User is just getting back into astrophotography."
#     },
#     {
#       "date": "2026-04-28",
#       "category": "sibling",
#       "text": "User has a younger sibling named Rin."
#     },
#     {
#       "date": "2026-02-21",
#       "category": "dish",
#       "text": "User's go-to comfort dish is shakshuka."
#     },
#     {
#       "date": "2026-01-14",
#       "category": "bloodtype",
#       "text": "User's blood type is O-."
#     },
#     {
#       "date": "2026-01-03",
#       "category": "streaming",
#       "text": "User subscribes to Apple Music and Coupang Play."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-19",
#       "title": "Buying a gift for a parent",
#       "bullets": [
#         "mom's 60th birthday next month",
#         "considering a spa day or a watch"
#       ]
#     },
#     {
#       "date": "2026-04-02",
#       "title": "Booking a moving company",
#       "bullets": [
#         "moving a 2-bedroom apartment across town on the 30th",
#         "needs help disassembling furniture"
#       ]
#     },
#     {
#       "date": "2026-03-09",
#       "title": "Building a PC",
#       "bullets": [
#         "budget around 2M won for gaming",
#         "torn between two GPUs"
#       ]
#     },
#     {
#       "date": "2026-01-10",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool and a sauna",
#         "prefers one within 10 minutes of the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 마추픽추를 누가 발견했는지 궁금해. | S2 음… 요즘 날씨가 어때? | S3 응, 지금 서울에 있어. | S4 조계사… 가봐야겠다.

     0.00s  user  발화 시작: 마추픽추를 누가 발견했는지 궁금해.
     1.80s  <ret> 발화 (turn1 첫 프레임)
     2.41s  agent 발화 시작: <ret> 마추픽추를 서양에 알린 건 천구백십일년에 미국의 탐험가인 히람 빙엄 씨입니다.
     2.53s  user  발화 끝
     2.72s  ⚡SPAN 주입 [d'=0.92s / d_lead=5.93s]: Hiram Bingham, an American explorer, brought Machu Picchu to Western a
     5.46s  user  발화 시작: 응.
     5.91s  user  발화 끝
     8.34s  agent 발화 끝
     8.41s  user  발화 시작: 음, 그 탐험가는 다른 걸 발견한 적도 있어?
    11.41s  <ret> 발화 (turn4 첫 프레임)
    11.60s  user  발화 끝
    11.60s  agent 발화 시작: <ret> 히람 빙엄 씨는 페루의 다른 유적지도 탐험하고 지도에 기록했는데, 잃어버린 도시 초케키라오도 그중
    12.63s  ⚡SPAN 주입 [d'=1.22s / d_lead=7.60s]: Hiram Bingham also explored and mapped sites in Peru, including the lo
    14.11s  user  발화 시작: 응.
    14.51s  user  발화 끝
    19.08s  agent 발화 시작: 초케키라오는 마추픽추만큼 유명하지는 않지만, 잉카 문명의 중요한 유적지로 여겨지고 있습니다.
    19.20s  agent 발화 끝
    25.38s  agent 발화 끝
    25.52s  user  발화 시작: 초케키라오… 이름이 어렵네.
    27.69s  agent 발화 시작: [laugh] 이름이 조금 어렵긴 하죠. 마추픽추만큼 많은 사람들이 방문하지 않아서 조용하게 둘러볼 수 있다
    27.78s  user  발화 끝
    32.50s  user  발화 시작: 그치.
    33.13s  user  발화 끝
    35.89s  agent 발화 끝
    36.59s  user  발화 시작: 음… 요즘 날씨가 어때?
    38.46s  <ret> 발화 (turn11 첫 프레임)
    38.88s  agent 발화 시작: <ret> 현재 부산 날씨는 섭씨 이십팔 점 오도, 습도는 육십팔퍼센트, 바람은 시속 사 점 이킬로미터이고,
    38.99s  user  발화 끝
    39.20s  ⚡SPAN 주입 [d'=0.73s / d_lead=9.03s]: (tool result) Busan: 28.5°C, humidity 68%, wind 4.2 km/h, clear skies.
    42.02s  user  발화 시작: 음.
    42.43s  user  발화 끝
    47.91s  agent 발화 끝
    48.03s  user  발화 시작: 부산은 덥겠네. 서울은 어때?
    49.94s  <ret> 발화 (turn14 첫 프레임)
    49.94s  agent 발화 시작: <ret> 서울은 섭씨 이십육 점 일도, 습도는 칠십일퍼센트, 바람은 시속 삼 점 팔킬로미터이고, 구름이 조
    50.11s  user  발화 끝
    50.73s  ⚡SPAN 주입 [d'=0.79s / d_lead=9.97s]: (tool result) Seoul: 26.1°C, humidity 71%, wind 3.8 km/h, partly cloud
    59.88s  user  발화 시작: 아, 서울은 좀 덜 덥겠네.
    59.91s  agent 발화 끝
    61.57s  agent 발화 시작: 네, 서울은 부산보다는 조금 시원합니다. [happy] 혹시 서울에 계신가요?
    61.67s  user  발화 끝
    67.64s  agent 발화 끝
    67.88s  user  발화 시작: 응, 지금 서울에 있어.
    69.44s  agent 발화 시작: 서울에 계시는군요. 혹시 오늘 서울에서 특별한 계획이 있으신가요?
    69.49s  user  발화 끝
    71.56s  user  발화 시작: 어어.
    72.38s  user  발화 끝
    74.26s  agent 발화 끝
    74.94s  user  발화 시작: 어휴, 오늘따라 지하철이 왜 이렇게 붐비지?
    77.53s  user  발화 끝
    77.55s  agent 발화 시작: [curious] 혹시 서울에서 가보고 싶은 곳이 있으세요?
    80.79s  agent 발화 끝
    80.81s  user  발화 시작: 음… 요즘 좀 불안해서 마음이 편해지는 곳이 있으면 좋겠어.
    82.84s  agent 발화 시작: 음.
    83.48s  agent 발화 끝
    84.12s  <ret> 발화 (turn24 첫 프레임)
    84.62s  agent 발화 시작: <ret> 불안하시군요. 마음이 편해지는 곳을 찾으시는군요. 서울에는 아름다운 사찰이 많이 있습니다.
    84.69s  ⚡SPAN 주입 [d'=0.57s / d_lead=7.28s]: Jogyesa Temple is a chief temple of the Jogye Order of Korean Buddhism
    84.88s  user  발화 끝
    91.84s  agent 발화 시작: 서울에 있는 조계사라는 절은 한국 불교 조계종의 주요 사찰입니다. 조용하고 평화로운 분위기에서 마음을 안정시
    91.90s  agent 발화 끝
   101.48s  agent 발화 끝
   101.84s  user  발화 시작: 조계사… 가봐야겠다.
   103.58s  user  발화 끝
   103.79s  agent 발화 시작: 조계사에 가시면 마음이 한결 편안해지실 거예요. [happy] 혹시 조계사 가는 방법을 알아드릴까요?
   108.93s  user  발화 시작: 그치.
   109.52s  user  발화 끝
   110.32s  user  발화 시작: 응, 부탁해.
   110.56s  agent 발화 끝
   111.44s  <ret> 발화 (turn30 첫 프레임)
   111.61s  agent 발화 시작: <ret> 지하철 일호선을 타고 종로삼가역에서 내려 오번 출구로 나오시면 됩니다. 도보로 오분 정도 걸리고,
   111.79s  user  발화 끝
   112.39s  ⚡SPAN 주입 [d'=0.95s / d_lead=9.18s]: (tool result) Directions: Take subway line 1 to Jongno 3-ga Station, e
   120.80s  agent 발화 끝
   121.46s  user  발화 시작: 고마워.
   122.09s  user  발화 끝
   122.10s  agent 발화 시작: [happy] 천만에요.
   123.71s  agent 발화 끝
