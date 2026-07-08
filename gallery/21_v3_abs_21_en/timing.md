# v3_abs_21_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: What is the pressure of the gas called?
     1.84s  <ret> 발화 (turn1 첫 프레임)
     2.00s  ⚡SPAN 주입 [d'=0.16s / d_lead=1.30s]: (no information found)
     2.42s  agent 발화 시작: <ret> That's a good question. I’m afraid I don’t have inform
     2.44s  user  발화 끝
     7.88s  user  발화 시작: Hmm, okay. What about the highest building in Chicago?
     7.94s  agent 발화 끝
    11.28s  <ret> 발화 (turn3 첫 프레임)
    11.85s  agent 발화 시작: <ret> Let me check that for you. The Willis Tower, formerly 
    11.91s  user  발화 끝
    12.28s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.12s]: (tool result) The Chicago skyline is dominated by the Willis Tower, wh
    21.40s  agent 발화 끝
    21.48s  user  발화 시작: Wow, that's really tall! Is it energy efficient?
    25.09s  agent 발화 시작: Energy efficiency is absolutely vital in modern construction
    25.10s  user  발화 끝
    31.58s  agent 발화 끝
