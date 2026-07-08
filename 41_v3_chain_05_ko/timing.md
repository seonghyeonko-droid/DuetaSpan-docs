# v3_chain_05_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 프랭크 마르티네즈 님께 위치 공유를 하고 싶어요.
     2.61s  <ret> 발화 (turn1 첫 프레임)
     3.09s  ⚡SPAN 주입 [d'=0.48s / d_lead=0.52s]: (tool result) Location sharing request sent to Frank Martinez.
     3.21s  agent 발화 시작: <ret> 네, 프랭크 마르티네즈 님께 위치 공유 요청을 보냈습니다.
     3.24s  user  발화 끝
     7.33s  agent 발화 끝
     7.54s  user  발화 시작: 아, 좋아요. 그게 얼마나 오래 지속되나요?
     9.46s  <ret> 발화 (turn3 첫 프레임)
    10.03s  ⚡SPAN 주입 [d'=0.56s / d_lead=1.98s]: (tool result) Location sharing will expire in one hour.
    10.06s  agent 발화 시작: <ret> 음, 좋은 질문이에요. 프랭크 마르티네즈 님과의 위치 공유는 한 시간 후에 만료될 거예요.
    10.12s  user  발화 끝
    16.50s  agent 발화 끝
    17.24s  user  발화 시작: 알겠습니다, 네 시간으로 늘릴 수 있을까요?
    19.14s  <ret> 발화 (turn5 첫 프레임)
    19.38s  ⚡SPAN 주입 [d'=0.24s / d_lead=0.52s]: (tool result) Location sharing duration extended to four hours.
    19.74s  agent 발화 시작: <ret> 맞아요. 프랭크 마르티네즈 님과의 위치 공유 시간을 네 시간으로 늘렸습니다.
    19.81s  user  발화 끝
    24.80s  user  발화 시작: 완벽해요, 감사합니다!
    24.92s  agent 발화 끝
    26.25s  agent 발화 시작: 별말씀을요. 특히 숨겨진 올멕 유물을 발견하는 것처럼 탐험할 때는 항상 연결되어 있는 것이 좋죠!
    26.28s  user  발화 끝
    34.03s  agent 발화 끝
