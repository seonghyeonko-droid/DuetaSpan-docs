# v3_rag_25_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# EXAMINER(FDB-v2) 단계: S1 잭 소크랑 라파엘라 레지 선수, 혹시 무슨 스포츠 하는 선수들 | S2 아, 그럼 같이 뛴 적은 없었네요. 잭 소크 선수는 지금도 선 | S3 그렇죠… 슬프네요. 혹시 잭 소크 선수, 은퇴 전에 큰 대회에 | S4 14번이나 우승하셨다니, 복식에서는 정말 뛰어났던 선수네요.

     0.00s  user  발화 시작: 잭 소크랑 라파엘라 레지 선수, 혹시 무슨 스포츠 하는 선수들이에요?
     7.04s  <ret> 발화 (turn1 첫 프레임)
     7.18s  user  발화 끝
     7.19s  agent 발화 시작: <ret> 두 분 모두 테니스 선수이신데요. 잭 소크 선수와 라파엘라 레지 선수 두 분은 프로 테니스 선수입
     8.16s  ⚡SPAN 주입 [d'=1.12s / d_lead=2.20s]: Jack Sock and Raffaella Reggi are both professional tennis players.
     9.34s  user  발화 시작: Yeah.
    10.03s  user  발화 끝
    14.19s  user  발화 시작: 테니스 선수요? 음… 솔직히 잘 몰랐어요. 혹시 잭 소크 선수, 남자 선수 맞죠?
    14.23s  agent 발화 끝
    22.34s  user  발화 끝
    22.48s  agent 발화 시작: 네, 잭 소크 선수는 남자 테니스 선수입니다.
    25.75s  agent 발화 끝
    27.43s  user  발화 시작: 아, 그렇군요. 라파엘라 레지 선수는요? 여자 선수겠죠? 당연한 걸 물어봤나.
    33.37s  <ret> 발화 (turn6 첫 프레임)
    33.53s  agent 발화 시작: <ret> 라파엘라 레지 선수도 여자 테니스 선수이십니다. 라파엘라 레지 선수는 이탈리아 출신의 전직 프로 
    33.73s  user  발화 끝
    34.49s  ⚡SPAN 주입 [d'=1.12s / d_lead=3.56s]: Raffaella Reggi is an Italian former professional tennis player.
    42.40s  user  발화 시작: 이탈리아 선수였군요. 두 분 다 테니스 치는 건 알겠는데, 혹시 같이 뛴 적도 있어요?
    42.43s  agent 발화 끝
    49.37s  agent 발화 시작: 두 분이 함께 경기를 뛰셨다는 기록은 찾을 수 없습니다.
    49.58s  user  발화 끝
    53.30s  agent 발화 끝
    53.31s  user  발화 시작: 아, 그럼 같이 뛴 적은 없었네요. 잭 소크 선수는 지금도 선수 생활 하고 있어요?
    58.30s  <ret> 발화 (turn10 첫 프레임)
    58.69s  agent 발화 시작: <ret> 잭 소크 선수는 현재 은퇴하셨습니다. 잭 소크 선수는 2023년 11월에 프로 테니스 은퇴를 발표
    58.91s  user  발화 끝
    60.30s  ⚡SPAN 주입 [d'=2.00s / d_lead=2.96s]: Jack Sock announced his retirement from professional tennis in Novembe
    66.99s  agent 발화 끝
    67.00s  user  발화 시작: 2023년에 은퇴하셨다니, 생각보다 최근이네요. 라파엘라 레지 선수도 은퇴하셨어요?
    74.45s  user  발화 끝
    74.54s  <ret> 발화 (turn12 첫 프레임)
    74.69s  agent 발화 시작: <ret> 라파엘라 레지 선수도 은퇴하셨습니다. 라파엘라 레지 선수는 1995년에 프로 테니스 은퇴를 하셨습
    75.66s  ⚡SPAN 주입 [d'=1.12s / d_lead=2.86s]: Raffaella Reggi retired from professional tennis in 1995.
    81.28s  user  발화 시작: Wow.
    82.06s  user  발화 끝
    83.15s  user  발화 시작: 1995년이면 꽤 오래 전이네요. 두 분 다 은퇴하셨다니 아쉽네요.
    83.26s  agent 발화 끝
    88.77s  agent 발화 시작: 변화는 슬픔을 동반하는 경우가 많죠.
    88.80s  user  발화 끝
    91.58s  user  발화 시작: 그렇죠… 슬프네요. 혹시 잭 소크 선수, 은퇴 전에 큰 대회에서 우승한 적이라도 있어요?
    91.77s  agent 발화 끝
    98.64s  <ret> 발화 (turn17 첫 프레임)
    98.95s  agent 발화 시작: <ret> 잭 소크 선수는 ATP 파리 마스터스에서 우승하신 적이 있습니다. 잭 소크 선수는 2017년 파리
    99.13s  user  발화 끝
    99.76s  ⚡SPAN 주입 [d'=1.12s / d_lead=5.40s]: Jack Sock won the 2017 Paris Masters, defeating Filip Krajinović in th
   108.43s  user  발화 시작: 파리 마스터스 우승이라… 필립 크라이노비치를 이겼다고요? 그 선수는 또 누구에요?
   108.55s  agent 발화 끝
   116.27s  agent 발화 시작: 필립 크라이노비치 선수도 세르비아의 프로 테니스 선수입니다.
   116.31s  user  발화 끝
   118.78s  user  발화 시작: Yeah.
   119.50s  user  발화 끝
   120.38s  agent 발화 끝
   120.39s  user  발화 시작: 세르비아 선수군요. 라파엘라 레지 선수는 우승 경험이 없을까요?
   125.74s  <ret> 발화 (turn22 첫 프레임)
   125.97s  agent 발화 시작: <ret> 라파엘라 레지 선수는 WTA 투어 단식에서 우승한 적은 없습니다. 라파엘라 레지 선수는 최고 단식
   126.18s  user  발화 끝
   126.86s  ⚡SPAN 주입 [d'=1.12s / d_lead=4.78s]: Raffaella Reggi reached a career-high singles ranking of world No. 16 
   137.66s  agent 발화 끝
   138.33s  user  발화 시작: 단식 우승은 없었지만 랭킹 16위면 꽤 잘하신 거네요. 혹시 복식 우승은 있어요?
   144.89s  <ret> 발화 (turn24 첫 프레임)
   144.96s  agent 발화 시작: <ret> 라파엘라 레지 선수는 복식에서 여러 차례 우승하셨습니다. 라파엘라 레지 선수는 선수 생활 동안 W
   145.19s  user  발화 끝
   145.39s  ⚡SPAN 주입 [d'=0.50s / d_lead=4.45s]: Raffaella Reggi won 14 WTA doubles titles throughout her career.
   152.25s  user  발화 시작: Right.
   153.03s  user  발화 끝
   155.63s  user  발화 시작: 14번이나 우승하셨다니, 복식에서는 정말 뛰어났던 선수네요.
   155.75s  agent 발화 끝
   160.98s  agent 발화 시작: 때로는 한 분야보다 다른 분야에서 재능을 발휘하는 경우가 있습니다.
   161.14s  user  발화 끝
   165.51s  agent 발화 끝
   165.70s  user  발화 시작: 맞는 말이에요. 두 분 선수 모두 테니스에서 훌륭한 업적을 남기셨네요.
   171.08s  user  발화 끝
   171.46s  agent 발화 시작: 변화의 과정에서 아름다움을 발견하는 것이 중요합니다.
   175.17s  agent 발화 끝
   176.44s  user  발화 시작: [laugh] 네, 맞아요. 좋은 말씀을 해주셔서 감사합니다.
   181.99s  user  발화 끝
   182.00s  agent 발화 시작: 도움이 되었다니 기쁩니다.
   183.79s  agent 발화 끝
