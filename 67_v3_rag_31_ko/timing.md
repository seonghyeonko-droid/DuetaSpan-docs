# v3_rag_31_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 걔가 등장하는 배트우먼 코믹스를 누가 내는지 궁금해.
     3.37s  user  발화 끝
     3.65s  agent 발화 시작: 좋은 질문이에요. 디자인도 정말 흥미롭고요.
     7.74s  user  발화 시작: 그럼, 걔 이야기는 어느 출판사에서 내?
     7.77s  agent 발화 끝
    14.59s  <ret> 발화 (turn3 첫 프레임)
    15.07s  ⚡SPAN 주입 [d'=0.48s / d_lead=1.41s]: Batwoman is published by DC Comics, debuting in Detective Comics #233 
    15.19s  agent 발화 시작: <ret> 아, DC 코믹스에서 배트우먼을 출판하고 있어요. 처음 등장한 건 2006년 디텍티브 코믹스에서였
    15.34s  user  발화 끝
    23.62s  agent 발화 끝
    24.17s  user  발화 시작: [laugh] 와, 2006년이라고! 생각보다 훨씬 빠르네. J.H. 윌리엄스 3세는 어때?
    29.01s  <ret> 발화 (turn5 첫 프레임)
    29.59s  user  발화 끝
    29.61s  agent 발화 시작: <ret> 그분은 정말 재능이 많으시네요. J.H. 윌리엄스 3세는 W.H. 츄와 함께 배트우먼을 공동 창작
    29.65s  ⚡SPAN 주입 [d'=0.64s / d_lead=0.78s]: J.H. Williams III co-created Batwoman with writer W.H. Chew, and began
    33.77s  agent 발화 끝
    34.16s  user  발화 시작: 흥미롭네. 그럼, 초기에 코스튬 디자인에도 관여했어?
    37.19s  user  발화 끝
