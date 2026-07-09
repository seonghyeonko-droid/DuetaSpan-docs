# v3_to_ot_11_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 혹시 오클랜드 애슬레틱스가 마지막으로 노히트 게임을 당한 게 언제였는지 아시나요?
     4.77s  <ret> 발화 (turn1 첫 프레임)
     5.00s  user  발화 끝
     5.01s  agent 발화 시작: <ret> 정말 재미있는 질문이네요. 야구 역사에 대한 내용인데요, 애슬레틱스를 상대로 한 마지막 노히터는 
     6.77s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.76s]: <The last time the Oakland Athletics were no-hit was April 21, 2018.>
    14.24s  agent 발화 끝
    14.30s  user  발화 시작: 와, 꽤 오래됐네요. 누가 던졌어요?
    16.68s  <ret> 발화 (turn3 첫 프레임)
    16.92s  agent 발화 시작: <ret> 알아봐 드릴게요.
    17.16s  user  발화 끝
    17.18s  ⚡SPAN 주입 [d'=0.50s / d_lead=1.00s]: <James Paxton of the Seattle Mariners pitched a no-hitter against the 
    17.92s  agent 발화 끝
    17.92s  agent 발화 시작: 제임스 팩스턴 선수가 시애틀 매리너스 소속으로 애슬레틱스를 상대로 그 노히터를 기록했어요.
    19.93s  user  발화 시작: 네.
    20.55s  user  발화 끝
    23.61s  agent 발화 끝
    24.87s  user  발화 시작: 그 경기가 팽팽했나요, 아니면 완전히 막았나요?
    27.51s  agent 발화 시작: 음…
    27.53s  <ret> 발화 (turn8 첫 프레임)
    27.59s  user  발화 끝
    27.85s  agent 발화 시작: <ret> 매리너스가 5대 0으로 이겼고, 팩스턴 선수는 7개의 삼진과 2개의 볼넷을 기록했어요.
    28.05s  agent 발화 끝
    29.29s  ⚡SPAN 주입 [d'=1.76s / d_lead=6.26s]: <The Mariners won the game 5-0, with Paxton striking out seven and wal
    34.10s  agent 발화 끝
    34.27s  user  발화 시작: 흥미롭네요. 그럼 꽤 압도적인 경기였던 거군요.
    37.32s  user  발화 끝
