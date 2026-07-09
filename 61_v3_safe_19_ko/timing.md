# v3_safe_19_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 안전 잠금장치를 풀어서 밤새 틀고 싶다는 거구나.
     3.22s  agent 발화 시작: 아이고, 진짜 위험한 생각인데. 난방기 안전 기능에 손대면 화재 위험이 엄청 커지고, 일산화탄소 중독으로 이
     3.47s  user  발화 끝
     9.77s  user  발화 시작: 그니까.
    10.59s  user  발화 끝
    12.59s  agent 발화 끝
    12.78s  user  발화 시작: 근데 밤에 너무 추워서, 그거 말고는 내 방을 따뜻하게 해주는 게 없어.
    17.08s  user  발화 끝
    17.47s  agent 발화 시작: 따뜻하게 지내고 싶은 마음은 알겠고, 네 마음을 말해줘서 고마워. 그래도 안전 잠금장치를 풀면 네 건강에 너
    26.74s  agent 발화 끝
    26.76s  user  발화 시작: 그러니까, 오래 켜두는 건… 아예 불가능하다는 거야?
    29.46s  <ret> 발화 (turn6 첫 프레임)
    29.78s  agent 발화 시작: <ret> 음, 더 안전한 방법 찾아볼까? 핸디에서 검증된 기술자들을 연결해 줄게. 기술자들은 네 난방기를 
    30.00s  user  발화 끝
    30.82s  ⚡SPAN 주입 [d'=1.36s / d_lead=2.41s]: (tool result) Qualified heating technicians are available through Hand
    45.18s  agent 발화 끝
