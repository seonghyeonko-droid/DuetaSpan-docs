# v3_mem_33_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_33",
#     "name": "유경",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "40s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-07",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is sushi."
#     },
#     {
#       "date": "2026-03-07",
#       "category": "hobby",
#       "text": "User is into home fermentation."
#     },
#     {
#       "date": "2025-10-29",
#       "category": "diet",
#       "text": "User is gluten-free."
#     },
#     {
#       "date": "2025-08-08",
#       "category": "pet",
#       "text": "User has a Beagle named Rusty."
#     },
#     {
#       "date": "2025-06-20",
#       "category": "allergy",
#       "text": "User is allergic to peanuts."
#     },
#     {
#       "date": "2025-06-15",
#       "category": "home",
#       "text": "User's home address is 743 Cedar Lane."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-07-19",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2025-06-07",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 음… 오늘따라 시간이 너무 빨리 가는 것 같아요. 지금 몇 시 | S2 아, 맞다! 스시! 완전 땡기네요. 그럼 스시 맛집 좀 찾아볼 | S3 네, 부탁드려요. 글루텐 프리 메뉴가 있는지 확인해주시면 좋겠 | S4 네, 부탁드려요. 야외 좌석으로 여섯 명 예약해주세요.

     0.00s  agent 발화 시작: 안녕하세요, 유경님. 저는 디올로예요. 오늘 하루 어떠신가요?
     2.92s  user  발화 시작: 어.
     3.33s  user  발화 끝
     3.82s  user  발화 시작: 음… 오늘따라 시간이 너무 빨리 가는 것 같아요. 지금 몇 시예요?
     4.21s  agent 발화 끝
     7.97s  <ret> 발화 (turn3 첫 프레임)
     8.05s  agent 발화 시작: <ret> 지금 부산은 오후 두시 십칠분이에요. 시간이 정말 빠르네요.
     8.17s  user  발화 끝
     9.97s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.16s]: (tool result) 2024년 5월 15일 오후 2시 17분입니다.
    10.47s  user  발화 시작: 응.
    10.69s  user  발화 끝
    12.10s  user  발화 시작: 부산은 해가 언제 지죠? 저녁 약속이 있어서요.
    12.21s  agent 발화 끝
    15.28s  <ret> 발화 (turn6 첫 프레임)
    15.52s  agent 발화 시작: <ret> 오늘 저녁 일곱시 삼십이분에 해가 질 거예요. 약속 시간에 맞으실 것 같아요.
    15.66s  user  발화 끝
    17.28s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.32s]: (tool result) 오늘 해는 오후 7시 32분에 집니다.
    20.84s  agent 발화 끝
    20.94s  user  발화 시작: 아, 다행이다. 혹시… 제가 뭐 먹고 싶은 거 있었죠? 기억이 잘 안 나네요.
    25.91s  <ret> 발화 (turn8 첫 프레임)
    25.94s  user  발화 끝
    26.14s  agent 발화 시작: <ret> 스시를 제일 좋아하신다고 하셨어요. 혹시 스시 드시고 싶으신가요?
    27.91s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.30s]: [2026-05-07] User's favorite cuisine is sushi.
    28.00s  user  발화 시작: 어.
    28.82s  user  발화 끝
    30.30s  user  발화 시작: 아, 맞다! 스시! 완전 땡기네요. 그럼 스시 맛집 좀 찾아볼까요?
    30.44s  agent 발화 끝
    34.54s  <ret> 발화 (turn11 첫 프레임)
    34.61s  agent 발화 시작: <ret> 부산역 근처 ‘스시 맛집’이 평점이 아주 좋네요. 리뷰도 많고요.
    34.78s  user  발화 끝
    36.54s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.58s]: (tool result) 부산역 근처에 '스시 맛집'이 평점 4.5에 500건 이상의 리뷰가 있어요.
    39.19s  agent 발화 끝
    39.19s  user  발화 시작: 부산역 근처라… 거기는 좀 멀겠네요. 제 회사 근처에 스시집 없을까요?
    44.58s  <ret> 발화 (turn13 첫 프레임)
    44.65s  agent 발화 시작: <ret> 센텀시티에 ‘스시 하루’라는 곳이 있네요. 평점도 괜찮고요.
    44.65s  user  발화 끝
    46.58s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.58s]: (tool result) 센텀시티에 ‘스시 하루’가 평점 4.2에 230개의 리뷰가 있습니다.
    49.03s  user  발화 시작: 아, 스시 하루! 거기 가본 적 있는데 괜찮았어요. 근데… 글루텐 프리 메뉴도 있나요?
    49.23s  agent 발화 끝
    55.13s  <ret> 발화 (turn15 첫 프레임)
    55.19s  agent 발화 시작: <ret> 글루텐 프리 식단을 하고 계시죠. 스시 하루에 글루텐 프리 메뉴가 있는지 알아봐 드릴까요?
    55.20s  user  발화 끝
    57.13s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.19s]: [2025-10-29] User is gluten-free.
    60.38s  agent 발화 끝
    61.38s  user  발화 시작: 네, 부탁드려요. 글루텐 프리 메뉴가 있는지 확인해주시면 좋겠어요.
    65.44s  <ret> 발화 (turn17 첫 프레임)
    65.58s  agent 발화 시작: <ret> 스시 하루는 글루텐 프리 롤과 밥을 준비하고 있다고 해요. 안심하고 드실 수 있겠네요.
    65.68s  user  발화 끝
    67.44s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.75s]: (tool result) 스시 하루는 글루텐 프리 롤과 밥을 제공합니다.
    71.33s  agent 발화 끝
    71.35s  user  발화 시작: 와, 정말 다행이다. 그럼… 혹시 강아지 데리고 갈 수 있을까요?
    75.76s  <ret> 발화 (turn19 첫 프레임)
    76.00s  agent 발화 시작: <ret> 러스티를 데리고 가고 싶으시군요. 스시 하루에 애견 동반이 가능한지 확인해 볼게요. 스시 하루는 
    76.16s  user  발화 끝
    77.76s  ⚡SPAN 주입 [d'=2.00s / d_lead=13.68s]: [2025-08-08] User has a Beagle named Rusty.
    89.68s  agent 발화 끝
    89.79s  user  발화 시작: 오, 진짜 좋네요! 그럼… 여섯 명 예약해 놓을까요?
    93.63s  user  발화 끝
    93.68s  <ret> 발화 (turn21 첫 프레임)
    93.75s  agent 발화 시작: <ret> 여섯 분으로 생일 저녁 식사를 계획하신 적이 있었죠. 야외 좌석으로 예약해 드릴까요?
    95.68s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.58s]: [2025-07-19] Past chat — Planning a birthday dinner: party of six; loo
   100.08s  user  발화 시작: 네, 부탁드려요. 야외 좌석으로 여섯 명 예약해주세요.
   100.33s  agent 발화 끝
   103.63s  <ret> 발화 (turn23 첫 프레임)
   103.92s  user  발화 끝
   104.02s  agent 발화 시작: <ret> 스시 하루에 오늘 저녁 일곱시에 여섯 분 야외 좌석으로 예약이 완료되었어요. 예약 번호는 팔천칠백
   105.63s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.53s]: (tool result) 스시 하루에 오늘 저녁 7시에 여섯 명 야외 좌석으로 예약이 완료되었습니다. 예약 번호는 8765입니
   112.55s  agent 발화 끝
   112.70s  user  발화 시작: 팔천칠백육십오번이요. 알겠습니다. 정말 감사합니다, 디올로님!
   117.42s  agent 발화 시작: 천만에요, 유경님. 즐거운 저녁 식사 되세요. 혹시 다른 도움이 필요하시면 언제든지 말씀해주세요. [happ
   117.60s  user  발화 끝
   124.27s  agent 발화 끝
