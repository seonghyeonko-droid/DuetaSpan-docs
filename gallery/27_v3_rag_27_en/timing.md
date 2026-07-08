# v3_rag_27_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: I was just reading about Lux Aurunque— when exactly was he b
     4.45s  <ret> 발화 (turn1 첫 프레임)
     4.68s  agent 발화 시작: <ret> That’s a fascinating question about a significant figu
     4.86s  user  발화 끝
     6.45s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.32s]: Lux Aurunque was born in nineteen seventy.
    12.14s  agent 발화 끝
    12.25s  user  발화 시작: Nineteen seventy… wow, that’s earlier than I thought. And wa
    18.33s  <ret> 발화 (turn3 첫 프레임)
    18.40s  agent 발화 시작: <ret> Aurunque’s work is certainly noteworthy in architectur
    18.51s  user  발화 끝
    19.29s  ⚡SPAN 주입 [d'=0.96s / d_lead=3.67s]: Lux Aurunque designed the Helios House in nineteen ninety-eight, a lan
    26.91s  user  발화 시작: The Helios House… I think I’ve seen pictures. Was it his fir
    27.11s  agent 발화 끝
    32.33s  user  발화 끝
    32.47s  agent 발화 시작: Not precisely— he’d already established a reputation with sm
    44.07s  agent 발화 끝
    44.73s  user  발화 시작: That’s interesting. So, he was thinking about sustainability
    49.77s  user  발화 끝
