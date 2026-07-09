# v3_mem_34_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi 내부 보유 — A 프로필=프롬프트 내재/no-RAG, B 메모리=RAG <ret>):
#   A. 프로필: Name: Ava · Location: Paris, France · Nationality: French · Gender: female · Age: late 30s · TZ: Europe/Paris (CET, UTC+1) · Currency: EUR (€)
#   B. 저장 메모리:
#      [2026-07-22] User's favorite cuisine is Mexican.
#      [2026-06-25] User is vegetarian.
#      [2026-06-15] User prefers an aisle seat when traveling.
#      [2026-02-23] User is allergic to peanuts.
#      [2026-02-11] User's home address is 30 Oak Avenue.
#      [2026-02-09] User is planning a trip to Kyoto in December.
#   B. 과거 대화 요약:
#      [2026-03-15] Planning a birthday dinner — party of six; looking for outdoor seating

# EXAMINER(FDB-v2) 단계: S1 그 몽토르그유 거리의 작은 빵집에 가고 싶은데, 걸어갈 수 있 | S2 실제로 정말 좋게 들리네. 돌아가는 길은 멀어? | S3 오늘 저녁 식사할 곳도 고민 중인데… 멕시코 음식으로 먹을까  | S4 엘 란초 괜찮네. 채식 옵션도 있어?

     0.00s  agent 발화 시작: 안녕하세요, 아바. 만나 뵙게 되어 정말 기뻐요. 앞으로 무엇을 할지 안내해 드릴 수 있어서 좋겠습니다.
     6.53s  user  발화 시작: 그 몽토르그유 거리의 작은 빵집에 가고 싶은데, 걸어갈 수 있을까?
     6.76s  agent 발화 끝
    10.99s  <ret> 발화 (turn2 첫 프레임)
    11.07s  agent 발화 시작: <ret> 정말 멋진 생각이고, 충분히 걸어갈 수 있어요. 오크 애비뉴 30번지에서 몽토르그유 거리까지는 대
    11.16s  user  발화 끝
    12.99s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.46s]: [2026-02-11] User's home address is 30 Oak Avenue.
    20.29s  agent 발화 끝
    21.82s  user  발화 시작: 오, 생각보다 안 멀네. 대충 얼마나 걸릴까?
    24.48s  <ret> 발화 (turn4 첫 프레임)
    24.72s  agent 발화 시작: <ret> 잠시 현재 상황을 확인해 볼게요. 몽토르그유 거리까지 걸어가면 약 22분 정도 걸릴 거예요.
    24.73s  user  발화 끝
    25.92s  ⚡SPAN 주입 [d'=1.44s / d_lead=3.22s]: (tool result) Origin: 30 Oak Avenue. Destination: Rue Montorgueil. Dis
    27.93s  user  발화 시작: 응.
    28.43s  user  발화 끝
    30.65s  user  발화 시작: 좋아!
    30.70s  agent 발화 끝
    31.28s  user  발화 끝
    31.34s  agent 발화 시작: 아바, 기분 좋은 산책이 될 거예요. 도시를 즐기기에도 좋은 방법이죠.
    34.01s  user  발화 시작: 그치.
    34.50s  user  발화 끝
    36.85s  agent 발화 끝
    36.93s  agent 발화 시작: 가는 길에 팔레 로얄 정원을 지나게 되는데, 잠시 들러볼 만한 아름다운 작은 공원이에요. 마음이 편안해지는 
    45.59s  agent 발화 끝
    45.66s  user  발화 시작: 실제로 정말 좋게 들리네. 돌아가는 길은 멀어?
    48.73s  <ret> 발화 (turn11 첫 프레임)
    48.96s  agent 발화 시작: <ret> 확인해 드릴 수 있어요. 팔레 로얄 정원을 추가하면 걸어가는 거리가 약 300미터 더 늘어납니다.
    49.03s  user  발화 끝
    50.73s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.13s]: [2026-02-11] User's home address is 30 Oak Avenue.
    53.00s  user  발화 시작: 아.
    53.35s  user  발화 끝
    56.19s  agent 발화 끝
    56.58s  user  발화 시작: 흠, 그렇게 많이는 안 늘네. 그렇게 할 것 같아.
    59.34s  user  발화 끝
    59.38s  agent 발화 시작: 정말 잘 됐네요! 조금이라도 탐험하는 것을 좋아하시는군요.
    63.40s  user  발화 시작: 오늘 저녁 식사할 곳도 고민 중인데… 멕시코 음식으로 먹을까 생각 중이야.
    63.40s  agent 발화 끝
    67.75s  <ret> 발화 (turn16 첫 프레임)
    67.98s  agent 발화 시작: <ret> 아, 생생한 맛을 찾으시는군요. 전에 멕시코 요리를 좋아하신다고 말씀하신 걸 기억해요.
    68.02s  user  발화 끝
    69.75s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.98s]: [2026-07-22] User's favorite cuisine is Mexican.
    70.66s  user  발화 시작: 응.
    70.97s  user  발화 끝
    74.24s  agent 발화 끝
    74.81s  user  발화 시작: 응, 정말 좋아! 근처에 추천해 줄 만한 곳 있어?
    78.37s  <ret> 발화 (turn19 첫 프레임)
    78.42s  user  발화 끝
    78.43s  agent 발화 시작: <ret> 알아볼게요. 엘 란초는 800미터 거리에 있고 별점은 4.5점입니다.
    80.37s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.74s]: (tool result) Restaurant: El Rancho. Cuisine: Mexican. Rating: 4.5 sta
    82.41s  user  발화 시작: 어어.
    83.04s  user  발화 끝
    84.41s  agent 발화 끝
    85.48s  user  발화 시작: 엘 란초 괜찮네. 채식 옵션도 있어?
    87.73s  <ret> 발화 (turn22 첫 프레임)
    88.05s  agent 발화 시작: <ret> 정말 중요한 부분이죠. 네, 엘 란초에서는 여러 가지 채식 요리를 제공합니다.
    88.07s  user  발화 끝
    89.01s  ⚡SPAN 주입 [d'=1.28s / d_lead=2.63s]: [2026-06-25] User is vegetarian.
    90.01s  user  발화 시작: 음.
    90.37s  user  발화 끝
    93.84s  agent 발화 끝
    94.14s  user  발화 시작: 좋아. 정말 고마워, 히아.
    96.67s  user  발화 끝
    97.06s  agent 발화 시작: 천만에요, 아바. 파리를 즐기시는 데 도움이 되어 기쁩니다.
   101.08s  agent 발화 끝
