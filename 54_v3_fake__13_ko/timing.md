# v3_fake__13_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# EXAMINER(FDB-v2) 단계: S1 언제 데미 로바토 새 앨범 나와? 올해 나온다던데. | S2 아, 그래? 이미 나왔어? 아직 나올 거라고 생각했거든. | S3 투어 한다면 꼭 보고 싶어. | S4 그건 좀 됐네. 더 최근에 한 거 있어?

     0.00s  user  발화 시작: 언제 데미 로바토 새 앨범 나와? 올해 나온다던데.
     3.84s  user  발화 끝
     3.92s  agent 발화 시작: 음, 좋은 질문이야—음악은 정말 아름다운 표현 방식이지.
     8.83s  agent 발화 끝
     9.01s  user  발화 시작: 응, 걔 노래 진짜 좋아해.
    10.65s  <ret> 발화 (turn3 첫 프레임)
    10.97s  agent 발화 시작: <ret> 알아볼게—*Confident* 앨범은 이천십오년 시월에 나왔어.
    10.99s  user  발화 끝
    11.85s  ⚡SPAN 주입 [d'=1.20s / d_lead=4.17s]: Demi Lovato's fifth studio album, *Confident*, was released in October
    14.73s  user  발화 시작: 아, 그래? 이미 나왔어? 아직 나올 거라고 생각했거든.
    15.14s  agent 발화 끝
    18.39s  <ret> 발화 (turn5 첫 프레임)
    18.42s  user  발화 끝
    18.53s  agent 발화 시작: <ret> 그렇대—가끔 정보가 헷갈릴 때가 있어, 발매일이 바뀌기도 하거든.
    20.39s  ⚡SPAN 주입(IRRELEVANT) [d'=2.00s / d_lead=4.81s]: The platypus is a semi-aquatic mammal endemic to eastern Australia, in
    21.64s  user  발화 시작: 응.
    22.28s  user  발화 끝
    23.34s  agent 발화 끝
    23.55s  user  발화 시작: 그럼 앨범이랑 같이 투어 하니?
    25.34s  user  발화 끝
    25.68s  agent 발화 시작: 오—물어볼 만한 아주 좋은 질문이야!
    28.41s  agent 발화 끝
    28.82s  user  발화 시작: 투어 한다면 꼭 보고 싶어.
    30.62s  agent 발화 시작: 많은 가수들이 새 앨범을 홍보하기 위해 투어를 하잖아—팬들과 소통할 수 있는 좋은 방법이야.
    30.62s  user  발화 끝
    36.96s  agent 발화 끝
    37.25s  user  발화 시작: 응.
    37.40s  <ret> 발화 (turn12 첫 프레임)
    37.55s  user  발화 끝
    37.55s  agent 발화 시작: <ret> 투어 정보도 찾아볼 수 있어—이천십육년에 닉 조나스랑 Future Now 투어를 했어.
    38.84s  ⚡SPAN 주입 [d'=1.44s / d_lead=4.36s]: Demi Lovato embarked on the Future Now Tour in 2016, alongside Nick Jo
    40.26s  user  발화 시작: 어.
    40.76s  user  발화 끝
    42.88s  agent 발화 끝
    43.91s  user  발화 시작: 그건 좀 됐네. 더 최근에 한 거 있어?
    46.54s  user  발화 끝
    46.67s  agent 발화 시작: 맞아, 물어봐야지—최근 콘서트 계획을 알아볼까.
    49.97s  <ret> 발화 (turn16 첫 프레임)
    50.35s  agent 발화 시작: <ret> 좀만 기다려봐, 업데이트된 정보가 있는지—마지막 투어는 이천십팔년에 끝났어, Tell Me You
    50.42s  agent 발화 끝
    51.57s  ⚡SPAN 주입 [d'=1.60s / d_lead=3.87s]: Demi Lovato’s most recent tour concluded in 2018 with the Tell Me You 
    54.00s  user  발화 시작: 음.
    54.63s  user  발화 끝
    58.09s  agent 발화 끝
    58.26s  user  발화 시작: 아, 그럼 지금은 계획된 게 없는 거네? 아쉽다.
    61.62s  user  발화 끝
    61.80s  agent 발화 시작: 그렇긴 한데, 가수들은 종종 예고 없이 새 투어를 발표하기도 하니까—기대해 봐! 새 앨범이 나오면 새로운 공
    71.17s  agent 발화 끝
