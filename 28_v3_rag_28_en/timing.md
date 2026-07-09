# v3_rag_28_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
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


     0.00s  user  발화 시작: I was just reading about government departments… when did th
     5.59s  <ret> 발화 (turn1 첫 프레임)
     5.91s  agent 발화 시작: <ret> That's a good question, thinking about how long things
     6.02s  user  발화 끝
     6.63s  ⚡SPAN 주입 [d'=1.04s / d_lead=4.47s]: The United States Department of Veterans Affairs was created on July 2
    14.85s  agent 발화 끝
    15.27s  user  발화 시작: Nineteen thirty? That seems… relatively recent, doesn’t it? 
    21.71s  user  발화 끝
    22.12s  agent 발화 시작: It is a bit later than many assume, given the history of mil
    26.40s  user  발화 시작: But weren’t there veteran services *before* then? Like, some
    26.42s  agent 발화 끝
    33.32s  <ret> 발화 (turn5 첫 프레임)
    33.49s  user  발화 끝
    33.72s  agent 발화 시작: <ret> Absolutely, services existed previously, although not 
    35.32s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.25s]: Prior to 1930, veteran benefits were administered by the Bureau of Pen
    44.76s  agent 발화 끝
