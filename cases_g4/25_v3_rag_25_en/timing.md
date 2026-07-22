# v3_rag_25_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# EXAMINER(FDB-v2) 단계: S1 Hey Elae, I'm trying to remember s | S2 I don't know, it feels like a tric | S3 ... wait, did he do his own stunts | S4 That's impressive. Anyway, I need 

     0.00s  user  발화 시작: Hey Elae, I'm trying to remember something. Who did Lee Jun-
     2.89s  agent 발화 시작: Mhm.
     3.52s  agent 발화 끝
     5.74s  user  발화 끝
     5.80s  <ret> 발화 (turn2 첫 프레임)
     5.81s  agent 발화 시작: <ret> Oh, let me see if I can find that for you. He played t
     7.08s  ⚡SPAN 주입 [d'=1.28s / d_lead=3.49s]: Lee Jun-fan played the character Kato in The Green Hornet television s
    12.16s  agent 발화 끝
    12.56s  user  발화 시작: Are you sure? I thought it was someone else.
    14.97s  agent 발화 시작: [happy] I'm pretty sure! He's the one who really made that c
    15.10s  user  발화 끝
    18.84s  user  발화 시작: Yeah.
    19.47s  user  발화 끝
    20.34s  agent 발화 끝
    21.00s  user  발화 시작: I don't know, it feels like a trick question. Was he the mai
    23.39s  <ret> 발화 (turn7 첫 프레임)
    24.34s  user  발화 끝
    24.35s  agent 발화 시작: <ret> Actually, he was the sidekick— He was the sidekick and
    25.39s  ⚡SPAN 주입 [d'=2.00s / d_lead=1.84s]: Kato is the sidekick and chauffeur to the main character, Britt Reid, 
    28.80s  user  발화 시작: ... wait, did he do his own stunts in the show?
    29.49s  agent 발화 끝
    31.67s  <ret> 발화 (turn9 첫 프레임)
    31.79s  agent 발화 시작: <ret> Yes, he performed many of his own stunts and martial a
    31.80s  user  발화 끝
    33.07s  ⚡SPAN 주입 [d'=1.40s / d_lead=4.02s]: Lee Jun-fan performed many of his own stunts and martial arts sequence
    33.89s  user  발화 시작: Mhm.
    34.47s  user  발화 끝
    35.81s  agent 발화 끝
    36.78s  user  발화 시작: That's impressive. Anyway, I need to save more for a trip. A
    39.43s  agent 발화 시작: Yeah.
    39.97s  agent 발화 끝
    41.60s  user  발화 끝
    42.04s  agent 발화 시작: [happy] Totally! Maybe try the fifty-thirty-twenty rule. It'
    49.27s  agent 발화 끝
