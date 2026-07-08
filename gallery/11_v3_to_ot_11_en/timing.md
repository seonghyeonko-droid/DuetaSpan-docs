# v3_to_ot_11_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: Do you happen to know when the Oakland A’s were last no-hit?
     5.55s  <ret> 발화 (turn1 첫 프레임)
     5.93s  agent 발화 시작: <ret> That’s a good question about the A’s pitching history.
     6.07s  user  발화 끝
     7.39s  ⚡SPAN 주입 [d'=1.84s / d_lead=4.11s]: The last time the Oakland Athletics were no-hit was April 21, 2018.
    15.39s  user  발화 시작: Wow, that was a while ago.
    15.53s  agent 발화 끝
    17.51s  user  발화 끝
    17.56s  agent 발화 시작: It is quite a span since that last occurrence, yes.
    21.12s  agent 발화 끝
    21.28s  user  발화 시작: Wait, who pitched that game for the other team?
    23.85s  <ret> 발화 (turn5 첫 프레임)
    24.09s  agent 발화 시작: <ret> Let me quickly recall the details of that particular g
    24.24s  user  발화 끝
    25.05s  ⚡SPAN 주입 [d'=1.20s / d_lead=3.67s]: James Paxton pitched a no-hitter against the Oakland Athletics on Apri
    33.28s  agent 발화 끝
    33.58s  user  발화 시작: Oh, remind me to pick up milk later.
    36.19s  user  발화 시작: So Paxton was pretty dominant that day, huh?
    36.21s  user  발화 끝
    39.11s  user  발화 끝
