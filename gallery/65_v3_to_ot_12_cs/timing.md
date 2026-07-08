# v3_to_ot_12_cs — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 마이클 잭슨의 “Beat It” 기타 솔로를 누가 연주했는지 아세요? 정말… 명곡이에요.
     5.45s  <ret> 발화 (turn1 첫 프레임)
     5.83s  agent 발화 시작: <ret> 그 질문은 정말 많이 받아요. 기타 솔로는 에디 반 헤일런이 연주했어요.
     5.89s  user  발화 끝
     6.73s  ⚡SPAN 주입 [d'=1.28s / d_lead=3.09s]: Eddie Van Halen performed the guitar solo on Michael Jackson’s “Beat I
    10.68s  agent 발화 끝
    11.15s  user  발화 시작: 와, 저는 항상 다른 사람이라고 생각했어요! 음… 마이클 잭슨의 평소 기타리스트 같지 않아서요.
    17.97s  agent 발화 시작: 많은 분들이 그렇게 생각하시더라고요. 독특한 협업이었어요.
    18.10s  user  발화 끝
    21.23s  user  발화 시작: 저기, 혹시 냉동고에서 닭고기를 꺼내 놓으셨어요?
    21.30s  agent 발화 끝
    24.83s  user  발화 시작: 죄송해요. 그런데 에디 반 헤일런이 그 전에 마이클 잭슨의 팬이었나요?
    24.92s  user  발화 끝
    29.28s  <ret> 발화 (turn6 첫 프레임)
    29.51s  agent 발화 시작: <ret> 두 분의 스타일을 생각하면 좋은 질문이에요. 에디 반 헤일런은 처음에는 망설였지만, 마이클 잭슨이
    29.74s  user  발화 끝
    31.20s  ⚡SPAN 주입 [d'=1.92s / d_lead=4.02s]: Van Halen was initially reluctant, but Jackson visited him and won him
    37.73s  user  발화 시작: 정말 대단하네요! [laugh] 마이클 잭슨이 방문하면 누구든 설득할 수 있을 것 같아요.
    38.04s  agent 발화 끝
    44.31s  user  발화 끝
