# v3_to_ot_15_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 혹시 '콜 더 미드와이프'에서 트릭시 프랭클린 역을 맡은 배우가 누구인지 아세요?
     4.32s  <ret> 발화 (turn1 첫 프레임)
     4.92s  agent 발화 시작: <ret> 네, 정말 좋은 드라마죠. 트릭시 프랭클린 역은 헬렌 조지가 연기했어요. 정말 재능 있는 배우시죠
     5.00s  user  발화 끝
     5.32s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.20s]: Helen George plays Trixie Franklin in Call the Midwife.
    12.60s  user  발화 시작: 아, 맞다… 헬렌 조지였군요. 다른 작품에는 뭐가 있었나요?
    12.62s  agent 발화 끝
    16.06s  <ret> 발화 (turn3 첫 프레임)
    16.14s  ⚡SPAN 주입 [d'=0.08s / d_lead=0.73s]: Helen George also played Jacqueline de Séze in Doctors.
    16.66s  agent 발화 시작: <ret> 그녀는 다재다능하시답니다. 헬렌 조지는 '닥터스'에서 자클린 드 세즈 역할로도 출연하셨어요.
    16.76s  user  발화 끝
    19.10s  agent 발화 끝
    20.70s  user  발화 시작: 닥터스요? 제가— 그러니까, 그건 낮 시간대에 하는 드라마 맞죠?
    25.56s  agent 발화 시작: 네, 맞습니다. 오랫동안 방영된 영국 의료 드라마예요.
    25.70s  user  발화 끝
    34.65s  agent 발화 끝
    34.97s  user  발화 시작: 쓰레기통은 내놓으셨어요?
    40.34s  user  발화 끝
    40.46s  user  발화 시작: 죄송한데요, 어디까지 얘기했었죠? 아, 네, 헬렌 조지 말이에요. 영화는 출연해 봤나요?
    47.58s  <ret> 발화 (turn8 첫 프레임)
    48.17s  agent 발화 시작: <ret> 영화 역할도 몇 편 하셨답니다. 헬렌 조지는 '콜 더 미드와이프' 출연 전에 '더 빌'과 '홀비 
    48.20s  user  발화 끝
    48.58s  ⚡SPAN 주입 [d'=1.00s / d_lead=1.53s]: Helen George appeared in The Bill and Holby City before Call the Midwi
    52.52s  agent 발화 끝
    52.94s  user  발화 시작: 콜 더 미드와이프 이전이요? 흥미롭네요. 항상 배우였던 건가요?
    53.83s  <ret> 발화 (turn10 첫 프레임)
    54.29s  agent 발화 시작: <ret> 어린 나이에 훈련을 시작했던 것 같아요.
    54.45s  user  발화 끝
    54.83s  ⚡SPAN 주입 [d'=1.00s / d_lead=5.32s]: Helen George trained at the Royal Academy of Dramatic Art from 2000 to
    59.12s  agent 발화 시작: 헬렌 조지는 2002년에서 2003년 사이에 RADA에서 훈련을 받으셨어요.
    59.61s  agent 발화 끝
    61.70s  agent 발화 끝
    62.42s  user  발화 시작: RADA, 와우. 대단하네요. 영국 사람인가요?
    69.13s  <ret> 발화 (turn13 첫 프레임)
    69.21s  ⚡SPAN 주입 [d'=0.08s / d_lead=1.21s]: Helen George was born in Birmingham, England, on September ten, ninete
    69.64s  user  발화 끝
    69.72s  agent 발화 시작: <ret> 네, 맞아요. 자랑스러운 영국인이시랍니다. 헬렌 조지는 1986년 9월 10일에 영국 버밍엄에서 
    72.43s  user  발화 시작: 9월 10일… 그럼 처녀자리네요? [laugh]
    72.63s  agent 발화 끝
    80.52s  agent 발화 시작: [laugh] 정말 날카로운 관찰력이시네요.
    80.54s  user  발화 끝
    83.60s  user  발화 시작: 결혼은 하셨나요?
    83.67s  agent 발화 끝
    86.67s  <ret> 발화 (turn17 첫 프레임)
    86.99s  ⚡SPAN 주입 [d'=0.32s / d_lead=0.97s]: Helen George is married to Oliver Boot, a fellow actor.
    87.26s  agent 발화 시작: <ret> 네, 하셨어요. 헬렌 조지는 배우인 올리버 부트와 결혼하셨답니다.
    87.30s  user  발화 끝
    89.84s  agent 발화 끝
