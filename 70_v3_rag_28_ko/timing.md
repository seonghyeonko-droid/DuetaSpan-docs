# v3_rag_28_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi 내부 보유 — A 프로필=프롬프트 내재/no-RAG, B 메모리=RAG <ret>):
#   A. 프로필: Name: 정슬 · Location: Busan, South Korea · Nationality: Korean · Gender: female · Age: 40s · TZ: Asia/Seoul (KST, UTC+9) · Currency: KRW (₩)
#   B. 저장 메모리:
#      [2026-07-02] User is allergic to peanuts.
#      [2026-05-20] User works as a accountant.
#      [2026-03-04] User prefers a window seat when traveling.
#      [2026-02-20] User is pescatarian.
#      [2026-02-07] User is planning a trip to Switzerland in March.
#      [2026-01-03] User's home address is 960 Pine Court.
#   B. 과거 대화 요약:
#      [2026-07-16] Researching a used car — comparing hybrid models; wants under 30k miles
#      [2026-02-04] Setting up a home network — asked about mesh routers; coverage for a 3-story house


     0.00s  user  발화 시작: 그 부처들에 대해 읽고 있었는데… 퇴역 군인 부는 언제 시작됐어?
     4.35s  <ret> 발화 (turn1 첫 프레임)
     4.66s  agent 발화 시작: <ret> 좋은 질문이에요, 설립하는 데 얼마나 걸리는지 생각해보면요… 퇴역 군인 부는 천구백삼십 년 7월 
     4.82s  user  발화 끝
     6.35s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.23s]: The United States Department of Veterans Affairs was created on July 2
    12.44s  agent 발화 끝
    12.49s  user  발화 시작: 1930년이라고? 좀… 비교적 최근 같지 않아? 더 오래됐을 줄 알았는데.
    18.50s  agent 발화 시작: 많은 분들이 예상하시는 것보다는 조금 늦은 편이긴 합니다, 군 복무 역사를 생각해보면요.
    18.60s  user  발화 끝
    24.21s  user  발화 시작: 근데 남북 전쟁이나— 아니면 제1차 세계 대전 이후에도 퇴역 군인들을 위한 서비스가 있었잖아?
    24.30s  agent 발화 끝
    30.09s  <ret> 발화 (turn5 첫 프레임)
    30.40s  agent 발화 시작: <ret> 네, 이전에도 서비스는 있었어요, 하지만 하나의 부서 안에서 이루어진 건 아니었는데요… 천팔백육십
    30.55s  user  발화 끝
    31.05s  ⚡SPAN 주입 [d'=0.96s / d_lead=5.83s]: Prior to 1930, veteran benefits were administered by the Bureau of Pen
    42.65s  agent 발화 끝
