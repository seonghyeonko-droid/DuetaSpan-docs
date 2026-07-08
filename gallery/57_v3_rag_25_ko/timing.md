# v3_rag_25_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 잭 소크 선수랑 라파엘라 레지 선수가 같은 스포츠를 했는지 궁금했어요.
     5.00s  user  발화 끝
     5.08s  agent 발화 시작: 좋은 질문이세요—선수들이 종목을 옮겨 하는 경우가 가끔 있잖아요.
     9.53s  <ret> 발화 (turn2 첫 프레임)
     9.84s  agent 발화 시작: <ret> 기록을 한번 확인해 볼까요—잭 소크 선수와 라파엘라 레지 선수 모두 프로 테니스 선수로 활동했어요
     9.94s  agent 발화 끝
    11.21s  ⚡SPAN 주입 [d'=1.68s / d_lead=2.96s]: Jack Sock and Raffaella Reggi both competed professionally in tennis.
    16.69s  user  발화 시작: 테니스군요? 혹시 소크 선수가 야구도 한 적이 있는 줄 알았어요.
    16.75s  agent 발화 끝
    21.14s  user  발화 끝
    21.52s  agent 발화 시작: [웃음] 그렇게 생각하실 수도 있겠네요— 정말 다재다능한 선수이긴 하지만, 테니스에만 집중했어요.
    27.40s  <ret> 발화 (turn5 첫 프레임)
    27.79s  agent 발화 시작: <ret> 공식 프로필을 확인해 보고 있어요—잭 소크 선수는 남자 단식 세계 랭킹 8위까지 올랐어요.
    27.96s  agent 발화 끝
    28.68s  ⚡SPAN 주입 [d'=1.28s / d_lead=2.37s]: Jack Sock is an American former professional tennis player, reaching a
    33.93s  user  발화 시작: 8위라니—정말 대단하네요! 그런데 레지 선수도 랭킹이 있었나요?
    33.95s  agent 발화 끝
    38.63s  <ret> 발화 (turn7 첫 프레임)
    38.78s  agent 발화 시작: <ret> 그녀의 업적을 찾아보고 있어요—라파엘라 레지 선수의 최고 단식 랭킹은 세계 16위였어요.
    38.88s  user  발화 끝
    40.47s  ⚡SPAN 주입 [d'=1.84s / d_lead=3.76s]: Raffaella Reggi is an Italian former professional tennis player who re
    45.68s  agent 발화 끝
    45.80s  user  발화 시작: 16위, 와우! 그럼 혹시—
    48.20s  user  발화 끝
    48.24s  agent 발화 시작: 두 분 모두 엄청난 성과를 거두셨어요—
    50.32s  user  발화 시작: 실제로 서로 경기한 적이 있긴 한가요? 프로 코트에서요?
    51.02s  agent 발화 끝
    54.28s  user  발화 끝
