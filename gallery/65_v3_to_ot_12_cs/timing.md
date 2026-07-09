# v3_to_ot_12_cs — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 혹시 마이클 잭슨의 “Beat It” 기타 솔로를 실제로 연주한 사람이 누구인지 궁금했어요. 정말 상징적인 
     7.26s  <ret> 발화 (turn1 첫 프레임)
     7.66s  agent 발화 시작: <ret> 네, 정말 많은 분들이 궁금해하시는 질문이에요. 그 유명한 기타 솔로는 에디 반 헤일런이 연주했답
     7.69s  user  발화 끝
     8.54s  ⚡SPAN 주입 [d'=1.28s / d_lead=3.10s]: Eddie Van Halen performed the guitar solo on Michael Jackson’s “Beat I
    10.84s  user  발화 시작: 예.
    11.47s  user  발화 끝
    14.89s  agent 발화 끝
    14.90s  user  발화 시작: 와, 저는 항상 다른 사람이라고 생각했어요. 마이클 잭슨이 특별히 그에게 부탁했나요, 아니면 어떻게 그렇게 
    22.61s  agent 발화 시작: 사실 퀸시 존스의 꽤 의도적인 선택이었어요. 반 헤일런의 스타일이 곡에 독특한 무언가를 가져다줄 거라고 생각
    22.88s  user  발화 끝
    25.09s  user  발화 시작: 네.
    25.50s  user  발화 끝
    30.45s  user  발화 시작: 그렇군요. 거실을 다시 꾸미고 있는데… [다른 사람에게] …파란색이 너무 과한 것 같아요, 그렇지 않나요?
    30.68s  agent 발화 끝
    37.95s  user  발화 시작: 죄송해요. 아, 맞다, 퀸시 존스와 에디 반 헤일런이었죠.
    38.09s  user  발화 끝
    41.44s  <ret> 발화 (turn8 첫 프레임)
    41.66s  agent 발화 시작: <ret> 다시 그 음악적 협업으로 돌아가 볼까요. 존스는 처음에 반 헤일런이 곡에 참여하는 데 동의할지 확
    41.93s  user  발화 끝
    42.88s  ⚡SPAN 주입 [d'=1.44s / d_lead=2.68s]: Quincy Jones initially hesitated to ask Van Halen, fearing he would de
    47.30s  user  발화 시작: 예.
    47.79s  user  발화 끝
    51.49s  agent 발화 끝
    51.94s  user  발화 시작: 정말 그러네요! 에디 반 헤일런이 마이클 잭슨에게 솔로 연주 비용을 받았나요, 아니면 호의였나요?
    58.71s  <ret> 발화 (turn11 첫 프레임)
    58.91s  agent 발화 시작: <ret> 그것은 합당한 질문이에요. 에디 반 헤일런은 기꺼이 자신의 재능을 기꺼이 보답 없이 기여했답니다.
    59.08s  user  발화 끝
    60.55s  ⚡SPAN 주입 [d'=1.84s / d_lead=3.49s]: Van Halen did not ask for or receive a royalty or fee for his work on 
    65.39s  agent 발화 끝
