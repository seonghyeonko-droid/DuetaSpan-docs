# v3_rag_31_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 야, 스케넥터디 주변 고속도로 좀 알아보고 있는데.
     3.37s  user  발화 끝
     3.69s  agent 발화 시작: 여행은 정말 좋지! 풍경 구경하기 딱 좋잖아, 그렇지?
     7.78s  user  발화 시작: 어, 맞아, 완전. 146번 도로랑 890번 고속도로는 아는데, 스케넥터디를 지나는 다른 고속도로는 뭐가 있
     7.81s  agent 발화 끝
    14.63s  <ret> 발화 (turn3 첫 프레임)
    15.11s  ⚡SPAN 주입 [d'=0.48s / d_lead=1.53s]: Interstate 90 passes through Schenectady, New York, connecting to Bost
    15.23s  agent 발화 시작: <ret> 음… 잠깐만 찾아볼게… 스케넥터디에는 90번 고속도로도 지나가는데, 보스턴이랑 올버니랑 연결돼 있
    15.38s  user  발화 끝
    23.66s  agent 발화 끝
    24.21s  user  발화 시작: 아, 그래, 90번. 도움이 되네. 스케넥터디에 역사적으로 흥미로운 거 있어?
    29.63s  user  발화 끝
    29.93s  agent 발화 시작: 실제로 꽤 풍부한 역사를 가진 도시야. 꽤 많은 일이 일어났거든.
    34.10s  agent 발화 끝
    34.48s  user  발화 시작: [궁금해] 구체적으로 뭔데? 기억에 남는 거라도?
    36.74s  <ret> 발화 (turn7 첫 프레임)
    37.34s  agent 발화 시작: <ret> 정말이지… 1690년에 윌리엄 왕 전쟁 중에 스케넥터디에서 학살이 일어났는데, 많은 사람들이 죽었
    37.51s  user  발화 끝
    37.74s  ⚡SPAN 주입 [d'=1.00s / d_lead=1.78s]: Schenectady was the site of a 1690 massacre during King William’s War,
    44.47s  agent 발화 끝
    44.54s  user  발화 시작: 와, 학살이라니… 끔찍하네. 그때는 큰 마을이었어?
    48.49s  <ret> 발화 (turn9 첫 프레임)
    49.09s  agent 발화 시작: <ret> 개발 중인 지역이었어… 1684년에 스케넥터디는 집 서른 채랑 교회 하나 있는 작은 식민지 개척지
    49.21s  user  발화 끝
    49.49s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.65s]: By 1684, Schenectady contained approximately thirty houses and a churc
    56.45s  user  발화 시작: 집 서른 채… 진짜 작네. 그래서 그때는 엄청 취약했겠네, 그렇지?
    56.52s  agent 발화 끝
    61.44s  user  발화 끝
    61.52s  agent 발화 시작: 그렇지. 새로운 땅에 있는 작은 마을은 항상 어려움에 직면하거든.
    65.59s  agent 발화 끝
    65.94s  user  발화 시작: 아— 좀 더 덜 끔찍한 역사적인 이야기는 없어? 긍정적인 거라도?
    70.63s  <ret> 발화 (turn13 첫 프레임)
    70.87s  ⚡SPAN 주입 [d'=0.24s / d_lead=1.65s]: Union College, founded in 1795, is located in Schenectady and is the o
    71.23s  agent 발화 시작: <ret> 물론 있지! 1795년에 설립된 유니언 칼리지는 미국에서 학위를 수여하는 가장 오래된 대학이고 스
    71.46s  user  발화 끝
    78.92s  agent 발화 끝
