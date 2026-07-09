# v3_to_ot_11_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 혹시 오클랜드 애슬레틱스가 노히트 게임을 당한 마지막 날짜가 언제였는지 궁금했어요.
     5.12s  <ret> 발화 (turn1 첫 프레임)
     5.32s  user  발화 끝
     5.36s  agent 발화 시작: <ret> 아, 그거 참 재미있는 질문이네요. 이천십팔 년 4월 21일에 있었답니다.
     7.12s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.63s]: The last time the Oakland Athletics were no-hit was April 21, 2018.
    10.55s  agent 발화 끝
    10.60s  user  발화 시작: 와, 꽤 오래됐네요. [sigh]
    12.20s  agent 발화 시작: 팬들께서는 다행이라고 생각하실 것 같아요, 그동안 그런 일이 없었으니까요.
    12.21s  user  발화 끝
    14.95s  user  발화 시작: 네.
    15.44s  user  발화 끝
    16.63s  agent 발화 끝
    17.21s  user  발화 시작: 다른 팀들과 비교했을 때, 그게 흔한 일인가요?
    20.02s  <ret> 발화 (turn6 첫 프레임)
    20.18s  agent 발화 시작: <ret> 좋은 지적이세요. 리그 전체 통계를 살펴봐야 알 수 있을 것 같아요.
    20.36s  user  발화 끝
    22.02s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.88s]: MLB.com reports that no-hitters occur an average of 2.5 times per seas
    24.05s  agent 발화 시작: MLB.com에 따르면 노히트 게임은 평균적으로 1년에 두 번 반 정도 발생한다고 합니다.
    24.06s  agent 발화 끝
    29.52s  agent 발화 끝
    29.66s  user  발화 시작: 저기요, 혹시 쓰레기 버리셨어요?
    31.86s  user  발화 시작: 죄송합니다. 다시 야구 이야기로 돌아가서, 그 평균이 지금은 바뀌고 있나요?
    31.93s  user  발화 끝
    36.77s  user  발화 끝
