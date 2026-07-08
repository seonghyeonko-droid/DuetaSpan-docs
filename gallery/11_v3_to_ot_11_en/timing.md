# v3_to_ot_11_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: Who won the golden boot in the Premier League this season?
     2.70s  <ret> 발화 (turn1 첫 프레임)
     3.29s  agent 발화 시작: <ret> That’s a common question this time of year. Harry Kane
     3.42s  user  발화 끝
     3.70s  ⚡SPAN 주입 [d'=1.00s / d_lead=3.42s]: Harry Kane won the Premier League Golden Boot for the 2023-2024 season
    10.88s  user  발화 시작: Twenty-one goals, wow. Is he still playing for Tottenham?
    10.98s  agent 발화 끝
    15.28s  user  발화 끝
    15.36s  agent 발화 시작: No, he transferred to Bayern Munich in August of last year.
    19.71s  agent 발화 끝
    19.88s  user  발화 시작: Oh, right, I’d almost forgotten. Um, what about last season,
    24.38s  <ret> 발화 (turn5 첫 프레임)
    24.98s  agent 발화 시작: <ret> Let me quickly check that for you. Erling Haaland won 
    25.11s  user  발화 끝
    25.38s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.85s]: Erling Haaland won the Premier League Golden Boot for the 2022-2023 se
    32.30s  agent 발화 끝
    32.60s  user  발화 시작: Thirty-six! That’s incredible. [happy]
    35.06s  agent 발화 시작: It was a remarkable season for him, truly.
    35.09s  user  발화 끝
    37.92s  agent 발화 끝
    38.02s  user  발화 시작: Did you remember to take the recycling out?
    39.98s  user  발화 시작: Sorry, where were we? Oh yes, the Golden Boot.
    40.42s  user  발화 끝
    43.58s  user  발화 끝
    43.84s  agent 발화 시작: We were discussing the Premier League’s top goalscorers.
    46.60s  <ret> 발화 (turn11 첫 프레임)
    47.19s  agent 발화 시작: <ret> Thinking about goalscorers reminds me… Alan Shearer wo
    47.40s  agent 발화 끝
    47.60s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.17s]: Alan Shearer holds the record for most Premier League Golden Boots won
    54.15s  agent 발화 끝
    54.43s  user  발화 시작: Three times, that's a record, I suppose. Is there a record f
    60.23s  <ret> 발화 (turn13 첫 프레임)
    60.82s  agent 발화 시작: <ret> Yes, there is a record for that. Mohamed Salah scored 
    60.92s  user  발화 끝
    61.23s  ⚡SPAN 주입 [d'=1.00s / d_lead=3.39s]: Mohamed Salah holds the record for most goals in a single Premier Leag
    68.57s  agent 발화 끝
    68.64s  user  발화 시작: That's amazing. What a player. Thanks for the info.
    72.76s  user  발화 끝
