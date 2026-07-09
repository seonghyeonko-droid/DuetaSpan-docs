# v3_rag_25_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# EXAMINER(FDB-v2) 단계: S1 잭 소크랑 라파엘라 레지와 어떤 스포츠를 같이 했는지 궁금해요 | S2 잭 소크 선수는 주로 어떤 스타일의 경기를 하는 선수예요? | S3 두 분이 왜 같이 경기를 하게 됐는지 궁금하네요. | S4 어릴 때부터군요. 라파엘라 레지 선수는요?

     0.00s  user  발화 시작: 잭 소크랑 라파엘라 레지와 어떤 스포츠를 같이 했는지 궁금해요.
     5.13s  user  발화 끝
     5.38s  agent 발화 시작: 두 분이 함께한 스포츠에 대해 알아볼까요?
     7.89s  <ret> 발화 (turn2 첫 프레임)
     8.28s  agent 발화 시작: <ret> 두 분은 테니스 선수로 활동하셨습니다. 잭 소크 선수와 라파엘라 레지 선수는 모두 프로 테니스 선
     8.38s  agent 발화 끝
     9.09s  ⚡SPAN 주입 [d'=1.20s / d_lead=2.66s]: Jack Sock and Raffaella Reggi are both professional tennis players.
    12.72s  user  발화 시작: Mm-hmm.
    13.36s  user  발화 끝
    16.25s  agent 발화 끝
    16.26s  user  발화 시작: 음, 테니스요? 그 두 분이 같이 뛴 경기가 있었던가요?
    21.23s  agent 발화 시작: 두 분이 함께 경기했던 적이 있는지 확인해 볼게요.
    21.25s  user  발화 끝
    24.34s  <ret> 발화 (turn6 첫 프레임)
    24.47s  agent 발화 끝
    24.49s  agent 발화 시작: <ret> 두 분은 혼합 복식에서 한 번 파트너십을 맺었습니다. 잭 소크 선수와 라파엘라 레지 선수는 202
    25.86s  ⚡SPAN 주입 [d'=1.52s / d_lead=4.29s]: Jack Sock and Raffaella Reggi partnered in mixed doubles at the 2020 T
    35.76s  agent 발화 끝
    36.59s  user  발화 시작: 아, 올림픽에서요? 그런데 그 경기 결과는 어땠어요?
    41.04s  agent 발화 시작: 그 경기 결과에 대해서도 알려드릴 수 있습니다.
    41.17s  user  발화 끝
    43.44s  <ret> 발화 (turn9 첫 프레임)
    43.84s  agent 발화 시작: <ret> 안타깝게도 두 분은 16강에서 탈락했습니다. 잭 소크 선수와 라파엘라 레지 선수는 2020 도쿄 
    44.00s  agent 발화 끝
    44.48s  ⚡SPAN 주입 [d'=1.04s / d_lead=2.89s]: Jack Sock and Raffaella Reggi lost in the round of 16 in the mixed dou
    54.06s  user  발화 시작: 16강이라… 좀 아쉽네요. 그래도 올림픽에 나갔다는 것 자체가 대단한데요.
    54.23s  agent 발화 끝
    59.55s  agent 발화 시작: 맞아요. 올림픽 출전은 선수에게 큰 의미가 있죠.
    59.61s  user  발화 끝
    60.90s  user  발화 시작: Yeah.
    61.53s  user  발화 끝
    63.55s  agent 발화 시작: 혹시 다른 테니스 선수에 대해 궁금한 점이 있으신가요?
    63.71s  agent 발화 끝
    65.42s  user  발화 시작: Yeah.
    66.01s  user  발화 끝
    67.21s  agent 발화 끝
    67.21s  user  발화 시작: 잭 소크 선수는 주로 어떤 스타일의 경기를 하는 선수예요?
    71.56s  user  발화 끝
    71.97s  agent 발화 시작: 잭 소크 선수의 경기 스타일에 대해 설명해 드릴게요.
    75.31s  <ret> 발화 (turn17 첫 프레임)
    75.62s  agent 발화 시작: <ret> 그는 강력한 서브와 공격적인 베이스라인 플레이로 유명합니다. 잭 소크 선수는 강력한 서브와 공격적
    75.76s  agent 발화 끝
    77.31s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.12s]: Jack Sock is known for his powerful serve and aggressive baseline game
    85.59s  user  발화 시작: 공격적인 스타일이군요. 라파엘라 레지 선수는요?
    85.64s  agent 발화 끝
    90.13s  user  발화 끝
    90.14s  agent 발화 시작: 라파엘라 레지 선수의 경기 스타일도 알아볼까요?
    92.68s  <ret> 발화 (turn20 첫 프레임)
    93.06s  agent 발화 시작: <ret> 그녀는 뛰어난 수비력과 카운터 펀칭 능력이 돋보입니다. 라파엘라 레지 선수는 뛰어난 수비력과 카운
    93.28s  agent 발화 끝
    94.44s  ⚡SPAN 주입 [d'=1.76s / d_lead=4.40s]: Raffaella Reggi is recognized for her strong defensive skills and coun
   103.12s  agent 발화 끝
   104.28s  user  발화 시작: 수비적인 스타일이네요. 두 분의 스타일이 꽤 다르군요?
   108.19s  agent 발화 시작: 네, 두 분의 스타일은 상반되는 매력을 가지고 있습니다.
   108.35s  user  발화 끝
   110.40s  user  발화 시작: Yeah.
   111.12s  user  발화 끝
   111.63s  user  발화 시작: 두 분이 왜 같이 경기를 하게 됐는지 궁금하네요.
   111.89s  agent 발화 끝
   115.38s  user  발화 끝
   115.76s  agent 발화 시작: 두 분이 함께 경기를 하게 된 배경을 설명해 드릴게요.
   119.73s  <ret> 발화 (turn26 첫 프레임)
   119.80s  agent 발화 시작: <ret> 두 분은 올림픽 혼합 복식 출전을 위해 파트너십을 맺었습니다. 잭 소크 선수와 라파엘라 레지 선수
   120.02s  agent 발화 끝
   120.23s  ⚡SPAN 주입 [d'=0.50s / d_lead=4.84s]: Jack Sock and Raffaella Reggi were paired together for the mixed doubl
   131.57s  user  발화 시작: 올림픽 출전이 목적이었군요. 특별한 이유가 있었나요?
   131.62s  agent 발화 끝
   136.11s  user  발화 끝
   136.12s  agent 발화 시작: 특별한 이유가 있었는지 알아볼까요?
   138.08s  <ret> 발화 (turn29 첫 프레임)
   138.47s  agent 발화 시작: <ret> 두 분 모두 자국을 대표하는 선수로서 올림픽 출전을 희망했습니다. 잭 소크 선수와 라파엘라 레지 
   138.61s  agent 발화 끝
   140.08s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.05s]: Both Jack Sock and Raffaella Reggi expressed a desire to represent the
   146.36s  user  발화 시작: Mm-hmm.
   147.00s  user  발화 끝
   150.06s  user  발화 시작: 아, 자국 대표였군요. 혹시 두 분의 국적은 어떻게 되나요?
   150.25s  agent 발화 끝
   154.48s  agent 발화 시작: 두 분의 국적에 대해 알려드리겠습니다.
   154.55s  user  발화 끝
   157.05s  <ret> 발화 (turn33 첫 프레임)
   157.20s  agent 발화 시작: <ret> 잭 소크 선수는 미국 국적이고, 라파엘라 레지 선수는 이탈리아 국적입니다. 잭 소크 선수는 미국 
   157.29s  agent 발화 끝
   159.05s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.73s]: Jack Sock is American, and Raffaella Reggi is Italian.
   168.33s  user  발화 시작: 미국과 이탈리아군요. 두 분이 테니스를 시작하게 된 계기가 궁금해요.
   168.66s  agent 발화 끝
   173.71s  agent 발화 시작: 두 분이 테니스를 시작하게 된 계기에 대해 알아볼까요?
   173.74s  user  발화 끝
   176.71s  <ret> 발화 (turn36 첫 프레임)
   177.10s  agent 발화 시작: <ret> 잭 소크 선수는 어린 시절부터 테니스를 즐겼다고 합니다. 잭 소크 선수는 어릴 때부터 테니스를 즐
   177.31s  agent 발화 끝
   178.71s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.49s]: Jack Sock began playing tennis at a young age and enjoyed the sport.
   186.09s  agent 발화 끝
   186.22s  user  발화 시작: 어릴 때부터군요. 라파엘라 레지 선수는요?
   190.03s  agent 발화 시작: 라파엘라 레지 선수의 테니스 시작 계기도 알려드릴게요.
   190.06s  user  발화 끝
   193.58s  <ret> 발화 (turn39 첫 프레임)
   193.89s  agent 발화 시작: <ret> 그녀는 가족의 영향으로 테니스를 시작하게 되었다고 합니다. 라파엘라 레지 선수는 가족의 영향으로 
   193.96s  agent 발화 끝
   194.78s  ⚡SPAN 주입 [d'=1.20s / d_lead=3.79s]: Raffaella Reggi started playing tennis due to the influence of her fam
   202.00s  agent 발화 끝
   202.36s  user  발화 시작: 가족의 영향이 있었군요. 두 분 다 테니스를 좋아해서 시작했네요.
   207.36s  user  발화 끝
   207.41s  agent 발화 시작: 네, 두 분 모두 테니스에 대한 애정을 가지고 시작한 것 같습니다.
   209.84s  user  발화 시작: Uh-huh.
   210.61s  user  발화 끝
   211.67s  agent 발화 끝
   211.75s  user  발화 시작: 오늘 이야기를 들으니 두 분에 대해 더 잘 알게 된 것 같아요. 감사합니다.
   217.68s  user  발화 끝
   217.73s  agent 발화 시작: 도움이 되었다니 기쁩니다. 혹시 다른 궁금한 점은 없으신가요?
   222.32s  agent 발화 끝
