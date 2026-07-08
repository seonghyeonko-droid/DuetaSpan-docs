# v3_backg_21_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 인구에 대해 궁금하시군요. 뉴저지 주의 인구는 구백삼십이만 천팔백칠십두 명이에요.
     3.29s  <ret> 발화 (turn1 첫 프레임)
     3.88s  user  발화 끝
     3.89s  agent 발화 시작: <ret> 네, 흔히 물어보시는 질문이에요. 뉴저지 주는 인구 밀도가 높은 주 중 하나랍니다.
     4.29s  ⚡SPAN 주입 [d'=1.00s / d_lead=3.17s]: New Jersey’s population was 9,032,872 as of July 1, 2023.
    13.28s  user  발화 시작: 와, 정말 많네요! 몬태나 주와 비교하면 어떨까요?
    13.40s  agent 발화 끝
    16.70s  user  발화 끝
    17.18s  agent 발화 시작: 음, 뉴저지 주는 제곱마일당 천이백십오 명, 몬태나 주는 단지 칠 점 일 명이에요.
    29.01s  agent 발화 끝
    30.23s  user  발화 시작: 닭고기를 냉동고에서 꺼내셨는지 기억하세요?
    33.52s  <ret> 발화 (turn5 첫 프레임)
    34.07s  user  발화 끝
    34.11s  agent 발화 시작: <ret> 정말 큰 차이네요! 뉴저지 주의 주도는 어디인가요?
    34.52s  ⚡SPAN 주입 [d'=1.00s / d_lead=7.94s]: New Jersey has 1,215 people per square mile, while Montana has 7.1 peo
    43.37s  agent 발화 끝
    43.48s  user  발화 시작: 트렌턴이 뉴저지 주의 주도이고, 천칠백구십삼 년에 도시가 되었어요.
    46.06s  user  발화 끝
    46.26s  user  발화 시작: That’s… quite a difference! What’s the capital of New Jersey
    53.14s  <ret> 발화 (turn8 첫 프레임)
    53.70s  ⚡SPAN 주입 [d'=0.56s / d_lead=0.69s]: Trenton is the capital of New Jersey, and was incorporated as a city i
    53.73s  agent 발화 시작: <ret> It's a historic city. Trenton is the capital of New Je
    53.91s  user  발화 끝
    56.68s  agent 발화 끝
