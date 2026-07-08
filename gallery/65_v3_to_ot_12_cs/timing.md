# v3_to_ot_12_cs — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 마이클 잭슨의 “Beat It” 기타 솔로를 누가 연주했는지 궁금했거든요. 뭔가 좀 독특한 느낌이 들어서요.
     6.23s  <ret> 발화 (turn1 첫 프레임)
     6.63s  agent 발화 시작: <ret> 아, 정말 좋은 질문이세요. 꽤 복잡한 이야기인데요— 에디 반 헤일런이 그 유명한 기타 솔로를 연
     6.72s  user  발화 끝
     8.23s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.11s]: Eddie Van Halen performed the guitar solo on Michael Jackson’s “Beat I
    15.71s  agent 발화 끝
    16.22s  user  발화 시작: 와, 진짜요? 반 헤일런이요? 잭슨 밴드 멤버 중 누군가인 줄 알았어요.
    22.10s  agent 발화 시작: 잭슨이 그분을 섭외한 건 정말 대단한 일이었어요. 반 헤일런은 처음에는 망설였다고 하네요.
    22.25s  user  발화 끝
    28.61s  user  발화 시작: 정말 놀랍네요. 거의 안 하실 뻔했다니 몰랐어요. [다른 사람에게] 저기, 혹시 재활용 쓰레기 버리셨어요?
    28.63s  agent 발화 끝
    36.32s  user  발화 시작: 진짜, 너무 넘쳐 흐르잖아요!
    36.39s  user  발화 끝
    38.93s  user  발화 시작: 죄송해요. 다시 노래 이야기로 돌아가서—
    38.95s  user  발화 끝
    42.02s  <ret> 발화 (turn7 첫 프레임)
    42.24s  agent 발화 시작: <ret> 제가 말씀드린 것처럼, 상황은 이랬는데요— 그는 솔로를 무료로 녹음했지만, 자신의 이름을 크레딧에
    42.27s  user  발화 끝
    43.45s  ⚡SPAN 주입 [d'=1.44s / d_lead=3.09s]: Van Halen recorded his guitar solo for free, but insisted on not being
    52.53s  agent 발화 끝
    53.88s  user  발화 시작: 정말 이상하네요. 왜 크레딧을 받기 싫어했을까요?
    57.61s  agent 발화 시작: 자신이 “고용된” 기타리스트처럼 보일까 봐, 자신의 예술적 명성에 해를 끼칠까 봐 걱정했던 거예요.
    57.68s  user  발화 끝
    64.47s  agent 발화 끝
