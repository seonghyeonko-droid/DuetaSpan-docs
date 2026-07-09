# v3_rags_29_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi 내부 보유 — A 프로필=프롬프트 내재/no-RAG, B 메모리=RAG <ret>):
#   A. 프로필: Name: Hannah · Location: Toronto, Canada · Nationality: Canadian · Gender: female · Age: late 30s · TZ: America/Toronto (EST, UTC-5) · Currency: CAD ($)
#   B. 저장 메모리:
#      [2026-07-09] User is allergic to cat dander.
#      [2026-05-10] User has a tabby cat named Luna.
#      [2026-04-16] User is planning a trip to Kyoto in March.
#      [2026-03-08] User's home address is 343 Cedar Lane.
#      [2026-03-03] User is vegetarian.
#   B. 과거 대화 요약:
#      [2026-02-11] Comparing gym memberships — wants a pool; close to the office


     0.00s  user  발화 시작: 현재 NBA에서 뛰는 선수 중에 가장 나이가 많은 선수가 누구예요?
     4.71s  <ret> 발화 (turn1 첫 프레임)
     4.86s  user  발화 끝
     4.86s  agent 발화 시작: <ret> 음, 빈스 카터 선수가 현재 NBA에서 가장 나이가 많으신데요, 마흔한 살이세요.
     6.71s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.00s]: Vince Carter is the oldest player in the NBA, currently aged forty-one
     9.86s  agent 발화 끝
