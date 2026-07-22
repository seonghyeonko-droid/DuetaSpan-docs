# v3_to_ot_11_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_to_ot_11",
#     "name": "태린",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "early 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-23",
#       "category": "trip",
#       "text": "User is planning a trip to Patagonia in April."
#     },
#     {
#       "date": "2026-06-12",
#       "category": "allergy",
#       "text": "User is allergic to pollen."
#     },
#     {
#       "date": "2026-04-15",
#       "category": "employer",
#       "text": "User works at a consulting firm."
#     },
#     {
#       "date": "2026-04-03",
#       "category": "dish",
#       "text": "User's go-to comfort dish is mushroom risotto."
#     },
#     {
#       "date": "2026-03-30",
#       "category": "emergency",
#       "text": "User's emergency contact is Hana."
#     },
#     {
#       "date": "2026-03-24",
#       "category": "airline",
#       "text": "User usually flies with Air France."
#     },
#     {
#       "date": "2026-03-22",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Sichuan."
#     },
#     {
#       "date": "2026-03-21",
#       "category": "gym",
#       "text": "User has a gym membership near the station."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-17",
#       "title": "Training for a 10K",
#       "bullets": [
#         "current pace is around 6 minutes per km",
#         "race is in November"
#       ]
#     },
#     {
#       "date": "2026-04-01",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers for a 3-story house",
#         "wanted coverage for the basement office"
#       ]
#     },
#     {
#       "date": "2026-03-27",
#       "title": "Refinancing a mortgage",
#       "bullets": [
#         "current rate is 4.2 percent",
#         "wants to compare 15- vs 30-year terms"
#       ]
#     },
#     {
#       "date": "2025-12-24",
#       "title": "Fixing a leaking faucet",
#       "bullets": [
#         "it's a single-handle kitchen tap",
#         "asked whether to replace the cartridge"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 혹시 이천십팔년에 엔 씨 에이 에이 여자 농구 챔피언십 누가 이겼는지 알아?
     4.07s  <ret> 발화 (turn1 첫 프레임)
     4.44s  agent 발화 시작: <ret> [happy] 확인해 보니 우승팀은 노트르담 파이팅 아이리시였습니다.
     4.49s  user  발화 끝
     4.78s  ⚡SPAN 주입 [d'=0.71s / d_lead=3.42s]: The Notre Dame Fighting Irish won the 2018 NCAA Division I women's bas
     6.16s  user  발화 시작: 응.
     6.38s  user  발화 끝
     7.86s  agent 발화 끝
     8.39s  user  발화 시작: 여보, 오븐 타이머 울린다 — 좀 꺼 줄래?
    10.70s  user  발화 끝
    10.71s  user  발화 시작: 근데 그 팀이 그때 정말 압도적이었나?
    12.81s  agent 발화 시작: [curious] 당시에 워낙 강팀이라 기대가 컸던 기억이 나요. 부모님 모시고 경기 보러 가시면 정말 좋아
    12.88s  user  발화 끝
    19.43s  agent 발화 끝
