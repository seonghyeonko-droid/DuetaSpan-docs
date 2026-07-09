# v3_mem_32_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi 내부 보유 — A 프로필=프롬프트 내재/no-RAG, B 메모리=RAG <ret>):
#   A. 프로필: Name: Manon · Location: Berlin, Germany · Nationality: German · Gender: female · Age: late 30s · TZ: Europe/Berlin (CET, UTC+1) · Currency: EUR (€)
#   B. 저장 메모리:
#      [2026-07-25] User is planning a trip to Kyoto in March.
#      [2026-06-14] User is into rock climbing.
#      [2026-03-10] User's favorite cuisine is sushi.
#      [2026-02-26] User is gluten-free.
#   B. 과거 대화 요약:
#      [2026-07-12] Booked a dentist appointment — asked for an early-morning slot; prefers Dr. Han
#      [2026-01-20] Planning a birthday dinner — party of six; looking for outdoor seating


     0.00s  agent 발화 시작: 안녕하세요 마농 씨, 저는 투날로라고 합니다. 오늘 만나 뵙게 되어 정말 기쁩니다.
     4.73s  user  발화 시작: 네.
     5.05s  user  발화 끝
     6.25s  agent 발화 끝
     6.54s  user  발화 시작: 방금 계획하고 싶었던 여행에 대해 생각하고 있었어요.
    10.48s  <ret> 발화 (turn3 첫 프레임)
    10.56s  agent 발화 시작: <ret> 아, 여행 계획을 떠올리는 건 정말 멋진 영감의 원천이 될 수 있어요. 지난번에 3월에 교토에 가
    10.56s  user  발화 끝
    12.00s  ⚡SPAN 주입 [d'=1.52s / d_lead=5.10s]: [2026-07-25] User is planning a trip to Kyoto in March.
    21.22s  agent 발화 끝
    22.07s  user  발화 시작: 맞아요. 베를린과 교토의 시차는 정확히 어떻게 되나요?
    25.73s  <ret> 발화 (turn5 첫 프레임)
    26.12s  agent 발화 시작: <ret> 시차를 아는 건 원활한 여행 계획에 아주 중요해요. 교토는 베를린보다 8시간 빠르기 때문에, 베를
    26.19s  user  발화 끝
    26.77s  ⚡SPAN 주입 [d'=1.04s / d_lead=4.08s]: (tool result) Time difference: Berlin is 8 hours behind Kyoto. / Curre
    34.50s  user  발화 시작: 그렇죠.
    35.32s  user  발화 끝
    37.84s  agent 발화 시작: 시간 적응이 조금 어려울 수도 있지만, 그게 또 여행의 묘미 아니겠어요?
    37.91s  agent 발화 끝
    42.38s  agent 발화 끝
    43.76s  user  발화 시작: 네, 정말 그렇네요. 그런데 저는 스시도 정말 좋아해요.
    47.73s  agent 발화 시작: 하하, 스시를 좋아하신다니 정말 좋네요, 마농 씨! 맛있는 음식을 즐기는 건 언제나 좋은 일이죠!
    47.78s  user  발화 끝
    55.15s  agent 발화 끝
