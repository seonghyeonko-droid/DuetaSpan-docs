# v3_rag_26_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi 내부 보유 — A 프로필=프롬프트 내재/no-RAG, B 메모리=RAG <ret>):
#   A. 프로필: Name: Emilia · Location: San Francisco, United States · Nationality: American · Gender: female · Age: late 30s · TZ: America/Los_Angeles (PST, UTC-8) · Currency: USD ($)
#   B. 저장 메모리:
#      [2026-04-23] User's home address is 249 Cedar Lane.
#      [2026-03-15] User has a Beagle named Rusty.
#      [2026-02-13] User prefers an aisle seat when traveling.
#      [2026-01-11] User works as a accountant.
#   B. 과거 대화 요약:
#      [2026-08-04] Researching a used car — comparing hybrid models; wants under 30k miles
#      [2026-05-28] Setting up a home network — asked about mesh routers; coverage for a 3-story house

# EXAMINER(FDB-v2) 단계: S1 I’m trying to remember a flag… it  | S2 Oh, yeah! Germany, that’s it. I we | S3 Hmm, interesting. Was it always li | S4 Wow, I did not know that. That’s a

     0.00s  user  발화 시작: I’m trying to remember a flag… it had black, red, and yellow
     4.86s  user  발화 끝
     4.87s  agent 발화 시작: That’s a tricky one when you only remember the colors! Many 
    10.11s  <ret> 발화 (turn2 첫 프레임)
    10.35s  agent 발화 시작: <ret> Let’s see if we can pinpoint it… The flag you’re think
    10.47s  agent 발화 끝
    12.03s  ⚡SPAN 주입 [d'=1.92s / d_lead=1.93s]: The flag of Germany features horizontal bands of black, red, and gold.
    16.97s  agent 발화 끝
    19.08s  user  발화 시작: Oh, yeah! Germany, that’s it. I went there once, it was so c
    24.41s  user  발화 끝
    24.81s  agent 발화 시작: Travel can be wonderfully overwhelming, can’t it? It’s great
    29.07s  <ret> 발화 (turn5 첫 프레임)
    29.38s  agent 발화 시작: <ret> Thinking about flags makes me wonder… The first versio
    29.53s  agent 발화 끝
    30.67s  ⚡SPAN 주입 [d'=1.60s / d_lead=1.93s]: The German flag was first adopted in 1848 during the revolutions of th
    34.48s  user  발화 시작: Yeah.
    34.97s  user  발화 끝
    36.80s  agent 발화 끝
    37.77s  user  발화 시작: Hmm, interesting. Was it always like that, though?
    41.45s  agent 발화 시작: Not necessarily. Flags evolve over time, reflecting a nation
    41.47s  user  발화 끝
    45.78s  <ret> 발화 (turn9 첫 프레임)
    46.10s  agent 발화 시작: <ret> Let’s check the historical details… The colors black, 
    46.22s  agent 발화 끝
    47.06s  ⚡SPAN 주입 [d'=1.28s / d_lead=1.38s]: The colors of the German flag originate from the uniforms of the Lützo
    52.73s  agent 발화 끝
    52.82s  user  발화 시작: Wow, I did not know that. That’s a good story.
    56.33s  user  발화 끝
