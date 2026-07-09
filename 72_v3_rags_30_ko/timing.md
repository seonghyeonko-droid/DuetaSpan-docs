# v3_rags_30_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi 내부 보유 — A 프로필=프롬프트 내재/no-RAG, B 메모리=RAG <ret>):
#   A. 프로필: Name: Robin · Location: Toronto, Canada · Nationality: Canadian · Gender: non-binary · Age: early 30s · TZ: America/Toronto (EST, UTC-5) · Currency: CAD ($)
#   B. 저장 메모리:
#      [2026-06-10] User's home address is 664 Birch Road.
#      [2026-05-07] User is gluten-free.
#      [2026-03-03] User prefers an aisle seat when traveling.
#      [2026-01-12] User has a Beagle named Rusty.
#      [2026-01-03] User is into rock climbing.
#   B. 과거 대화 요약:
#      [2026-05-01] Booked a dentist appointment — asked for an early-morning slot; prefers Dr. Han
#      [2026-01-21] Setting up a home network — asked about mesh routers; coverage for a 3-story house


     0.00s  user  발화 시작: 유럽에서 인쇄기가 언제 발명됐는지 자세히 알려주시겠어요?
     3.40s  <ret> 발화 (turn1 첫 프레임)
     3.55s  agent 발화 시작: <ret> 음, 대략 천사백사십 년쯤 유럽에 나타났다고 합니다. 정말 혁명적인 시기였어요.
     3.69s  user  발화 끝
     5.40s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.00s]: The printing press was invented in Europe around 1440.
     9.80s  agent 발화 끝
