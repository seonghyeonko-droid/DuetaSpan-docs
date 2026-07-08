# v3_to_ot_11_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 혹시 오클랜드 애슬레틱스가 마지막으로 노히트 게임을 당한 게 언제였는지 아세요? 궁금해서요.
     5.03s  <ret> 발화 (turn1 첫 프레임)
     5.27s  agent 발화 시작: <ret> 아, 야구 역사에 대한 흥미로운 질문이시네요. 애슬레틱스가 마지막으로 노히트 게임을 당한 날은 2
     5.28s  user  발화 끝
     7.03s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.09s]: The Oakland Athletics were last no-hit on April 21, 2018.
    13.95s  user  발화 시작: 와, 정말 오래됐네요.
    14.04s  agent 발화 끝
    15.59s  agent 발화 시작: 정말 시간이 많이 흘렀네요. 노히트 게임은 항상 기억에 남는 경기인 것 같아요, 그렇죠?
    15.74s  user  발화 끝
    20.45s  agent 발화 끝
    21.83s  user  발화 시작: 그때 홈 경기였나요, 아니면 원정 경기였나요?
    24.38s  <ret> 발화 (turn5 첫 프레임)
    24.54s  agent 발화 시작: <ret> 좋은 질문이세요. 그 노히트 게임은 오클랜드-알라메다 카운티 콜리세움에서 열렸답니다.
    24.60s  user  발화 끝
    26.38s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.86s]: The game on April 21, 2018, was played at the Oakland-Alameda County C
    30.32s  agent 발화 끝
    31.80s  user  발화 시작: 네, 알겠습니다. 정보 감사합니다.
    34.20s  user  발화 끝
