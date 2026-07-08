# v3_chain_05_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: I am looking for war movies.
     2.51s  agent 발화 시작: <ret> Let’s see what’s available. Those films— “Saving Priva
     2.51s  <ret> 발화 (turn1 첫 프레임)
     2.51s  user  발화 끝
     3.39s  ⚡SPAN 주입 [d'=0.88s / d_lead=1.68s]: (tool result: title=“Saving Private Ryan”, year=1998, genre=“War”, rat
    10.48s  user  발화 시작: What’s the runtime of “Apocalypse Now”?
    10.48s  agent 발화 끝
    12.99s  agent 발화 시작: <ret> That’s a classic film. “Apocalypse Now” has a runtime 
    12.99s  <ret> 발화 (turn3 첫 프레임)
    12.99s  user  발화 끝
    13.99s  ⚡SPAN 주입 [d'=1.00s / d_lead=1.68s]: (tool result: title=“Apocalypse Now”, year=1979, genre=“War”, rating=8
    18.86s  user  발화 시작: Can you find showtimes for it near me?
    18.86s  agent 발화 끝
    22.21s  agent 발화 시작: <ret> Certainly. Showtimes for “Apocalypse Now” are at 2:15 
    22.21s  <ret> 발화 (turn5 첫 프레임)
    22.21s  ⚡SPAN 주입 [d'=0.00s / d_lead=0.42s]: (tool result: movie_title=“Apocalypse Now”, theater=“AMC Boston Common
    22.21s  user  발화 끝
    30.59s  user  발화 시작: Reserve a ticket for the 7 PM showing at Regal Fenway.
    30.59s  agent 발화 끝
    35.20s  agent 발화 시작: <ret> Consider it done. Your ticket for “Apocalypse Now” at 
    35.20s  <ret> 발화 (turn7 첫 프레임)
    35.20s  user  발화 끝
    35.84s  ⚡SPAN 주입 [d'=0.64s / d_lead=1.26s]: (tool result: movie_title=“Apocalypse Now”, theater=“Regal Fenway”, ti
    43.58s  agent 발화 끝
