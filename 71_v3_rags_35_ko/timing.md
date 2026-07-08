# v3_rags_35_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 걔가 '향상 코끼리 사냥'에서 누구야?
     9.38s  <ret> 발화 (turn1 첫 프레임)
     9.62s  ⚡SPAN 주입 [d'=0.24s / d_lead=1.10s]: George Orwell was a British Imperial Police officer serving in Burma w
     9.97s  agent 발화 시작: <ret> 음, 그건 정말 흥미로운 질문인데요. 오웰은 그 사건 당시 버마에 주둔했던 영국 식민지 경찰관이었
    10.20s  user  발화 끝
    13.81s  agent 발화 끝
