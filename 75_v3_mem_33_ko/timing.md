# v3_mem_33_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_33",
#     "name": "Casey",
#     "location": {
#       "city": "New York",
#       "country": "United States",
#       "timezone": "America/New_York (EST, UTC-5)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "non-binary",
#     "age_range": "40s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-07-23",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is sushi."
#     },
#     {
#       "date": "2026-07-20",
#       "category": "hobby",
#       "text": "User is into home fermentation."
#     },
#     {
#       "date": "2026-06-24",
#       "category": "diet",
#       "text": "User is gluten-free."
#     },
#     {
#       "date": "2026-05-11",
#       "category": "pet",
#       "text": "User has a Beagle named Rusty."
#     },
#     {
#       "date": "2026-03-02",
#       "category": "allergy",
#       "text": "User is allergic to peanuts."
#     },
#     {
#       "date": "2026-01-28",
#       "category": "home",
#       "text": "User's home address is 743 Cedar Lane."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-07-27",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2026-07-06",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 음, 그냥 그래. 좀 피곤해. 지금 뉴욕 시간 몇 시야? | S2 글쎄… 전에 같이 스시 먹으러 갔던 곳 생각나? | S3 응, 맞아. 여섯 명. | S4 혹시 우리 강아지 이름 기억해?

     0.00s  agent 발화 시작: 응, 케이시, 안녕? 난 디올로야. 오늘 하루 어때?
     2.65s  user  발화 시작: Yeah, yeah.
     3.46s  user  발화 시작: 음, 그냥 그래. 좀 피곤해. 지금 뉴욕 시간 몇 시야?
     3.48s  user  발화 끝
     3.84s  agent 발화 끝
     7.16s  <ret> 발화 (turn3 첫 프레임)
     7.23s  agent 발화 시작: <ret> 지금 시간 알려줄게. 지금 뉴욕 시간은 아홉 시 십칠 분이야.
     7.39s  user  발화 끝
     7.88s  ⚡SPAN 주입 [d'=0.72s / d_lead=1.42s]: (tool result) Current time is 09:17 AM EDT.
     9.35s  user  발화 시작: Okay.
    10.12s  user  발화 끝
    11.89s  user  발화 시작: 아, 고마워. 혹시 오늘 저녁에 뭐 해?
    11.95s  agent 발화 끝
    14.62s  user  발화 끝
    14.62s  agent 발화 시작: 특별한 계획은 없어. 혹시 저녁 식사 같이 할래?
    18.23s  agent 발화 끝
    18.34s  user  발화 시작: 음… 생각해볼게. 혹시 내가 좋아하는 음식 기억해?
    21.98s  <ret> 발화 (turn8 첫 프레임)
    22.29s  agent 발화 시작: <ret> 네, 기억하고 있어. 네가 제일 좋아하는 음식은 스시잖아.
    22.36s  user  발화 끝
    22.86s  ⚡SPAN 주입 [d'=0.88s / d_lead=1.47s]: [2026-07-23] User's favorite cuisine is sushi.
    26.22s  agent 발화 끝
    26.48s  user  발화 시작: 맞아, 맞아. 스시! 그럼 스시집 어때?
    29.61s  agent 발화 시작: 좋아. 어디로 갈까? 혹시 특별히 생각하는 곳 있어?
    29.80s  user  발화 끝
    31.49s  user  발화 시작: Yeah, yeah.
    32.12s  user  발화 끝
    33.90s  user  발화 시작: 글쎄… 전에 같이 스시 먹으러 갔던 곳 생각나?
    33.91s  agent 발화 끝
    37.41s  user  발화 끝
    37.61s  <ret> 발화 (turn13 첫 프레임)
    37.69s  agent 발화 시작: <ret> 아, 기억나. 생일 저녁 식사 계획할 때, 야외 좌석 있는 곳을 찾았었지?
    38.25s  ⚡SPAN 주입 [d'=0.64s / d_lead=0.93s]: [2026-07-27] Past chat — Planning a birthday dinner: party of six; loo
    43.05s  user  발화 시작: 맞아, 맞아! 거기 괜찮았는데.
    43.29s  agent 발화 끝
    45.29s  agent 발화 시작: 그럼 거기로 갈까? 예약해줄까?
    45.31s  user  발화 끝
    47.41s  agent 발화 끝
    48.42s  user  발화 시작: 응, 부탁해. 몇 명으로 예약해야 해?
    51.64s  <ret> 발화 (turn17 첫 프레임)
    51.70s  user  발화 끝
    51.71s  agent 발화 시작: <ret> 몇 명인지 다시 확인해볼게. 여섯 명으로 예약해야 했었지?
    53.24s  ⚡SPAN 주입 [d'=1.60s / d_lead=1.96s]: [2026-07-27] Past chat — Planning a birthday dinner: party of six; loo
    55.56s  user  발화 시작: 응, 맞아. 여섯 명.
    55.64s  agent 발화 끝
    57.40s  <ret> 발화 (turn19 첫 프레임)
    57.80s  agent 발화 시작: <ret> 알았어. 예약해볼게.
    57.86s  user  발화 끝
    57.90s  ⚡SPAN 주입 [d'=0.50s / d_lead=1.56s]: (tool result) Reservation confirmed at Sushi Zen for 6 people at 7:00 
    59.16s  agent 발화 시작: 스시젠에 여섯 명으로 저녁 일곱 시에 예약 완료됐어. 야외 좌석 요청했고, 확인 번호는 팔만칠천구백이십구야.
    59.36s  agent 발화 끝
    67.97s  agent 발화 끝
    68.18s  user  발화 시작: 와, 진짜 고마워. 덕분에 저녁 약속 잡았네.
    71.34s  agent 발화 시작: 천만에. 도움이 됐다니 기뻐. 혹시 알레르기 있는 음식 있어?
    71.42s  user  발화 끝
    75.81s  <ret> 발화 (turn23 첫 프레임)
    75.97s  agent 발화 시작: <ret> 혹시 알레르기 있는 음식이 있는지 확인해볼게. 땅콩 알레르기가 있다고 했었지?
    76.16s  agent 발화 끝
    77.33s  ⚡SPAN 주입 [d'=1.52s / d_lead=2.83s]: [2026-03-02] User is allergic to peanuts.
    80.48s  user  발화 시작: 맞아, 땅콩. 조심해야 해.
    80.69s  agent 발화 끝
    82.88s  user  발화 끝
    83.28s  agent 발화 시작: 스시집에 땅콩 알레르기 있다고 미리 말해줄게.
    86.10s  agent 발화 끝
    86.28s  user  발화 시작: 응, 부탁해. 아, 그리고…
    88.26s  agent 발화 시작: 무슨 생각해?
    88.35s  user  발화 끝
    89.27s  agent 발화 끝
    89.31s  user  발화 시작: 혹시 우리 강아지 이름 기억해?
    91.28s  <ret> 발화 (turn29 첫 프레임)
    91.36s  agent 발화 시작: <ret> 네, 기억하고 있어. 러스티라고 했었지? 귀여운 비글!
    91.43s  user  발화 끝
    91.78s  ⚡SPAN 주입 [d'=0.50s / d_lead=1.52s]: [2026-05-11] User has a Beagle named Rusty.
    94.79s  user  발화 시작: 맞아, 러스티. 녀석도 스시 좋아할까?
    94.92s  agent 발화 끝
    97.95s  agent 발화 시작: [laugh] 강아지에게 스시를 주면 안 돼. 하지만 러스티에게 맛있는 간식은 줘도 괜찮겠지?
    98.02s  user  발화 끝
   103.45s  user  발화 시작: 그럼, 러스티 간식도 좀 사갈까?
   103.89s  agent 발화 끝
   106.32s  agent 발화 시작: 좋은 생각이야. 러스티가 좋아할 거야.
   106.41s  user  발화 끝
   109.17s  agent 발화 끝
