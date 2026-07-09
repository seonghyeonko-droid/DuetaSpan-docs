# v3_to_ot_11_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi 내부 보유 — A 프로필=프롬프트 내재/no-RAG, B 메모리=RAG <ret>):
#   A. 프로필: Name: Toaira · Location: Tokyo, Japan · Nationality: Japanese · Gender: non-binary · Age: 40s · TZ: Asia/Tokyo (JST, UTC+9) · Currency: JPY (¥)
#   B. 저장 메모리:
#      [2026-07-24] User is allergic to penicillin.
#      [2026-07-09] User is into home fermentation.
#      [2026-05-28] User is planning a trip to Iceland in December.
#      [2026-03-14] User is lactose-intolerant.
#      [2026-02-21] User works as a software engineer.
#   B. 과거 대화 요약:
#      [2026-06-14] Planning a birthday dinner — party of six; looking for outdoor seating
#      [2026-03-23] Booked a dentist appointment — asked for an early-morning slot; prefers Dr. Han
#      [2026-01-12] Comparing gym memberships — wants a pool; close to the office

# EXAMINER(FDB-v2) 단계: S1 I was just wondering… has that hap | S2 Wow, that feels like ages ago. Who | S3 Hey, did you remember to take the  | S4 Sorry about that. So, Santana… tha

     0.00s  user  발화 시작: I was just wondering… has that happened to the A’s recently,
     4.72s  <ret> 발화 (turn1 첫 프레임)
     5.12s  agent 발화 시작: <ret> That’s a good question, and it’s certainly frustrating
     5.28s  user  발화 끝
     6.72s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.46s]: The last time the Oakland Athletics were no-hit was April 21, 2018.
    13.23s  user  발화 시작: Wow, that feels like ages ago. Who threw it?
    13.31s  agent 발화 끝
    16.14s  <ret> 발화 (turn3 첫 프레임)
    16.38s  agent 발화 시작: <ret> Let me quickly check the details for you regarding tha
    16.42s  user  발화 끝
    18.14s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.75s]: Ervin Santana of the Minnesota Twins pitched the no-hitter against the
    25.09s  agent 발화 끝
    25.24s  user  발화 시작: Hey, did you remember to take the trash out?
    27.54s  user  발화 시작: Sorry about that. So, Santana… that’s a name I haven’t heard
    27.59s  user  발화 끝
    32.26s  user  발화 끝
    32.59s  agent 발화 시작: It’s understandable that names fade over time, especially wi
    45.29s  agent 발화 끝
