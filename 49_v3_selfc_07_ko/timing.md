# v3_selfc_07_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi 내부 보유 — A 프로필=프롬프트 내재/no-RAG, B 메모리=RAG <ret>):
#   A. 프로필: Name: Rennora · Location: Tokyo, Japan · Nationality: Japanese · Gender: female · Age: 50s · TZ: Asia/Tokyo (JST, UTC+9) · Currency: JPY (¥)
#   B. 저장 메모리:
#      [2026-05-17] User is planning a trip to Switzerland in March.
#      [2026-03-25] User is allergic to penicillin.
#      [2026-02-05] User has a Siamese cat named Bella.
#      [2026-01-17] User prefers an aisle seat when traveling.
#   B. 과거 대화 요약:
#      [2026-08-02] Booked a dentist appointment — asked for an early-morning slot; prefers Dr. Han
#      [2026-07-09] Planning a birthday dinner — party of six; looking for outdoor seating
#      [2026-04-23] Setting up a home network — asked about mesh routers; coverage for a 3-story house

# EXAMINER(FDB-v2) 단계: S1 6월 15일에 그랜드뷰 로프트에서 보여주실 수 있나요? | S2 네, 시청까지 얼마나 떨어져 있는지 알려 주시겠어요? | S3 그랜드뷰 로프트에서 걸어갈 수 있는 거리에 커피숍이 있나요? | S4 좋네요. [happy]

     0.00s  user  발화 시작: 6월 15일에 그랜드뷰 로프트에서 보여주실 수 있나요?
     3.13s  <ret> 발화 (turn1 첫 프레임)
     3.37s  agent 발화 시작: <ret> 응, 6월 15일 오후 2시에 그랜드뷰 로프트 방문 예약을 잡아 줬어.
     3.47s  user  발화 끝
     5.05s  ⚡SPAN 주입 [d'=1.92s / d_lead=3.30s]: (tool result) A viewing at The Grandview Lofts is scheduled for June f
     8.55s  agent 발화 끝
     8.95s  user  발화 시작: 아, 그런데—6월 16일이 더 괜찮을 것 같아요.
    11.60s  <ret> 발화 (turn3 첫 프레임)
    11.84s  agent 발화 시작: <ret> 아무 문제 없어, 쉽게 바꿀 수 있어. 좋아, 그랜드뷰 로프트 방문 예약을 6월 16일 오전 10
    11.99s  user  발화 끝
    13.60s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.84s]: (tool result) A viewing at The Grandview Lofts is scheduled for June s
    16.06s  user  발화 시작: 네.
    16.69s  user  발화 끝
    19.77s  agent 발화 시작: 이 부동산에 대해 더 도와줄 거 있어?
    19.95s  agent 발화 끝
    22.36s  user  발화 시작: 네, 시청까지 얼마나 떨어져 있는지 알려 주시겠어요?
    22.41s  agent 발화 끝
    25.22s  <ret> 발화 (turn7 첫 프레임)
    25.46s  agent 발화 시작: <ret> 알았어, 거리를 금방 확인해 볼게. 그랜드뷰 로프트에서 시청까지는 3.2마일이야.
    25.69s  user  발화 끝
    26.34s  ⚡SPAN 주입 [d'=1.12s / d_lead=5.98s]: (tool result) The distance from The Grandview Lofts to City Hall is 3.
    28.68s  user  발화 시작: 음.
    29.17s  user  발화 끝
    31.43s  user  발화 시작: 시청 주변에 주차는 어때요? 어렵나요?
    31.43s  agent 발화 끝
    34.76s  user  발화 끝
    34.92s  agent 발화 시작: 다운타운 주차는 좀 어려울 수 있는데, 근처에 주차장이 여러 군데 있어.
    39.88s  user  발화 시작: 그랜드뷰 로프트에서 걸어갈 수 있는 거리에 커피숍이 있나요?
    40.10s  agent 발화 끝
    43.26s  <ret> 발화 (turn12 첫 프레임)
    43.33s  agent 발화 시작: <ret> 좋은 질문이야, 좋은 커피숍을 찾는 게 중요하잖아. 근처에 커피숍이 세 군데 있어: 브루 앤 바이
    43.54s  user  발화 끝
    45.26s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.74s]: (tool result) Three coffee shops are within a half-mile of The Grandvi
    53.76s  agent 발화 끝
    54.09s  user  발화 시작: 음, 브루 앤 바이트… 야외 좌석이 있나요?
    57.41s  <ret> 발화 (turn14 첫 프레임)
    57.48s  agent 발화 시작: <ret> 브루 앤 바이트에 야외 좌석이 있는지 알아볼게. 응, 브루 앤 바이트에는 열두 명을 수용할 수 있
    57.65s  user  발화 끝
    58.45s  ⚡SPAN 주입 [d'=1.04s / d_lead=3.80s]: (tool result) Brew & Bites has a patio with seating for twelve.
    65.02s  user  발화 시작: 좋네요. [happy]
    65.08s  agent 발화 끝
    65.65s  agent 발화 시작: 마음에 드는 옵션을 찾으신 것 같아서 정말 좋네! 그런 작은 디테일을 생각하는 게 좋지.
    65.84s  user  발화 끝
    68.95s  user  발화 시작: 예.
    69.62s  user  발화 끝
    71.18s  user  발화 시작: 6월 16일 방문 예약을 확정하고 싶어요.
    71.39s  agent 발화 끝
    73.92s  agent 발화 시작: 잘 됐네! 기분이 좋으시다니 다행이야. 다른 일이 있으면 언제든지 말해.
    74.09s  user  발화 끝
    79.20s  agent 발화 끝
