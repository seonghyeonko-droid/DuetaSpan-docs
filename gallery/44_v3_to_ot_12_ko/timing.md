# v3_to_ot_12_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 마침 궁금했는데요, 마이클 잭슨의 “Beat It” 기타 솔로를 실제로 연주한 사람은 누구였나요? 정말 상징
     6.44s  <ret> 발화 (turn1 첫 프레임)
     6.81s  user  발화 끝
     6.83s  agent 발화 시작: <ret> 네, 정말 많은 분들이 궁금해하시는 질문이에요. 에디 반 헤일런이 그 유명한 기타 솔로를 연주한 
     8.04s  ⚡SPAN 주입 [d'=1.60s / d_lead=2.71s]: Eddie Van Halen performed the guitar solo on Michael Jackson’s “Beat I
     9.84s  user  발화 시작: 예.
    10.24s  user  발화 끝
    13.54s  user  발화 시작: 와, 저는 항상 다른 사람이라고 생각했어요. 마이클 잭슨이 그에게 특별히 부탁했나요, 아니면 어떻게 그렇게 
    13.60s  agent 발화 끝
    20.13s  agent 발화 시작: 사실 퀸시 존스의 꽤 의도적인 선택이었어요. 반 헤일런의 스타일이 곡에 독특한 무언가를 가져다줄 거라고 생각
    20.21s  user  발화 끝
    22.71s  user  발화 시작: 네.
    23.34s  user  발화 끝
    28.34s  agent 발화 끝
    29.84s  user  발화 시작: 그렇군요. 거실을 다시 꾸미고 있는데… [다른 사람에게] …네, 파란색이 너무 과한 것 같아요, 그렇지 않나
    36.29s  user  발화 시작: 죄송해요. 아, 맞다, 퀸시 존스와 에디 반 헤일런이었죠.
    36.47s  user  발화 끝
    39.48s  user  발화 끝
    39.66s  <ret> 발화 (turn8 첫 프레임)
    39.82s  agent 발화 시작: <ret> 다시 그 음악적 협업으로 돌아가 볼까요. 존스는 처음에는 반 헤일런이 곡에 참여하는 데 동의할지 
    40.70s  ⚡SPAN 주입 [d'=1.04s / d_lead=2.44s]: Quincy Jones initially hesitated to ask Van Halen, fearing he would de
    45.24s  user  발화 시작: 예.
    45.73s  user  발화 끝
    49.19s  agent 발화 끝
    49.27s  user  발화 시작: 정말 그렇네요! 에디 반 헤일런이 솔로에 대한 비용을 마이클 잭슨에게 청구했나요, 아니면 호의였나요?
    54.67s  <ret> 발화 (turn11 첫 프레임)
    54.91s  agent 발화 시작: <ret> 그것은 합당한 문의입니다. 에디 반 헤일런은 기꺼이 재능을 기부하며 어떠한 대가도 받지 않았습니다
    55.06s  user  발화 끝
    55.71s  ⚡SPAN 주입 [d'=1.04s / d_lead=3.29s]: Van Halen did not ask for or receive a royalty or fee for his work on 
    61.02s  agent 발화 끝
