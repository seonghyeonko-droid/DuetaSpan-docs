# v3_rag_27_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi 내부 보유 — A 프로필=프롬프트 내재/no-RAG, B 메모리=RAG <ret>):
#   A. 프로필: Name: Kim · Location: Paris, France · Nationality: French · Gender: non-binary · Age: early 20s · TZ: Europe/Paris (CET, UTC+1) · Currency: EUR (€)
#   B. 저장 메모리:
#      [2026-07-25] User's favorite cuisine is Italian.
#      [2026-06-05] User is into rock climbing.
#      [2026-04-20] User is allergic to shellfish.
#      [2026-04-19] User's home address is 411 Maple Drive.
#      [2026-02-28] User is vegetarian.
#      [2026-01-23] User works as a architect.
#   B. 과거 대화 요약:
#      [2026-07-17] Researching a used car — comparing hybrid models; wants under 30k miles

# EXAMINER(FDB-v2) 단계: S1 I’m trying to find out a bit about | S2 Well, when was he born, specifical | S3 Nineteen seventy… that’s earlier t | S4 But was he a ruler or something? I

     0.00s  user  발화 시작: I’m trying to find out a bit about Lux Aurunque, but I’m get
     5.56s  user  발화 끝
     5.70s  agent 발화 시작: It’s understandable to feel overwhelmed with a new topic; le
     8.19s  user  발화 시작: Yeah, yeah.
     9.80s  user  발화 끝
    10.33s  agent 발화 끝
    10.38s  user  발화 시작: Well, when was he born, specifically? I need to know the yea
    13.76s  <ret> 발화 (turn4 첫 프레임)
    14.16s  agent 발화 시작: <ret> That’s a really good starting point— He was born in ni
    14.21s  user  발화 끝
    14.88s  ⚡SPAN 주입 [d'=1.12s / d_lead=1.80s]: Lux Aurunque was born in nineteen seventy.
    16.17s  user  발화 시작: Uh-huh.
    16.71s  user  발화 끝
    17.77s  agent 발화 끝
    18.09s  user  발화 시작: Nineteen seventy… that’s earlier than I expected.
    21.33s  user  발화 끝
    21.33s  agent 발화 시작: It can be surprising when historical figures lived at differ
    25.74s  <ret> 발화 (turn8 첫 프레임)
    25.81s  agent 발화 시작: <ret> He was a prominent figure in the creation of bronze sc
    25.82s  agent 발화 끝
    26.78s  ⚡SPAN 주입 [d'=1.04s / d_lead=3.98s]: Lux Aurunque was a prominent figure in the creation of the bronze scul
    27.82s  user  발화 시작: Yeah, totally.
    29.15s  user  발화 끝
    29.78s  agent 발화 끝
    30.71s  user  발화 시작: But was he a ruler or something? I’ve seen that mentioned—
    34.50s  <ret> 발화 (turn11 첫 프레임)
    34.54s  user  발화 끝
    34.58s  agent 발화 시작: <ret> That’s a great question, and a common point of confusi
    36.26s  ⚡SPAN 주입 [d'=1.76s / d_lead=3.38s]: Lux Aurunque was a nobleman and served as a trade representative for t
    37.83s  agent 발화 시작: He served as a trade representative for the region.
    37.95s  agent 발화 끝
    40.27s  agent 발화 끝
