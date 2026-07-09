# v3_fake__13_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# EXAMINER(FDB-v2) 단계: S1 I was wondering, when is Demi Lova | S2 Oh, July! So the single came out b | S3 What about her other albums? Were  | S4 I suppose so. I’m trying to get a 

     0.00s  user  발화 시작: I was wondering, when is Demi Lovato’s new album coming out?
     6.45s  <ret> 발화 (turn1 첫 프레임)
     6.58s  user  발화 끝
     6.68s  agent 발화 시작: <ret> It’s exciting to anticipate new music, isn’t it?
     8.45s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.05s]: Demi Lovato’s fifth studio album, *Confident*, was released in October
     9.54s  agent 발화 시작: Demi Lovato’s new album, *Confident*, came out in October of
     9.74s  agent 발화 끝
    14.63s  user  발화 시작: October… okay, good to know. Is that the one with "Cool for 
    14.66s  agent 발화 끝
    19.64s  <ret> 발화 (turn4 첫 프레임)
    20.03s  agent 발화 시작: <ret> That album certainly marked a shift in her sound, didn
    20.24s  user  발화 끝
    20.84s  ⚡SPAN 주입 [d'=1.20s / d_lead=3.65s]: "Cool for the Summer" was released as the lead single from *Confident*
    23.58s  agent 발화 시작: Yes, “Cool for the Summer” was the lead single from *Confide
    23.67s  agent 발화 끝
    30.34s  agent 발화 끝
    30.79s  user  발화 시작: Oh, July! So the single came out before the album. That make
    35.63s  agent 발화 시작: It’s wonderful when an artist’s vision comes together so bea
    35.79s  user  발화 끝
    38.82s  user  발화 시작: What about her other albums? Were those also released in the
    39.51s  agent 발화 끝
    42.31s  <ret> 발화 (turn9 첫 프레임)
    42.54s  agent 발화 시작: <ret> Well, that's a lovely question; let’s explore her disc
    42.75s  user  발화 끝
    44.31s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.14s]: Demi Lovato’s debut album, *Don’t Forget*, was released on September 2
    47.55s  agent 발화 시작: Her debut album, *Don’t Forget*, was released on September t
    47.68s  agent 발화 끝
    49.64s  user  발화 시작: Mm-hmm.
    50.04s  user  발화 끝
    52.63s  <ret> 발화 (turn12 첫 프레임)
    53.03s  agent 발화 시작: <ret> It's interesting how artists often have patterns in th
    53.19s  agent 발화 끝
    54.63s  ⚡SPAN 주입(IRRELEVANT) [d'=2.00s / d_lead=4.58s]: The giant squid is a deep-sea dweller and one of the largest invertebr
    57.39s  agent 발화 시작: Sometimes it’s a conscious choice, and other times it just h
    57.60s  agent 발화 끝
    62.34s  agent 발화 끝
    62.45s  user  발화 시작: So 2008 and 2015… a pretty big gap between the first and fif
    69.02s  user  발화 끝
    69.28s  agent 발화 시작: Growth as an artist often requires that kind of space and ex
    75.10s  agent 발화 끝
    75.12s  user  발화 시작: I suppose so. I’m trying to get a sense of how prolific she 
    79.80s  user  발화 끝
    79.99s  agent 발화 시작: It's admirable that you're taking the time to appreciate her
    84.34s  agent 발화 끝
