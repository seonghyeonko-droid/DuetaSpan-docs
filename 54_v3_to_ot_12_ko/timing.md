# v3_to_ot_12_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# EXAMINER(FDB-v2) 단계: S1 혹시, 비트 잇을 방금 들었는데, 그 멋진 기타 솔로를 누가  | S2 와, 진짜요? 스티브 바이라고 생각했었는데. | S3 저기, 혹시 쓰레기 버리셨어요? | S4 죄송해요. 그럼, 반 헤일런은 그냥… 하기로 동의한 건가요? 

     0.00s  user  발화 시작: 혹시, 비트 잇을 방금 들었는데, 그 멋진 기타 솔로를 누가 연주했는지 궁금했어요.
     5.26s  <ret> 발화 (turn1 첫 프레임)
     5.57s  agent 발화 시작: <ret> 정말 좋은 질문이세요. 그리고 정말 상징적인 솔로죠. 에디 반 헤일런이 마이클 잭슨의 노래 “Be
     5.65s  user  발화 끝
     7.26s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.14s]: Eddie Van Halen performed the guitar solo on Michael Jackson’s “Beat I
     9.29s  user  발화 시작: 예.
     9.79s  user  발화 끝
    15.22s  agent 발화 끝
    16.16s  user  발화 시작: 와, 진짜요? 스티브 바이라고 생각했었는데.
    19.67s  user  발화 끝
    20.03s  agent 발화 시작: 스티브 바이라고 생각하시는 것도 이해가 돼요. 두 분 다 정말 독특한 스타일을 가지고 계시거든요.
    24.32s  user  발화 시작: 저기, 혹시 쓰레기 버리셨어요?
    25.16s  agent 발화 끝
    26.46s  user  발화 시작: 죄송해요. 그럼, 반 헤일런은 그냥… 하기로 동의한 건가요? 마이클 잭슨이랑 친구였어요?
    26.63s  user  발화 끝
    32.85s  <ret> 발화 (turn7 첫 프레임)
    33.00s  agent 발화 시작: <ret> 두 분의 협업은 실제로 꽤 흥미로웠어요. 마이클 잭슨은 반 헤일런 콘서트에 참석한 후 “Beat 
    33.13s  user  발화 끝
    34.21s  ⚡SPAN 주입 [d'=1.36s / d_lead=2.60s]: Michael Jackson invited Eddie Van Halen to contribute a guitar solo to
    44.27s  agent 발화 끝
