# v3_rag_26_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi 내부 보유 — A 프로필=프롬프트 내재/no-RAG, B 메모리=RAG <ret>):
#   A. 프로필: Name: Emilia · Location: San Francisco, United States · Nationality: American · Gender: female · Age: late 30s · TZ: America/Los_Angeles (PST, UTC-8) · Currency: USD ($)
#   B. 저장 메모리:
#      [2026-04-23] User's home address is 249 Cedar Lane.
#      [2026-03-15] User has a Beagle named Rusty.
#      [2026-02-13] User prefers an aisle seat when traveling.
#      [2026-01-11] User works as a accountant.
#   B. 과거 대화 요약:
#      [2026-08-04] Researching a used car — comparing hybrid models; wants under 30k miles
#      [2026-05-28] Setting up a home network — asked about mesh routers; coverage for a 3-story house

# EXAMINER(FDB-v2) 단계: S1 검은색, 빨간색, 노란색이 들어간 깃발을 찾고 계시는군요? | S2 아, 맞아요! 독일, 그거였어요. 한 번 가봤는데 사람이 너무 | S3 흠, 항상 그랬던 건가요? | S4 와, 저는 그런 사실은 몰랐어요. 좋은 이야기네요.

     0.00s  user  발화 시작: 검은색, 빨간색, 노란색이 들어간 깃발을 찾고 계시는군요?
     4.40s  user  발화 끝
     4.46s  agent 발화 시작: 색깔만 기억하면 찾기 좀 어렵지. 그 색깔을 쓰는 깃발이 많거든.
     8.43s  <ret> 발화 (turn2 첫 프레임)
     8.74s  agent 발화 시작: <ret> 어떤 깃발인지 알아볼까… 검은색, 빨간색, 금색 띠가 있는 독일 국기일 가능성이 높아 보여.
     8.95s  agent 발화 끝
     9.87s  ⚡SPAN 주입 [d'=1.44s / d_lead=4.34s]: The flag of Germany features horizontal bands of black, red, and gold.
    16.70s  user  발화 시작: 아, 맞아요! 독일, 그거였어요. 한 번 가봤는데 사람이 너무 많았어요.
    16.80s  agent 발화 끝
    22.15s  agent 발화 시작: 여행은 정말 정신없이 즐거울 수 있지, 안 그래? 그 깃발과 관련된 기억이 있어서 좋네.
    22.35s  user  발화 끝
    27.78s  <ret> 발화 (turn5 첫 프레임)
    28.01s  agent 발화 시작: <ret> 깃발 이야기를 하니까 궁금해지네… 독일 국기의 첫 번째 버전은 천팔백사십팔년에 혁명 시기에 만들어
    28.13s  agent 발화 끝
    29.46s  ⚡SPAN 주입 [d'=1.68s / d_lead=3.58s]: The German flag was first adopted in 1848 during the revolutions of th
    33.37s  user  발화 시작: 그렇죠.
    34.33s  user  발화 끝
    35.75s  agent 발화 끝
    35.82s  user  발화 시작: 흠, 항상 그랬던 건가요?
    37.62s  agent 발화 시작: 꼭 그렇진 않아. 국기는 시대에 따라 변하고, 나라의 역사를 반영하거든.
    37.80s  user  발화 끝
    42.51s  <ret> 발화 (turn9 첫 프레임)
    42.90s  agent 발화 시작: <ret> 역사적인 세부 사항을 확인해 볼까… 독일 국기의 검은색, 빨간색, 금색은 뤼초 자유군 복장에서 유
    42.94s  agent 발화 끝
    43.55s  ⚡SPAN 주입 [d'=1.04s / d_lead=2.82s]: The colors of the German flag originate from the uniforms of the Lützo
    50.64s  user  발화 시작: 와, 저는 그런 사실은 몰랐어요. 좋은 이야기네요.
    50.78s  agent 발화 끝
    54.71s  user  발화 끝
