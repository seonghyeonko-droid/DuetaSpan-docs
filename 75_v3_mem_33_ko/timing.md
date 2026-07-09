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

# EXAMINER(FDB-v2) 단계: S1 음… 좀 피곤하네요. 지금 뉴욕 시간 몇 시예요? | S2 좋은 생각이에요. 러스티는 잘 지내고 있을까요? | S3 아직 딱히… 친구들이랑 저녁 먹기로 했는데, 여섯 명 정도 될 | S4 오, 이탈리아 식당 괜찮네요. 가격대는 어느 정도예요?

     0.00s  agent 발화 시작: 케이시, 안녕하세요. 저는 디올로라고 해요. 혹시 오늘 하루 어떠셨어요?
     4.86s  agent 발화 끝
     5.53s  user  발화 시작: 음… 좀 피곤하네요. 지금 뉴욕 시간 몇 시예요?
     8.54s  <ret> 발화 (turn2 첫 프레임)
     8.61s  agent 발화 시작: <ret> 지금 시간 궁금하시군요. 지금 뉴욕 시간은 오후 세 시 삼십칠 분이에요.
     8.67s  user  발화 끝
     9.26s  ⚡SPAN 주입 [d'=0.72s / d_lead=1.21s]: [2026-07-27] User is located in New York, United States.
    10.61s  user  발화 시작: 그치.
    11.23s  user  발화 끝
    13.06s  agent 발화 끝
    13.32s  user  발화 시작: 아, 벌써 이렇게 됐네. 오늘 저녁에 뭐 먹을까 고민 중인데…
    17.29s  agent 발화 시작: 저녁 메뉴 고민이시군요. 혹시 특별히 땡기는 음식이 있으세요?
    17.30s  user  발화 끝
    21.77s  agent 발화 끝
    22.02s  user  발화 시작: 글쎄요… 스시 먹고 싶은데, 혹시 제가 스시 좋아했었죠?
    25.91s  <ret> 발화 (turn7 첫 프레임)
    26.22s  agent 발화 시작: <ret> 스시 좋아하시는 것 같아요. 네, 스시를 가장 좋아하시는 음식으로 기억하고 있어요.
    26.43s  user  발화 끝
    26.79s  ⚡SPAN 주입 [d'=0.88s / d_lead=1.63s]: [2026-07-23] User's favorite cuisine is sushi.
    30.51s  user  발화 시작: 맞아요, 스시! 근데 요즘 글루텐 프리 식단 지키고 있거든요.
    30.71s  agent 발화 끝
    34.55s  <ret> 발화 (turn9 첫 프레임)
    34.70s  agent 발화 시작: <ret> 글루텐 프리 식단을 지키시는군요.
    34.81s  user  발화 끝
    35.83s  ⚡SPAN 주입 [d'=1.28s / d_lead=2.26s]: [2026-06-24] User is gluten-free.
    36.72s  agent 발화 시작: 스시 드실 때 글루텐 프리 옵션 있는지 확인해 보시면 좋겠어요.
    36.96s  agent 발화 끝
    38.39s  user  발화 시작: 어.
    39.02s  user  발화 끝
    40.56s  agent 발화 끝
    40.59s  user  발화 시작: 좋은 생각이에요. 러스티는 잘 지내고 있을까요?
    44.40s  <ret> 발화 (turn13 첫 프레임)
    44.47s  agent 발화 시작: <ret> 러스티에 대해 궁금하시네요. 네, 러스티는 건강하게 잘 지내고 있을 거예요. 산책은 다녀오셨어요?
    44.65s  user  발화 끝
    46.00s  ⚡SPAN 주입 [d'=1.60s / d_lead=1.78s]: [2026-05-11] User has a Beagle named Rusty.
    51.50s  user  발화 시작: 아, 아직 산책 못 갔어요. 퇴근하고 바로 가야겠네요.
    51.61s  agent 발화 끝
    55.41s  agent 발화 시작: 퇴근 후에 러스티와 산책하시면 둘 다 기분 좋으실 거예요.
    55.52s  user  발화 끝
    59.20s  agent 발화 끝
    59.28s  user  발화 시작: 그러게요. 혹시 이번 주말에 뭐 할 계획 있으세요?
    62.81s  agent 발화 시작: 이번 주말 계획은 아직 없어요. 혹시 케이시님은 계획 있으세요?
    62.98s  user  발화 끝
    66.92s  agent 발화 끝
    67.12s  user  발화 시작: 아직 딱히… 친구들이랑 저녁 먹기로 했는데, 여섯 명 정도 될 것 같아요.
    71.91s  <ret> 발화 (turn19 첫 프레임)
    71.98s  agent 발화 시작: <ret> 친구분들과 저녁 식사 약속이 있으시군요.
    72.11s  user  발화 끝
    73.11s  ⚡SPAN 주입 [d'=1.20s / d_lead=2.76s]: [2026-07-27] Past chat — Planning a birthday dinner: party of six; loo
    74.72s  agent 발화 시작: 야외 좌석이 있는 곳으로 알아보시는 게 좋겠네요.
    74.75s  agent 발화 끝
    76.45s  user  발화 시작: 응.
    76.75s  user  발화 끝
    78.27s  agent 발화 끝
    78.35s  user  발화 시작: 네, 야외 좌석 꼭 찾으려고요. 혹시 괜찮은 곳 알고 계세요?
    82.79s  user  발화 끝
    82.98s  agent 발화 시작: 제가 몇 군데 알아봐 드릴까요?
    84.59s  agent 발화 끝
    84.72s  user  발화 시작: 네, 부탁드려요. 제 사무실 근처면 좋겠어요.
    87.22s  <ret> 발화 (turn25 첫 프레임)
    87.45s  agent 발화 시작: <ret> 사무실 근처로 알아볼게요. 사무실 근처에 야외 좌석 있는 레스토랑 세 곳을 찾았어요. 이탈리아, 
    87.68s  user  발화 끝
    87.72s  ⚡SPAN 주입 [d'=0.50s / d_lead=1.67s]: (tool result) Restaurant A: 4.5 stars, Italian, outdoor seating, 0.3 m
    96.35s  agent 발화 끝
    97.63s  user  발화 시작: 오, 이탈리아 식당 괜찮네요. 가격대는 어느 정도예요?
   100.95s  agent 발화 시작: 이탈리아 식당 가격대는 중간 정도예요.
   101.04s  user  발화 끝
   103.37s  user  발화 시작: 좋아요. 그럼 거기 예약 좀 부탁드려요. 여섯 명으로요.
   103.54s  agent 발화 끝
   106.80s  <ret> 발화 (turn29 첫 프레임)
   106.96s  agent 발화 시작: <ret> 여섯 명으로 예약해 드릴게요. 예약 완료됐어요. 확인 번호는 ABC123XYZ예요.
   107.12s  user  발화 끝
   108.80s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.07s]: (tool result) Reservation confirmed: Restaurant A, party of 6, today a
   113.86s  agent 발화 끝
   114.52s  user  발화 시작: 와, 감사합니다!
   115.75s  agent 발화 시작: 천만에요. 즐거운 저녁 식사 되세요. 혹시 다른 도움이 필요하시면 언제든지 말씀하세요.
   115.90s  user  발화 끝
   122.62s  agent 발화 끝
