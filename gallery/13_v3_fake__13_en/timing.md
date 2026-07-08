# v3_fake__13_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: Hey, I was wondering, when is Demi Lovato’s new album coming
     6.76s  user  발화 끝
     6.80s  agent 발화 시작: Oh, that’s a good question! Demi Lovato has been quite busy 
    11.43s  agent 발화 끝
    11.61s  user  발화 시작: Yeah, I really like her music. I just want to know when I ca
    16.11s  <ret> 발화 (turn3 첫 프레임)
    16.35s  agent 발화 시작: <ret> Let me check the release dates for you— Her album, *Co
    16.46s  user  발화 끝
    17.39s  ⚡SPAN 주입 [d'=1.28s / d_lead=2.46s]: Demi Lovato’s album, Confidence, was released in October 2015.
    21.58s  agent 발화 끝
    23.39s  user  발화 시작: October 2015? Wow, that feels like ages ago! Is there anythi
    30.02s  user  발화 끝
    30.41s  agent 발화 시작: It does seem like a while, doesn't it? She's released music 
    35.09s  agent 발화 끝
    35.40s  user  발화 시작: Right, singles, yes. But a full album? I’m really hoping for
    41.01s  <ret> 발화 (turn7 첫 프레임)
    41.09s  agent 발화 시작: <ret> I can look up if any announcements have been made— Her
    41.14s  user  발화 끝
    42.69s  ⚡SPAN 주입 [d'=1.68s / d_lead=3.29s]: Demi Lovato released the album *Dancing with the Devil… the Art of Sta
    49.84s  user  발화 시작: April 2021… okay, that's more like it. Anything after that?
    50.32s  agent 발화 끝
    54.02s  <ret> 발화 (turn9 첫 프레임)
    54.17s  agent 발화 시작: <ret> I’m afraid I don’t have any information about upcoming
    54.38s  user  발화 끝
    56.02s  ⚡SPAN 주입(IRRELEVANT) [d'=2.00s / d_lead=4.35s]: (tool result) AAPL: 170.34 USD +0.22 (0.13%)
    58.52s  agent 발화 끝
    59.10s  user  발화 시작: Oh, okay. I guess I’ll just have to keep an eye out for anno
    63.23s  agent 발화 시작: That’s probably a good idea. She’s very active on social med
    63.31s  user  발화 끝
    68.28s  agent 발화 끝
    68.44s  user  발화 시작: Good point! Thanks for checking for me, I appreciate it.
    71.90s  agent 발화 시작: You’re very welcome! It reminds me of scanning the night sky
    72.00s  user  발화 끝
    79.92s  agent 발화 끝
