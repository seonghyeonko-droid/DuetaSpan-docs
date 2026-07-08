# v3_to_ot_12_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 저도 궁금했거든요, 마이클 잭슨의 “Beat It” 기타 솔로를 실제로 연주한 사람이 누구인지요. 계속 마음
     6.34s  <ret> 발화 (turn1 첫 프레임)
     6.73s  agent 발화 시작: <ret> 네, 많은 분들이 궁금해하시는 질문이에요. 에디 반 헤일런이 그 상징적인 기타 솔로를 연주한 것으
     6.76s  user  발화 끝
     7.46s  ⚡SPAN 주입 [d'=1.12s / d_lead=2.11s]: Eddie Van Halen performed the guitar solo on Michael Jackson’s “Beat I
    13.49s  user  발화 시작: 와, 정말인가요? 잭슨의 정규 밴드 멤버 중 한 명일 거라고 생각했어요.
    13.49s  agent 발화 끝
    17.55s  agent 발화 시작: 잭슨이 그 곡에 반 헤일런을 섭외한 건 굉장한 성공이었어요. 이미 떠오르는 스타였으니까요.
    17.75s  user  발화 끝
    22.73s  agent 발화 끝
    24.27s  user  발화 시작: 저기, 혹시 쓰레기 버리셨어요?
    26.19s  user  발화 시작: 죄송해요. 그런데 반 헤일런이 잭슨과 함께 작업하는 걸 망설였는지 궁금해요. 그런 이야기가 있더라고요.
    26.34s  user  발화 끝
    31.98s  user  발화 끝
    32.15s  <ret> 발화 (turn6 첫 프레임)
    32.31s  agent 발화 시작: <ret> 네, 처음에는 약간의 망설임이 있었어요. 반 헤일런은 처음에는 “Beat It”에 기여한 것에 대
    33.27s  ⚡SPAN 주입 [d'=1.12s / d_lead=2.91s]: Eddie Van Halen initially refused payment for his work on “Beat It”.
    42.00s  agent 발화 끝
    42.20s  user  발화 시작: 정말 멋지네요. 왜 돈을 받고 싶어하지 않았는지 설명한 적이 있나요?
    46.35s  agent 발화 시작: 그건 재미있는 프로젝트였고, 잭슨이 록 기타리스트와 협업하려는 의지가 존경스러웠다고 생각했대요.
    46.36s  user  발화 끝
    52.70s  agent 발화 끝
