# v3_to_ot_12_cs — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 마침 궁금했는데요, 마이클 잭슨의 “Beat It” 기타 솔로를 실제로 연주한 사람은 누구였나요? 팝송으로는
     9.54s  <ret> 발화 (turn1 첫 프레임)
     9.93s  agent 발화 시작: <ret> 정말 좋은 질문이에요, 장르가 섞이는 흥미로운 부분이죠. 기타 솔로는 반 헤일런의 에디 반 헤일런
    10.02s  user  발화 끝
    11.54s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.95s]: Eddie Van Halen performed the guitar solo on Michael Jackson’s “Beat I
    18.18s  agent 발화 끝
    18.63s  user  발화 시작: 와, 진짜요? 반 헤일런이요? 저는 그냥… 세션 뮤지션 같은 분일 거라고 생각했어요.
    24.66s  agent 발화 시작: 잭슨이 반 헤일런의 참여를 성사시킨 건 정말 대단한 일이었고, 의지를 보여주는 표현이었다고 생각해요.
    24.75s  user  발화 끝
    31.32s  agent 발화 끝
    31.40s  user  발화 시작: 저기, 혹시 재활용 쓰레기는 버리고 오셨어요?
    34.72s  user  발화 시작: 죄송해요. 그런데 그는 출연료를 받았나요, 아니면 로열티를 받았나요…?
    34.77s  user  발화 끝
    38.99s  <ret> 발화 (turn6 첫 프레임)
    39.20s  agent 발화 시작: <ret> 그건 음악 평론가들 사이에서 자주 논의되는 내용이에요. 잭슨에게 부탁을 받아서 솔로를 연주했고, 
    39.45s  user  발화 끝
    40.91s  ⚡SPAN 주입 [d'=1.92s / d_lead=4.19s]: Eddie Van Halen did not receive any royalties for his work on “Beat It
    49.66s  agent 발화 끝
