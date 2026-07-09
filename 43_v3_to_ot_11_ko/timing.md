# v3_to_ot_11_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 혹시 A's 팀이 마지막으로 노히트 게임을 당한 게 언제였는지 아세요? 제가 내기를 하려고요.
     5.55s  <ret> 발화 (turn1 첫 프레임)
     5.78s  user  발화 끝
     5.79s  agent 발화 시작: <ret> 아, 야구에 대한 좋은 질문이시네요. 그건 이천십팔 년 4월 21일에 일어났습니다.
     7.55s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.10s]: The last time the Oakland Athletics were no-hit was April 21, 2018.
    11.48s  agent 발화 끝
    11.55s  user  발화 시작: 와, 꽤 오래됐네요. 누가 던졌는데요?
    14.28s  agent 발화 시작: 그건 로스앤젤레스 에인절스의 마이크 피어스, 맷 쇼메이커, 그리고 캠 베드로시안이 합심해서 던졌습니다.
    14.46s  user  발화 끝
    16.95s  user  발화 시작: 네.
    17.45s  user  발화 끝
    21.73s  <ret> 발화 (turn5 첫 프레임)
    21.83s  agent 발화 끝
    21.97s  agent 발화 시작: <ret> 노히트 게임이 얼마나 드문 일인지 생각하면— 마이크 피어스는 8명의 타자를 삼진으로 잡으면서 6이
    22.85s  ⚡SPAN 주입 [d'=1.12s / d_lead=2.28s]: Mike Fiers pitched six innings, allowing no hits and striking out eigh
    29.70s  agent 발화 끝
    30.97s  user  발화 시작: 잠깐만요, 그게 플레이오프 경기였나요, 아니면 정규 시즌 경기였나요?
    34.37s  user  발화 시작: 그게 A's 팀의 홈 경기였나요?
    34.52s  user  발화 끝
    36.06s  agent 발화 시작: 정규 시즌 경기였고, 오클랜드 콜리세움에서 열렸습니다.
    36.16s  user  발화 끝
    39.71s  agent 발화 끝
    39.72s  user  발화 시작: 알겠습니다, 알아두니 좋네요. 바스케스 박사님, 감사합니다.
    44.07s  user  발화 끝
