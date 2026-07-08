# v3_rag_31_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: I’m curious—who publishes the comic featuring Batwoman, the 
     4.11s  agent 발화 시작: That’s a great question, and a character with a fascinating 
     4.12s  user  발화 끝
     8.00s  agent 발화 끝
     8.46s  user  발화 시작: So, which comic book company publishes her stories?
    15.96s  <ret> 발화 (turn3 첫 프레임)
    16.36s  ⚡SPAN 주입 [d'=0.40s / d_lead=0.80s]: Batwoman is published by DC Comics, debuting in Detective Comics #233 
    16.54s  agent 발화 시작: <ret> Let’s see… Batwoman is published by DC Comics, first a
    16.71s  user  발화 끝
    23.30s  agent 발화 끝
    23.38s  user  발화 시작: [laugh] Wow, twenty-oh-six! That’s… earlier than I thought. 
    28.29s  <ret> 발화 (turn5 첫 프레임)
    28.87s  agent 발화 시작: <ret> He’s quite talented. J.H. Williams III co-created Batw
    28.93s  ⚡SPAN 주입 [d'=0.64s / d_lead=0.89s]: J.H. Williams III co-created Batwoman with writer W.H. Chew, and began
    28.98s  user  발화 끝
    34.10s  user  발화 시작: Interesting. And was he involved in the initial design of th
    34.20s  agent 발화 끝
    36.68s  user  발화 끝
