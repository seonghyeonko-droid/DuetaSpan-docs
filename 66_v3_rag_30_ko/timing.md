# v3_rag_30_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 어, 옛날 배에 대해 읽다가… 음, 증기선이 언제 처음 발명됐는지 궁금해졌어.
     5.81s  agent 발화 시작: 정말 흥미로운 질문이네요, 해양 기술의 기원을 추적하는 거군요.
     5.98s  user  발화 끝
     9.84s  user  발화 시작: 그래, 언젠가는 그렇게 될 것 같았거든. 근데 언제 된 거야?
    10.11s  agent 발화 끝
    12.91s  <ret> 발화 (turn3 첫 프레임)
    13.51s  agent 발화 시작: <ret> 알려 드릴게요. 최초의 증기선은 1783년에 마르키 드 주프루아 다방스가 발명했어요.
    13.63s  user  발화 끝
    13.91s  ⚡SPAN 주입 [d'=1.00s / d_lead=4.64s]: The first steam-powered paddle boat was invented in 1783 by Marquis de
    21.24s  agent 발화 끝
    21.70s  user  발화 시작: 와, 1783년! 생각보다 훨씬 빠르네. 해군 엔지니어 같은 사람이었어?
    27.11s  agent 발화 시작: 실제로 다양한 분야에 관심이 있는 발명가였어요.
    27.25s  user  발화 끝
    30.34s  agent 발화 끝
    31.62s  user  발화 시작: 흥미롭네. 배가 컸어? 뭐, 실제로 쓸모 있는 걸 했어?
    34.47s  <ret> 발화 (turn7 첫 프레임)
    35.07s  agent 발화 시작: <ret> 그렇게 크지는 않았어요. *피라미드*는 길이가 12미터였고, 소느 강에서 거슬러 올라가는 데 성공
    35.32s  user  발화 끝
    35.47s  ⚡SPAN 주입 [d'=1.00s / d_lead=3.59s]: Jouffroy’s boat, the *Pyramide*, was twelve meters long and successful
    42.25s  agent 발화 끝
    42.54s  user  발화 시작: 12미터… 괜찮네. 소느 강은 프랑스에 있나? 지리 감각이 엉망이라서.
    48.20s  agent 발화 시작: 네, 론 강의 주요 지류예요.
    48.29s  user  발화 끝
    50.68s  agent 발화 끝
    51.36s  user  발화 시작: 그래, 그래. 흠. 비슷한 시기에 증기선을 만들려고 한 다른 사람도 있었어?
    55.28s  <ret> 발화 (turn11 첫 프레임)
    55.87s  agent 발화 시작: <ret> 다른 사람들도 실험을 하고 있었죠. 윌리엄 심핑턴은 1802년에 포스 앤 클라이드 운하에서 견인용
    55.94s  user  발화 끝
    56.24s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.37s]: William Symington built a steam boat for the Forth and Clyde Canal in 
    64.78s  agent 발화 끝
    64.78s  user  발화 시작: 견인? 승객용은 아니었나? 뭐, 실용적이긴 하겠네.
    68.67s  agent 발화 시작: 그 기술의 잠재력을 보여주는 중요한 단계였어요.
    68.84s  user  발화 끝
    72.00s  agent 발화 끝
    72.52s  user  발화 시작: 휴… 그렇게 제대로 작동하는 데 얼마나 오래 걸리는지 정말 놀라워.
    76.19s  <ret> 발화 (turn15 첫 프레임)
    76.78s  agent 발화 시작: <ret> 초기 공학은 많은 어려움에 직면했어요. 로버트 풀턴은 1807년에 *클레르몽*에 대한 미국 특허를
    76.87s  user  발화 끝
    77.19s  ⚡SPAN 주입 [d'=1.00s / d_lead=3.11s]: Robert Fulton received a U.S. patent for a commercially successful ste
    86.10s  agent 발화 끝
    86.66s  user  발화 시작: 1807년… 풀턴은 좀 더 나중에 나왔네. 배 생김새가 많이 달랐어?
    91.98s  user  발화 끝
    92.43s  agent 발화 시작: 승객 수송을 위해 설계된 더 세련된 디자인이었어요.
    96.28s  agent 발화 끝
    96.74s  user  발화 시작: 그럴 만하네. 그럼 주프루아가 먼저 발명했는데, 풀턴이 모든 걸 다 가져갔어?
   100.73s  <ret> 발화 (turn19 첫 프레임)
   101.32s  agent 발화 시작: <ret> 역사는 종종 복잡해요. 주프루아가 증기선을 개척했지만, 풀턴의 *클레르몽*이 미국에서 증기 항해를
   101.55s  user  발화 끝
   101.73s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.70s]: Though Jouffroy pioneered the steam boat, Fulton’s *Clermont* is often
   109.43s  agent 발화 끝
