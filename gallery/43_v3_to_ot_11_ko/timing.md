# v3_to_ot_11_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 혹시 오클랜드 애슬레틱스가 마지막으로 노히트를 당한 경기가 언제였는지 아시나요?
     4.48s  <ret> 발화 (turn1 첫 프레임)
     4.72s  user  발화 끝
     4.72s  agent 발화 시작: <ret> 네, 좋은 야구 질문이세요. 알아봐 드릴 수 있습니다. 오클랜드 애슬레틱스는 이천십팔년 사월 이십
     6.48s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.15s]: <The last time the Oakland Athletics were no-hit was April 21, 2018.>
    14.04s  agent 발화 끝
    14.09s  user  발화 시작: 와, 꽤 오래됐네요.
    15.37s  agent 발화 시작: 정말 그랬네요. 투수진이 그동안 잘했다는 증거인 것 같습니다. 그런 기록은 언제나 흥미로운 것 같아요.
    15.51s  user  발화 끝
    21.11s  agent 발화 끝
    22.52s  user  발화 시작: 그때 애슬레틱스를 상대로 노히터를 던진 투수가 누구였는지 아시나요?
    26.47s  <ret> 발화 (turn5 첫 프레임)
    26.71s  agent 발화 시작: <ret> 아주 좋은 질문이세요. 알아봐 드릴게요. 제임스 팩스턴 선수가 이천십팔년 오월 팔일에 애슬레틱스를
    26.83s  user  발화 끝
    28.47s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.88s]: <James Paxton pitched a no-hitter against the Oakland Athletics on May
    34.73s  agent 발화 끝
    36.20s  user  발화 시작: 강아지가 얼마나 크게 짖는지 믿을 수가 없네요.
    38.77s  user  발화 시작: 그렇다면, 마지막으로 노히트를 당한 지 얼마 안 됐었네요?
    38.88s  user  발화 끝
    42.33s  user  발화 끝
