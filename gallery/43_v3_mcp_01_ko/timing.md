# v3_mcp_01_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mcp_01",
#     "name": "재람",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "early 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-28",
#       "category": "work",
#       "text": "User works as a nurse."
#     },
#     {
#       "date": "2026-06-24",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Ethiopian."
#     },
#     {
#       "date": "2026-06-03",
#       "category": "allergy",
#       "text": "User is allergic to penicillin."
#     },
#     {
#       "date": "2026-05-16",
#       "category": "trip",
#       "text": "User is planning a trip to Kyoto in March."
#     },
#     {
#       "date": "2026-04-03",
#       "category": "pet",
#       "text": "User has a Golden Retriever named Max."
#     },
#     {
#       "date": "2026-03-27",
#       "category": "home",
#       "text": "User's home address is 서울 마포구 성산동 45-6."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-12-26",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 심리 상담사 좀 찾아줘. 콜로라도 덴버에서, 현금으로 결제할  | S2 혹시 다른 상담사도 알아봐 줄 수 있어? 좀 더 저렴한 곳으로 | S3 …혹시 그쪽은 예약이 얼마나 밀려있어? 지금 당장 예약하려면  | S4 …그럼 다른 곳은 어때?

     0.00s  user  발화 시작: 심리 상담사 좀 찾아줘. 콜로라도 덴버에서, 현금으로 결제할 수 있는 곳으로.
     5.35s  agent 발화 시작: 아.
     5.35s  user  발화 끝
     5.67s  <ret> 발화 (turn2 첫 프레임)
     5.83s  agent 발화 시작: <ret> 덴버에서 현금 결제가 가능한 심리 상담사로 엘리너 밴스 박사님을 찾았습니다. 주소는 천사백사십오 
     5.83s  agent 발화 끝
     7.06s  ⚡SPAN 주입 [d'=1.38s / d_lead=12.15s]: (tool result) {"provider name": "Dr. Eleanor Vance", "address": "1445 
    17.98s  user  발화 시작: 아.
    17.98s  agent 발화 끝
    18.47s  user  발화 시작: 그분, 평일 말고 주말에도 진료하시나?
    18.47s  user  발화 끝
    20.36s  <ret> 발화 (turn5 첫 프레임)
    20.90s  agent 발화 시작: <ret> 엘리너 밴스 박사님은 토요일 오전 열시부터 오후 두시까지 진료를 하십니다.
    20.90s  user  발화 끝
    20.97s  ⚡SPAN 주입 [d'=0.61s / d_lead=4.86s]: (tool result) {"availability": "Saturdays 10am-2pm"}
    25.76s  user  발화 시작: 우와.
    25.76s  agent 발화 끝
    26.24s  user  발화 시작: 토요일에 예약하려면 어떻게 해야 해?
    26.24s  user  발화 끝
    28.67s  agent 발화 시작: 예약은 전화로 직접 하셔야 합니다. 삼 공 삼 오 오 오 일 이 일 이로 연락해 보세요.
    28.67s  user  발화 끝
    36.93s  user  발화 시작: 진짜?
    36.93s  agent 발화 끝
    37.42s  user  발화 시작: 혹시 다른 상담사도 알아봐 줄 수 있어? 좀 더 저렴한 곳으로.
    37.42s  user  발화 끝
    42.37s  <ret> 발화 (turn11 첫 프레임)
    42.77s  agent 발화 시작: <ret> 덴버 커뮤니티 정신 건강 센터는 보험이나 소득 수준에 따른 요금 조정이 가능하며, 평일 오전 여덟
    42.77s  user  발화 끝
    43.15s  ⚡SPAN 주입 [d'=0.78s / d_lead=14.09s]: (tool result) {"provider name": "Community Mental Health Center", "add
    56.86s  user  발화 시작: 슬라이딩 스케일이 정확히 뭔데?
    56.86s  agent 발화 끝
    58.80s  agent 발화 시작: 슬라이딩 스케일은 개인의 소득에 따라 상담료를 조정해 주는 제도입니다—
    58.80s  user  발화 끝
    63.18s  user  발화 시작: …혹시 그쪽은 예약이 얼마나 밀려있어? 지금 당장 예약하려면 얼마나 기다려야 할까?
    63.18s  agent 발화 끝
    68.19s  <ret> 발화 (turn15 첫 프레임)
    68.52s  agent 발화 시작: <ret> 커뮤니티 정신 건강 센터는 현재 예약 대기 시간이 약 이주 정도입니다.
    68.52s  user  발화 끝
    69.09s  ⚡SPAN 주입 [d'=0.90s / d_lead=5.35s]: (tool result) {"wait time": "approximately 2 weeks"}
    73.87s  user  발화 시작: 이주나 기다려야 한다고? 음……
    73.87s  agent 발화 끝
    75.81s  user  발화 시작: …그럼 다른 곳은 어때?
    75.81s  user  발화 끝
    77.76s  agent 발화 시작: 다른 상담사를 찾아볼까요? 어떤 조건이 더 중요하신가요?
    77.76s  user  발화 끝
    81.16s  user  발화 시작: 그냥 제일 빨리 예약할 수 있는 곳으로 찾아줘. 가격은 상관없어.
    81.16s  agent 발화 끝
    85.90s  <ret> 발화 (turn20 첫 프레임)
    86.02s  agent 발화 시작: <ret> 제임스 라일리 박사님은 지금 당장 예약이 가능합니다. 전화번호는 삼 공 삼 삼 이 공 이 이 이 
    86.02s  user  발화 끝
    86.27s  ⚡SPAN 주입 [d'=0.38s / d_lead=10.69s]: (tool result) {"provider name": "Dr. James Riley", "address": "5500 Le
    96.71s  agent 발화 시작: 바로 예약할 수 있다는 점이 좋으시겠네요.
    96.71s  agent 발화 끝
    99.62s  agent 발화 끝
