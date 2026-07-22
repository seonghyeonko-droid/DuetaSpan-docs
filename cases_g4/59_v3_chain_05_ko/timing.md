# v3_chain_05_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_chain_05",
#     "name": "연희",
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
#       "date": "2026-06-22",
#       "category": "home",
#       "text": "User's home address is 부산 수영구 광안동 210-3."
#     },
#     {
#       "date": "2026-06-18",
#       "category": "airline",
#       "text": "User usually flies with Qatar Airways."
#     },
#     {
#       "date": "2026-05-06",
#       "category": "wake",
#       "text": "User usually wakes up around 6am."
#     },
#     {
#       "date": "2026-04-04",
#       "category": "skill",
#       "text": "User is a complete beginner at marathon training."
#     },
#     {
#       "date": "2026-02-07",
#       "category": "schedule",
#       "text": "User has early shifts starting at 6am."
#     },
#     {
#       "date": "2026-02-03",
#       "category": "commute",
#       "text": "User walks 20 minutes to the office."
#     },
#     {
#       "date": "2026-01-06",
#       "category": "show",
#       "text": "User is currently watching a slow-burn detective drama."
#     },
#     {
#       "date": "2026-01-01",
#       "category": "child",
#       "text": "User has a child named Marco, age 6."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-19",
#       "title": "Booking a Japan trip",
#       "bullets": [
#         "5 nights in Kyoto and Osaka in October",
#         "wants a JR Pass and a ryokan for one night"
#       ]
#     },
#     {
#       "date": "2026-01-26",
#       "title": "Booking a moving company",
#       "bullets": [
#         "moving a 2-bedroom apartment across town on the 30th",
#         "needs help disassembling furniture"
#       ]
#     },
#     {
#       "date": "2026-01-24",
#       "title": "Learning to invest",
#       "bullets": [
#         "asked about index funds vs individual stocks",
#         "wants to start with 500k won a month"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 위도 삼십삼 점 사 사, 경도 -백십이 점 영 칠 근처에 있는 | S2 분위기 좋은 이탈리안 레스토랑이면 좋겠어요. 세이프웨이 근처로 | S3 그렇군요. 노력해 볼게요. 아, 내일 아침에 일찍 일어나야 하 | S4 아, 맞다. 내일 날씨가 어떤지 궁금해요.

     0.00s  user  발화 시작: 위도 삼십삼 점 사 사, 경도 -백십이 점 영 칠 근처에 있는 식료품점 좀 찾아주세요.
     4.65s  agent 발화 시작: 맞아요.
     5.43s  agent 발화 끝
     6.13s  <ret> 발화 (turn2 첫 프레임)
     6.26s  agent 발화 시작: <ret> 근처에 몇 군데 있네요. 가장 가까운 곳은 이백미터 거리에 있는 세이프웨이이고, 그 외에 홀푸드 
     6.34s  user  발화 끝
     7.16s  ⚡SPAN 주입 [d'=1.03s / d_lead=8.48s]: (tool result) Safeway (200 m), Whole Foods Market (450 m), Sprouts Far
    14.75s  agent 발화 끝
    14.84s  user  발화 시작: 세이프웨이가 제일 가깝네요. 거기까지 어떻게 가는지 알려주세요.
    18.46s  <ret> 발화 (turn4 첫 프레임)
    18.86s  user  발화 끝
    19.03s  agent 발화 시작: <ret> 메인 스트리트를 따라 북쪽으로 이백미터 정도 쭉 가시면 오른쪽에 바로 세이프웨이가 보일 거예요.
    20.17s  ⚡SPAN 주입 [d'=1.71s / d_lead=6.16s]: (tool result) Head north on Main St for 200 m, destination is on the r
    23.15s  user  발화 시작: 그렇죠.
    23.78s  user  발화 끝
    25.19s  agent 발화 끝
    25.92s  user  발화 시작: 아, 알겠습니다. 가기 전에 잠깐 명상을 좀 하고 싶은데…
    29.14s  user  발화 끝
    31.40s  user  발화 시작: …간단한 방법 있을까요?
    33.09s  user  발화 끝
    33.13s  agent 발화 시작: [happy] 그럼요. 편하게 앉아서 눈을 감고, 코로 숨을 깊게 들이마셨다가 입으로 천천히 내뱉는 것만 세
    40.30s  user  발화 시작: 예.
    40.74s  user  발화 끝
    43.20s  agent 발화 끝
    43.21s  user  발화 시작: ...아, 생각해보니 오늘 저녁에 친구랑 밥 먹기로 했는데 식당을 아직 안 정했어요.
    45.94s  agent 발화 시작: 아.
    46.43s  agent 발화 끝
    48.54s  user  발화 끝
    48.80s  agent 발화 시작: [curious] 아, 그러셨군요. 어떤 종류의 음식을 좋아하세요? 원하시는 스타일을 말씀해 주시면 제가 찾
    57.10s  agent 발화 끝
    57.16s  user  발화 시작: 분위기 좋은 이탈리안 레스토랑이면 좋겠어요. 세이프웨이 근처로 찾아봐 주시겠어요?
    62.20s  <ret> 발화 (turn14 첫 프레임)
    62.44s  agent 발화 시작: <ret> 세이프웨이 근처 이탈리안 식당으로는 별점 사 점 오점인 벨라 이탈리아가 삼백미터 거리에 있고, 육
    62.48s  user  발화 끝
    62.83s  ⚡SPAN 주입 [d'=0.63s / d_lead=9.46s]: (tool result) Bella Italia (rating 4.5, distance 300 m), Pasta Palace 
    69.05s  user  발화 시작: 네.
    69.50s  user  발화 끝
    71.80s  agent 발화 시작: 두 곳 다 평이 좋은데, 혹시 더 끌리는 곳이 있으신가요?
    71.89s  agent 발화 끝
    75.46s  agent 발화 끝
    75.47s  user  발화 시작: 벨라 이탈리아가 평점도 높고 가깝네요. 여기로 예약할 수 있을까요?
    80.16s  agent 발화 시작: 네, 가능합니다. 몇 시로 예약해 드릴까요? 그리고 방문하시는 인원수도 알려주세요.
    80.32s  user  발화 끝
    85.62s  agent 발화 끝
    86.32s  user  발화 시작: 오늘 저녁 일곱시에 두 명으로 예약해 주세요.
    89.03s  <ret> 발화 (turn20 첫 프레임)
    89.10s  agent 발화 시작: <ret> [happy] 네, 예약 완료되었습니다. 오늘 저녁 일곱시 벨라 이탈리아에 두 분 예약 잡으셨어요
    89.23s  user  발화 끝
    90.06s  ⚡SPAN 주입 [d'=1.03s / d_lead=10.20s]: (tool result) Bella Italia, 19:00, 2 guests, confirmed, booking ID: BI
    94.36s  user  발화 시작: 맞아요.
    95.05s  user  발화 끝
    99.19s  user  발화 시작: 감사합니다. 근데 요즘 잠을 좀 설쳐서 고민이에요.
    99.30s  agent 발화 끝
   102.86s  agent 발화 시작: [sigh] 잠자리가 불편하시면 정말 힘들죠. 자기 전에는 스마트폰 사용을 줄이시고, 방 온도를 약간 서늘하
   102.89s  user  발화 끝
   112.81s  user  발화 시작: 그렇군요. 노력해 볼게요. 아, 내일 아침에 일찍 일어나야 하는데 알람 좀 맞춰주세요.
   112.91s  agent 발화 끝
   115.54s  agent 발화 시작: 네.
   116.13s  agent 발화 끝
   118.70s  agent 발화 시작: 몇 시로 맞춰드릴까요?
   118.78s  user  발화 끝
   120.18s  user  발화 시작: 오전 여섯시 삼십분으로 설정해 주세요.
   120.36s  agent 발화 끝
   122.85s  <ret> 발화 (turn28 첫 프레임)
   122.97s  agent 발화 시작: <ret> 네, 내일 오전 여섯시 삼십분으로 알람 설정해 두었습니다.
   123.09s  user  발화 끝
   123.65s  ⚡SPAN 주입 [d'=0.80s / d_lead=3.51s]: (tool result) Alarm set for 06:30
   126.36s  user  발화 시작: 고마워요. 이제 진짜 나가봐야겠네요.
   126.48s  agent 발화 끝
   128.89s  user  발화 끝
   129.04s  agent 발화 시작: [happy] 네, 조심히 다녀오세요. 세이프웨이 들르시고 저녁 식사도 즐겁게 하시길 바랍니다.
   134.88s  agent 발화 끝
   135.39s  user  발화 시작: 네, 메리라 씨도 좋은 하루 보내세요.
   137.65s  user  발화 끝
   138.19s  agent 발화 시작: 감사합니다. 평온한 하루 보내세요!
   140.78s  agent 발화 끝
   141.28s  user  발화 시작: 아, 맞다. 내일 날씨가 어떤지 궁금해요.
   143.98s  <ret> 발화 (turn34 첫 프레임)
   144.46s  agent 발화 시작: <ret> 내일은 맑을 예정이에요. 최고 기온은 이십오도, 최저 기온은 십오도로 아주 쾌적한 날씨가 되겠네요
   144.51s  user  발화 끝
   144.59s  ⚡SPAN 주입 [d'=0.61s / d_lead=6.58s]: (tool result) Sunny, high 25 degrees, low 15 degrees
   151.04s  agent 발화 끝
   151.37s  user  발화 시작: 오, 날씨가 좋네요. 산책하기 딱 좋겠어요.
   153.76s  user  발화 끝
   154.13s  agent 발화 시작: [happy] 정말 그렇겠네요. 내일 가볍게 산책하시면서 기분 전환하시면 스트레스 해소에도 정말 좋을 거예요
   159.40s  user  발화 시작: 네.
   159.75s  user  발화 끝
   161.69s  user  발화 시작: 좋은 생각이에요. 그럼 나중에 또 올게요.
   161.78s  agent 발화 끝
   163.94s  agent 발화 시작: 네, 언제든 도움이 필요하시면 말씀해 주세요. 기다리고 있을게요.
   163.96s  user  발화 끝
   167.12s  user  발화 시작: 맞아요.
   167.75s  user  발화 끝
   168.76s  agent 발화 끝
   169.07s  user  발화 시작: 네, 안녕히 계세요.
   170.22s  user  발화 끝
   170.58s  agent 발화 시작: 안녕히 가세요!
   171.58s  agent 발화 끝
