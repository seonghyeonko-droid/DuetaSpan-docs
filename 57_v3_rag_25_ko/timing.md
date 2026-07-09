# v3_rag_25_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# EXAMINER(FDB-v2) 단계: S1 잭 소크 선수랑 라파엘라 레지 선수 둘 다 무슨 스포츠를 했는 | S2 테니스군요? 알겠습니다. 그런데 레지 선수… 은퇴하신 지 꽤  | S3 잠깐만요, 두 천십육 년… 소크 선수는 그때쯤이면 커리어 초반 | S4 그렇다면 레지 선수가 은퇴하는 동안에도 소크 선수는 계속 경기

     0.00s  user  발화 시작: 잭 소크 선수랑 라파엘라 레지 선수 둘 다 무슨 스포츠를 했는지 궁금했어요.
     5.37s  user  발화 끝
     5.44s  agent 발화 시작: 좋은 질문이세요—많은 운동선수들이 여러 종목을 하잖아요.
     8.92s  <ret> 발화 (turn2 첫 프레임)
     9.23s  agent 발화 시작: <ret> 두 분이 어떤 스포츠로 활동하셨는지 잠깐 확인해 볼게요. 두 분 모두 프로 테니스 선수로 활동하셨
     9.33s  agent 발화 끝
    10.92s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.85s]: Jack Sock and Raffaella Reggi are both professional tennis players.
    16.41s  user  발화 시작: 테니스군요? 알겠습니다. 그런데 레지 선수… 은퇴하신 지 꽤 된 것 같기도 해요.
    16.46s  agent 발화 끝
    22.01s  user  발화 끝
    22.40s  agent 발화 시작: 네, 그러셨어요. 안타깝게도 선수 생활은 영원히 이어질 수는 없죠.
    27.45s  <ret> 발화 (turn5 첫 프레임)
    27.85s  agent 발화 시작: <ret> 레지 선수가 언제 은퇴하셨는지 확인해 드릴 수 있어요. 레지 선수는 이천십육 년에 프로 테니스에서
    28.00s  agent 발화 끝
    29.45s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.69s]: Raffaella Reggi retired from professional tennis in two thousand and s
    36.32s  user  발화 시작: 잠깐만요, 두 천십육 년… 소크 선수는 그때쯤이면 커리어 초반이었던 것 아닌가요?
    36.38s  agent 발화 끝
    42.30s  agent 발화 시작: 맞아요, 질문하신 대로 시기가 꽤 대비되네요.
    42.30s  user  발화 끝
    45.02s  <ret> 발화 (turn8 첫 프레임)
    45.42s  agent 발화 시작: <ret> 잭 소크 선수가 언제 프로로 전향했는지 알아볼까요. 잭 소크 선수는 이천십 년에 프로로 전향했습니
    45.52s  agent 발화 끝
    47.02s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.15s]: Jack Sock began his professional tennis career in two thousand ten.
    52.52s  user  발화 시작: 그렇다면 레지 선수가 은퇴하는 동안에도 소크 선수는 계속 경기를 했군요. 흥미롭네요. 혹시 두 분 다 그랜드
    52.69s  agent 발화 끝
    61.48s  agent 발화 시작: 이제 기억해 두면 좋을 만한 정보네요.
    61.70s  user  발화 끝
    63.81s  <ret> 발화 (turn11 첫 프레임)
    64.12s  agent 발화 시작: <ret> 두 분의 그랜드 슬램 성적을 확인해 드릴 수 있습니다. 잭 소크 선수는 복식에서 한 번 우승했고,
    64.16s  agent 발화 끝
    65.73s  ⚡SPAN 주입 [d'=1.92s / d_lead=4.09s]: Jack Sock won one Grand Slam title in doubles, and Raffaella Reggi nev
    73.67s  agent 발화 끝
