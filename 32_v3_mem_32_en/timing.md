# v3_mem_32_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi 내부 보유 — A 프로필=프롬프트 내재/no-RAG, B 메모리=RAG <ret>):
#   A. 프로필: Name: Manon · Location: Berlin, Germany · Nationality: German · Gender: female · Age: late 30s · TZ: Europe/Berlin (CET, UTC+1) · Currency: EUR (€)
#   B. 저장 메모리:
#      [2026-07-25] User is planning a trip to Kyoto in March.
#      [2026-06-14] User is into rock climbing.
#      [2026-03-10] User's favorite cuisine is sushi.
#      [2026-02-26] User is gluten-free.
#   B. 과거 대화 요약:
#      [2026-07-12] Booked a dentist appointment — asked for an early-morning slot; prefers Dr. Han
#      [2026-01-20] Planning a birthday dinner — party of six; looking for outdoor seating


     0.00s  agent 발화 시작: Hi Manon, I’m Thunalo, and I’m delighted to be speaking with
     3.17s  user  발화 시작: Yeah.
     3.80s  user  발화 끝
     4.29s  user  발화 시작: I was just thinking about that trip I wanted to plan…
     4.30s  agent 발화 끝
     7.03s  <ret> 발화 (turn3 첫 프레임)
     7.10s  agent 발화 시작: <ret> Ah, recalling travel plans is a wonderful way to spark
     7.25s  user  발화 끝
     9.03s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.98s]: [2026-07-25] User is planning a trip to Kyoto in March.
    16.51s  agent 발화 끝
    16.93s  user  발화 시작: Right. What’s the time difference between Berlin and Kyoto, 
    21.11s  <ret> 발화 (turn5 첫 프레임)
    21.18s  agent 발화 시작: <ret> Understanding time differences is key to smooth travel
    21.18s  user  발화 끝
    22.46s  ⚡SPAN 주입 [d'=1.36s / d_lead=3.71s]: (tool result) Time difference: Berlin is 8 hours behind Kyoto. / Curre
    29.39s  user  발화 시작: Mm-hmm.
    30.03s  user  발화 끝
    32.60s  agent 발화 시작: That can be tricky to adjust to, but it's part of the advent
    32.74s  agent 발화 끝
    36.44s  agent 발화 끝
    36.77s  user  발화 시작: Yeah, it is. I also really love sushi, by the way.
    40.16s  agent 발화 시작: [laugh] That’s lovely to hear, Manon— enjoying delicious foo
    40.20s  user  발화 끝
    46.37s  agent 발화 끝
