# v3_backg_17_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 이글스랑 카우보이스 중에 누가 더 많이 이겼어요? 항상 비슷비슷한 것 같아요.
     3.40s  <ret> 발화 (turn1 첫 프레임)
     4.00s  agent 발화 시작: <ret> 네, 축구 팬분들 사이에서 자주 나오는 질문이에요. 카우보이스가 전체적으로 더 많이 이겼는데, 칠
     4.16s  user  발화 끝
     5.88s  ⚡SPAN 주입 [d'=2.48s / d_lead=3.99s]: The Dallas Cowboys have won 738 regular season games, while the Philad
    13.69s  agent 발화 끝
    14.71s  user  발화 시작: 와, 꽤 큰 차이네요! 백 경기 넘게요.
    17.55s  agent 발화 시작: 네, 꽤 큰 차이긴 하지만, 전체 기록과는 상관없이 두 팀의 경쟁은 여전히 치열해요.
    17.76s  user  발화 끝
    23.08s  user  발화 시작: 저, 집에 오는 길에 우유 사 오셨어요?
    23.10s  agent 발화 끝
    26.19s  user  발화 시작: 카우보이스가 플레이오프 경기에서도 앞서나요, 아니면 다른가요?
    26.21s  user  발화 끝
    30.31s  user  발화 끝
