# v3_rags_31_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi 내부 보유 — A 프로필=프롬프트 내재/no-RAG, B 메모리=RAG <ret>):
#   A. 프로필: Name: Noa · Location: New York, United States · Nationality: American · Gender: non-binary · Age: 40s · TZ: America/New_York (EST, UTC-5) · Currency: USD ($)
#   B. 저장 메모리:
#      [2026-05-08] User prefers a window seat when traveling.
#      [2026-04-16] User's home address is 808 Elm Street.
#      [2026-04-14] User's favorite cuisine is Italian.
#      [2026-01-24] User is allergic to peanuts.
#   B. 과거 대화 요약:
#      [2026-07-11] Comparing gym memberships — wants a pool; close to the office
#      [2026-05-06] Apartment hunting downtown — wanted a pet-friendly building; budget for 2 bedrooms
#      [2026-02-16] Booked a dentist appointment — asked for an early-morning slot; prefers Dr. Han


     0.00s  user  발화 시작: 데어데블 시즌 3은 언제 나왔어요?
     2.00s  <ret> 발화 (turn1 첫 프레임)
     2.25s  agent 발화 시작: <ret> 네, 다레데블 시즌 3는 이천십팔 년 10월 26일에 처음 공개됐습니다.
     2.40s  user  발화 끝
     3.04s  ⚡SPAN 주입 [d'=1.04s / d_lead=4.62s]: Daredevil season three was released on October 26, 2018.
     7.38s  agent 발화 끝
