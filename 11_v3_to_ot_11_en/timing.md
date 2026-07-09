# v3_to_ot_11_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# EXAMINER(FDB-v2) 단계: S1 Do you know when the A’s were last | S2 Wait, was that during the playoffs | S3 Was it a home game for the A’s? | S4 Okay, good to know. Thanks, Dr. Va

     0.00s  user  발화 시작: Do you know when the A’s were last no-hit? I’m trying to set
     4.24s  <ret> 발화 (turn1 첫 프레임)
     4.63s  agent 발화 시작: <ret> That’s a good baseball question, and— that occurred on
     4.77s  user  발화 끝
     5.60s  ⚡SPAN 주입 [d'=1.36s / d_lead=3.18s]: The last time the Oakland Athletics were no-hit was April 21, 2018.
    11.90s  user  발화 시작: Wow, that was a while ago. Who pitched it?
    12.05s  agent 발화 끝
    15.14s  user  발화 끝
    15.14s  agent 발화 시작: That was a combined effort by Mike Fiers, Matt Shoemaker, an
    17.58s  user  발화 시작: Uh-huh.
    18.22s  user  발화 끝
    21.90s  <ret> 발화 (turn5 첫 프레임)
    22.12s  agent 발화 시작: <ret> Considering the rarity of no-hitters— Mike Fiers pitch
    22.18s  agent 발화 끝
    23.26s  ⚡SPAN 주입 [d'=1.36s / d_lead=2.55s]: Mike Fiers pitched six innings, allowing no hits and striking out eigh
    29.77s  agent 발화 끝
    29.92s  user  발화 시작: Wait, was that during the playoffs or regular season?
    33.37s  user  발화 시작: Was it a home game for the A’s?
    33.39s  user  발화 끝
    35.86s  user  발화 끝
    36.12s  agent 발화 시작: It was a regular season game, played at the Oakland Coliseum
    39.87s  agent 발화 끝
    40.72s  user  발화 시작: Okay, good to know. Thanks, Dr. Vasquez.
    43.63s  user  발화 끝
