# v3_fake__13_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: Hey, do you know when Demi Lovato’s new album came out in 20
     5.25s  <ret> 발화 (turn1 첫 프레임)
     5.49s  agent 발화 시작: <ret> Ah, a good question. I often find myself looking back 
     5.56s  user  발화 끝
     7.25s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.11s]: Demi Lovato’s fifth studio album, *Confident*, was released in October
    11.58s  agent 발화 시작: It was released in October of 2015, that new album of hers.
    11.60s  agent 발화 끝
    15.93s  agent 발화 끝
    16.95s  user  발화 시작: October, okay. Was that her first album?
    20.44s  <ret> 발화 (turn4 첫 프레임)
    20.61s  user  발화 끝
    20.76s  agent 발화 시작: <ret> No, not at all. She had already released quite a few a
    20.94s  ⚡SPAN 주입 [d'=0.50s / d_lead=4.35s]: Demi Lovato released her debut studio album, *Don’t Forget*, in Septem
    25.04s  agent 발화 시작: Her very first studio album, *Don’t Forget*, came out in Sep
    25.11s  agent 발화 끝
    29.16s  user  발화 시작: Wow, that was a while ago. What about her next one after tha
    29.30s  agent 발화 끝
    33.06s  <ret> 발화 (turn7 첫 프레임)
    33.21s  agent 발화 시작: <ret> Her second studio album, *Here We Go Again*, followed 
    33.32s  user  발화 끝
    35.06s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.49s]: *Here We Go Again*, Demi Lovato’s second studio album, was released in
    37.59s  agent 발화 시작: *Here We Go Again* was released in July of 2009, just a year
    37.70s  agent 발화 끝
    42.15s  user  발화 시작: Hmm, okay. I think I'm getting my dates straight now.
    42.40s  agent 발화 끝
    45.50s  <ret> 발화 (turn10 첫 프레임)
    45.65s  agent 발화 시작: <ret> It’s easy to lose track, isn't it? Time flies, much li
    45.72s  user  발화 끝
    47.50s  ⚡SPAN 주입(IRRELEVANT) [d'=2.00s / d_lead=4.49s]: (tool result) AAPL: 170.34, +0.22, 0.13%
    50.13s  agent 발화 끝
    51.06s  user  발화 시작: Actually, do you know anything about her song, “Sorry Not So
    54.35s  <ret> 발화 (turn12 첫 프레임)
    54.42s  agent 발화 시작: <ret> That’s a catchy tune! It was released a bit later, in 
    54.58s  user  발화 끝
    56.35s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.63s]: “Sorry Not Sorry” was released as the lead single from Demi Lovato’s s
    58.93s  agent 발화 시작: That song came out on July twenty-fourth, 2017. It was a lea
    59.05s  agent 발화 끝
    63.74s  agent 발화 끝
    64.76s  user  발화 시작: So, 2017. Got it. Was it a big hit?
    69.18s  <ret> 발화 (turn15 첫 프레임)
    69.29s  user  발화 끝
    69.50s  agent 발화 시작: <ret> It was quite successful, actually. It peaked at number
    71.18s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.63s]: “Sorry Not Sorry” peaked at number six on the *Billboard* Hot 100 char
    73.90s  agent 발화 시작: It reached number six on the Billboard Hot 100 chart.
    74.13s  agent 발화 끝
    76.82s  user  발화 시작: That’s pretty good. I’ll have to listen to it again.
    77.23s  agent 발화 끝
    79.95s  agent 발화 시작: It's a good one to revisit. A clear night and a good song— a
    80.05s  user  발화 끝
    84.02s  agent 발화 끝
    84.63s  user  발화 시작: Yeah, you’re right. Thanks for the info!
    87.31s  user  발화 끝
    87.36s  agent 발화 시작: You're very welcome. I'm glad I could help, and I hope you e
    90.92s  agent 발화 끝
