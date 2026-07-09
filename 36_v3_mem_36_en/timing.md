# v3_mem_36_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  agent 발화 시작: Hi Sahiha, I’m Lira. It’s good to connect with you today.
     2.03s  user  발화 시작: Uh-huh.
     2.67s  user  발화 끝
     4.30s  agent 발화 끝
     4.36s  user  발화 시작: Um, yeah, hi. I was wondering… do you remember anything abou
     8.31s  <ret> 발화 (turn3 첫 프레임)
     8.55s  agent 발화 시작: <ret> Let’s see if I can recall those details for you… You w
     8.70s  user  발화 끝
    10.31s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.29s]: Past chat — Apartment hunting downtown: wanted a pet-friendly building
    15.78s  agent 발화 끝
    17.01s  user  발화 시작: Right! And Coco needs space, she’s a Poodle, you know?
    20.31s  agent 발화 시작: Yes, I do recall you mentioned Coco. Is she a lively compani
    20.48s  user  발화 끝
    25.03s  agent 발화 끝
