# v3_rag_26_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: I was just looking at flags, and it’s funny how many have re
     7.66s  agent 발화 시작: That's a very astute observation about the prevalence of red
     7.79s  user  발화 끝
    13.62s  <ret> 발화 (turn2 첫 프레임)
    13.82s  agent 발화 시작: <ret> Let’s see if I can recall that particular tricolor… Th
    13.92s  agent 발화 끝
    15.62s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.42s]: The flag of Germany is a tricolor featuring black, red, and gold horiz
    23.33s  agent 발화 끝
    24.15s  user  발화 시작: Oh, Germany, right. I always get those European flags mixed 
    28.39s  agent 발화 시작: It’s understandable, the histories are often quite intertwin
    28.55s  user  발화 끝
    33.93s  <ret> 발화 (turn5 첫 프레임)
    34.25s  agent 발화 시작: <ret> I’m rather familiar with flags that carried significan
    34.41s  agent 발화 끝
    35.77s  ⚡SPAN 주입 [d'=1.84s / d_lead=3.83s]: The flag of the Kingdom of Dahomey featured a central stripe of red fl
    44.58s  agent 발화 끝
    44.70s  user  발화 시작: Dahomey… isn't that in modern-day Benin? I— I mean, I think 
    49.73s  agent 발화 시작: Precisely. It flourished as a major power from the 17th cent
    49.89s  user  발화 끝
    56.60s  <ret> 발화 (turn8 첫 프레임)
    56.98s  agent 발화 시작: <ret> Thinking of colors and trade, the symbolism is often q
    57.19s  agent 발화 끝
    58.60s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.96s]: The Asante Empire used flags with gold symbols on a black background t
    68.25s  agent 발화 끝
