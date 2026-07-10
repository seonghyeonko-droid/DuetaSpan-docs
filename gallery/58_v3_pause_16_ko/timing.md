# v3_pause_16_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_pause_16",
#     "name": "채찬",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "late 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-12",
#       "category": "work",
#       "text": "User works as a graphic designer."
#     },
#     {
#       "date": "2026-04-09",
#       "category": "diet",
#       "text": "User is vegetarian."
#     },
#     {
#       "date": "2025-12-04",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Mexican."
#     },
#     {
#       "date": "2025-06-09",
#       "category": "home",
#       "text": "User's home address is 서울 마포구 성산동 45-6."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-12-09",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 휴스턴 로켓츠의 구단주는 누구예요? | S2 …랜드리스는 정확히 어떤 회사인가요? | S3 …인수하셨는지 알 수 있을까요? | S4 혹시 그분이 다른 스포츠팀도 소유하고 있나요?

     0.00s  user  발화 시작: 휴스턴 로켓츠의 구단주는 누구예요?
     1.83s  <ret> 발화 (turn1 첫 프레임)
     2.22s  agent 발화 시작: <ret> 휴스턴 로켓츠의 구단주는 틸먼 조셉 페르티타 씨입니다.
     2.23s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.26s]: Tilman Joseph Fertitta is an American businessman and the owner of the
     2.30s  user  발화 끝
     6.44s  user  발화 시작: …잠깐만요, 그분은 또 다른 사업도 하시나요?
     6.48s  agent 발화 끝
     8.61s  <ret> 발화 (turn3 첫 프레임)
     8.93s  agent 발화 시작: <ret> 네, 다양한 사업을 하고 계시죠.
     8.93s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.07s]: Fertitta is the chairman and CEO of Landry's, Inc., a hospitality comp
     9.16s  user  발화 끝
    10.83s  agent 발화 시작: 페르티타 씨는 랜드리스 주식회사 회장이시자 최고경영자이십니다—
    11.00s  agent 발화 끝
    15.04s  user  발화 시작: …랜드리스는 정확히 어떤 회사인가요?
    15.78s  agent 발화 끝
    17.30s  <ret> 발화 (turn6 첫 프레임)
    17.46s  agent 발화 시작: <ret> 랜드리스는 외식 및 숙박 분야의 회사입니다.
    17.46s  ⚡SPAN 주입 [d'=1.52s / d_lead=3.42s]: Landry's, Inc. owns and operates a large number of restaurants, hotels
    17.54s  user  발화 끝
    20.88s  agent 발화 시작: 랜드리스는 많은 레스토랑, 호텔, 카지노, 그리고 엔터테인먼트 시설을 운영하고 있습니다.
    20.88s  agent 발화 끝
    25.32s  user  발화 시작: 네네.
    25.86s  user  발화 끝
    27.00s  agent 발화 시작: 틸먼 페르티타 씨는 꽤 영향력 있는 사업가이신 것 같아요.
    27.18s  agent 발화 끝
    31.21s  agent 발화 시작: 사업가로서의 활동을 응원합니다.
    31.29s  agent 발화 끝
    33.80s  agent 발화 끝
    34.26s  user  발화 시작: 그분이 휴스턴 로켓츠를 언제…
    36.52s  user  발화 끝
    38.54s  user  발화 시작: …인수하셨는지 알 수 있을까요?
    40.15s  <ret> 발화 (turn13 첫 프레임)
    40.29s  agent 발화 시작: <ret> 틸먼 페르티타 씨는 이천십칠년에 레슬리 알렉산더 씨에게서 이십이억 달러에 휴스턴 로켓츠를 인수하셨
    40.31s  ⚡SPAN 주입 [d'=1.68s / d_lead=8.00s]: Tilman Fertitta purchased the Houston Rockets from Leslie Alexander in
    40.47s  user  발화 끝
    45.23s  user  발화 시작: 어머.
    45.68s  user  발화 끝
    48.25s  user  발화 시작: 이십이억 달러라니, 정말 엄청난 금액이네요.
    48.29s  agent 발화 끝
    51.30s  agent 발화 시작: 맞아요, 정말 큰 금액이죠.
    51.48s  user  발화 끝
    53.62s  user  발화 시작: 혹시 그분이 다른 스포츠팀도 소유하고 있나요?
    53.74s  agent 발화 끝
    56.12s  <ret> 발화 (turn18 첫 프레임)
    56.28s  agent 발화 시작: <ret> 다른 스포츠팀 소유에 대한 정보는 찾을 수 없었습니다.
    56.28s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.84s]: (no information found)
    56.43s  user  발화 끝
    60.12s  agent 발화 끝
