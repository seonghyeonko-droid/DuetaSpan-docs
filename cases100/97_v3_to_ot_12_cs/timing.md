# v3_to_ot_12_cs — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 안녕하세요, 모시. 알링턴 국립묘지 땅을 기증한 분이 누구인지 아시나요?
     1.97s  agent 발화 시작: 네네.
     2.65s  agent 발화 끝
     4.62s  <ret> 발화 (turn2 첫 프레임)
     4.98s  agent 발화 시작: <ret> 사실은 메리 애나 커스티스 리, 로버트 이 장군의 부인이 그 땅을 기증하셨어요. 꽤 흥미로운 이야
     5.11s  user  발화 끝
     5.53s  ⚡SPAN 주입 [d'=0.91s / d_lead=7.04s]: Mary Anna Custis Lee, wife of Confederate General Robert E. Lee, is cr
    12.02s  agent 발화 끝
    12.38s  user  발화 시작: 여보세요, 오븐 타이머가 울리고 있어요. 좀 꺼다 주시겠어요?
    16.61s  user  발화 끝
    16.68s  user  발화 시작: 정말 죄송해요. 커스티스 리… 완전한 기증이었나요, 아니면 다른 이야기가 있었나요?
    18.75s  agent 발화 시작: 음.
    19.28s  agent 발화 끝
    21.95s  <ret> 발화 (turn6 첫 프레임)
    22.42s  agent 발화 시작: <ret> 그 땅은 원래 그녀 가족 소유였는데, 남북전쟁 중에 연방군이 세금을 내지 않아서 압류해 간 거랍니
    22.47s  user  발화 끝
    22.79s  ⚡SPAN 주입 [d'=0.84s / d_lead=7.09s]: The land was originally part of the estate of Mary Anna Custis Lee’s f
    26.84s  user  발화 시작: 네.
    27.14s  user  발화 끝
    29.48s  agent 발화 시작: 단순한 기증이 아니었고, 전쟁의 결과였다고 할 수 있겠네요. 꽤 슬픈 역사예요.
    29.51s  agent 발화 끝
    35.03s  agent 발화 끝
