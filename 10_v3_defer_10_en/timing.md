# v3_defer_10_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
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


     0.00s  user  발화 시작: Find pictures related to my holiday in France last year, but
     5.02s  <ret> 발화 (turn1 첫 프레임)
     5.04s  user  발화 끝
     5.10s  agent 발화 시작: <ret> Okay, locating photos from your France trip… I found s
     6.46s  ⚡SPAN 주입 [d'=1.44s / d_lead=3.38s]: (tool result) Seven files were found: "Paris_Eiffel_Tower.jpg", "Nice_
    10.80s  user  발화 시작: Mhm.
    11.34s  user  발화 끝
    14.16s  user  발화 시작: Oh, actually, can you just send me the one of the Eiffel Tow
    14.29s  agent 발화 끝
    17.54s  <ret> 발화 (turn4 첫 프레임)
    17.86s  agent 발화 시작: <ret> Certainly, sending that photo to you now… The Eiffel T
    18.05s  user  발화 끝
    18.50s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.47s]: (tool result) File "Paris_Eiffel_Tower.jpg" was sent to your registere
    24.20s  agent 발화 끝
