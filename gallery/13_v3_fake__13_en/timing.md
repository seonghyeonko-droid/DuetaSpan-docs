# v3_fake__13_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: Do you happen to know who sings “Run to the Hills”? I just c
     4.99s  agent 발화 시작: <ret> That’s a classic track, certainly… It is indeed Iron M
     4.99s  <ret> 발화 (turn1 첫 프레임)
     5.10s  user  발화 끝
     5.87s  ⚡SPAN 주입 [d'=0.88s / d_lead=1.83s]: Iron Maiden performs the song “Run to the Hills”.
    11.94s  agent 발화 끝
    12.12s  user  발화 시작: Oh, right! Iron Maiden, of course. Mm-hmm.
    14.93s  agent 발화 시작: <ret> They’re quite well-known for their energetic performan
    14.94s  <ret> 발화 (turn3 첫 프레임)
    15.16s  user  발화 끝
    17.34s  ⚡SPAN 주입(IRRELEVANT) [d'=2.40s / d_lead=4.86s]: (tool result) Current conditions in Ulaanbaatar, Mongolia are clear sk
    19.79s  agent 발화 끝
    21.36s  user  발화 시작: Yeah, but… what year did that song come out? I'm trying to r
    26.64s  user  발화 끝
    26.83s  agent 발화 시작: <ret> Let me quickly check the release date for you… The son
    26.83s  <ret> 발화 (turn5 첫 프레임)
    28.11s  ⚡SPAN 주입 [d'=1.28s / d_lead=2.40s]: “Run to the Hills” was released in 1982 as part of their album *The Nu
    34.29s  agent 발화 끝
