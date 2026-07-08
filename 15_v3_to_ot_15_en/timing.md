# v3_to_ot_15_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: Do you know who plays Trixie Franklin on Call the Midwife?
     2.96s  <ret> 발화 (turn1 첫 프레임)
     3.56s  agent 발화 시작: <ret> That’s a lovely show. Helen George is the actress who 
     3.60s  user  발화 끝
     3.92s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.05s]: Helen George plays Trixie Franklin in Call the Midwife.
    12.79s  agent 발화 끝
    12.90s  user  발화 시작: Oh, right… Helen George. What else has she been in?
    16.76s  <ret> 발화 (turn3 첫 프레임)
    16.92s  ⚡SPAN 주입 [d'=0.16s / d_lead=0.55s]: Helen George also played Jacqueline de Séze in Doctors.
    17.35s  agent 발화 시작: <ret> She’s quite versatile. Helen George has also appeared 
    17.53s  user  발화 끝
    19.60s  user  발화 시작: Doctors, huh? I— I mean, is that the daytime soap?
    19.93s  agent 발화 끝
    23.64s  agent 발화 시작: Yes, it is a long-running British medical drama.
    23.66s  user  발화 끝
    31.46s  user  발화 시작: Did you remember to take the bins out?
    31.62s  agent 발화 끝
    35.58s  user  발화 끝
    35.91s  user  발화 시작: Sorry, where were we? Oh yes, Helen George. What about films
    41.66s  <ret> 발화 (turn8 첫 프레임)
    41.74s  ⚡SPAN 주입 [d'=0.08s / d_lead=0.84s]: Helen George appeared in The Bill and Holby City before Call the Midwi
    42.26s  agent 발화 시작: <ret> She's done a few film roles. Helen George had roles in
    42.40s  user  발화 끝
    45.49s  agent 발화 끝
    45.50s  user  발화 시작: Before Call the Midwife? Interesting. Was she always an actr
    46.98s  <ret> 발화 (turn10 첫 프레임)
    47.57s  agent 발화 시작: <ret> It appears she began training quite young.
    47.76s  user  발화 끝
    47.98s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.59s]: Helen George trained at the Royal Academy of Dramatic Art from 2000 to
    49.95s  agent 발화 시작: Helen George received training at RADA between two thousand 
    50.16s  agent 발화 끝
    52.68s  agent 발화 끝
    53.16s  user  발화 시작: RADA, wow. That’s impressive. Is she British?
    59.14s  <ret> 발화 (turn13 첫 프레임)
    59.22s  ⚡SPAN 주입 [d'=0.08s / d_lead=1.09s]: Helen George was born in Birmingham, England, on September ten, ninete
    59.74s  agent 발화 시작: <ret> Absolutely, she’s a proud Brit. Helen George was born 
    59.84s  user  발화 끝
    63.44s  agent 발화 끝
    63.65s  user  발화 시작: September tenth… so she’s a Virgo? [laugh]
    71.07s  agent 발화 시작: [laugh] An astute observation.
    71.30s  user  발화 끝
    74.22s  agent 발화 끝
    75.01s  user  발화 시작: Is she married?
    77.41s  <ret> 발화 (turn17 첫 프레임)
    77.73s  ⚡SPAN 주입 [d'=0.32s / d_lead=0.74s]: Helen George is married to Oliver Boot, a fellow actor.
    78.01s  agent 발화 시작: <ret> Yes, she is. Helen George is married to Oliver Boot, w
    78.20s  user  발화 끝
    81.70s  agent 발화 끝
