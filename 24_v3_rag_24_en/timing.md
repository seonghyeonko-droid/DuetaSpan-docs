# v3_rag_24_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: I was wondering about the name du Plessis… it sounds quite… 
     5.37s  agent 발화 시작: It certainly has a sophisticated ring to it.
     5.51s  user  발화 끝
     7.70s  <ret> 발화 (turn2 첫 프레임)
     8.10s  agent 발화 시작: <ret> Let’s explore the origins of that surname, shall we? T
     8.15s  agent 발화 끝
     9.70s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.17s]: Du Plessis is a French surname originating as a topographical name for
    14.13s  user  발화 시작: Mhm.
    14.76s  user  발화 끝
    16.21s  agent 발화 끝
    16.47s  user  발화 시작: Oh, interesting! But I’ve heard it’s common in South Africa 
    21.93s  <ret> 발화 (turn5 첫 프레임)
    22.17s  agent 발화 시작: <ret> That’s a very astute observation, linking France and S
    22.17s  user  발화 끝
    23.93s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.69s]: Huguenots fleeing religious persecution in France settled in South Afr
    33.25s  agent 발화 끝
