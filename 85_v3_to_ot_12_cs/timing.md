# v3_to_ot_12_cs — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_to_ot_12",
#     "name": "Ella",
#     "location": {
#       "city": "Sydney",
#       "country": "Australia",
#       "timezone": "Australia/Sydney (AEDT, UTC+11)",
#       "currency": "AUD ($)"
#     },
#     "nationality": "Australian",
#     "gender": "female",
#     "age_range": "late 20s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-15",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-01-20",
#       "category": "trip",
#       "text": "User is planning a trip to Lisbon in May."
#     },
#     {
#       "date": "2025-12-03",
#       "category": "home",
#       "text": "User's home address is 102 Pine Court."
#     },
#     {
#       "date": "2025-07-25",
#       "category": "hobby",
#       "text": "User is into home fermentation."
#     },
#     {
#       "date": "2025-06-06",
#       "category": "work",
#       "text": "User works as a high-school teacher."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-03-25",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2025-06-06",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 안녕, 가온아, 오늘 기분은 어때? | S2 와, 진짜 덥네.… | S3 아, 있네. 오늘 해는 몇 시에 지지? | S4 수면 위생에 대한 정보 좀 찾아 줄래?

     0.00s  user  발화 시작: 안녕, 가온아, 오늘 기분은 어때?
     2.65s  agent 발화 시작: 기분 아주 좋아. 물어봐 줘서 고마워. 조용히 생각하고 편히 쉴 수 있는 날씨네. 넌 어때?
     2.77s  user  발화 끝
    10.20s  agent 발화 끝
    10.45s  user  발화 시작: 그럭저럭 괜찮아! 음… 혹시 마스터스 토너먼트 골프 코스 이름이 뭐였지?
    15.78s  <ret> 발화 (turn3 첫 프레임)
    16.06s  user  발화 끝
    16.18s  agent 발화 시작: <ret> 마스터스 토너먼트가 열리는 골프 코스는 조지아주 오거스타에 있는 오거스타 내셔널 골프 클럽이야. 
    16.18s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.65s]: Augusta National Golf Club in Augusta, Georgia, is the annual host of 
    20.57s  user  발화 시작: 어.
    21.38s  user  발화 끝
    25.76s  user  발화 시작: 아, 맞아! 오거스타. 알고 있었어.
    25.83s  agent 발화 끝
    29.02s  agent 발화 시작: 가끔은 세부 사항을 잊기 쉽지.
    29.17s  user  발화 끝
    29.86s  user  발화 시작: 어.
    30.49s  user  발화 끝
    31.28s  user  발화 시작: 근데 지금 오거스타 날씨는 어때?
    31.46s  agent 발화 끝
    33.00s  <ret> 발화 (turn9 첫 프레임)
    33.23s  agent 발화 시작: <ret> 지금 조지아주 오거스타는 화씨 팔십육도이고, 습도는 육십오퍼센트, 남풍이 시속 팔마일로 불어. 여
    33.24s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.99s]: (tool result) Current conditions in Augusta, Georgia are 86.0°F, humid
    33.35s  user  발화 끝
    37.62s  user  발화 시작: 어어.
    38.44s  user  발화 끝
    44.22s  agent 발화 끝
    44.72s  user  발화 시작: 와, 진짜 덥네.…
    46.78s  user  발화 끝
    47.89s  user  발화 시작: …나는 그냥 집에 있을래.
    49.34s  agent 발화 시작: 좋은 선택이야! 때로는 편안한 실내 공간을 즐기는 것만큼 좋은 휴식이 없어.
    49.50s  user  발화 끝
    55.78s  agent 발화 끝
    55.80s  user  발화 시작: 여보, 쓰레기 버렸어?
    57.67s  user  발화 시작: …됐어.
    57.73s  user  발화 끝
    58.31s  user  발화 끝
    58.59s  agent 발화 시작: 지금 내가 뭐 도와줄 거 있어?
    59.36s  user  발화 시작: 그치.
    60.00s  user  발화 끝
    61.12s  agent 발화 끝
    61.26s  user  발화 시작: 아, 있네. 오늘 해는 몇 시에 지지?
    63.73s  <ret> 발화 (turn19 첫 프레임)
    63.80s  agent 발화 시작: <ret> 지금이 이천이십육년 칠월 십일 금요일 오후 세시 십칠분이고, 서울 시간으로 해가 여덟시 삼십이분에
    63.81s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.80s]: (tool result) It is Friday, July 10, 2026 at 3:17 PM in Asia/Seoul rig
    64.03s  user  발화 끝
    69.15s  user  발화 시작: 오.
    69.92s  user  발화 끝
    74.40s  agent 발화 시작: 기분 좋네. 해가 질 때 편안한 음료 한 잔 하는 것도 괜찮겠어?
    74.61s  agent 발화 끝
    75.59s  user  발화 시작: 응.
    76.14s  user  발화 끝
    78.23s  user  발화 시작: 음, 어쩌면. 편안한 피아노 음악 좀 찾아 줄래?
    78.43s  agent 발화 끝
    81.96s  <ret> 발화 (turn24 첫 프레임)
    82.36s  agent 발화 시작: <ret> 마로니 유니온의 “Weightless”가 가장 편안한 피아노 곡 중 하나로 자주 언급돼. 원한다면
    82.36s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.92s]: (tool result) “Weightless” by Marconi Union is consistently ranked as 
    82.63s  user  발화 끝
    85.33s  user  발화 시작: 응.
    85.55s  user  발화 끝
    89.93s  user  발화 시작: 응, 틀어 줘!
    90.28s  agent 발화 끝
    91.37s  <ret> 발화 (turn27 첫 프레임)
    91.40s  user  발화 끝
    91.45s  agent 발화 시작: <ret> 마로니 유니온의 “Weightless” 재생 중. 음악에 몸을 맡기고 마음을 편안하게 해 봐.
    91.45s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.62s]: (tool result) Playing “Weightless” by Marconi Union.
    96.06s  user  발화 시작: 아.
    96.89s  user  발화 끝
    97.95s  user  발화 시작: 정말 좋다, 고마워.
    98.08s  agent 발화 끝
   100.01s  agent 발화 시작: 천만에. 평화로운 순간을 만드는 데 도움이 되도록 설계됐어.
   100.21s  user  발화 끝
   103.12s  user  발화 시작: 응.
   103.52s  user  발화 끝
   104.50s  agent 발화 끝
   104.87s  user  발화 시작: 수면 위생에 대한 정보 좀 찾아 줄래?
   107.46s  <ret> 발화 (turn33 첫 프레임)
   107.61s  agent 발화 시작: <ret> 수면 위생은 규칙적으로 잘 자기 위해 지켜야 할 습관과 관행을 말해. 일정한 수면 스케줄을 지키고
   107.62s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.87s]: Sleep hygiene involves habits and practices that are conducive to slee
   107.69s  user  발화 끝
   113.75s  user  발화 시작: 응.
   114.24s  user  발화 끝
   117.48s  agent 발화 끝
   119.49s  user  발화 시작: 그래, 말이 되네. 나한테 좋은 잠자리는 몇 시쯤이야?
   123.56s  agent 발화 시작: 그건 정말 개인적인 질문이고, 네 스케줄에 따라 달라져. 보통 몇 시에 일어나?
   123.80s  user  발화 끝
   129.21s  agent 발화 끝
   129.46s  user  발화 시작: 보통 아침 일곱시쯤에 일어나.
   131.42s  <ret> 발화 (turn38 첫 프레임)
   131.82s  agent 발화 시작: <ret> 아침 일곱시에 일어나는 사람에게는 칠~아홉시간의 수면을 취하기 위해 밤 열시에서 자정 사이에 잠자
   131.82s  ⚡SPAN 주입 [d'=2.00s / d_lead=12.16s]: Experts recommend 7-9 hours of sleep per night for adults, meaning a b
   131.95s  user  발화 끝
   139.64s  user  발화 시작: 그치.
   140.18s  user  발화 끝
   143.45s  user  발화 시작: 알았어, 밤 열시. 한번 해볼게. 고마워, 가온아.
   143.97s  agent 발화 끝
   147.54s  agent 발화 시작: 천만에. 더 나은 휴식을 위한 여정을 응원할게. 좋은 꿈 꿔, 때가 되면.
   147.62s  user  발화 끝
   154.35s  agent 발화 끝
