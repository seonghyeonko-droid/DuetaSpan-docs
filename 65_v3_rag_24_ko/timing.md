# v3_rag_24_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 음, 뒤 플레시라는 성이… 꽤 프랑스 같지 않아요?
     3.60s  user  발화 끝
     3.85s  agent 발화 시작: 네, 듣기에 세련된 느낌이 드는 것 같아요.
     6.04s  <ret> 발화 (turn2 첫 프레임)
     6.35s  agent 발화 시작: <ret> 뒤 플레시 성의 유래에 대해 알아볼까요? 그 이름은 오래된 프랑스어에서 유래했는데, “요새” 또는
     6.44s  agent 발화 끝
     8.04s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.37s]: Du Plessis is a French surname originating as a topographical name for
    13.05s  user  발화 시작: 예.
    13.49s  user  발화 끝
    15.29s  agent 발화 끝
    15.57s  user  발화 시작: 오, 흥미롭네요! 그런데 남아프리카에서도 흔하다고 들었어요… 어떻게 그곳에 가게 됐을까요?
    21.14s  <ret> 발화 (turn5 첫 프레임)
    21.29s  agent 발화 시작: <ret> 정말 날카로운 관찰이세요, 프랑스와 남아프리카를 연결하시네요. 위그노, 프랑스 개신교도들이 160
    21.36s  user  발화 끝
    23.14s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.31s]: Huguenots fleeing religious persecution in France settled in South Afr
    32.65s  agent 발화 끝
