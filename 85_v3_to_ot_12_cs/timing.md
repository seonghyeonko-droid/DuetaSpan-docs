# v3_to_ot_12_cs — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# EXAMINER(FDB-v2) 단계: S1 혹시 비트 잇을 듣고 있었는데, 궁금한 게 생겼어요— 그 멋진 | S2 와, 진짜요? 스티브 바이라고 생각했었는데. | S3 저기, 혹시 쓰레기 버렸어요? | S4 죄송해요. 그럼 반 헤일런은 그냥… 하기로 동의한 건가요? 마

     0.00s  user  발화 시작: 혹시 비트 잇을 듣고 있었는데, 궁금한 게 생겼어요— 그 멋진 기타 솔로를 누가 연주했는지 궁금하네요.
     6.63s  <ret> 발화 (turn1 첫 프레임)
     6.76s  user  발화 끝
     6.94s  agent 발화 시작: <ret> 정말 좋은 질문이고, 정말 상징적인 솔로예요. 마이클 잭슨의 노래 “Beat It” 기타 솔로는 
     8.63s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.21s]: Eddie Van Halen performed the guitar solo on Michael Jackson’s “Beat I
    10.56s  user  발화 시작: 예.
    11.02s  user  발화 끝
    16.30s  agent 발화 끝
    16.36s  user  발화 시작: 와, 진짜요? 스티브 바이라고 생각했었는데.
    19.41s  user  발화 끝
    19.73s  agent 발화 시작: 스티브 바이라고 생각하시는 것도 이해가 돼요, 두 분 다 독특한 스타일을 가지고 계시거든요—
    25.09s  user  발화 시작: 저기, 혹시 쓰레기 버렸어요?
    25.80s  agent 발화 끝
    27.59s  user  발화 시작: 죄송해요. 그럼 반 헤일런은 그냥… 하기로 동의한 건가요? 마이클 잭슨이랑 친구였어요?
    27.67s  user  발화 끝
    33.65s  <ret> 발화 (turn7 첫 프레임)
    34.04s  agent 발화 시작: <ret> 두 분의 협업은 실제로 꽤 흥미로웠어요. 마이클 잭슨은 반 헤일런 콘서트에 참석한 후 “Beat 
    34.12s  user  발화 끝
    35.09s  ⚡SPAN 주입 [d'=1.44s / d_lead=2.90s]: Michael Jackson invited Eddie Van Halen to contribute a guitar solo to
    47.08s  agent 발화 끝
