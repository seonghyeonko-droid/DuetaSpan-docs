# v3_to_ot_12_cs — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# EXAMINER(FDB-v2) 단계: S1 안녕하세요. 마이클 잭슨의 “Beat It” 기타 솔로를 누가 | S2 와, 에디 반 헤일런이요? 솔직히 좀 의외네요. 잭슨 밴드 멤 | S3 저기, 혹시 쓰레기 버리는 거 잊지 않으셨죠? | S4 죄송해요. 그분이 특별히 부탁받아서 한 건지, 아니면 그냥 자

     0.00s  user  발화 시작: 안녕하세요. 마이클 잭슨의 “Beat It” 기타 솔로를 누가 연주했는지 궁금했는데, 정말 유명하잖아요.
     7.12s  <ret> 발화 (turn1 첫 프레임)
     7.17s  user  발화 끝
     7.44s  agent 발화 시작: <ret> 네, 좋은 질문이에요. 정말 기억에 남는 솔로죠. “Beat It”의 놀라운 기타 솔로는 에디 반
     9.12s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.06s]: Eddie Van Halen performed the guitar solo on Michael Jackson’s “Beat I
    13.84s  user  발화 시작: 예.
    14.20s  user  발화 끝
    15.96s  user  발화 시작: 와, 에디 반 헤일런이요? 솔직히 좀 의외네요. 잭슨 밴드 멤버 중 누군가일 줄 알았어요.
    16.01s  agent 발화 끝
    21.69s  user  발화 시작: 저기, 혹시 쓰레기 버리는 거 잊지 않으셨죠?
    21.75s  user  발화 끝
    24.78s  user  발화 시작: 죄송해요. 그분이 특별히 부탁받아서 한 건지, 아니면 그냥 자발적으로 한 건지 궁금해요.
    24.83s  user  발화 끝
    30.12s  <ret> 발화 (turn6 첫 프레임)
    30.52s  agent 발화 시작: <ret> 마이클 잭슨이 노래에 하드 록 요소를 넣고 싶어했고, 에디 반 헤일런이 그의 첫 번째 선택이었다고
    30.65s  user  발화 끝
    31.40s  ⚡SPAN 주입 [d'=1.28s / d_lead=6.62s]: Michael Jackson specifically requested Eddie Van Halen to play guitar 
    37.11s  agent 발화 시작: 마이클 잭슨이 “Beat It” 기타 연주를 위해 에디 반 헤일런을 특별히 요청했습니다.
    37.14s  agent 발화 끝
    42.16s  agent 발화 끝
