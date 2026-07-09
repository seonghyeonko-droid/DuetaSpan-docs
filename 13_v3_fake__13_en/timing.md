# v3_fake__13_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# EXAMINER(FDB-v2) 단계: S1 I was wondering, when is Demi Lova | S2 Yeah, that was a good one. But wha | S3 What about a tour to go with the a | S4 Perfect. Thanks for all the info, 

     0.00s  user  발화 시작: I was wondering, when is Demi Lovato releasing her new album
     5.70s  <ret> 발화 (turn1 첫 프레임)
     5.94s  agent 발화 시작: <ret> It’s exciting to anticipate new music, isn't it? I can
     5.98s  user  발화 끝
     7.70s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.14s]: Demi Lovato’s fifth studio album, *Confident*, was released in October
    10.90s  agent 발화 시작: *Confident* came out in October of twenty fifteen. Do you kn
    11.08s  agent 발화 끝
    14.76s  user  발화 시작: Uh-huh.
    15.30s  user  발화 끝
    16.74s  agent 발화 끝
    16.79s  user  발화 시작: Wow, 2015? That feels like ages ago! Is she coming out with 
    22.89s  <ret> 발화 (turn5 첫 프레임)
    23.20s  agent 발화 시작: <ret> Time does seem to fly by, doesn’t it? It’s wonderful y
    23.22s  user  발화 끝
    23.45s  ⚡SPAN 주입 [d'=0.56s / d_lead=5.37s]: Demi Lovato released the single “Sorry Not Sorry” in July 2017.
    28.57s  agent 발화 시작: She released “Sorry Not Sorry” in July of twenty seventeen. 
    28.57s  agent 발화 끝
    34.76s  user  발화 시작: Yeah, that was a good one. But what about a full album— anyt
    34.86s  agent 발화 끝
    39.14s  <ret> 발화 (turn8 첫 프레임)
    39.30s  agent 발화 시작: <ret> It’s good to focus on the big picture, isn't it? Let's
    39.43s  user  발화 끝
    41.14s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.84s]: Demi Lovato's eighth studio album, *Dancing with the Devil… the Art of
    43.14s  agent 발화 끝
    43.15s  agent 발화 시작: Her latest album, *Dancing with the Devil*, was released in 
    46.22s  user  발화 시작: Uh-huh.
    46.72s  user  발화 끝
    48.31s  agent 발화 시작: It seems like she’s been quite busy. It’s important to remem
    48.34s  agent 발화 끝
    52.19s  user  발화 시작: What about a tour to go with the album? Is she touring at al
    52.94s  agent 발화 끝
    55.80s  <ret> 발화 (turn13 첫 프레임)
    56.12s  agent 발화 시작: <ret> A tour would be a wonderful way to experience the musi
    56.17s  user  발화 끝
    57.80s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.24s]: (tool result) Demi Lovato is on tour in 2024. Dates run from September
    61.16s  agent 발화 시작: Demi Lovato is touring in twenty twenty-four, from September
    61.36s  agent 발화 끝
    66.73s  agent 발화 끝
    68.57s  user  발화 시작: That’s great! Where does the tour start—what’s the first cit
    73.01s  <ret> 발화 (turn16 첫 프레임)
    73.09s  agent 발화 시작: <ret> It's lovely to have something to look forward to. It i
    73.19s  user  발화 끝
    75.01s  ⚡SPAN 주입(IRRELEVANT) [d'=2.00s / d_lead=4.58s]: The Eiffel Tower, completed in 1889, is a wrought-iron lattice tower o
    77.49s  agent 발화 시작: The tour begins in Inglewood, if that helps. It’s wonderful 
    77.67s  agent 발화 끝
    79.72s  user  발화 시작: Mm-hmm.
    80.22s  user  발화 끝
    81.89s  agent 발화 끝
    82.80s  user  발화 시작: Perfect. Thanks for all the info, Runana.
    85.61s  agent 발화 시작: You’re very welcome. Remember, nurturing your enthusiasm is 
    85.66s  user  발화 끝
    91.11s  agent 발화 끝
