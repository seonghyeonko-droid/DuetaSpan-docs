# v3_fake__13_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_fake__13",
#     "name": "도경",
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
#       "date": "2026-06-22",
#       "category": "allergy",
#       "text": "User is allergic to cat dander."
#     },
#     {
#       "date": "2026-04-11",
#       "category": "hobby",
#       "text": "User is into marathon training."
#     },
#     {
#       "date": "2026-03-19",
#       "category": "pet",
#       "text": "User has a tabby cat named Luna."
#     },
#     {
#       "date": "2025-11-08",
#       "category": "home",
#       "text": "User's home address is 부산 해운대구 우동 123-4."
#     },
#     {
#       "date": "2025-11-03",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2025-10-07",
#       "category": "work",
#       "text": "User works as a chef."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-25",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 메디케이드 자금의 절반 이상을 부담하는 곳은 어디인가요? | S2 …가려면 어떻게 가야 할까요? | S3 어떤 노래를 틀어줄까요? | S4 좋은 생각이에요. 과자와 주스를 챙겨가야겠네요.

     0.00s  user  발화 시작: 메디케이드 자금의 절반 이상을 부담하는 곳은 어디인가요?
     3.60s  <ret> 발화 (turn1 첫 프레임)
     3.76s  agent 발화 시작: <ret> 메디케이드 자금의 절반 이상은 주로 주에서 부담합니다. 아이들의 건강을 챙기는 것도 중요하죠.
     3.76s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.45s]: states.
     3.76s  user  발화 끝
    10.21s  user  발화 시작: 음… 그건 그렇고, 이번 주 토요일에 아이들과 함께 갈 만한 곳이 있을까요?
    10.21s  agent 발화 끝
    16.66s  agent 발화 시작: 아이들이 좋아할 만한 곳을 찾아볼까요?
    16.66s  user  발화 끝
    19.35s  user  발화 시작: 네, 부탁드려요.
    19.35s  agent 발화 끝
    20.35s  <ret> 발화 (turn5 첫 프레임)
    20.43s  agent 발화 시작: <ret> 이번 주 토요일, 중앙공원에서 어린이 음악 축제가 열립니다. 이천이십육년 칠월 십일일이에요.
    20.43s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.91s]: (tool result) 2026-07-11, Children's Music Festival, Central Park, New
    20.43s  user  발화 끝
    26.34s  user  발화 시작: 진짜요?
    26.34s  agent 발화 끝
    26.88s  user  발화 시작: 오, 재밌겠네요! 그런데 축제에…
    26.88s  user  발화 끝
    29.03s  user  발화 시작: …가려면 어떻게 가야 할까요?
    29.03s  user  발화 끝
    31.18s  agent 발화 시작: 축제 장소까지 가는 길을 찾아볼까요?
    31.18s  user  발화 끝
    33.86s  user  발화 시작: 네, 찾아주세요.
    33.86s  agent 발화 끝
    34.54s  <ret> 발화 (turn11 첫 프레임)
    34.94s  agent 발화 시작: <ret> 자동차로는 십오분, 지하철로는 이십오분 정도 걸립니다.
    34.94s  ⚡SPAN 주입 [d'=1.28s / d_lead=3.23s]: (tool result) Driving: 15 minutes, Subway: 25 minutes
    34.94s  user  발화 끝
    38.17s  user  발화 시작: 자동차가 더 빠르겠네요.
    38.17s  agent 발화 끝
    39.78s  agent 발화 시작: 맞아요. 아이들과 함께라면 편안하게 가는 게 좋겠죠.
    39.78s  user  발화 끝
    43.54s  user  발화 시작: 네네.
    43.54s  agent 발화 끝
    44.08s  user  발화 시작: 맞아요. 아이들이 차에서 심심해하지 않도록 노래를 틀어줄까요?
    44.08s  user  발화 끝
    47.84s  agent 발화 시작: 좋은 생각이네요. 아이들이 좋아하는 노래를 틀어주면 좋겠죠.
    47.84s  user  발화 끝
    51.60s  user  발화 시작: 어떤 노래를 틀어줄까요?
    51.60s  agent 발화 끝
    52.98s  <ret> 발화 (turn18 첫 프레임)
    53.22s  agent 발화 시작: <ret> '아기 상어 댄스'가 아이들에게 인기가 많아요. 핑크퐁 노래입니다.
    53.22s  ⚡SPAN 주입 [d'=1.60s / d_lead=4.30s]: (tool result) "Baby Shark Dance", Pinkfong
    53.22s  user  발화 끝
    57.52s  user  발화 시작: 아, 그거 아이들이 정말 좋아하죠!
    57.52s  agent 발화 끝
    59.88s  <ret> 발화 (turn20 첫 프레임)
    60.20s  agent 발화 시작: <ret> 네, 아이들이 정말 좋아하는 노래죠.
    60.20s  ⚡SPAN 주입(IRRELEVANT) [d'=1.20s / d_lead=2.69s]: The current temperature in London is 18.5°C, with a humidity of 65% an
    60.20s  user  발화 끝
    62.89s  agent 발화 시작: 주말 계획을 세우는 건 정말 즐거운 일이죠.
    62.89s  agent 발화 끝
    66.65s  user  발화 시작: 맞아요. 아이들과 함께하는 시간은 소중하죠.
    66.65s  agent 발화 끝
    69.34s  agent 발화 시작: 네, 아이들과 함께하는 시간은 정말 소중하죠.
    69.34s  user  발화 끝
    72.57s  user  발화 시작: 네.
    72.57s  agent 발화 끝
    73.11s  user  발화 시작: 혹시, 아이들 간식을 미리 준비해 가는 게 좋을까요?
    73.11s  user  발화 끝
    77.41s  agent 발화 시작: 네, 아이들이 좋아하는 간식을 챙겨가면 좋을 거예요.
    77.41s  user  발화 끝
    81.17s  user  발화 시작: 네.
    81.17s  agent 발화 끝
    81.71s  user  발화 시작: 좋은 생각이에요. 과자와 주스를 챙겨가야겠네요.
    81.71s  user  발화 끝
    84.39s  agent 발화 시작: 네, 과자와 주스는 아이들이 정말 좋아하는 간식이니까 꼭 챙겨가세요.
    84.39s  user  발화 끝
    89.23s  user  발화 시작: 아.
    89.23s  agent 발화 끝
    89.77s  user  발화 시작: 그런데 축제에 사람이 많을까요?
    89.77s  user  발화 끝
    91.92s  agent 발화 시작: 축제에는 많은 사람들이 올 것으로 예상됩니다.
    91.92s  user  발화 끝
    95.14s  user  발화 시작: 그렇죠.
    95.14s  agent 발화 끝
    95.68s  user  발화 시작: 사람이 많으면 아이들이 길을 잃을 수도 있잖아요.
    95.68s  user  발화 끝
    99.44s  agent 발화 시작: 네, 사람이 많으면 아이들이 길을 잃을 수도 있으니 주의해야 합니다. 아이 손을 꼭 잡고 다니세요.
    99.44s  user  발화 끝
   107.51s  user  발화 시작: 네.
   107.51s  agent 발화 끝
   108.05s  user  발화 시작: 네, 꼭 손을 잡고 다녀야겠네요.
   108.05s  user  발화 끝
   110.73s  agent 발화 시작: 맞아요. 아이들의 안전이 가장 중요하니까요.
   110.73s  user  발화 끝
   113.42s  agent 발화 끝
