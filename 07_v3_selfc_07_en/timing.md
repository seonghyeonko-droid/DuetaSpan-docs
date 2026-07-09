# v3_selfc_07_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi 내부 보유 — A 프로필=프롬프트 내재/no-RAG, B 메모리=RAG <ret>):
#   A. 프로필: Name: Rennora · Location: Tokyo, Japan · Nationality: Japanese · Gender: female · Age: 50s · TZ: Asia/Tokyo (JST, UTC+9) · Currency: JPY (¥)
#   B. 저장 메모리:
#      [2026-05-17] User is planning a trip to Switzerland in March.
#      [2026-03-25] User is allergic to penicillin.
#      [2026-02-05] User has a Siamese cat named Bella.
#      [2026-01-17] User prefers an aisle seat when traveling.
#   B. 과거 대화 요약:
#      [2026-08-02] Booked a dentist appointment — asked for an early-morning slot; prefers Dr. Han
#      [2026-07-09] Planning a birthday dinner — party of six; looking for outdoor seating
#      [2026-04-23] Setting up a home network — asked about mesh routers; coverage for a 3-story house

# EXAMINER(FDB-v2) 단계: S1 Set up a viewing for me at The Gra | S2 Yes, can you tell me how far it is | S3 Are there any coffee shops within  | S4 That sounds nice. [happy]

     0.00s  user  발화 시작: Set up a viewing for me at The Grandview Lofts on June fifte
     3.84s  <ret> 발화 (turn1 첫 프레임)
     4.07s  agent 발화 시작: <ret> Absolutely, let’s get that scheduled for you. I’ve boo
     4.35s  user  발화 끝
     4.80s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.13s]: (tool result) A viewing at The Grandview Lofts is scheduled for June f
    11.67s  agent 발화 끝
    11.98s  user  발화 시작: Oh, actually— June sixteenth would work better.
    15.14s  <ret> 발화 (turn3 첫 프레임)
    15.30s  agent 발화 시작: <ret> No problem at all, we can easily adjust that. Wonderfu
    15.40s  user  발화 끝
    16.58s  ⚡SPAN 주입 [d'=1.44s / d_lead=3.41s]: (tool result) A viewing at The Grandview Lofts is scheduled for June s
    20.09s  user  발화 시작: Right.
    20.86s  user  발화 끝
    24.33s  agent 발화 시작: Is there anything else I can help you with regarding this pr
    24.39s  agent 발화 끝
    27.66s  agent 발화 끝
    27.76s  user  발화 시작: Yes, can you tell me how far it is from City Hall?
    31.41s  <ret> 발화 (turn7 첫 프레임)
    31.48s  agent 발화 시작: <ret> Certainly, let me quickly check the distance for you. 
    31.59s  user  발화 끝
    32.53s  ⚡SPAN 주입 [d'=1.12s / d_lead=2.78s]: (tool result) The distance from The Grandview Lofts to City Hall is 3.
    35.04s  user  발화 시작: Right.
    35.81s  user  발화 끝
    37.88s  user  발화 시작: And what about parking around City Hall? Is it difficult?
    37.97s  agent 발화 끝
    41.99s  user  발화 끝
    42.19s  agent 발화 시작: Parking downtown can be tricky, but there are several garage
    46.21s  agent 발화 끝
    46.38s  user  발화 시작: Are there any coffee shops within walking distance of The Gr
    51.46s  <ret> 발화 (turn12 첫 프레임)
    51.56s  user  발화 끝
    51.86s  agent 발화 시작: <ret> That's a great question, finding a good coffee spot is
    53.46s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.65s]: (tool result) Three coffee shops are within a half-mile of The Grandvi
    60.11s  user  발화 시작: Hmm, Brew & Bites…do they have outdoor seating?
    60.48s  agent 발화 끝
    64.36s  <ret> 발화 (turn14 첫 프레임)
    64.52s  agent 발화 시작: <ret> Let's see if Brew & Bites offers outdoor seating. Yes,
    64.73s  user  발화 끝
    65.96s  ⚡SPAN 주입 [d'=1.60s / d_lead=3.07s]: (tool result) Brew & Bites has a patio with seating for twelve.
    71.33s  agent 발화 끝
    71.55s  user  발화 시작: That sounds nice. [happy]
    73.08s  agent 발화 시작: It’s wonderful to hear you’re finding some appealing options
    73.25s  user  발화 끝
    76.48s  user  발화 시작: Uh-huh.
    76.98s  user  발화 끝
    78.92s  agent 발화 끝
    79.42s  user  발화 시작: I think I’m ready to confirm the viewing for June sixteenth.
    83.50s  agent 발화 시작: Excellent! I’m glad you’re feeling good about it. I'm here i
    83.53s  user  발화 끝
    87.66s  agent 발화 끝
