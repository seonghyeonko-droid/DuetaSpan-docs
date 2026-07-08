# v3_chain_05_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: Tell me about some holiday songs that came out in two thousa
     2.46s  <ret> 발화 (turn1 첫 프레임)
     2.95s  user  발화 끝
     3.05s  agent 발화 시작: <ret> Certainly, let’s explore some recent holiday releases.
     3.34s  ⚡SPAN 주입 [d'=0.88s / d_lead=1.31s]: (tool result) “Christmas Without You” by Mariah Carey featuring Khalid
     6.98s  agent 발화 끝
     7.10s  user  발화 시작: Hmm, that sounds nice. What about something a little more… t
     9.17s  user  발화 끝
     9.37s  agent 발화 시작: Traditional Christmas music has a lovely enduring quality, d
    14.93s  agent 발화 끝
    15.53s  user  발화 시작: Yeah, but new. Something new that *sounds* traditional. Can 
    17.40s  <ret> 발화 (turn5 첫 프레임)
    18.00s  agent 발화 시작: <ret> I can certainly investigate that for you. The Heartlan
    18.11s  user  발화 끝
    18.40s  ⚡SPAN 주입 [d'=1.00s / d_lead=1.53s]: (tool result) “A Cozy Christmas Eve” by The Heartlandaires released No
    22.66s  user  발화 시작: Okay, “A Cozy Christmas Eve” sounds perfect. Can you play it
    22.81s  agent 발화 끝
    23.26s  <ret> 발화 (turn7 첫 프레임)
    23.63s  agent 발화 시작: <ret> Absolutely, I can start that right away. “A Cozy Chris
    23.81s  user  발화 끝
    24.26s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.40s]: (tool result) Now playing “A Cozy Christmas Eve” by The Heartlandaires
    30.84s  agent 발화 끝
