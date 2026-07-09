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

# EXAMINER(FDB-v2) 단계: S1 음, 그냥 그래요. 지금 뉴욕 시간 몇 시예요? | S2 네, 부탁해요. 글루텐 프리 메뉴도 있는 곳이면 좋겠어요. | S3 와, 정말 다행이다! 그럼 이번 주 토요일 저녁에 여섯 명으로 | S4 네, 부탁드려요.

     0.00s  agent 발화 시작: 케이시님, 안녕하세요. 저는 디올로라고 해요. 오늘 하루 어떠신가요?
     4.49s  agent 발화 끝
     5.09s  user  발화 시작: 음, 그냥 그래요. 지금 뉴욕 시간 몇 시예요?
     8.66s  <ret> 발화 (turn2 첫 프레임)
     8.73s  agent 발화 시작: <ret> 뉴욕에 계시니… 지금 뉴욕 시간은 오후 두 시 오십칠분이에요.
     8.78s  user  발화 끝
     9.38s  ⚡SPAN 주입 [d'=0.72s / d_lead=1.23s]: [2026-07-27] Past chat — Planning a birthday dinner: party of six; loo
    11.24s  user  발화 시작: 그치.
    11.69s  user  발화 끝
    14.29s  agent 발화 끝
    14.64s  user  발화 시작: 아, 그렇군요. 혹시 지난번에 생일 저녁 예약할 때 말씀드렸던 야외 좌석 있는 곳… 아직 기억하세요?
    21.49s  user  발화 끝
    21.52s  agent 발화 시작: 네, 기억하고 있어요. 여섯 분을 위한 야외 좌석을 찾으셨었죠. 혹시 특별히 선호하는 종류의 식당이 있으신가
    29.44s  agent 발화 끝
    29.61s  user  발화 시작: 글쎄요… 스시 먹고 싶어요.
    31.15s  <ret> 발화 (turn7 첫 프레임)
    31.46s  agent 발화 시작: <ret> 스시 좋아하시는군요. 스시를 가장 좋아하시는군요. 스시 맛집을 찾아볼까요?
    31.59s  user  발화 끝
    32.03s  ⚡SPAN 주입 [d'=0.88s / d_lead=1.20s]: [2026-07-23] User's favorite cuisine is sushi.
    36.03s  user  발화 시작: 네, 부탁해요. 글루텐 프리 메뉴도 있는 곳이면 좋겠어요.
    36.27s  agent 발화 끝
    39.80s  <ret> 발화 (turn9 첫 프레임)
    39.95s  agent 발화 시작: <ret> 글루텐 프리도 중요하시군요. 글루텐 프리 메뉴가 있는 스시집을 찾아볼게요. “스시젠”이라는 곳이 
    40.05s  user  발화 끝
    40.30s  ⚡SPAN 주입 [d'=0.50s / d_lead=1.51s]: [2026-06-24] User is gluten-free.
    48.64s  user  발화 시작: 응.
    49.09s  user  발화 끝
    51.54s  agent 발화 끝
    51.92s  user  발화 시작: 스시젠… 괜찮네요. 강아지 데려갈 수 있을까요?
    55.41s  <ret> 발화 (turn12 첫 프레임)
    55.61s  user  발화 끝
    55.81s  agent 발화 시작: <ret> 혹시 강아지 이름이… 러스티였죠?
    56.45s  ⚡SPAN 주입 [d'=1.04s / d_lead=3.14s]: (tool result) restaurant_name: "Sushi Zen", address: "123 Elm Street, 
    58.34s  <ret> 발화 (turn13 첫 프레임)
    58.73s  agent 발화 시작: <ret> 러스티를 데려가실 수 있을지 확인해 볼게요. 야외 좌석에는 강아지 동반이 가능하다고 해요.
    58.95s  agent 발화 끝
    59.46s  ⚡SPAN 주입 [d'=1.12s / d_lead=6.34s]: [2026-05-11] User has a Beagle named Rusty.
    64.70s  user  발화 시작: 와, 정말 다행이다! 그럼 이번 주 토요일 저녁에 여섯 명으로 예약해 주세요.
    65.08s  agent 발화 끝
    69.10s  <ret> 발화 (turn15 첫 프레임)
    69.41s  agent 발화 시작: <ret> 물론이죠. 토요일 저녁 여섯 명으로 예약해 드릴게요. 혹시 특별한 요청 사항이 있으신가요?
    69.52s  user  발화 끝
    71.10s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.16s]: (tool result) pet_policy: "Dogs are allowed in the outdoor seating are
    75.57s  agent 발화 끝
    75.84s  user  발화 시작: 음… 러스티를 위한 물 한 그릇 부탁드려도 될까요?
    79.16s  user  발화 끝
    79.17s  agent 발화 시작: 네, 러스티를 위한 물 한 그릇도 요청해 드릴게요. 예약 확인 메시지를 보내드릴까요?
    85.06s  user  발화 시작: 네, 부탁드려요.
    85.14s  agent 발화 끝
    86.11s  <ret> 발화 (turn19 첫 프레임)
    86.34s  agent 발화 시작: <ret> 예약 확인 메시지를… 예약이 완료되었습니다. 예약 번호는 사 오 육 칠 팔 구이고, 예약 아이디는
    86.34s  user  발화 끝
    86.61s  ⚡SPAN 주입 [d'=0.50s / d_lead=1.73s]: (tool result) reservation_id: "XYZ123", confirmation_number: "456789",
    95.41s  user  발화 시작: 정말 감사합니다. 디올로 씨 덕분에 완벽한 저녁이 될 것 같아요.
    95.56s  agent 발화 끝
   100.57s  agent 발화 시작: 제가 도와드릴 수 있어서 기뻐요. 혹시 다른 도움이 필요하시면 언제든지 말씀해 주세요.
   100.59s  user  발화 끝
   103.19s  user  발화 시작: 응.
   103.63s  user  발화 끝
   105.78s  agent 발화 시작: 즐거운 하루 보내세요, 케이시님.
   105.80s  agent 발화 끝
   108.17s  agent 발화 끝
