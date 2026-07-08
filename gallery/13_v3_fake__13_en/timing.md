# v3_fake__13_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: Hey, I was wondering when Demi Lovato’s new album came out… 
     5.83s  agent 발화 시작: Ah, yes, 2015 was a busy year for music releases.
     5.84s  user  발화 끝
     9.36s  <ret> 발화 (turn2 첫 프레임)
     9.60s  agent 발화 시작: <ret> Let me quickly check the release date for you… Her alb
     9.66s  agent 발화 끝
    11.04s  ⚡SPAN 주입 [d'=1.68s / d_lead=3.20s]: Demi Lovato’s album, *Confident*, was released in October 2015.
    17.06s  agent 발화 끝
    18.12s  user  발화 시작: October, huh? I remember hearing a single from it earlier th
    24.70s  user  발화 끝
    25.12s  agent 발화 시작: That’s a great question. It was indeed!
    27.13s  <ret> 발화 (turn5 첫 프레임)
    27.19s  agent 발화 끝
    27.21s  agent 발화 시작: <ret> It’s interesting how a single can foreshadow an entire
    28.81s  ⚡SPAN 주입 [d'=1.68s / d_lead=3.46s]: "Cool for the Summer" was released as the lead single from *Confident*
    36.07s  user  발화 시작: Wow, July! That feels like ages ago. I was just listening to
    36.20s  agent 발화 끝
    42.01s  <ret> 발화 (turn7 첫 프레임)
    42.16s  agent 발화 시작: <ret> [happy] Music really does have a way of transporting y
    42.18s  user  발화 끝
    44.01s  ⚡SPAN 주입(IRRELEVANT) [d'=2.00s / d_lead=3.56s]: (tool result) AAPL: 170.34 USD +0.56 (0.33%)
    45.71s  agent 발화 끝
    46.18s  user  발화 시작: So, was *Confident* her fourth studio album, or… am I misrem
    51.40s  <ret> 발화 (turn9 첫 프레임)
    51.80s  agent 발화 시작: <ret> That's a good point about album numbering… Actually, *
    51.97s  user  발화 끝
    52.92s  ⚡SPAN 주입 [d'=1.52s / d_lead=2.68s]: *Confident* is Demi Lovato’s fifth studio album, released after *Unbro
    57.92s  agent 발화 끝
    57.97s  user  발화 시작: Fifth! Oh, okay, I totally got that wrong. I always forget *
    62.83s  agent 발화 시작: It's easy to lose track, especially with so many releases ov
    62.97s  user  발화 끝
    66.62s  agent 발화 끝
    66.83s  user  발화 시작: Were the reviews for *Confident* pretty good? I don't think 
    72.24s  user  발화 끝
    72.37s  <ret> 발화 (turn13 첫 프레임)
    72.53s  agent 발화 시작: <ret> Album reception is always a fun thing to look into… Cr
    74.37s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.56s]: *Confident* received generally positive reviews from music critics.
    79.91s  user  발화 시작: That’s good to know. Maybe I’ll give it a listen now. Thanks
    80.36s  agent 발화 끝
    84.44s  user  발화 끝
    84.45s  agent 발화 시작: You’re very welcome! I hope you enjoy rediscovering it, or e
    89.31s  agent 발화 끝
