# v3_rag_28_cs — 전 이벤트 시간순 타임라인 (L=agent/R=user)
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


     0.00s  user  발화 시작: 정부 부처에 대해 읽다가… 참전용사부 어떻게 시작됐는지 궁금해.
     4.67s  <ret> 발화 (turn1 첫 프레임)
     5.06s  agent 발화 시작: <ret> 좋은 질문이에요, 뭔가 세우는 데 시간이 얼마나 걸리는지 생각해보면요… 참전용사부는 천구백삼십 년
     5.14s  user  발화 끝
     6.67s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.64s]: The United States Department of Veterans Affairs was created on July 2
    14.61s  agent 발화 끝
    14.81s  user  발화 시작: 1930년? 좀… 비교적 최근 같지 않아? 더 오래됐을 줄 알았는데.
    19.86s  user  발화 끝
    19.88s  agent 발화 시작: 역사적으로 군 복무를 생각해 보면, 많은 분들이 예상하는 것보다 조금 늦은 편입니다.
    26.50s  agent 발화 끝
    27.15s  user  발화 시작: 근데 그전에 참전용사들을 위한 서비스는 없었어? 예를 들어 남북전쟁이나… 1차 세계대전 이후 같은 거 말이야
    34.05s  <ret> 발화 (turn5 첫 프레임)
    34.13s  agent 발화 시작: <ret> 네, 물론 이전에도 서비스는 있었지만, 단일 부처 내에서는 아니었어요… 천팔백육십일 년 이전에 참
    34.19s  user  발화 끝
    36.05s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.67s]: Prior to 1930, veteran benefits were administered by the Bureau of Pen
    46.15s  agent 발화 끝
