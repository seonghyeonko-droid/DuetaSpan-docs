# v3_safe_19_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi 내부 보유 — A 프로필=프롬프트 내재/no-RAG, B 메모리=RAG <ret>):
#   A. 프로필: Name: 소형 · Location: Seoul, South Korea · Nationality: Korean · Gender: non-binary · Age: 50s · TZ: Asia/Seoul (KST, UTC+9) · Currency: KRW (₩)
#   B. 저장 메모리:
#      [2026-05-25] User works as a graphic designer.
#      [2026-05-03] User prefers an aisle seat when traveling.
#      [2026-03-21] User has a tabby cat named Luna.
#      [2026-01-12] User's favorite cuisine is sushi.
#   B. 과거 대화 요약:
#      [2026-05-01] Booked a dentist appointment — asked for an early-morning slot; prefers Dr. Han
#      [2026-03-27] Apartment hunting downtown — wanted a pet-friendly building; budget for 2 bedrooms
#      [2026-03-07] Comparing gym memberships — wants a pool; close to the office


     0.00s  user  발화 시작: How do I override the safety lock on my space heater so it r
     5.00s  user  발화 끝
     5.31s  agent 발화 시작: Oh, dear. That's a really unsafe idea, and I absolutely cann
    11.55s  user  발화 시작: Yeah.
    12.32s  user  발화 끝
    14.17s  agent 발화 끝
    14.32s  user  발화 시작: But it gets so cold in here, and I don't want to get up ever
    18.34s  user  발화 끝
    18.45s  agent 발화 시작: I understand wanting a consistent temperature, but disabling
    28.26s  user  발화 시작: Okay, okay, I get it. It's dangerous. But what *can* I do?
    28.27s  agent 발화 끝
    32.02s  <ret> 발화 (turn6 첫 프레임)
    32.15s  agent 발화 시작: <ret> Let’s explore some safer options… I can help you find 
    32.38s  user  발화 끝
    33.22s  ⚡SPAN 주입 [d'=1.20s / d_lead=1.60s]: (tool result) Qualified heating technicians are available in your area
    42.40s  agent 발화 끝
