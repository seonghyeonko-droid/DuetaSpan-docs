# v3_mem_36_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  agent 발화 시작: Hi Sahiha, I'm Lira. It's good to speak with you today.
     1.58s  user  발화 시작: Uh-huh.
     2.17s  user  발화 끝
     3.23s  agent 발화 끝
     3.58s  user  발화 시작: Oh, hi Lira. Um, I was wondering… do you remember anything a
     9.96s  <ret> 발화 (turn3 첫 프레임)
    10.18s  agent 발화 시작: <ret> Let’s see if I can recall that for you. You were resea
    10.34s  user  발화 끝
    11.32s  ⚡SPAN 주입 [d'=1.36s / d_lead=2.50s]: Past chat — Researching a used car: comparing hybrid models; wants und
    16.24s  user  발화 시작: Right, exactly! And I was thinking, maybe I should check if 
    16.58s  agent 발화 끝
    24.22s  <ret> 발화 (turn5 첫 프레임)
    24.51s  agent 발화 시작: <ret> Of course, I can easily check that information. You ha
    24.54s  user  발화 끝
    25.34s  ⚡SPAN 주입 [d'=1.12s / d_lead=2.45s]: Past chat — User has a Golden Retriever named Max.
    30.95s  agent 발화 끝
