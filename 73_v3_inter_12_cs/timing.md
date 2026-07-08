# v3_inter_12_cs — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 어디서 끝나는지 궁금하구나. 진짜 여러 얘기가 있잖아.
     3.74s  <ret> 발화 (turn1 첫 프레임)
     4.17s  user  발화 끝
     4.34s  agent 발화 시작: <ret> 뭐, 생각보다 복잡한 질문이네.
     4.74s  ⚡SPAN 주입 [d'=1.00s / d_lead=4.07s]: The Great Wall of China stretches over ten thousand li, ending at Lop 
     8.38s  agent 발화 시작: 가장 서쪽 끝은 Lop Lake에 있어.
     8.41s  agent 발화 끝
     9.97s  user  발화 시작: Lop Lake? 처음 듣는데. 거기가 어때?
    10.08s  agent 발화 끝
    13.04s  <ret> 발화 (turn4 첫 프레임)
    13.52s  ⚡SPAN 주입 [d'=0.48s / d_lead=2.30s]: Lop Lake is a salt lake located in the Taklamakan Desert, Gansu Provin
    13.62s  agent 발화 시작: <ret> 솔직히 좀 황량한 곳이야.
    13.81s  user  발화 끝
    15.88s  agent 발화 시작: 엄청 외딴 곳이지. Lop Lake는 중국 간쑤성 Taklamakan Desert 안에 있어. 환경이 엄청 
    15.92s  agent 발화 끝
    19.48s  agent 발화 끝
    19.55s  user  발화 시작: Taklamakan Desert… 뭔가… 엄청 세게 느껴진다. 아직도 거기 호수에서 남아 있어?
    22.96s  user  발화 끝
    23.02s  agent 발화 시작: Lop Lake 근처 부분들은—
    27.96s  user  발화 시작: 근데 *보여*? 진짜 거기서 *벽이 끝나는 걸* 볼 수 있어?
    28.67s  agent 발화 끝
    31.25s  <ret> 발화 (turn9 첫 프레임)
    31.66s  user  발화 끝
    31.84s  agent 발화 시작: <ret> 좋은 질문이다. Lop Lake 근처 벽은 침식이랑 모래폭풍 때문에 많이 망가졌어. 안타깝게도 대
    32.05s  ⚡SPAN 주입 [d'=0.80s / d_lead=1.68s]: Erosion and sandstorms have significantly damaged the wall’s remains n
    37.73s  agent 발화 끝
    38.52s  user  발화 시작: 어, 대박. 그럼 거의… 폐허만 남았다는 거야? 좀 슬프네.
    40.09s  user  발화 끝
    40.11s  agent 발화 시작: 시간의 힘을 보여주는 슬픈 기억이지, 그렇지? 얼음 조각이 녹는 모습도 비슷하더라.
    46.88s  agent 발화 끝
