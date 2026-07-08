# v3_fake__13_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: Hey, I was wondering when Demi Lovato’s new album came out b
     4.56s  <ret> 발화 (turn1 첫 프레임)
     4.80s  agent 발화 시작: <ret> Ah, a trip down memory lane! Let’s see…
     4.91s  user  발화 끝
     5.84s  ⚡SPAN 주입 [d'=1.28s / d_lead=2.58s]: Demi Lovato’s album, *Confident*, was released in October 2015.
     7.38s  agent 발화 끝
     7.51s  agent 발화 시작: It came out in October of 2015, a really interesting year fo
    12.37s  agent 발화 끝
    13.42s  user  발화 시작: October, okay. Was that her first album ever?
    17.23s  <ret> 발화 (turn4 첫 프레임)
    17.41s  user  발화 끝
    17.54s  agent 발화 시작: <ret> No, that wasn’t her debut; she had released music befo
    17.73s  ⚡SPAN 주입 [d'=0.50s / d_lead=3.79s]: Demi Lovato’s debut album, *Don’t Forget*, was released in September 2
    21.25s  agent 발화 시작: Her very first album, *Don’t Forget*, actually came out in S
    21.33s  agent 발화 끝
    25.75s  user  발화 시작: Oh, 2008. Wow, that feels like ages ago! What about her musi
    25.77s  agent 발화 끝
    31.63s  user  발화 끝
    31.71s  agent 발화 시작: It was quite different from *Confident*; more pop-rock, real
    34.99s  agent 발화 끝
    35.38s  user  발화 시작: Pop-rock, huh? I'm trying to remember what songs were popula
    39.02s  <ret> 발화 (turn9 첫 프레임)
    39.25s  agent 발화 시작: <ret> Thinking about popular songs… the charts were full of 
    39.41s  user  발화 끝
    41.02s  ⚡SPAN 주입(IRRELEVANT) [d'=2.00s / d_lead=4.44s]: (tool result) AAPL stock is currently trading at $170.34, up 0.5% toda
    43.69s  agent 발화 끝
    43.78s  user  발화 시작: Was *Confident* a big hit, then?
    46.12s  agent 발화 시작: It was! It debuted quite high on the Billboard charts—
    46.27s  user  발화 끝
    48.44s  user  발화 시작: How high exactly? I'm curious about the numbers.
    49.17s  agent 발화 끝
    51.23s  <ret> 발화 (turn13 첫 프레임)
    51.58s  user  발화 끝
    51.63s  agent 발화 시작: <ret> Let me quickly check the specific chart position for y
    52.19s  ⚡SPAN 주입 [d'=0.96s / d_lead=3.32s]: *Confident* debuted at number one on the Billboard 200 chart in the Un
    59.59s  agent 발화 끝
    60.62s  user  발화 시작: Number one, that’s amazing! Did it have any really popular s
    65.34s  user  발화 끝
    65.37s  <ret> 발화 (turn15 첫 프레임)
    65.53s  agent 발화 시작: <ret> Oh, absolutely. “Cool for the Summer” was a massive hi
    67.37s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.84s]: "Cool for the Summer" peaked at number six on the Billboard Hot 100 ch
    69.20s  agent 발화 시작: "Cool for the Summer" reached number six on the Billboard Ho
    69.37s  agent 발화 끝
    73.41s  user  발화 시작: Number six is pretty good. I think I remember hearing that o
    73.78s  agent 발화 끝
    76.47s  agent 발화 시작: It was everywhere for a while! A really catchy tune, if I re
    76.60s  user  발화 끝
    80.97s  agent 발화 끝
    81.49s  user  발화 시작: Yeah, I think you’re right. Thanks for all the info, Moshi!
    84.73s  user  발화 끝
    84.89s  agent 발화 시작: You’re very welcome. It’s always fun revisiting these musica
    88.64s  agent 발화 끝
