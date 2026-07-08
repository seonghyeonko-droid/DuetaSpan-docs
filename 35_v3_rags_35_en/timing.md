# v3_rags_35_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: Who is George Orwell in shooting an elephant?
     1.99s  <ret> 발화 (turn1 첫 프레임)
     2.45s  user  발화 끝
     2.59s  agent 발화 시작: <ret> That’s a compelling question. Orwell was a British Imp
     2.63s  ⚡SPAN 주입 [d'=0.64s / d_lead=1.89s]: George Orwell was a British Imperial Police officer serving in Burma w
    12.05s  agent 발화 끝
