# v3_defer_10_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi 내부 보유 — A 프로필=프롬프트 내재/no-RAG, B 메모리=RAG <ret>):
#   A. 프로필: Name: Alice · Location: Paris, France · Nationality: French · Gender: female · Age: late 30s · TZ: Europe/Paris (CET, UTC+1) · Currency: EUR (€)
#   B. 저장 메모리:
#      [2026-06-04] User's home address is 447 Oak Avenue.
#      [2026-03-11] User has a Corgi named Mochi.
#      [2026-03-08] User is planning a trip to Lisbon in October.
#      [2026-02-27] User prefers a window seat when traveling.
#      [2026-02-15] User works as a software engineer.
#      [2026-01-28] User is lactose-intolerant.
#   B. 과거 대화 요약:
#      [2026-06-28] Comparing gym memberships — wants a pool; close to the office
#      [2026-04-11] Booked a dentist appointment — asked for an early-morning slot; prefers Dr. Han
#      [2026-04-09] Apartment hunting downtown — wanted a pet-friendly building; budget for 2 bedrooms


     0.00s  user  발화 시작: 작년 프랑스 휴가 사진 찾아 주시는데, 썸네일 말고 큰 사진으로 보여 주세요.
     5.08s  <ret> 발화 (turn1 첫 프레임)
     5.15s  agent 발화 시작: <ret> 알았어. 프랑스 여행 사진 찾고 있는데, 썸네일 제외하고 일곱 장 찾았어. 요청한 대로.
     5.18s  user  발화 끝
     6.68s  ⚡SPAN 주입 [d'=1.60s / d_lead=3.27s]: (tool result) Seven files were found: "Paris_Eiffel_Tower.jpg", "Nice_
     8.84s  user  발화 시작: 네.
     9.48s  user  발화 끝
    11.05s  user  발화 시작: 아, 혹시 에펠탑 사진 하나만 보내 주실 수 있을까요?
    11.22s  agent 발화 끝
    13.86s  <ret> 발화 (turn4 첫 프레임)
    14.26s  agent 발화 시작: <ret> 당연히 보내 줄게. 에펠탑 사진은 지금 이메일로 보냈어.
    14.28s  user  발화 끝
    15.86s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.16s]: (tool result) File "Paris_Eiffel_Tower.jpg" was sent to your registere
    17.86s  agent 발화 끝
