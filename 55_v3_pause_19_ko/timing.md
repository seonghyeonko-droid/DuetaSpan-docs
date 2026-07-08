# v3_pause_19_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 어, 레고 닌자고 시즌 7 언제 나왔는지 알아?
     4.99s  <ret> 발화 (turn1 첫 프레임)
     5.59s  agent 발화 시작: <ret> 음, 레고 닌자고 시즌 7은 2017년 5월 15일에 처음 방영됐어요.
     5.65s  user  발화 끝
     5.99s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.39s]: May 15, 2017 was the release date for Lego Ninjago season seven.
    11.57s  agent 발화 끝
    11.61s  user  발화 시작: 와, 진짜 오래됐네… 아, 궁금한 게 있는데—
    15.92s  agent 발화 시작: 뭘 궁금해 하세요?
    16.05s  user  발화 끝
    18.79s  agent 발화 끝
    20.34s  user  발화 시작: 그러니까, 여행에 대해 생각하고 있었어. 조카랑 레고 테마로 여행 가려고 하는데, 캘리포니아 레고랜드에 닌자
    24.57s  <ret> 발화 (turn5 첫 프레임)
    25.16s  agent 발화 시작: <ret> 네, 캘리포니아 레고랜드에는 닌자고 지역이 있어요. 닌자고 월드는 2017년 6월에 레고랜드 캘리
    25.39s  user  발화 끝
    25.57s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.48s]: Legoland California features Ninjago World, which opened June 2017, in
    32.95s  agent 발화 끝
