# v3_rag_25_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 잭 소크 선수랑 라파엘라 레지 선수 둘 다 무슨 스포츠를 했는지 궁금했어요.
     4.67s  user  발화 끝
     4.72s  agent 발화 시작: 좋은 질문을 하셨네요, 두 분 다 훌륭한 선수시잖아요.
     8.14s  <ret> 발화 (turn2 첫 프레임)
     8.45s  agent 발화 시작: <ret> 기억이 맞다면… 잭 소크 선수랑 라파엘라 레지 선수 둘 다 프로 테니스 선수예요.
     8.51s  agent 발화 끝
     9.82s  ⚡SPAN 주입 [d'=1.68s / d_lead=2.84s]: Jack Sock and Raffaella Reggi are both professional tennis players.
    14.57s  user  발화 시작: 테니스군요? 혹시 잭 소크 선수는 야구도 한 적이 있는 줄 알았어요.
    14.61s  agent 발화 끝
    19.15s  user  발화 끝
    19.56s  agent 발화 시작: 선수들이 종종 다른 종목으로 전향하기도 하니까 그렇게 생각하실 수도 있겠네요.
    24.07s  user  발화 시작: 그런데 레지 선수에 대해서는 들어본 적이 없어요. 뭘 우승했나요?
    24.84s  agent 발화 끝
    27.75s  <ret> 발화 (turn6 첫 프레임)
    28.14s  user  발화 끝
    28.15s  agent 발화 시작: <ret> 물론 선수마다 인지도가 다른 건 사실인데요… 라파엘라 레지 선수는 ITF 회로에서 단식 7개, 복
    29.75s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.38s]: Raffaella Reggi won seven singles and sixteen doubles titles on the IT
    38.28s  user  발화 시작: ITF 회로요? 테니스 마이너 리그 같은 건가요?
    38.31s  agent 발화 끝
    41.61s  user  발화 끝
    41.63s  agent 발화 시작: 실력 향상을 위한 개발 리그라고 생각하시면 될 것 같아요.
    45.10s  <ret> 발화 (turn9 첫 프레임)
    45.50s  agent 발화 시작: <ret> 많은 선수들이 실력을 갈고닦는 곳인데요… ITF 월드 테니스 투어는 ATP 투어와 WTA 투어 다
    45.56s  agent 발화 끝
    47.10s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.88s]: The ITF World Tennis Tour is the highest-level professional tennis tou
    55.47s  agent 발화 끝
