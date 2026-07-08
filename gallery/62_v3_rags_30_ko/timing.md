# v3_rags_30_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 일식 때 달은 어디에 있어요?
     1.08s  <ret> 발화 (turn1 첫 프레임)
     1.60s  agent 발화 시작: <ret> 음, 사실 아주 흥미로운 질문이세요. 달은 일식 동안 태양과 지구 사이에 정확히 위치해서 태양 빛
     1.84s  user  발화 끝
     2.08s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.32s]: During a solar eclipse, the Moon passes between the Sun and Earth.
     9.48s  agent 발화 끝
