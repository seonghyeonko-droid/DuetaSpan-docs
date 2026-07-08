# v3_rags_31_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 콜럼비아 강이 태평양이랑 어디서 만나는지 궁금해?
     2.37s  <ret> 발화 (turn1 첫 프레임)
     2.97s  agent 발화 시작: <ret> 네, 그런 질문을 많이 하시더라고요. 콜럼비아 강은 변화하는 모래톱으로 유명한 콜럼비아 바에서 태
     3.13s  user  발화 끝
     3.33s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.52s]: The Columbia River meets the Pacific Ocean at the Columbia Bar, a dang
    10.52s  agent 발화 끝
