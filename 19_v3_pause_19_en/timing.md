# v3_pause_19_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: When did the golden age of Athens begin?
     2.79s  agent 발화 시작: <ret> That’s a fascinating question. The Golden Age of Athen
     2.79s  <ret> 발화 (turn1 첫 프레임)
     2.79s  user  발화 끝
     3.79s  ⚡SPAN 주입 [d'=1.00s / d_lead=1.40s]: The Golden Age of Athens began in 480 BC.
     9.77s  user  발화 시작: And how long did it… uh… last?
     9.77s  agent 발화 끝
    12.21s  agent 발화 시작: <ret> It was a remarkably productive period. The Golden Age 
    12.21s  <ret> 발화 (turn3 첫 프레임)
    12.21s  user  발화 끝
    13.17s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.09s]: The Golden Age of Athens lasted for approximately forty-five years.
    19.53s  user  발화 시작: So I was thinking… about the whole trip, actually. I— I mean
    19.53s  agent 발화 끝
    27.55s  agent 발화 시작: It's wonderful you’re planning a visit.
    27.55s  user  발화 끝
    29.64s  user  발화 시작: …the best time of year to avoid the biggest crowds?
    29.64s  agent 발화 끝
    33.13s  agent 발화 시작: <ret> October in Athens averages twenty-four degrees Celsius
    33.13s  <ret> 발화 (turn7 첫 프레임)
    33.13s  user  발화 끝
    34.13s  ⚡SPAN 주입 [d'=1.00s / d_lead=5.93s]: October in Athens has average highs of 24 degrees Celsius and 6 rainy 
    39.06s  agent 발화 끝
