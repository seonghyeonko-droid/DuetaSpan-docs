# v3_to_ot_12_cs — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 마이클 잭슨의 “Beat It” 기타 솔로를 누가 연주했는지 아세요? 정말 멋진 솔로예요.
     5.00s  <ret> 발화 (turn1 첫 프레임)
     5.40s  agent 발화 시작: <ret> 네, 정말 많은 분들이 궁금해하시는 질문이에요. 그 유명한 기타 솔로는 에디 반 헤일런이 연주하셨
     5.46s  user  발화 끝
     6.68s  ⚡SPAN 주입 [d'=1.68s / d_lead=3.92s]: Eddie Van Halen performed the guitar solo on Michael Jackson’s “Beat I
     8.86s  user  발화 시작: 예.
     9.39s  user  발화 끝
    13.23s  user  발화 시작: 와, 저는 항상 다른 사람이라고 생각했어요! 음… 그 솔로는 그의 평소 스타일과는 좀 다른 것 같아요.
    13.23s  agent 발화 끝
    20.40s  agent 발화 시작: 네, 많은 분들이 반 헤일런의 독특한 사운드를 고려했을 때 그 협업에 놀라시는 것 같아요.
    20.65s  user  발화 끝
    22.20s  user  발화 시작: 네.
    22.83s  user  발화 끝
    26.13s  user  발화 시작: 저기, 혹시 쓰레기 버리셨어요?
    26.33s  agent 발화 끝
    28.73s  user  발화 시작: 죄송해요. 그가 솔로를 다르게 만들도록 특별히 요청을 받았다고 생각하세요?
    28.85s  user  발화 끝
    33.14s  <ret> 발화 (turn8 첫 프레임)
    33.37s  agent 발화 시작: <ret> 상황을 고려했을 때, 충분히 궁금하실 만한 질문입니다. 반 헤일런은 솔로를 독립적으로 녹음했고, 
    33.67s  user  발화 끝
    35.06s  ⚡SPAN 주입 [d'=1.92s / d_lead=4.37s]: Van Halen recorded his guitar solo separately and Jackson did not dire
    38.96s  user  발화 시작: 예.
    39.54s  user  발화 끝
    43.20s  agent 발화 끝
    43.47s  user  발화 시작: 정말 놀랍네요! 완전히 그의 예술적인 선택이었군요. [happy]
    47.44s  user  발화 끝
