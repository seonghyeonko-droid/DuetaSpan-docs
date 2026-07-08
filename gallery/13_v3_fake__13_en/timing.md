# v3_fake__13_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: Hey, I was wondering, when does Demi Lovato’s new album come
     6.16s  user  발화 끝
     6.18s  agent 발화 시작: Ah, tracking album releases can be tricky, they shift someti
     9.87s  <ret> 발화 (turn2 첫 프레임)
    10.11s  agent 발화 시작: <ret> Let me quickly check the release schedule for you… Her
    10.16s  agent 발화 끝
    11.55s  ⚡SPAN 주입 [d'=1.68s / d_lead=3.13s]: Demi Lovato’s album, *Confident*, was released in October 2015.
    17.42s  agent 발화 끝
    18.38s  user  발화 시작: Oh, okay. October 2015. That feels like ages ago! Is she wor
    24.56s  <ret> 발화 (turn4 첫 프레임)
    24.63s  user  발화 끝
    24.87s  agent 발화 시작: <ret> She is! Demi’s been quite busy lately, exploring new s
    25.06s  ⚡SPAN 주입(IRRELEVANT) [d'=0.50s / d_lead=4.95s]: (tool result) AAPL stock is currently trading at 170.34 USD, up 0.52% 
    29.75s  agent 발화 시작: It’s always exciting when artists venture into new creative 
    29.82s  agent 발화 끝
    34.09s  user  발화 시작: Yeah, definitely. What about her older stuff? What was her f
    34.19s  agent 발화 끝
    37.85s  <ret> 발화 (turn7 첫 프레임)
    38.00s  agent 발화 시작: <ret> That's a good question, tracing back an artist’s begin
    38.11s  user  발화 끝
    39.85s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.26s]: Demi Lovato’s debut album, *Don’t Forget*, was released in September 2
    45.97s  agent 발화 끝
    46.34s  user  발화 시작: Wow, 2008! That’s a long time ago. I barely remember that.
    51.24s  agent 발화 시작: [laugh] Time does fly, doesn't it? It feels like yesterday I
    51.34s  user  발화 끝
    55.26s  agent 발화 끝
    55.31s  user  발화 시작: Comets? You’re an astronomer, right?
    57.66s  agent 발화 시작: Indeed I am. Spending nights under the stars gives you a sen
    57.80s  user  발화 끝
    62.10s  agent 발화 끝
    62.34s  user  발화 시작: That’s cool. So, back to Demi, did *Confident* do well?
    67.34s  user  발화 끝
    67.35s  <ret> 발화 (turn13 첫 프레임)
    67.59s  agent 발화 시작: <ret> Assessing an album's success requires a look at the ch
    68.55s  ⚡SPAN 주입 [d'=1.20s / d_lead=3.26s]: *Confident* debuted at number one on the Billboard 200 chart in the US
    75.25s  user  발화 시작: Number one, huh? That's impressive. What genre would you say
    75.75s  agent 발화 끝
    80.81s  user  발화 끝
    80.83s  agent 발화 시작: She blends pop with elements of R&B and even a little rock—q
    85.09s  user  발화 시작: Interesting. Is she touring anytime soon?
    85.50s  agent 발화 끝
    88.03s  <ret> 발화 (turn17 첫 프레임)
    88.11s  agent 발화 시작: <ret> Checking tour dates is always a good idea… She is curr
    88.28s  user  발화 끝
    89.55s  ⚡SPAN 주입 [d'=1.52s / d_lead=2.68s]: Demi Lovato is currently on the Holy Fvck Tour, running through Novemb
    96.83s  agent 발화 끝
    97.41s  user  발화 시작: Oh, great! Good to know she's still performing. Thanks for t
   101.90s  user  발화 끝
