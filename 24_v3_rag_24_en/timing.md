# v3_rag_24_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: I’ve been researching my family history, and I keep running 
     7.54s  <ret> 발화 (turn1 첫 프레임)
     7.62s  agent 발화 시작: <ret> That’s a lovely pursuit, tracing your roots… The name 
     7.64s  user  발화 끝
     8.50s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.77s]: Du Plessis is a French surname, originating from the region of Normand
    14.09s  user  발화 시작: Mhm.
    14.54s  user  발화 끝
    16.30s  user  발화 시작: Oh, Normandy! That's… surprising. I always thought it sounde
    16.34s  agent 발화 끝
    21.72s  user  발화 끝
    21.80s  agent 발화 시작: It’s understandable why you’d think so, the sound does trave
    26.87s  <ret> 발화 (turn5 첫 프레임)
    27.11s  agent 발화 시작: <ret> Let’s explore its journey further… Huguenots brought t
    27.13s  agent 발화 끝
    27.83s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.07s]: The name was brought to South Africa by Huguenots in the seventeenth c
    34.46s  user  발화 시작: Huguenots… so it’s a Protestant name? That makes a lot of se
    34.58s  agent 발화 끝
    40.37s  agent 발화 시작: Family stories often hold threads of truth, and that certain
    40.53s  user  발화 끝
    45.09s  <ret> 발화 (turn8 첫 프레임)
    45.17s  agent 발화 시작: <ret> It’s interesting how history shapes names… The name is
    45.36s  agent 발화 끝
    46.53s  ⚡SPAN 주입 [d'=1.44s / d_lead=2.45s]: In Afrikaans, the name is often spelled Du Plessis, without the French
    52.92s  agent 발화 끝
