# v3_to_ot_11_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: I was wondering, do you happen to know when the Oakland A’s 
     4.84s  <ret> 발화 (turn1 첫 프레임)
     5.23s  agent 발화 시작: <ret> That’s a fascinating question, and a bit of baseball h
     5.37s  user  발화 끝
     6.84s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.76s]: <The last time the Oakland Athletics were no-hit was April 21, 2018.>
    16.06s  user  발화 시작: Wow, that was a while ago. Who pitched it?
    16.17s  agent 발화 끝
    18.78s  <ret> 발화 (turn3 첫 프레임)
    19.02s  agent 발화 시작: <ret> I can certainly look that up for you.
    19.11s  user  발화 끝
    19.98s  ⚡SPAN 주입 [d'=1.20s / d_lead=2.26s]: <James Paxton of the Seattle Mariners pitched a no-hitter against the 
    21.21s  agent 발화 시작: James Paxton, pitching for the Seattle Mariners, achieved th
    21.28s  agent 발화 끝
    23.09s  user  발화 시작: Uh-huh.
    23.58s  user  발화 끝
    26.67s  agent 발화 끝
    26.86s  user  발화 시작: Was that a close game, or did they just totally shut them do
    30.57s  agent 발화 시작: Well, it was—
    30.60s  user  발화 끝
    31.35s  <ret> 발화 (turn8 첫 프레임)
    31.74s  agent 발화 시작: <ret> the Mariners won that game five to zero, with Paxton r
    31.85s  agent 발화 끝
    33.35s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.09s]: <The Mariners won the game 5-0, with Paxton striking out seven and wal
    38.83s  agent 발화 끝
    39.70s  user  발화 시작: Interesting. So, a pretty dominant performance then.
    44.10s  user  발화 끝
