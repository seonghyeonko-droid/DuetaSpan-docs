# v3_to_ot_12_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 마이클 잭슨의 “Beat It” 기타 솔로를 누가 연주했는지 아세요? 정말… 명곡이에요.
     4.39s  <ret> 발화 (turn1 첫 프레임)
     4.72s  user  발화 끝
     4.79s  agent 발화 시작: <ret> 아주 인기 있는 질문이네요. 그 유명한 기타 솔로는 에디 반 헤일런이 연주했어요.
     5.99s  ⚡SPAN 주입 [d'=1.60s / d_lead=2.94s]: Eddie Van Halen performed the guitar solo on Michael Jackson’s “Beat I
     9.83s  agent 발화 끝
     9.84s  user  발화 시작: 와, 저는 항상 다른 사람이라고 생각했어요! 음… 마이클 잭슨의 평소 기타리스트 같지 않아서 그랬던 것 같아
    16.00s  agent 발화 시작: 많은 분들이 그렇게 생각하시더라고요. 독특한 협업이었어요.
    16.19s  user  발화 끝
    19.23s  agent 발화 끝
    20.73s  user  발화 시작: 저기, 닭고기를 냉동고에서 꺼냈었는지 기억하세요?
    23.55s  user  발화 시작: 죄송해요. 그런데 에디 반 헤일런이 그 전에 마이클 잭슨의 팬이었나요?
    23.73s  user  발화 끝
    27.63s  user  발화 끝
    27.70s  <ret> 발화 (turn6 첫 프레임)
    27.86s  agent 발화 시작: <ret> 스타일이 달라서 그런지 좋은 질문이네요. 에디 반 헤일런은 처음에는 망설였지만, 마이클 잭슨이 직
    29.46s  ⚡SPAN 주입 [d'=1.76s / d_lead=4.54s]: Van Halen was initially reluctant, but Jackson visited him and won him
    36.94s  agent 발화 끝
    37.10s  user  발화 시작: 정말 대단하네요! [laugh] 마이클 잭슨이 방문하면 누구든 설득할 수 있을 것 같아요.
    43.08s  user  발화 끝
