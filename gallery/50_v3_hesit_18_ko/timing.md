# v3_hesit_18_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 음, 입법 의회에 들어갈 수 있는 가장 어린 나이가 얼마야?
     3.24s  <ret> 발화 (turn1 첫 프레임)
     3.55s  user  발화 끝
     3.56s  agent 발화 시작: <ret> 네, 시민 참여에 대한 좋은 질문이세요. 입법 의회 의원이 되기 위한 최소 연령은 서른 살입니다.
     4.76s  ⚡SPAN 주입 [d'=1.52s / d_lead=2.70s]: The minimum age to become a member of a legislative council is thirty 
     9.35s  agent 발화 끝
     9.74s  user  발화 시작: 와, 서른이라고. 꽤 높은 거 아니야?
    12.98s  user  발화 끝
    13.39s  agent 발화 시작: 네, 조금 높은 기준이긴 해요. 그 책임감을 맡기 전에 어느 정도 인생 경험을 쌓는 데 도움이 될 거라고 생
    21.18s  agent 발화 끝
    21.41s  user  발화 시작: 그래. 근데— 근데 그게 모든 주에서 똑같아?
    24.21s  <ret> 발화 (turn5 첫 프레임)
    24.61s  agent 발화 시작: <ret> 아, 정말 합리적인 질문이시네요. 주마다 다르긴 하지만, 서른 살이 입법 의회 의원 자격 요건으로
    24.83s  user  발화 끝
    25.50s  ⚡SPAN 주입 [d'=1.28s / d_lead=3.67s]: Age requirements for legislative council membership vary by jurisdicti
    33.00s  agent 발화 끝
