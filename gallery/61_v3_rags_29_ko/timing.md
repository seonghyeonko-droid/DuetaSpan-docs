# v3_rags_29_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 누가 죽었는지 궁금하네.
     1.19s  <ret> 발화 (turn1 첫 프레임)
     1.66s  user  발화 끝
     1.79s  agent 발화 시작: <ret> 음, 에릭이 데이즈 오브 아워 라이브에서 다니엘 조나스를 쐈어. 엄청 괴로워하는 와중에 실수로 죽
     2.15s  ⚡SPAN 주입 [d'=0.96s / d_lead=7.51s]: Eric Brady accidentally shot and killed his best friend, Daniel Jonas,
     9.30s  agent 발화 끝
