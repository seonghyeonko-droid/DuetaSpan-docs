# v3_rag_32_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 음, 예일 대학교가 어디 있는지 항상 헷갈려 하거든요.
     7.53s  agent 발화 시작: 그런 질문 많이 받지.
     7.69s  user  발화 끝
    11.13s  <ret> 발화 (turn2 첫 프레임)
    11.73s  agent 발화 시작: <ret> 알아볼게. 예일 대학교는 코네티컷 주 뉴 헤이븐에 있어.
    11.74s  agent 발화 끝
    12.13s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.83s]: Yale University is located in New Haven, Connecticut.
    17.38s  agent 발화 끝
    19.18s  user  발화 시작: 뉴 헤이븐… 코네티컷. 음, 뉴욕 시 근처예요?
    25.17s  agent 발화 시작: 그래, 뭐, 비슷하게 볼 수 있지. 분위기는 완전 달라.
    25.29s  user  발화 끝
    31.23s  <ret> 발화 (turn5 첫 프레임)
    31.82s  agent 발화 시작: <ret> 그렇게 멀지 않아. 코네티컷 주 뉴 헤이븐은 뉴욕 시에서 약 73마일 떨어져 있어.
    31.89s  agent 발화 끝
    31.95s  ⚡SPAN 주입 [d'=0.72s / d_lead=2.41s]: New Haven, Connecticut is approximately seventy-three miles from New Y
    39.65s  agent 발화 끝
    39.79s  user  발화 시작: 73마일… 알겠습니다. 그런데 뉴 헤이븐은 큰 도시예요? 저… 가볼 만한 곳이에요?
    44.80s  user  발화 끝
    45.22s  agent 발화 시작: 역사가 깊고 개성이 넘치는 도시야.
    49.81s  <ret> 발화 (turn8 첫 프레임)
    50.36s  agent 발화 끝
    50.40s  agent 발화 시작: <ret> 뉴욕만큼 크진 않아. 코네티컷 주 뉴 헤이븐의 인구는 대략 13만 4천 명 정도 돼.
    50.81s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.22s]: New Haven, Connecticut has a population of approximately 134,023 peopl
    56.61s  agent 발화 끝
    57.36s  user  발화 시작: 13만 4천 명… 엄청 크진 않네요. 그래도 대학교 도시죠?
    62.19s  agent 발화 시작: 당연하지. 대학교 중심으로 돌아가.
    62.26s  user  발화 끝
    66.81s  agent 발화 끝
