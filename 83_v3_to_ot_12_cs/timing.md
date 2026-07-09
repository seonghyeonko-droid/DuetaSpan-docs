# v3_to_ot_12_cs — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# EXAMINER(FDB-v2) 단계: S1 혹시 마이클 잭슨의 "Beat It" 기타 솔로를 누가 연주했 | S2 와, 진짜요? 에디 반 헤일런이요? 잭슨 밴드의 누군가일 거라 | S3 저기요, 냉동실에서 닭고기 꺼냈어요? | S4 죄송해요. 아, 맞다, "Beat It"에 반 헤일런이요. 고

     0.00s  user  발화 시작: 혹시 마이클 잭슨의 "Beat It" 기타 솔로를 누가 연주했는지 궁금했거든요. 다른 노래들과는 꽤 다른 느
     6.66s  <ret> 발화 (turn1 첫 프레임)
     6.90s  agent 발화 시작: <ret> 아, 좋은 질문이세요. 그리고 정말 흥미로운 음악적인 디테일인데요. 혁신적인 연주 기법으로 유명한
     7.00s  user  발화 끝
     8.66s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.47s]: Eddie Van Halen performed the guitar solo on Michael Jackson’s “Beat I
    11.16s  user  발화 시작: 예.
    11.61s  user  발화 끝
    17.84s  agent 발화 끝
    17.87s  user  발화 시작: 와, 진짜요? 에디 반 헤일런이요? 잭슨 밴드의 누군가일 거라고 생각했거든요.
    22.61s  user  발화 시작: 저기요, 냉동실에서 닭고기 꺼냈어요?
    22.68s  user  발화 끝
    25.53s  user  발화 시작: 죄송해요. 아, 맞다, "Beat It"에 반 헤일런이요. 고용하는 데 돈이 많이 들었나요?
    25.65s  user  발화 끝
    31.29s  <ret> 발화 (turn6 첫 프레임)
    31.37s  agent 발화 시작: <ret> 물론 그런 비하인드 스토리에 대해 궁금해하시는 건 당연하죠. 그분은 그 곡의 기타 솔로 녹음에 이
    31.46s  user  발화 끝
    33.29s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.62s]: Eddie Van Halen was paid $20,000 for his work on “Beat It”.
    39.05s  agent 발화 끝
