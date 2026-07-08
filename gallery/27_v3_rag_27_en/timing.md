# v3_rag_27_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: I was reading about Lux Aurunque, and I'm curious—when was h
     4.32s  <ret> 발화 (turn1 첫 프레임)
     4.56s  agent 발화 시작: <ret> That’s a good question, delving into historical figure
     4.72s  user  발화 끝
     6.32s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.25s]: Lux Aurunque was born in nineteen seventy.
    11.88s  agent 발화 끝
    12.32s  user  발화 시작: Nineteen seventy… wow, that's not as long ago as I thought. 
    18.39s  <ret> 발화 (turn3 첫 프레임)
    18.46s  agent 발화 시작: <ret> Understanding his position helps place him in context…
    18.53s  user  발화 끝
    19.35s  ⚡SPAN 주입 [d'=0.96s / d_lead=3.41s]: Lux Aurunque ruled the Kingdom of Veridia from twenty twenty-one to tw
    26.71s  user  발화 시작: Veridia… I don’t think I’ve heard of that kingdom. Was it a 
    26.99s  agent 발화 끝
    31.65s  <ret> 발화 (turn5 첫 프레임)
    31.88s  agent 발화 시작: <ret> Veridia’s economic role is quite interesting… The king
    31.99s  user  발화 끝
    32.61s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.40s]: The Kingdom of Veridia was a major exporter of rare earth minerals dur
    39.49s  agent 발화 끝
    40.08s  user  발화 시작: Rare earth minerals, huh? That explains a lot, actually. Tha
    44.34s  user  발화 끝
