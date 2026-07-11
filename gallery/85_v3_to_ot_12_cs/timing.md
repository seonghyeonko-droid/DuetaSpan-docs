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
     0.00s  <ret> 발화 (turn3 첫 프레임)
     0.00s  <ret> 발화 (turn9 첫 프레임)
     0.02s  agent 발화 시작: 기분 아주 좋아. 물어봐 줘서 고마워. 조용히 생각하고 편히 쉴 수 있는 날씨네. 넌 어때?
     0.02s  user  발화 끝
     0.07s  user  발화 시작: 그럭저럭 괜찮아! 음… 혹시 마스터스 토너먼트 골프 코스 이름이 뭐였지?
     0.07s  agent 발화 끝
     0.10s  agent 발화 시작: <ret> 마스터스 토너먼트가 열리는 골프 코스는 조지아주 오거스타에 있는 오거스타 내셔널 골프 클럽이야. 
     0.10s  ⚡SPAN 주입 [d'=0.06s / d_lead=0.06s]: Augusta National Golf Club in Augusta, Georgia, is the annual host of 
     0.10s  user  발화 끝
     0.13s  <ret> 발화 (turn24 첫 프레임)
     0.15s  <ret> 발화 (turn19 첫 프레임)
     0.15s  user  발화 시작: 어.
     0.15s  agent 발화 끝
     0.16s  user  발화 시작: 아, 맞아! 오거스타. 알고 있었어.
     0.16s  user  발화 끝
     0.17s  agent 발화 시작: 가끔은 세부 사항을 잊기 쉽지.
     0.17s  user  발화 끝
     0.19s  <ret> 발화 (turn27 첫 프레임)
     0.19s  user  발화 시작: 어.
     0.19s  agent 발화 끝
     0.19s  user  발화 시작: 근데 지금 오거스타 날씨는 어때?
     0.19s  user  발화 끝
     0.21s  agent 발화 시작: <ret> 지금 조지아주 오거스타는 화씨 팔십육도이고, 습도는 육십오퍼센트, 남풍이 시속 팔마일로 불어. 여
     0.21s  ⚡SPAN 주입 [d'=0.06s / d_lead=0.06s]: (tool result) Current conditions in Augusta, Georgia are 86.0°F, humid
     0.21s  user  발화 끝
     0.27s  user  발화 시작: 어어.
     0.27s  agent 발화 끝
     0.27s  user  발화 시작: 와, 진짜 덥네.…
     0.27s  user  발화 끝
     0.28s  user  발화 시작: …나는 그냥 집에 있을래.
     0.28s  user  발화 끝
     0.30s  agent 발화 시작: 좋은 선택이야! 때로는 편안한 실내 공간을 즐기는 것만큼 좋은 휴식이 없어.
     0.30s  user  발화 끝
     0.33s  user  발화 시작: 여보, 쓰레기 버렸어?
     0.33s  agent 발화 끝
     0.34s  user  발화 시작: …됐어.
     0.34s  user  발화 끝
     0.35s  agent 발화 시작: 지금 내가 뭐 도와줄 거 있어?
     0.35s  user  발화 끝
     0.37s  user  발화 시작: 그치.
     0.37s  agent 발화 끝
     0.37s  user  발화 시작: 아, 있네. 오늘 해는 몇 시에 지지?
     0.37s  user  발화 끝
     0.39s  agent 발화 시작: <ret> 지금이 이천이십육년 칠월 십일 금요일 오후 세시 십칠분이고, 서울 시간으로 해가 여덟시 삼십이분에
     0.39s  ⚡SPAN 주입 [d'=0.07s / d_lead=0.07s]: (tool result) It is Friday, July 10, 2026 at 3:17 PM in Asia/Seoul rig
     0.39s  user  발화 끝
     0.46s  user  발화 시작: 오.
     0.46s  agent 발화 끝
     0.46s  agent 발화 시작: 기분 좋네. 해가 질 때 편안한 음료 한 잔 하는 것도 괜찮겠어?
     0.46s  user  발화 끝
     0.50s  user  발화 시작: 응.
     0.50s  agent 발화 끝
     0.50s  user  발화 시작: 음, 어쩌면. 편안한 피아노 음악 좀 찾아 줄래?
     0.50s  user  발화 끝
     0.53s  agent 발화 시작: <ret> 마로니 유니온의 “Weightless”가 가장 편안한 피아노 곡 중 하나로 자주 언급돼. 원한다면
     0.53s  ⚡SPAN 주입 [d'=0.05s / d_lead=0.05s]: (tool result) “Weightless” by Marconi Union is consistently ranked as 
     0.53s  user  발화 끝
     0.58s  user  발화 시작: 응.
     0.58s  agent 발화 끝
     0.58s  user  발화 시작: 응, 틀어 줘!
     0.58s  user  발화 끝
     0.59s  agent 발화 시작: <ret> 마로니 유니온의 “Weightless” 재생 중. 음악에 몸을 맡기고 마음을 편안하게 해 봐.
     0.59s  ⚡SPAN 주입 [d'=0.04s / d_lead=0.04s]: (tool result) Playing “Weightless” by Marconi Union.
     0.59s  user  발화 끝
     0.61s  <ret> 발화 (turn33 첫 프레임)
     0.63s  user  발화 시작: 아.
     0.63s  agent 발화 끝
     0.63s  user  발화 시작: 정말 좋다, 고마워.
     0.63s  user  발화 끝
     0.64s  agent 발화 시작: 천만에. 평화로운 순간을 만드는 데 도움이 되도록 설계됐어.
     0.64s  user  발화 끝
     0.67s  user  발화 시작: 응.
     0.67s  agent 발화 끝
     0.67s  user  발화 시작: 수면 위생에 대한 정보 좀 찾아 줄래?
     0.67s  user  발화 끝
     0.69s  agent 발화 시작: <ret> 수면 위생은 규칙적으로 잘 자기 위해 지켜야 할 습관과 관행을 말해. 일정한 수면 스케줄을 지키고
     0.69s  ⚡SPAN 주입 [d'=0.08s / d_lead=0.08s]: Sleep hygiene involves habits and practices that are conducive to slee
     0.69s  user  발화 끝
     0.70s  <ret> 발화 (turn38 첫 프레임)
     0.77s  user  발화 시작: 응.
     0.77s  agent 발화 끝
     0.78s  user  발화 시작: 그래, 말이 되네. 나한테 좋은 잠자리는 몇 시쯤이야?
     0.78s  user  발화 끝
     0.80s  agent 발화 시작: 그건 정말 개인적인 질문이고, 네 스케줄에 따라 달라져. 보통 몇 시에 일어나?
     0.80s  user  발화 끝
     0.84s  user  발화 시작: 보통 아침 일곱시쯤에 일어나.
     0.84s  agent 발화 끝
     0.86s  agent 발화 시작: <ret> 아침 일곱시에 일어나는 사람에게는 칠~아홉시간의 수면을 취하기 위해 밤 열시에서 자정 사이에 잠자
     0.86s  ⚡SPAN 주입 [d'=0.08s / d_lead=0.08s]: Experts recommend 7-9 hours of sleep per night for adults, meaning a b
     0.86s  user  발화 끝
     0.93s  user  발화 시작: 그치.
     0.93s  agent 발화 끝
     0.94s  user  발화 시작: 알았어, 밤 열시. 한번 해볼게. 고마워, 가온아.
     0.94s  user  발화 끝
     0.96s  agent 발화 시작: 천만에. 더 나은 휴식을 위한 여정을 응원할게. 좋은 꿈 꿔, 때가 되면.
     0.96s  user  발화 끝
     1.00s  agent 발화 끝
