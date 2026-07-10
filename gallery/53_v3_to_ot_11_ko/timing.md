# v3_to_ot_11_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_to_ot_11",
#     "name": "시린",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "early 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-03-06",
#       "category": "diet",
#       "text": "User is vegetarian."
#     },
#     {
#       "date": "2025-12-21",
#       "category": "allergy",
#       "text": "User is allergic to cat dander."
#     },
#     {
#       "date": "2025-11-06",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is sushi."
#     },
#     {
#       "date": "2025-09-23",
#       "category": "trip",
#       "text": "User is planning a trip to Lisbon in October."
#     },
#     {
#       "date": "2025-09-10",
#       "category": "work",
#       "text": "User works as a marketing manager."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-31",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 혹시 위산 중화하는 성분 같은 거 있나요? | S2 흐으으음… 어디에 많이 들어있어요? | S3 (전화 통화 후) 아… | S4 췌장이 그렇게 중요한가 보네요.

     0.00s  user  발화 시작: 혹시 위산 중화하는 성분 같은 거 있나요?
     2.67s  user  발화 끝
     2.80s  <ret> 발화 (turn1 첫 프레임)
     3.04s  agent 발화 시작: <ret> 소장에 도달하면 중탄산염이 위산을 중화해 준다고 해요. 괜찮으시다면 좀 더 자세히 알아볼까요?
     3.04s  ⚡SPAN 주입 [d'=1.28s / d_lead=3.84s]: Bicarbonate neutralizes stomach acid when it reaches the small intesti
     5.07s  user  발화 시작: 네.
     5.57s  user  발화 끝
     6.88s  agent 발화 끝
     7.21s  user  발화 시작: 중탄산염이 뭐예요?
     8.42s  <ret> 발화 (turn4 첫 프레임)
     8.74s  agent 발화 시작: <ret> 중탄산염은 물에 잘 녹는 흰색 결정성 분말이에요. 소화에 도움이 되는 성분이죠.
     8.74s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.65s]: Bicarbonate is a white crystalline powder that is soluble in water.
     8.96s  user  발화 끝
    14.33s  user  발화 시작: 흐으으음… 어디에 많이 들어있어요?
    14.39s  agent 발화 끝
    16.64s  <ret> 발화 (turn6 첫 프레임)
    16.80s  agent 발화 시작: <ret> 중탄산염은 많은 제산제에 들어있고, 췌장에서 자연적으로 생성되기도 해요.
    16.80s  ⚡SPAN 주입 [d'=1.20s / d_lead=5.05s]: Bicarbonate is found in many antacids and is naturally produced by the
    17.04s  user  발화 끝
    21.85s  agent 발화 끝
    21.98s  user  발화 시작: 잠깐만, 엄마한테 전화 좀 해야 돼.
    24.15s  user  발화 끝
    24.25s  user  발화 시작: (전화 통화 후) 아…
    24.88s  user  발화 끝
    26.78s  user  발화 시작: …죄송해요. 다시 말씀해 주시겠어요?
    28.62s  <ret> 발화 (turn10 첫 프레임)
    29.02s  agent 발화 시작: <ret> 중탄산염은 제산제에 많이 들어있고, 췌장에서도 만들어져요.
    29.02s  ⚡SPAN 주입 [d'=1.20s / d_lead=3.84s]: The pancreas releases bicarbonate to neutralize stomach acid in the du
    29.17s  user  발화 끝
    30.43s  user  발화 시작: 음.
    30.97s  user  발화 끝
    32.86s  agent 발화 끝
    32.94s  agent 발화 시작: 췌장은 중탄산염을 분비해서 십이지장에서 위산을 중화시켜 줘요. 건강 관리에 도움이 될 수 있겠죠.
    39.70s  agent 발화 끝
    40.47s  user  발화 시작: 췌장이 그렇게 중요한가 보네요.
    42.55s  user  발화 끝
    42.72s  agent 발화 시작: 네, 췌장은 소화 효소를 분비하고 혈당 조절에도 중요한 역할을 해요.
    47.06s  agent 발화 끝
    47.16s  user  발화 시작: 아니요, 괜찮아요. 감사합니다.
    49.42s  user  발화 끝
    49.61s  agent 발화 시작: 별말씀을요.
    50.71s  agent 발화 끝
