# v3_rag_24_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 뒤플레시 이름이 어디에서 유래됐는지 궁금해요.
     3.76s  agent 발화 시작: 뒤플레시라는 성씨에 얽힌 이야기가 꽤 흥미롭답니다.
     3.88s  user  발화 끝
     6.75s  <ret> 발화 (turn2 첫 프레임)
     7.14s  agent 발화 시작: <ret> 성씨의 기원을 살펴보면 프랑스에서 찾을 수 있어요. 뒤플레시 성은 프랑스어로 “~의”라는 뜻의 “
     7.36s  agent 발화 끝
     8.75s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.47s]: The surname Du Plessis is of French origin, derived from the Old Frenc
    15.73s  user  발화 시작: Mhm.
    16.64s  user  발화 끝
    18.42s  user  발화 시작: 아, 그렇군요. 그럼 프랑스 귀족과 관련이 있는 건가요?
    18.64s  agent 발화 끝
    23.12s  agent 발화 시작: [laugh] 음, 어느 정도 관련이 있죠. 뒤플레시 가문은 프랑스 귀족 가문 중 하나였거든요.
    23.23s  user  발화 끝
    29.21s  <ret> 발화 (turn6 첫 프레임)
    29.28s  agent 발화 시작: <ret> 뒤플레시 가문은 프랑스 왕실과도 인연이 깊었어요. 16세기 동안 뒤플레시 가문은 여러 구성원이 프
    29.32s  agent 발화 끝
    30.65s  ⚡SPAN 주입 [d'=1.44s / d_lead=3.78s]: The Du Plessis family rose to prominence in France during the 16th cen
    41.24s  agent 발화 끝
    41.33s  user  발화 시작: 혹시 유명한 뒤플레시 가문 사람이 있었나요?
    44.72s  agent 발화 시작: 네, 프랑수아 뒤플레시라는 인물이 유명하답니다. 그는 프랑스의 군인이자 정치가였어요.
    44.84s  user  발화 끝
    50.33s  <ret> 발화 (turn9 첫 프레임)
    50.72s  agent 발화 시작: <ret> 프랑수아 뒤플레시는 종교 전쟁 시기에 중요한 역할을 했어요.
    50.83s  agent 발화 끝
    51.85s  ⚡SPAN 주입 [d'=1.52s / d_lead=4.73s]: François du Plessis, Duke of Rohan, was a prominent French military le
    55.44s  agent 발화 끝
