# v3_to_ot_12_cs — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 마이클 잭슨의 “Beat It” 기타 솔로를 누가 연주했는지 궁금했어요. 항상 궁금했거든요.
     5.14s  <ret> 발화 (turn1 첫 프레임)
     5.53s  agent 발화 시작: <ret> 그건 정말 자주 물어보시는 질문이에요. 기타 연주는 에디 반 헤일런 씨가 담당했답니다.
     5.60s  user  발화 끝
     6.82s  ⚡SPAN 주입 [d'=1.68s / d_lead=3.57s]: Eddie Van Halen performed the guitar solo on Michael Jackson’s “Beat I
    11.65s  agent 발화 끝
    12.09s  user  발화 시작: 와, 정말요? 다른 분인 줄 알았어요. 정말 대단하네요.
    16.15s  agent 발화 시작: 당시로서는 꽤 이례적인 협업이었는데, 하드 록을 팝 음악 팬들에게 선보였거든요.
    16.25s  user  발화 끝
    21.78s  user  발화 시작: 저기, 혹시 재활용 쓰레기는 버리고 오셨어요?
    21.80s  agent 발화 끝
    25.18s  user  발화 시작: 죄송해요. 노래 이야기로 돌아가서… 그분께 돈을 많이 줬나요?
    25.29s  user  발화 끝
    30.50s  <ret> 발화 (turn6 첫 프레임)
    30.74s  agent 발화 시작: <ret> 보상을 파악하는 건 복잡할 수 있어요. 처음에는 에디 반 헤일런 씨가 로열티도 받지 못했고, 음반
    30.96s  user  발화 끝
    31.70s  ⚡SPAN 주입 [d'=1.20s / d_lead=2.25s]: Eddie Van Halen did not receive royalties or credit on the original re
    41.07s  agent 발화 끝
