# v3_rags_30_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: Where is the moon located during a solar eclipse?
     2.69s  <ret> 발화 (turn1 첫 프레임)
     3.29s  agent 발화 시작: <ret> That’s a fascinating question, actually. The Moon is p
     3.41s  ⚡SPAN 주입 [d'=0.72s / d_lead=1.87s]: During a solar eclipse, the Moon passes between the Sun and Earth.
     3.52s  user  발화 끝
    11.87s  agent 발화 끝
