# v3_to_ot_12_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# EXAMINER(FDB-v2) 단계: S1 혹시 궁금했는데, 마이클 잭슨의 "Beat It" 기타 솔로는 | S2 와, 진짜요? 에디 반 헤일런이요? 잭슨 밴드 멤버 중 누군가 | S3 저기요, 혹시 냉동고에서 닭고기 꺼내 놓으셨어요? | S4 죄송해요. 아, 맞다, "Beat It"에 반 헤일런이요. 고

     0.00s  user  발화 시작: 혹시 궁금했는데, 마이클 잭슨의 "Beat It" 기타 솔로는 누가 연주했는지 궁금했어요. 다른 노래들과는 
     8.54s  <ret> 발화 (turn1 첫 프레임)
     8.78s  agent 발화 시작: <ret> 아, 좋은 질문이세요. 그리고 정말 흥미로운 음악적 디테일인데요. 혁신적인 연주 기법으로 유명한 
     8.81s  user  발화 끝
    10.14s  ⚡SPAN 주입 [d'=1.60s / d_lead=4.77s]: Eddie Van Halen performed the guitar solo on Michael Jackson’s “Beat I
    12.49s  user  발화 시작: 예.
    13.13s  user  발화 끝
    18.32s  agent 발화 끝
    19.46s  user  발화 시작: 와, 진짜요? 에디 반 헤일런이요? 잭슨 밴드 멤버 중 누군가일 거라고 생각했어요.
    25.52s  user  발화 시작: 저기요, 혹시 냉동고에서 닭고기 꺼내 놓으셨어요?
    25.72s  user  발화 끝
    29.11s  user  발화 시작: 죄송해요. 아, 맞다, "Beat It"에 반 헤일런이요. 고용하는 데 돈이 많이 들었나요?
    29.32s  user  발화 끝
    34.22s  <ret> 발화 (turn6 첫 프레임)
    34.54s  agent 발화 시작: <ret> 물론 그런 비하인드 스토리가 궁금하실 거라고 생각해요. 그분은 그 곡의 기타 솔로 녹음에 이만 달
    34.75s  user  발화 끝
    36.22s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.47s]: Eddie Van Halen was paid $20,000 for his work on “Beat It”.
    41.49s  agent 발화 끝
