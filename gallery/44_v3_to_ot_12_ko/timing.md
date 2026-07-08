# v3_to_ot_12_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 저, 마이클 잭슨의 “Beat It” 기타 솔로를 누가 연주했는지 궁금했거든요. 항상 뭔가 색다른 느낌이었어
     6.05s  <ret> 발화 (turn1 첫 프레임)
     6.45s  agent 발화 시작: <ret> 아, 정말 좋은 질문이세요. 꽤 복잡한 이야기인데, 에디 반 헤일런이 그 유명한 기타 솔로를 연주
     6.49s  user  발화 끝
     8.05s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.43s]: Eddie Van Halen performed the guitar solo on Michael Jackson’s “Beat I
    14.31s  user  발화 시작: 와, 진짜요? 반 헤일런이요? 잭슨 밴드 멤버 중 누군가인 줄 알았어요.
    14.33s  agent 발화 끝
    18.70s  agent 발화 시작: 사실 잭슨이 그분을 섭외하는 건 굉장한 일이었습니다. 반 헤일런은 처음에는 망설였다고 하네요.
    18.89s  user  발화 끝
    23.88s  agent 발화 끝
    25.41s  user  발화 시작: 정말 놀랍네요. 거의 안 하실 뻔했다니 몰랐어요. [다른 사람에게] 저기요, 혹시 재활용 쓰레기 버리셨어요?
    32.21s  user  발화 시작: 진짜, 너무 넘쳐나고 있어요!
    32.36s  user  발화 끝
    34.67s  user  발화 시작: 죄송해요. 다시 노래 이야기로 돌아가서—
    34.94s  user  발화 끝
    36.88s  <ret> 발화 (turn7 첫 프레임)
    37.02s  user  발화 끝
    37.28s  agent 발화 시작: <ret> 제가 말씀드리는 대로, 상황은 이랬는데요. 그는 공짜로 솔로를 녹음했지만, 자신의 이름을 크레딧에
    38.00s  ⚡SPAN 주입 [d'=1.12s / d_lead=3.21s]: Van Halen recorded his guitar solo for free, but insisted on not being
    47.99s  agent 발화 끝
    48.12s  user  발화 시작: 정말 이상하네요. 왜 크레딧을 원하지 않았을까요?
    51.07s  user  발화 끝
    51.18s  agent 발화 시작: 자신이 “고용된” 기타리스트처럼 보일까 봐, 자신의 예술적 명성에 해를 끼칠까 봐 그랬다고 합니다.
    57.16s  agent 발화 끝
