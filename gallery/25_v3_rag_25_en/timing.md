# v3_rag_25_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: So, I was wondering… did Jack Sock and Raffaella Reggi both 
     6.80s  user  발화 끝
     7.08s  agent 발화 시작: That’s a good question—many athletes cross over, you know.
     9.80s  <ret> 발화 (turn2 첫 프레임)
     9.88s  agent 발화 시작: <ret> Let me quickly confirm that for you… Both Jack Sock an
    10.03s  agent 발화 끝
    10.92s  ⚡SPAN 주입 [d'=1.12s / d_lead=2.50s]: Jack Sock and Raffaella Reggi are both professional tennis players.
    15.76s  user  발화 시작: Tennis, huh? Okay, but Reggi… isn’t she a bit older than Soc
    15.95s  agent 발화 끝
    21.44s  agent 발화 시작: Age is relative when you’re talking about dedication, I alwa
    21.55s  user  발화 끝
    24.79s  <ret> 발화 (turn5 첫 프레임)
    25.11s  agent 발화 시작: <ret> I can certainly look up their birthdates for a compari
    25.14s  agent 발화 끝
    26.15s  ⚡SPAN 주입 [d'=1.36s / d_lead=3.67s]: Raffaella Reggi was born on December 26, 1980, and Jack Sock on Novemb
    33.54s  agent 발화 끝
    33.94s  user  발화 시작: Wait, 1980? That makes her… over forty now?
    38.32s  agent 발화 시작: Well—
    38.42s  user  발화 시작: So, she’s still competing at a high level at over forty? Tha
    38.47s  user  발화 끝
    39.14s  agent 발화 끝
    43.67s  agent 발화 시작: It is, isn’t it? Mental fortitude is everything in a competi
    43.83s  user  발화 끝
    47.56s  <ret> 발화 (turn10 첫 프레임)
    47.80s  agent 발화 시작: <ret> To put that in perspective, let’s look at her recent r
    47.94s  agent 발화 끝
    49.56s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.16s]: As of November 2023, Raffaella Reggi is ranked 448th in women’s single
    57.26s  agent 발화 끝
