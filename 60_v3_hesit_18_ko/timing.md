# v3_hesit_18_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi 내부 보유 — A 프로필=프롬프트 내재/no-RAG, B 메모리=RAG <ret>):
#   A. 프로필: Name: 은율 · Location: Busan, South Korea · Nationality: Korean · Gender: female · Age: early 30s · TZ: Asia/Seoul (KST, UTC+9) · Currency: KRW (₩)
#   B. 저장 메모리:
#      [2026-07-28] User is into marathon training.
#      [2026-07-11] User works as a chef.
#      [2026-06-14] User is planning a trip to Lisbon in March.
#      [2026-04-22] User is allergic to peanuts.
#      [2026-03-04] User's favorite cuisine is Korean BBQ.
#      [2026-02-05] User's home address is 429 Oak Avenue.
#   B. 과거 대화 요약:
#      [2026-05-15] Comparing gym memberships — wants a pool; close to the office
#      [2026-04-10] Setting up a home network — asked about mesh routers; coverage for a 3-story house

# EXAMINER(FDB-v2) 단계: S1 안녕하세요. 폼페이에 대해 읽다가 문득 궁금해졌어요… 음, 베 | S2 스물여덟 번이나요? 정말 많네요. 그럼 아직도 활화산인가요? | S3 천만 명이나… 화산 아래서 사는 사람이 그렇게 많다니. 좀 무 | S4 열여덟 일이나요… 시간이 꽤 길었네요. 그때보다 훨씬 많이 배

     0.00s  user  발화 시작: 안녕하세요. 폼페이에 대해 읽다가 문득 궁금해졌어요… 음, 베수비오 화산이 마지막으로 폭발한 게 언제였죠?
     6.84s  agent 발화 시작: 네, 그런 극적인 사건에 대해 배우신 후에 그런 질문을 하시는 건 당연해요.
     6.86s  user  발화 끝
    11.24s  <ret> 발화 (turn2 첫 프레임)
    11.55s  agent 발화 시작: <ret> 정확한 날짜를 찾아 드릴게요. 화산 폭발은 복잡할 수 있으니까요. 베수비오 화산의 마지막 폭발은 
    11.65s  agent 발화 끝
    13.24s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.10s]: Mount Vesuvius last erupted in March 1944.
    22.01s  user  발화 시작: 천구백사십사년… 와, 생각보다 최근이네요.
    22.36s  agent 발화 끝
    25.44s  agent 발화 시작: 화산과 그 지역의 오랜 역사를 생각하면 그렇습니다.
    25.57s  user  발화 끝
    29.26s  <ret> 발화 (turn5 첫 프레임)
    29.41s  agent 발화 시작: <ret> 불안감을 줄이기 위해 상황을 제대로 파악하는 게 좋겠어요. 베수비오 화산은 서기 칠십구년 이후로 
    29.60s  agent 발화 끝
    30.62s  ⚡SPAN 주입 [d'=1.36s / d_lead=6.24s]: Vesuvius has erupted approximately twenty-eight times since AD 79.
    39.05s  agent 발화 끝
    39.13s  user  발화 시작: 스물여덟 번이나요? 정말 많네요. 그럼 아직도 활화산인가요?
    42.91s  agent 발화 시작: 네, 그렇습니다. 활화산으로 간주되며, 끊임없이 감시되고 있습니다.
    42.96s  user  발화 끝
    47.96s  <ret> 발화 (turn8 첫 프레임)
    48.11s  agent 발화 시작: <ret> 지속적인 감시는 현재 상태를 이해하는 데 매우 중요합니다. 베수비오 화산은 플리니우스형 화산으로,
    48.32s  agent 발화 끝
    49.96s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.37s]: Vesuvius is classified as a Plinian volcano, known for explosive erupt
    51.74s  user  발화 시작: 네네.
    52.27s  user  발화 끝
    57.57s  agent 발화 시작: 그 폭발은 높은 재와 부석 기둥을 특징으로 합니다.
    57.66s  agent 발화 끝
    60.81s  agent 발화 끝
    61.51s  user  발화 시작: 부석… 수세미질할 때 쓰는 거요? 그게 같은 건가요?
    64.55s  agent 발화 시작: 하하, 네 맞아요! 그 다공성 암석은 화산 기원이며, 폭발의 부산물입니다.
    64.74s  user  발화 끝
    71.27s  <ret> 발화 (turn13 첫 프레임)
    71.42s  agent 발화 시작: <ret> 재난과 일상적인 것 사이의 그런 연관성은 흥미롭네요. 베수비오 화산 주변에는 천만 명이 넘는 사람
    71.50s  agent 발화 끝
    73.27s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.62s]: The area around Vesuvius is densely populated with over three million 
    80.42s  agent 발화 끝
    80.44s  user  발화 시작: 천만 명이나… 화산 아래서 사는 사람이 그렇게 많다니. 좀 무섭네요.
    85.09s  agent 발화 시작: 잠재적인 위험을 알고 그렇게 느끼시는 건 당연합니다.
    85.30s  user  발화 끝
    88.26s  <ret> 발화 (turn16 첫 프레임)
    88.33s  agent 발화 시작: <ret> 그런 감정을 인정하는 것이 건강한 첫걸음입니다. 과학자들은 현재 베수비오 화산의 활동 증가 징후를
    88.46s  agent 발화 끝
    90.26s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.70s]: Scientists are currently monitoring Vesuvius for signs of increased ac
    97.10s  user  발화 시작: 감시… 그럼 꼼꼼히 보고 있는 거군요? 대피 계획은 있나요?
    97.15s  agent 발화 끝
   101.26s  user  발화 끝
   101.33s  agent 발화 시작: 네, 있습니다. 지역 당국은 자세한 대피 계획을 마련해 두었습니다.
   106.25s  <ret> 발화 (turn19 첫 프레임)
   106.48s  agent 발화 시작: <ret> 준비성이 잠재적인 위험에 대처하는 가장 좋은 방법입니다. 천구백사십사년 이전의 마지막 대규모 폭발
   106.52s  agent 발화 끝
   108.25s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.75s]: The last major eruption before 1944 was in 1631, lasting eighteen days
   115.50s  user  발화 시작: 오.
   116.14s  user  발화 끝
   119.24s  agent 발화 끝
   120.02s  user  발화 시작: 열여덟 일이나요… 시간이 꽤 길었네요. 그때보다 훨씬 많이 배웠겠죠.
   124.56s  user  발화 끝
   124.67s  agent 발화 시작: 네, 그렇습니다. 감시 기술과 대피 전략이 상당히 발전했습니다.
   128.92s  agent 발화 끝
