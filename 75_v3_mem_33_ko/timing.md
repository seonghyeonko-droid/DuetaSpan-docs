# v3_mem_33_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi 내부 보유 — A 프로필=프롬프트 내재/no-RAG, B 메모리=RAG <ret>):
#   A. 프로필: Name: Casey · Location: New York, United States · Nationality: American · Gender: non-binary · Age: 40s · TZ: America/New_York (EST, UTC-5) · Currency: USD ($)
#   B. 저장 메모리:
#      [2026-07-23] User's favorite cuisine is sushi.
#      [2026-07-20] User is into home fermentation.
#      [2026-06-24] User is gluten-free.
#      [2026-05-11] User has a Beagle named Rusty.
#      [2026-03-02] User is allergic to peanuts.
#      [2026-01-28] User's home address is 743 Cedar Lane.
#   B. 과거 대화 요약:
#      [2026-07-27] Planning a birthday dinner — party of six; looking for outdoor seating
#      [2026-07-06] Comparing gym memberships — wants a pool; close to the office

# EXAMINER(FDB-v2) 단계: S1 음, 지금 몇 시야? 전화 걸 시간 놓쳤는지 알아야 돼. | S2 재밌는데, 뭘 먹는지 조심해야겠어. | S3 정말 그래. 아! 거의 잊을 뻔했네—나 알레르기가 엄청 심해. | S4 헬스장도 보고 있었어. 수영장이 있는 곳으로 보고 싶어.

     0.00s  agent 발화 시작: 안녕, 케이시. 난 디올로야. 오늘 너랑 얘기하게 돼서 기뻐.
     3.26s  user  발화 시작: 음.
     3.80s  user  발화 끝
     4.61s  user  발화 시작: 음, 지금 몇 시야? 전화 걸 시간 놓쳤는지 알아야 돼.
     4.62s  agent 발화 끝
     8.58s  <ret> 발화 (turn3 첫 프레임)
     8.65s  agent 발화 시작: <ret> 시간 확인해 주는 건 쉬워. 지금 뉴욕 시간으로 오후 2시 17분이야.
     8.78s  user  발화 끝
    10.58s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.57s]: (tool result) Location: New York, United States. Timezone: America/New
    11.60s  user  발화 시작: 응.
    12.10s  user  발화 끝
    13.56s  agent 발화 끝
    13.74s  user  발화 시작: 오, 다행이다, 안 늦었네. 또 궁금한 게 있는데… 내가 제일 좋아하는 음식이 뭔지 기억해?
    20.82s  <ret> 발화 (turn6 첫 프레임)
    21.06s  agent 발화 시작: <ret> 네가 뭘 좋아하는지 얘기했던 거 기억나. 스시가 제일 좋다고 했었지.
    21.16s  user  발화 끝
    22.26s  ⚡SPAN 주입 [d'=1.44s / d_lead=3.18s]: [2026-07-23] User's favorite cuisine is sushi.
    25.45s  user  발화 시작: 스시, 그렇지! 진짜 좋아해. 사실 집에서 만들어 볼까 생각 중이야.
    25.60s  agent 발화 끝
    30.16s  agent 발화 시작: 그거 좋겠다. 요리하는 거 좋아해?
    30.17s  user  발화 끝
    31.13s  user  발화 시작: 응.
    31.58s  user  발화 끝
    32.51s  agent 발화 끝
    32.62s  user  발화 시작: 어, 나는— 그러니까, 요즘 집에서 발효하는 데 푹 빠졌어.
    36.39s  <ret> 발화 (turn11 첫 프레임)
    36.53s  agent 발화 시작: <ret> 흥미로운 취미네. 요즘 집에서 발효하는 걸 즐기고 있구나.
    36.79s  user  발화 끝
    37.99s  ⚡SPAN 주입 [d'=1.60s / d_lead=3.20s]: [2026-07-20] User is into home fermentation.
    40.72s  user  발화 시작: 재밌는데, 뭘 먹는지 조심해야겠어.
    40.80s  agent 발화 끝
    43.47s  agent 발화 시작: 그러는 게 아주 현명한 생각이야.
    43.63s  user  발화 끝
    45.41s  agent 발화 끝
    45.41s  user  발화 시작: 글루텐 프리잖아, 그렇지? 항상 까먹어.
    47.87s  <ret> 발화 (turn15 첫 프레임)
    47.94s  agent 발화 시작: <ret> 식단 관리가 중요하지. 응, 글루텐 프리 식단을 지키고 있어.
    47.99s  user  발화 끝
    49.87s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.40s]: [2026-06-24] User is gluten-free.
    52.86s  user  발화 시작: 좋아. 그리고, 내 강아지 러스티… 러스티가 무슨 종이었지?
    52.88s  agent 발화 끝
    57.97s  <ret> 발화 (turn17 첫 프레임)
    58.05s  agent 발화 시작: <ret> 네 강아지에 대한 메모가 있어. 비글 러스티라고 해.
    58.23s  user  발화 끝
    59.97s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.84s]: [2026-05-11] User has a Beagle named Rusty.
    61.88s  agent 발화 끝
    62.57s  user  발화 시작: 비글! 맞아, 그렇지. 녀석 때문에 정신 없어.
    66.60s  user  발화 끝
    67.00s  agent 발화 시작: [laugh] 그렇지, 그렇지. 개들은 다 그런 거 아니겠어? 개성이 강하잖아.
    73.25s  agent 발화 끝
    73.66s  user  발화 시작: 정말 그래. 아! 거의 잊을 뻔했네—나 알레르기가 엄청 심해.
    76.95s  <ret> 발화 (turn21 첫 프레임)
    77.27s  agent 발화 시작: <ret> 건강 문제는 기억해 두는 게 좋지. 땅콩 알레르기가 있으니 조심해야 해.
    77.40s  user  발화 끝
    78.07s  ⚡SPAN 주입 [d'=1.12s / d_lead=2.33s]: [2026-03-02] User is allergic to peanuts.
    82.32s  user  발화 시작: 땅콩, 맞아! 알려줘서 고마워. 누가 챙겨주니까 좋네.
    82.40s  agent 발화 끝
    87.14s  agent 발화 시작: 천만에, 케이시. 내가 뭐든 도와줄게.
    87.28s  user  발화 끝
    90.61s  agent 발화 끝
    91.85s  user  발화 시작: 생일 저녁도 준비하려고, 6명 정도?
    95.30s  <ret> 발화 (turn25 첫 프레임)
    95.36s  agent 발화 시작: <ret> 그 얘기했던 거 기억나. 6명 생일 저녁을 준비하고, 야외 좌석도 필요하다고 했었지.
    95.55s  user  발화 끝
    97.30s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.51s]: [2026-07-27] Past chat — Planning a birthday dinner: party of six; loo
    99.65s  user  발화 시작: 어머.
   100.19s  user  발화 끝
   101.39s  agent 발화 끝
   101.83s  user  발화 시작: 야외 좌석이 중요해. 지금 전화해 보는 게 좋을까?
   105.39s  agent 발화 시작: 미리 확인하는 건 좋은 생각이야. 지금 예약 가능 여부를 확인해 봐.
   105.39s  user  발화 끝
   110.39s  agent 발화 끝
   111.88s  user  발화 시작: 헬스장도 보고 있었어. 수영장이 있는 곳으로 보고 싶어.
   115.26s  <ret> 발화 (turn30 첫 프레임)
   115.65s  agent 발화 시작: <ret> 헬스장 선호도에 대해 기억하고 있어. 사무실 근처에 수영장이 있는 헬스장을 찾고 있어.
   115.94s  user  발화 끝
   117.26s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.29s]: [2026-07-06] Past chat — Comparing gym memberships: wants a pool; clos
   119.50s  user  발화 시작: 응.
   120.04s  user  발화 끝
   122.23s  agent 발화 끝
   122.39s  user  발화 시작: 바로 그거! 딱 좋겠어.
   124.43s  agent 발화 시작: 네 건강을 챙기는 모습이 보기 좋네.
   124.51s  user  발화 끝
   126.17s  user  발화 시작: 어.
   126.80s  user  발화 끝
   127.06s  agent 발화 끝
   127.39s  user  발화 시작: 그러려고 노력해. 그냥… 가끔 정신이 없어.
   131.74s  user  발화 끝
   131.81s  agent 발화 시작: 괜찮아, 케이시. 머릿속에 생각이 많으면 그럴 수 있어.
   135.84s  agent 발화 끝
   136.54s  user  발화 시작: 응. 고마워, 디올로. 정말 큰 도움이 됐어.
   140.62s  user  발화 끝
   141.00s  agent 발화 시작: 천만에, 케이시. 도움이 될 수 있어서 기뻐.
   144.37s  agent 발화 끝
