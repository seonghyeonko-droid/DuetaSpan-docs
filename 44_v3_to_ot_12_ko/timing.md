# v3_to_ot_12_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 마이클 잭슨의 "Beat It" 기타 솔로를 누가 연주했는지 아세요?
     3.06s  <ret> 발화 (turn1 첫 프레임)
     3.46s  agent 발화 시작: <ret> 네, 정말 많은 분들이 궁금해하시는 질문이에요. 그 유명한 기타 솔로는 에디 반 헤일런이 연주했답
     3.56s  user  발화 끝
     5.06s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.24s]: Eddie Van Halen performed the guitar solo on Michael Jackson’s “Beat I
     6.38s  user  발화 시작: 예.
     6.88s  user  발화 끝
     9.95s  agent 발화 끝
     9.97s  user  발화 시작: 와, 저는 항상 다른 사람이라고 생각했어요! 음… 그의 평소 스타일과는 좀 다른 것 같아서요.
    16.30s  agent 발화 시작: 많은 분들이 반 헤일런 특유의 사운드를 고려했을 때 그 협업에 놀라시는 것 같아요.
    16.45s  user  발화 끝
    17.84s  user  발화 시작: 네.
    18.33s  user  발화 끝
    21.30s  agent 발화 끝
    22.80s  user  발화 시작: 저기, 혹시 쓰레기 버리셨어요?
    24.85s  user  발화 시작: 죄송해요. 그가 좀 다르게 연주하도록 특별히 요청을 받았을까요?
    25.02s  user  발화 끝
    28.73s  user  발화 끝
    28.82s  <ret> 발화 (turn8 첫 프레임)
    28.97s  agent 발화 시작: <ret> 상황을 생각하면 충분히 그렇게 생각하실 수 있어요. 반 헤일런은 솔로를 따로 녹음했고, 잭슨은 그
    30.18s  ⚡SPAN 주입 [d'=1.36s / d_lead=3.52s]: Van Halen recorded his guitar solo separately and Jackson did not dire
    33.57s  user  발화 시작: 예.
    33.92s  user  발화 끝
    36.90s  agent 발화 끝
    36.99s  user  발화 시작: 정말 놀랍네요! 완전히 그의 예술적인 선택이었군요. [happy]
    41.01s  user  발화 끝
