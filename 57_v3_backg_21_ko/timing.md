# v3_backg_21_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 어머, 그럼 *My Fair Lady*에서 오드리 역할을 누가 불렀어요? 늘 줄리 앤드류스가 불렀다고 생각했
     8.29s  agent 발화 시작: 아, 흔히 오해하시는 부분이에요. 줄리 앤드류스는 영화에 출연하긴 했지만, 노래는 부르지 않았어요.
     8.29s  user  발화 끝
    15.40s  agent 발화 시작: <ret> 맞아요. 마르니 닉슨이 오드리 햅번 대신 *My Fair Lady*에서 노래를 불렀어요. 햅번은 
    15.40s  <ret> 발화 (turn2 첫 프레임)
    15.40s  agent 발화 끝
    15.48s  ⚡SPAN 주입 [d'=0.08s / d_lead=1.18s]: Marni Nixon provided the singing voice for Audrey Hepburn in the 1964 
    27.25s  user  발화 시작: 와, 진짜요? 제가— 그러니까, 놀랍네요. 노래할 줄 알았는데!
    27.25s  agent 발화 끝
    31.99s  agent 발화 시작: 외모에 속을 수도 있죠. 그때는 꽤 흔한 방식이었어요.
    31.99s  user  발화 끝
    36.72s  agent 발화 시작: <ret> 네, 그렇습니다. 마르니 닉슨은 *The King and I*의 데보라 커와 *West Side 
    36.72s  <ret> 발화 (turn5 첫 프레임)
    36.72s  agent 발화 끝
    37.20s  ⚡SPAN 주입 [d'=0.48s / d_lead=0.59s]: Marni Nixon also dubbed Deborah Kerr's singing voice in *The King and 
    48.57s  user  발화 시작: 그럼 전문 가수였던 거군요? 그냥 스튜디오에서 트릭을 부린 게 아니고요?
    48.57s  agent 발화 끝
    54.49s  agent 발화 시작: 맞아요, 완전한 프로였어요. 아주 뛰어난 가수였죠. 음역대가 정말 넓었어요.
    54.49s  user  발화 끝
    59.83s  agent 발화 시작: <ret> 훌륭한 예술가였죠. 마르니 닉슨은 클래식 소프라노 훈련을 받았고 로버트 쇼 코랄과 함께 공연했어요
    59.83s  <ret> 발화 (turn8 첫 프레임)
    59.83s  agent 발화 끝
    60.83s  ⚡SPAN 주입 [d'=1.00s / d_lead=1.78s]: Nixon was a classically trained soprano and a member of the Robert Sha
    72.27s  user  발화 시작: 흥미롭네요. 쇼 코랄에 대해선 몰랐어요. [sigh]
    72.27s  agent 발화 끝
    75.82s  agent 발화 시작: 아주 명성이 높은 그룹이에요. 정밀함과 아름다운 소리로 유명했죠.
    75.82s  user  발화 끝
    80.56s  user  발화 시작: 실제로 항공에서 필요한 정밀함이 생각나네요… 모든 게 완벽해야 하거든요.
    80.56s  agent 발화 끝
    85.89s  agent 발화 시작: 정말 적절한 비유네요. 조종석과 합창단 모두 한 음이 틀리거나 설정 하나가 잘못되면 모든 게 망가질 수 있거
    85.89s  user  발화 끝
    95.96s  agent 발화 시작: <ret> 참 흥미로운 경우네요. *My Fair Lady*는 1965년에 아카데미 상을 8개 받았지만, 마
    95.96s  <ret> 발화 (turn13 첫 프레임)
    95.96s  agent 발화 끝
    96.96s  ⚡SPAN 주입 [d'=1.00s / d_lead=1.78s]: *My Fair Lady* won eight Academy Awards in 1965, but Marni Nixon was n
   107.81s  user  발화 시작: 그건… 조금 불공평한 것 같네요.
   107.81s  agent 발화 끝
   110.77s  agent 발화 시작: 그렇게 보일 수도 있어요. 가수들은 종종 그들이 받아야 할 인정을 받지 못해요.
   110.77s  user  발화 끝
   117.87s  user  발화 시작: 쓰레기 버린 거 기억해요?
   117.87s  agent 발화 끝
   120.24s  agent 발화 시작: 때로는 인생의 조연들이 간과되는 것 같아요. 안타까운 일이죠.
   120.24s  user  발화 끝
   124.98s  agent 발화 시작: <ret> 정말 대단한 경력이었죠. 마르니 닉슨은 2016년에 89세의 나이로 세상을 떠났어요. 길고 영향력
   124.98s  <ret> 발화 (turn18 첫 프레임)
   124.98s  agent 발화 끝
   125.98s  ⚡SPAN 주입 [d'=1.00s / d_lead=1.78s]: Marni Nixon passed away in 2016 at the age of eighty-nine.
   133.87s  user  발화 시작: 89세… 정말 오래 사셨네요. *My Fair Lady*에 대해 자주 이야기하셨어요?
   133.87s  agent 발화 끝
   139.79s  agent 발화 시작: 나중에는 그랬어요. 처음에는 그 이야기에 대해 이야기하는 것을 꺼렸어요.
   139.79s  user  발화 끝
   145.12s  agent 발화 시작: <ret> 복잡한 감정을 가지고 있었어요. 마르니 닉슨은 *My Fair Lady*에서의 자신의 공로를 인정
   145.12s  <ret> 발화 (turn21 첫 프레임)
   145.12s  agent 발화 끝
   146.12s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.37s]: Nixon initially resented being uncredited for her work on *My Fair Lad
   158.75s  user  발화 시작: 그럴 만하죠. 답답했을 것 같아요.
   158.75s  agent 발화 끝
   161.71s  agent 발화 시작: 그랬을 거예요. 장거리 비행의 부기장과 같은 것 같아요—필수적이지만, 선장이 영광을 받죠.
   161.71s  user  발화 끝
   168.22s  user  발화 시작: [chuckle] 좋은 비유네요. 그럼 그 후에는 뭘 하셨어요?
   168.22s  agent 발화 끝
   172.96s  agent 발화 시작: 오랫동안 가수와 보컬 코치로 활동했어요. 아주 생산적인 경력이었죠.
   172.96s  user  발화 끝
   177.70s  agent 발화 시작: <ret> 다재다능했어요. 마르니 닉슨은 플라시도 도밍고를 포함한 가수들을 코칭했어요. 자신의 지식을 다음 
   177.70s  <ret> 발화 (turn26 첫 프레임)
   177.70s  agent 발화 끝
   178.70s  ⚡SPAN 주입 [d'=1.00s / d_lead=1.78s]: Marni Nixon also worked as a vocal coach for several prominent singers
   185.40s  agent 발화 끝
