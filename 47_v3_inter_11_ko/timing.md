# v3_inter_11_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 야, 프랑스 혁명 때 제일 신분은 뭐였어?
     4.08s  agent 발화 시작: <ret> 음, 좋은 질문인데. 제1신분은 성직자들로 이루어져 있었어—그때 엄청난 토지와 부를 가지고 있었지
     4.08s  <ret> 발화 (turn1 첫 프레임)
     4.08s  user  발화 끝
     5.04s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.33s]: The First Estate comprised the clergy and held significant land and we
    11.07s  user  발화 시작: 그럼 대략 인구의 몇 퍼센트 정도 됐어?
    11.07s  agent 발화 끝
    15.15s  agent 발화 시작: <ret> 뭐, 감을 잡을 수 있게 해줄게—1789년에 제1신분은 프랑스 전체 인구의 약 0.5퍼센트 정도를
    15.15s  <ret> 발화 (turn3 첫 프레임)
    15.15s  user  발화 끝
    16.15s  ⚡SPAN 주입 [d'=1.00s / d_lead=3.50s]: The First Estate represented approximately 0.5% of the French populati
    23.30s  user  발화 시작: 와, 진짜—
    23.30s  agent 발화 끝
    24.47s  agent 발화 시작: 정말 작지 않아?
    24.47s  user  발화 끝
    26.21s  user  발화 시작: 근데… 인구가 적은데도 영향력이 컸던 거 아니야?
    26.21s  agent 발화 끝
    30.29s  agent 발화 시작: 맞아요. 인구의 작은 부분이었지만, 제1신분은 상당한 영향력을 행사했어.
    30.29s  user  발화 끝
    34.95s  agent 발화 끝
