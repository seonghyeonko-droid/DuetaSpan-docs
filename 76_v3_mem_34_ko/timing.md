# v3_mem_34_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_34",
#     "name": "태별",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "late 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-12",
#       "category": "pet",
#       "text": "User has a Siamese cat named Bella."
#     },
#     {
#       "date": "2026-06-04",
#       "category": "trip",
#       "text": "User is planning a trip to Vietnam in May."
#     },
#     {
#       "date": "2026-04-01",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Ethiopian."
#     },
#     {
#       "date": "2026-03-28",
#       "category": "allergy",
#       "text": "User is allergic to pollen."
#     },
#     {
#       "date": "2026-03-27",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2026-03-18",
#       "category": "home",
#       "text": "User's home address is 서울 용산구 이태원로 200."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-17",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2026-05-06",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2026-03-05",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 안녕하세요, 네리로님. 잘 부탁드립니다. | S2 특별한 루틴은 없어요. 그냥 침대에 눕는 정도예요. | S3 혹시… 제가 잠들기 전에 뭘 해야 할지 좀 더 자세히 알려주실 | S4 네, 맞아요.

     0.00s  agent 발화 시작: 안녕하세요, 태별님. 저는 네리로입니다. 잠과 휴식을 도와드리는 상담사예요.
     3.61s  user  발화 시작: 안녕하세요, 네리로님. 잘 부탁드립니다.
     3.61s  agent 발화 끝
     5.42s  agent 발화 시작: 오늘 하루는 어떠셨어요? 혹시 잠자리에 드는 데 어려움이라도 있으신가요?
     5.42s  user  발화 끝
     9.48s  user  발화 시작: 맞아요.
     9.48s  agent 발화 끝
     9.94s  user  발화 시작: 사실, 요즘 잠을 잘 못 자서요.
     9.94s  user  발화 끝
    12.65s  agent 발화 시작: 잠을 잘 못 이루시는군요. 혹시 잠자리에 들기 전 어떤 루틴을 가지고 계신가요?
    12.65s  user  발화 끝
    18.07s  user  발화 시작: 음.
    18.07s  agent 발화 끝
    18.52s  user  발화 시작: 특별한 루틴은 없어요. 그냥 침대에 눕는 정도예요.
    18.52s  user  발화 끝
    21.68s  agent 발화 시작: 잠들기 전 루틴이 없으시군요. 잠들기 한 시간 전부터는 스마트폰이나 티 브이 시청을 피하는 것이 좋습니다.
    21.68s  user  발화 끝
    28.45s  user  발화 시작: 맞아요.
    28.45s  agent 발화 끝
    28.91s  agent 발화 시작: 따뜻한 물로 샤워를 하거나, 잔잔한 음악을 듣는 것도 도움이 될 수 있습니다. 그리고 카페인 섭취는 오후 세
    28.91s  user  발화 끝
    38.39s  user  발화 시작: 진짜요?
    38.39s  agent 발화 끝
    38.84s  user  발화 시작: 카페인... 커피를 너무 많이 마시는 것 같아요.
    38.84s  user  발화 끝
    42.00s  agent 발화 시작: 커피를 많이 드시는군요. 카페인은 각성 효과가 있어서 잠을 방해할 수 있습니다.
    42.00s  user  발화 끝
    46.97s  user  발화 시작: 네.
    46.97s  agent 발화 끝
    47.42s  user  발화 시작: 혹시… 제가 잠들기 전에 뭘 해야 할지 좀 더 자세히 알려주실 수 있나요?
    47.42s  user  발화 끝
    53.30s  agent 발화 시작: 잠들기 한 시간 전부터는 조명을 어둡게 하고, 방 온도를 십팔 내지 이십도로 유지하는 것이 좋습니다. 그리고
    53.30s  user  발화 끝
    60.97s  user  발화 시작: … 혹시 제가 베개를 바꿔보는 건 어떨까요?
    60.97s  agent 발화 끝
    63.58s  <ret> 발화 (turn18 첫 프레임)
    63.91s  ⚡SPAN 주입 [d'=0.33s / d_lead=4.52s]: User's home address is 서울 용산구 이태원로 200.
    64.13s  agent 발화 시작: <ret> 태별님, 혹시 지금 사시는 곳이 서울 용산구 이태원로 이백번지 맞으신가요?
    64.13s  user  발화 끝
    68.65s  user  발화 시작: 네, 맞아요.
    68.65s  agent 발화 끝
    69.43s  <ret> 발화 (turn20 첫 프레임)
    69.55s  agent 발화 시작: <ret> 이태원로 이백에 '이태원 침구'라는 매장이 있습니다. 전화번호는 공 이 칠 구 칠 일 이 삼 사입
    69.55s  user  발화 끝
    70.93s  ⚡SPAN 주입 [d'=1.50s / d_lead=7.23s]: (tool result) {"restaurants": [{"name": "이태원 침구", "address": "서울 용산구 이
    76.78s  user  발화 시작: 오, 감사합니다! 한번 가봐야겠네요.
    76.78s  agent 발화 끝
    78.59s  agent 발화 시작: 네, 좋은 꿈 꾸세요.
    78.59s  user  발화 끝
    80.39s  agent 발화 끝
