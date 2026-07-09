# v3_to_ot_12_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi 내부 보유 — A 프로필=프롬프트 내재/no-RAG, B 메모리=RAG <ret>):
#   A. 프로필: Name: Rowan · Location: Toronto, Canada · Nationality: Canadian · Gender: non-binary · Age: early 30s · TZ: America/Toronto (EST, UTC-5) · Currency: CAD ($)
#   B. 저장 메모리:
#      [2026-07-12] User is allergic to penicillin.
#      [2026-06-09] User works as a physical therapist.
#      [2026-04-03] User is planning a trip to Switzerland in October.
#      [2026-03-14] User's favorite cuisine is Thai.
#   B. 과거 대화 요약:
#      [2026-07-18] Booked a dentist appointment — asked for an early-morning slot; prefers Dr. Han
#      [2026-03-05] Planning a birthday dinner — party of six; looking for outdoor seating

# EXAMINER(FDB-v2) 단계: S1 I was just wondering, who actually | S2 Wow, Eddie Van Halen? I didn’t kno | S3 Hey, did you remember to take the  | S4 Sorry about that. Was he asked to 

     0.00s  user  발화 시작: I was just wondering, who actually played the guitar solo on
     8.62s  <ret> 발화 (turn1 첫 프레임)
     8.85s  agent 발화 시작: <ret> That’s a great question, and a really iconic solo. Edd
     9.09s  user  발화 끝
    10.46s  ⚡SPAN 주입 [d'=1.84s / d_lead=3.34s]: Eddie Van Halen performed the guitar solo on Michael Jackson’s “Beat I
    11.87s  user  발화 시작: Okay.
    12.59s  user  발화 끝
    16.51s  user  발화 시작: Wow, Eddie Van Halen? I didn’t know that! That’s amazing—
    16.64s  agent 발화 끝
    21.76s  agent 발화 시작: It certainly is a testament to his skill, blending rock and 
    21.80s  user  발화 끝
    27.09s  agent 발화 끝
    28.36s  user  발화 시작: Hey, did you remember to take the trash out?
    30.91s  user  발화 시작: Sorry about that. Was he asked to do it, or did he just offe
    30.99s  user  발화 끝
    35.69s  <ret> 발화 (turn7 첫 프레임)
    35.90s  agent 발화 시작: <ret> It’s interesting how that collaboration came about. Mi
    36.05s  user  발화 끝
    36.89s  ⚡SPAN 주입 [d'=1.20s / d_lead=2.84s]: Michael Jackson invited Van Halen to contribute a guitar solo to "Beat
    46.06s  agent 발화 끝
