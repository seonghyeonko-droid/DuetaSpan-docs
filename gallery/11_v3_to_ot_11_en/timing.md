# v3_to_ot_11_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: I was wondering, do you know when the A's were last no-hit? 
     5.46s  <ret> 발화 (turn1 첫 프레임)
     5.85s  agent 발화 시작: <ret> That's a good question, and a frustrating experience f
     5.97s  user  발화 끝
     7.46s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.66s]: <The last time the Oakland Athletics were no-hit was April 21, 2018.>
    15.04s  user  발화 시작: Wow, that *was* a while ago. Who pitched it?
    15.16s  agent 발화 끝
    18.56s  <ret> 발화 (turn3 첫 프레임)
    18.80s  agent 발화 시작: <ret> I can certainly look that up for you.
    18.89s  user  발화 끝
    20.08s  ⚡SPAN 주입 [d'=1.52s / d_lead=2.63s]: <James Paxton of the Seattle Mariners pitched a no-hitter against the 
    21.34s  agent 발화 시작: James Paxton, pitching for the Seattle Mariners, threw the n
    21.43s  agent 발화 끝
    28.06s  agent 발화 끝
    28.25s  user  발화 시작: Was he a rookie then?
    29.81s  agent 발화 시작: That’s a really interesting point—
    29.86s  user  발화 끝
    31.39s  user  발화 시작: No, I meant, was Paxton early in his career at that point?
    32.02s  agent 발화 끝
    35.55s  agent 발화 시작: He wasn't a rookie, but he was still developing.
    35.70s  user  발화 끝
    36.45s  user  발화 시작: Uh-huh.
    37.09s  user  발화 끝
    38.23s  agent 발화 시작: Paxton was in his fourth major league season in two thousand
    38.31s  agent 발화 끝
    46.02s  agent 발화 끝
    46.03s  user  발화 시작: Hmm, okay. Thanks, that's really helpful.
    49.17s  user  발화 끝
