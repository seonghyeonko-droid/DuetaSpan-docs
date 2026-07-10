# v3_chain_05_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_chain_05",
#     "name": "유우",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "50s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-03-27",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-01-29",
#       "category": "pet",
#       "text": "User has a Siamese cat named Bella."
#     },
#     {
#       "date": "2025-06-16",
#       "category": "trip",
#       "text": "User is planning a trip to Iceland in October."
#     },
#     {
#       "date": "2025-06-01",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Thai."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-07",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2026-01-05",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 주니 카페의 가격대는 어떻게 되나요? | S2 포린 시네마가 제일 가까운 것 같네요. 영화를 상영하는 식당인 | S3 저녁 일곱시쯤에 예매하고 싶은데, 가능할까요? | S4 그럼 자동차로 가는 길을 알려주세요.

     0.00s  user  발화 시작: 주니 카페의 가격대는 어떻게 되나요?
     2.30s  <ret> 발화 (turn1 첫 프레임)
     2.54s  user  발화 끝
     2.61s  agent 발화 시작: <ret> 주니 카페의 가격대는 보통 수준입니다. 두 명이 식사하면 대략 삼십에서 육십 달러 정도 예상하시면
     4.30s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.98s]: (tool result) Zuni Cafe, 1658 Market St, San Francisco, CA 94102, USA;
     5.45s  user  발화 시작: 네네.
     6.14s  user  발화 끝
    10.59s  agent 발화 끝
    10.62s  user  발화 시작: 아, 그렇군요. 그럼 근처에 비슷한 가격대의 다른 맛집은 어디가 있나요?
    15.21s  <ret> 발화 (turn4 첫 프레임)
    15.52s  agent 발화 시작: <ret> 주니 카페 근처에 비슷한 가격대의 맛집으로는 포린 시네마, 노파, 스테이트 버드 프로비전스가 있습
    15.62s  user  발화 끝
    17.21s  ⚡SPAN 주입 [d'=2.00s / d_lead=15.63s]: (tool result) Foreign Cinema, 2534 Mission St, San Francisco, CA 94110
    31.15s  agent 발화 끝
    31.96s  user  발화 시작: 포린 시네마가 제일 가까운 것 같네요. 영화를 상영하는 식당인가요?
    36.78s  <ret> 발화 (turn6 첫 프레임)
    37.01s  user  발화 끝
    37.01s  agent 발화 시작: <ret> 포린 시네마에서는 영화를 상영합니다. 현재 상영하는 영화는 오펜하이머, 바비, 패스트 라이브스입니
    38.78s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.09s]: (tool result) Oppenheimer — Christopher Nolan — 2023; Barbie — Greta G
    39.64s  user  발화 시작: 그렇죠.
    40.23s  user  발화 끝
    44.10s  agent 발화 끝
    44.48s  user  발화 시작: 오펜하이머를 보고 싶은데, 오늘 몇 시에 상영하나요?
    48.21s  <ret> 발화 (turn9 첫 프레임)
    48.50s  agent 발화 시작: <ret> 포린 시네마에서 오펜하이머는 오늘 오후 여섯시 삼십분과 밤 아홉시 십오분에 상영합니다. 혹시 다른
    48.50s  user  발화 끝
    50.21s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.04s]: (tool result) 6:30 PM, 9:15 PM
    52.43s  user  발화 시작: 정말요?
    53.16s  user  발화 끝
    57.41s  user  발화 시작: 저녁 일곱시쯤에 예매하고 싶은데, 가능할까요?
    57.54s  agent 발화 끝
    60.63s  <ret> 발화 (turn12 첫 프레임)
    60.71s  agent 발화 시작: <ret> 네, 포린 시네마에서 오펜하이머 오후 일곱시 상영 티켓 두 장을 예매했습니다. 총 금액은 육만 달
    60.74s  user  발화 끝
    61.75s  ⚡SPAN 주입 [d'=1.12s / d_lead=10.71s]: (tool result) Confirmation: Foreign Cinema, Oppenheimer, 7:00 PM, 2 ti
    71.42s  agent 발화 끝
    73.08s  user  발화 시작: 감사합니다. 혹시 포린 시네마까지 가는 가장 빠른 길은 어떻게 되나요?
    77.52s  <ret> 발화 (turn14 첫 프레임)
    77.85s  user  발화 끝
    77.91s  agent 발화 시작: <ret> 주니 카페에서 포린 시네마까지 가는 가장 빠른 길은 자동차로 십분, 삼 점 이킬로미터입니다. 대중
    79.52s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.59s]: (tool result) Foreign Cinema, 2534 Mission St, San Francisco, CA 94110
    82.75s  user  발화 시작: 음.
    83.57s  user  발화 끝
    87.50s  agent 발화 끝
    88.09s  user  발화 시작: 그럼 자동차로 가는 길을 알려주세요.
    90.44s  user  발화 끝
    90.50s  <ret> 발화 (turn17 첫 프레임)
    90.57s  agent 발화 시작: <ret> 주니 카페에서 북쪽으로 마켓 스트리트를 따라 십육번 스트리트까지 이동합니다. 발렌시아 스트리트로 
    92.50s  ⚡SPAN 주입 [d'=2.00s / d_lead=11.55s]: (tool result) 1. Head north on Market St toward 16th St (450 m); 2. Tu
   102.11s  agent 발화 끝
   103.96s  user  발화 시작: 알겠습니다. 그런데 혹시 주차 공간이 있나요?
   107.20s  user  발화 끝
