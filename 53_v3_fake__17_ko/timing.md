# v3_fake__17_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 누가 빅 브라더 나이지아 작년에 이겼어?
     5.91s  <ret> 발화 (turn1 첫 프레임)
     6.51s  agent 발화 시작: <ret> 그거 많이 물어보시네요! 에페가 2017년에 빅 브라더 나이지아에서 우승했었어요.
     6.58s  user  발화 끝
     6.91s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.37s]: Efe won Big Brother Naija in 2017.
    11.83s  agent 발화 끝
    12.45s  user  발화 시작: 아, 2017년… 진짜 오래된 것 같지 않아?
    21.31s  agent 발화 시작: 시간이 정말 빠르네요, 그러시죠?
    21.40s  user  발화 끝
    26.70s  user  발화 시작: 걔가 그때 이후에 뭘 하고 있는지 알아?
    26.73s  agent 발화 끝
    29.64s  <ret> 발화 (turn5 첫 프레임)
    30.23s  agent 발화 시작: <ret> 정보가 좀 있어요. 에페는 2018년에 “Based on Logistics”라는 제목의 첫 싱글을
    30.50s  user  발화 끝
    30.64s  ⚡SPAN 주입 [d'=1.00s / d_lead=1.90s]: Efe released his first single, "Based on Logistics," in 2018.
    35.93s  agent 발화 끝
    36.04s  user  발화 시작: “Based on Logistics”? 그거… 꽤 특이한 제목인데. [laugh]
    44.01s  agent 발화 시작: 정말 기억에 남는 제목이네요!
    44.10s  user  발화 끝
    48.49s  agent 발화 끝
    49.33s  user  발화 시작: 그거 잘 됐는지 궁금하다. 찾아봐 줄 수 있어?
    55.45s  <ret> 발화 (turn9 첫 프레임)
    56.04s  agent 발화 시작: <ret> 제가 한번 찾아볼게요. “Based on Logistics”는 나이지리아 아이튠즈 차트에서 3위를
    56.28s  user  발화 끝
    56.45s  ⚡SPAN 주입 [d'=1.00s / d_lead=4.10s]: "Based on Logistics" peaked at number three on the Nigerian iTunes cha
    63.50s  user  발화 시작: 3위면 꽤 괜찮은데!
    63.55s  agent 발화 끝
    65.85s  agent 발화 시작: 훌륭한 성적이라고 생각해요.
    65.90s  user  발화 끝
    68.01s  user  발화 시작: 에페 다음 우승자는 누구야?
    68.16s  agent 발화 끝
    69.82s  <ret> 발화 (turn13 첫 프레임)
    70.41s  agent 발화 시작: <ret> 다음 우승자는 미라클이었어요. 미라클이 2018년에 빅 브라더 나이지아에서 우승했었어요.
    70.50s  user  발화 끝
    70.82s  ⚡SPAN 주입 [d'=1.00s / d_lead=3.78s]: Miracle emerged as the winner of Big Brother Naija in 2018.
    77.22s  agent 발화 끝
    77.24s  user  발화 시작: 미라클은 뭐 해?
    78.27s  <ret> 발화 (turn15 첫 프레임)
    78.86s  agent 발화 시작: <ret> 그는 조종사예요. 미라클은 훈련받은 조종사이고 상업용 조종사 면허를 가지고 있어요.
    78.89s  user  발화 끝
    79.27s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.25s]: Miracle is a trained pilot and holds a commercial pilot license.
    86.37s  agent 발화 끝
    86.44s  user  발화 시작: 와, 조종사라니! 리얼리티 TV랑은 완전 다르네.
    91.05s  agent 발화 시작: 여러 가지 열정을 추구하는 건 정말 멋진 일이라고 생각하지 않으세요?
    91.07s  user  발화 끝
    95.54s  agent 발화 끝
