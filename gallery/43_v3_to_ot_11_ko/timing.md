# v3_to_ot_11_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 혹시 오클랜드 애슬레틱스가 마지막으로 노히트 게임을 당한 게 언제였는지 궁금해서요. 정말 오래된 것 같아요.
     6.18s  <ret> 발화 (turn1 첫 프레임)
     6.39s  user  발화 끝
     6.42s  agent 발화 시작: <ret> 좋은 질문이세요. 정말 답답한 경험이었죠— 애슬레틱스는 이천십팔년 사월 이십일이 마지막으로 노히트
     8.18s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.87s]: The last time the Oakland Athletics were no-hit was April 21, 2018.
    14.34s  agent 발화 끝
    14.40s  user  발화 시작: 와, 정말 오래됐네요. 누가 던졌어요?
    17.19s  agent 발화 시작: 보스턴 레드삭스 소속 세 명의 투수가 함께 노히트 게임을 만들었습니다—크리스 세일, 헥터 벨라스케스, 그리고
    17.36s  user  발화 끝
    20.02s  user  발화 시작: 네.
    20.65s  user  발화 끝
    25.07s  <ret> 발화 (turn5 첫 프레임)
    25.30s  agent 발화 끝
    25.31s  agent 발화 시작: <ret> 경기를 생각하면— 크리스 세일 선수는 7이닝 동안 안타를 허용하지 않고, 열두 명의 타자를 삼진으
    26.51s  ⚡SPAN 주입 [d'=1.44s / d_lead=2.70s]: Chris Sale pitched seven innings, allowing zero hits and striking out 
    33.42s  agent 발화 끝
    34.69s  user  발화 시작: 그런데 퍼펙트 게임이었나요, 아니면 볼넷을 준 적이 있었나요?
    38.27s  agent 발화 시작: 퍼펙트 게임은 아니었습니다. 레드삭스 선수들은 두 명의 타자에게 볼넷을 주고, 한 명을 몸에 맞혔습니다.
    38.39s  user  발화 끝
    45.22s  agent 발화 끝
    46.31s  user  발화 시작: 요즘 커피 가격이 얼마나 비싼지 믿을 수가 없네요.
    49.07s  user  발화 시작: 그러면 볼넷과 몸에 맞은 타자가 있어서 완전한 노히트 게임은 아니었던 거군요? 확인해 보고 싶어서요.
    49.27s  user  발화 끝
    54.72s  user  발화 끝
